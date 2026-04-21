import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="sobre" className="container-shell py-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Profile / Threat Model</p>
              <h2 className="section-title mt-5">Sobre</h2>
              <p className="section-subtitle">
                Profissional focado em construir produtos web com qualidade tecnica, escalabilidade e seguranca desde o
                inicio do projeto.
              </p>
            </div>
            <div className="panel p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Base</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">Frontend</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Lens</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">Security</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Delivery</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">Vercel-ready</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Track 01</p>
              <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-cyan-100">
                Desenvolvimento Web
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Experiencia com arquitetura frontend, componentizacao, APIs e interfaces performaticas com foco em
                conversao e manutenibilidade.
              </p>
            </article>
            <article className="panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Track 02</p>
              <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-cyan-100">
                Seguranca / Pentest
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Praticas de analise de superficie de ataque, validacao de vulnerabilidades e aplicacao de controles
                para reduzir risco em aplicacoes web.
              </p>
            </article>
          </div>
        </section>

        <section id="projetos" className="container-shell py-14 md:py-16">
          <p className="eyebrow">Selected Operations</p>
          <h2 className="section-title mt-5">Projetos</h2>
          <p className="section-subtitle">Projetos reais em desenvolvimento web e seguranca ofensiva.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <SkillsSection />

        <section id="contato" className="container-shell py-14 md:py-16">
          <div className="panel overflow-hidden p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <p className="eyebrow">Open Channel</p>
                <h2 className="section-title mt-5">Contato</h2>
                <p className="section-subtitle">
                  Vamos conversar sobre seu projeto, auditoria ou parceria tecnica.
                </p>
              </div>
              <div className="rounded-[24px] border border-borderSoft bg-[#070c12] p-5 font-mono text-xs text-slate-400">
                <p>root@portfolio:~$ establish secure channel</p>
                <p className="mt-2 text-cyan-200">status: awaiting message</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:fontana.df@gmail.com"
                className="rounded-2xl border border-borderSoft bg-surface p-5 transition hover:border-cyan-300/40 hover:bg-surfaceStrong"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Email</p>
                <p className="mt-3 text-sm text-slate-100">fontana.df@gmail.com</p>
              </a>
              <a
                href="https://github.com/eduardofontana"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="rounded-2xl border border-borderSoft bg-surface p-5 transition hover:border-cyan-300/40 hover:bg-surfaceStrong"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">GitHub</p>
                <p className="mt-3 text-sm text-slate-100">github.com/eduardofontana</p>
              </a>
              <a
                href="https://www.instagram.com/duhduhfontana/"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="rounded-2xl border border-borderSoft bg-surface p-5 transition hover:border-cyan-300/40 hover:bg-surfaceStrong"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Instagram</p>
                <p className="mt-3 text-sm text-slate-100">instagram.com/duhduhfontana</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
