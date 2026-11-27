"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export default function SectionAccent() {
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.span
        aria-hidden="true"
        className="section-accent"
        initial={false}
        whileInView={reducedMotion ? undefined : { scaleX: [0.4, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      />
    </LazyMotion>
  );
}
