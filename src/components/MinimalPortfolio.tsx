"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import PasswordCheckModal from "./PasswordCheckModal";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

const services = [
  {
    index: "01",
    title: "Web Development",
    description:
      "Sites, aplicações, dashboards e interfaces rápidas, responsivas e fáceis de manter.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    index: "02",
    title: "Automation & AI",
    description:
      "Integrações, automações e ferramentas internas para reduzir trabalho manual e conectar sistemas.",
    tags: ["Python", "Node.js", "APIs"],
  },
  {
    index: "03",
    title: "Application Security",
    description:
      "Segurança web, revisão de superfície de ataque e desenvolvimento com práticas seguras desde o início.",
    tags: ["Web Security", "Pentest", "Hardening"],
  },
  {
    index: "04",
    title: "Infrastructure",
    description:
      "Ambientes Linux, containers, deploys e infraestrutura enxuta para aplicações modernas.",
    tags: ["Linux", "Docker", "Nginx"],
  },
];

const stack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "Rust",
  "React",
  "Next.js",
  "Node.js",
  "Linux",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Nginx",
  "Git",
];

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "vercel-portfolio",
    description:
      "Portfólio pessoal construído com Next.js, TypeScript e foco em experiência, performance e segurança.",
    html_url: "https://github.com/eduardofontana/vercel-portfolio",
    homepage: "https://eduardofontana.com.br",
    language: "TypeScript",
    stargazers_count: 1,
    fork: false,
  },
];

export default function MinimalPortfolio() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [hibpOpen, setHibpOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/eduardofontana/repos?sort=updated&per_page=12", {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub request failed");
        return response.json();
      })
      .then((data: Repo[]) => {
        const publicRepos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => {
            if (a.name === "vercel-portfolio") return -1;
            if (b.name === "vercel-portfolio") return 1;
            return b.stargazers_count - a.stargazers_count;
          })
          .slice(0, 3);

        if (publicRepos.length) setRepos(publicRepos);
      })
      .catch(() => {
        // Keep local fallback when GitHub is unavailable.
      });

    return () => controller.abort();
  }, []);

  const primaryRepo = useMemo(() => repos[0] ?? fallbackRepos[0], [repos]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent("Projeto / contato pelo portfólio");
    const body = encodeURIComponent(`Email: ${email}\n\n${message}`);
    window.location.href = `mailto:duhduh.zip@proton.me?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Eduardo Fontana — início">
            EF<span className="accent-dot">.</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#work">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>

          <div className="header-actions">
            <a
              href="https://github.com/eduardofontana"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-fontana-b9b20b284/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-link"
            >
              LinkedIn
            </a>
            <a href="#contact" className="small-cta">
              Fale comigo
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="status-line">
            <span className="status-dot" />
            Disponível para projetos freelance
          </div>

          <h1>
            Eduardo Fontana
            <span>Web Developer · Automation · Application Security</span>
          </h1>

          <p className="hero-copy">
            Construo aplicações web, automações e ferramentas com foco em
            performance, clareza e segurança.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Iniciar um projeto
              <ArrowUpRight size={16} />
            </a>
            <a href="#work" className="button button-secondary">
              Ver projetos
            </a>
          </div>

          <div className="hero-meta">
            <span>Brazil · Remote</span>
            <span>Next.js · Python · Security</span>
          </div>
        </section>

        <section id="about" className="section shell">
          <div className="section-label">About</div>
          <div className="split-grid">
            <h2>Desenvolvimento com visão de produto e segurança.</h2>
            <div className="body-copy">
              <p>
                Trabalho entre desenvolvimento web, automação, segurança de
                aplicações e infraestrutura.
              </p>
              <p>
                Prefiro interfaces simples, sistemas rápidos e soluções fáceis
                de entender, manter e evoluir. Segurança faz parte da construção,
                não entra apenas no final.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section shell">
          <div className="section-heading">
            <div className="section-label">What I do</div>
            <p>Áreas em que posso ajudar em um projeto.</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article key={service.index} className="service-row">
                <span className="service-index">{service.index}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="tag-list">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section shell">
          <div className="section-heading">
            <div className="section-label">Selected work</div>
            <p>Projetos públicos e experimentos técnicos.</p>
          </div>

          <a
            href={primaryRepo.html_url}
            target="_blank"
            rel="noreferrer"
            className="featured-project"
          >
            <div className="project-topline">
              <span>Featured project</span>
              <ArrowUpRight size={18} />
            </div>
            <h2>{primaryRepo.name}</h2>
            <p>
              {primaryRepo.description ??
                "Projeto público desenvolvido e mantido por Eduardo Fontana."}
            </p>
            <div className="project-meta">
              <span>{primaryRepo.language ?? "TypeScript"}</span>
              <span>GitHub API</span>
              <span>Security-first</span>
            </div>
          </a>

          {repos.length > 1 && (
            <div className="repo-grid">
              {repos.slice(1).map((repo) => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  key={repo.id}
                  className="repo-card"
                >
                  <div className="project-topline">
                    <span>{repo.language ?? "Project"}</span>
                    <ArrowUpRight size={16} />
                  </div>
                  <h3>{repo.name}</h3>
                  <p>{repo.description ?? "Projeto público no GitHub."}</p>
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="section shell">
          <div className="security-card">
            <div className="security-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="section-label">Security lab</div>
              <h2>Have I Been Pwned?</h2>
              <p>
                Verifique se uma senha apareceu em vazamentos conhecidos usando
                k-anonymity. A senha completa não é enviada para a API.
              </p>
            </div>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setHibpOpen(true)}
            >
              Testar ferramenta
              <TerminalSquare size={16} />
            </button>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <div className="section-label">Stack</div>
            <p>Tecnologias que fazem parte do meu trabalho atual.</p>
          </div>

          <div className="stack-list">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section shell contact-section">
          <div className="contact-intro">
            <div className="section-label">Let's work together</div>
            <h2>Tem um projeto em mente?</h2>
            <p>
              Disponível para trabalhos envolvendo web, automação, segurança de
              aplicações e infraestrutura.
            </p>

            <div className="contact-links">
              <a href="mailto:duhduh.zip@proton.me">
                <Mail size={17} />
                duhduh.zip@proton.me
              </a>
              <a
                href="https://github.com/eduardofontana"
                target="_blank"
                rel="noreferrer"
              >
                
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-fontana-b9b20b284/"
                target="_blank"
                rel="noreferrer"
              >
                
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendMessage}>
            <label>
              Seu email
              <input
                type="email"
                name="email"
                placeholder="voce@empresa.com"
                required
              />
            </label>
            <label>
              Sobre o projeto
              <textarea
                name="message"
                rows={6}
                minLength={10}
                placeholder="Conte um pouco sobre o que você quer construir."
                required
              />
            </label>
            <button type="submit" className="button button-primary">
              Enviar mensagem
              <ArrowUpRight size={16} />
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Eduardo Fontana</span>
          <span className="footer-mark">
            <Sparkles size={14} />
            Web · Automation · Security
          </span>
        </div>
      </footer>

      <PasswordCheckModal isOpen={hibpOpen} onClose={() => setHibpOpen(false)} />
    </>
  );
}
