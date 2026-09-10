import Dialog from "./Dialog.jsx";
export default function ProjectModal({ project, onClose }) {
  return (
    <Dialog
      open={!!project}
      onClose={onClose}
      label={project?.titulo || "Proyecto"}
      className="project-dialog"
    >
      {project && (
        <>
          {project.cover && (
            <img
              className="project-detail-cover"
              src={project.cover}
              alt={project.titulo}
            />
          )}
          <div className="project-detail">
            <span className="mono orange">{project.categoria}</span>
            <h2>{project.titulo}</h2>
            <div className="project-meta mono">
              <span>{project.cliente}</span>
              <span>{project.anio}</span>
            </div>
            {project.descripcion.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="project-tags">
              {project.tags?.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links
                ?.filter((l) => l.url && l.url !== "#")
                .map((l) => (
                  <a
                    className="text-link"
                    key={l.label}
                    href={l.url}
                    target={l.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {l.label} ↗
                  </a>
                ))}
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
}
