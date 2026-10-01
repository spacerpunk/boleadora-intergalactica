import { useLanguage, L } from "../i18n/LanguageContext.jsx";

// A single portfolio project card. Reacts on hover and opens the modal on click.
export default function ProjectCard({ project, onOpen }) {
  const { lang, t } = useLanguage();
  const accent = project.accent || "#efefef";
  const title = L(project.titulo, lang);
  return (
    <button
      type="button"
      className="project-card reveal"
      style={{ "--accent": accent }}
      onClick={() => onOpen(project)}
      aria-label={t("project.viewAria", { title })}
    >
      <div className="project-card__media">
        {project.cover ? (
          <img src={project.cover} alt={title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">
            <span>{title}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <span className="project-card__view">{t("project.view")}</span>
        </div>
      </div>
      <div className="project-card__body">
        <span className="project-card__cat">{L(project.categoria, lang)}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__resumen">{L(project.resumen, lang)}</p>
      </div>
    </button>
  );
}
