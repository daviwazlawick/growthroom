import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// em runtime os chunks buildados ficam todos em dist/server/chunks/ —
// 3 níveis acima da raiz do projeto, igual ao leads.ts
const dataDir = join(__dirname, "../../../data");

const FILES: Record<string, string> = {
	free: "free-class-leads.csv",
	sales: "leads.csv",
	alfima: "alfima-leads-import.csv",
};

export const GET: APIRoute = async ({ url }) => {
	const key = url.searchParams.get("file") ?? "free";
	const file = FILES[key];
	if (!file) return new Response("Unknown file.", { status: 400 });
	try {
		const content = await readFile(join(dataDir, file), "utf8");
		return new Response(content, {
			status: 200,
			headers: {
				"content-type": "text/csv; charset=utf-8",
				"content-disposition": `attachment; filename="${file}"`,
			},
		});
	} catch {
		return new Response("File not found.", { status: 404 });
	}
};
