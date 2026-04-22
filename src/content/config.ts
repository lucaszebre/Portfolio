import { defineCollection, z } from "astro:content";

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

const blog = defineCollection({ type: "content", schema: blogSchema });
const projects = defineCollection({ type: "content", schema: projectSchema });

const blogFr = defineCollection({ type: "content", schema: blogSchema });
const projectsFr = defineCollection({ type: "content", schema: projectSchema });

export const collections = { blog, "blog-fr": blogFr, projects, "projects-fr": projectsFr };
