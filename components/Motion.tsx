"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  id?: string;
};

type MotionSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Reveal({ children, className, delay = 0, y = 28, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({ children, id, className }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], reduceMotion ? [1, 1, 1] : [0.35, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.25, 1], reduceMotion ? [0, 0, 0] : [60, 0, 0]);
  const springY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.3 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={{ opacity, y: springY }}
    >
      {children}
    </motion.section>
  );
}
