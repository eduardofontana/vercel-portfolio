"use client";

import { useEffect, useState } from "react";

const words = ["Secure Frontend", "Web Developer", "Pentester"];
const metrics = [
  { label: "Focus", value: "UX + AppSec" },
  { label: "Stack", value: "Next.js / TS" },
  { label: "Mode", value: "Build + Break" }
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const activeWord = words[wordIndex];

  useEffect(() => {
    const min = isDeleting ? 34 : 70;
    const max = isDeleting ? 56 : 110;
    const speed = Math.floor(Math.random() * (max - min) + min);

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const next = activeWord.slice(0, typed.length + 1);
        setTyped(next);
        if (next === activeWord) {
          window.setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const next = activeWord.slice(0, typed.length - 1);
        setTyped(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [activeWord, isDeleting, typed.length]);

  return (
    <section id="home" className="container-shell relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-x-0 top-12 -z-10 h-[460px] rounded-[40px] border border-borderSoft bg-scan opacity-40" />
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr] lg:items-end">
        <div className="reveal-up">
          <p className="eyebrow">Web Developer & Pentester</p>
          <div className="tech-line mt-6 pb-6">
            <h1 className="max-w-4xl font-display text-[clamp(3.2rem,8vw,7.2rem)] font-semibold uppercase leading-[0.92] tracking-[0.06em] text-slate-100">
              Tactical Web
              <br />
              Systems
            </h1>
          </div>
          <div className="reveal-up delay-1 mt-5 max-w-3xl">
            <p className="text-lg leading-8 text-slate-300 md:text-xl">
              Interfaces com presenca visual, arquitetura limpa e uma camada real de pensamento ofensivo para reduzir
              risco em produtos web.
            </p>
          </div>
          <div className="reveal-up delay-2 mt-8 flex items-center gap-2 font-mono text-sm text-cyan-200">
            <span className="text-slate-500">$</span>
            <span>{typed}</span>
            <span className="h-4 w-[2px] animate-pulse bg-cyan-300" />
          </div>
          <div className="reveal-up delay-3 mt-10 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-full border border-borderStrong bg-cyan-300/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/18"
            >
              Ver Projetos
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-borderSoft px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-slate-400 hover:bg-surfaceStrong"
            >
              Sobre o Perfil
            </a>
          </div>
        </div>

        <div className="panel reveal-up delay-4 relative overflow-hidden p-5 md:p-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="flex items-center justify-between border-b border-borderSoft pb-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">Live Console</p>
              <p className="mt-1 text-sm text-slate-300">design.system/status</p>
            </div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              Online
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-borderSoft bg-surfaceStrong/70 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                <p className="mt-2 text-lg font-medium text-slate-100">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-borderSoft bg-[#060b11] p-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-500">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
            </div>
            <div className="mt-4 space-y-2 leading-6">
              <p>
                <span className="text-cyan-200">[scan]</span> recon, UI audit, attack surface review
              </p>
              <p>
                <span className="text-cyan-200">[build]</span> performant apps, reusable systems, strong DX
              </p>
              <p>
                <span className="text-cyan-200">[ship]</span> clean deploys with Vercel-ready architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
