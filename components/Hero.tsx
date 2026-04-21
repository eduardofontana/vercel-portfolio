"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteCopy } from "@/data/siteContent";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function Hero() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [labelIndex, setLabelIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 180]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 70]);
  const reverseOrbY = useTransform(backgroundY, (value) => value * -0.35);
  const asideY = useTransform(contentY, (value) => value * 0.6);
  const meshScale = useSpring(useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.08]), {
    stiffness: 120,
    damping: 18
  });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setLabelIndex((current) => (current + 1) % copy.hero.rotatingLabels.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [copy.hero.rotatingLabels.length, reduceMotion]);

  const activeLabel = useMemo(() => copy.hero.rotatingLabels[labelIndex], [copy.hero.rotatingLabels, labelIndex]);

  return (
    <section
      id="home"
      ref={ref}
      className="container-shell relative min-h-[100svh] overflow-hidden py-24 md:py-32"
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-10 -z-20 h-[42rem] rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(116,255,208,0.16),_transparent_38%),linear-gradient(135deg,rgba(8,12,16,0.92),rgba(6,8,12,0.72))] shadow-[0_60px_120px_rgba(0,0,0,0.55)]"
        style={{ y: backgroundY, scale: meshScale }}
      />
      <motion.div
        aria-hidden
        className="hero-mesh absolute inset-x-[5%] top-[8%] -z-10 h-[36rem] rounded-[3rem]"
        style={{ y: backgroundY }}
      />
      <div className="hero-noise -z-10" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="hero-vignette pointer-events-none absolute inset-0 -z-10" />
      <motion.div aria-hidden className="hero-orb left-[4%] top-[8%] h-56 w-56 bg-[#4ef2c2]/18" style={{ y: backgroundY }} />
      <motion.div
        aria-hidden
        className="hero-orb right-[6%] top-[18%] h-64 w-64 bg-sky-400/20"
        style={{ y: reverseOrbY }}
      />
      <motion.div aria-hidden className="hero-orb bottom-[12%] left-[20%] h-48 w-48 bg-fuchsia-400/10" style={{ y: backgroundY }} />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: contentY }}
          className="relative"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-200/84">{copy.hero.badge}</p>
          </div>

          <div className="mt-8 max-w-5xl">
            <p className="hero-kicker">{copy.hero.kicker}</p>
            <h1 className="mt-4 font-display text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-white">
              {copy.hero.titleTop}
              <span className="block text-white/72">{copy.hero.titleMiddle}</span>
              <span className="hero-outline block text-transparent">{copy.hero.titleBottom}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{copy.hero.description}</p>
          </div>

          <div className="mt-8 flex min-h-8 items-center gap-3 font-mono text-xs uppercase tracking-[0.34em] text-slate-400">
            <span className="text-slate-600">{copy.hero.mode}</span>
            <motion.span
              key={activeLabel}
              initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-emerald-200"
            >
              {activeLabel}
            </motion.span>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projetos" className="button-primary">{copy.hero.primaryCta}</a>
            <a href="#contato" className="button-secondary">{copy.hero.secondaryCta}</a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {copy.hero.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: index * 0.04 }}
                className="glass-card glass-card-strong group overflow-hidden rounded-[1.6rem] p-5"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-70" />
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-slate-400">{metric.label}</p>
                <p className="mt-3 max-w-[18ch] text-sm leading-7 text-slate-100 md:text-base">{metric.value}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-emerald-300/50 via-sky-300/30 to-transparent transition duration-500 group-hover:scale-x-110" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, x: 36, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: asideY }}
          className="relative"
        >
          <div className="glass-card glass-card-strong spotlight-panel overflow-hidden rounded-[2rem] p-5 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(94,234,212,0.14),_transparent_34%)]" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-slate-500">{copy.hero.panelTitle}</p>
                <p className="mt-2 text-sm text-slate-200">{copy.hero.panelSubtitle}</p>
              </div>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-200">
                {copy.hero.panelStatus}
              </span>
            </div>

            <div className="relative mt-5 space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                </div>
                <div className="mt-4 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">
                  {copy.hero.console.map((item, index) => (
                    <p key={item}>
                      <span className="text-sky-200">{String(index + 1).padStart(2, "0")}</span> {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {copy.hero.highlights.map(([title, body]) => (
                  <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">{title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
