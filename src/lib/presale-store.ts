import { mkdir, appendFile, access, readFile } from "node:fs/promises";
import { join } from "node:path";

// Resolvido a partir do cwd, não do caminho do bundle: em produção o pm2 roda
// com cwd em /opt/growthroom (ver ecosystem.config.cjs), e o arquivo compilado
// muda de profundidade a cada build.
const dataDir = process.env.DATA_DIR || join(process.cwd(), "data");

const viewsFile = join(dataDir, "presale-views.csv");
const viewsHeader = "product,createdAt,path,referrer,device,utmSource,utmMedium,utmCampaign\n";

const leadsFile = join(dataDir, "presale-leads.csv");
const leadsHeader =
	"product,createdAt,name,email,segment,wouldBuyAtPrice,marketingConsent,path,utmSource,utmMedium,utmCampaign\n";

const csv = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;

async function appendRow(file: string, header: string, values: unknown[]) {
	await mkdir(dataDir, { recursive: true });
	try {
		await access(file);
	} catch {
		await appendFile(file, header, "utf8");
	}
	await appendFile(file, values.map(csv).join(",") + "\n", "utf8");
}

const BOT_RE = /bot|crawl|spider|slurp|preview|monitor|curl|wget|headless|lighthouse|python-requests|facebookexternalhit|whatsapp|telegram/i;

export function isBot(userAgent: string | null | undefined): boolean {
	return !userAgent || BOT_RE.test(userAgent);
}

function deviceOf(userAgent: string | null | undefined): string {
	if (!userAgent) return "unknown";
	if (/tablet|ipad/i.test(userAgent)) return "tablet";
	if (/mobi|android|iphone/i.test(userAgent)) return "mobile";
	return "desktop";
}

export type ViewEntry = {
	product: string;
	path: string;
	referrer: string;
	userAgent: string | null;
	params: URLSearchParams;
};

/**
 * Registra uma visita. Sem cookie, sem IP, sem identificador — só o que serve
 * para comparar produto a produto. Bots conhecidos não entram na conta.
 */
export async function logView(entry: ViewEntry): Promise<void> {
	if (isBot(entry.userAgent)) return;
	await appendRow(viewsFile, viewsHeader, [
		entry.product,
		new Date().toISOString(),
		entry.path,
		entry.referrer,
		deviceOf(entry.userAgent),
		entry.params.get("utm_source") ?? "",
		entry.params.get("utm_medium") ?? "",
		entry.params.get("utm_campaign") ?? "",
	]);
}

export type LeadEntry = {
	product: string;
	name: string;
	email: string;
	segment: string;
	wouldBuyAtPrice: boolean;
	marketingConsent: boolean;
	path: string;
	utm: { source: string; medium: string; campaign: string };
};

export async function logLead(entry: LeadEntry): Promise<void> {
	await appendRow(leadsFile, leadsHeader, [
		entry.product,
		new Date().toISOString(),
		entry.name,
		entry.email,
		entry.segment,
		entry.wouldBuyAtPrice,
		entry.marketingConsent,
		entry.path,
		entry.utm.source,
		entry.utm.medium,
		entry.utm.campaign,
	]);
}

// ── Leitura para o painel ────────────────────────────────────────────────

function parseCsv(text: string): string[][] {
	const rows: string[][] = [];
	let row: string[] = [];
	let field = "";
	let quoted = false;

	for (let i = 0; i < text.length; i++) {
		const ch = text[i];
		if (quoted) {
			if (ch === '"') {
				if (text[i + 1] === '"') {
					field += '"';
					i++;
				} else quoted = false;
			} else field += ch;
			continue;
		}
		if (ch === '"') quoted = true;
		else if (ch === ",") {
			row.push(field);
			field = "";
		} else if (ch === "\n") {
			row.push(field);
			rows.push(row);
			row = [];
			field = "";
		} else if (ch !== "\r") field += ch;
	}
	if (field || row.length) {
		row.push(field);
		rows.push(row);
	}
	return rows.filter((r) => r.some((c) => c !== ""));
}

async function readCsv(file: string): Promise<Record<string, string>[]> {
	let text = "";
	try {
		text = await readFile(file, "utf8");
	} catch {
		return [];
	}
	const rows = parseCsv(text);
	if (rows.length < 2) return [];
	const header = rows[0];
	return rows.slice(1).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}

export const readViews = () => readCsv(viewsFile);
export const readLeads = () => readCsv(leadsFile);
