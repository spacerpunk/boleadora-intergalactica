import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function PortfolioGrid({ projects }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  if (!projects.length) {
    return <p className="paragraph reveal">{t("portfolio.empty")}</p>;
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
