import { useEffect, useState } from "react";
import { STUDIO } from "../config.js";

// Contact / project-brief modal. Opens from the "Trabajemos juntos" button.
// Closes on backdrop click, the × button, or Escape.
//
// Submission strategy: with no backend yet, the brief is composed into a
// mailto to the studio address (so it works today, alongside the plain mail
// link). To wire this to Supabase / Formspree / an API route later, replace the
// body of `handleSubmit` — the `data` object already holds every field.

const TIPOS = [
  "Edición / Montaje",
  "VFX / 3D",
  "Diseño de sonido / Foley",
  "Dirección de arte",
  "Diseño / Front-end",
  "Proyecto integral",
  "Otro",
];

const PRESUPUESTOS = [
  "A definir",
  "Menos de USD 1.000",
  "USD 1.000 – 5.000",
  "USD 5.000 – 15.000",
  "Más de USD 15.000",
];

const EMPTY = {
  nombre: "",
  email: "",
  empresa: "",
  tipo: TIPOS[0],
  presupuesto: PRESUPUESTOS[0],
  plazo: "",
  mensaje: "",
};

export default function ContactModal({ open, onClose }) {
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

    const subject = `Brief de proyecto — ${data.nombre || "Nuevo contacto"}`;
    const body = [
      `Nombre: ${data.nombre}`,
      `Email: ${data.email}`,
      data.empresa ? `Empresa / marca: ${data.empresa}` : null,
      `Tipo de proyecto: ${data.tipo}`,
      `Presupuesto: ${data.presupuesto}`,
      data.plazo ? `Plazo: ${data.plazo}` : null,
      "",
      "Proyecto:",
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
        aria-label="Trabajemos juntos"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="modal__body">
          <span className="modal__cat">Trabajemos juntos</span>
          <h2 className="modal__title">Contanos de tu proyecto</h2>

          {sent ? (
            <div className="brief-sent">
              <p className="modal__text">
                ¡Gracias! Se abrió tu cliente de correo con el brief listo para
                enviar. Si no se abrió, escribinos directo a{" "}
                <a className="brief-link" href={STUDIO.social.mail}>
                  {to}
                </a>
                .
              </p>
              <button
                type="button"
                className="contact-btn"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form className="brief-form" onSubmit={handleSubmit}>
              <div className="brief-form__row">
                <label className="brief-field">
                  <span>Nombre *</span>
                  <input
                    type="text"
                    required
                    value={data.nombre}
                    onChange={update("nombre")}
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="brief-field">
                  <span>Email *</span>
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={update("email")}
                    placeholder="tu@email.com"
                  />
                </label>
              </div>

              <label className="brief-field">
                <span>Empresa / marca</span>
                <input
                  type="text"
                  value={data.empresa}
                  onChange={update("empresa")}
                  placeholder="Opcional"
                />
              </label>

              <div className="brief-form__row">
                <label className="brief-field">
                  <span>Tipo de proyecto</span>
                  <select value={data.tipo} onChange={update("tipo")}>
                    {TIPOS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="brief-field">
                  <span>Presupuesto</span>
                  <select
                    value={data.presupuesto}
                    onChange={update("presupuesto")}
                  >
                    {PRESUPUESTOS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="brief-field">
                <span>Plazo estimado</span>
                <input
                  type="text"
                  value={data.plazo}
                  onChange={update("plazo")}
                  placeholder="Ej: 3 semanas, para fin de mes…"
                />
              </label>

              <label className="brief-field">
                <span>Contanos del proyecto *</span>
                <textarea
                  required
                  rows={4}
                  value={data.mensaje}
                  onChange={update("mensaje")}
                  placeholder="¿Qué necesitás? Objetivo, referencias, entregables…"
                />
              </label>

              <div className="brief-form__actions">
                <button type="submit" className="contact-btn contact-btn--solid">
                  Enviar brief
                </button>
                <a className="brief-link" href={STUDIO.social.mail}>
                  o escribinos a {to}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
