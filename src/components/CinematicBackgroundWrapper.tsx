"use client";

import dynamic from "next/dynamic";

const CinematicBackground = dynamic(
  () => import("@/components/CinematicBackground"),
  { ssr: false }
);

export default function CinematicBackgroundWrapper() {
  return <CinematicBackground />;
}
