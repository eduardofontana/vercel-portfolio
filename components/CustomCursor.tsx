"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 360, damping: 28, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 360, damping: 28, mass: 0.3 });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(media.matches);
    syncEnabled();

    media.addEventListener("change", syncEnabled);

    const updateCursorState = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) {
        setActive(false);
        return;
      }

      setActive(
        Boolean(
          target.closest(
            "a, button, [role='button'], input, textarea, select, .interactive-card, .button-primary, .button-secondary"
          )
        )
      );
    };

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setHidden(false);
      updateCursorState(event.target);
    };

    const onLeave = () => setHidden(true);
    const onDown = () => setActive(true);
    const onUp = (event: MouseEvent) => updateCursorState(event.target);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      media.removeEventListener("change", syncEnabled);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion || !enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/8 mix-blend-screen md:block"
        style={{
          x: springX,
          y: springY,
          scale: hidden ? 0 : active ? 1.9 : 1,
          opacity: hidden ? 0 : 1
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(78,242,194,0.22),_rgba(56,189,248,0.08),_transparent_70%)] blur-xl md:block"
        style={{
          x: springX,
          y: springY,
          scale: hidden ? 0 : active ? 1.35 : 1,
          opacity: hidden ? 0 : 1
        }}
      />
    </>
  );
}
