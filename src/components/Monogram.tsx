"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { PointerEvent } from "react";

export default function Monogram() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 90, damping: 22 });
  const rotateY = useSpring(y, { stiffness: 90, damping: 22 });
  function move(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(
      (-(event.clientY - bounds.top - bounds.height / 2) / bounds.height) * 12,
    );
    y.set(
      ((event.clientX - bounds.left - bounds.width / 2) / bounds.width) * 12,
    );
  }
  return (
    <div
      className="monogram-scene"
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <span className="art-coordinate mono">EF / SISTEMAS & INTERFACES</span>
      <LazyMotion features={domAnimation}>
        <m.div className="monogram-plane" style={{ rotateX, rotateY }}>
          <svg className="monogram-svg" viewBox="0 0 500 500" fill="none">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path d="M40 0H0V40" stroke="#30332e" strokeWidth=".7" />
              </pattern>
              <linearGradient
                id="metal"
                x1="95"
                y1="105"
                x2="400"
                y2="390"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e0ffad" />
                <stop offset=".5" stopColor="#c4f06b" />
                <stop offset="1" stopColor="#76943c" />
              </linearGradient>
            </defs>
            <rect x="30" y="30" width="440" height="440" fill="url(#grid)" />
            <circle
              cx="250"
              cy="250"
              r="205"
              stroke="#444c37"
              strokeDasharray="3 8"
            />
            <ellipse
              cx="250"
              cy="250"
              rx="228"
              ry="100"
              transform="rotate(-35 250 250)"
              stroke="#758653"
            />
            <path
              d="M73 250H427M250 73V427"
              stroke="#444c37"
              strokeDasharray="4 8"
            />
            <g transform="translate(0 12)" fill="#405026">
              <path d="M106 146H239V188H153V225H223V266H153V307H239V350H106Z" />
              <path d="M267 146H400V188H314V225H385V267H314V350H267Z" />
            </g>
            <g fill="url(#metal)">
              <path d="M106 134H239V176H153V213H223V254H153V295H239V338H106Z" />
              <path d="M267 134H400V176H314V213H385V255H314V338H267Z" />
            </g>
            <circle cx="410" cy="146" r="6" fill="#c4f06b" />
            <circle cx="82" cy="332" r="4" fill="#c4f06b" />
            <path
              d="M30 50V30H50M450 30H470V50M470 450V470H450M50 470H30V450"
              stroke="#9aab7b"
            />
          </svg>
        </m.div>
      </LazyMotion>
      <div className="art-caption mono">
        <span>DO CONCEITO AO CÓDIGO</span>
        <span>01 — ∞</span>
      </div>
    </div>
  );
}
