"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Hero } from "@/components/Hero";
import { MotionSection, Reveal } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { projects } from "@/data/projects";
import { getSiteCopy } from "@/data/siteContent";

export default function HomePage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <>
      <Navbar />
      <main className="relative pb-20">
        <Hero />

        <MotionSection id="sobre" className="container-shell section-shell py-14 md:py-20">
          <div className="section-frame px-6 py-8 md:px-8 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <div>
                  <p className="eyebrow">{copy.about.eyebrow}</p>
                  <h2 className="section-title mt-5">{copy.about.title}</h2>
                  <p className="section-subtitle">{copy.about.description}</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="glass-card glass-card-strong glow-ring overflow-hidden rounded-[2rem] p-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    {copy.about.stats.map(([label, value]) => (
                      <div key={label}>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {copy.about.tracks.map((track, index) => (
                <Reveal key={track.label} delay={0.12 + index * 0.08}>
                  <article className="glass-card glass-card-strong interactive-card rounded-[2rem] p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{track.label}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.05em] text-sky-100">
                      {track.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{track.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="projetos" className="container-shell py-14 md:py-20">
          <p className="eyebrow">{copy.projects.eyebrow}</p>
          <h2 className="section-title mt-5">{copy.projects.title}</h2>
          <p className="section-subtitle">{copy.projects.description}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </MotionSection>

        <SkillsSection />

        <MotionSection id="contato" className="container-shell py-14 md:py-20">
          <div className="glass-card glass-card-strong glow-ring overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
              <Reveal>
                <div>
                  <p className="eyebrow">{copy.contact.eyebrow}</p>
                  <h2 className="section-title mt-5">{copy.contact.title}</h2>
                  <p className="section-subtitle">{copy.contact.description}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-[24px] border border-white/10 bg-[#0d0d0d]/80 p-5 font-mono text-xs text-slate-400 backdrop-blur-xl">
                  <p>{copy.contact.terminalCommand}</p>
                  <p className="mt-2 text-sky-200">{copy.contact.terminalStatus}</p>
                </div>
              </Reveal>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:fontana.df@gmail.com"
                className="glass-card interactive-card rounded-2xl p-5 hover:border-sky-300/40 hover:bg-white/8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Email</p>
                <p className="mt-3 text-sm text-slate-100">fontana.df@gmail.com</p>
              </a>
              <a
                href="https://github.com/eduardofontana"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="glass-card interactive-card rounded-2xl p-5 hover:border-sky-300/40 hover:bg-white/8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">GitHub</p>
                <p className="mt-3 text-sm text-slate-100">github.com/eduardofontana</p>
              </a>
              <a
                href="https://www.instagram.com/duhduhfontana/"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="glass-card interactive-card rounded-2xl p-5 hover:border-sky-300/40 hover:bg-white/8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Instagram</p>
                <p className="mt-3 text-sm text-slate-100">instagram.com/duhduhfontana</p>
              </a>
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
}
