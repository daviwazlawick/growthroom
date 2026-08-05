import type { PresaleProduct } from "./types";
import { vollGebucht } from "./voll-gebucht";
import { escritorioAssistido } from "./escritorio-assistido";
import { einfachFragen } from "./einfach-fragen";
import { spurensuche } from "./spurensuche";

/** Ordem = ordem de lançamento recomendada do projeto: 2 → 3 → 1 → 4. */
export const presaleList: PresaleProduct[] = [
	escritorioAssistido,
	einfachFragen,
	vollGebucht,
	spurensuche,
];

export const presaleProducts: Record<string, PresaleProduct> = Object.fromEntries(
	presaleList.map((p) => [p.slug, p]),
);

export type { PresaleProduct } from "./types";
