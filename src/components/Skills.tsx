"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Command {
  input: string;
  output: string;
  type: "success" | "error" | "info" | "path";
}

const initialCommands: Command[] = [
  { input: "./list-services.sh", output: "Organizando formas de ajudar...", type: "info" },
];

const skillCategories = [
  {
    category: "SERVIÇOS",
    skills: [
      { name: "Sites profissionais", level: 95, desc: "Páginas modernas, responsivas e preparadas para apresentar seu trabalho" },
      { name: "Landing pages", level: 92, desc: "Estrutura direta para divulgar serviços, captar leads e vender mais" },
      { name: "Portfólios", level: 90, desc: "Presença pessoal com identidade visual, projetos reais e contato claro" },
      { name: "Ajustes e melhorias", level: 88, desc: "Correções, otimização de layout, performance e experiência do usuário" },
      { name: "Publicação e deploy", level: 85, desc: "Domínio, hospedagem, SEO básico e cuidados iniciais de segurança" },
    ],
  },
  {
    category: "STACK",
    skills: [
      { name: "Next.js", level: 95, desc: "Sites rápidos, modernos e preparados para crescer" },
      { name: "React", level: 92, desc: "Interfaces dinâmicas, componentes reutilizáveis e estado previsível" },
      { name: "TypeScript", level: 90, desc: "Código mais seguro, de fácil leitura e manutenção" },
      { name: "Node.js", level: 88, desc: "APIs, integrações e lógica do lado do servidor" },
      { name: "Python", level: 85, desc: "Automação, scripts e análise de dados" },
    ],
  },
  {
    category: "SEGURANÇA",
    skills: [
      { name: "OWASP Top 10", level: 90, desc: "Boas práticas para reduzir riscos comuns em aplicações web" },
      { name: "Pentest Web", level: 85, desc: "Testes controlados para identificar falhas em páginas, APIs e fluxos" },
      { name: "Burp Suite", level: 88, desc: "Inspeção de tráfego e validação de segurança em aplicações" },
      { name: "Hardening", level: 80, desc: "Headers de segurança, configuração de servidor e redução de superfície de ataque" },
      { name: "Consultoria", level: 78, desc: "Análise clara dos riscos e próximos passos para melhorar a postura de segurança" },
    ],
  },
  {
    category: "PROCESSO",
    skills: [
      { name: "Briefing", level: 90, desc: "Entendimento direto do objetivo antes de começar" },
      { name: "Design funcional", level: 88, desc: "Visual moderno sem exageros, pensado para conversão e leitura" },
      { name: "Responsivo", level: 92, desc: "Experiência consistente em celular, tablet e desktop" },
      { name: "Entrega organizada", level: 88, desc: "Código limpo, deploy guiado e instruções de uso" },
      { name: "Melhoria contínua", level: 82, desc: "Ajustes pós-entrega com base em feedback para deixar o resultado redondo" },
    ],
  },
];

export default function Skills() {
  const [commands, setCommands] = useState<Command[]>(initialCommands);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommands([
        { input: "./list-services.sh", output: "Organizando formas de ajudar...", type: "info" },
        { input: "cat > servicos.txt", output: "✓ Sites, landing pages, portfólios e ajustes" , type: "success" },
        { input: "cat > stack.txt", output: "✓ Next.js, React, TypeScript, Node.js e Python", type: "success" },
        { input: "cat > seguranca.txt", output: "✓ OWASP, pentest web e hardening básico", type: "success" },
        { input: "make entrega", output: "Processo simples, visual limpo e deploy pronto.", type: "path" },
      ]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-bg-primary px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-secondary/75 to-bg-primary/90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 sm:mb-16"
      >
        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">03</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">SERVIÇOS</h2>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg border border-border bg-bg-card font-mono text-sm lg:col-span-7"
        >
          <div className="flex items-center gap-2 border-b border-border bg-bg-secondary px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
            <div className="h-3 w-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-xs text-text-muted">root@portfolio:~/skills</span>
          </div>

          <div className="max-h-[420px] space-y-1 overflow-y-auto p-4">
            {commands.map((cmd, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 break-words"
              >
                {cmd.input && (
                  <div className="flex items-center gap-2">
                    <span className="text-accent">$</span>
                    <span className="break-all text-text-primary">{cmd.input}</span>
                  </div>
                )}
                <div
                  className={`break-words pl-4 ${
                    cmd.type === "success"
                      ? "text-green-400"
                      : cmd.type === "error"
                        ? "text-red-400"
                        : cmd.type === "path"
                          ? "text-accent"
                          : "text-text-secondary"
                  }`}
                >
                  {cmd.output}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="flex items-center gap-2"
            >
              <span className="text-accent">$</span>
              <span className="h-4 w-2 bg-accent" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 lg:col-span-5"
        >
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={`rounded-lg border px-3 py-2 text-xs font-mono transition-all sm:px-4 sm:text-sm ${
                  activeCategory === i
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-text-secondary hover:border-accent/50"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary/50 p-4 backdrop-blur-sm">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-mono text-sm text-text-primary transition-colors group-hover:text-accent">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-accent">{skill.level}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="mt-1 font-mono text-[11px] leading-5 text-text-muted sm:text-xs">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border bg-bg-secondary/50 p-4 text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="font-mono text-[10px] text-text-muted sm:text-xs">TECNOLOGIAS</div>
            </div>
            <div className="border border-border bg-bg-secondary/50 p-4 text-center">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="font-mono text-[10px] text-text-muted sm:text-xs">ANOS EXP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
