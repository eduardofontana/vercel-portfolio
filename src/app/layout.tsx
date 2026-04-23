import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
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
  title: "Eduardo | Desenvolvedor Web & Pentester",
  description:
    "Portfólio de Eduardo, desenvolvedor web com foco em performance, experiência visual e segurança.",
  keywords: ["Desenvolvedor Web", "Pentester", "Cybersecurity", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Eduardo" }],
  creator: "Eduardo",
  metadataBase: new URL("https://eduardo.dev"),
  openGraph: {
    title: "Eduardo | Desenvolvedor Web & Pentester",
    description:
      "Portfólio de Eduardo, desenvolvedor web com foco em performance, experiência visual e segurança.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo | Desenvolvedor Web & Pentester",
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
        <div className="noise-overlay" />
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}
