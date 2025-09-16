import "../globals.css";

import React from "react";

import ReactQueryProvider from "@/providers/ReactProvidersQuery";
import { Toaster } from "react-hot-toast";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <ReactQueryProvider>
          <Toaster />

          <div className="  flex justify-center items-center h-full w-full ">
            {children}
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
