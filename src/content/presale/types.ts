/**
 * Modelo de uma landing de pré-venda.
 *
 * Os quatro produtos usam exatamente a mesma estrutura de página de propósito:
 * o teste só é comparável se a única variável for o produto. Quem mexer em
 * ordem de seção, tamanho de fonte ou texto de botão de uma página, mexe nas
 * quatro ou o resultado do teste não vale.
 */

export type Section =
	| { kind: "prose"; title?: string; body: string[] }
	| { kind: "cards"; title?: string; intro?: string; items: { title: string; text: string }[] }
	| { kind: "list"; title?: string; intro?: string; items: string[] }
	| { kind: "note"; title?: string; body: string[] };

export type PresaleProduct = {
	/** slug da URL: /cursos/<slug> */
	slug: string;
	lang: "de" | "pt-BR";
	/** marca do produto. Nenhum produto alemão assina com outra marca do autor. */
	brand: string;
	badge: string;
	title: string;
	description: string;

	theme: {
		bg: string;
		surface: string;
		text: string;
		muted: string;
		accent: string;
		accentText: string;
		border: string;
		/** corpo de texto base. O produto 3 usa fonte maior por decisão de público. */
		baseFontPx: number;
		/** fonte dos títulos. O corpo é sempre sans, por legibilidade. */
		font: "sans" | "serif";
		/** raio das bordas. Menor = mais documento, maior = mais produto. */
		radius?: string;
	};

	hero: {
		h1: string;
		sub: string;
		priceLine: string;
		cta: string;
		note: string;
	};

	sections: Section[];

	lessons: {
		title: string;
		note: string;
		head: [string, string, string];
		rows: [string, string, string][];
	};

	audience: {
		title: string;
		fitTitle: string;
		fit: string;
		unfitTitle: string;
		unfit: string;
	};

	offer: {
		title: string;
		price: string;
		priceNote: string;
		includes: string[];
		bumpTitle?: string;
		bumpText?: string;
		status: string;
	};

	waitlist: {
		title: string;
		text: string;
		nameLabel: string;
		emailLabel: string;
		segmentLabel: string;
		segments: string[];
		wouldBuyLabel: string;
		consentLabel: string;
		submit: string;
		sending: string;
		success: string;
		error: string;
	};

	faq: { q: string; a: string }[];

	footer: {
		selfStudyNote: string;
		impressum: string;
		privacyLabel: string;
		privacyHref: string;
		termsLabel: string;
		termsHref: string;
	};

	/** só para o painel interno, nunca aparece na página */
	internal: {
		market: string;
		price: string;
		thesis: string;
		mainRisk: string;
		reviewNotes: string[];
	};
};
