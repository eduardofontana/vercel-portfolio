import Image from "next/image";
import Navigation from "@/components/Navigation";
import Monogram from "@/components/Monogram";
import CopyEmail from "@/components/CopyEmail";
import SectionAccent from "@/components/SectionAccent";
import { capabilities, profile, projects } from "@/data/portfolio";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Navigation />
      <main id="main">
        <section
          className="hero container"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-masthead">
            <p className="eyebrow">
              <span className="status-dot" /> DESENVOLVEDOR FULL STACK
            </p>
            <h1 id="hero-title">
              Eduardo{" "}
              <span>Fontana</span>
              <span className="hero-period">.</span>
            </h1>
          </div>
          <div className="hero-feature">
            <div className="hero-copy">
              <p className="hero-description">
                Desenvolvo aplicações web, automatizo processos e construo
                sistemas com foco em segurança.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explorar projetos <span aria-hidden="true">↓</span>
                </a>
                <a href="#contact" className="text-link">
                  Entrar em contato <Arrow />
                </a>
              </div>
            </div>
            <Monogram />
          </div>
        </section>

        <section
          className="projects-section section container"
          id="projects"
          tabIndex={-1}
          aria-labelledby="projects-title"
        >
          <SectionAccent />
          <div className="section-heading">
            <div>
              <h2 id="projects-title">
                Projetos selecionados<span className="title-period">.</span>
              </h2>
            </div>
            <a
              className="text-link github-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mais no GitHub <Arrow />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project project-${index + 1}`} key={project.name}>
                <div className="project-info">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-description">{project.contribution}</p>
                  <ul className="tags" aria-label="Tecnologias">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      className="text-link"
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explorar código <Arrow />
                    </a>
                    {project.demo && (
                      <a
                        className="text-link"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver demonstração <Arrow />
                      </a>
                    )}
                  </div>
                </div>
                <figure className="project-figure">
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={900}
                      height={520}
                      sizes="(max-width: 767px) 85vw, 55vw"
                    />
                  </div>
                  <figcaption className="mono">Diagrama ilustrativo</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section section"
          id="about"
          tabIndex={-1}
          aria-labelledby="about-title"
        >
          <div className="container">
            <div className="about-intro">
              <div>
                <SectionAccent />
                <h2 id="about-title">
                  Sobre mim<span className="title-period">.</span>
                </h2>
              </div>
              <div className="about-copy">
                <p>
                  Sou Eduardo, desenvolvedor full stack. Gosto de conectar as
                  partes: a interface que alguém usa, os dados que a sustentam e
                  os processos que fazem tudo funcionar.
                </p>
                <p>
                  Meu trabalho passa por aplicações web, automação e segurança.
                  Busco construir soluções claras por fora e bem estruturadas
                  por dentro.
                </p>
                <a
                  href={profile.linkedin}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vamos nos conectar <Arrow />
                </a>
              </div>
            </div>
            <div className="capabilities">
              {capabilities.map((item) => (
                <article className="capability" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="capability-tools mono">{item.tools}</span>
                  <span className="capability-evidence">{item.evidence}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact-section section"
          id="contact"
          tabIndex={-1}
          aria-labelledby="contact-title"
        >
          <div className="container">
            <SectionAccent />
            <div className="contact-heading">
              <h2 id="contact-title">
                Vamos conversar<span className="title-period">?</span>
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="contact-arrow"
                aria-label="Entrar em contato por e-mail"
              >
                <Arrow />
              </a>
            </div>
            <div className="contact-details">
              <div>
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>
              <div className="social-links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub <Arrow />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a className="wordmark" href="#top" aria-label="ef. — Voltar ao início">
          ef<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Eduardo Fontana</span>
        <a href="#top">
          De volta ao topo <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
