import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import "next-auth/jwt";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import { getUser } from "./actions/user/getUser";
import { prisma } from "./config/db";

const config = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },

  providers: [GitHub, Google, LinkedIn],
  basePath: "/api/auth",
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      let cookieUser = {};

      // Check if the user exists in your database
      if (!user.email) {
        return false;
      }
      const existingUser = await getUser(user.email);

      if (!existingUser) {
        // If the user doesn't exist, create a new user in your database
        const usered = await prisma.user.create({
          data: {
            email: user.email,
            UserName: user.name ?? `user ${crypto.randomUUID().slice(0, 5)}`,
            avatar: user.image ?? "",
            isAdmin: false,
          },
        });
      }

      cookieUser = {
        access_token: account?.access_token,
        user: user,
      };

      // if (account?.access_token)
      //   sendTokenToChromeExtension({
      //     extensionId: "eekjhloidmonkbcglfdgannidgephpkc",
      //     jwt: account?.access_token,
      //   });

      // Allow sign in
      return true;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/auth" || pathname === "/") return true;

      return !!auth?.user;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;
      if (account?.provider === "google" || account?.provider == "github") {
        return { ...token, accessToken: account.access_token };
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  trustHost: true, // Cette option peut varier selon la version et la configuration
  // Ou, si vous avez une liste d'hôtes de confiance

  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
