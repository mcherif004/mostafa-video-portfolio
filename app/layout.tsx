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
  metadataBase: new URL("https://eeolyrudoorodagitmac.supabase.co"),
  openGraph: {
    title: "Mostafa Cherif | Edicion de alto rendimiento",
    description: "Edicion para YouTube, formato vertical y miniaturas orientada a retencion.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Cherif | Edicion de alto rendimiento",
    description: "Edicion para YouTube, vertical y miniaturas orientada a retencion.",
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
      <body className="min-h-full bg-slate-50 text-slate-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
