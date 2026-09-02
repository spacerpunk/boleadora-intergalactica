import { useState } from "react";
import { Link } from "react-router-dom";
import { getFeatured } from "../data/projects.js";
import { getMember } from "../data/team.js";
import ProjectModal from "./ProjectModal.jsx";

export default function FeaturedWorks() {
  const [selected, setSelected] = useState(null);
  const featured = getFeatured();

  return (
    <section id="trabajos" className="section">
      <div className="trabajos__head">
        <h2 className="reveal">Nuestros trabajos</h2>
        <p className="paragraph reveal">
          Una selección de piezas del equipo. Mirá el detalle de cada una o
          explorá el portfolio completo.
        </p>
        <Link className="contact-btn reveal" to="/portfolio">
          Ver todo el portfolio →
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
              aria-label={`Ver proyecto ${project.titulo}`}
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
                    {project.categoria}
                    {owner ? ` · ${owner.nombre}` : ""}
                  </span>
                  <h3 className="feature__title">{project.titulo}</h3>
                </div>
                <span className="feature__cta">Ver proyecto →</span>
              </div>
            </button>
          );
        })}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
