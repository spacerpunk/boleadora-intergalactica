import { Link } from "react-router-dom";
import { LOGO_SVG, SOCIAL_ICONS } from "../assets/svg.js";
import { STUDIO } from "../config.js";
import RawSvg from "./RawSvg.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

/**
 * Shared navbar.
 * @param {Array<{label:string, to?:string, href?:string, muted?:boolean}>} nav
 * @param {Object} social  map of social keys -> href (defaults to studio)
 */
export default function Navbar({ nav, social = STUDIO.social }) {
  const items =
    nav || [
      { label: "Equipo", href: "/#equipo" },
      { label: "Contacto", href: "/#contacto", muted: true },
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

      <Link id="navbar__logo" to="/" aria-label="Inicio">
        <RawSvg html={LOGO_SVG} />
      </Link>

      <div id="navbar__rrss">
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
