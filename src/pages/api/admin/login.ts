import type { APIRoute } from "astro";
import crypto from "node:crypto";

const sha = (v: string) => crypto.createHash("sha256").update(v).digest();

export const POST: APIRoute = async ({ request }) => {
	const json = (status: number, body: Record<string, unknown>, headers: Record<string, string> = {}) =>
		new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });

	try {
		const { user, pass } = await request.json();
		const expectedUser = import.meta.env.ADMIN_USER ?? "";
		const expectedPass = import.meta.env.ADMIN_PASSWORD ?? "";
		const secret = import.meta.env.ADMIN_SECRET ?? "";

		if (!expectedUser || !expectedPass || !secret) {
			return json(500, { ok: false, error: "Admin auth not configured." });
		}

		const userOk = crypto.timingSafeEqual(sha(String(user ?? "")), sha(expectedUser));
		const passOk = crypto.timingSafeEqual(sha(String(pass ?? "")), sha(expectedPass));
		if (!userOk || !passOk) {
			await new Promise((r) => setTimeout(r, 600)); // desacelera brute force
			return json(401, { ok: false, error: "Invalid credentials." });
		}

		const exp = String(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 dias
		const sig = crypto.createHmac("sha256", secret).update(exp).digest("hex");
		const secure = import.meta.env.PROD ? "; Secure" : "";
		return json(200, { ok: true }, {
			"set-cookie": `gr_admin=${exp}.${sig}; HttpOnly${secure}; SameSite=Lax; Path=/; Max-Age=604800`,
		});
	} catch {
		return json(400, { ok: false, error: "Bad request." });
	}
};
