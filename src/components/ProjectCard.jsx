// A single portfolio project card. Reacts on hover and opens the modal on click.
export default function ProjectCard({ project, onOpen }) {
  const accent = project.accent || "#efefef";
  return (
    <button
      type="button"
      className="project-card reveal"
      style={{ "--accent": accent }}
      onClick={() => onOpen(project)}
      aria-label={`Ver proyecto ${project.titulo}`}
    >
      <div className="project-card__media">
        {project.cover ? (
          <img src={project.cover} alt={project.titulo} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">
            <span>{project.titulo}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <span className="project-card__view">Ver proyecto →</span>
        </div>
      </div>
      <div className="project-card__body">
        <span className="project-card__cat">{project.categoria}</span>
        <h3 className="project-card__title">{project.titulo}</h3>
        <p className="project-card__resumen">{project.resumen}</p>
      </div>
    </button>
  );
}
