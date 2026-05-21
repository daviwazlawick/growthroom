# Tarefa: Criar página em Português do Brasil (/br)

## O que precisa ser feito

Criar `/src/pages/br/index.astro` — cópia completa da página principal (`/src/pages/index.astro`) com todo o texto traduzido para português do Brasil.

O diretório `/src/pages/br/` já foi criado.

---

## Como criar

1. Copiar `/src/pages/index.astro` para `/src/pages/br/index.astro`
2. Ajustar os imports (caminhos relativos mudam de `../components/` para `../../components/`)
3. Traduzir todo o texto visível conforme a lista abaixo
4. Atualizar `lang="en"` → `lang="pt-BR"`
5. Atualizar canonical URL → `https://growthroom.eu/br`
6. Atualizar `og:url` → `https://growthroom.eu/br`
7. Atualizar `og:locale` → `pt_BR`

---

## Traduções

### Meta / Head
| Original | Tradução |
|---|---|
| `The private room where your ads get fixed. Weekly. \| Growth Room` | `O grupo privado onde seus anúncios são corrigidos. Toda semana. \| Growth Room` |
| `Not a course. Not an agency. A live weekly room where founders and operators fix their paid ads with an expert. Group or 1-on-1 — from €69/session.` | `Não é um curso. Não é uma agência. Um grupo ao vivo toda semana onde fundadores e operadores corrigem seus anúncios pagos com um especialista. Grupo ou 1-a-1 — a partir de €69/sessão.` |

### Nav
| Original | Tradução |
|---|---|
| Problem | Problema |
| Solution | Solução |
| Compare | Comparar |
| Pricing | Preços |
| Results | Resultados |
| FAQ | FAQ |
| `50 priority spots · 18 left` | `50 vagas · 18 restantes` |
| See the Plans → | Ver os Planos → |

### Hero
| Original | Tradução |
|---|---|
| `Growth Room · Early Access · 50 spots · Next intake opening soon` | `Growth Room · Acesso Antecipado · 50 vagas · Próxima turma abrindo em breve` |
| `The room where your ads get fixed. Every week. Live.` | `O grupo onde seus anúncios são corrigidos. Toda semana. Ao vivo.` |
| `Growth Room is a private weekly mastermind — a small group of people selling online, one expert, and real ad accounts on screen. You leave each session knowing exactly what to fix next.` | `O Growth Room é um mastermind semanal privado — um pequeno grupo de pessoas vendendo online, um especialista e contas de anúncios reais na tela. Você sai de cada sessão sabendo exatamente o que corrigir.` |
| See the Plans → | Ver os Planos → |
| See how it works | Veja como funciona |
| `15-min intro meeting · No cost until match` | `Reunião de 15 min · Sem custo até o match` |

### Room card (widget lateral)
| Original | Tradução |
|---|---|
| Tonight's spend | Gasto de hoje |
| Avg. ROAS lift | Lift médio de ROAS |
| last 6 cohorts | últimas 6 coortes |
| Operators | Operadores |
| seats locked | vagas preenchidas |
| + 4 accounts reviewed | + 4 contas revisadas |

### Trust row
| Original | Tradução |
|---|---|
| `Limited seats · 10 per room` | `Vagas limitadas · 10 por grupo` |
| `Free 15-min expert intro` | `Intro gratuita de 15 min com especialista` |
| `No cost until matched` | `Sem custo até o match` |
| `Weekly live account reviews` | `Revisão de contas ao vivo toda semana` |

### Stats banner
| Original | Tradução |
|---|---|
| Priority Cohort | Coorte Prioritária |
| 18 spots | 18 vagas |
| `Waiting lists help us organise better group matches and the opening of new Rooms.` | `As listas de espera nos ajudam a organizar melhores correspondências de grupo e a abertura de novos Grupos.` |
| Free Intro | Intro Gratuita |
| min meeting | min de reunião |
| `A real expert reviews your account before we propose a fit. No deck, no pitch.` | `Um especialista real revisa sua conta antes de sugerirmos um match. Sem apresentações, sem pitch.` |
| Risk Profile | Perfil de Risco |
| until matched | até o match |
| `You don't pay until we place you in a room with operators at your stage.` | `Você não paga até que a gente te coloque em um grupo com operadores no mesmo estágio que você.` |

