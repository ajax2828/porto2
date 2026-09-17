import type { Metadata } from "next";

import "./globals.css";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Muhammad Ihsanzaki — Software Engineer",
  description:
    "Portofolio Muhammad Ihsanzaki, Software Engineer yang membangun aplikasi web cepat, rapi, dan mudah dipakai.",
  authors: [{ name: "Muhammad Ihsanzaki" }],
  openGraph: {
    title: "Muhammad Ihsanzaki — Software Engineer",
    description:
      "Portofolio Muhammad Ihsanzaki, Software Engineer yang membangun aplikasi web cepat, rapi, dan mudah dipakai.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ihsanzaki — Software Engineer",
    description:
      "Portofolio Muhammad Ihsanzaki, Software Engineer yang membangun aplikasi web cepat, rapi, dan mudah dipakai.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Loaded via <link> so fonts resolve at runtime; not build-time fetched like next/font */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
