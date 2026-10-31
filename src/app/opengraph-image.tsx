import { ImageResponse } from "next/og";

export const alt =
  "Eduardo Fontana — Desenvolvedor Full Stack. Aplicações web, automação e segurança.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101114",
        color: "#f4f4f5",
        padding: "64px 76px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#c4f06b",
        }}
      >
        <span>ef.</span>
        <span>DESENVOLVEDOR FULL STACK</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 112,
          lineHeight: 1.02,
          letterSpacing: -7,
        }}
      >
        <span>Eduardo</span>
        <span style={{ color: "#c4f06b" }}>Fontana.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #303237",
          paddingTop: 26,
          color: "#a3a5ab",
          fontSize: 21,
        }}
      >
        <span>Aplicações web · Automação · Segurança</span>
        <span>eduardofontana.com.br</span>
      </div>
    </div>,
    size,
  );
}
