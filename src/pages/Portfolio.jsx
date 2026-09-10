import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import { PROJECTS, getProjectsByOwner } from "../data/projects.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
const FILTERS = [
  { label: "Todo", pattern: null },
  {
    label: "Post & motion",
    pattern:
      /motion|edición|animación|3d|vfx|video|realización|postproducción/i,
  },
  {
    label: "Creatividad & diseño",
    pattern: /diseño|ux|ui|branding|web|campaña/i,
  },
  { label: "Sonido & música", pattern: /sonido|sound|foley|música|audio/i },
  { label: "IA", pattern: /ia generativa|agentic|automatización/i },
];
export default function Portfolio() {
  const { id } = useParams();
  const member = id ? getMember(id) : null;
  const [filter, setFilter] = useState(0);
  useEffect(() => {
    setFilter(0);
  }, [id]);
  useEffect(() => {
    document.title = `${member ? `Trabajos de ${member.nombre}` : "Portfolio"} — Ruido de Mate`;
  }, [member]);
  if (id && !member) return <Navigate to="/" replace />;
  const projects = member ? getProjectsByOwner(member.id) : PROJECTS;
  const pattern = FILTERS[filter].pattern;
  const visible = pattern
    ? projects.filter((p) =>
        pattern.test(`${p.categoria} ${p.tags?.join(" ")}`),
      )
    : projects;
  return (
    <>
      <Navbar />
      <main id="top" className="portfolio-page">
        <section className="page-heading">
          <div className="section-kicker mono">
            <span>[ PORTFOLIO ]</span>
            <span>EL OFICIO, EN ACCIÓN.</span>
          </div>
          <h1>
            {member ? (
              <>
                EL RUIDO
                <br />
                DE <em>{member.nombre.toUpperCase()}.</em>
              </>
            ) : (
              <>
                IDEAS QUE
                <br />
                <em>COBRAN VIDA.</em>
              </>
            )}
          </h1>
          <div className="portfolio-intro">
            <p>
              {member
                ? `Una selección de proyectos de ${member.nombreCompleto}.`
                : "Una selección de trabajos y colaboraciones de quienes formamos Ruido de Mate. Imagen, sonido, diseño y nuevas formas de producir."}
            </p>
            {member && (
              <Link className="text-link" to={`/profile/${member.id}`}>
                Volver al perfil ↗
              </Link>
            )}
          </div>
        </section>
        <section className="portfolio-content" aria-label="Proyectos">
          <div
            className="portfolio-filters"
            aria-label="Filtrar por disciplina"
          >
            {FILTERS.map((f, i) => (
              <button
                key={f.label}
                onClick={() => setFilter(i)}
                aria-pressed={filter === i}
              >
                {f.label}
              </button>
            ))}
            <span className="mono" aria-live="polite">
              {String(visible.length).padStart(2, "0")} PROYECTOS
            </span>
          </div>
          <PortfolioGrid projects={visible} filtered={filter !== 0} />
          {member?.portfolioLinks?.length > 0 && (
            <div className="external-portfolios">
              {member.portfolioLinks.map((l) => (
                <a
                  key={l.label}
                  className="text-link"
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </section>
        <div className="about-invite">
          <p>
            Hagamos algo
            <br />
            que valga la pena mirar.
          </p>
          <Link className="solid-button" to="/#contacto">
            Contanos tu proyecto ↗
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
