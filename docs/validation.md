# Validação da landing page

Verificação local em 31/10/2026, na branch `feat/personal-landing`, usando build de produção Next.js 16.4.3 e Chrome headless.

## Verificações concluídas

- `npm ci`: instalação reproduzível, sem vulnerabilidades reportadas.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado; página, sitemap e imagens sociais pré-renderizados.
- `npm run test:e2e`: **9 testes aprovados**.
- `git diff --check`: sem erros de whitespace.

Os testes cobrem as larguras de 360, 390, 768 e 1440 px, carregamento de imagens, ausência de overflow horizontal, console e CSP; axe WCAG 2 A/AA e 2.1 A/AA; foco, Escape e navegação do menu móvel; cópia do e-mail e recusa da área de transferência; monograma e movimento reduzido; conteúdo sem JavaScript; metadados, imagens sociais, sitemap, robots e redirecionamentos.

As capturas desktop e mobile foram inspecionadas visualmente. Os diagramas são identificados como ilustrações e têm textos alternativos. Os repositórios dos três projetos foram consultados; não continham screenshots para reutilização.

## Lighthouse mobile

Uma execução final no servidor local de produção, com configuração mobile padrão do Lighthouse:

| Categoria | Resultado |
| --- | --- |
| Desempenho | 100 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

- LCP: **0,8 s**.
- CLS: **0**.
- Total Blocking Time: **20 ms**.
- Rótulos visíveis e nomes acessíveis: verificação aprovada.

Relatórios completos locais: `.qa/lighthouse-mobile.report.html` e `.qa/lighthouse-mobile.report.json`. Screenshots: `.qa/landing-{360,390,768,1440}.png`.

Os resultados são medições de laboratório local, não métricas reais de visitantes. A auditoria automática não substitui uma revisão completa com tecnologias assistivas. O build remoto e o preview Vercel devem ser verificados antes da promoção para produção.
