import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surfaceStrong: "var(--surface-strong)",
        surfaceElevated: "var(--surface-elevated)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accentStrong: "var(--accent-strong)",
        accentSoft: "var(--accent-soft)",
        borderSoft: "var(--border-soft)",
        borderStrong: "var(--border-strong)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(101,231,255,0.14), 0 24px 60px rgba(0,0,0,0.42)",
        panel: "0 0 0 1px rgba(139,155,176,0.12), 0 18px 48px rgba(0,0,0,0.34)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(139,155,176,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,155,176,0.08) 1px, transparent 1px)",
        scan: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0) 34%)"
      }
    }
  },
  plugins: []
};

export default config;
