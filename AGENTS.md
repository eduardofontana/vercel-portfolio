# 🤖 AGENTS.md — Portfolio WebDeveloper & Pentester

## 🎯 Objetivo do Projeto
Criar um portfólio moderno, minimalista e responsivo para um profissional Web Developer e Pentester.

O foco é:
- Performance
- Design elegante
- Simplicidade
- Deploy fácil na Vercel

---

## 🧠 Agents a serem utilizados

### 🎨 Design Agent (OBRIGATÓRIO)
Responsável por:
- Definir identidade visual
- Criar layout moderno e consistente
- Escolher tipografia e cores
- Garantir boa UX/UI

Diretrizes:
- Dark mode padrão
- Estilo moderno com leve estética hacker/cyberpunk
- Interface limpa e profissional (evitar exageros)

---

### ⚛️ Frontend Agent
Responsável por:
- Estrutura do projeto
- Componentização
- Responsividade
- Performance

---

## 🧱 Stack obrigatória
- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript (preferencial)

---

## 🎨 Diretrizes de Design

- Tema escuro (default)
- Cores principais:
  - Preto / cinza escuro
  - Verde neon ou azul tech (detalhes)
- Tipografia:
  - Inter ou Space Grotesk
- Layout:
  - Minimalista
  - Espaçamento bem definido
  - Uso de cards e seções bem separadas

---

## 📄 Estrutura de Páginas

### 1. Home
- Nome + título: "Web Developer & Pentester"
- Descrição curta
- CTA: Projetos / Contato

---

### 2. Sobre
- Bio profissional
- Separação clara:
  - Desenvolvimento Web
  - Segurança / Pentest

---

### 3. Projetos
Lista dinâmica contendo:
- Nome
- Descrição
- Tecnologias
- Link (GitHub/demo)

---

### 4. Skills
Divididas em:
- Frontend
- Backend
- Segurança

Exibir como:
- Cards ou badges

---

### 5. Contato
- Email
- GitHub
- LinkedIn

---

## ⚙️ Funcionalidades obrigatórias

- Totalmente responsivo
- Navbar fixa
- Scroll suave
- SEO básico (metadata)
- Performance otimizada
- Código limpo e reutilizável

---

## 📁 Estrutura de Pastas

/app
/components
/data
/styles
/public

---

## 📦 Organização de Código

- Criar `/data/projects.ts` para projetos
- Criar componentes reutilizáveis:
  - Navbar
  - Hero
  - ProjectCard
  - SkillsSection
- Separar lógica e UI

---

## 💡 Diferenciais (implementar pelo menos 1)

- Terminal interativo fake (ex: comandos simulados)
OU
- Efeito typewriter
OU
- Pequenas animações (hover / entrada)

---

## 🚀 Execução

O projeto deve rodar com:

```bash
npm install
npm run dev