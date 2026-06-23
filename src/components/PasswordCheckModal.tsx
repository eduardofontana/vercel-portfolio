"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldAlert, ShieldCheck, X, Eye, EyeOff, AlertCircle } from "lucide-react";

interface PasswordCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckStatus = "idle" | "checking" | "pwned" | "safe" | "error";

async function sha1Hex(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export default function PasswordCheckModal({ isOpen, onClose }: PasswordCheckModalProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<CheckStatus>("idle");
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const checkPassword = useCallback(async () => {
    const trimmed = password.trim();
    if (!trimmed) return;

    setStatus("checking");
    setCount(0);

    try {
      const hash = await sha1Hex(trimmed);
      const prefix = hash.slice(0, 5);
      const suffix = hash.slice(5);

      const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      if (!res.ok) throw new Error("API request failed");

      const text = await res.text();
      const lines = text.split("\n");
      const match = lines.find((line) => line.toUpperCase().startsWith(suffix));

      if (match) {
        const found = parseInt(match.split(":")[1], 10);
        setCount(found);
        setStatus("pwned");
      } else {
        setStatus("safe");
      }
    } catch {
      setStatus("error");
    }
  }, [password]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
            aria-hidden="true"
            type="button"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Verificador de vazamentos de senha"
            className="relative w-full max-w-md overflow-hidden rounded-lg border border-border bg-bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border bg-bg-secondary px-4 py-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="font-mono text-sm text-text-primary">HIBP Password Check</span>
              </div>
              <button
                onClick={onClose}
                type="button"
                aria-label="Fechar"
                className="rounded p-1 text-text-muted transition-colors hover:bg-border hover:text-text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <p className="mb-5 font-mono text-xs leading-6 text-text-secondary sm:text-sm">
                Digite uma senha para verificar se ela já apareceu em vazamentos de dados conhecidos.
                Sua senha <strong className="text-accent">nunca é enviada</strong> — apenas os primeiros caracteres do hash.
              </p>

              <div className="mb-4">
                <label htmlFor="hibp-password" className="mb-2 block font-mono text-xs text-text-muted">
                  <span className="text-accent">$</span> Digite a senha:
                </label>
                <div className="flex items-center border border-border bg-bg-secondary transition-colors focus-within:border-accent">
                  <span className="px-3 font-mono text-accent">{`>`}</span>
                  <input
                    id="hibp-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (status !== "idle" && status !== "error") setStatus("idle");
                    }}
                    placeholder="••••••••"
                    className="min-w-0 flex-1 bg-transparent px-2 py-3 font-mono text-sm outline-none placeholder:text-text-muted"
                    autoComplete="off"
                    spellCheck={false}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && password.trim()) checkPassword();
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    className="px-3 text-text-muted transition-colors hover:text-text-primary"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={checkPassword}
                disabled={!password.trim() || status === "checking"}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-3 font-mono text-sm text-accent transition-all hover:bg-accent hover:text-bg-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "checking" ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    VERIFICANDO...
                  </>
                ) : (
                  <>
                    <ShieldAlert className="h-4 w-4" />
                    VERIFICAR VAZAMENTO
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "pwned" && (
                  <motion.div
                    key="pwned"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 border border-red-500/30 bg-red-500/10 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                      <span className="font-mono text-sm font-semibold text-red-400">
                        VAZAMENTO DETECTADO
                      </span>
                    </div>
                    <p className="font-mono text-xs leading-6 text-red-300/90">
                      Esta senha apareceu{" "}
                      <span className="text-red-400 font-bold">{formatCount(count)}</span> vez
                      {count > 1 ? "es" : ""} em vazamentos conhecidos.
                    </p>
                    <p className="mt-2 font-mono text-[11px] text-red-300/70">
                      Recomenda-se trocar imediatamente e não reutilizar em outros serviços.
                    </p>
                  </motion.div>
                )}

                {status === "safe" && (
                  <motion.div
                    key="safe"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 border border-green-500/30 bg-green-500/10 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-green-400" />
                      <span className="font-mono text-sm font-semibold text-green-400">
                        SENHA SEGURA
                      </span>
                    </div>
                    <p className="font-mono text-xs leading-6 text-green-300/90">
                      Nenhuma ocorrência desta senha foi encontrada nos vazamentos conhecidos.
                    </p>
                    <p className="mt-2 font-mono text-[11px] text-green-300/70">
                      Mesmo assim, usar senhas únicas e fortes para cada serviço é a melhor prática.
                    </p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 border border-yellow-500/30 bg-yellow-500/10 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 shrink-0 text-yellow-400" />
                      <span className="font-mono text-sm font-semibold text-yellow-400">
                        ERRO NA CONSULTA
                      </span>
                    </div>
                    <p className="font-mono text-xs leading-6 text-yellow-300/90">
                      Não foi possível consultar a API. Verifique sua conexão e tente novamente.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-border bg-bg-secondary px-5 py-3 sm:px-6">
              <p className="font-mono text-[10px] text-text-muted sm:text-[11px]">
                Dados fornecidos por{" "}
                <a
                  href="https://haveibeenpwned.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2 hover:no-underline"
                >
                  Have I Been Pwned
                </a>
                {" "}(k-anonymity model)
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
