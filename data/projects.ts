export type Project = {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    name: "BlueTeam Pulse",
    description:
      "Security dashboard to monitor auth events, suspicious traffic and risk score in real time.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/blue-team-pulse",
    demoUrl: "https://blue-team-pulse.vercel.app"
  },
  {
    name: "Pentest Notes Vault",
    description:
      "Organized workspace for pentest findings with markdown reports, severity tagging and export flow.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/your-username/pentest-notes-vault",
    demoUrl: "https://pentest-notes-vault.vercel.app"
  },
  {
    name: "ZeroDay Portfolio API",
    description:
      "A fast API layer used to expose projects, skills and contact endpoints for static and dynamic clients.",
    technologies: ["Fastify", "TypeScript", "Docker", "Redis"],
    githubUrl: "https://github.com/your-username/zeroday-portfolio-api",
    demoUrl: "https://zeroday-api.vercel.app"
  }
];
