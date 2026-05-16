"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Sobre", section: "about" },
  { name: "Projetos", section: "projects" },
  { name: "Habilidades", section: "skills" },
  { name: "Contato", section: "contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "projects", "skills", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const initialSection = window.location.hash.replace("#", "");

    if (initialSection && navItems.some((item) => item.section === initialSection)) {
      document.getElementById(initialSection)?.scrollIntoView({ block: "start" });
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  const scrollToSection = (section: string) => {
    const target = section === "home" ? document.body : document.getElementById(section);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", "/");
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-primary/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-lg font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="material-symbols-outlined text-accent"
              aria-hidden="true"
            >
              hand_bones
            </span>
            <span className="sr-only">Inicio</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.section)}
                className={`px-4 py-2 text-sm font-mono transition-colors relative ${
                  activeSection === item.section
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex px-4 py-2 rounded-lg border border-accent text-accent text-sm font-mono hover:bg-accent hover:text-bg-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FALE_COMIGO
          </motion.button>

          <motion.button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-text-primary transition-transform duration-300 ${
                  mobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text-primary transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text-primary transition-transform duration-300 ${
                  mobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </div>
          </motion.button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden pb-4"
          >
            <div className="rounded-lg border border-border bg-bg-secondary/95 backdrop-blur-md">
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.section)}
                    className={`px-4 py-3 text-left font-mono text-sm transition-colors ${
                      activeSection === item.section
                        ? "text-accent"
                        : "text-text-secondary"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-lg border border-accent text-accent text-sm font-mono"
                >
                  FALE_COMIGO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
