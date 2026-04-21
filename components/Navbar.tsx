"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Motion";
import { getLocaleNativeLabel, getSiteCopy, locales } from "@/data/siteContent";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const { locale, setLocale } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.25
  });
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08], reduceMotion ? [1, 1] : [0.78, 0.96]);
  const headerBackground = useTransform(headerOpacity, (value) => `rgba(5,7,10,${value})`);
  const copy = getSiteCopy(locale);
  const menu = [
    { label: copy.nav.home, href: "#home" },
    { label: copy.nav.about, href: "#sobre" },
    { label: copy.nav.projects, href: "#projetos" },
    { label: copy.nav.skills, href: "#skills" },
    { label: copy.nav.contact, href: "#contato" }
  ];
  const activeLocale = locales.find((option) => option.code === locale) ?? locales[0];

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/8 bg-[#05070a]/58 backdrop-blur-2xl"
      style={{ backgroundColor: headerBackground }}
    >
      <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300" style={{ scaleX: progressScaleX }} />
      <Reveal className="container-shell">
        <nav className="flex h-[72px] items-center justify-between gap-6 py-3">
          <a href="#home" className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-slate-50">
            Eduardo
          </a>
          <ul className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
            {menu.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2.5 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <div ref={menuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen((current) => !current)}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-xl transition hover:border-white/16 hover:bg-white/8 md:gap-3 md:px-4"
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="menu"
                aria-label={copy.nav.languageMenuAria}
              >
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400 sm:inline">
                  {copy.nav.languageLabel}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white">{activeLocale.label}</span>
                <motion.span
                  animate={{ rotate: isLanguageMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xs text-slate-400 transition group-hover:text-white"
                >
                  v
                </motion.span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen ? (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.96, filter: "blur(10px)" }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98, filter: "blur(8px)" }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-[calc(100%+0.75rem)] z-50 min-w-[11rem] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)),rgba(7,10,14,0.92)] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:min-w-[13rem]"
                    role="menu"
                  >
                    <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                    <p className="px-3 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                      {copy.nav.languageLabel}
                    </p>
                    <div className="space-y-1">
                      {locales.map((option) => {
                        const isActive = locale === option.code;

                        return (
                          <button
                            key={option.code}
                            type="button"
                            onClick={() => {
                              setLocale(option.code);
                              setIsLanguageMenuOpen(false);
                            }}
                            className={`flex w-full items-center justify-between rounded-[1rem] px-3 py-3 text-left transition ${
                              isActive
                                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                : "text-slate-300 hover:bg-white/6 hover:text-white"
                            }`}
                            role="menuitem"
                            aria-pressed={isActive}
                          >
                            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                              {option.label}
                            </span>
                            <span className="text-sm text-slate-200">
                              {getLocaleNativeLabel(option.code)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <a href="#contato" className="button-secondary px-4 py-2.5 text-[11px] tracking-[0.24em]">
              {copy.nav.contact}
            </a>
          </div>
        </nav>
      </Reveal>
    </motion.header>
  );
}
