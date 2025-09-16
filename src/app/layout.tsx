import ReactQueryProvider from "@/providers/ReactProvidersQuery";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "lucaszebre",
//   description: "The blog an portfolio of lucaszebre",
// };

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
          <GoogleTagManager gtmId="G-RL71428SMP" />

          <body className={inter.className}>{children}</body>
        </ReactQueryProvider>
      </NextIntlClientProvider>
    </html>
  );
}
