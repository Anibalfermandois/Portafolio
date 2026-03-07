export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  impact: string[];
  link?: string;
  image?: string;
  featured?: boolean;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export const personalInfo = {
  name: "Aníbal Fermandois",
  title: "Desarrollador Full Stack & Infraestructura de IA",
  summary: "Ingeniero Civil de la Pontificia Universidad Católica, mi objetivo es ser el Tech Lead y Software Architect. Quiero discutir sobre problemas, soluciones, pros y contras de todo el software de la empresa. Apasionado por resolver problemas complejos a través de la tecnología, mi objetivo es diseñar y construir soluciones digitales eficientes, robustas y escalables.",
  contact: "anibal.fermandois@uc.cl"
};

export const experiences: Experience[] = [
  {
    company: "Nikola Chile",
    role: "Desarrollador Full-Stack",
    period: "Mar 2025 - Ago 2025 (Part-time)",
    description: "Orquestación del desarrollo de ciclo completo, desde la arquitectura hasta los despliegues CI/CD.",
    link: "https://www.nikola.cl",
    featured: true,
    impact: [
      "Propiedad de Ciclo Completo: Diseñé y lancé la infraestructura de alto rendimiento en Next.js y Django para nikola.cl, dominando las decisiones de extremo a extremo.",
      "Liderazgo Técnico: Ingeniero principal de la actual página web www.nikola.cl. Dirigí la migración de sistemas heredados a arquitecturas modernas y escalables. Automatizaciones.",
      "Aseguramiento de Calidad: Lideré la implementación de pipelines automatizados de calidad de código y herramientas de visualización de infraestructura."
    ]
  },
  {
    company: "Buda.com",
    role: "Ingeniero de Automatización & AI / Pasante de Automatización de Software",
    period: "Ago 2025 - Dic 2025",
    description: "Diseño de infraestructuras de flujos de trabajo en N8N y chatbots de IA listos para producción.",
    impact: [
      "Sistemas RAG Avanzados: Lideré la investigación y despliegue en producción de un Chatbot de IA empresarial conectando APIs complejas, utilizando Contextual Chunking de Anthropic, HyDE y Context Engineering. Logré una tasa de acierto superior al 95%.",
      "Optimización de Vectores: Desarrollé recuperación de información de alta precisión utilizando Contextual Embedding y MultiVector Indexing.",
      "Arquitectura de Flujos de Trabajo: Arquitectura de pipelines de automatización robustos usando N8N para procesos críticos."
    ]
  }
];

export const projects: Project[] = [
  {
    name: "Anikio",
    description: "El Async Event Loop para async functions sin 'async def'",
    technologies: ["Python"],
    link: "https://github.com/path/Anikio"
  },
  {
    name: "BCI++",
    description: "Filtros, reactivo, rápido... una mejor versión que BCI",
    technologies: ["Astro", "TypeScript"],
    link: "https://bcibeneficios.onrender.com/"
  },
  {
    name: "Excluido",
    description: "Juego de cartas móvil, multijugador usando protocolo MQTT",
    technologies: ["Django", "Kotlin"]
  },
  {
    name: "RecordaBot",
    description: "Para cuando no te han pagado...",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://recordabot.vercel.app/"
  }
];

export const technologies: Record<string, Technology[]> = {
  languages: [
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "C lang", icon: "c" },
    { name: "Ruby", icon: "ruby" },
    { name: "Rust", icon: "rust" },
    { name: "Kotlin", icon: "kotlin" }
  ],
  frameworks: [
    { name: "React", icon: "react" },
    { name: "Astro", icon: "astro" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Django", icon: "django" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "QT", icon: "qt" },
    { name: "JQuery", icon: "jquery" }
  ],
  infrastructure: [
    { name: "Node.js", icon: "nodedotjs" },
    { name: "AWS", icon: "amazonaws" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "PostgreSQL", icon: "postgresql" }
  ]
};
