"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("success");
      timer.current = setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="copy-control">
      <button
        className="copy-button"
        onClick={copy}
      >
        <span aria-hidden="true">{status === "success" ? "✓" : "⧉"}</span>{" "}
        {status === "success" ? "Copiado" : "Copiar e-mail"}
      </button>
      <span className="copy-status" role="status">
        {status === "error"
          ? "Não foi possível copiar. Selecione o endereço acima ou clique nele para abrir seu e-mail."
          : status === "success"
            ? "Endereço copiado para a área de transferência."
            : ""}
      </span>
    </div>
  );
}
