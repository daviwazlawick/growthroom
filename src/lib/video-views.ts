import { mkdir, appendFile, access, readFile } from "node:fs/promises";
import { join } from "node:path";

// Mesmo critério do presale-store: resolvido a partir do cwd (pm2 roda com
// cwd em /opt/growthroom), não do caminho do bundle.
const dataDir = process.env.DATA_DIR || join(process.cwd(), "data");

const viewsFile = join(dataDir, "video-views.csv");
const viewsHeader =
	"videoId,placement,createdAt,page,lang,seconds,device,referrer,utmSource,utmMedium,utmCampaign\n";

const csv = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;

const BOT_RE =
	/bot|crawl|spider|slurp|preview|monitor|curl|wget|headless|lighthouse|python-requests|facebookexternalhit|whatsapp|telegram/i;

export function isBot(userAgent: string | null | undefined): boolean {
	return !userAgent || BOT_RE.test(userAgent);
}

function deviceOf(userAgent: string | null | undefined): string {
	if (!userAgent) return "unknown";
	if (/tablet|ipad/i.test(userAgent)) return "tablet";
	if (/mobi|android|iphone/i.test(userAgent)) return "mobile";
	return "desktop";
}

// Um "view" só é registado depois de 30s realmente vistos (ver VIEW_SECONDS
// no cliente), por isso este valor é o piso aceite pelo endpoint.
export const MIN_VIEW_SECONDS = 30;

export const PLACEMENTS = ["hero", "fc-popup", "bp-popup"] as const;
export type Placement = (typeof PLACEMENTS)[number];

export type VideoViewEntry = {
	videoId: string;
	placement: string;
	page: string;
	lang: string;
	seconds: number;
	referrer: string;
	userAgent: string | null;
	utmSource?: string;
	utmMedium?: string;
	utmCampaign?: string;
};

export async function logVideoView(entry: VideoViewEntry): Promise<void> {
	await mkdir(dataDir, { recursive: true });
	try {
		await access(viewsFile);
	} catch {
		await appendFile(viewsFile, viewsHeader, "utf8");
	}
	const row = [
		entry.videoId,
		entry.placement,
		new Date().toISOString(),
		entry.page,
		entry.lang,
		Math.round(entry.seconds),
		deviceOf(entry.userAgent),
		entry.referrer,
		entry.utmSource ?? "",
		entry.utmMedium ?? "",
		entry.utmCampaign ?? "",
	];
	await appendFile(viewsFile, row.map(csv).join(",") + "\n", "utf8");
}

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

export async function readVideoViews(): Promise<Record<string, string>[]> {
	let text = "";
	try {
		text = await readFile(viewsFile, "utf8");
	} catch {
		return [];
	}
	const rows = parseCsv(text);
	if (rows.length < 2) return [];
	const header = rows[0];
	return rows.slice(1).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])));
}