### Seção Problema
| Original | Tradução |
|---|---|
| The Problem | O Problema |
| `You're spending money on ads, but still guessing what's broken.` | `Você está investindo em anúncios, mas ainda adivinhando o que está quebrado.` |
| `Most people selling online are running ads that feel like guesswork — spending money every day without knowing what's actually working or why it stopped.` | `A maioria das pessoas vendendo online está rodando anúncios no escuro — gastando dinheiro todo dia sem saber o que realmente funciona ou por que parou de funcionar.` |
| Wasted ad spend | Verba desperdiçada |
| `Budgets quietly drain into broken audiences, dead creatives and campaigns nobody has reviewed in three weeks.` | `Os orçamentos se esvaziam silenciosamente em públicos quebrados, criativos mortos e campanhas que ninguém revisa há três semanas.` |
| Cost | Custo |
| Broken tracking | Rastreamento quebrado |
| `GA4, CAPI, server-side, UTMs — none of them agree. You're optimizing on numbers you don't actually trust.` | `GA4, CAPI, server-side, UTMs — nenhum concorda com o outro. Você está otimizando com números em que não confia de verdade.` |
| Signal | Sinal |
| Inconsistent conversions | Conversões inconsistentes |
| `One week ROAS 4.2, next week 1.6. No clear narrative for what changed or what to do about it.` | `Uma semana ROAS 4.2, na semana seguinte 1.6. Sem nenhuma explicação clara do que mudou ou o que fazer.` |
| Volatility | Volatilidade |
| No clear priority | Sem prioridade clara |
| `15 dashboards, 40 open Slack threads. The team is busy. Nobody knows what the single biggest lever is.` | `15 dashboards, 40 threads abertas no Slack. A equipe está ocupada. Ninguém sabe qual é a principal alavanca.` |
| Focus | Foco |
| Pull quote | `A pior parte não é perder dinheiro com anúncios ruins. É a erosão lenta da convicção — quando até suas vitórias parecem ruído e você para de acreditar no dashboard.` |
| `— Stop guessing` | `— Pare de adivinhar` |
| `Apply to a room and get an expert audit on your real account.` | `Candidate-se a um grupo e receba uma auditoria de especialista na sua conta real.` |

### Seção Solução (light)
| Original | Tradução |
|---|---|
| The Solution | A Solução |
| `Growth Room is a weekly mastermind built for people selling online, not spectators.` | `O Growth Room é um mastermind semanal feito para quem vende online, não para espectadores.` |
| `A small group of people selling online. One expert. Real accounts on screen every week. You show up, you bring your real situation, and you leave knowing exactly what to do next.` | `Um pequeno grupo de pessoas vendendo online. Um especialista. Contas reais na tela toda semana. Você aparece com sua situação real e sai sabendo exatamente o que fazer.` |
| `— 01 / WEEKLY` | `— 01 / SEMANAL` |
| `Live sessions, every Tuesday` | `Sessões ao vivo, toda terça-feira` |
| `60 minutes, cameras on, real accounts on screen. Same seats every week — you build pattern recognition together, not in isolation.` | `60 minutos, câmeras ligadas, contas reais na tela. Os mesmos lugares toda semana — você desenvolve reconhecimento de padrões junto com o grupo, não isolado.` |
| `Tue 18:00 CET · 52 sessions / yr` | `Ter 18:00 CET · 52 sessões / ano` |
| `— 02 / DIAGNOSTIC` | `— 02 / DIAGNÓSTICO` |
| `Real account diagnostics` | `Diagnóstico de contas reais` |
| `Two members put their accounts on screen each week. Spend, audiences, creatives, attribution — examined cold by the expert and the room.` | `Dois membros colocam suas contas na tela a cada semana. Gasto, públicos, criativos, atribuição — examinados a fundo pelo especialista e pelo grupo.` |
| `2 hot seats / week · rotating` | `2 hot seats / semana · rotativo` |
| `— 03 / APPLIED` | `— 03 / APLICADO` |
| `Applied strategy, live` | `Estratégia aplicada, ao vivo` |
| `No frameworks for the wall. Decisions you can ship Wednesday morning — with the math, the creative angle and the test plan attached.` | `Nada de frameworks para enfeitar parede. Decisões que você pode executar na quarta de manhã — com a matemática, o ângulo criativo e o plano de teste anexados.` |
| `Decisions, not slides` | `Decisões, não slides` |
| `— See if you fit` | `— Veja se você se encaixa` |
| `Pick the format that fits where you are. 47 priority spots remaining.` | `Escolha o formato que se encaixa no seu momento. 47 vagas prioritárias restantes.` |

