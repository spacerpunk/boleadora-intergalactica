import Dialog from "./Dialog.jsx";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
export default function ProjectModal({ project, onClose }) {
  const { lang, t } = useLanguage();
  const title = project && L(project.titulo, lang);
  return (
    <Dialog
      open={!!project}
      onClose={onClose}
      label={title || t("project.fallback")}
      className="project-dialog"
    >
      {project && (
        <>
          {project.cover && (
            <img
              className="project-detail-cover"
              src={project.cover}
              alt={title}
            />
          )}
          <div className="project-detail">
            <span className="mono orange">{L(project.categoria, lang)}</span>
            <h2>{title}</h2>
            <div className="project-meta mono">
              <span>{L(project.cliente, lang)}</span>
              <span>{project.anio}</span>
            </div>
            {L(project.descripcion, lang).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="project-tags">
              {(L(project.tags, lang) || []).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links
                ?.filter((l) => l.url && l.url !== "#")
                .map((l) => (
                  <a
                    className="text-link"
                    key={l.url}
                    href={l.url}
                    target={l.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {L(l.label, lang)} ↗
                  </a>
                ))}
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
}
