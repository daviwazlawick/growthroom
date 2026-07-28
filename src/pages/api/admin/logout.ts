import type { APIRoute } from "astro";

export const POST: APIRoute = async () =>
	new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"content-type": "application/json",
			"set-cookie": "gr_admin=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0",
		},
	});
