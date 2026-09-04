import { useEffect, useState } from "react";
import { STUDIO } from "../config.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { CONTACT_TYPES, CONTACT_BUDGETS } from "../i18n/strings.js";

// Contact / project-brief modal. Opens from the "Trabajemos juntos" button.
// Closes on backdrop click, the × button, or Escape.
//
// Submission strategy: with no backend yet, the brief is composed into a
// mailto to the studio address (so it works today, alongside the plain mail
// link). To wire this to Supabase / Formspree / an API route later, replace the
// body of `handleSubmit` — the `data` object already holds every field.
//
// The type/budget selects store their index (not the label), so the composed
// mailto is written in whatever language is active at submit time.

const EMPTY = {
  nombre: "",
  email: "",
  empresa: "",
  tipo: 0,
  presupuesto: 0,
  plazo: "",
  mensaje: "",
};

export default function ContactModal({ open, onClose }) {
  const { lang, t } = useLanguage();
  const [data, setData] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Reset the form each time the modal is freshly opened.
  useEffect(() => {
    if (open) {
      setData(EMPTY);
      setSent(false);
    }
  }, [open]);

  if (!open) return null;

  const to = (STUDIO.social.mail || "mailto:hola@ruidodemate.studio").replace(
    "mailto:",
    ""
  );

  const update = (field) => (e) =>
    setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = t("brief.subject", {
      name: data.nombre || t("brief.newContact"),
    });
    const body = [
      `${t("brief.lblName")}: ${data.nombre}`,
      `${t("brief.lblEmail")}: ${data.email}`,
      data.empresa ? `${t("brief.lblCompany")}: ${data.empresa}` : null,
      `${t("brief.lblType")}: ${CONTACT_TYPES[lang][data.tipo]}`,
      `${t("brief.lblBudget")}: ${CONTACT_BUDGETS[lang][data.presupuesto]}`,
      data.plazo ? `${t("brief.lblDeadline")}: ${data.plazo}` : null,
      "",
      t("brief.lblProject"),
      data.mensaje,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal modal--form"
        role="dialog"
        aria-modal="true"
        aria-label={t("contact.eyebrow")}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label={t("contact.close")}
        >
          ×
        </button>

        <div className="modal__body">
          <span className="modal__cat">{t("contact.eyebrow")}</span>
          <h2 className="modal__title">{t("contact.title")}</h2>

          {sent ? (
            <div className="brief-sent">
              <p className="modal__text">
                {t("contact.sentText")}
                <a className="brief-link" href={STUDIO.social.mail}>
                  {to}
                </a>
                .
              </p>
              <button type="button" className="contact-btn" onClick={onClose}>
                {t("contact.close")}
              </button>
            </div>
          ) : (
            <form className="brief-form" onSubmit={handleSubmit}>
              <div className="brief-form__row">
                <label className="brief-field">
                  <span>{t("contact.name")}</span>
                  <input
                    type="text"
                    required
                    value={data.nombre}
                    onChange={update("nombre")}
                    placeholder={t("contact.namePh")}
                  />
                </label>
                <label className="brief-field">
                  <span>{t("contact.email")}</span>
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={update("email")}
                    placeholder={t("contact.emailPh")}
                  />
                </label>
              </div>

              <label className="brief-field">
                <span>{t("contact.company")}</span>
                <input
                  type="text"
                  value={data.empresa}
                  onChange={update("empresa")}
                  placeholder={t("contact.companyPh")}
                />
              </label>

              <div className="brief-form__row">
                <label className="brief-field">
                  <span>{t("contact.type")}</span>
                  <select value={data.tipo} onChange={update("tipo")}>
                    {CONTACT_TYPES[lang].map((label, i) => (
                      <option key={i} value={i}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="brief-field">
                  <span>{t("contact.budget")}</span>
                  <select
                    value={data.presupuesto}
                    onChange={update("presupuesto")}
                  >
                    {CONTACT_BUDGETS[lang].map((label, i) => (
                      <option key={i} value={i}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="brief-field">
                <span>{t("contact.deadline")}</span>
                <input
                  type="text"
                  value={data.plazo}
                  onChange={update("plazo")}
                  placeholder={t("contact.deadlinePh")}
                />
              </label>

              <label className="brief-field">
                <span>{t("contact.message")}</span>
                <textarea
                  required
                  rows={4}
                  value={data.mensaje}
                  onChange={update("mensaje")}
                  placeholder={t("contact.messagePh")}
                />
              </label>

              <div className="brief-form__actions">
                <button type="submit" className="contact-btn contact-btn--solid">
                  {t("contact.submit")}
                </button>
                <a className="brief-link" href={STUDIO.social.mail}>
                  {t("contact.orWrite", { mail: to })}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
