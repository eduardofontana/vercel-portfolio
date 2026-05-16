# Eduardo Fontana | Portfolio

Portfolio pessoal com tema cyber-security, background 3D interativo e terminal tipografico. Desenvolvido com Next.js, React, Three.js, Framer Motion e Tailwind CSS.

## Tecnologias

- **Next.js 16** - App Router e Turbopack
- **React 19** - Server Components e Client Components
- **Three.js / React Three Fiber** - Background 3D com particulas e nebulosas
- **Framer Motion 12** - Animacoes, efeitos por scroll e mouse tracking
- **Tailwind CSS 4** - Tema customizado e utilitarios
- **TypeScript** - Tipagem estatica

## Funcionalidades

- Hero com terminal animado e elementos de interface cyber-security.
- Fundo 3D com particulas, nebulosas, parallax por mouse e reatividade ao scroll.
- Secoes de Sobre, Projetos, Habilidades e Contato.
- Projetos carregados pela GitHub API.
- Menu responsivo com indicador de secao ativa.
- Cursor personalizado em dispositivos com ponteiro fino.
- Suporte a `prefers-reduced-motion`.
- Headers de seguranca configurados, incluindo Content Security Policy compativel com a hidratacao do Next.js.

## Como executar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de producao |
| `npm run start` | Inicia o servidor de producao apos o build |
| `npm run lint` | Executa o ESLint |

## Validacao

Antes de publicar alteracoes, rode:

```bash
npm run lint
npm run build
```

Observacao: o build usa `next/font/google`, entao precisa de acesso a internet para baixar/validar as fontes durante a compilacao.

## Estrutura

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AmbientEffects.tsx
│   ├── CinematicBackground.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── public/
    └── robots.txt
```

## Deploy

O projeto esta pronto para deploy na Vercel. Ao conectar o repositorio, cada push na branch `main` pode disparar um novo deploy automaticamente.

---

Desenvolvido por [Eduardo Fontana](https://github.com/eduardofontana).
