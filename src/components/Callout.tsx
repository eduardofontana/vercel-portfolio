"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Search, Terminal } from "lucide-react";
import PasswordCheckModal from "./PasswordCheckModal";

export default function Callout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden py-20 sm:min-h-[50vh] sm:py-24 lg:min-h-[60vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-secondary/75 to-bg-primary/90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] sm:h-[520px] sm:w-[520px] lg:h-[600px] lg:w-[600px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-mono text-accent sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            SEGURANÇA
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 sm:h-16 sm:w-16">
            <ShieldAlert className="h-7 w-7 text-accent sm:h-8 sm:w-8" />
          </div>
          <div>
            <h2 className="font-cyber-title text-3xl tracking-[0.06em] text-text-primary sm:text-5xl md:text-6xl">
              HAVE I BEEN
            </h2>
            <h2 className="font-cyber-title -mt-1 text-3xl tracking-[0.06em] text-text-primary sm:-mt-2 sm:text-5xl md:text-6xl">
              <span className="text-accent drop-shadow-[0_0_14px_rgba(0,255,136,0.28)]">PWNED</span>
              <span className="ml-2 text-sm text-text-muted sm:ml-3 sm:text-base">?</span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 max-w-lg text-sm leading-7 text-text-secondary sm:text-base"
        >
          Descubra se sua senha já vazou em ataques reais. A consulta é
          100% segura — sua senha <span className="text-accent">nunca sai do navegador</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 grid max-w-sm grid-cols-3 gap-3"
        >
          <div className="rounded border border-border bg-bg-secondary/50 px-3 py-2 text-center">
            <Search className="mx-auto mb-1 h-4 w-4 text-accent" />
            <div className="font-mono text-[10px] text-text-muted">K-ANON</div>
          </div>
          <div className="rounded border border-border bg-bg-secondary/50 px-3 py-2 text-center">
            <Terminal className="mx-auto mb-1 h-4 w-4 text-accent" />
            <div className="font-mono text-[10px] text-text-muted">SHA-1</div>
          </div>
          <div className="rounded border border-border bg-bg-secondary/50 px-3 py-2 text-center">
            <ShieldCheck className="mx-auto mb-1 h-4 w-4 text-accent" />
            <div className="font-mono text-[10px] text-text-muted">PRIVADO</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            type="button"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-8 py-4 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-bg-primary hover:shadow-[0_0_24px_rgba(0,255,136,0.28)]"
          >
            <ShieldAlert className="h-5 w-5" />
            VERIFICAR SENHA
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 font-mono text-[10px] text-text-muted sm:text-xs"
        >
          Dados fornecidos por{" "}
          <a
            href="https://haveibeenpwned.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:no-underline"
          >
            Have I Been Pwned
          </a>
          {" "}— mais de 15 bilhões de contas indexadas
        </motion.p>
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

      <PasswordCheckModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
