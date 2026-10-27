# Portfolio

Lucas Zebre's personal portfolio: projects, a small blog and a contact form, in English and French. Built with Astro and Tailwind CSS.

## What it does

- Home page with a hero, featured project, latest blog posts, tech stack, passions and contact form
- Project pages generated from Markdown in `src/content/projects` (EN) and `src/content/projects-fr` (FR)
- Blog generated from Markdown in `src/content/blog` and `src/content/blog-fr`
- English and French routes (`/en/...`, `/fr/...`) via Astro i18n, with UI strings in `src/i18n/*.json`
- Contact form that posts to a server endpoint (`src/pages/api/contact.ts`) which sends the message with Resend
- Downloadable CV in English and French (`public/assets`)

## Stack

- [Astro](https://astro.build) 6 with `@astrojs/mdx`
- Tailwind CSS 3 (via PostCSS)
- `@astrojs/cloudflare` adapter, deployed as a Cloudflare Worker (pages are prerendered; only `/api/contact` runs on the server)
- [Resend](https://resend.com) for contact form email
- TypeScript, checked with `@astrojs/check`

## Run locally

Requires Node.js 22.12 or newer (`.node-version` pins 22).

```bash
npm ci
npm run dev        # http://localhost:4321
```

Other scripts:

```bash
npm run check      # astro check (type and template checks)
npm run build      # production build (Cloudflare Worker output)
npm run preview    # build and serve locally with wrangler
npm run deploy     # build and deploy with wrangler
```

### Environment variables

Copy `.env.example` to `.env` and fill in:

- `RESEND_API_KEY`: needed only for the contact form. Without it, the site runs normally and `POST /api/contact` returns `500 {"error":"Server not configured"}`.

## Project structure

```
src/
  components/   Header, Hero, Skills, Passions, ContactForm, cards, Footer
  content/      Markdown for projects and blog posts (EN and FR)
  data/site.ts  Social links, CV links, skills list
  i18n/         UI strings and language helpers
  layouts/      Base, project and blog post layouts
  pages/        [lang] routes and the /api/contact endpoint
public/assets/  Images, fonts, video and CV PDFs
```

## Adding content

- New project: add a Markdown file to `src/content/projects/` and its French counterpart to `src/content/projects-fr/` with the same file name. The frontmatter fields are defined in `src/content.config.ts`.
- New blog post: same pattern in `src/content/blog/` and `src/content/blog-fr/`.

## Deployment

The site runs as a Cloudflare Worker at https://portfolio.yakirisk.workers.dev and is deployed from `main` with `npm run deploy`. The contact form needs the `RESEND_API_KEY` secret: `npx wrangler secret put RESEND_API_KEY`. The `gh-pages` branch holds an older (2024) Vite build of the previous version of this site and is not generated from this code.