### Value Stack
| Original | Tradução |
|---|---|
| What's inside | O que está incluído |
| `Everything an operator actually uses. Nothing else.` | `Tudo que um operador realmente usa. Nada além disso.` |
| Weekly live mastermind | Mastermind ao vivo semanal |
| `52 sessions/year. Cameras on. Same room, same operators.` | `52 sessões/ano. Câmeras ligadas. Mesmo grupo, mesmos operadores.` |
| Hot-seat account review | Revisão de conta no hot-seat |
| `Your account, audited cold by the expert and 9 peers — 4×/yr.` | `Sua conta, auditada a fundo pelo especialista e 9 pares — 4×/ano.` |
| Async expert desk | Mesa de especialista assíncrona |
| `Drop a screenshot, get a reasoned answer in < 24h, weekdays.` | `Mande um print, receba uma resposta fundamentada em menos de 24h, dias úteis.` |
| Member-only directory | Diretório exclusivo de membros |
| `A private network of people selling online who are serious about growing. No spectators.` | `Uma rede privada de pessoas vendendo online que levam crescimento a sério. Sem espectadores.` |
| Quarterly tracking audit | Auditoria de rastreamento trimestral |
| `Pixel, CAPI, server-side, GA4 — checked end-to-end every 90 days.` | `Pixel, CAPI, server-side, GA4 — verificados de ponta a ponta a cada 90 dias.` |
| Core offer | Oferta principal |
| `Weekly expert access. Without the six-figure price tag.` | `Acesso semanal a especialistas. Sem o preço de seis dígitos.` |
| `The same level of expert guidance people pay agencies and consultants thousands a month for — but live, in a room, on your actual account.` | `O mesmo nível de orientação especializada pelo qual as pessoas pagam milhares por mês a agências e consultores — mas ao vivo, em grupo, na sua conta real.` |
| From €69/session | A partir de €69/sessão |
| `Starting from €69/session · cancel anytime` | `A partir de €69/sessão · cancele quando quiser` |

### Outcomes
| Original | Tradução |
|---|---|
| Outcomes | Resultados |
| `What members actually walk out with.` | `O que os membros realmente levam para casa.` |
| `A pixel/CAPI stack you trust within the first 30 days.` | `Um stack de pixel/CAPI em que você confia nos primeiros 30 dias.` |
| `Signal quality, end-to-end` | `Qualidade do sinal, de ponta a ponta` |
| `Measurable ROAS lift on at least one core campaign.` | `Melhora mensurável de ROAS em pelo menos uma campanha principal.` |
| `Cohort avg 2.4×` | `Média da coorte: 2.4×` |
| `Funnel breakpoints found, prioritized and actually fixed.` | `Pontos de quebra do funil encontrados, priorizados e realmente corrigidos.` |
| `Page → checkout` | `Página → checkout` |
| `One single weekly priority — not fifteen open dashboards.` | `Uma única prioridade semanal — não quinze dashboards abertos.` |
| `Decision velocity` | `Velocidade de decisão` |
| `A scaling plan with the math attached, not vibes.` | `Um plano de escala com a matemática junto, não feeling.` |
| `Profit per €` | `Lucro por €` |

