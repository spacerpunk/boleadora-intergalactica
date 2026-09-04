import { useLanguage } from "../i18n/LanguageContext.jsx";

const GLOBE = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="#222222" strokeWidth="1.5" />
    <path
      d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z"
      stroke="#222222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Language switch. Shows a globe plus the current language code; clicking it
// toggles between Spanish and English.
export default function LanguageToggle() {
  const { lang, toggle, t } = useLanguage();

  return (
    <button
      type="button"
      className="navbar__rrss__icon lang-toggle"
      onClick={toggle}
      aria-label={t("lang.aria")}
      title={t("lang.title")}
    >
      {GLOBE}
      <span className="lang-toggle__code">{lang.toUpperCase()}</span>
    </button>
  );
}
