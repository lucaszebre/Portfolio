"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleTagManager } from '@next/third-parties/google' 

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "lucaszebre",
//   description: "The blog an portfolio of lucaszebre",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  
  return (
    <html lang="en">
          <QueryClientProvider client={queryClient}>
            <GoogleTagManager gtmId="G-RL71428SMP" />
            
            <body className={inter.className}>{children}</body>
          </QueryClientProvider>
    </html>
  );
}