### How it works
| Original | Tradução |
|---|---|
| How it works | Como funciona |
| `Three steps. No sales theatre.` | `Três passos. Sem teatro de vendas.` |
| `Apply & book a 15-min intro` | `Candidate-se e marque uma intro de 15 min` |
| `Three questions, two minutes. We screen for stage and spend — not for fit-on-camera.` | `Três perguntas, dois minutos. Avaliamos estágio e verba — não aparência em câmera.` |
| `~ 2 min · async` | `~ 2 min · assíncrono` |
| `Match to a room and an expert` | `Match com um grupo e um especialista` |
| `We pair you with operators at your stage and the expert whose lens fits your account.` | `Combinamos você com operadores no seu estágio e o especialista cuja visão se encaixa na sua conta.` |
| `~ 4 days · curated` | `~ 4 dias · curado` |
| `Show up Tuesday. Ship Wednesday.` | `Apareça na terça. Execute na quarta.` |
| `You only pay once you're matched to a room that fits your stage. Cancel any quarter, no lock-ins, no pressure.` | `Você só paga depois de ser alocado em um grupo que se encaixa no seu estágio. Cancele em qualquer trimestre, sem contratos, sem pressão.` |
| `Recurring · cancel anytime` | `Recorrente · cancele quando quiser` |
| `— Step 01` | `— Passo 01` |
| `Skip the cold pitch. Apply now and we'll match you to a room.` | `Sem pitch frio. Candidate-se agora e faremos o match com um grupo.` |

### Comparação
| Original | Tradução |
|---|---|
| The math | A comparação |
| `Traditional consulting versus Growth Room.` | `Consultoria tradicional versus Growth Room.` |
| `Same operator-grade access. Different decade.` | `O mesmo acesso de nível operador. Uma década diferente.` |
| Old model | Modelo antigo |
| Traditional consulting | Consultoria tradicional |
| `€150K+ / year, retainer` | `€150K+ / ano, retainer` |
| `One advisor, one inbox, one perspective.` | `Um consultor, uma caixa de entrada, uma perspectiva.` |
| `Slide decks shipped on a 2-week lag.` | `Apresentações entregues com 2 semanas de atraso.` |
| `Locked in 12-month contracts with cancel fees.` | `Preso em contratos de 12 meses com multa de cancelamento.` |
| `Generalist frameworks, no live account reviews.` | `Frameworks generalistas, sem revisão de contas ao vivo.` |
| `You're billed whether or not you ship.` | `Você é cobrado independente de executar ou não.` |
| `No peer network — you eat the risk alone.` | `Sem rede de pares — você assume o risco sozinho.` |
| Growth Room | Growth Room |
| `A room of operators & one expert` | `Um grupo de operadores e um especialista` |
| `From / €69 / session` | `A partir de / €69 / sessão` |
| `Nine operators + an expert in the same room weekly.` | `Nove operadores + um especialista no mesmo grupo toda semana.` |
| `Live decisions, shipped the same week.` | `Decisões ao vivo, executadas na mesma semana.` |
| `No cost until you're matched. Quarter-to-quarter.` | `Sem custo até o match. Trimestre a trimestre.` |
| `Real account reviews, on screen, every Tuesday.` | `Revisão de contas reais, na tela, toda terça-feira.` |
| `You leave each session with one decision and one fix.` | `Você sai de cada sessão com uma decisão e uma correção.` |
| `Operator-only directory. Vetted, never public.` | `Diretório exclusivo de operadores. Verificado, nunca público.` |
| More access / `9 peers + expert, weekly` | Mais acesso / `9 pares + especialista, semanal` |
| Less cost / `From €69/session` | Menos custo / `A partir de €69/sessão` |
| Real growth / `Profit per euro spent` | Crescimento real / `Lucro por euro investido` |
| `— From €69/session` | `— A partir de €69/sessão` |
| `Get retainer-grade access without the retainer price tag.` | `Tenha acesso de nível retainer sem o preço de retainer.` |

