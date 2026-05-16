"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AmbientEffects() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  const glowX = useTransform(springX, [0, 1], ["-20vw", "20vw"]);
  const glowY = useTransform(springY, [0, 1], ["-20vw", "20vw"]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[5]"
        style={{
          width: "80vw",
          height: "80vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.045), transparent 70%)",
          filter: "blur(80px)",
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed pointer-events-none z-[5] inset-0 vignette-overlay"
        aria-hidden="true"
      />
    </>
  );
}
