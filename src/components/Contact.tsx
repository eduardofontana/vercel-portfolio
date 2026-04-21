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
    <section id="contact" className="relative min-h-screen py-24 px-4 lg:px-8 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div style={{ y }} className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-accent/10"
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

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm">04</span>
            <div className="h-px bg-border flex-1" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">CONTATO</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Vamos Trabalhar Juntos</h3>
              <p className="text-text-secondary leading-relaxed">
                Estou sempre aberto para discutir novos projetos, auditorias de segurança, ou oportunidades em
                desenvolvimento web e cibersegurança.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 border border-border bg-bg-secondary/50"
              >
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-text-muted font-mono">EMAIL</div>
                  <div className="flex items-center gap-2">
                    <span className="text-text-primary break-all">fontana.df@gmail.com</span>
                    <button
                      onClick={copyEmail}
                      aria-label={copied ? "Email copiado" : "Copiar email"}
                      className="p-1 hover:text-accent transition-colors shrink-0"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 border border-border bg-bg-secondary/50"
              >
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-text-muted font-mono">LOCALIZAÇÃO</div>
                  <span className="text-text-primary">Remoto / Mundial</span>
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono text-text-secondary">Disponível para novos projetos</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border border-border bg-bg-card rounded-lg overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-bg-secondary">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-4 text-text-muted text-xs font-mono">root@portfolio:~/contato</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 border border-green-500/30 bg-green-500/10 text-green-400 font-mono text-sm"
                  >
                    ✓ Mensagem enviada com sucesso!
                  </motion.div>
                ) : (
                  <motion.div key="form-content" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-2">
                        <span className="text-accent">$</span> Digite seu email:
                      </label>
                      <div className="flex items-center border border-border bg-bg-secondary focus-within:border-accent transition-colors">
                        <span className="px-3 text-accent font-mono">{`>`}</span>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          className="flex-1 bg-transparent px-2 py-3 font-mono text-sm outline-none placeholder:text-text-muted min-w-0"
                          required
                          autoComplete="email"
                          maxLength={120}
                          inputMode="email"
                          spellCheck={false}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-2">
                        <span className="text-accent">$</span> Digite sua mensagem:
                      </label>
                      <div className="border border-border bg-bg-secondary focus-within:border-accent transition-colors">
                        <div className="flex items-start border-b border-border">
                          <span className="px-3 pt-3 text-accent font-mono">{`>`}</span>
                          <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Sua mensagem aqui..."
                            rows={4}
                            className="flex-1 bg-transparent px-2 py-3 font-mono text-sm outline-none placeholder:text-text-muted resize-none min-w-0"
                            required
                            minLength={10}
                            maxLength={2000}
                            spellCheck={false}
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-text-muted font-mono">
                        Min. 10 caracteres. Max. 2000.
                      </p>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 border border-accent bg-accent/10 text-accent font-mono text-sm hover:bg-accent hover:text-bg-primary transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
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
          className="mt-16 text-center text-text-muted text-sm font-mono"
        >
          <p>Projetado e Construído por Eduardo</p>
          <p className="mt-2">© {new Date().getFullYear()} - Todos os sistemas operacionais</p>
        </motion.div>
      </div>
    </section>
  );
}
