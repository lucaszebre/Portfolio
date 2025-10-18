import ReactQueryProvider from "@/providers/ReactProvidersQuery";
import { Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

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
          <body className={cn(inter.className, spaceGrotesk.className)}>
            {children}
          </body>
        </ReactQueryProvider>
      </NextIntlClientProvider>
    </html>
  );
}
