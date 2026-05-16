"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

if (typeof window !== "undefined") {
  const origWarn = console.warn;
  console.warn = (...args) => {
    if (args[0] && typeof args[0] === "string" && args[0].includes("Clock:")) return;
    origWarn.call(console, ...args);
  };
}

const PARTICLE_COUNT = 700;

function createGlowTexture(size: number) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.15, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.3)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function seededRandom() {
  let s = 12345;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Particles({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const targetRot = useRef({ x: 0, y: 0 });

  const [positions, colors, sizes, texture] = useMemo(() => {
    const rand = seededRandom();

    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);

    const palette = [
      new THREE.Color(0x00ff88),
      new THREE.Color(0x00bbff),
      new THREE.Color(0xffffff),
      new THREE.Color(0x44ffaa),
      new THREE.Color(0xffaa00),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = Math.pow(rand(), 1.3) * 24;
      const angle = rand() * Math.PI * 2;
      const spread = 0.5 + (1 - Math.min(radius / 24, 1)) * 3;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (rand() - 0.5) * spread;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      const dist = Math.sqrt(
        pos[i * 3] ** 2 + pos[i * 3 + 1] ** 2 + pos[i * 3 + 2] ** 2
      );
      const norm = Math.min(dist / 24, 1);

      let color;
      if (norm < 0.2) color = palette[2];
      else if (norm < 0.4) color = palette[1];
      else if (norm < 0.7) color = palette[0];
      else color = rand() > 0.6 ? palette[4] : palette[3];

      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      siz[i] = (0.025 + rand() * 0.05) * (1 - norm * 0.4);
    }

    return [pos, col, siz, createGlowTexture(64)];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const scroll = scrollYRef.current;
    const scrollFactor = Math.min(scroll / 2000, 1);

    targetRot.current.x += (mouse.current.y * 0.06 - targetRot.current.x) * delta * 1.5;
    targetRot.current.y += (mouse.current.x * 0.06 - targetRot.current.y) * delta * 1.5;

    const autoRotate = delta * (0.035 + scrollFactor * 0.05);
    meshRef.current.rotation.y += autoRotate + targetRot.current.y * delta * 0.25;
    meshRef.current.rotation.x = targetRot.current.x * 0.4;

    const bounce = 1 + Math.sin(scroll * 0.0004) * 0.008 * scrollFactor;
    meshRef.current.scale.setScalar(bounce);
  });

  return (
    <points ref={meshRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        map={texture}
        vertexColors
        transparent
        opacity={0.88}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Nebula({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const elapsedRef = useRef(0);
  const texture = useMemo(() => createGlowTexture(128), []);

  const clouds = useMemo(() => [
    { pos: [-6, 2, -5] as const, color: "#00ff88", scale: 10, speed: 0.12, phase: 0 },
    { pos: [7, -2.5, -6] as const, color: "#0066ff", scale: 9, speed: 0.08, phase: 2.1 },
    { pos: [4, 3, -8] as const, color: "#00ff88", scale: 7, speed: 0.1, phase: 4.3 },
    { pos: [-5, -3, -7] as const, color: "#ff8800", scale: 5.5, speed: 0.06, phase: 1.7 },
  ], []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    elapsedRef.current += delta;
    clouds.forEach((cloud, i) => {
      const child = groupRef.current!.children[i] as THREE.Sprite;
      if (!child) return;
      const drift = elapsedRef.current * cloud.speed;
      child.position.x = cloud.pos[0] + Math.sin(drift + cloud.phase) * 2;
      child.position.y = cloud.pos[1] + Math.cos(drift * 0.7 + cloud.phase) * 1.5;
      child.material.opacity = 0.18 + Math.sin(drift * 0.5 + cloud.phase) * 0.07;
    });
    groupRef.current.position.x = mouse.current.x * 0.4;
    groupRef.current.position.y = mouse.current.y * 0.4;
  });

  return (
    <group ref={groupRef}>
      {clouds.map((cloud, i) => (
        <sprite key={i} position={cloud.pos} scale={cloud.scale}>
          <spriteMaterial
            map={texture}
            color={cloud.color}
            transparent
            opacity={0.22}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>
      ))}
    </group>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <Particles mouse={mouse} />
      <Nebula mouse={mouse} />
    </>
  );
}

export default function CinematicBackground() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleMouse = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
          mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.5, 10], fov: 60 }}
        dpr={[0.75, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Scene mouse={mouseRef} />
      </Canvas>
    </div>
  );
}
