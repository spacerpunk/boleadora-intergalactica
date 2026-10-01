import { useEffect, useState } from "react";
import { STUDIO } from "../config.js";
import { SERVICES } from "../data/services.js";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
import { CONTACT_BUDGETS } from "../i18n/strings.js";
import Dialog from "./Dialog.jsx";
// Project types by id: a full project, one per service, or something else.
// `initialType` is one of these ids.
const TYPES = ["full", ...SERVICES.map((s) => s.id), "other"];
const EMPTY = {
  nombre: "",
  email: "",
  empresa: "",
  tipo: TYPES[0],
  presupuesto: 0, // index into CONTACT_BUDGETS
  plazo: "",
  mensaje: "",
};
export default function ContactModal({ open, onClose, initialType }) {
  const { lang, t } = useLanguage();
  const [data, setData] = useState(EMPTY);
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    if (open) {
      setData({ ...EMPTY, tipo: initialType || TYPES[0] });
      setPrepared(false);
    }
  }, [open, initialType]);
  const typeLabel = (id) => {
    if (id === "full") return t("contact.typeFull");
    if (id === "other") return t("contact.typeOther");
    return L(SERVICES.find((s) => s.id === id).form, lang);
  };
  const update = (key) => (event) =>
    setData((d) => ({ ...d, [key]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const subject = t("brief.subject", { name: data.nombre });
    const body = [
      `${t("brief.name")}: ${data.nombre}`,
      `${t("brief.email")}: ${data.email}`,
      `${t("brief.company")}: ${data.empresa}`,
      `${t("brief.service")}: ${typeLabel(data.tipo)}`,
      `${t("brief.budget")}: ${CONTACT_BUDGETS[lang][data.presupuesto]}`,
      `${t("brief.deadline")}: ${data.plazo}`,
      "",
      data.mensaje,
    ].join("\n");
    window.location.href = `${STUDIO.social.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      label={t("contact.label")}
      className="contact-dialog"
    >
      <div className="brief-content">
        <span className="mono orange">{t("contact.kicker")}</span>
        <h2>
          {t("contact.title1")}
          <br />
          {t("contact.title2")}
        </h2>
        {prepared ? (
          <div className="brief-prepared" role="status">
            <p>{t("contact.prepared")}</p>
            <p>
              {t("contact.notOpened")}{" "}
              <a href={STUDIO.social.mail}>
                {STUDIO.social.mail.replace("mailto:", "")}
              </a>
              .
            </p>
            <button className="solid-button" onClick={() => setPrepared(false)}>
              {t("contact.back")}
            </button>
          </div>
        ) : (
          <form className="brief-form" onSubmit={submit}>
            <div className="brief-form__row">
              <label className="brief-field">
                <span>{t("contact.name")}</span>
                <input
                  required
                  autoComplete="name"
                  value={data.nombre}
                  onChange={update("nombre")}
                  placeholder={t("contact.namePh")}
                />
              </label>
              <label className="brief-field">
                <span>{t("contact.email")}</span>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={update("email")}
                  placeholder={t("contact.emailPh")}
                />
              </label>
            </div>
            <label className="brief-field">
              <span>{t("contact.company")}</span>
              <input
                autoComplete="organization"
                value={data.empresa}
                onChange={update("empresa")}
                placeholder={t("contact.companyPh")}
              />
            </label>
            <div className="brief-form__row">
              <label className="brief-field">
                <span>{t("contact.type")}</span>
                <select value={data.tipo} onChange={update("tipo")}>
                  {TYPES.map((id) => (
                    <option key={id} value={id}>
                      {typeLabel(id)}
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
                value={data.plazo}
                onChange={update("plazo")}
                placeholder={t("contact.deadlinePh")}
              />
            </label>
            <label className="brief-field">
              <span>{t("contact.message")}</span>
              <textarea
                required
                rows={3}
                value={data.mensaje}
                onChange={update("mensaje")}
                placeholder={t("contact.messagePh")}
              />
            </label>
            <p className="brief-note">{t("contact.note")}</p>
            <button type="submit" className="solid-button">
              {t("contact.submit")} <span>↗</span>
            </button>
          </form>
        )}
      </div>
    </Dialog>
  );
}