### Resultados (light section)
| Original | Tradução |
|---|---|
| `Real results · Cohort 03` | `Resultados reais · Coorte 03` |
| `Numbers from actual accounts. Operators, not influencers.` | `Números de contas reais. Operadores, não influenciadores.` |
| `Aggregated across 32 operator accounts during the last 12-week cohort. Verified by the in-room tracking audit.` | `Agregado em 32 contas de operadores durante a última coorte de 12 semanas. Verificado pela auditoria de rastreamento in-room.` |
| Operators | Operadores |
| `Across SaaS, DTC, marketplaces and B2B services in DACH/EU.` | `Em SaaS, DTC, marketplaces e serviços B2B em DACH/EU.` |
| Tracked spend | Verba rastreada |
| `Per-week total spend reviewed inside the rooms.` | `Total de verba semanal revisado dentro dos grupos.` |
| Conversions / wk | Conversões / sem |
| `Avg. weekly purchases / leads attributed in-room across cohort.` | `Média semanal de compras / leads atribuídos in-room em toda a coorte.` |
| Avg. ROAS lift | Lift médio de ROAS |
| `Median lift on the campaign each operator chose to focus.` | `Lift mediano na campanha que cada operador escolheu focar.` |
| Testimonial 1 (Marco V.) | Manter em inglês (depoimento real) |
| Testimonial 2 (Ana R.) | Manter em inglês (depoimento real) |
| `— Be the next number` | `— Seja o próximo número` |
| `Cohort 04 opens this month. Apply for a seat.` | `A coorte 04 abre este mês. Candidate-se a uma vaga.` |

### FAQ
| Original | Tradução |
|---|---|
| `Questions worth asking.` | `Perguntas que valem a pena fazer.` |
| `Is this a course?` | `Isso é um curso?` |
| `No. There is no curriculum, no modules, no recorded library to "complete." Every session is live, ten operators in the room, two real accounts on screen. If you want a course, this is the wrong product.` | `Não. Não há currículo, módulos nem biblioteca gravada para "completar." Cada sessão é ao vivo, dez operadores no grupo, duas contas reais na tela. Se você quer um curso, este não é o produto certo.` |
| `Do I need to already be running ads to join?` | `Preciso já estar rodando anúncios para entrar?` |
| `No. Some members are actively running campaigns, others are just starting. We match you to a room based on your stage — there are rooms built for people launching their first campaign and rooms for people already spending serious budget. The free intro meeting is how we figure out the right fit.` | `Não. Alguns membros estão rodando campanhas ativamente, outros estão começando. Fazemos o match com um grupo baseado no seu estágio — há grupos para quem está lançando a primeira campanha e grupos para quem já investe verba expressiva. A reunião de intro gratuita é como descobrimos o encaixe certo.` |
| `When do I actually pay?` | `Quando eu realmente pago?` |
| `Only after the 15-min intro and after we've matched you to a specific room and expert. If we don't have a fit, you don't pay anything. Billing is quarterly and you can cancel any quarter.` | `Somente após a reunião de 15 min e depois que fizermos o match com um grupo e especialista específico. Se não houver encaixe, você não paga nada. A cobrança é trimestral e você pode cancelar a qualquer trimestre.` |
| `Who are the experts in the room?` | `Quem são os especialistas no grupo?` |
| `Operators who've personally managed €10M+ in spend and led growth at companies you've heard of. We share specific names privately during the intro meeting — we don't list them publicly because we're protecting their calendars, not building a marketing site.` | `Operadores que gerenciaram pessoalmente €10M+ em verba e lideraram o crescimento em empresas que você já ouviu falar. Compartilhamos nomes específicos de forma privada durante a reunião de intro — não os listamos publicamente porque estamos protegendo as agendas deles, não construindo um site de marketing.` |
| `— Still curious?` | `— Ainda curioso?` |
| `Best way to get answers: a 15-minute intro meeting.` | `A melhor forma de obter respostas: uma reunião de intro de 15 minutos.` |

