"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, ShieldAlert } from "lucide-react";

export default function Callout() {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden py-20 sm:min-h-[50vh] sm:py-24 lg:min-h-[60vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-secondary/75 to-bg-primary/90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] sm:h-[520px] sm:w-[520px] lg:h-[600px] lg:w-[600px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-mono text-accent sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            NOVIDADE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-cyber-title mb-4 text-4xl tracking-[0.08em] text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="drop-shadow-[0_0_18px_rgba(0,255,136,0.28)]">
            ORÁCULO AI
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-text-primary sm:text-lg md:text-xl"
        >
          Tecnologia, Hospedagem, Segurança Digital e verificação de vazamentos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap items-center justify-center gap-4 font-mono text-sm text-text-secondary sm:text-base"
        >
          <span>3 serviços</span>
          <span className="text-accent/50">•</span>
          <span>60+ ferramentas + vazamentos</span>
          <span className="text-accent/50">•</span>
          <span>24h suporte</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="https://www.oraculoai.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent px-6 py-3 font-mono text-xs font-semibold text-bg-primary transition-all hover:shadow-[0_0_24px_rgba(0,255,136,0.28)] sm:text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            CONHECER ORÁCULO AI
          </motion.a>
          <motion.a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-secondary/60 px-6 py-3 font-mono text-xs text-text-primary transition-colors hover:border-accent hover:text-accent sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            FALAR NO WHATSAPP
          </motion.a>
          <motion.a
            href="https://www.oraculoai.cloud/ferramentas"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-secondary/60 px-6 py-3 font-mono text-xs text-text-primary transition-colors hover:border-accent hover:text-accent sm:text-sm"
          >
            <ShieldAlert className="h-4 w-4" />
            CONSULTAR HAVE I BEEN PWNED
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-12 left-1/2 h-px w-3/4 max-w-3xl -translate-x-1/2 origin-center sm:bottom-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-[4px]" />
      </motion.div>
    </section>
  );
}
