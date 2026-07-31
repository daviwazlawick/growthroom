import type { APIRoute } from "astro";
import Stripe from "stripe";

// Preços em centavos — manter em sincronia com o front (/checkout)
const PRODUCT_PRICE = 2700;   // Launch Ads Blueprint — €27
const BUMP_PRICE    = 1900;   // AI Ads Blueprint (bump) — €19

const json = (status: number, body: Record<string, unknown>) =>
	new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

function stripeClient(): Stripe | null {
	const key = import.meta.env.STRIPE_SECRET_KEY;
	if (!key) return null;
	return new Stripe(key);
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const payload = await request.json();
		const stripe = stripeClient();
		const pk = import.meta.env.STRIPE_PUBLISHABLE_KEY ?? "";

		// Sem chaves → modo preview: o front mostra o placeholder do Payment Element
		if (!stripe || !pk) return json(200, { demo: true });

		const bump = payload?.bump === true;
		const amount = PRODUCT_PRICE + (bump ? BUMP_PRICE : 0);

		// ── Atualização de um intent existente (toggle do bump / email no pay) ──
		if (payload?.intent_id) {
			const params: Stripe.PaymentIntentUpdateParams = { amount };
			if (payload?.email) params.receipt_email = String(payload.email).trim().toLowerCase();
			const meta: Record<string, string> = { bump: String(bump) };
			if (payload?.email) meta.email = String(payload.email).trim().toLowerCase();
			if (payload?.name)  meta.name  = String(payload.name).trim();
			params.metadata = meta;
			const updated = await stripe.paymentIntents.update(String(payload.intent_id), params);
			return json(200, { ok: true, amount: updated.amount });
		}

		// ── Criação ──
		const attribution = payload?.attribution ?? {};
		const intent = await stripe.paymentIntents.create({
			amount,
			currency: "eur",
			automatic_payment_methods: { enabled: true },
			description: "Launch Ads Blueprint" + (bump ? " + AI Ads Blueprint" : ""),
			metadata: {
				product: "launch-ads-blueprint",
				bump: String(bump),
				fbp:  String(attribution.fbp  ?? ""),
				fbc:  String(attribution.fbc  ?? ""),
				utm_source:   String(attribution.utm_source   ?? ""),
				utm_campaign: String(attribution.utm_campaign ?? ""),
				event_source_url: String(attribution.url ?? ""),
			},
		});
		return json(200, { ok: true, client_secret: intent.client_secret, intent_id: intent.id, pk, amount });
	} catch (err) {
		console.error("[checkout] intent failed:", err);
		return json(500, { ok: false, error: "Payment setup failed." });
	}
};
