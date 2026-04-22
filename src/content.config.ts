import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  image: z.string(),
  demoUrl: z.string().optional(),
  codeUrl: z.string().optional(),
  frontendCodeUrl: z.string().optional(),
  backendCodeUrl: z.string().optional(),
  featured: z.boolean().default(false),
  date: z.coerce.date(),
  order: z.number().default(0),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: blogSchema,
});

const blogFr = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-fr" }),
  schema: blogSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: projectSchema,
});

const projectsFr = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects-fr" }),
  schema: projectSchema,
});

export const collections = { blog, "blog-fr": blogFr, projects, "projects-fr": projectsFr };
