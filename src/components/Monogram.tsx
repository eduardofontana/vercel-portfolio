"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import type { createMonogramScene } from "./monogram-scene";
import { letterOutlines } from "./monogram-shapes";

const desktopMotion =
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const letterPaths = letterOutlines.map(
  (outline) => `M${outline.map(([x, y]) => `${x} ${y}`).join("L")}Z`,
);

export default function Monogram() {
  const stage = useRef<HTMLDivElement>(null);
  const surface = useRef<HTMLCanvasElement>(null);
  const scene = useRef<ReturnType<typeof createMonogramScene> | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!stage.current || !surface.current) return;
    const element = stage.current;
    const canvas = surface.current;

    const media = window.matchMedia(desktopMotion);
    let inView = false;
    let failed = false;
    let pending = false;
    let disposed = false;
    let scheduled: number | undefined;

    function pageVisible() {
      return inView && !document.hidden;
    }

    async function activate() {
      if (disposed || pending || failed || !media.matches || !pageVisible()) return;
      pending = true;
      try {
        const context = canvas.getContext("webgl2", {
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        if (!context) {
          failed = true;
          return;
        }

        const { createMonogramScene: create } = await import("./monogram-scene");
        if (disposed || failed || !media.matches || !pageVisible()) return;
        scene.current = create(canvas, context, element);
        setActive(true);
      } catch {
        failed = true;
      } finally {
        pending = false;
      }
    }

    function sync() {
      if (!media.matches) {
        scene.current?.dispose();
        scene.current = null;
        setActive(false);
      }
      scene.current?.setVisible(pageVisible());
      if (
        scheduled === undefined &&
        !scene.current &&
        !pending &&
        !failed &&
        media.matches &&
        pageVisible()
      ) {
        scheduled = window.setTimeout(() => {
          scheduled = undefined;
          void activate();
        }, 180);
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(element);

    function loseContext(event: Event) {
      event.preventDefault();
      failed = true;
      scene.current?.dispose();
      scene.current = null;
      setActive(false);
    }

    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    canvas.addEventListener("webglcontextlost", loseContext);

    return () => {
      disposed = true;
      if (scheduled !== undefined) window.clearTimeout(scheduled);
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      canvas.removeEventListener("webglcontextlost", loseContext);
      scene.current?.dispose();
      scene.current = null;
    };
  }, []);

  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !scene.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    scene.current.tilt(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ((event.clientY - rect.top) / rect.height) * 2 - 1,
    );
  }

  return (
    <div
      className="monogram-scene"
      data-renderer={active ? "webgl" : "static"}
      ref={stage}
      aria-hidden="true"
      onPointerMove={tilt}
      onPointerLeave={() => scene.current?.tilt(0, 0)}
    >
      <div className="monogram-orbit" />
      <svg className="monogram-poster" viewBox="0 0 500 420" fill="none">
        <defs>
          <linearGradient id="ef-face" x1="116" y1="134" x2="401" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4a5549" />
            <stop offset=".45" stopColor="#232c25" />
            <stop offset="1" stopColor="#161d18" />
          </linearGradient>
          <linearGradient id="ef-edge" x1="100" y1="140" x2="406" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7b8f4c" />
            <stop offset="1" stopColor="#37492a" />
          </linearGradient>
        </defs>
        <g transform="translate(-3 -25) rotate(-7 253 236)">
          <g fill="url(#ef-edge)" stroke="url(#ef-edge)" strokeWidth="1.5" strokeLinejoin="round">
            {Array.from({ length: 9 }, (_, depth) => (
              <g key={depth} transform={`translate(${(9 - depth) * 2} ${(9 - depth) * 1.6})`}>
                {letterPaths.map((path) => <path key={path} d={path} />)}
              </g>
            ))}
          </g>
          <g fill="url(#ef-face)" stroke="#d5e9ba" strokeOpacity=".52" strokeLinejoin="round">
            {letterPaths.map((path) => <path key={path} d={path} />)}
          </g>
        </g>
      </svg>
      <canvas className="monogram-canvas" ref={surface} />
    </div>
  );
}
