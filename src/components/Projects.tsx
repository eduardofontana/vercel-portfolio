"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

interface Project {
  id: number;
  title: string;
  problem: string;
  delivery: string;
  stack: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "botjohn",
    problem:
      "Comunidades no Discord costumam crescer com estrutura inconsistente, configuração manual excessiva e pouca automação para operação contínua.",
    delivery:
      "Desenvolvi um bot modular capaz de analisar templates, recriar servidores com estrutura otimizada, aplicar regras de progressão e acoplar alertas de live via Twitch.",
    stack: ["Node.js", "discord.js", "Twitch API", "Axios"],
    link: "https://github.com/eduardofontana/botjohn/blob/main/README.md",
    github: "https://github.com/eduardofontana/botjohn",
  },
  {
    id: 2,
    title: "pixelia-game2D",
    problem:
      "Criar um platformer 2D consistente exige controle de gameplay, progressão de fase e estrutura técnica capaz de sustentar combate e chefes sem perder ritmo.",
    delivery:
      "Construí um jogo em Godot com combate corpo a corpo, progressão de cenário e batalhas contra chefes, mantendo o projeto organizado para evolução contínua.",
    stack: ["Godot 4.6", "2D Platformer", "Game Dev", "Boss Fights"],
    link: "https://github.com/eduardofontana/pixelia-game2D/blob/main/README.md",
    github: "https://github.com/eduardofontana/pixelia-game2D",
  },
  {
    id: 3,
    title: "vercel-portfolio",
    problem:
      "Um portfólio pessoal precisa comunicar nível técnico e direção visual sem cair em aparência genérica ou em excesso de efeito sem função.",
    delivery:
      "Implementei um portfólio em Next.js 16 com identidade visual forte, motion controlado e base moderna para apresentar trabalho, perfil e posicionamento profissional.",
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Framer Motion"],
    link: "https://github.com/eduardofontana/vercel-portfolio/blob/main/README.md",
    github: "https://github.com/eduardofontana/vercel-portfolio",
  },
  {
    id: 4,
    title: "nextjs-portfolio",
    problem:
      "Antes da versão atual, era necessário estruturar uma presença online mais sólida, com base em React e Next.js, para validar direção visual e organização do conteúdo.",
    delivery:
      "Desenvolvi uma versão anterior do portfólio em Next.js 13 como base de exploração visual, organização de conteúdo e evolução gradual da apresentação online.",
    stack: ["Next.js 13", "React 18", "Tailwind 3", "TypeScript"],
    link: "https://github.com/eduardofontana/nextjs-portfolio/blob/main/README.md",
    github: "https://github.com/eduardofontana/nextjs-portfolio",
  },
  {
    id: 5,
    title: "my-portfolio",
    problem:
      "Era necessário consolidar uma presença pessoal online em uma stack React tradicional, com deploy simples e estrutura suficiente para apresentar perfil e trajetória.",
    delivery:
      "Desenvolvi um portfólio pessoal com React, Bootstrap, Sass e deploy na Vercel, servindo como etapa concreta de posicionamento e apresentação profissional.",
    stack: ["React 18", "Bootstrap", "Sass", "Vercel"],
    link: "https://github.com/eduardofontana/my-portfolio/blob/main/README.md",
    github: "https://github.com/eduardofontana/my-portfolio",
  },
  {
    id: 6,
    title: "my_demo_reactjs",
    problem:
      "Antes de projetos mais refinados, era importante validar a base prática de criação, execução e estruturação de aplicações React em um fluxo simples e reproduzível.",
    delivery:
      "Montei um projeto demonstrativo em React com Create React App para consolidar setup, scripts e fundamentos de desenvolvimento front-end na prática.",
    stack: ["React 18", "Create React App", "JavaScript", "React Scripts"],
    link: "https://github.com/eduardofontana/my_demo_reactjs/blob/main/README.md",
    github: "https://github.com/eduardofontana/my_demo_reactjs",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(transparent 50%, rgba(0, 255, 136, 0.02) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 px-4 sm:mb-16 sm:px-6 lg:px-8"
      >
        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">02</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">PROJETOS</h2>
      </motion.div>

      <div className="relative px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <motion.div
                onHoverStart={() => setActiveProject(project.id)}
                onHoverEnd={() => setActiveProject(null)}
                onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.open(project.github, "_blank", "noopener,noreferrer");
                  }
                }}
                role="link"
                tabIndex={0}
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden border border-border bg-bg-card"
              >
                <AnimatePresence>
                  {activeProject === project.id && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-accent"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-accent"
                        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
                      />
                    </>
                  )}
                </AnimatePresence>

                <div className="flex h-full flex-col p-5 sm:p-6 md:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <motion.span
                      className="text-5xl font-bold text-border sm:text-6xl md:text-7xl"
                      animate={{
                        color: activeProject === project.id ? "#00ff88" : "#1a1a1a",
                      }}
                    >
                      {String(project.id).padStart(2, "0")}
                    </motion.span>
                    <div className="flex shrink-0 gap-2">
                      <motion.a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                      >
                        <Terminal className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>

                  <motion.h3
                    className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl"
                    animate={{
                      textShadow:
                        activeProject === project.id ? "0 0 20px rgba(0, 255, 136, 0.5)" : "none",
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <div className="mb-5">
                    <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:text-xs">
                      Problema
                    </div>
                    <p className="text-sm leading-7 text-text-secondary sm:text-base">
                      {project.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:text-xs">
                      Entrega
                    </div>
                    <p className="text-sm leading-7 text-text-secondary sm:text-base">
                      {project.delivery}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:text-xs">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag, j) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * j }}
                          viewport={{ once: true }}
                          className="border border-border px-3 py-1 text-[11px] font-mono text-text-secondary transition-colors hover:border-accent hover:text-accent sm:text-xs"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="pointer-events-none absolute inset-0 border-2 border-accent"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: activeProject === project.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="fixed right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {projects.map((_, i) => (
          <motion.div key={i} className="h-8 w-1 overflow-hidden bg-border">
            <motion.div
              className="h-full w-full bg-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              style={{ originY: 0 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
