"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  problem: string;
  delivery: string;
  stack: string[];
  link: string;
  github: string;
  stars: number;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
  topics: string[];
  fork: boolean;
}

const GITHUB_USERNAME = "eduardofontana";

function generateProjectContent(repo: GithubRepo): Omit<Project, "id" | "stars"> {
  const name = repo.name;
  const description = repo.description || "Repositório sem descrição disponível.";
  
  const stack: string[] = [];
  if (repo.language) stack.push(repo.language);
  if (repo.topics && repo.topics.length > 0) {
    repo.topics.slice(0, 3).forEach(topic => stack.push(topic));
  }

  return {
    title: name,
    problem: `Projeto ${name} no GitHub.`,
    delivery: description,
    stack: stack.length > 0 ? stack : ["GitHub"],
    link: `${repo.html_url}#readme`,
    github: repo.html_url,
  };
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100&type=public`
        );
        if (!response.ok) throw new Error("Failed to fetch repos");
        
        const repos: GithubRepo[] = await response.json();
        const filteredRepos = repos.filter(repo => repo.stargazers_count > 0 && !repo.fork);
        
        const projectsWithContent = filteredRepos.map((repo, index) => ({
          ...generateProjectContent(repo),
          id: index + 1,
          stars: repo.stargazers_count,
        }));

        projectsWithContent.sort((a, b) => b.stars - a.stars);
        
        setProjects(projectsWithContent.slice(0, 6));
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

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

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      ) : projects.length === 0 ? (
        <div className="px-4 text-center text-text-secondary">
          <p>Nenhum projeto encontrado.</p>
        </div>
      ) : (
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
                      <div className="flex shrink-0 items-center gap-2">
                        <div className="flex items-center gap-1 border border-border px-2 py-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="font-mono text-xs text-text-secondary">
                            {project.stars}
                          </span>
                        </div>
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
      )}

      <div className="fixed right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {projects.slice(0, 6).map((_, i) => (
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
