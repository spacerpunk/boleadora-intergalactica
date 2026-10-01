import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMotion } from "./MotionProvider.jsx";
import { SERVICES } from "../data/services.js";
export function StudioMark() {
  return (
    <span className="studio-mark" aria-hidden="true">
      ✳
    </span>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { motion, reduced, toggle } = useMotion();
  const motionLabel = reduced
    ? "Animaciones desactivadas por preferencia del sistema"
    : motion
      ? "Pausar animaciones"
      : "Activar animaciones";
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className="studio-nav">
      <Link className="studio-brand" to="/" aria-label="Ruido de Mate — Inicio">
        <StudioMark />
        <span>
          ruido
          <br />
          de mate<span className="brand-dot">®</span>
        </span>
      </Link>
      <span className="nav-descriptor mono">
        AI ADVERTISING STUDIO
        <br />
        BUENOS AIRES ↗ MUNDO
      </span>
      <button
        className="menu-toggle mono"
        aria-expanded={open}
        aria-controls="studio-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "CERRAR −" : "MENÚ +"}
      </button>
      <nav
        id="studio-navigation"
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Navegación principal"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            to={`/#${service.id}`}
            onClick={() => setOpen(false)}
          >
            {service.label}
          </Link>
        ))}
        <NavLink to="/nosotros">Nosotros</NavLink>
        <Link
          className="nav-contact"
          to="/#contacto"
          onClick={() => setOpen(false)}
        >
          Hablemos <span>↗</span>
        </Link>
      </nav>
      <button
        className="motion-toggle"
        onClick={toggle}
        disabled={reduced}
        aria-label={motionLabel}
        title={motionLabel}
      >
        {motion ? "Ⅱ" : "▷"}
      </button>
    </header>
  );
}
