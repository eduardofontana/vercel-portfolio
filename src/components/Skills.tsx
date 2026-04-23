"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Database, Lock, Code } from "lucide-react";

interface Command {
  input: string;
  output: string;
  type: "success" | "error" | "info" | "path";
}

const initialCommands: Command[] = [
  { input: "./list-skills.sh", output: "Carregando stack técnico...", type: "info" },
];

const skillCategories = [
  {
    category: "FRONTEND",
    icon: Globe,
    skills: [
      { name: "Next.js", level: 95, desc: "App Router, Server Actions e interfaces com padrão alto de performance" },
      { name: "React", level: 92, desc: "Arquitetura de componentes, fluidez de interface e escalabilidade" },
      { name: "TypeScript", level: 90, desc: "Modelagem segura, tipos avançados e manutenção previsível" },
      { name: "Tailwind", level: 95, desc: "Refinamento visual, temas e velocidade real de execução" },
      { name: "Framer Motion", level: 85, desc: "Transições, animações e acabamento de interação" },
    ],
  },
  {
    category: "BACKEND",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88, desc: "APIs, integrações e serviços para aplicações web robustas" },
      { name: "Python", level: 85, desc: "Automação, análise e desenvolvimento orientado a eficiência" },
      { name: "PostgreSQL", level: 82, desc: "Consultas, modelagem e estruturação confiável de dados" },
      { name: "Redis", level: 80, desc: "Cache, filas e comunicação em tempo real" },
      { name: "GraphQL", level: 78, desc: "Schema design, resolvers e consumo eficiente de dados" },
    ],
  },
  {
    category: "SEGURANÇA",
    icon: Lock,
    skills: [
      { name: "OWASP", level: 90, desc: "Boas práticas, análise de risco e mitigação orientada a impacto" },
      { name: "Pentest", level: 85, desc: "Web, rede e validação ofensiva de superfície crítica" },
      { name: "Burp Suite", level: 88, desc: "Inspeção, exploração e revisão aprofundada de tráfego" },
      { name: "Metasploit", level: 75, desc: "Exploração controlada e simulação de cenário" },
      { name: "Wireshark", level: 72, desc: "Leitura de pacotes e análise de protocolo" },
    ],
  },
  {
    category: "FERRAMENTAS",
    icon: Code,
    skills: [
      { name: "Git", level: 90, desc: "Versionamento, workflows e organização limpa de entrega" },
      { name: "Docker", level: 85, desc: "Ambientes reproduzíveis e deploy consistente" },
      { name: "AWS", level: 78, desc: "Infraestrutura, storage e serviços sob demanda" },
      { name: "Linux", level: 88, desc: "Shell, processos e administração de ambiente" },
      { name: "Vim", level: 95, desc: "Produtividade extrema na edição e navegação" },
    ],
  },
];

export default function Skills() {
  const [commands, setCommands] = useState<Command[]>(initialCommands);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCommands([
        { input: "./list-skills.sh", output: "Carregando stack técnico...", type: "info" },
        { input: "cat > frontend.txt", output: "✓ Frontend: Next.js 95%, React 92%, TypeScript 90%", type: "success" },
        { input: "cat > backend.txt", output: "✓ Backend: Node.js 88%, Python 85%, PostgreSQL 82%", type: "success" },
        { input: "cat > security.txt", output: "✓ Segurança: OWASP 90%, Pentest 85%, Burp Suite 88%", type: "success" },
        { input: "make build", output: "Todos os módulos carregados com sucesso.", type: "path" },
      ]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-bg-primary px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
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
          <span className="font-mono text-sm text-accent">03</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">HABILIDADES</h2>
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
                className={`border px-3 py-2 text-xs font-mono transition-all sm:px-4 sm:text-sm ${
                  activeCategory === i
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-text-secondary hover:border-accent/50"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-3 border border-border bg-bg-secondary/50 p-4 backdrop-blur-sm">
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
