import type { PresaleProduct } from "./types";

/**
 * Produto 1 — Alemanha, mulheres autônomas de serviço, alemão, 297 €.
 * Copy vinda de `pagina-voll-gebucht.md`, encurtada para formato de pré-venda.
 * Recorte feminino é do público, não da linguagem: nada de estética cor-de-rosa,
 * nada de tratar a leitora como iniciante.
 *
 * [PLACEHOLDER: revisão por falante nativo antes de qualquer tráfego.]
 */
export const vollGebucht: PresaleProduct = {
	slug: "voll-gebucht",
	lang: "de",
	brand: "Voll gebucht",
	badge: "In Vorbereitung",
	title: "Voll gebucht — Marketing für selbstständige Frauen",
	description:
		"Ein Marketing-System für selbstständige Dienstleisterinnen, das eine Person in etwa einer Stunde pro Woche führen kann. Acht Lektionen, keine Agentur.",

	theme: {
		bg: "#faf8f4",
		surface: "#ffffff",
		text: "#1b2a25",
		muted: "#5b6b64",
		accent: "#0f5c4a",
		accentText: "#ffffff",
		border: "#e5dfd4",
		baseFontPx: 18,
		font: "sans",
		radius: "0.95rem",
	},

	hero: {
		h1: "Gerade sucht jemand in deiner Nähe genau das, was du anbietest.",
		sub: "Und findet dich nicht. Voll gebucht ist ein Marketing-System für selbstständige Frauen, das eine Person in etwa einer Stunde pro Woche führen kann. Acht Lektionen, keine Agentur, kein Zwölfmonatsvertrag.",
		priceLine: "Geplanter Preis: 297 €",
		cta: "Auf die Warteliste",
		note: "Der Kurs ist noch nicht fertig und noch nicht käuflich. Auf der Warteliste erfährst du als Erstes, wenn er startet.",
	},

	sections: [
		{
			kind: "prose",
			title: "Das Problem",
			body: [
				"Deine Arbeit ist gut. Das weißt du, weil deine Stammkundinnen wiederkommen und weil du für das gelobt wirst, was du tatsächlich kannst.",
				"Trotzdem stehen Lücken im Kalender. Dienstagnachmittag. Die halbe Woche im Januar. Und du weißt nie sicher, woher die nächste Buchung kommt.",
				"Also postest du abends noch etwas auf Instagram, bekommst ein paar Herzen von Leuten, die nie buchen werden, und das Gefühl bleibt, dass du zwar ständig etwas tust, aber nichts davon planbar wirkt.",
			],
		},
		{
			kind: "prose",
			title: "Die Rechnung, die kaum jemand macht",
			body: [
				"Nimm den Wert einer Stunde deiner Arbeit. Zähl die Stunden der letzten Woche, die leer geblieben sind. Multiplizier das.",
				"Diese Zahl ist nicht theoretisch. Eine leere Stunde wird nicht aufgehoben und nicht nachgeholt. Sie ist weg, jede Woche aufs Neue.",
				"Und der Grund dafür ist selten fehlendes Können. Er ist fehlende Sichtbarkeit an der Stelle, an der jemand tatsächlich sucht.",
			],
		},
		{
			kind: "prose",
			title: "Warum mehr posten das nicht löst",
			body: [
				"Reichweite ist, wer dir zusieht. Markt ist, wer buchen kann. Die meisten selbstständigen Frauen haben zu viel vom Ersten und zu wenig vom Zweiten.",
				"Für ein lokales Dienstleistungsgeschäft bringen drei Dinge Buchungen, in dieser Reihenfolge: die lokale Suche, strukturierte Empfehlungen und Werbung mit engem Radius. Instagram ist die Vitrine, die eine Entscheidung bestätigt. Es ist selten der Ort, an dem sie entsteht.",
				"Deshalb fangen wir nicht bei Content an.",
			],
		},
		{
			kind: "cards",
			title: "Was der Kurs aufbaut",
			items: [
				{
					title: "Sichtbarkeit",
					text: "Du wirst dort gefunden, wo Menschen mit Buchungsabsicht suchen. Google-Business-Profil Feld für Feld, lokale Suchbegriffe in der Sprache deiner Kundinnen, Impressum korrekt. Kostet nichts und wirkt am schnellsten.",
				},
				{
					title: "Deine KI-Assistentin",
					text: "Die Kernlektion. Du richtest eine KI ein, die schreibt wie du, deine Texte vorbereitet und deine Woche entlastet. Mit den fünf Bausteinen eines guten Prompts, deiner Prompt-Sammlung und einer klaren Regel, was niemals hineingehört.",
				},
				{
					title: "Werbung",
					text: "Eine lokale Kampagne mit kleinem Budget, richtigem Radius und korrekt eingerichteter Einwilligung. In dieser Reihenfolge, nicht andersherum.",
				},
				{
					title: "Stammkundinnen",
					text: "Wiederkehr, Bewertungen und Empfehlungen als System statt als Zufall. Das ist der Teil, der die Miete zahlt.",
				},
			],
		},
		{
			kind: "list",
			title: "Was du danach hast",
			items: [
				"Ein Google-Business-Profil, über das Anfragen hereinkommen.",
				"Eine Preisliste, die du ohne Zögern aussprichst.",
				"Eine KI-Assistentin, die in deinem Ton schreibt, mit deinen gespeicherten Prompts.",
				"Einen Content-Block von einer Stunde pro Woche, der auch in vollen Wochen hält.",
				"Eine laufende lokale Kampagne.",
				"Ein Blatt mit vier Kennzahlen, das dir sagt, was du als Nächstes änderst.",
			],
		},
		{
			kind: "note",
			title: "Transparenz",
			body: [
				"Dieser Kurs wird mit KI produziert. Stimme und Video sind KI-generiert. Die Methode, die Beispiele und der Support sind es nicht.",
				"Das steht hier so deutlich, weil der Kurs dir genau diese Werkzeuge beibringt. Du sollst sehen, was damit möglich ist, bevor du es selbst einsetzt. Und du sollst entscheiden können, ob dir das reicht, bevor du zahlst.",
				"Was der Kurs nicht ist: eine Rechts- oder Steuerberatung. Wo es um Datenschutz oder Werberecht geht, zeigt er dir, was einzurichten ist und welche Frage du deiner Beraterin stellst. Die Entscheidung bleibt bei dir.",
			],
		},
	],

	lessons: {
		title: "Die Lektionen",
		note: "Jede Lektion dauert zwischen 8 und 14 Minuten. Die Lektionen 4, 5 und 7 sind Bildschirmaufnahmen, damit du mitmachen statt zuhören kannst.",
		head: ["#", "Lektion", "Was dabei entsteht"],
		rows: [
			["0", "Was dich hier erwartet", "Der Ablauf"],
			["1", "Warum dich niemand findet", "Deine Diagnose"],
			["2", "Für wen du eigentlich arbeitest", "Kundinnen-Profil"],
			["3", "Preise, die du nicht rechtfertigen musst", "Neue Preisliste"],
			["4", "Deine KI-Assistentin einrichten", "Die Assistentin, eingerichtet"],
			["5", "Gefunden werden, ohne zu bezahlen", "Google-Business-Profil"],
			["6", "Inhalte in einer Stunde pro Woche", "Dein Content-Block"],
			["7", "Werbung mit kleinem Budget", "Kampagne live"],
			["8", "Aus Kundin wird Stammkundin", "Kennzahlen-Blatt"],
		],
	},

	audience: {
		title: "Für wen",
		fitTitle: "Passt zu dir, wenn",
		fit: "Du arbeitest selbstständig und lieferst deine Leistung selbst. Kosmetik, Nägel, Physiotherapie, Heilpraktik, Ernährungsberatung, Yoga, Fotografie, Coaching, Atelier oder Ähnliches. Du hast Kundinnen, aber Lücken im Kalender. Und du willst Marketing selbst führen, statt es abzugeben.",
		unfitTitle: "Passt nicht, wenn",
		unfit: "Du suchst schnelle Reichweite auf Social Media ohne Bezug zu Buchungen. Oder du willst, dass jemand anderes es komplett übernimmt. Dann ist eine lokale Agentur der richtige Weg, und das ist völlig in Ordnung.",
	},

	offer: {
		title: "Preis",
		price: "297 €",
		priceNote: "Einmalzahlung, geplanter Preis zum Start.",
		includes: [
			"Acht Lektionen, 8 bis 14 Minuten",
			"Alle Vorlagen und deine Prompt-Sammlung",
			"Als Zusatz geplant: die Prompt-Bibliothek mit 40 fertigen Prompts auf Deutsch (+67 €)",
		],
		status: "Noch nicht käuflich. Wer auf der Warteliste steht, hört als Erstes davon.",
	},

	waitlist: {
		title: "Auf die Warteliste",
		text: "Zwei Angaben, mehr nicht. Du bekommst eine E-Mail, wenn der Kurs startet, und sonst nichts.",
		nameLabel: "Name",
		emailLabel: "E-Mail",
		segmentLabel: "Was passt auf dich? (freiwillig)",
		segments: [
			"Ich arbeite allein",
			"Ich habe ein bis zwei Mitarbeiterinnen",
			"Ich fange gerade erst an",
		],
		wouldBuyLabel: "Zum Preis von 297 € würde ich den Kurs nehmen.",
		consentLabel:
			"Ich möchte per E-Mail benachrichtigt werden, wenn der Kurs startet. Ich kann mich jederzeit wieder abmelden.",
		submit: "Eintragen",
		sending: "Wird gesendet",
		success: "Eingetragen. Du bekommst eine E-Mail, sobald der Kurs startet.",
		error: "Das hat nicht geklappt. Bitte versuch es noch einmal.",
	},

	faq: [
		{
			q: "Ich bin nicht technikaffin. Schaffe ich das?",
			a: "Ja. Es wird nichts programmiert. Der technischste Moment ist eine Einstellung in einem Konto, und der ist auf dem Bildschirm mitgefilmt.",
		},
		{
			q: "Wie viel Werbebudget brauche ich?",
			a: "Du kannst mit dem kleinsten möglichen Tagesbudget starten. Lektion 7 zeigt dir, welche Zahl in der ersten Woche zählt, bevor du mehr ausgibst.",
		},
		{
			q: "Ist der Einsatz von KI mit dem Datenschutz vereinbar?",
			a: "Das hängt davon ab, welches Werkzeug du nutzt und was du hineingibst. Lektion 4 gibt dir eine klare Regel für beides. Ob deine konkrete Konstellation zulässig ist, klärst du mit deiner Beraterin, und der Kurs sagt dir, welche Frage du dafür stellen musst.",
		},
		{
			q: "Wie viel Zeit kostet mich das?",
			a: "Der Aufbau dauert ein Wochenende. Danach etwa eine Stunde pro Woche, und genau darauf ist das System ausgelegt.",
		},
		{
			q: "Wann startet der Kurs?",
			a: "Ein Datum steht noch nicht fest, und deshalb steht hier auch keins. Die Warteliste erfährt es zuerst.",
		},
	],

	footer: {
		selfStudyNote:
			"Voll gebucht ist ein reiner Selbstlernkurs. Es gibt keine individuelle Betreuung, keine Korrektur von Aufgaben und keine Lernkontrolle.",
		impressum: "[PLACEHOLDER: Impressum eintragen, bevor Werbung geschaltet wird]",
		privacyLabel: "Datenschutz",
		privacyHref: "/privacy-policy",
		termsLabel: "AGB",
		termsHref: "/terms",
	},

	internal: {
		market: "Alemanha — mulheres autônomas de serviço",
		price: "297 €",
		thesis:
			"IA aplicada ao marketing de um negócio de uma pessoa. É o que o autor faz todo dia, e quase não existe material prático de IA em alemão para este porte.",
		mainRisk:
			"O autor não fala alemão. Mitigação estrutural: marca sem rosto, voz nativa, revisão nativa obrigatória.",
		reviewNotes: [
			"Revisão nativa da página antes de subir tráfego.",
			"Impressum e Datenschutzerklärung obrigatórios antes do primeiro anúncio.",
			"Preço exposto líquido: vende a autônoma, não a consumidor final.",
			"Nenhuma menção a pessoa física, biografia ou nacionalidade em lugar nenhum.",
		],
	},
};
