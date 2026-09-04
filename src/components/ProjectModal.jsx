import { useEffect } from "react";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";

// Modal with project detail. Closes on backdrop click, the × button, or Escape.
export default function ProjectModal({ project, onClose }) {
  const { lang, t } = useLanguage();
  useEffect(() => {
    if (!project) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Lock body scroll while the modal is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const accent = project.accent || "#efefef";
  // descripcion / tags are { es, en } objects; resolve to the active array.
  const descripcion = L(project.descripcion, lang) || [];
  const tags = L(project.tags, lang) || [];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.titulo}
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

        <div className="modal__media" style={{ "--accent": accent }}>
          {project.cover ? (
            <img src={project.cover} alt={project.titulo} />
          ) : (
            <div className="modal__placeholder">
              <span>{project.titulo}</span>
            </div>
          )}
        </div>

        <div className="modal__body">
          <span className="modal__cat">{L(project.categoria, lang)}</span>
          <h2 className="modal__title">{project.titulo}</h2>

          <div className="modal__meta">
            {project.cliente ? <span>{L(project.cliente, lang)}</span> : null}
            {project.anio ? <span>{project.anio}</span> : null}
          </div>

          {descripcion.map((para, i) => (
            <p className="modal__text" key={i}>
              {para}
            </p>
          ))}

          {tags.length ? (
            <div className="modal__tags">
              {tags.map((tag, i) => (
                <span className="modal__tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {project.links?.length ? (
            <div className="modal__links">
              {project.links.map((l, i) => {
                const external = l.url.startsWith("http");
                return (
                  <a
                    key={i}
                    className="contact-btn"
                    href={l.url}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {L(l.label, lang)}
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
