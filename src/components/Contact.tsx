"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Copy, Check } from "lucide-react";

const RATE_LIMIT_MS = 30000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GRID_COLUMNS = [
  "left-[10%]",
  "left-[20%]",
  "left-[30%]",
  "left-[40%]",
  "left-[50%]",
  "left-[60%]",
  "left-[70%]",
  "left-[80%]",
  "left-[90%]",
  "left-[100%]",
] as const;

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "");
}

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const lastSubmit = useRef(0);

  const copyEmail = useCallback(() => {
    navigator.clipboard
      .writeText("contato@eduardofontana.com.br")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => setCopied(false));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const now = Date.now();
    if (now - lastSubmit.current < RATE_LIMIT_MS) {
      const wait = Math.ceil((RATE_LIMIT_MS - (now - lastSubmit.current)) / 1000);
      setError(`Aguarde ${wait}s antes de enviar outra mensagem.`);
      return;
    }

    const trimmedEmail = sanitizeInput(email.trim());
    const trimmedMessage = sanitizeInput(message.trim());

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Insira um email válido.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("Mensagem deve ter no mínimo 10 caracteres.");
      return;
    }

    if (trimmedMessage.length > 2000) {
      setError("Mensagem deve ter no máximo 2000 caracteres.");
      return;
    }

    lastSubmit.current = now;

    const subject = encodeURIComponent(`Contato pelo portfolio - ${trimmedEmail}`);
    const body = encodeURIComponent(`${trimmedMessage}\n\nEmail para retorno: ${trimmedEmail}`);

    window.location.href = `mailto:contato@eduardofontana.com.br?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setMessage("");
    }, 3000);
  }, [email, message]);

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-secondary/75 to-bg-primary/90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="contact-lines absolute inset-0 pointer-events-none">
        {GRID_COLUMNS.map((column) => (
          <div key={column} className={`absolute h-full w-px bg-accent/10 ${column}`} />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-sm text-accent">04</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">CONTATO</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Vamos tirar sua ideia do papel?</h3>
              <p className="text-sm leading-7 text-text-secondary sm:text-base">
                Me conte o que você precisa: site, landing page, portfólio, ajuste visual ou revisão de segurança.
                Respondo de forma direta e sem complicar o processo.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-lg border border-border bg-bg-secondary/50 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/30">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-sm text-text-muted">EMAIL</div>
                  <div className="flex items-center gap-2">
                    <span className="break-all text-text-primary">contato@eduardofontana.com.br</span>
                    <button
                      onClick={copyEmail}
                      aria-label={copied ? "Email copiado" : "Copiar email"}
                      className="shrink-0 p-1 transition-colors hover:text-accent"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-lg border border-border bg-bg-secondary/50 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/30">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-sm text-text-muted">LOCALIZAÇÃO</div>
                  <span className="text-text-primary">Remoto / Global</span>
                </div>
              </motion.div>
            </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-lg border border-border bg-bg-secondary/50 p-4"
              >
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/eduardofontana"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eduardo-fontana-b9b20b284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/duhduhfontana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
                <div className="font-mono text-xs text-text-muted">SOCIAL</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="font-mono text-sm text-text-secondary">Disponível para novos projetos</span>
              </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg border border-border bg-bg-card"
          >
            <div className="flex items-center gap-2 border-b border-border bg-bg-secondary px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/50" />
              <span className="ml-4 font-mono text-xs text-text-muted">root@portfolio:~/contato</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-red-500/30 bg-red-500/10 p-3 font-mono text-xs text-red-400"
                >
                  {error}
                </motion.div>
              )}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border border-green-500/30 bg-green-500/10 p-4 font-mono text-sm text-green-400"
                  >
                    Abrindo seu cliente de email...
                  </motion.div>
                ) : (
                  <motion.div key="form-content" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div>
                      <label htmlFor="email" className="mb-2 block font-mono text-xs text-text-muted">
                        <span className="text-accent">$</span> Digite seu email:
                      </label>
                      <div className="flex items-center border border-border bg-bg-secondary transition-colors focus-within:border-accent">
                        <span className="px-3 font-mono text-accent">{`>`}</span>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          className="min-w-0 flex-1 bg-transparent px-2 py-3 font-mono text-sm outline-none placeholder:text-text-muted"
                          required
                          autoComplete="email"
                          maxLength={120}
                          inputMode="email"
                          spellCheck={false}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="message" className="mb-2 block font-mono text-xs text-text-muted">
                        <span className="text-accent">$</span> Digite sua mensagem:
                      </label>
                      <div className="border border-border bg-bg-secondary transition-colors focus-within:border-accent">
                        <div className="flex items-start border-b border-border">
                          <span className="px-3 pt-3 font-mono text-accent">{`>`}</span>
                          <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Descreva o projeto, o nível de ambição da entrega e onde você sente que a experiência ainda está abaixo do que deveria."
                            rows={5}
                            className="min-w-0 flex-1 resize-none bg-transparent px-2 py-3 font-mono text-sm leading-6 outline-none placeholder:text-text-muted"
                            required
                            minLength={10}
                            maxLength={2000}
                            spellCheck={false}
                          />
                        </div>
                      </div>
                      <p className="mt-2 font-mono text-xs text-text-muted">Min. 10 caracteres. Max. 2000.</p>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 flex w-full items-center justify-center gap-2 border border-accent bg-accent/10 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg-primary"
                    >
                      <Send className="h-4 w-4" />
                      ENVIAR_MENSAGEM
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center font-mono text-xs text-text-muted sm:mt-16 sm:text-sm"
        >
          <p>Projetado e construído por Eduardo</p>
          <p className="mt-2">© {new Date().getFullYear()} - Todos os direitos reservados</p>
        </motion.div>
      </div>
    </section>
  );
}
