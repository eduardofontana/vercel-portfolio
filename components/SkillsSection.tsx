const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accessibility"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Fastify", "Express", "PostgreSQL", "Docker"]
  },
  {
    title: "Seguranca",
    items: ["OWASP", "Burp Suite", "Nmap", "API Security", "Threat Modeling"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="container-shell py-14 md:py-16">
      <p className="eyebrow">Capability Matrix</p>
      <h2 className="section-title mt-5">Skills</h2>
      <p className="section-subtitle">Stack de desenvolvimento e seguranca aplicada em projetos reais.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Cluster</p>
            <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-cyan-100">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={`${group.title}-${item}`}
                  className="rounded-md border border-borderSoft bg-surfaceStrong px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
