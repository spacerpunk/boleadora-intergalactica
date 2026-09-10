import { useEffect, useRef } from "react";
import { useMotion } from "../components/MotionProvider.jsx";
export function useScrollScene() {
  const ref = useRef(null);
  const { motion } = useMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0,
      visible = false;
    const update = () => {
      frame = 0;
      if (!visible) return;
      const rect = node.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      node.style.setProperty("--progress", motion ? p : 0.5);
      node.style.setProperty("--turn", `${motion ? (p - 0.5) * 50 : 0}deg`);
      node.style.setProperty("--drift", `${motion ? (p - 0.5) * 120 : 0}px`);
    };
    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { rootMargin: "120px" },
    );
    observer.observe(node);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [motion]);
  return ref;
}
