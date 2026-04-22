import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#151515",
        accent: "#00ff80",
        "accent-hover": "#00cc66",
        surface: "#1a1a1a",
        "surface-light": "#222222",
        muted: "#888888",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
