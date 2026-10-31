# Eduardo Fontana — landing page pessoal

Portfólio em português com identidade grafite/lima, monograma EF interativo e três projetos selecionados: Vitrine App, Clinica.app e SentinelFW.

## Executar localmente

Requer Node.js 22 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. As fontes Space Grotesk e JetBrains Mono são baixadas pelo `next/font` durante a compilação e servidas localmente para os visitantes. O primeiro build requer acesso ao Google Fonts.

## Implementação

- Next.js App Router, React, TypeScript e Tailwind CSS.
- Página pré-renderizada, com conteúdo disponível sem JavaScript.
- JavaScript isolado na navegação móvel, no monograma com Framer Motion e na cópia de e-mail.
- Menu com diálogo nativo, foco contido, fechamento por Escape e foco direcionado à seção selecionada.
- Monograma estático em toque e com `prefers-reduced-motion`; sem WebGL ou Three.js.
- Projetos locais e tipados, sem consulta à API do GitHub durante a visita.
- Contato por `mailto:` e cópia de endereço, com feedback acessível para sucesso e falha. Não há serviço de envio de mensagens.
- Metadados em português, URL canônica, sitemap, robots e imagens Open Graph/Twitter geradas no build.

## Editar o conteúdo

`src/data/portfolio.ts` centraliza contatos, projetos e competências. Cada projeto contém nome, categoria, resumo, contribuição técnica, tecnologias, imagem, texto alternativo e repositório. O campo `demo` é opcional: só adicioná-lo quando existir uma demonstração pública confirmada.

Os arquivos em `public/projects/` são **diagramas ilustrativos**, identificados como tal na página; não são capturas dos produtos. Os repositórios consultados não continham screenshots. Os textos descrevem capacidades documentadas, sem métricas ou resultados comerciais presumidos.

O layout está em `src/app/page.tsx`, os estilos em `src/app/globals.css`, e as interações em `src/components/`. As cores estão definidas por variáveis CSS.

## Verificar

```sh
npm ci
npm run typecheck
npm audit --audit-level=high
npm run build
npm run test:e2e
```

Os testes locais usam o Chrome instalado. No CI, o Playwright instala Chromium. Em um computador sem Chrome, instale-o ou ajuste `channel` em `playwright.config.ts` para usar o Chromium do Playwright.

Os testes iniciam e encerram um servidor de produção em `127.0.0.1:3100`. Cobrem 360, 390, 768 e 1440 px; acessibilidade com axe; foco do menu; cópia de e-mail e permissão negada; movimento reduzido; conteúdo sem JavaScript; SEO; imagens e redirecionamentos. Screenshots ficam em `.qa/`, e o relatório em `playwright-report/`, ambos ignorados pelo Git.

## Vercel

O projeto continua usando o preset Next.js, com `npm ci` e `npm run build`. Não depende de banco, chaves ou variáveis de ambiente para funcionar. O domínio canônico é `https://eduardofontana.com.br`.

Validar a branch `feat/personal-landing` em preview antes de incorporar à `main`. Esta implementação não altera o domínio nem promove automaticamente uma versão para produção.

A política de segurança permite recursos da própria origem. Em desenvolvimento, libera avaliação de código e WebSocket local para o Next.js; em produção essas exceções não são incluídas. Os redirecionamentos legados `/about`, `/projects`, `/skills` e `/contact` continuam apontando para `/`.

## Referências e conteúdo

Referências de composição: [Seyi](https://www.seyi.dev/), [Brittany Chiang](https://brittanychiang.com/), [Rijk de Wet](https://rijk.dev/) e [Brittany Callahan](https://www.brittanycallahan.com/). Layout e diagramas foram desenvolvidos para este projeto.

Fontes dos projetos: [Vitrine App](https://github.com/eduardofontana/vitrine.app), [Clinica.app](https://github.com/eduardofontana/clinica.app) e [SentinelFW](https://github.com/eduardofontana/sentinel).
