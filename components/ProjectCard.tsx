import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group panel relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-borderStrong">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-60" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Case File</p>
          <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.08em] text-slate-100">
            {project.name}
          </h3>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-400/5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200">
          Active
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={`${project.name}-${tech}`}
            className="rounded-full border border-borderSoft bg-surfaceStrong px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-4 text-sm uppercase tracking-[0.14em]">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="text-slate-200 transition hover:text-cyan-200"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="text-slate-200 transition hover:text-cyan-200"
        >
          Demo
        </a>
      </div>
    </article>
  );
}