### Pricing
| Original | Tradução |
|---|---|
| Pricing | Preços |
| `Simple. One session a week.` | `Simples. Uma sessão por semana.` |
| `60 minutes of live coaching every week. Pick the format that fits — the smaller the room, the more time on your account.` | `60 minutos de coaching ao vivo toda semana. Escolha o formato que se encaixa — quanto menor o grupo, mais tempo na sua conta.` |
| `Every plan starts with a free 15-minute intro meeting.` | `Todo plano começa com uma reunião de intro gratuita de 15 minutos.` |
| `No card. No commitment. We find the right room for you — or you walk away with zero cost.` | `Sem cartão. Sem compromisso. Encontramos o grupo certo para você — ou você vai embora sem custo algum.` |
| `Group · 10 people` | `Grupo · 10 pessoas` |
| `Expert eyes on your account every week. You share the 60 minutes with 9 other operators — best value, least individual airtime per session.` | `Olhos especializados na sua conta toda semana. Você compartilha os 60 minutos com outros 9 operadores — melhor custo-benefício, menos tempo individual por sessão.` |
| `1 session per week · 60 min` | `1 sessão por semana · 60 min` |
| Free 15 min Intro Meeting | Reunião de Intro Gratuita de 15 min |
| `Weekly live session (60 min)` | `Sessão ao vivo semanal (60 min)` |
| `Group account review` | `Revisão de conta em grupo` |
| `Up to 10 people per room` | `Até 10 pessoas por grupo` |
| `Private community access` | `Acesso à comunidade privada` |
| `Dedicated time on your account` | `Tempo dedicado à sua conta` |
| `Apply For Next Room →` | `Candidatar-se ao Próximo Grupo →` |
| Most popular | Mais popular |
| `Group · 5 people` | `Grupo · 5 pessoas` |
| `Half the room, double the airtime. With only 5 operators you get significantly more time on your account each session than in the 10-person group.` | `Metade do grupo, o dobro do tempo de fala. Com apenas 5 operadores você tem significativamente mais tempo na sua conta a cada sessão do que no grupo de 10.` |
| `More airtime per person than the 10-person group` | `Mais tempo de fala por pessoa do que no grupo de 10` |
| `Max 5 people per room` | `Máx. 5 pessoas por grupo` |
| `Deeper focus on your account each week` | `Foco mais aprofundado na sua conta toda semana` |
| Available now | Disponível agora |
| `The full 60 minutes is yours. No group, no shared time — the expert's complete attention on your account, every single session.` | `Os 60 minutos completos são seus. Sem grupo, sem tempo compartilhado — a atenção total do especialista na sua conta, em cada sessão.` |
| `100% of the session on your account` | `100% da sessão na sua conta` |
| `Just you and the expert` | `Só você e o especialista` |
| `Maximum depth — no sharing, no waiting` | `Máxima profundidade — sem divisão, sem espera` |
| `Get it Now →` | `Quero Agora →` |
| `Need more than 60 minutes a week?` | `Precisa de mais de 60 minutos por semana?` |
| `If you have an urgent situation or need more intensive support, reach out. We'll put something together that fits.` | `Se você tem uma situação urgente ou precisa de suporte mais intensivo, entre em contato. Vamos montar algo que se encaixe.` |
| `Get in touch →` | `Fale conosco →` |

### Footer
| Original | Tradução |
|---|---|
| `A private weekly room for people selling online who want their ads to actually work. Expert help. Real accounts. Every week.` | `Um grupo semanal privado para quem vende online e quer que os anúncios realmente funcionem. Ajuda especializada. Contas reais. Toda semana.` |
| Product | Produto |
| Problem | Problema |
| Solution | Solução |
| Compare | Comparar |
| Results | Resultados |
| Apply | Candidatar-se |
| See Plans | Ver Planos |
| Legal | Legal |
| Main site | Site principal |
| Privacy settings | Configurações de privacidade |
| `© 2026 Growth Room · Built for operators, not spectators` | `© 2026 Growth Room · Feito para operadores, não espectadores` |
| `Berlin · Lisbon · Remote` | `Berlim · Lisboa · Remoto` |

---

## Notas importantes

- O componente `ApplyModal` está em inglês — pode ser traduzido separadamente
- O componente `CookieBanner` está em inglês — pode ser traduzido separadamente
- Os depoimentos (Marco V. e Ana R.) devem ser mantidos em inglês (são citações reais)
- Os textos técnicos dentro do SVG do room card (ROOM · 04, SESSION 12 / 52, REC · 00:42:18) devem ser mantidos em inglês
- A URL canônica deve ser `https://growthroom.eu/br`
- Manter todos os `data-product` em inglês (usados pelo form script)

## Imports corretos para br/index.astro

```astro
---
import MetaEventId from '../../components/MetaEventId.astro';
import FormScript from '../../components/FormScript.astro';
import ApplyModal from '../../components/ApplyModal.astro';
import CookieBanner from '../../components/CookieBanner.astro';
---
```
