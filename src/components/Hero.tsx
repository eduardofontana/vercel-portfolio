"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateCursorMode = () => setShowCursor(mediaQuery.matches);

    updateCursorMode();
    mediaQuery.addEventListener("change", updateCursorMode);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      mediaQuery.removeEventListener("change", updateCursorMode);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-accent/5 blur-[120px] sm:h-[520px] sm:w-[520px] lg:h-[600px] lg:w-[600px] lg:blur-[150px]"
        style={{
          x: useTransform(scrollY, [0, 500], [0, -100]),
          y: useTransform(scrollY, [0, 500], [0, 100]),
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute top-20 left-8 hidden h-56 w-80 overflow-hidden rounded-lg border border-border bg-bg-secondary/50 backdrop-blur-sm lg:block">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <div className="h-3 w-3 rounded-full bg-red-500/50" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
          <div className="h-3 w-3 rounded-full bg-green-500/50" />
          <span className="ml-2 font-mono text-xs text-text-muted">root@portfolio:~</span>
        </div>
        <div className="p-3 font-mono text-xs text-accent">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <span className="text-accent">$</span> ./init.sh
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-1">
            Inicializando ambiente...
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-1">
            [OK] Arquitetura de produto carregada
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-1">
            [OK] Camadas de segurança ativas
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-1">
            [OK] Experiência validada
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-1 text-green-400">
            ████████████████ 100%
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 right-8 hidden w-64 rounded-lg border border-border bg-bg-secondary/50 p-4 backdrop-blur-sm lg:block">
        <div className="mb-3 font-mono text-xs text-text-secondary">STATUS DO SISTEMA</div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">CPU</span>
            <span className="font-mono text-accent">23%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "23%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs">
            <span className="text-text-muted">MEM</span>
            <span className="font-mono text-accent">47%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "47%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs">
            <span className="text-text-muted">REDE</span>
            <span className="font-mono text-green-400">ATIVA</span>
          </div>
        </div>
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-mono text-accent sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            DISPONÍVEL PARA PROJETOS SELETIVOS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block">EDUARDO</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-5 sm:mb-6"
        >
          <h2 className="text-lg font-light text-text-secondary sm:text-2xl lg:text-3xl">
            Desenvolvedor Web <span className="text-accent">&</span> Pentester
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-xs font-mono text-xs leading-6 text-text-muted sm:max-w-xl sm:text-sm md:text-base"
        >
          Eu construo experiências digitais com padrão alto de execução.
          <br className="hidden sm:block" />
          <span className="text-accent/60">
            Interface forte, performance real e segurança pensada como base, não como detalhe.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center gap-4 sm:mt-12"
        >
          <div className="group relative h-24 w-24 cursor-pointer overflow-hidden rounded-lg border border-border sm:h-32 sm:w-32">
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Terminal className="h-7 w-7 text-accent opacity-50 transition-opacity group-hover:opacity-100 sm:h-8 sm:w-8" />
            </div>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="font-mono text-[10px] sm:text-xs">ROLE</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {showCursor && (
        <motion.div
          className="pointer-events-none fixed z-[10000] h-6 w-6 rounded-full border border-accent mix-blend-difference"
          style={{
            left: mousePos.x - 12,
            top: mousePos.y - 12,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </section>
  );
}
