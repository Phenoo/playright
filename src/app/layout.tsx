import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import "@uploadthing/react/styles.css";

import { Toaster } from "@/components/ui/toaster";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProStylist Academy",
  description:
    " A first of its kind accelerator for aspiring black hair stylists in australia",
  keywords: [
    "Prostylist Academy, styling career, Black stylists, African stylists, Aboriginal stylists, Torres Strait Islander stylists, Indigenous Australian stylists, First Nations stylists, editorial work, salon work, Melbourne Fashion Festival 2025, hairstyling workshops, mentorship",
  ],
  authors: [{ name: "Prostylist Academy", url: "https://nextjs.org" }],
  category: "fashion",
  creator: "Prostylist academy",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [
      {
        url: "https://example.com/og.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Header />
        <Provider />
        <div className="bg-[#F8F8DC] flex justify-center uppercase text-xs md:text-sm font-medium mt-[70px] md:mt-0 p-4 ">
          <p className="uppercase font-bold text-center">
            Brought to you by aya, organic suku & lumela
          </p>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
