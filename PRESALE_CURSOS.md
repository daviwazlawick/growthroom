# Pré-vendas dos cursos — como o teste funciona

Quatro landings de lista de espera, uma por produto do projeto `cursos-online`,
para descobrir qual produto vale gravar antes de gravar qualquer um.

| Produto | Rota | Idioma | Preço exposto |
|---|---|---|---|
| Escritório Assistido | `/cursos/escritorio-assistido` | pt-BR | R$ 597 |
| Einfach fragen | `/cursos/einfach-fragen` | de | 147 € c/ IVA |
| Voll gebucht | `/cursos/voll-gebucht` | de | 297 € |
| Spurensuche | `/cursos/spurensuche` | de | 197 € c/ IVA |

Índice de revisão interna: `/cursos`. Resultados: `/admin/presale` (atrás do login do admin).

## O desenho do teste

As quatro páginas têm **a mesma estrutura, na mesma ordem**: herói com preço,
problema, o que o curso constrói, grade das 8 aulas, para quem é e para quem não
é, preço, formulário, perguntas. A única variável é o produto. Mexeu em ordem de
seção, tamanho de fonte ou texto de botão numa página, mexe nas quatro.

Cada página muda de identidade visual e de idioma, porque cada produto é uma
marca isolada. Nenhuma delas é assinada por outra marca do autor e nenhuma
menciona pessoa física, biografia ou nacionalidade — exceto o Escritório
Assistido, que é o produto assinado como pessoa por decisão do projeto.

**Nada é vendido.** O evento medido é a entrada na lista de espera. Dentro do
formulário existe uma caixa opcional, "por este preço eu compraria", que separa
curiosidade de intenção. Um produto com muita lista e pouca aceitação de preço
está com o preço errado, não com o tema errado.

## O que medir, e a ordem em que se olha

1. **Entrada na lista ÷ visitas.** É a comparação principal.
2. **Aceitação do preço entre quem entrou.** Diz se o ticket para de pé.
3. **Custo por entrada na lista**, quando houver tráfego pago. Esse número é o
   que separa um mercado barato de um caro, e é o que decide o próximo produto.
4. **Segmento**, para saber quem apareceu de fato.

Regra combinada com o projeto: **um funil por vez**. Não subir tráfego para dois
produtos ao mesmo tempo, ou a leitura vira ruído.

## O que a página faz por dentro

- Visita é registrada no servidor em `data/presale-views.csv`: produto, data,
  caminho, referrer, tipo de aparelho e UTMs. **Sem cookie, sem IP, sem
  identificador**, e com bots conhecidos fora da conta.
- Cadastro vai para `data/presale-leads.csv` e, se `PUBLIC_WEBHOOK_URL` estiver
  configurada, também para o n8n com `lead_type: presale_waitlist`. Se houver
  SMTP no `.env`, chega um e-mail por cadastro.
- Os dois CSVs estão no `.gitignore`.
- **Nenhum pixel, nenhum GTM, nenhum cookie** nas quatro páginas. Elas são
  `noindex` enquanto o teste roda.

## Antes de subir tráfego — bloqueadores reais

- **Impressum** nas três páginas alemãs. Está como `[PLACEHOLDER]` visível no
  rodapé de propósito, para ser impossível esquecer. Uma página de vendas alemã
  sem Impressum é exatamente o erro que o Voll gebucht ensina a evitar.
- **Revisão nativa** das três páginas alemãs. No Spurensuche, o revisor precisa
  ter experiência real de Ahnenforschung. No Einfach fragen, a primeira pergunta
  ao revisor é se o `du` soa desrespeitoso para alguém de 65 anos.
- **CMP + consentimento antes de qualquer pixel**, se o teste passar a rastrear
  conversão no Meta. Hoje não rastreia.
- Autorizações pendentes do Escritório Assistido antes de citar o evento ou o
  escritório usado como case.

## Regras de copy que valem aqui igual ao resto do projeto

Nenhum número inventado, nenhum depoimento, nenhuma promessa de resultado, de
faturamento ou de data de lançamento. Nada nas páginas alemãs sugere
acompanhamento individual, correção de tarefa ou verificação de aprendizado —
isso não é detalhe de copy, é o que mantém o produto fora do
Fernunterrichtsschutzgesetz.

## Onde mexer

- Texto e preço de cada produto: `src/content/presale/<slug>.ts`.
- Estrutura e visual da página: `src/components/PresalePage.astro` (vale para as quatro).
- Rota e registro de visita: `src/pages/cursos/[slug].astro`.
- Recepção do cadastro: `src/pages/api/presale.ts`.
- Painel: `src/pages/admin/presale.astro`.
