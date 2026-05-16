# Eduardo Fontana | Portfolio

Portfólio pessoal com tema cyber-security, partículas 3D interativas e terminal tipográfico. Desenvolvido com Next.js, React, Three.js e Tailwind CSS.

## Tecnologias

- **Next.js 16** — App Router, Turbopack
- **React 19** — Server Components + Client Components
- **Three.js / R3F** — Background 3D com nebulosas e 700 partículas
- **Framer Motion 12** — Animações, scroll-driven, mouse tracking
- **Tailwind CSS 4** — Utilitário com theme customizado
- **TypeScript** — Tipagem estática estrita

## Funcionalidades

- Fundo 3D com partículas em disco galáctico + 4 nuvens de nebulosa
- Mouse parallax e reatividade ao scroll no background
- Terminal interativo com 4 comandos em loop de digitação
- Efeitos ambientais: lens flare, vignette, scanlines, noise overlay, cinematic sweeps
- Seções: Hero, Sobre, Projetos (GitHub API), Habilidades, Contato
- Navegação com indicador de seção ativa e menu mobile
- Modo cursor personalizado para dispositivos com ponteiro
- `prefers-reduced-motion` respeitado
- Content-Security-Policy configurada
- Headers de segurança (HSTS, X-Frame-Options, etc.)

## Como executar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção estática |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa ESLint |

## Estrutura

```
src/
├── app/
│   ├── globals.css        # Estilos globais, temas, keyframes
│   ├── layout.tsx         # Root layout com background 3D
│   └── page.tsx           # Página principal
├── components/
│   ├── AmbientEffects.tsx # Mouse glow + vignette overlay
│   ├── CinematicBackground.tsx  # Three.js: partículas + nebulosas
│   ├── Contact.tsx        # Formulário mailto + info contato
│   ├── Hero.tsx           # Terminal typing + parallax
│   ├── Navigation.tsx     # Nav fixa com indicador ativo
│   ├── Projects.tsx       # Grid de projetos via GitHub API
│   └── Skills.tsx         # Terminal simulado + skill bars
└── public/
    └── robots.txt
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

Desenvolvido por [Eduardo Fontana](https://github.com/eduardofontana)
