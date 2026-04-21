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
      { name: "Next.js", level: 95, desc: "App router, Server Actions, API Routes" },
      { name: "React", level: 92, desc: "Hooks, Context, Suspense" },
      { name: "TypeScript", level: 90, desc: "Type safety, Generics, Mapped types" },
      { name: "Tailwind", level: 95, desc: "Custom themes, Animações" },
      { name: "Framer Motion", level: 85, desc: "Scroll triggers, Gestos" },
    ],
  },
  {
    category: "BACKEND",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88, desc: "Express, Fastify, NestJS" },
      { name: "Python", level: 85, desc: "Django, FastAPI, Flask" },
      { name: "PostgreSQL", level: 82, desc: "Consultas, Indexação, Replicação" },
      { name: "Redis", level: 80, desc: "Cache, Pub/Sub, Streams" },
      { name: "GraphQL", level: 78, desc: "Apollo, Prisma, Resolvers" },
    ],
  },
  {
    category: "SEGURANÇA",
    icon: Lock,
    skills: [
      { name: "OWASP", level: 90, desc: "Top 10, Testes, Mitigação" },
      { name: "Pentest", level: 85, desc: "Web, Rede, Mobile" },
      { name: "Burp Suite", level: 88, desc: "Proxy, Scanner, Intruder" },
      { name: "Metasploit", level: 75, desc: "Exploração, Payloads" },
      { name: "Wireshark", level: 72, desc: "Análise de pacotes, Dissecção de protocolos" },
    ],
  },
  {
    category: "FERRAMENTAS",
    icon: Code,
    skills: [
      { name: "Git", level: 90, desc: "Workflows, Hooks, Bisect" },
      { name: "Docker", level: 85, desc: "Compose, Multi-stage, Swarm" },
      { name: "AWS", level: 78, desc: "EC2, S3, Lambda, VPC" },
      { name: "Linux", level: 88, desc: "Bash, Systemd, Rede" },
      { name: "Vim", level: 95, desc: "Bindings, Macros, Plugins" },
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
    <section id="skills" className="relative min-h-screen py-24 px-4 lg:px-8 overflow-hidden bg-bg-primary">
      {/* Background */}
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
          <span className="text-accent font-mono text-sm">03</span>
          <div className="h-px bg-border flex-1" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">HABILIDADES</h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
        {/* Terminal Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-7 border border-border bg-bg-card rounded-lg overflow-hidden font-mono text-sm"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-bg-secondary">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-text-muted text-xs">root@portfolio:~/skills</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 space-y-1 max-h-[400px] overflow-y-auto">
            {commands.map((cmd, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1"
              >
                {cmd.input && (
                  <div className="flex items-center gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-text-primary">{cmd.input}</span>
                  </div>
                )}
                <div
                  className={`${
                    cmd.type === "success"
                      ? "text-green-400"
                      : cmd.type === "error"
                      ? "text-red-400"
                      : cmd.type === "path"
                      ? "text-accent"
                      : "text-text-secondary"
                  } pl-4`}
                >
                  {cmd.output}
                </div>
              </motion.div>
            ))}

            {/* Blinking Cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="flex items-center gap-2"
            >
              <span className="text-accent">$</span>
              <span className="w-2 h-4 bg-accent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 border text-sm font-mono transition-all ${
                  activeCategory === i
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-text-secondary hover:border-accent/50"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills List */}
          <div className="border border-border bg-bg-secondary/50 backdrop-blur-sm p-4 space-y-3">
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-sm text-text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-accent">{skill.level}%</span>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1 font-mono">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border bg-bg-secondary/50 p-4 text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-xs text-text-muted font-mono">TECNOLOGIAS</div>
            </div>
            <div className="border border-border bg-bg-secondary/50 p-4 text-center">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-xs text-text-muted font-mono">ANOS EXP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}