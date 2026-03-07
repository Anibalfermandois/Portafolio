export interface Technology {
  name: string;
  icon: string;
}

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
