import type { APIRoute } from "astro";
import { isBot, logVideoView, MIN_VIEW_SECONDS, PLACEMENTS } from "../../lib/video-views";

const json = (status: number, body: unknown) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { "content-type": "application/json" },
	});

// Registado apenas quando o visitante já viu MIN_VIEW_SECONDS reais de vídeo.
// O cliente envia via sendBeacon, por isso a resposta é sempre curta.
export const POST: APIRoute = async ({ request }) => {
	try {
		const userAgent = request.headers.get("user-agent");
		// Bots contariam como audiência; descartados sem erro para não poluir logs.
		if (isBot(userAgent)) return json(202, { ok: true, counted: false });

		const payload = await request.json();

		const videoId = String(payload?.videoId ?? "").trim().slice(0, 80);
		const placement = String(payload?.placement ?? "").trim();
		const seconds = Number(payload?.seconds);

		if (!videoId) return json(400, { ok: false, error: "missing videoId" });
		if (!(PLACEMENTS as readonly string[]).includes(placement))
			return json(400, { ok: false, error: "unknown placement" });
		if (!Number.isFinite(seconds) || seconds < MIN_VIEW_SECONDS)
			return json(400, { ok: false, error: "below minimum watch time" });

		let page = "";
		let lang = "";
		const utm = { source: "", medium: "", campaign: "" };
		try {
			const src = new URL(String(payload?.sourceUrl ?? ""), "https://growthroom.eu");
			page = src.pathname;
			lang = page.startsWith("/de/") ? "de" : "en";
			utm.source = src.searchParams.get("utm_source") ?? "";
			utm.medium = src.searchParams.get("utm_medium") ?? "";
			utm.campaign = src.searchParams.get("utm_campaign") ?? "";
		} catch {}

		await logVideoView({
			videoId,
			placement,
			page,
			lang,
			// Limitado para que um separador esquecido aberto não escreva um número absurdo.
			seconds: Math.min(seconds, 60 * 60),
			referrer: String(payload?.referrer ?? "").slice(0, 300),
			userAgent,
			utmSource: utm.source,
			utmMedium: utm.medium,
			utmCampaign: utm.campaign,
		});

		return json(202, { ok: true, counted: true });
	} catch (err) {
		console.error("[video-view] failed:", err);
		return json(500, { ok: false });
	}
};
