import {
  AmbientLight,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Shape,
  WebGLRenderer,
} from "three";
import { letterOutlines } from "./monogram-shapes";

export function createMonogramScene(
  canvas: HTMLCanvasElement,
  context: WebGL2RenderingContext,
  stage: HTMLElement,
) {
  const renderer = new WebGLRenderer({ canvas, context, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 30);
  camera.position.z = 5.9;
  const monogram = new Group();
  monogram.rotation.set(-0.16, -0.44, -0.13);
  scene.add(monogram);

  const face = new MeshStandardMaterial({
    color: 0x2a312b,
    roughness: 0.41,
    metalness: 0.19,
  });
  const edge = new MeshStandardMaterial({
    color: 0x495b37,
    roughness: 0.29,
    metalness: 0.36,
  });
  const geometries = letterOutlines.map((outline) => {
    const shape = new Shape();
    outline.forEach(([x, y], index) => {
      const px = (x - 253) / 86;
      const py = (236 - y) / 86;
      if (index === 0) shape.moveTo(px, py);
      else shape.lineTo(px, py);
    });
    shape.closePath();
    const geometry = new ExtrudeGeometry(shape, {
      depth: 0.4,
      bevelThickness: 0.055,
      bevelSize: 0.045,
      bevelSegments: 3,
    });
    geometry.translate(0, 0, -0.2);
    monogram.add(new Mesh(geometry, [face, edge]));
    return geometry;
  });

  const key = new DirectionalLight(0xf5ffe6, 2.35);
  key.position.set(-3, 4, 6);
  const rim = new DirectionalLight(0xe8ffb2, 2.6);
  rim.position.set(6, 1, -3);
  const fill = new DirectionalLight(0xaebef3, 0.6);
  fill.position.set(-4, -4, 2);
  scene.add(new AmbientLight(0xe4eecb, 0.85), key, rim, fill);

  let frame: number | undefined;
  let targetX = monogram.rotation.x;
  let targetY = monogram.rotation.y;
  let paused = false;

  function render() {
    frame = undefined;
    const dx = targetX - monogram.rotation.x;
    const dy = targetY - monogram.rotation.y;
    const settled = Math.abs(dx) + Math.abs(dy) < 0.001;
    monogram.rotation.x = settled ? targetX : monogram.rotation.x + dx * 0.15;
    monogram.rotation.y = settled ? targetY : monogram.rotation.y + dy * 0.15;
    renderer.render(scene, camera);
    if (!settled) schedule();
  }

  function schedule() {
    if (!paused && frame === undefined) frame = requestAnimationFrame(render);
  }

  function resize() {
    const { width, height } = stage.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    if (!paused) renderer.render(scene, camera);
  }

  const observer = new ResizeObserver(resize);
  observer.observe(stage);
  resize();

  return {
    tilt(x: number, y: number) {
      targetX = -0.16 - y * 0.24;
      targetY = -0.44 + x * 0.48;
      schedule();
    },
    setVisible(visible: boolean) {
      paused = !visible;
      if (visible) schedule();
      else if (frame !== undefined) {
        cancelAnimationFrame(frame);
        frame = undefined;
      }
    },
    dispose() {
      if (frame !== undefined) cancelAnimationFrame(frame);
      observer.disconnect();
      geometries.forEach((geometry) => geometry.dispose());
      face.dispose();
      edge.dispose();
      renderer.dispose();
    },
  };
}
