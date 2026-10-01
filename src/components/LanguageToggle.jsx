import { useLanguage } from "../i18n/LanguageContext.jsx";

// Language switch: shows both codes with the current one highlighted;
// clicking toggles between Spanish and English.
export default function LanguageToggle() {
  const { lang, toggle, t } = useLanguage();
  return (
    <button
      type="button"
      className="lang-toggle mono"
      onClick={toggle}
      aria-label={t("lang.aria")}
      title={t("lang.aria")}
    >
      <span className={lang === "es" ? "is-on" : ""}>ES</span>
      <span aria-hidden="true">/</span>
      <span className={lang === "en" ? "is-on" : ""}>EN</span>
    </button>
  );
}
