import { defineMiddleware } from "astro:middleware";
import crypto from "node:crypto";

const SECRET = import.meta.env.ADMIN_SECRET ?? "";

function validToken(token: string | undefined): boolean {
	if (!token || !SECRET) return false;
	const [exp, sig] = token.split(".");
	if (!exp || !sig) return false;
	if (!/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
	const expected = crypto.createHmac("sha256", SECRET).update(exp).digest("hex");
	try {
		return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
	} catch {
		return false;
	}
}

export const onRequest = defineMiddleware((context, next) => {
	const path = context.url.pathname;
	const isAdminPage = path === "/admin" || path === "/admin/" ||
		(path.startsWith("/admin/") && path !== "/admin/login");
	const isAdminApi = path.startsWith("/api/admin/") && path !== "/api/admin/login";

	if (!isAdminPage && !isAdminApi) return next();

	const token = context.cookies.get("gr_admin")?.value;
	if (validToken(token)) return next();

	if (isAdminApi) {
		return new Response(JSON.stringify({ ok: false, error: "unauthorized" }), {
			status: 401,
			headers: { "content-type": "application/json" },
		});
	}
	return context.redirect("/admin/login");
});
