import type { Locale } from "@/components/LanguageProvider";

export type Project = {
  name: string;
  description: Record<Locale, string>;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    name: "BlueTeam Pulse",
    description: {
      "pt-BR": "Dashboard de seguranca para monitorar eventos de autenticacao, trafego suspeito e score de risco em tempo real.",
      en: "Security dashboard to monitor auth events, suspicious traffic and risk score in real time.",
      es: "Dashboard de seguridad para monitorear eventos de autenticacion, trafico sospechoso y riesgo en tiempo real."
    },
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/blue-team-pulse",
    demoUrl: "https://blue-team-pulse.vercel.app"
  },
  {
    name: "Pentest Notes Vault",
    description: {
      "pt-BR": "Workspace organizado para achados de pentest com relatorios em markdown, severidade e fluxo de exportacao.",
      en: "Organized workspace for pentest findings with markdown reports, severity tagging and export flow.",
      es: "Workspace organizado para hallazgos de pentest con reportes markdown, severidad y exportacion."
    },
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/your-username/pentest-notes-vault",
    demoUrl: "https://pentest-notes-vault.vercel.app"
  },
  {
    name: "ZeroDay Portfolio API",
    description: {
      "pt-BR": "Camada de API rapida para expor projetos, skills e endpoints de contato para clientes estaticos e dinamicos.",
      en: "A fast API layer used to expose projects, skills and contact endpoints for static and dynamic clients.",
      es: "Capa de API rapida para exponer proyectos, skills y endpoints de contacto para clientes estaticos y dinamicos."
    },
    technologies: ["Fastify", "TypeScript", "Docker", "Redis"],
    githubUrl: "https://github.com/your-username/zeroday-portfolio-api",
    demoUrl: "https://zeroday-api.vercel.app"
  }
];
