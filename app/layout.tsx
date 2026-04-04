import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mostafa Cherif | Edicion YouTube, Shorts y miniaturas",
  description:
    "Edicion profesional para YouTube, Shorts, Reels y miniaturas. Enfoque en retencion, ritmo narrativo y crecimiento del canal.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  keywords: [
    "edicion de video",
    "edicion youtube",
    "shorts",
    "reels",
    "miniaturas",
    "retencion",
  ],
  icons: {
    icon: "/assets/light.webp",
    apple: "/assets/light.webp",
  },
  openGraph: {
    title: "Mostafa Cherif | Edicion de alto rendimiento",
    description: "Edicion para YouTube, formato vertical y miniaturas orientada a retencion.",
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    images: [
      {
        url: "/assets/light.webp",
        width: 1200,
        height: 630,
        alt: "Mostafa Cherif - Edicion de alto rendimiento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Cherif | Edicion de alto rendimiento",
    description: "Edicion para YouTube, vertical y miniaturas orientada a retencion.",
    images: ["/assets/light.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)] transition-colors">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
