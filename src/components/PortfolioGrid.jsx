import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function PortfolioGrid({ projects }) {
  const [selected, setSelected] = useState(null);

  if (!projects.length) {
    return (
      <p className="paragraph reveal">
        Todavía no hay proyectos cargados. ¡Muy pronto!
      </p>
    );
  }

  return (
    <>
      <div id="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelected}
          />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
