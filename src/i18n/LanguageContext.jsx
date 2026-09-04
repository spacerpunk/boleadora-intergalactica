import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { STRINGS } from "./strings.js";

// Language context. Default is Spanish; the choice persists in localStorage so
// it survives navigation, but a first-time visitor always lands on Spanish.

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "es" || stored === "en") return stored;
  } catch (e) {
    /* ignore */
  }
  return "es";
}

function interpolate(str, params) {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    key in params ? String(params[key]) : `{${key}}`
  );
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo(() => {
    const t = (key, params) => {
      const entry = STRINGS[key];
      if (!entry) return key;
      const str = entry[lang] ?? entry.es ?? key;
      return interpolate(str, params);
    };
    return {
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "es" ? "en" : "es")),
      t,
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/**
 * Localize a data field that may be a plain string (same in both languages) or
 * a { es, en } object. Falls back to Spanish, then to an empty string.
 */
export function L(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.es ?? "";
  }
  return value ?? "";
}
