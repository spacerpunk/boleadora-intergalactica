import { Link } from "react-router-dom";
import { STUDIO } from "../config.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="studio-footer">
      <div className="footer-top mono">
        <span>{t("footer.line")}</span>
        <a href="#top">{t("footer.top")}</a>
      </div>
      <Link
        to="/"
        className="footer-wordmark"
        aria-label={t("footer.homeAria")}
      >
        ruido de mate<span>®</span>
      </Link>
      <div className="footer-bottom mono">
        <span>© {new Date().getFullYear()} RUIDO DE MATE</span>
        <span>AI ADVERTISING STUDIO · BUENOS AIRES</span>
        <a href={STUDIO.social.instagram} target="_blank" rel="noreferrer">
          INSTAGRAM ↗
        </a>
        <a href={STUDIO.social.mail}>EMAIL ↗</a>
      </div>
    </footer>
  );
}
