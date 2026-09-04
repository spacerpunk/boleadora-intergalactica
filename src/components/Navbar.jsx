import { Link } from "react-router-dom";
import { LOGO_SVG, SOCIAL_ICONS } from "../assets/svg.js";
import { STUDIO } from "../config.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RawSvg from "./RawSvg.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

/**
 * Shared navbar.
 * @param {Array<{label:string, to?:string, href?:string, muted?:boolean}>} nav
 * @param {Object} social  map of social keys -> href (defaults to studio)
 */
export default function Navbar({ nav, social = STUDIO.social }) {
  const { t } = useLanguage();

  const items =
    nav || [
      { label: t("nav.equipo"), href: "/#equipo" },
      { label: t("nav.contacto"), href: "/#contacto", muted: true },
    ];

  return (
    <div id="navbar">
      <ul id="navbar__navigation">
        {items.map((n) => (
          <li key={n.label} className={n.muted ? "muted" : undefined}>
            {n.to ? (
              <Link to={n.to}>{n.label}</Link>
            ) : (
              <a href={n.href}>{n.label}</a>
            )}
          </li>
        ))}
      </ul>

      <Link id="navbar__logo" to="/" aria-label={t("nav.inicio")}>
        <RawSvg html={LOGO_SVG} />
      </Link>

      <div id="navbar__rrss">
        <LanguageToggle />
        <ThemeToggle />
        {Object.keys(social)
          .filter((key) => SOCIAL_ICONS[key])
          .map((key) => {
          const href = social[key] || "#";
          const external = href.startsWith("http");
          return (
            <a
              key={key}
              className="navbar__rrss__icon"
              href={href}
              aria-label={key}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <RawSvg html={SOCIAL_ICONS[key]} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
