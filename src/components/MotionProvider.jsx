import { createContext, useContext, useEffect, useState } from "react";
const MotionContext = createContext(null);
export function MotionProvider({ children }) {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  const motion = !reduced && !paused;
  return (
    <MotionContext.Provider
      value={{ motion, paused, reduced, toggle: () => setPaused((p) => !p) }}
    >
      <div className="studio-app" data-motion={motion ? "on" : "off"}>
        {children}
      </div>
    </MotionContext.Provider>
  );
}
export const useMotion = () => useContext(MotionContext);
