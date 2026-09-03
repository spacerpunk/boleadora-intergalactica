import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import { PROJECTS, getProjectsByOwner } from "../data/projects.js";
import { STUDIO } from "../config.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Portfolio() {
  const { id } = useParams();
  const member = id ? getMember(id) : null;

  // Re-init reveal when switching between studio / members.
  useReveal(id || "studio");

  useEffect(() => {
    document.title = member
      ? `Portfolio de ${member.nombreCompleto} — ${STUDIO.nombre}`
      : `Portfolio — ${STUDIO.nombre}`;
  }, [member]);

  // /portfolio/:id with an unknown id -> back home.
  if (id && !member) return <Navigate to="/" replace />;

  const projects = member ? getProjectsByOwner(member.id) : PROJECTS;

  const navbar = member
    ? {
        nav: [
          { label: "Equipo", href: "/#equipo" },
          { label: "Perfil", to: `/profile/${member.id}`, muted: true },
        ],
        social: member.social,
      }
    : {
        nav: [
          { label: "Equipo", href: "/#equipo" },
          { label: "Portfolio", to: "/portfolio", muted: true },
        ],
        social: STUDIO.social,
      };

  return (
    <>
      <Navbar nav={navbar.nav} social={navbar.social} />

      <main>
        <section id="portfolio" className="section">
          <div id="portfolio__head">
            <span className="hero__eyebrow reveal">Portfolio</span>
            <h1 className="reveal">
              {member ? `Trabajos de ${member.nombre}` : "Nuestro trabajo"}
            </h1>
            <p className="paragraph reveal">
              {member
                ? `Una selección de proyectos de ${member.nombreCompleto}. Hacé clic en cualquiera para ver más.`
                : "Una selección de proyectos del equipo. Hacé clic en cualquiera para ver el detalle."}
            </p>
            {member ? (
              <Link className="contact-btn reveal" to={`/profile/${member.id}`}>
                ← Volver al perfil
              </Link>
            ) : null}
          </div>

          <PortfolioGrid projects={projects} />

          {member?.portfolioLinks?.length ? (
            <div id="portfolio__links">
              {member.portfolioLinks.map((l) => (
                <a
                  key={l.label}
                  className="contact-btn reveal"
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          ) : null}
        </section>
      </main>

      <Footer name={member ? `${member.nombreCompleto}®` : STUDIO.copyright} />
    </>
  );
}
