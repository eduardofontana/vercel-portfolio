# Vercel Portfolio

Portfolio pessoal desenvolvido com foco em apresentacao profissional, performance e deploy simples na Vercel.

O projeto segue uma proposta visual dark com identidade tech/editorial, pensado para um perfil de `Web Developer & Pentester`.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Caracteristicas

- Layout responsivo
- Navbar fixa com scroll suave
- Hero com efeito typewriter
- Secoes de Sobre, Projetos, Skills e Contato
- Dados de projetos separados em `data/projects.ts`
- Componentes reutilizaveis
- Headers basicos de hardening no `Next.js`

## Estrutura

```text
app/
components/
data/
public/
styles/
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Build de producao

```bash
npm run build
npm run start
```

## Personalizacao

Os pontos principais para editar o conteudo sao:

- `app/page.tsx`: textos principais e secao de contato
- `data/projects.ts`: lista de projetos
- `components/`: blocos reutilizaveis da interface
- `styles/theme.css`: tokens visuais da paleta

## Seguranca

O projeto inclui medidas basicas de hardening no `next.config.ts`, incluindo:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

## Deploy

O deploy recomendado e na Vercel.

Passos gerais:

1. Importar este repositorio na Vercel.
2. Manter os comandos padrao detectados pelo Next.js.
3. Publicar.

## Autor

Eduardo Fontana

- GitHub: `https://github.com/eduardofontana`
- Instagram: `https://www.instagram.com/duhduhfontana/`
- Email: `fontana.df@gmail.com`
