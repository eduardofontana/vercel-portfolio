"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["#projects", "Projetos"],
  ["#about", "Sobre"],
  ["#contact", "Contato"],
] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = window.matchMedia("(min-width: 768px)");
    function resize() {
      if (query.matches) {
        dialog.current?.close();
        setOpen(false);
      }
    }
    query.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = previous;
      query.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="ef. — Eduardo Fontana, início"
        >
          ef<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <span className="nav-location mono">
          BRASIL <span aria-hidden="true">↗</span> REMOTO
        </span>
        <button
          className="menu-trigger"
          ref={trigger}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          Menu <span aria-hidden="true">＋</span>
        </button>
      </div>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-labelledby="menu-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items =
            event.currentTarget.querySelectorAll<HTMLElement>(
              "button, a[href]",
            );
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu-heading">
          <span id="menu-title" className="mono">
            NAVEGAÇÃO
          </span>
          <button autoFocus onClick={closeMenu} aria-label="Fechar menu">
            Fechar ×
          </button>
        </div>
        <nav aria-label="Navegação móvel">
          {links.map(([href, label], index) => (
            <a
              href={href}
              key={href}
              onClick={(event) => {
                event.preventDefault();
                closeMenu();
                const target = document.querySelector<HTMLElement>(href);
                target?.focus({ preventScroll: true });
                target?.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "instant"
                    : "smooth",
                });
                history.replaceState(null, "", href);
              }}
            >
              <span className="mono">0{index + 1}</span>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <p>Ideias boas merecem sair do papel.</p>
      </dialog>
    </header>
  );
}
