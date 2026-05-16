import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import CinematicBackground from "@/components/CinematicBackground";
import AmbientEffects from "@/components/AmbientEffects";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eduardo Fontana | Desenvolvedor Web & Pentester",
  description:
    "Portfólio de Eduardo, desenvolvedor web com foco em performance, experiência visual e segurança.",
  keywords: [
    "Desenvolvedor Web",
    "Pentester",
    "Cybersecurity",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "LLM",
    "DevSecOps",
  ],
  authors: [{ name: "Eduardo" }],
  creator: "Eduardo",
  metadataBase: new URL("https://eduardofontana.com.br"),
  openGraph: {
    title: "Eduardo Fontana | Desenvolvedor Web & Pentester",
    description:
      "Portfólio de Eduardo, desenvolvedor web com foco em performance, experiência visual e segurança.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Fontana | Desenvolvedor Web & Pentester",
    description:
      "Portfólio de Eduardo, desenvolvedor web com foco em performance, experiência visual e segurança.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full bg-bg-primary text-text-primary overflow-x-hidden font-sans">
        <div className="ambient-background" aria-hidden="true">
          <CinematicBackground />
          <div className="ambient-grid" />
          <div className="cinematic-sweep cinematic-sweep-a" />
          <div className="cinematic-sweep cinematic-sweep-b" />
          <div className="lens-flare" />
          <div className="ambient-glow ambient-glow-primary" />
          <div className="ambient-glow ambient-glow-secondary" />
          <div className="ambient-glow ambient-glow-tertiary" />
          <div className="ambient-beam ambient-beam-a" />
          <div className="ambient-beam ambient-beam-b" />
        </div>
        <AmbientEffects />
        <div className="noise-overlay" />
        <div className="scanlines" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
