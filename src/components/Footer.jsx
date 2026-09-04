import { WORDMARK_SVG } from "../assets/svg.js";
import { STUDIO } from "../config.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RawSvg from "./RawSvg.jsx";

export default function Footer({ name = STUDIO.copyright }) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__separator"></div>
      <div className="footer__section">
        <p>
          2024 – {year} | {name}
          <br />
          {t("footer.rights")}
        </p>
        <div id="footer__logo">
          <RawSvg html={WORDMARK_SVG} />
        </div>
      </div>
    </footer>
  );
}
