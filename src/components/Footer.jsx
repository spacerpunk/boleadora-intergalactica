import { Link } from "react-router-dom";
import { STUDIO } from "../config.js";
export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="footer-top mono">
        <span>IDEAS, OFICIO Y UNOS CUANTOS MATES.</span>
        <a href="#top">VOLVER ARRIBA ↑</a>
      </div>
      <Link
        to="/"
        className="footer-wordmark"
        aria-label="Ruido de Mate, inicio"
      >
        ruido de mate<span>®</span>
      </Link>
      <div className="footer-bottom mono">
        <span>© {new Date().getFullYear()} RUIDO DE MATE</span>
        <span>BUENOS AIRES, ARGENTINA</span>
        <a href={STUDIO.social.instagram} target="_blank" rel="noreferrer">
          INSTAGRAM ↗
        </a>
        <a href={STUDIO.social.mail}>EMAIL ↗</a>
      </div>
    </footer>
  );
}
