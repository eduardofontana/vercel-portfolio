"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Copy, Check } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const copyEmail = () => {
    navigator.clipboard.writeText("fontana.df@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedEmail && trimmedMessage.length >= 10) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setEmail("");
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div style={{ y }} className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-px bg-accent/10"
            style={{ left: `${(i + 1) * 10}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

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
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Vamos construir algo que realmente se destaque</h3>
              <p className="text-sm leading-7 text-text-secondary sm:text-base">
                Estou aberto a projetos ambiciosos, auditorias de segurança e oportunidades em que
                execução, presença digital e qualidade técnica precisam andar no mesmo nível.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 border border-border bg-bg-secondary/50 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/30">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-sm text-text-muted">EMAIL</div>
                  <div className="flex items-center gap-2">
                    <span className="break-all text-text-primary">fontana.df@gmail.com</span>
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
                className="flex items-center gap-4 border border-border bg-bg-secondary/50 p-4"
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-3"
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
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border border-green-500/30 bg-green-500/10 p-4 font-mono text-sm text-green-400"
                  >
                    ✓ Mensagem enviada com sucesso!
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
