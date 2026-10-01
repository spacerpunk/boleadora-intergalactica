import { useState } from "react";
import { Link } from "react-router-dom";
import { getFeatured } from "../data/projects.js";
import { getMember } from "../data/team.js";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function FeaturedWorks() {
  const { lang, t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const featured = getFeatured();

  return (
    <section id="trabajos" className="section">
      <div className="trabajos__head">
        <h2 className="reveal">{t("featured.title")}</h2>
        <p className="paragraph reveal">{t("featured.text")}</p>
        <Link className="contact-btn reveal" to="/portfolio">
          {t("featured.seeAll")}
        </Link>
      </div>

      <div id="featured-list">
        {featured.map((project) => {
          const owner = getMember(project.owner);
          return (
            <button
              type="button"
              key={project.id}
              className="feature reveal"
              style={{ "--accent": project.accent || "#efefef" }}
              onClick={() => setSelected(project)}
              aria-label={t("project.viewAria", { title: project.titulo })}
            >
              <div className="feature__media">
                {project.cover ? (
                  <img src={project.cover} alt={project.titulo} loading="lazy" />
                ) : (
                  <div className="feature__placeholder">
                    <span>{project.titulo}</span>
                  </div>
                )}
              </div>
              <div className="feature__overlay">
                <div className="feature__info">
                  <span className="feature__cat">
                    {L(project.categoria, lang)}
                    {owner ? ` · ${owner.nombre}` : ""}
                  </span>
                  <h3 className="feature__title">{project.titulo}</h3>
                </div>
                <span className="feature__cta">{t("project.view")}</span>
              </div>
            </button>
          );
        })}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
