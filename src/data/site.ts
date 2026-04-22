import type { Lang } from "@/i18n/utils";

export const socialLinks = {
  github: "https://github.com/lucaszebre",
  linkedin: "https://www.linkedin.com/in/lucas-zebre-22305a191/",
  twitter: "https://twitter.com/ZebreLucas",
  frontendMentor:
    "https://www.frontendmentor.io/profile/lucaszebre",
};

export function getCvLink(lang: Lang): string {
  return lang === "fr" ? "/assets/cv_french.pdf" : "/assets/CV_ENGLISH.pdf";
}

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Astro",
  "Node.js",
  "Hono",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Cloudflare Workers",
  "Git",
  "PHP",
  "Laravel",
];
