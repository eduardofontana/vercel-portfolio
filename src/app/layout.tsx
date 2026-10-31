import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Eduardo Fontana | Desenvolvedor Full Stack",
  description:
    "Transformo ideias em aplicações web, automações e sistemas seguros. Conheça os projetos de Eduardo Fontana, desenvolvedor full stack.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Automation",
    "Application Security",
    "Infrastructure",
  ],
  authors: [{ name: "Eduardo Fontana" }],
  creator: "Eduardo Fontana",
  metadataBase: new URL(profile.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Eduardo Fontana | Desenvolvedor Full Stack",
    description:
      "Aplicações web, automações e ferramentas com foco em performance, clareza e segurança.",
    type: "website",
    locale: "pt_BR",
    url: "https://eduardofontana.com.br",
    siteName: "Eduardo Fontana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Fontana | Desenvolvedor Full Stack",
    description: "Aplicações web, automações e segurança de aplicações.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
