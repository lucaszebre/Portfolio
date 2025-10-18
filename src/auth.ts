import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { jwt } from "better-auth/plugins";
import { prisma } from "./config/db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [jwt(), nextCookies()],
  socialProviders: {
    github: {
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    },
    google: {
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    },
  },
  // Cookie configuration to prepare for third-party cookie restrictions
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },
  advanced: {
    // Use SameSite=Lax for better compatibility with third-party cookie restrictions
    // This ensures cookies work in same-site contexts
    cookiePrefix: "better-auth",
    defaultCookieAttributes: {
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  },
  logger: {
    level: process.env.NODE_ENV === "production" ? "error" : "debug",
  },
  debug: process.env.NODE_ENV !== "production",
});
