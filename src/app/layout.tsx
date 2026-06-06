import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron, Space_Grotesk } from "next/font/google";
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

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eduardo Fontana | Freelancer Web & Segurança Digital",
  description:
    "Portfólio de Eduardo Fontana, freelancer em desenvolvimento web, sites modernos, performance e segurança digital.",
  keywords: [
    "Freelancer Web",
    "Sites Profissionais",
    "Landing Page",
    "Portfólio",
    "Segurança Digital",
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
    title: "Eduardo Fontana | Freelancer Web & Segurança Digital",
    description:
      "Sites modernos, rápidos e seguros para profissionais, freelancers e pequenos negócios.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Fontana | Freelancer Web & Segurança Digital",
    description:
      "Sites modernos, rápidos e seguros para profissionais, freelancers e pequenos negócios.",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}
    >
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
