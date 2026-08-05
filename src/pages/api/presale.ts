import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { logLead } from "../../lib/presale-store";
import { presaleProducts } from "../../content/presale";

const json = (status: number, body: Record<string, unknown>) =>
	new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

async function notifyByEmail(subject: string, fields: Record<string, unknown>) {
	const host = import.meta.env.SMTP_HOST;
	const user = import.meta.env.SMTP_USER;
	const pass = import.meta.env.SMTP_PASS;
	if (!host || !user || !pass) return;
	const to = import.meta.env.LEAD_NOTIFY_TO || "contact@growthroom.eu";
	const transporter = nodemailer.createTransport({
		host,
		port: Number(import.meta.env.SMTP_PORT ?? 465),
		secure: Number(import.meta.env.SMTP_PORT ?? 465) === 465,
		auth: { user, pass },
	});
	const text = Object.entries(fields)
		.map(([k, v]) => `${k}: ${String(v ?? "")}`)
		.join("\n");
	await transporter.sendMail({ from: `"Presale" <${user}>`, to, subject, text });
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const payload = await request.json();

		const product = String(payload?.product ?? "").trim();
		const name = String(payload?.name ?? "").trim();
		const email = String(payload?.email ?? "").trim().toLowerCase();
		const segment = String(payload?.segment ?? "").trim();
		const wouldBuyAtPrice = Boolean(payload?.wouldBuyAtPrice);
		const marketingConsent = Boolean(payload?.marketingConsent);

		if (!presaleProducts[product]) return json(400, { ok: false, error: "unknown product" });
		if (!name || !email || !email.includes("@")) return json(400, { ok: false, error: "missing fields" });
		if (!marketingConsent) return json(400, { ok: false, error: "consent required" });

		let path = "";
		const utm = { source: "", medium: "", campaign: "" };
		try {
			const src = new URL(String(payload?.sourceUrl ?? ""), "https://growthroom.eu");
			path = src.pathname;
			utm.source = src.searchParams.get("utm_source") ?? "";
			utm.medium = src.searchParams.get("utm_medium") ?? "";
			utm.campaign = src.searchParams.get("utm_campaign") ?? "";
		} catch {}

		await logLead({ product, name, email, segment, wouldBuyAtPrice, marketingConsent, path, utm });

		notifyByEmail(`Lista de espera — ${presaleProducts[product].brand}: ${name}`, {
			produto: presaleProducts[product].brand,
			nome: name,
			email,
			segmento: segment,
			compraria_pelo_preco: wouldBuyAtPrice,
			pagina: path,
			utm_source: utm.source,
			utm_medium: utm.medium,
			utm_campaign: utm.campaign,
		}).catch((err) => console.error("[presale] email notify failed:", err));

		const webhookUrl = import.meta.env.PUBLIC_WEBHOOK_URL;
		if (webhookUrl) {
			fetch(webhookUrl, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					lead_type: "presale_waitlist",
					content_name: presaleProducts[product].brand,
					content_category: "presale",
					product,
					full_name: name,
					email,
					segment,
					would_buy_at_price: wouldBuyAtPrice,
					marketing_consent: marketingConsent,
					event_source_url: payload?.sourceUrl ?? "",
					submitted_at: new Date().toISOString(),
				}),
			}).catch((err) => console.error("[presale] webhook failed:", err));
		}

		return json(200, { ok: true });
	} catch {
		return json(500, { ok: false, error: "failed" });
	}
};
