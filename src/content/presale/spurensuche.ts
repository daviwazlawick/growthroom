import type { PresaleProduct } from "./types";

/**
 * Produto 4 — Alemanha, pesquisa de história familiar, alemão, 197 € com IVA.
 * Copy vinda de `pagina-spurensuche.md`, encurtada para pré-venda.
 *
 * Zero vocabulário de linhagem. Nada de Abstammung como valor, brasão, nobreza,
 * pergaminho ou teste de DNA. O enquadramento é gente, documento e aldeia — e
 * isso vale também para o visual da página.
 *
 * [PLACEHOLDER: revisão por nativo com experiência de Ahnenforschung. Aqui um
 * erro de procedimento é pior que um erro de idioma: o comprador reconhece.]
 */
export const spurensuche: PresaleProduct = {
	slug: "spurensuche",
	lang: "de",
	brand: "Spurensuche",
	badge: "In Vorbereitung",
	title: "Spurensuche — Familienforschung mit Quellen",
	description:
		"Ein Kurs über die eigene Familienforschung: wo die Bücher liegen, wie man eine Anfrage stellt, die beantwortet wird, und wie du die alte Schrift lesen lernst.",

	theme: {
		bg: "#f4f5f3",
		surface: "#ffffff",
		text: "#1b1f24",
		muted: "#555f69",
		accent: "#2f4858",
		accentText: "#ffffff",
		border: "#dde1de",
		baseFontPx: 19,
		font: "serif",
		radius: "0.2rem",
	},

	hero: {
		h1: "Du hast die Schachtel geerbt. Und die Handschrift kann niemand mehr lesen.",
		sub: "Spurensuche ist ein Kurs über die eigene Familienforschung. Wo die Bücher liegen, wie man eine Anfrage stellt, die beantwortet wird, und wie du die alte Schrift tatsächlich lesen lernst. Acht Lektionen, mit Bildschirmaufnahmen in den echten Archivportalen.",
		priceLine: "Geplanter Preis: 197 € inklusive Mehrwertsteuer",
		cta: "Auf die Warteliste",
		note: "Der Kurs ist noch nicht fertig und noch nicht käuflich. Auf der Warteliste erfährst du als Erstes, wenn er startet.",
	},

	sections: [
		{
			kind: "prose",
			title: "Das Problem",
			body: [
				"Wahrscheinlich bist du schon weiter, als du denkst. Drei Generationen stehen, aus dem, was die Familie noch weiß. Vielleicht hast du dich bei einem Stammbaumportal angemeldet und Namen von fremden Leuten übernommen, bei denen du nicht sicher bist, ob sie stimmen.",
				"Und dann kommt der Punkt, an dem es aufhört. Zwei Wände, immer dieselben.",
				"Die erste: du weißt nicht, welches Archiv welchen Eintrag hat, und wohin man überhaupt schreibt.",
				"Die zweite: du hast eine Seite gefunden, der Eintrag steht da, und du kannst ihn nicht lesen.",
			],
		},
		{
			kind: "prose",
			title: "Die Wand, an der die meisten aufhören",
			body: [
				"Kurrent. Die deutsche Schreibschrift, die bis in die vierziger Jahre benutzt wurde. Sie ist der Grund, warum die meisten Menschen ihre Forschung nach ein paar Monaten liegen lassen, obwohl das Dokument längst vor ihnen auf dem Bildschirm liegt.",
				"Es gibt dafür zwei Wege, und dieser Kurs geht beide gleichzeitig.",
				"Der erste ist Handarbeit und funktioniert seit hundert Jahren: du baust dir das Alphabet genau des Schreibers, dessen Seite du liest, aus einem Wort, das du schon kennst. Nicht aus einer Tabelle aus dem Internet.",
				"Der zweite ist neu: eine KI transkribiert die Seite in Sekunden. Sie ist dabei erstaunlich gut und bei Namen erstaunlich unzuverlässig, und der Kurs zeigt dir beides, mit dem Fehler auf dem Bildschirm. Denn die Regel bleibt: ein Name, den du nicht selbst auf dem Papier sehen kannst, kommt nicht in deinen Stammbaum.",
			],
		},
		{
			kind: "note",
			title: "Was dieser Kurs dir nicht verspricht",
			body: [
				"Kein Jahr, keine Anzahl von Generationen.",
				"Wie weit du zurückkommst, entscheidet nicht dein Fleiß und nicht dieser Kurs. Das entscheidet, was von den Büchern deiner Gegend übrig ist. In manchen Regionen liegen Kirchenbücher ab 1650 digitalisiert vor. In anderen ist 1945 alles verbrannt.",
				"Wer dir eine Jahreszahl verspricht, kennt die Archivlage nicht oder verkauft dir etwas.",
				"Was dieser Kurs dir gibt, ist das Vorgehen: wo du suchst, wie du fragst, wie du liest, und was du machst, wenn nichts mehr kommt. Das ist es, was den Unterschied macht, denn Sackgassen hat jede Forschung.",
				"Und es geht hier nicht um Abstammung. Es geht nicht darum, von wem du herkommst und was das über dich sagen soll. Es geht um Menschen, ihre Orte, ihre Berufe und ihr Leben. Wer eine Ahnentafel als Ausweis sucht, ist hier falsch.",
			],
		},
		{
			kind: "cards",
			title: "Was der Kurs aufbaut",
			items: [
				{
					title: "Bei den Lebenden anfangen",
					text: "Das erste Archiv ist deine Tante, und es ist die einzige Quelle, die verschwindet. Ein Fragebogen mit 25 Fragen, die tatsächlich etwas ergeben, Aufnahme auf dem Handy, und die Abschrift mit KI. Diese Lektion ist die dringendste im Kurs.",
				},
				{
					title: "Ordnung und Quelle",
					text: "Eine Struktur, die auch bei dreihundert Personen noch funktioniert, und das Forschungstagebuch, in dem auch steht, was du nicht gefunden hast. Ein Stammbaum ohne Quelle ist eine Vermutung mit Zahlen.",
				},
				{
					title: "Die Archive",
					text: "Ab 1876 das Standesamt, davor die Kirchenbücher. Welche Portale was haben, wie du die zuständige Pfarrei findest, obwohl der Ort heute anders heißt, und die Anfragevorlage, auf die geantwortet wird.",
				},
				{
					title: "Die alte Schrift",
					text: "Die Kernlektion. Kurrent lesen, von Hand und mit KI, mit den Buchstaben, die fast alle Fehler verursachen, und mit dem Fehler der KI vorgeführt statt beschrieben.",
				},
			],
		},
		{
			kind: "list",
			title: "Was du danach hast",
			items: [
				"Einen Stammbaum, in dem hinter jedem Namen eine Quelle steht.",
				"Die Aufnahmen deiner Familiengespräche, abgeschrieben und geordnet.",
				"Die Anfragevorlagen für Standesamt, Stadtarchiv und Kirchenarchiv.",
				"Deine eigene Kurrent-Tabelle, für den Schreiber deiner Pfarrei.",
				"Ein Forschungstagebuch, das dich nicht zweimal dasselbe suchen lässt.",
				"Ein Familienbuch, das jemand nach dir noch öffnen kann.",
			],
		},
		{
			kind: "note",
			title: "Kein DNA-Test",
			body: [
				"In diesem Kurs kommt kein Gentest vor, und das ist eine Entscheidung.",
				"Genetische Daten sind besonders geschützt, sie gehören dir nicht allein, sondern auch deinen Verwandten, und ein unerwartetes Ergebnis hat schon mehr als eine Familie zerlegt. Für einen belegten Stammbaum brauchst du ihn außerdem nicht. Dokumente reichen, und sie sagen dir mehr über ein Leben als eine Prozentzahl.",
			],
		},
		{
			kind: "note",
			title: "Transparenz",
			body: [
				"Dieser Kurs wird mit KI produziert. Stimme und Bild sind KI-erzeugt. Die Methode, die Beispiele und der Support sind es nicht.",
				"Die KI ist in diesem Kurs außerdem ein Werkzeug, nämlich beim Lesen alter Handschrift und beim Abschreiben von Tonaufnahmen. Du siehst in Lektion 5 genau, wo sie gut ist und wo sie sich irrt, mit dem Fehler auf dem Bildschirm.",
			],
		},
	],

	lessons: {
		title: "Die Lektionen",
		note: "Jede Lektion dauert zwischen 10 und 16 Minuten. Die Lektionen 3 bis 6 sind Bildschirmaufnahmen in den echten Portalen, Schritt für Schritt, damit du mitarbeiten kannst statt zuzuhören.",
		head: ["#", "Lektion", "Was dabei entsteht"],
		rows: [
			["0", "Was dich hier erwartet", "Der Ablauf, und ein Anruf"],
			["1", "Anfangen bei den Lebenden", "Das Gespräch, aufgenommen und abgeschrieben"],
			["2", "Ordnung, bevor es unübersichtlich wird", "Struktur und Forschungstagebuch"],
			["3", "Die Ämter: was du wo bekommst", "Deine erste Anfrage, abgeschickt"],
			["4", "Kirchenbücher: vor 1876", "Das Buch deiner Pfarrei, offen"],
			["5", "Die alte Schrift lesen", "Ein Eintrag, vollständig transkribiert"],
			["6", "Wenn die Spur abbricht", "Dein Vorgehen für die Sackgasse"],
			["7", "Aus Namen werden Menschen", "Zwei Seiten Familiengeschichte"],
			["8", "Was du hinterlässt", "Das Familienbuch"],
		],
	},

	audience: {
		title: "Für wen",
		fitTitle: "Passt zu dir, wenn",
		fit: "Du hast angefangen und steckst fest. Du hast Dokumente, die du nicht lesen kannst, oder du weißt nicht, wohin du schreiben sollst. Oder du hast die Schachtel im Keller und willst anfangen, bevor die Personen, die noch etwas wissen, nicht mehr da sind.",
		unfitTitle: "Passt nicht, wenn",
		unfit: "Du forschst schon seit Jahren, liest Kurrent flüssig und kennst deine Archivlandschaft. Dann findest du hier wenig Neues. Oder du suchst eine schnelle Ahnentafel zum Ausdrucken. Das gibt es bei den Portalen günstiger, es ist nur meistens nicht belegt.",
	},

	offer: {
		title: "Preis",
		price: "197 €",
		priceNote: "Inklusive Mehrwertsteuer. Einmalzahlung, kein Abo.",
		includes: [
			"Acht Lektionen, 10 bis 16 Minuten",
			"Alle Vorlagen, die Archivlisten und das Glossar",
			"Als Zusatz geplant: das Vorlagen-Paket mit Anfragen, Glossar, Kurrent-Tabelle und Forschungstagebuch (+47 €)",
		],
		status: "Noch nicht käuflich. Wer auf der Warteliste steht, hört als Erstes davon.",
	},

	waitlist: {
		title: "Auf die Warteliste",
		text: "Zwei Angaben, mehr nicht. Du bekommst eine E-Mail, wenn der Kurs startet, und sonst nichts.",
		nameLabel: "Name",
		emailLabel: "E-Mail",
		segmentLabel: "Wo stehst du gerade? (freiwillig)",
		segments: [
			"Ich habe gerade angefangen",
			"Ich stecke bei der alten Schrift fest",
			"Ich weiß nicht, an welches Archiv ich schreiben soll",
			"Ich forsche schon länger",
		],
		wouldBuyLabel: "Zum Preis von 197 € würde ich den Kurs nehmen.",
		consentLabel:
			"Ich möchte per E-Mail benachrichtigt werden, wenn der Kurs startet. Ich kann mich jederzeit wieder abmelden.",
		submit: "Eintragen",
		sending: "Wird gesendet",
		success: "Eingetragen. Du bekommst eine E-Mail, sobald der Kurs startet.",
		error: "Das hat nicht geklappt. Bitte versuch es noch einmal.",
	},

	faq: [
		{
			q: "Ich weiß gar nichts außer den Namen meiner Großeltern. Reicht das?",
			a: "Ja, und das ist der normale Anfang. Aus zwei Großelternnamen und einem Ort kommt man weit. Lektion 1 zeigt dir, wie du in einer Woche mehr zusammenhast als in den Jahren davor.",
		},
		{
			q: "Brauche ich ein bezahltes Stammbaumportal?",
			a: "Für den Kurs nicht. Lektion 2 zeigt dir eine kostenlose Möglichkeit und sagt dir, was ein bezahltes Portal zusätzlich bringt und was nicht. Für Kirchenbücher gibt es Portale mit Gebühr, und Lektion 4 sagt dir, welche für deine Region überhaupt in Frage kommen, bevor du irgendwo bezahlst.",
		},
		{
			q: "Muss ich in ein Archiv fahren?",
			a: "Für den größten Teil nicht mehr. Sehr viel ist digitalisiert, und der Kurs arbeitet in diesen Portalen. Es bleiben Fälle, in denen ein Buch nur vor Ort liegt, und dann sagt dir Lektion 4, wie du das vorher klärst.",
		},
		{
			q: "Kann die KI die alte Schrift wirklich lesen?",
			a: "Erstaunlich gut, und bei Namen erstaunlich unzuverlässig, was leider genau der Teil ist, auf den es ankommt. Deshalb lernst du beides: die Schrift selbst und die KI als Beschleuniger, mit einer festen Regel dafür, was du übernimmst und was nicht.",
		},
		{
			q: "Wann startet der Kurs?",
			a: "Ein Datum steht noch nicht fest, und deshalb steht hier auch keins. Die Warteliste erfährt es zuerst.",
		},
	],

	footer: {
		selfStudyNote:
			"Spurensuche ist ein reiner Selbstlernkurs. Es gibt keine individuelle Betreuung, keine Korrektur von Aufgaben und keine Lernkontrolle.",
		impressum: "[PLACEHOLDER: Impressum eintragen, bevor Werbung geschaltet wird]",
		privacyLabel: "Datenschutz",
		privacyHref: "/privacy-policy",
		termsLabel: "AGB",
		termsHref: "/terms",
	},

	internal: {
		market: "Alemanha — pesquisador amador de história familiar, 50 a 75",
		price: "197 € com IVA",
		thesis:
			"Parede conhecida (Kurrent) que dá gancho de anúncio sem promessa, público que já gasta com o hobby, e a IA resolve a parede de verdade. Nenhum curso alemão do tema centra nisso.",
		mainRisk:
			"É o que exige mais pesquisa de conteúdo do portfólio. Erro de procedimento é visível na primeira aula porque o comprador já tentou. Exige revisor nativo com experiência de Ahnenforschung, que é a contratação mais difícil do projeto.",
		reviewNotes: [
			"Zero vocabulário de linhagem, no texto e no visual. A sombra do Ahnenpass mata o produto.",
			"Nenhuma imagem de arquivo digitalizado sem verificar os termos de uso do portal. [VALIDAR]",
			"A seção do que não se promete vem antes dos benefícios, de propósito: pesquisador compra rigor.",
			"Cobertura por região das antigas áreas alemãs precisa ser confirmada antes de responder isso em público.",
		],
	},
};
