import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-display"
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Portfolio | Web Developer & Pentester",
  description:
    "Portfolio moderno, minimalista e responsivo para Web Developer & Pentester com foco em performance e seguranca.",
  keywords: ["web developer", "pentester", "portfolio", "next.js", "cybersecurity"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Web Developer & Pentester",
    description: "Projetos de desenvolvimento web e seguranca ofensiva.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${oxanium.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
