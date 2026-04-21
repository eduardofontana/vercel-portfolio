const menu = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contato" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-borderSoft bg-bg/75 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between gap-6">
        <a href="#home" className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100">
          Eduardo
        </a>
        <ul className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-accentSoft hover:text-cyan-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="rounded-full border border-borderStrong bg-accentSoft px-3 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
