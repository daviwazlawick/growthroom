import type { PresaleProduct } from "./types";

/**
 * Produto 2 — Brasil, advogados, português, R$ 597.
 * Copy vinda de `pagina-escritorio-assistido.md`, encurtada para pré-venda.
 * Único produto do portfólio assinado como pessoa, com rosto e nome.
 */
export const escritorioAssistido: PresaleProduct = {
	slug: "escritorio-assistido",
	lang: "pt-BR",
	brand: "Escritório Assistido",
	badge: "Em preparação",
	title: "Escritório Assistido — IA no escritório de advocacia",
	description:
		"Oito aulas para advogados usarem IA sem inventar jurisprudência e sem colocar o processo do cliente onde não devia.",

	theme: {
		bg: "#0b1626",
		surface: "#122033",
		text: "#eef2f7",
		muted: "#a3b3c6",
		accent: "#c9a44a",
		accentText: "#0b1626",
		border: "#1e3049",
		baseFontPx: 18,
		font: "sans",
		radius: "0.55rem",
	},

	hero: {
		h1: "Usar IA no escritório sem inventar jurisprudência e sem colocar o processo do seu cliente onde não devia.",
		sub: "Oito aulas para advogados. No fim você tem os prompts do seu escritório guardados, a triagem do WhatsApp funcionando, e o manual de IA que você mostra a um cliente que perguntar.",
		priceLine: "Preço previsto: R$ 597",
		cta: "Entrar na lista de espera",
		note: "O curso ainda não está pronto e ainda não está à venda. Quem entra na lista sabe primeiro quando abrir.",
	},

	sections: [
		{
			kind: "prose",
			title: "O problema",
			body: [
				"Você já testou. Provavelmente ficou impressionado nos primeiros dez minutos e desconfiado no décimo primeiro, quando percebeu que aquela referência tão bem formatada não existia.",
				"Aí você ficou num lugar desconfortável. Sabe que colega está usando e ganhando horas. Sabe que a sua semana tem tarefa de escrita que não exige o seu julgamento e come o seu tempo do mesmo jeito. E ao mesmo tempo não tem como saber, sem parar para estudar o assunto, o que acontece com o dado do seu cliente quando você cola o processo numa caixa de texto na internet.",
				"Curso genérico de IA não responde a segunda pergunta. E é ela que interessa.",
			],
		},
		{
			kind: "prose",
			title: "A distinção que muda tudo",
			body: [
				"O advogado que citou acórdão inexistente não foi enganado pela ferramenta. Ele pediu uma coisa que ela não faz.",
				"Pensa nela como um advogado brilhante que começou hoje no escritório. Se no primeiro dia você só disser “faz uma petição”, o resultado vai ser ruim. Não por incompetência, por falta de informação.",
				"O modelo completa padrão. Citação jurídica é um padrão fácil de imitar e impossível de ele verificar. Quando você pede que ele procure direito, ele preenche. Quando você dá a fonte e pede que ele redija, organize ou compare a partir dela, o comportamento é outro.",
				"A regra do curso inteiro cabe numa frase: a fonte entra com você.",
			],
		},
		{
			kind: "cards",
			title: "As três camadas",
			items: [
				{
					title: "1. Prompt",
					text: "O método dos cinco elementos: contexto, papel, objetivo, limites e formato. Limites é o cinto de segurança, é onde entra “não invente jurisprudência” e “isto é rascunho para revisão humana”. É o elemento que quase ninguém escreve.",
				},
				{
					title: "2. Ferramenta",
					text: "Um critério de três níveis para saber o que pode ser colado. Anonimização em trinta segundos. O que verificar nos termos de uma ferramenta antes de usá-la com matéria de cliente, e por que a conta que você provavelmente está usando é a errada.",
				},
				{
					title: "3. Conduta",
					text: "Revisão humana antes de tudo que sai assinado, os cuidados da Recomendação nº 001/2024 do CFOAB em linguagem operacional, e o registro do que o escritório usa.",
				},
			],
		},
		{
			kind: "list",
			title: "O que você tem no fim",
			items: [
				"A triagem do WhatsApp respondendo fora de horário, recolhendo os cinco campos que interessam e chegando até você já organizada, sem dar orientação jurídica nenhuma.",
				"Uma biblioteca de prompts para as tarefas que realmente comem a sua semana.",
				"Um processo de minuta que usa os seus modelos e a sua forma de escrever.",
				"Um método de leitura de documento longo que devolve campos e a origem de cada um.",
				"O cálculo de honorários com memória auditável.",
				"O manual de IA do escritório, pronto, em quatro páginas.",
			],
		},
		{
			kind: "note",
			title: "O limite deste curso, dito antes de você perguntar",
			body: [
				"Eu não sou advogado. Este curso não dá orientação jurídica e não interpreta o estatuto da sua profissão por você.",
				"O que eu faço é a parte técnica: montar sistemas de atendimento, automação e IA para escritórios, clínicas e empresas. Sei onde o dado fica, sei configurar uma ferramenta para não vazar, e sei escrever um pedido que devolve o que se quer.",
				"Você traz o direito. Eu trago o sistema. Onde o curso toca LGPD, sigilo ou as recomendações da Ordem, ele mostra o que configurar e qual pergunta fazer, não o que a norma significa.",
				"IA não substitui o advogado. Substitui tarefa repetitiva. A responsabilidade continua sendo sua, inclusive pela revisão. Todos os exemplos usam um caso fictício, e nenhum dado real de processo aparece em nenhuma aula.",
				"As aulas usam voz e vídeo gerados por IA a partir do meu roteiro e da minha voz. As demonstrações de tela são execução real. Está declarado aqui e no início do curso.",
			],
		},
	],

	lessons: {
		title: "A grade",
		note: "Todas as aulas acompanham um caso só, do começo ao fim, para você ver o método aplicado em vez de ouvir sobre ele. As aulas 4 a 7 são gravação de tela.",
		head: ["#", "Aula", "O que sai dela"],
		rows: [
			["0", "O que este curso é, e o que ele não é", "O combinado"],
			["1", "Por que a IA inventa jurisprudência", "O critério"],
			["2", "O método dos 5 elementos", "Seus primeiros prompts"],
			["3", "Onde o dado do seu cliente fica", "A régua de três níveis"],
			["4", "Peças: rascunho a partir do seu acervo", "Processo de minuta"],
			["5", "Documento longo e resposta ancorada em fonte", "Método de leitura"],
			["6", "Gestor de e-mail e comunicação com o cliente", "Modelos de e-mail"],
			["7", "Triagem no WhatsApp e agendamento", "Triagem funcionando"],
			["8", "Honorários, painel e o manual do escritório", "O manual, pronto"],
		],
	},

	audience: {
		title: "Para quem é",
		fitTitle: "É para você se",
		fit: "É advogado autônomo ou tem uma banca pequena. Já testou IA e parou por desconfiança, ou usa sem ter certeza se deveria. Quer ganhar horas em escrita e triagem sem criar um problema de sigilo. Trabalha com volume, principalmente previdenciário, trabalhista ou consumidor, onde a peça se repete.",
		unfitTitle: "Não é para você se",
		unfit: "Procura curso de direito, de peticionamento ou de software de gestão de processos. Ou quer uma ferramenta que decida por você, que é a única coisa que este curso garante que você não vai ter.",
	},

	offer: {
		title: "Preço",
		price: "R$ 597",
		priceNote: "Pagamento único, preço previsto para a abertura.",
		includes: [
			"Oito aulas e os nove materiais",
			"O modelo do manual de IA do escritório",
			"Atualização das aulas 3 e 7 quando as regras ou as ferramentas mudarem",
			"Previsto como adicional: a biblioteca de prompts do escritório (+R$ 147)",
		],
		status: "Ainda não está à venda. A lista de espera é avisada primeiro.",
	},

	waitlist: {
		title: "Lista de espera",
		text: "Duas informações e pronto. Você recebe um e-mail quando o curso abrir, e nada além disso.",
		nameLabel: "Nome",
		emailLabel: "E-mail",
		segmentLabel: "O que descreve você melhor? (opcional)",
		segments: [
			"Advogado autônomo",
			"Banca de 2 a 10 pessoas",
			"Escritório maior",
			"Ainda não atuo na advocacia",
		],
		wouldBuyLabel: "Por R$ 597 eu compraria.",
		consentLabel:
			"Quero receber um e-mail quando o curso abrir. Posso cancelar quando quiser.",
		submit: "Entrar na lista",
		sending: "Enviando",
		success: "Pronto. Você recebe um e-mail quando abrir.",
		error: "Não deu certo. Tenta de novo.",
	},

	faq: [
		{
			q: "Isso viola o sigilo profissional?",
			a: "Depende inteiramente de qual ferramenta você usa e do que cola nela, e é por isso que a aula 3 existe e é a mais longa do curso. Ele te dá o critério para decidir caso a caso. A decisão e a responsabilidade deontológica continuam suas.",
		},
		{
			q: "Preciso entender de tecnologia?",
			a: "Não. Não tem programação em lugar nenhum. A parte mais técnica é configurar uma opção numa conta, e é feita ao vivo na tela.",
		},
		{
			q: "Serve para qual área do direito?",
			a: "O método serve para qualquer uma. Onde ele rende mais é em contencioso de volume, porque a estrutura da peça se repete e só mudam os fatos.",
		},
		{
			q: "E se a lei ou a Ordem mudarem alguma coisa?",
			a: "As aulas 3 e 7 são revistas a cada seis meses e você recebe a atualização sem pagar mais. É a razão de isto ter preço de curso e não de e-book.",
		},
		{
			q: "Quando abre?",
			a: "Não tem data marcada, e por isso não tem data escrita aqui. A lista de espera é avisada primeiro.",
		},
	],

	footer: {
		selfStudyNote:
			"Curso gravado, de estudo autônomo. O conteúdo é técnico, sobre ferramenta e processo, e não constitui orientação jurídica.",
		impressum: "",
		privacyLabel: "Política de privacidade",
		privacyHref: "/privacy-policy",
		termsLabel: "Termos",
		termsHref: "/terms",
	},

	internal: {
		market: "Brasil — advogados autônomos e bancas de 2 a 10",
		price: "R$ 597",
		thesis:
			"Único produto já entregue ao vivo. Autoridade real, língua nativa, chatbot de triagem testado, checkout doméstico sem IVA europeu. É o de menor risco absoluto do portfólio.",
		mainRisk:
			"O instrutor não é advogado e não pode dar consultoria jurídica. Mitigado por posicionamento: o aluno traz o direito, o curso traz o sistema.",
		reviewNotes: [
			"Três autorizações pendentes: citar o evento pelo nome, citar o escritório usado como case, reconferir a Recomendação nº 001/2024 do CFOAB.",
			"Nenhum depoimento e nenhum número de horas economizadas até existir dado real.",
			"Se a autorização sair, entra um parágrafo sobre a imersão entre a grade e o bloco de limites.",
		],
	},
};
