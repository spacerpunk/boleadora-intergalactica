import { useEffect, useRef } from "react";
import { useMotion } from "./MotionProvider.jsx";

// Projected 3D torus knot. Depth-sorted surfaces and studio lighting,
// without shipping a full 3D engine for a single decorative object.
export default function SignalSculpture({ variant = "chrome" }) {
  const ref = useRef(null);
  const { motion } = useMotion();
  useEffect(() => {
    const canvas = ref.current,
      context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0,
      visible = false,
      width = 500,
      height = 500,
      phase = 0,
      last = 0;
    const dot = variant === "signal",
      count = dot ? 96 : 128,
      sides = dot ? 12 : 28;
    const center = (t) => [
      (2 + 0.65 * Math.cos(3 * t)) * Math.cos(2 * t),
      (2 + 0.65 * Math.cos(3 * t)) * Math.sin(2 * t),
      0.85 * Math.sin(3 * t),
    ];
    const mesh = [],
      normals = [];
    for (let i = 0; i <= count; i++) {
      const t = (i / count) * Math.PI * 2,
        c = center(t),
        next = center(t + 0.001);
      const tangent = next.map((v, k) => v - c[k]),
        len = Math.hypot(...tangent),
        a = tangent.map((v) => v / len),
        norm = Math.hypot(a[0], a[1]);
      const n = [-a[1] / norm, a[0] / norm, 0],
        b = [-a[2] * n[1], a[2] * n[0], a[0] * n[1] - a[1] * n[0]];
      for (let j = 0; j <= sides; j++) {
        const angle = (j / sides) * Math.PI * 2;
        const normal = n.map(
          (v, k) => Math.cos(angle) * v + Math.sin(angle) * b[k],
        );
        normals.push(normal);
        mesh.push(c.map((v, k) => v + 0.48 * normal[k]));
      }
    }
    const draw = (time) => {
      frame = 0;
      if (!visible) return;
      // A decorative sculpture does not need to run at the display's full rate.
      if (motion && last && time - last < 32) {
        frame = requestAnimationFrame(draw);
        return;
      }
      if (motion) phase += Math.min(time - last || 0, 50) * 0.00014;
      last = time;
      const scene = canvas.closest(".service-scene");
      const progress = scene
        ? Number(getComputedStyle(scene).getPropertyValue("--progress"))
        : 0.5;
      const angle = 0.5 + phase + (motion ? progress : 0.5),
        cy = Math.cos(angle),
        sy = Math.sin(angle),
        cx = Math.cos(0.45 + angle * 0.3),
        sx = Math.sin(0.45 + angle * 0.3);
      const scale = Math.min(width, height) * 0.123;
      const projected = mesh.map(([x, y, z], index) => {
        const xx = x * cy + z * sy,
          zz = -x * sy + z * cy,
          yy = y * cx - zz * sx,
          depth = y * sx + zz * cx,
          perspective = 8 / (8 - depth);
        const [nx, ny, nz] = normals[index];
        const normalX = nx * cy + nz * sy,
          normalZ = -nx * sy + nz * cy;
        return [
          width / 2 + xx * scale * perspective,
          height / 2 + yy * scale * perspective,
          depth,
          normalX,
          ny * cx - normalZ * sx,
          ny * sx + normalZ * cx,
        ];
      });
      context.clearRect(0, 0, width, height);
      if (dot) {
        for (const [x, y, z] of projected) {
          context.fillStyle = `rgba(255,${Math.round(105 + z * 20)},${Math.round(60 + z * 10)},${0.3 + (z + 3) / 9})`;
          context.beginPath();
          context.arc(x, y, Math.max(0.7, 1.1 + z * 0.25), 0, Math.PI * 2);
          context.fill();
        }
      } else {
        const faces = [];
        for (let i = 0; i < count; i++)
          for (let j = 0; j < sides; j++) {
            const k = i * (sides + 1) + j,
              pts = [
                projected[k],
                projected[k + 1],
                projected[k + sides + 2],
                projected[k + sides + 1],
              ];
            faces.push({
              pts,
              z: pts.reduce((sum, p) => sum + p[2], 0) / 4,
            });
          }
        faces.sort((a, b) => a.z - b.z);
        for (const { pts } of faces) {
          const nx = pts.reduce((s, p) => s + p[3], 0) / 4,
            ny = pts.reduce((s, p) => s + p[4], 0) / 4,
            nz = pts.reduce((s, p) => s + p[5], 0) / 4;
          // Reflect two broad studio softboxes and a warm edge into the metal.
          const rx = 2 * nz * nx,
            ry = 2 * nz * ny;
          const band = Math.exp(-Math.pow((ry + 0.25) * 4.5, 2));
          const rim = Math.pow(1 - Math.abs(nz), 3);
          const strip = Math.exp(-Math.pow((rx - 0.5) * 13, 2));
          const value = Math.min(244, 19 + band * 185 + rim * 90 + strip * 65);
          const warmth = Math.max(0, -rx - 0.55) * 80;
          context.fillStyle = `rgb(${Math.min(255, value + warmth)},${value},${Math.max(0, value - warmth * 0.5)})`;
          context.strokeStyle = context.fillStyle;
          context.lineWidth = 0.6;
          context.beginPath();
          pts.forEach(([x, y], k) =>
            k ? context.lineTo(x, y) : context.moveTo(x, y),
          );
          context.closePath();
          context.fill();
          context.stroke();
        }
      }
      if (motion) frame = requestAnimationFrame(draw);
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (visible && !frame) frame = requestAnimationFrame(draw);
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) frame = requestAnimationFrame(draw);
      if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
      }
    });
    observer.observe(canvas);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
    };
  }, [motion, variant]);
  return (
    <canvas
      className={`signal-sculpture signal-sculpture--${variant}`}
      ref={ref}
      aria-hidden="true"
    />
  );
}
