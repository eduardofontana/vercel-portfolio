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
  { icon: Shield, title: "Segurança Primeiro", desc: "Cada linha de código é uma vulnerabilidade potencial" },
  { icon: Eye, title: "Pense como Atacante", desc: "Defesa requer conhecimento ofensivo" },
  { icon: Cpu, title: "Precisão Importa", desc: "Decisões de arquitetura definem resiliência" },
  { icon: Zap, title: "Eficiência é Segurança", desc: "Código limpo é código seguro" },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 px-4 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-accent font-mono text-sm">01</span>
          <div className="h-px bg-border flex-1" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">SOBRE</h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
        {/* Main Bio Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-7 border border-border bg-bg-secondary/50 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-text-muted">ANÁLISE_DO_SISTEMA</span>
          </div>

          <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-6">
            Eu sou um <span className="text-accent">desenvolvedor full-stack</span> com mentalidade focada em segurança.
            Não apenas construo sites, eu crio <span className="text-accent">fortalezas digitais</span>.
          </p>

          <p className="text-text-secondary leading-relaxed mb-6">
            Minha jornada começou com curiosidade sobre como as coisas funcionam. Essa curiosidade evoluiu para
            entender vulnerabilidades, e então preveni-las. Agora construo sistemas tão belos quanto seguros.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-mono text-text-secondary">{skill.name}</span>
                  <span className="font-mono text-accent">{skill.level}%</span>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
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

        {/* Mindset Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="border border-border bg-bg-secondary/50 backdrop-blur-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
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
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border border-border bg-bg-secondary/50 backdrop-blur-sm p-6"
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">5+</div>
                <div className="text-xs text-text-muted font-mono mt-1">ANOS EXP</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
                <div className="text-xs text-text-muted font-mono mt-1">PROJETOS</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">20+</div>
                <div className="text-xs text-text-muted font-mono mt-1">CTFS</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
