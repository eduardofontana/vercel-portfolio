"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SECURE_VAULT",
    description: "Sistema de gerenciamento de senhas empresarial com criptografia de conhecimento zero e autenticação biométrica.",
    tags: ["Next.js", "Criptografia", "WebAuthn", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "PENETRATE_CLI",
    description: "Kit de ferramentas personalizado para testes de penetração com varredura automatizada de vulnerabilidades e relatórios.",
    tags: ["Python", "FastAPI", "Docker", "Nmap"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "NETSCAN_PRO",
    description: "Sistema de monitoramento de rede em tempo real e detecção de intrusões com análise de ameaças com IA.",
    tags: ["React", "Node.js", "TensorFlow", "Wireshark"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "CIPHER_CHAT",
    description: "Plataforma de mensagens criptografadas de ponta a ponta com mensagens autodestrutivas e compartilhamento seguro de arquivos.",
    tags: ["WebRTC", "Signal", "TypeScript", "Redis"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "VULN_SCANNER",
    description: "Scanner automatizado de vulnerabilidades de aplicações web com capacidades de detecção OWASP Top 10.",
    tags: ["Python", "Selenium", "SQLMap", "Burp Suite"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
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
        className="relative z-10 mb-16 px-4 lg:px-8"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-accent font-mono text-sm">02</span>
          <div className="h-px bg-border flex-1" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">PROJETOS</h2>
      </motion.div>

      <div className="relative px-4 lg:px-8 pb-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 2xl:grid-cols-3">
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
                className="relative flex h-full flex-col border border-border bg-bg-card overflow-hidden group cursor-pointer"
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

                <div className="flex h-full flex-col p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <motion.span
                      className="text-6xl md:text-7xl font-bold text-border"
                      animate={{
                        color: activeProject === project.id ? "#00ff88" : "#1a1a1a",
                      }}
                    >
                      {String(project.id).padStart(2, "0")}
                    </motion.span>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                      >
                        <Terminal className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    animate={{
                      textShadow: activeProject === project.id ? "0 0 20px rgba(0, 255, 136, 0.5)" : "none",
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * j }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-mono border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-accent pointer-events-none"
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

      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
        {projects.map((_, i) => (
          <motion.div key={i} className="w-1 h-8 bg-border overflow-hidden">
            <motion.div
              className="w-full h-full bg-accent"
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
