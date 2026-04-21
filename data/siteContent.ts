import type { Locale } from "@/components/LanguageProvider";

export const locales: { code: Locale; label: string }[] = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" }
];

export const siteContent = {
  "pt-BR": {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
      languageLabel: "Idioma",
      languageMenuAria: "Selecionar idioma"
    },
    hero: {
      badge: "Web Developer & Pentester",
      kicker: "Desenvolvimento web com foco em performance, experiencia e seguranca",
      titleTop: "Web",
      titleMiddle: "Developer",
      titleBottom: "& Pentester",
      description:
        "Desenvolvo interfaces modernas, aplicacoes performaticas e projetos com foco em seguranca, unindo qualidade visual, codigo limpo e arquitetura confiavel.",
      mode: "modo",
      rotatingLabels: ["Frontend moderno", "Pentest web", "Performance e seguranca"],
      primaryCta: "Ver Projetos",
      secondaryCta: "Abrir Contato",
      metrics: [
        { label: "Entrega", value: "Next.js / React / Motion" },
        { label: "Foco", value: "Engenharia web + AppSec" },
        { label: "Perfil", value: "Produtos de alta confianca e alta performance" }
      ],
      panelTitle: "Resumo profissional",
      panelSubtitle: "desenvolvimento, seguranca e entrega",
      panelStatus: "Online",
      console: [
        "interfaces modernas com foco em usabilidade e performance",
        "boas praticas de seguranca aplicadas desde a arquitetura",
        "projetos prontos para deploy e evolucao continua"
      ],
      highlights: [
        ["Desenvolvimento", "Aplicacoes modernas, responsivas e bem estruturadas"],
        ["Seguranca", "Analise, validacao e reducao de superficie de ataque"],
        ["Entrega", "Codigo limpo, escalavel e pronto para producao"]
      ]
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Sobre",
      description:
        "Profissional focado em construir produtos web com qualidade tecnica, escalabilidade e seguranca desde o inicio do projeto.",
      stats: [
        ["Base", "Frontend"],
        ["Lente", "Seguranca"],
        ["Entrega", "Deploy pronto"]
      ],
      tracks: [
        {
          label: "Area 01",
          title: "Desenvolvimento Web",
          description:
            "Experiencia com arquitetura frontend, componentizacao, APIs e interfaces performaticas com foco em conversao e manutenibilidade."
        },
        {
          label: "Area 02",
          title: "Seguranca / Pentest",
          description:
            "Praticas de analise de superficie de ataque, validacao de vulnerabilidades e aplicacao de controles para reduzir risco em aplicacoes web."
        }
      ]
    },
    projects: {
      eyebrow: "Projetos em destaque",
      title: "Projetos",
      description: "Projetos reais em desenvolvimento web e seguranca ofensiva.",
      cardEyebrow: "Projeto",
      status: "Ativo",
      github: "GitHub",
      demo: "Demo"
    },
    skills: {
      eyebrow: "Competencias",
      title: "Habilidades",
      description: "Stack de desenvolvimento e seguranca aplicada em projetos reais.",
      cluster: "Categoria",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Acessibilidade"]
        },
        {
          title: "Backend",
          items: ["Node.js", "Fastify", "Express", "PostgreSQL", "Docker"]
        },
        {
          title: "Seguranca",
          items: ["OWASP", "Burp Suite", "Nmap", "API Security", "Threat Modeling"]
        }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Contato",
      description: "Vamos conversar sobre seu projeto, auditoria ou parceria tecnica.",
      terminalCommand: "eduardo@portfolio:~$ iniciar_contato",
      terminalStatus: "status: aguardando mensagem"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      languageLabel: "Language",
      languageMenuAria: "Select language"
    },
    hero: {
      badge: "Web Developer & Pentester",
      kicker: "Web development focused on performance, experience and security",
      titleTop: "Web",
      titleMiddle: "Developer",
      titleBottom: "& Pentester",
      description:
        "I build modern interfaces, high-performance applications and security-focused projects, combining strong visual quality, clean code and reliable architecture.",
      mode: "mode",
      rotatingLabels: ["Modern frontend", "Web pentest", "Performance and security"],
      primaryCta: "View Projects",
      secondaryCta: "Open Contact",
      metrics: [
        { label: "Shipping", value: "Next.js / React / Motion" },
        { label: "Focus", value: "Web engineering + AppSec" },
        { label: "Profile", value: "High-trust, high-performance products" }
      ],
      panelTitle: "Professional snapshot",
      panelSubtitle: "development, security and delivery",
      panelStatus: "Online",
      console: [
        "modern interfaces focused on usability and performance",
        "security best practices applied from the architecture stage",
        "projects ready for deployment and continuous evolution"
      ],
      highlights: [
        ["Development", "Modern, responsive and well-structured applications"],
        ["Security", "Analysis, validation and reduction of attack surface"],
        ["Delivery", "Clean, scalable and production-ready code"]
      ]
    },
    about: {
      eyebrow: "About me",
      title: "About",
      description:
        "A professional focused on building web products with technical quality, scalability and security from the start.",
      stats: [
        ["Core", "Frontend"],
        ["Lens", "Security"],
        ["Delivery", "Vercel-ready"]
      ],
      tracks: [
        {
          label: "Area 01",
          title: "Web Development",
          description:
            "Experience with frontend architecture, component systems, APIs and high-performance interfaces focused on conversion and maintainability."
        },
        {
          label: "Area 02",
          title: "Security / Pentest",
          description:
            "Attack surface analysis, vulnerability validation and protective controls to reduce risk in web applications."
        }
      ]
    },
    projects: {
      eyebrow: "Featured projects",
      title: "Projects",
      description: "Real projects across web development and offensive security.",
      cardEyebrow: "Project",
      status: "Active",
      github: "GitHub",
      demo: "Demo"
    },
    skills: {
      eyebrow: "Core skills",
      title: "Skills",
      description: "Development stack and applied security used in real projects.",
      cluster: "Category",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accessibility"]
        },
        {
          title: "Backend",
          items: ["Node.js", "Fastify", "Express", "PostgreSQL", "Docker"]
        },
        {
          title: "Security",
          items: ["OWASP", "Burp Suite", "Nmap", "API Security", "Threat Modeling"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      description: "Let us talk about your project, audit or technical partnership.",
      terminalCommand: "eduardo@portfolio:~$ start_contact",
      terminalStatus: "status: awaiting message"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre",
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
      languageLabel: "Idioma",
      languageMenuAria: "Seleccionar idioma"
    },
    hero: {
      badge: "Web Developer & Pentester",
      kicker: "Desarrollo web con foco en rendimiento, experiencia y seguridad",
      titleTop: "Web",
      titleMiddle: "Developer",
      titleBottom: "& Pentester",
      description:
        "Desarrollo interfaces modernas, aplicaciones de alto rendimiento y proyectos con foco en seguridad, combinando calidad visual, codigo limpio y arquitectura confiable.",
      mode: "modo",
      rotatingLabels: ["Frontend moderno", "Pentest web", "Rendimiento y seguridad"],
      primaryCta: "Ver Proyectos",
      secondaryCta: "Abrir Contacto",
      metrics: [
        { label: "Entrega", value: "Next.js / React / Motion" },
        { label: "Foco", value: "Ingenieria web + AppSec" },
        { label: "Perfil", value: "Productos de alta confianza y rendimiento" }
      ],
      panelTitle: "Resumen profesional",
      panelSubtitle: "desarrollo, seguridad y entrega",
      panelStatus: "Online",
      console: [
        "interfaces modernas con foco en usabilidad y rendimiento",
        "buenas practicas de seguridad desde la arquitectura",
        "proyectos listos para deploy y evolucion continua"
      ],
      highlights: [
        ["Desarrollo", "Aplicaciones modernas, responsive y bien estructuradas"],
        ["Seguridad", "Analisis, validacion y reduccion de superficie de ataque"],
        ["Entrega", "Codigo limpio, escalable y listo para produccion"]
      ]
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Sobre",
      description:
        "Profesional enfocado en construir productos web con calidad tecnica, escalabilidad y seguridad desde el inicio.",
      stats: [
        ["Base", "Frontend"],
        ["Lente", "Seguridad"],
        ["Entrega", "Deploy listo"]
      ],
      tracks: [
        {
          label: "Area 01",
          title: "Desarrollo Web",
          description:
            "Experiencia con arquitectura frontend, componentes, APIs e interfaces de alto rendimiento con foco en conversion y mantenimiento."
        },
        {
          label: "Area 02",
          title: "Seguridad / Pentest",
          description:
            "Analisis de superficie de ataque, validacion de vulnerabilidades y controles para reducir riesgo en aplicaciones web."
        }
      ]
    },
    projects: {
      eyebrow: "Proyectos destacados",
      title: "Proyectos",
      description: "Proyectos reales en desarrollo web y seguridad ofensiva.",
      cardEyebrow: "Proyecto",
      status: "Activo",
      github: "GitHub",
      demo: "Demo"
    },
    skills: {
      eyebrow: "Competencias",
      title: "Skills",
      description: "Stack de desarrollo y seguridad aplicada en proyectos reales.",
      cluster: "Categoria",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accesibilidad"]
        },
        {
          title: "Backend",
          items: ["Node.js", "Fastify", "Express", "PostgreSQL", "Docker"]
        },
        {
          title: "Seguridad",
          items: ["OWASP", "Burp Suite", "Nmap", "API Security", "Threat Modeling"]
        }
      ]
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contacto",
      description: "Hablemos sobre tu proyecto, auditoria o alianza tecnica.",
      terminalCommand: "eduardo@portfolio:~$ iniciar_contacto",
      terminalStatus: "status: esperando mensaje"
    }
  }
} as const;

export function getSiteCopy(locale: Locale) {
  return siteContent[locale];
}

export function getLocaleNativeLabel(locale: Locale) {
  if (locale === "pt-BR") {
    return "Portugues (BR)";
  }

  if (locale === "en") {
    return "English";
  }

  return "Espanol";
}
