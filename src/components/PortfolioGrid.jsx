import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PortfolioGrid({ projects, filtered = false }) {
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();

  if (!projects.length) {
    return (
      <p className="paragraph reveal">
        {t(filtered ? "portfolio.emptyFiltered" : "portfolio.empty")}
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
