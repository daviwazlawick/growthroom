/**
 * Run once to download logos into this folder:
 *   node public/logos/download-logos.mjs
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const brands = [
  { slug: "seiko",               domain: "seikowatches.com"     },
  { slug: "pulsar-watches",      domain: "pulsarwatchesusa.com" },
  { slug: "gymondo",             domain: "gymondo.com"           },
  { slug: "vaha",                domain: "vaha.com"              },
  { slug: "bioniq",              domain: "bioniq.com"            },
  { slug: "shape-republic",      domain: "shape-republic.com"    },
  { slug: "ictjob",              domain: "ictjob.be"             },
  { slug: "frontier-car-group",  domain: "frontiercargroup.com"  },
  { slug: "workmotion",          domain: "workmotion.com"        },
  { slug: "pixformance",         domain: "pixformance.com"       },
  { slug: "valuecase",           domain: "valuecase.com"         },
  { slug: "knowunity",           domain: "knowunity.com"         },
];

for (const { slug, domain } of brands) {
  const url = `https://logo.clearbit.com/${domain}`;
  try {
    const res = await fetch(url);
    if (!res.ok) { console.log(`✗ ${slug} (${res.status})`); continue; }
    const ct = res.headers.get("content-type") ?? "";
    const ext = ct.includes("svg") ? "svg" : "png";
    const buf = Buffer.from(await res.arrayBuffer());
    const out = join(__dirname, `${slug}.${ext}`);
    writeFileSync(out, buf);
    console.log(`✓ ${slug}.${ext}`);
  } catch (e) {
    console.log(`✗ ${slug}: ${e.message}`);
  }
}
