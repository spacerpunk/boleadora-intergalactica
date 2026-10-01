import { useEffect, useState } from "react";
import { STUDIO } from "../config.js";
import { SERVICES } from "../data/services.js";
import Dialog from "./Dialog.jsx";
const TYPES = ["Proyecto integral", ...SERVICES.map((s) => s.form), "Otro"];
const EMPTY = {
  nombre: "",
  email: "",
  empresa: "",
  tipo: TYPES[0],
  presupuesto: "A definir",
  plazo: "",
  mensaje: "",
};
export default function ContactModal({ open, onClose, initialType }) {
  const [data, setData] = useState(EMPTY);
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    if (open) {
      setData({ ...EMPTY, tipo: initialType || TYPES[0] });
      setPrepared(false);
    }
  }, [open, initialType]);
  const update = (key) => (event) =>
    setData((d) => ({ ...d, [key]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const subject = `Nuevo proyecto — ${data.nombre}`;
    const body = `Nombre: ${data.nombre}\nEmail: ${data.email}\nEmpresa: ${data.empresa}\nServicio: ${data.tipo}\nPresupuesto: ${data.presupuesto}\nPlazo: ${data.plazo}\n\n${data.mensaje}`;
    window.location.href = `${STUDIO.social.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      label="Contanos tu proyecto"
      className="contact-dialog"
    >
      <div className="brief-content">
        <span className="mono orange">[ HAGAMOS RUIDO ]</span>
        <h2>
          Contanos
          <br />
          tu proyecto.
        </h2>
        {prepared ? (
          <div className="brief-prepared" role="status">
            <p>
              Tu brief está listo para enviar desde tu aplicación de correo. El
              envío se completa allí.
            </p>
            <p>
              Si no se abrió, escribinos a{" "}
              <a href={STUDIO.social.mail}>
                {STUDIO.social.mail.replace("mailto:", "")}
              </a>
              .
            </p>
            <button className="solid-button" onClick={() => setPrepared(false)}>
              Volver al brief ↗
            </button>
          </div>
        ) : (
          <form className="brief-form" onSubmit={submit}>
            <div className="brief-form__row">
              <label className="brief-field">
                <span>Tu nombre *</span>
                <input
                  required
                  autoComplete="name"
                  value={data.nombre}
                  onChange={update("nombre")}
                  placeholder="¿Cómo te llamás?"
                />
              </label>
              <label className="brief-field">
                <span>Email *</span>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={update("email")}
                  placeholder="hola@tumarca.com"
                />
              </label>
            </div>
            <label className="brief-field">
              <span>Empresa / marca</span>
              <input
                autoComplete="organization"
                value={data.empresa}
                onChange={update("empresa")}
                placeholder="Tu equipo o tu marca"
              />
            </label>
            <div className="brief-form__row">
              <label className="brief-field">
                <span>¿Qué necesitás?</span>
                <select value={data.tipo} onChange={update("tipo")}>
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="brief-field">
                <span>Presupuesto estimado</span>
                <select
                  value={data.presupuesto}
                  onChange={update("presupuesto")}
                >
                  {[
                    "A definir",
                    "Menos de USD 1.000",
                    "USD 1.000 – 5.000",
                    "USD 5.000 – 15.000",
                    "Más de USD 15.000",
                  ].map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="brief-field">
              <span>Plazo</span>
              <input
                value={data.plazo}
                onChange={update("plazo")}
                placeholder="¿Para cuándo lo necesitás?"
              />
            </label>
            <label className="brief-field">
              <span>Tu producto, tu marca o tu idea *</span>
              <textarea
                required
                rows={3}
                value={data.mensaje}
                onChange={update("mensaje")}
                placeholder="Qué querés comunicar, en qué redes, con qué frecuencia…"
              />
            </label>
            <p className="brief-note">
              Este formulario prepara un email. Lo enviás desde tu aplicación de
              correo.
            </p>
            <button type="submit" className="solid-button">
              Preparar email <span>↗</span>
            </button>
          </form>
        )}
      </div>
    </Dialog>
  );
}
