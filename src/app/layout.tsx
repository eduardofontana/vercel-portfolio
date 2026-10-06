import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Eduardo Fontana | Web Developer · Automation · Application Security",
  description:
    "Portfólio de Eduardo Fontana — desenvolvimento web, automação, segurança de aplicações e infraestrutura.",
  keywords: [
    "Web Developer",
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
  metadataBase: new URL("https://eduardofontana.com.br"),
  openGraph: {
    title: "Eduardo Fontana | Web Developer",
    description:
      "Aplicações web, automações e ferramentas com foco em performance, clareza e segurança.",
    type: "website",
    locale: "pt_BR",
    url: "https://eduardofontana.com.br",
    siteName: "Eduardo Fontana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Fontana | Web Developer",
    description:
      "Aplicações web, automações e segurança de aplicações.",
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
