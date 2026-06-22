import type { Locale } from "./config";

export const ui = {
  en: {
    htmlLang: "en",
    pageTitle: "Aníbal Fermandois - Portfolio",
    pageDescription:
      "Full-stack developer and AI infrastructure engineer focused on robust, scalable software.",
    hero: {
      greeting: "Hi, I'm",
      linkedIn: "LinkedIn",
      contact: "Contact me",
      cv: "View CV",
      ucAlt: "Pontificia Universidad Católica de Chile",
    },
    language: {
      label: "Language",
      switchTo: "Switch to",
    },
    experience: {
      title: "Work Experience",
      featured: "Featured",
    },
    projects: {
      title: "Personal Projects",
      description: "A selection of my recent technical work.",
      missingImage: "Image unavailable",
    },
    stack: {
      eyebrow: "Technical Stack",
      title: "Tools I use",
    },
    footer: {
      titleBefore: "Ready to",
      titleAccent: "collaborate?",
      description:
        "Currently focused on high-performance software development and cloud solutions.",
      action: "Let's talk",
      linkedInLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
  },
  es: {
    htmlLang: "es",
    pageTitle: "Aníbal Fermandois - Portafolio",
    pageDescription:
      "Desarrollador full stack e infraestructura de IA enfocado en software robusto y escalable.",
    hero: {
      greeting: "Hola, soy",
      linkedIn: "LinkedIn",
      contact: "Contáctame",
      cv: "Ver CV",
      ucAlt: "Pontificia Universidad Católica de Chile",
    },
    language: {
      label: "Idioma",
      switchTo: "Cambiar a",
    },
    experience: {
      title: "Experiencia Laboral",
      featured: "Destacado",
    },
    projects: {
      title: "Proyectos Personales",
      description: "Una selección de mis trabajos técnicos recientes.",
      missingImage: "Imagen no disponible",
    },
    stack: {
      eyebrow: "Stack Técnico",
      title: "Herramientas que utilizo",
    },
    footer: {
      titleBefore: "Listo para",
      titleAccent: "colaborar?",
      description:
        "Actualmente enfocado en el desarrollo de software de alto rendimiento y soluciones en la nube.",
      action: "Hablemos",
      linkedInLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
  },
} satisfies Record<Locale, unknown>;
