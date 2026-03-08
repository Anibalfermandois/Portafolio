import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/experiences" }),
  schema: ({ image }) => z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    link: z.string().optional(),
    featured: z.boolean().optional(),
    logo: image().optional(),
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    technologies: z.array(z.string()),
    link: z.string().optional(),
  })
});

const personal = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/personal" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    contact: z.string(),
    linkedin: z.string().url(),
  })
});

export const collections = { experiences, projects, personal };
