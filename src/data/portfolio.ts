export const profile = {
  name: "Eduardo Fontana",
  email: "duhduh.zip@proton.me",
  github: "https://github.com/eduardofontana",
  linkedin: "https://www.linkedin.com/in/eduardo-fontana-b9b20b284/",
  url: "https://eduardofontana.com.br",
};

export type Project = {
  name: string;
  category: string;
  summary: string;
  contribution: string;
  technologies: readonly string[];
  image: string;
  imageAlt: string;
  repository: string;
  demo?: string;
};

export const projects: readonly Project[] = [
  {
    name: "Vitrine App",
    category: "01 / Marketplace de produtos digitais",
    summary: "Um lugar para descobrir e vender o próximo projeto digital.",
    contribution:
      "Catálogo de micro-SaaS, apps e templates, com autenticação, perfis e um fluxo de aprovação antes da publicação.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Prisma"],
    image: "/projects/vitrine.svg",
    imageAlt:
      "Diagrama ilustrativo do Vitrine App: um projeto passa pela curadoria e chega ao catálogo público.",
    repository: "https://github.com/eduardofontana/vitrine.app",
  },
  {
    name: "Clinica.app",
    category: "02 / Sistema de gestão",
    summary: "Da agenda ao atendimento, tudo conectado.",
    contribution:
      "Gestão odontológica com agendamento online, portal do paciente e isolamento dos dados de cada clínica por RLS.",
    technologies: ["Next.js", "React", "PostgreSQL", "Supabase"],
    image: "/projects/clinica.svg",
    imageAlt:
      "Diagrama ilustrativo do Clinica.app conectando agenda, atendimento e portal do paciente.",
    repository: "https://github.com/eduardofontana/clinica.app",
  },
  {
    name: "SentinelFW",
    category: "03 / Segurança de rede",
    summary: "Eventos de rede transformados em visibilidade.",
    contribution:
      "Captura de pacotes, regras de firewall e detecção de intrusão, com eventos apresentados em um dashboard em tempo real.",
    technologies: ["Python", "FastAPI", "WebSocket", "SQLite"],
    image: "/projects/sentinel.svg",
    imageAlt:
      "Diagrama ilustrativo do SentinelFW: tráfego de rede passa por regras de detecção e gera eventos no dashboard.",
    repository: "https://github.com/eduardofontana/sentinel",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Aplicações web",
    text: "Interfaces claras, fluxos completos e atenção ao que acontece depois do clique.",
    tools: "React · Next.js · TypeScript",
    evidence: "Na prática: Vitrine App e Clinica.app",
  },
  {
    number: "02",
    title: "Backend & dados",
    text: "Autenticação, regras de negócio e dados organizados para sustentar o produto.",
    tools: "PostgreSQL · Supabase · FastAPI",
    evidence: "Na prática: Clinica.app e SentinelFW",
  },
  {
    number: "03",
    title: "Automação & segurança",
    text: "Processamento de eventos e sistemas que tornam o trabalho mais confiável.",
    tools: "Python · WebSocket · Linux",
    evidence: "Na prática: SentinelFW",
  },
];
