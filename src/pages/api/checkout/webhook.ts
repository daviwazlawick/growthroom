import type { APIRoute } from "astro";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import { mkdir, appendFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// chunks buildados vivem todos em dist/server/chunks/ — 3 níveis até a raiz
const dataDir = join(__dirname, "../../../data");
const purchasesFile = join(dataDir, "purchases.csv");
const csvHeader = "name,email,amountEur,bump,paymentIntent,createdAt\n";
const toCsv = (v: string) => `"${v.replace(/"/g, '""')}"`;

export const POST: APIRoute = async ({ request }) => {
	const secretKey = import.meta.env.STRIPE_SECRET_KEY;
	const whSecret  = import.meta.env.STRIPE_WEBHOOK_SECRET;
	if (!secretKey || !whSecret) return new Response("Not configured", { status: 503 });

	const stripe = new Stripe(secretKey);
	let event: Stripe.Event;
	try {
		const sig = request.headers.get("stripe-signature") ?? "";
		event = await stripe.webhooks.constructEventAsync(await request.text(), sig, whSecret);
	} catch {
		return new Response("Bad signature", { status: 400 });
	}

	if (event.type === "payment_intent.succeeded") {
		const pi = event.data.object as Stripe.PaymentIntent;
		const meta = pi.metadata ?? {};
		const email = pi.receipt_email ?? meta.email ?? "";
		const name  = meta.name ?? "";
		const amountEur = (pi.amount_received / 100).toFixed(2);
		const createdAt = new Date().toISOString();

		// ── CSV de compras ────────────────────────────────────────────
		try {
			await mkdir(dataDir, { recursive: true });
			try { await access(purchasesFile); }
			catch { await appendFile(purchasesFile, csvHeader, "utf8"); }
			await appendFile(purchasesFile, [
				toCsv(name), toCsv(email), toCsv(amountEur), toCsv(meta.bump ?? "false"),
				toCsv(pi.id), toCsv(createdAt),
			].join(",") + "\n", "utf8");
		} catch (err) { console.error("[checkout] csv failed:", err); }

		// ── n8n (log + futuro Purchase CAPI) ──────────────────────────
		const webhookUrl = import.meta.env.PUBLIC_WEBHOOK_URL;
		if (webhookUrl) {
			fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					lead_type: "purchase",
					event_id: pi.id,
					full_name: name,
					name,
					email,
					value: Number(amountEur),
					currency: "EUR",
					bump: meta.bump === "true",
					fbp: meta.fbp ?? "",
					fbc: meta.fbc ?? "",
					event_source_url: meta.event_source_url ?? "",
					utm_source: meta.utm_source ?? "",
					utm_campaign: meta.utm_campaign ?? "",
					product: "launch-ads-blueprint",
					submitted_at: createdAt,
				}),
			}).catch((err) => console.error("[checkout] n8n failed:", err));
		}

		// ── Aviso por e-mail (mesmo SMTP dos leads) ───────────────────
		const host = import.meta.env.SMTP_HOST, user = import.meta.env.SMTP_USER, pass = import.meta.env.SMTP_PASS;
		if (host && user && pass) {
			const transporter = nodemailer.createTransport({
				host, port: Number(import.meta.env.SMTP_PORT ?? 465),
				secure: Number(import.meta.env.SMTP_PORT ?? 465) === 465,
				auth: { user, pass },
			});
			transporter.sendMail({
				from: `"Growth Room Vendas" <${user}>`,
				to: import.meta.env.LEAD_NOTIFY_TO || "contact@growthroom.eu",
				subject: `💰 VENDA: ${name || email} — €${amountEur}${meta.bump === "true" ? " (com bump)" : ""}`,
				text: `nome: ${name}\nemail: ${email}\nvalor: €${amountEur}\nbump: ${meta.bump}\npayment_intent: ${pi.id}\norigem: ${meta.event_source_url}\ndata: ${createdAt}\n\nTODO: liberar acesso ao curso na Alfima para este e-mail.`,
			}).catch((err) => console.error("[checkout] mail failed:", err));
		}
	}

	return new Response(JSON.stringify({ received: true }), { status: 200 });
};
