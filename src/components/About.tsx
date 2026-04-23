"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Eye, Zap } from "lucide-react";

const skills = [
  { name: "Next.js", level: 95 },
  { name: "React", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "Cybersecurity", level: 80 },
];

const mindset = [
  { icon: Shield, title: "Segurança Primeiro", desc: "Toda solução séria precisa nascer preparada para resistir." },
  { icon: Eye, title: "Visão de Ataque", desc: "Entender vulnerabilidades muda a forma como um produto é desenhado." },
  { icon: Cpu, title: "Precisão Técnica", desc: "Arquitetura, performance e manutenção são decisões de base." },
  { icon: Zap, title: "Execução Limpa", desc: "Menos ruído, mais clareza, mais impacto e menos retrabalho." },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 sm:mb-16"
      >
        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">01</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">SOBRE</h2>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-border bg-bg-secondary/50 p-5 backdrop-blur-sm sm:p-6 md:p-8 lg:col-span-7"
        >
          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-text-muted">ANALISE_DO_SISTEMA</span>
          </div>

          <p className="mb-6 text-base leading-relaxed text-text-primary sm:text-lg md:text-xl">
            Sou um <span className="text-accent">desenvolvedor full-stack</span> com mentalidade orientada à segurança.
            Não entrego apenas sites publicados. Eu construo
            {" "}
            <span className="text-accent">presença digital com estrutura, confiança e longevidade</span>.
          </p>

          <p className="mb-6 text-sm leading-7 text-text-secondary sm:text-base">
            Minha trajetória começou na curiosidade técnica e evoluiu para uma exigência maior com desempenho,
            arquitetura e superfície de risco. Hoje, transformo essa combinação em produtos que sustentam estética,
            clareza e solidez de execução no mesmo nível.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-mono text-text-secondary">{skill.name}</span>
                  <span className="font-mono text-accent">{skill.level}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + 0.1 * i }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 lg:col-span-5"
        >
          <div className="border border-border bg-bg-secondary/50 p-5 backdrop-blur-sm sm:p-6">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="font-mono text-xs text-text-muted">MENTALIDADE_BASE</span>
            </div>

            <div className="space-y-6">
              {mindset.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="group flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-medium text-text-primary sm:text-base">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border border-border bg-bg-secondary/50 p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="grid grid-cols-3 gap-4 text-center sm:gap-6">
              <div>
                <div className="text-2xl font-bold text-accent sm:text-3xl md:text-4xl">5+</div>
                <div className="mt-1 font-mono text-[10px] text-text-muted sm:text-xs">ANOS EXP</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent sm:text-3xl md:text-4xl">50+</div>
                <div className="mt-1 font-mono text-[10px] text-text-muted sm:text-xs">PROJETOS</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent sm:text-3xl md:text-4xl">20+</div>
                <div className="mt-1 font-mono text-[10px] text-text-muted sm:text-xs">CTFS</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
