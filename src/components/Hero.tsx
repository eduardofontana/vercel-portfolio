"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]"
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
      
      {/* Terminal Decorations */}
      <div className="absolute top-20 left-8 w-80 h-56 border border-border rounded-lg bg-bg-secondary/50 backdrop-blur-sm overflow-hidden hidden lg:block">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="ml-2 text-xs text-text-muted font-mono">root@portfolio:~</span>
        </div>
        <div className="p-3 font-mono text-xs text-accent">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-accent">$</span> ./init.sh
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-1"
          >
            Carregando módulos...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-1"
          >
            [OK] Protocolos de segurança
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-1"
          >
            [OK] Framework web
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-1"
          >
            [OK] Ferramentas de penetração
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-1 text-green-400"
          >
            ████████████████ 100%
          </motion.div>
        </div>
      </div>

      {/* Right Side Stats */}
      <div className="absolute top-20 right-8 w-64 border border-border rounded-lg bg-bg-secondary/50 backdrop-blur-sm p-4 hidden lg:block">
        <div className="font-mono text-xs text-text-secondary mb-3">STATUS DO SISTEMA</div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-text-muted">CPU</span>
            <span className="text-accent font-mono">23%</span>
          </div>
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "23%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
          <div className="flex justify-between text-xs mt-3">
            <span className="text-text-muted">MEM</span>
            <span className="text-accent font-mono">47%</span>
          </div>
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "47%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </div>
          <div className="flex justify-between text-xs mt-3">
            <span className="text-text-muted">RED</span>
            <span className="text-green-400 font-mono">ATIVO</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            DISPONÍVEL PARA TRABALHO
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4"
        >
          <span className="block">EDUARDO</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-text-secondary">
            Desenvolvedor Web <span className="text-accent">&</span> Pentester
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-text-muted text-sm md:text-base max-w-xl mx-auto font-mono"
        >
          Construindo sistemas seguros. Quebrando-os para torná-los mais fortes.
          <br />
          <span className="text-accent/60">Código sem segurança é só um bug esperando para acontecer.</span>
        </motion.p>

        {/* Interactive Grid Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="relative w-32 h-32 border border-border rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs font-mono">ROLE</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border border-accent pointer-events-none z-[10000] mix-blend-difference"
        style={{ 
          left: mousePos.x - 12,
          top: mousePos.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </section>
  );
}
