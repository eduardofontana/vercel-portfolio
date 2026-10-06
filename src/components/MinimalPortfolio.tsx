"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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

const focusAreas = [
  {
    number: "001.",
    title: "Web Development",
    lead:
      "Aplicações web e interfaces responsivas com arquitetura simples, boa performance e atenção aos detalhes.",
    tags: ["Next.js", "React", "TypeScript", "APIs"],
    accent: "BUILD",
  },
  {
    number: "002.",
    title: "Automation & AI",
    lead:
      "Automações, integrações e ferramentas internas para conectar sistemas e reduzir tarefas manuais.",
    tags: ["Python", "Node.js", "Workflows", "Agents"],
    accent: "AUTOMATE",
  },
  {
    number: "003.",
    title: "Application Security",
    lead:
      "Revisão de aplicações e práticas de desenvolvimento seguro para reduzir exposição e falhas evitáveis.",
    tags: ["Web Security", "Pentest", "Review", "Hardening"],
    accent: "SECURE",
  },
  {
    number: "004.",
    title: "Infrastructure",
    lead:
      "Linux, containers e deploys com configuração previsível, observável e fácil de operar.",
    tags: ["Linux", "Docker", "Nginx", "Deploy"],
    accent: "SHIP",
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
      "Portfólio pessoal em Next.js com experiência editorial, integração com GitHub e recursos de segurança.",
    html_url: "https://github.com/eduardofontana/vercel-portfolio",
    homepage: "https://eduardofontana.com.br",
    language: "TypeScript",
    stargazers_count: 1,
    fork: false,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionIndex({ children }: { children: React.ReactNode }) {
  return <span className="section-index">{children}</span>;
}

export default function MinimalPortfolio() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [hibpOpen, setHibpOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroYRaw = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const heroY = useSpring(heroYRaw, {
    stiffness: 85,
    damping: 28,
    mass: 0.7,
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.92], [1, 0.38]);

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
          .slice(0, 4);

        if (publicRepos.length) setRepos(publicRepos);
      })
      .catch(() => undefined);

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
      <header className="editorial-nav">
        <a href="#top" className="nav-mark">
          EF — 26
        </a>
        <nav aria-label="Navegação principal">
          <a href="#about">001. About</a>
          <a href="#focus">002. Focus</a>
          <a href="#work">003. Work</a>
          <a href="#contact">004. Contact</a>
        </nav>
        <a
          href="https://github.com/eduardofontana"
          target="_blank"
          rel="noreferrer"
          className="nav-external"
        >
          GitHub ↗
        </a>
      </header>

      <main id="top">
        <section ref={heroRef} className="tenora-hero">
          <div className="hero-color-field" aria-hidden="true">
            <motion.span
              className="color-blob color-blob-cyan"
              animate={
                reduceMotion
                  ? undefined
                  : { x: [0, 26, 0], y: [0, -18, 0], scale: [1, 1.04, 1] }
              }
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="color-blob color-blob-violet"
              animate={
                reduceMotion
                  ? undefined
                  : { x: [0, -24, 0], y: [0, 16, 0], scale: [1, 1.05, 1] }
              }
              transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="color-blob color-blob-amber"
              animate={
                reduceMotion
                  ? undefined
                  : { x: [0, 18, 0], y: [0, 12, 0], scale: [1, 1.03, 1] }
              }
              transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="hero-stage"
            style={{ y: reduceMotion ? 0 : heroY, opacity: heroOpacity }}
          >
            <div className="hero-kicker">
              <span>Brazil / Remote</span>
              <span>Web systems · automation · security</span>
              <span>Portfolio / 2026</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>Eduardo</span>
              <span className="outline-word">Fontana.</span>
            </motion.h1>

            <div className="hero-lower-grid">
              <p className="hero-role">
                Web Developer
                <br />
                Automation · Application Security
              </p>
              <p className="hero-statement">
                Transformo problemas operacionais em aplicações web claras,
                automações confiáveis e ferramentas seguras.
              </p>
              <a href="#work" className="round-link" aria-label="Ver projetos">
                <ArrowDownRight size={22} />
              </a>
            </div>
          </motion.div>

          <div className="hero-stripe" aria-hidden="true">
            <div className="stripe-track">
              <span>WEB DEVELOPMENT — AUTOMATION — APPLICATION SECURITY — INFRASTRUCTURE — </span>
              <span>WEB DEVELOPMENT — AUTOMATION — APPLICATION SECURITY — INFRASTRUCTURE — </span>
            </div>
          </div>
        </section>

        <section id="about" className="editorial-section intro-section">
          <div className="section-topline">
            <SectionIndex>001.</SectionIndex>
            <span>[ PROFILE ]</span>
            <span>Available for freelance · Remote</span>
          </div>

          <motion.div
            className="intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-14%" }}
            variants={reveal}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pair-heading pair-heading-dark">
              <span className="pair-kicker">[ PRACTICE ]</span>
              <h2>
                <span>Engineering</span>
                <span className="pair-second"><i>&</i> Experience</span>
              </h2>
            </div>

            <div className="intro-copy">
              <p className="large-copy">
                Gosto de projetos em que interface, código e segurança precisam
                conversar.
              </p>
              <p>
                Trabalho entre desenvolvimento web, automação, segurança de
                aplicações e infraestrutura. A ideia é construir soluções que
                sejam agradáveis de usar, fáceis de manter e coerentes por
                dentro — não apenas bonitas na superfície.
              </p>
              <div className="mini-meta">
                <span>Web / Product</span>
                <span>Automation / AI</span>
                <span>Security / Infra</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="focus" className="editorial-section focus-section">
          <div className="section-title-row">
            <div>
              <SectionIndex>002.</SectionIndex>
              <span className="eyebrow">[ FOCUS AREAS ]</span>
            </div>
            <h2>
              What I
              <br />
              <span className="outline-word">build.</span>
            </h2>
          </div>

          <div className="focus-list">
            {focusAreas.map((item, index) => (
              <motion.article
                key={item.number}
                className={`focus-item tone-${index + 1}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="focus-number">{item.number}</div>
                <div className="focus-main">
                  <span className="focus-accent">{item.accent}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.lead}</p>
                <div className="focus-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}># {tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="editorial-section work-section">
          <div className="section-topline">
            <SectionIndex>003.</SectionIndex>
            <span>[ SELECTED WORK ]</span>
            <a
              href="https://github.com/eduardofontana"
              target="_blank"
              rel="noreferrer"
            >
              All repositories ↗
            </a>
          </div>

          <motion.a
            href={primaryRepo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-poster"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="poster-grid">
              <div className="poster-code">
                <span>CASE / 001</span>
                <span>{primaryRepo.language ?? "TypeScript"}</span>
              </div>
              <div className="poster-title">
                <span>Interactive</span>
                <span>Portfolio</span>
              </div>
              <div className="poster-meta">
                <span>NEXT.JS</span>
                <span>REACT</span>
                <span>GITHUB API</span>
                <span>SECURITY</span>
              </div>
              <div className="poster-orbit" aria-hidden="true">
                <span>EF</span>
              </div>
              <div className="poster-desc">
                Um portfólio em Next.js que combina interface editorial,
                integração com GitHub e recursos de segurança em uma experiência
                responsiva.
              </div>
              <ArrowUpRight className="poster-arrow" size={30} />
            </div>
          </motion.a>

          {repos.length > 1 && (
            <div className="repo-rail">
              {repos.slice(1).map((repo, index) => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  key={repo.id}
                  className="repo-line"
                >
                  <span>0{index + 2}</span>
                  <strong>{repo.name}</strong>
                  <span>{repo.language ?? "Project"}</span>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="editorial-section lab-section">
          <div className="lab-grid">
            <div className="lab-index">
              <SectionIndex>004.</SectionIndex>
              <span>[ SECURITY LAB ]</span>
            </div>
            <div className="lab-title pair-heading pair-heading-ink">
              <span className="pair-kicker">[ SECURITY / SYSTEMS ]</span>
              <h2>
                <span>Security</span>
                <span className="pair-second"><i>&</i> Systems</span>
              </h2>
            </div>
            <motion.div
              className="lab-copy"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <ShieldCheck size={26} />
              <h3>HIBP Password Check</h3>
              <p>
                Uma demonstração prática de segurança: consulte se uma senha
                apareceu em vazamentos conhecidos usando k-anonymity, sem enviar
                a senha completa para a API.
              </p>
              <button
                type="button"
                className="text-action"
                onClick={() => setHibpOpen(true)}
              >
                Abrir ferramenta <TerminalSquare size={16} />
              </button>
            </motion.div>
          </div>
        </section>

        <section className="editorial-section stack-section">
          <div className="section-title-row compact">
            <div>
              <SectionIndex>005.</SectionIndex>
              <span className="eyebrow">[ TOOLBOX ]</span>
            </div>
            <div className="pair-heading pair-heading-light">
              <span className="pair-kicker">[ TOOLING / WORKFLOW ]</span>
              <h2>
                <span>Tools</span>
                <span className="pair-second"><i>&</i> Workflow</span>
              </h2>
            </div>
          </div>

          <div className="stack-marquee">
            <div className="stack-track">
              {[...stack, ...stack].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="editorial-section contact-editorial">
          <div className="section-topline">
            <SectionIndex>006.</SectionIndex>
            <span>[ CONTACT ]</span>
            <span>Freelance · Remote</span>
          </div>

          <div className="contact-big">
            <h2>
              Tem algo que vale
              <br />
              <em>construir?</em>
            </h2>
            <div className="contact-pitch">
              <p>
                Web, automação, segurança de aplicações ou infraestrutura.
                Se o problema é claro, podemos começar por ele.
              </p>
              <a href="mailto:duhduh.zip@proton.me" className="contact-email">
                duhduh.zip@proton.me <ArrowUpRight size={26} />
              </a>
            </div>
          </div>

          <div className="contact-bottom">
            <div className="contact-socials">
              <a
                href="https://github.com/eduardofontana"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-fontana-b9b20b284/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

            <form className="editorial-form" onSubmit={sendMessage}>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="voce@empresa.com"
                  required
                />
              </label>
              <label>
                <span>Projeto</span>
                <textarea
                  name="message"
                  rows={4}
                  minLength={10}
                  placeholder="Qual problema você quer resolver?"
                  required
                />
              </label>
              <button type="submit">
                Enviar contato <ArrowUpRight size={17} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="editorial-footer">
        <span>Eduardo Fontana © {new Date().getFullYear()}</span>
        <span>Web / Automation / Security</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <PasswordCheckModal isOpen={hibpOpen} onClose={() => setHibpOpen(false)} />
    </>
  );
}
