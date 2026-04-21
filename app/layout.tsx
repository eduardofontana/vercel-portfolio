import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Portfolio | Web Developer & Pentester",
  description:
    "Portfolio premium com motion cinematografico, design imersivo e foco em desenvolvimento web e seguranca ofensiva.",
  keywords: ["web developer", "pentester", "portfolio", "next.js", "cybersecurity"],
  authors: [{ name: "Eduardo Fontana" }],
  openGraph: {
    title: "Portfolio | Web Developer & Pentester",
    description: "Experiencia premium em desenvolvimento web, motion design e seguranca ofensiva.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
