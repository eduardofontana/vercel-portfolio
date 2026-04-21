import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, MotionSection } from "@/components/Motion";
import { getSiteCopy } from "@/data/siteContent";

export function SkillsSection() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <MotionSection id="skills" className="container-shell py-14 md:py-20">
      <p className="eyebrow">{copy.skills.eyebrow}</p>
      <h2 className="section-title mt-5">{copy.skills.title}</h2>
      <p className="section-subtitle">{copy.skills.description}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {copy.skills.groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="glass-card glass-card-strong interactive-card relative overflow-hidden rounded-[2rem] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.1),_transparent_34%)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{copy.skills.cluster}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.05em] text-sky-100">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={`${group.title}-${item}`}
                    className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-200 backdrop-blur-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </MotionSection>
  );
}
