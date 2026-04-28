import { mkdir, appendFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { APIRoute } from "astro";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "../../../data");
const leadsFile = join(dataDir, "leads.csv");
const csvHeader = "fullName,email,channels,monthlySpend,biggestBlocker,createdAt\n";

const toCsvValue = (value: string) => `"${value.replace(/"/g, '""')}"`;

const json = (status: number, body: Record<string, unknown>) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
		},
	});

export const POST: APIRoute = async ({ request }) => {
	try {
		const payload = await request.json();
		const fullName = String(payload?.fullName ?? "").trim();
		const email = String(payload?.email ?? "").trim().toLowerCase();
		const channels = String(payload?.channels ?? "").trim();
		const monthlySpend = String(payload?.monthlySpend ?? "").trim();
		const biggestBlocker = String(payload?.biggestBlocker ?? "").trim();

		if (!fullName || !email || !channels || !monthlySpend || !biggestBlocker) {
			return json(400, { ok: false, error: "Missing required fields." });
		}

		const createdAt = new Date().toISOString();
		const line = [
			toCsvValue(fullName),
			toCsvValue(email),
			toCsvValue(channels),
			toCsvValue(monthlySpend),
			toCsvValue(biggestBlocker),
			toCsvValue(createdAt),
		].join(",") + "\n";

		await mkdir(dataDir, { recursive: true });
		try {
			await access(leadsFile);
		} catch {
			await appendFile(leadsFile, csvHeader, "utf8");
		}
		await appendFile(leadsFile, line, "utf8");

		return json(200, { ok: true });
	} catch {
		return json(500, { ok: false, error: "Failed to store lead." });
	}
};
