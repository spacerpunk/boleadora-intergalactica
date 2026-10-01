import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMotion } from "./MotionProvider.jsx";
import LanguageToggle from "./LanguageToggle.jsx";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
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
  const { lang, t } = useLanguage();
  const motionLabel = t(
    reduced ? "motion.reduced" : motion ? "motion.pause" : "motion.play",
  );
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className="studio-nav">
      <Link className="studio-brand" to="/" aria-label={t("nav.homeAria")}>
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
        {t("nav.where")}
      </span>
      <button
        className="menu-toggle mono"
        aria-expanded={open}
        aria-controls="studio-navigation"
        onClick={() => setOpen(!open)}
      >
        {t(open ? "nav.close" : "nav.menu")}
      </button>
      <nav
        id="studio-navigation"
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label={t("nav.aria")}
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
            {L(service.nav, lang)}
          </Link>
        ))}
        <NavLink to="/nosotros">{t("nav.about")}</NavLink>
        <Link
          className="nav-contact"
          to="/#contacto"
          onClick={() => setOpen(false)}
        >
          {t("nav.contact")} <span>↗</span>
        </Link>
      </nav>
      <LanguageToggle />
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
