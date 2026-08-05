import type { PresaleProduct } from "./types";

/**
 * Produto 3 — Alemanha, pessoa comum de 45 a 75, alemão, 147 € com IVA.
 * Copy vinda de `pagina-einfach-fragen.md`, encurtada para pré-venda.
 *
 * Regras de forma deste produto: fonte grande, linha curta, botão largo, alto
 * contraste, nada que se mova e nenhum pop-up. Condescendência é o erro mais
 * caro aqui: adulto competente que não conhece esta ferramenta, nunca alguém
 * atrasado.
 *
 * [PLACEHOLDER: revisão nativa, e a pergunta específica deste produto — o "du"
 * soa desrespeitoso para alguém de 65 anos?]
 */
export const einfachFragen: PresaleProduct = {
	slug: "einfach-fragen",
	lang: "de",
	brand: "Einfach fragen",
	badge: "In Vorbereitung",
	title: "Einfach fragen — künstliche Intelligenz im Alltag",
	description:
		"Ein Kurs über künstliche Intelligenz im Alltag. Für Briefe, die liegen bleiben, und Texte, die niemand versteht. Acht Lektionen, kein Fachchinesisch.",

	theme: {
		bg: "#ffffff",
		surface: "#f3f6f9",
		text: "#101418",
		muted: "#414c58",
		accent: "#14509b",
		accentText: "#ffffff",
		border: "#d5dde6",
		baseFontPx: 21,
		font: "sans",
		radius: "0.7rem",
	},

	hero: {
		h1: "Du hörst dieses Wort seit zwei Jahren jeden Tag. Erklärt hat es dir noch niemand in Ruhe.",
		sub: "Einfach fragen ist ein Kurs über künstliche Intelligenz im Alltag. Für Briefe, die du vor dir herschiebst. Für Texte, die niemand versteht. Für den ganz normalen Wochenablauf. Acht Lektionen, kein Fachchinesisch, keine Vorkenntnisse.",
		priceLine: "Geplanter Preis: 147 € inklusive Mehrwertsteuer",
		cta: "Auf die Warteliste",
		note: "Der Kurs ist noch nicht fertig und noch nicht käuflich. Auf der Warteliste erfährst du als Erstes, wenn er startet.",
	},

	sections: [
		{
			kind: "prose",
			title: "Das Problem",
			body: [
				"Es geht dir vermutlich so wie den meisten. Du hast es einmal ausprobiert. Du hast drei Wörter eingegeben, eine Antwort bekommen, die nicht gepasst hat oder schlicht falsch war, und dann hast du das Fenster wieder geschlossen.",
				"Daran war nichts falsch. Niemand hat dir gesagt, dass man diese Sache anders fragen muss als eine Suchmaschine. Und niemand hat dir gesagt, wo sie zuverlässig ist und wo nicht.",
				"Beides sind zehn Minuten Erklärung. Danach ist es ein Werkzeug wie jedes andere.",
			],
		},
		{
			kind: "prose",
			title: "Warum das kein Thema für junge Leute ist",
			body: [
				"Der häufigste Satz zu diesem Thema lautet: das ist etwas für die Jüngeren.",
				"Das Gegenteil trifft zu. Wer viel schreibt, was er nicht schreiben will, wer Verträge und Bescheide auf dem Tisch hat, wer Briefe an Versicherungen und Ämter aufschieben muss, der hat den größeren Nutzen davon. Die Jüngeren benutzen sie für Hausaufgaben. Du kannst sie für die Post benutzen, die seit drei Wochen liegt.",
			],
		},
		{
			kind: "cards",
			title: "Was du danach kannst",
			items: [
				{
					title: "Den Brief schreiben, den du vor dir herschiebst",
					text: "Widerspruch, Reklamation, Kündigung, Beschwerde. Du sagst die Fakten, sie schreibt den Ton, du prüfst nach. Der zweite Brief dieser Art dauert dann vier Minuten.",
				},
				{
					title: "Verstehen, was in schwierigen Texten steht",
					text: "Arztbrief, Mietvertrag, Versicherungsbedingungen, Bescheid. In klarer Sprache, und mit den Fragen, die du in der Sprechstunde oder beim Termin stellen solltest.",
				},
				{
					title: "Den Alltag leichter machen",
					text: "Wochenplan fürs Essen, Einkaufsliste, Reise mit deinen echten Einschränkungen, Rede zum siebzigsten Geburtstag, Text für die Karte, Übersetzung unterwegs.",
				},
				{
					title: "Sprechen statt tippen",
					text: "Du redest, sie schreibt. Für viele ist das der Moment, in dem es zum ersten Mal Sinn ergibt.",
				},
				{
					title: "Erkennen, wenn dieselbe Technik gegen dich benutzt wird",
					text: "Nachgebaute Stimmen am Telefon, gefälschte Videos mit bekannten Gesichtern, Shops und E-Mails in perfektem Deutsch. Das ist die siebte Lektion, und sie ist der Grund, warum dieser Kurs sich auch dann lohnt, wenn du am Ende nur zwei Sachen damit machst.",
				},
			],
		},
		{
			kind: "prose",
			title: "Was dieser Kurs nicht ist",
			body: [
				"Hier wird nicht programmiert. Es wird nichts installiert, außer einer App, und das ist auf dem Bildschirm mitgefilmt. Du brauchst keinen neuen Computer.",
				"Es ist auch kein Kurs über die Zukunft der Arbeit und keine Diskussion darüber, ob das alles gut oder schlecht ist. Diese Diskussion ist berechtigt, sie findet hier nur nicht statt. Hier geht es um deine Post, deine Termine und deine Woche.",
				"Und es ist keine Rechts-, Steuer- oder Gesundheitsberatung. Der Kurs hilft dir, den Brief zu schreiben und die richtige Frage zu stellen. Was dein Recht ist, sagt dir eine Person mit Zulassung.",
			],
		},
		{
			kind: "note",
			title: "Der Zettel",
			body: [
				"Zum Kurs gehört ein Blatt, das du ausdruckst und neben den Computer legst. Darauf stehen drei Dinge: was du einer KI nie gibst, wie du persönliche Daten in zehn Sekunden unkenntlich machst, und woran du einen Anruf mit nachgebauter Stimme erkennst.",
				"Wenn du vom ganzen Kurs nur dieses Blatt behältst, war er nicht umsonst.",
			],
		},
		{
			kind: "note",
			title: "Transparenz",
			body: [
				"Dieser Kurs wird mit KI produziert. Stimme und Bild sind von einer KI erzeugt. Die Methode, die Beispiele und der Support sind es nicht.",
				"Das steht hier oben und nicht im Kleingedruckten, weil der Kurs dir genau diese Werkzeuge beibringt. Du hörst hier, wie das Ergebnis klingt, bevor du dafür bezahlst. Wenn dich das stört, ist der Kurs nichts für dich, und dann ist das hier die passende Stelle, um das zu merken.",
			],
		},
	],

	lessons: {
		title: "Die Lektionen",
		note: "Jede Lektion dauert zwischen 8 und 14 Minuten, und nach jeder gibt es genau eine Aufgabe. Die Lektionen 2, 4, 5 und 6 sind Bildschirmaufnahmen mit großem Mauszeiger. Untertitel sind überall dabei.",
		head: ["#", "Lektion", "Was du danach hast"],
		rows: [
			["0", "Was dich hier erwartet", "Den Ablauf"],
			["1", "Was das eigentlich ist", "Die eine Regel, die alles erklärt"],
			["2", "Einrichten, in zwanzig Minuten", "Alles läuft, auf Handy und Computer"],
			["3", "Richtig fragen", "Die fünf Bausteine einer guten Bitte"],
			["4", "Briefe, die etwas bewegen", "Deinen Brief, fertig zum Abschicken"],
			["5", "Schwierige Texte verstehen", "Deine Fragen für den nächsten Termin"],
			["6", "Der ganz normale Alltag", "Wochenplan, Reise, Rede, Übersetzung"],
			["7", "Sicher bleiben, auf beiden Seiten", "Den Zettel und dein Codewort"],
			["8", "Dein eigener Werkzeugkasten", "Zehn Sätze, die bei dir funktionieren"],
		],
	},

	audience: {
		title: "Für wen",
		fitTitle: "Passt zu dir, wenn",
		fit: "Du bist zwischen 45 und 75, du kommst mit Handy und Computer im Alltag zurecht, und du willst dieses Thema einmal in Ruhe erklärt bekommen, statt weiter darüber zu hören. Du hast Post, die liegen bleibt, und Texte, die dich ratlos machen.",
		unfitTitle: "Passt nicht, wenn",
		unfit: "Du benutzt diese Werkzeuge schon regelmäßig und schreibst deine Anfragen selbst. Dann lernst du hier wenig Neues, und das sage ich lieber vorher als nachher. Oder du willst KI für dein Geschäft einsetzen, für Werbung und Kundengewinnung. Das ist ein anderes Thema und ein anderer Kurs, nicht dieser.",
	},

	offer: {
		title: "Preis",
		price: "147 €",
		priceNote: "Inklusive Mehrwertsteuer. Einmalzahlung, kein Abo, keine Folgekosten.",
		includes: [
			"Acht Lektionen, 8 bis 14 Minuten, mit Untertiteln",
			"Alle Vorlagen, der Zettel und der Achtwochenplan",
			"Als Zusatz geplant: die 50 Alltags-Prompts auf Deutsch (+47 €)",
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
			"Ich habe es noch nie ausprobiert",
			"Ich habe es einmal ausprobiert und wieder gelassen",
			"Ich benutze es ab und zu",
		],
		wouldBuyLabel: "Zum Preis von 147 € würde ich den Kurs nehmen.",
		consentLabel:
			"Ich möchte per E-Mail benachrichtigt werden, wenn der Kurs startet. Ich kann mich jederzeit wieder abmelden.",
		submit: "Eintragen",
		sending: "Wird gesendet",
		success: "Eingetragen. Du bekommst eine E-Mail, sobald der Kurs startet.",
		error: "Das hat nicht geklappt. Bitte versuch es noch einmal.",
	},

	faq: [
		{
			q: "Ich bin nicht gut mit Technik. Schaffe ich das?",
			a: "Ja. Es wird nichts programmiert und nichts eingerichtet, außer einem Konto und einer App in Lektion 2, und das ist Schritt für Schritt mitgefilmt. Wenn du eine E-Mail schreiben und ein Foto verschicken kannst, reicht das.",
		},
		{
			q: "Brauche ich einen neuen Computer oder ein neues Handy?",
			a: "Nein. Was du hast, genügt in aller Regel. Du kannst den ganzen Kurs auch nur mit dem Handy machen.",
		},
		{
			q: "Kostet die KI selbst etwas?",
			a: "Für alles in diesem Kurs reicht die kostenlose Version. Lektion 8 sagt dir, woran du merkst, dass sich eine bezahlte Version für dich lohnen würde, und vorher nicht.",
		},
		{
			q: "Und wenn sie mir etwas Falsches sagt?",
			a: "Das wird passieren, und deshalb ist das Lektion 1 und nicht eine Fußnote. Du lernst gleich am Anfang, wo sie zuverlässig ist und wo du nachprüfen musst.",
		},
		{
			q: "Sind meine Daten dort sicher?",
			a: "Das hängt davon ab, was du hineinschreibst. Die kurze Antwort: Gesundheitsdaten, Kontodaten und Daten anderer Menschen gehören nicht hinein, und für alles andere gibt es einen Zehn-Sekunden-Handgriff. Dafür gibt es eine eigene Lektion und den Zettel.",
		},
		{
			q: "Wann startet der Kurs?",
			a: "Ein Datum steht noch nicht fest, und deshalb steht hier auch keins. Die Warteliste erfährt es zuerst.",
		},
	],

	footer: {
		selfStudyNote:
			"Einfach fragen ist ein reiner Selbstlernkurs. Es gibt keine individuelle Betreuung, keine Korrektur von Aufgaben und keine Lernkontrolle.",
		impressum: "[PLACEHOLDER: Impressum eintragen, bevor Werbung geschaltet wird]",
		privacyLabel: "Datenschutz",
		privacyHref: "/privacy-policy",
		termsLabel: "AGB",
		termsHref: "/terms",
	},

	internal: {
		market: "Alemanha — pessoa comum de 45 a 75 anos",
		price: "147 € com IVA",
		thesis:
			"O tema de público geral onde a competência do autor é real e nada depende de credencial. Produção mais barata do portfólio, público mais barato de alcançar, e é ele que paga a montagem do mercado alemão.",
		mainRisk:
			"Aposentado não faz conta de hora perdida: a copy vende autonomia, não retorno. Âncora de preço da Volkshochschule e da oferta pública gratuita de letramento digital empurra o ticket para baixo, e foi por isso que ficou em 147 € e não 297 €.",
		reviewNotes: [
			"Perguntar ao revisor nativo se o du soa desrespeitoso para 65 anos. Trocar depois é regravar tudo.",
			"Preço com IVA incluído no número exposto: venda a consumidor final.",
			"Forma é conversão aqui: fonte grande, alto contraste, nada que se mova, nenhum pop-up.",
			"Impressum e Datenschutzerklärung antes do primeiro anúncio.",
		],
	},
};
