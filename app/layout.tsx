 import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import SmoothScrolling from "@/components/providers/SmoothScrolling";
import Cursor from "@/components/ui/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshun Jindal | Software Developer",

  description:
    "Portfolio of Akshun Jindal — Software Developer focused on scalable web applications, modern digital experiences, and full stack engineering.",

  keywords: [
    "Akshun Jindal",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Frontend Developer",
    "Node.js Developer",
  ],

  authors: [
    {
      name: "Akshun Jindal",
    },
  ],

  creator: "Akshun Jindal",

  openGraph: {
    title: "Akshun Jindal | Software Developer",

    description:
      "Portfolio of Akshun Jindal — Software Developer focused on scalable web applications and modern digital experiences.",

    url: "https://your-vercel-url.vercel.app",

    siteName: "Akshun Portfolio",

    locale: "en_US",

    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black text-white">
        <Cursor />

        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}