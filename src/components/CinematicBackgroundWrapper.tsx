"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const CinematicBackground = dynamic(
  () => import("@/components/CinematicBackground"),
  { ssr: false }
);

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const options: WebGLContextAttributes = {
      failIfMajorPerformanceCaveat: true,
    };
    const context =
      canvas.getContext("webgl2", options) ?? canvas.getContext("webgl", options);

    if (!context) return false;

    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export default function CinematicBackgroundWrapper() {
  const [shouldRender, setShouldRender] = useState(false);
  const webGLSupportedRef = useRef<boolean | null>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const screenQuery = window.matchMedia("(max-width: 768px)");
    let frame = 0;

    const updatePreference = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (webGLSupportedRef.current === null && !document.hidden) {
          webGLSupportedRef.current = supportsWebGL();
        }

        setShouldRender(
          !document.hidden &&
            !motionQuery.matches &&
            !screenQuery.matches &&
            webGLSupportedRef.current === true
        );
      });
    };

    updatePreference();
    motionQuery.addEventListener("change", updatePreference);
    screenQuery.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updatePreference);

    return () => {
      cancelAnimationFrame(frame);
      motionQuery.removeEventListener("change", updatePreference);
      screenQuery.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updatePreference);
    };
  }, []);

  return shouldRender ? <CinematicBackground /> : null;
}
