import ReactQueryProvider from "@/providers/ReactProvidersQuery";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Ensures text is visible during font loading (improves FCP)
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const metadata = {
    en: {
      title: "Lucas Zebre - Full Stack Developer Portfolio",
      description:
        "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and get in touch for collaboration opportunities.",
    },
    fr: {
      title: "Lucas Zebre - Portfolio Développeur Full Stack",
      description:
        "Développeur Full Stack spécialisé dans les technologies web modernes. Découvrez mes projets, compétences et contactez-moi pour des opportunités de collaboration.",
    },
  };

  const content = metadata[locale as keyof typeof metadata] || metadata.en;

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <ReactQueryProvider>
          <body className={spaceGrotesk.className}>{children}</body>
        </ReactQueryProvider>
      </NextIntlClientProvider>
    </html>
  );
}
