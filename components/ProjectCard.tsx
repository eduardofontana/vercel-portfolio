"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getSiteCopy } from "@/data/siteContent";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { getSafeExternalUrl } from "@/lib/security";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const safeGithubUrl = getSafeExternalUrl(project.githubUrl);
  const safeDemoUrl = getSafeExternalUrl(project.demoUrl);

  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group glass-card glass-card-strong interactive-card relative overflow-hidden rounded-[2rem] p-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(110,231,183,0.12),_transparent_28%)] opacity-80" />
      <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-sky-400/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-emerald-400/12" />
      <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 transition duration-500 group-hover:opacity-90" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{copy.projects.cardEyebrow}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.05em] text-slate-100 transition duration-300 group-hover:text-white">
            {project.name}
          </h3>
        </div>
        <span className="rounded-full border border-sky-300/20 bg-sky-400/5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-sky-200 backdrop-blur-xl">
          {copy.projects.status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{project.description[locale]}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={`${project.name}-${tech}`}
            className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-300 backdrop-blur-xl"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-4 text-sm uppercase tracking-[0.14em]">
        {safeGithubUrl ? (
          <a
            href={safeGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="relative inline-flex items-center gap-2 text-slate-200 transition duration-300 hover:text-sky-200"
          >
            {copy.projects.github}
            <span className="translate-y-px transition duration-300 group-hover:translate-x-1">+</span>
          </a>
        ) : (
          <span className="cursor-not-allowed text-slate-500">{copy.projects.github}</span>
        )}
        {safeDemoUrl ? (
          <a
            href={safeDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="relative inline-flex items-center gap-2 text-slate-200 transition duration-300 hover:text-sky-200"
          >
            {copy.projects.demo}
            <span className="translate-y-px transition duration-300 group-hover:translate-x-1">+</span>
          </a>
        ) : (
          <span className="cursor-not-allowed text-slate-500">{copy.projects.demo}</span>
        )}
      </div>
    </motion.article>
  );
}
