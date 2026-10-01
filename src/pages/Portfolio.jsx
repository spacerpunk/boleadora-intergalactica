import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import { PROJECTS, getProjectsByOwner } from "../data/projects.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
// Patterns match the Spanish category and tags, whatever the UI language.
const FILTERS = [
  { label: "portfolio.filter.all", pattern: null },
  {
    label: "portfolio.filter.post",
    pattern:
      /motion|edición|animación|3d|vfx|video|realización|postproducción/i,
  },
  {
    label: "portfolio.filter.design",
    pattern: /diseño|ux|ui|branding|web|campaña/i,
  },
  { label: "portfolio.filter.sound", pattern: /sonido|sound|foley|música|audio/i },
  { label: "portfolio.filter.ai", pattern: /ia generativa|agentic|automatización/i },
];
export default function Portfolio() {
  const { id } = useParams();
  const member = id ? getMember(id) : null;
  const [filter, setFilter] = useState(0);
  const { lang, t } = useLanguage();
  useEffect(() => {
    setFilter(0);
  }, [id]);
  useEffect(() => {
    const page = member
      ? t("portfolio.docMember", { name: member.nombre })
      : t("portfolio.docStudio");
    document.title = `${page} — Ruido de Mate`;
  }, [member, t]);
  if (id && !member) return <Navigate to="/" replace />;
  const projects = member ? getProjectsByOwner(member.id) : PROJECTS;
  const pattern = FILTERS[filter].pattern;
  const visible = pattern
    ? projects.filter((p) =>
        pattern.test(`${L(p.categoria, "es")} ${L(p.tags, "es") || ""}`),
      )
    : projects;
  return (
    <>
      <Navbar />
      <main id="top" className="portfolio-page">
        <section className="page-heading">
          <div className="section-kicker mono">
            <span>{t("portfolio.kicker")}</span>
            <span>{t("portfolio.kicker2")}</span>
          </div>
          <h1>
            {member ? (
              <>
                {t("portfolio.memberTitle1")}
                <br />
                {t("portfolio.memberTitle2")}{" "}
                <em>{member.nombre.toUpperCase()}.</em>
              </>
            ) : (
              <>
                {t("portfolio.studioTitle1")}
                <br />
                <em>{t("portfolio.studioTitle2")}</em>
              </>
            )}
          </h1>
          <div className="portfolio-intro">
            <p>
              {member
                ? t("portfolio.memberText", { name: member.nombreCompleto })
                : t("portfolio.studioText")}
            </p>
            {member ? (
              <Link className="text-link" to={`/profile/${member.id}`}>
                {t("portfolio.backProfile")}
              </Link>
            ) : (
              <Link className="text-link" to="/#contenido-sintetico">
                {t("portfolio.today")}
              </Link>
            )}
          </div>
        </section>
        <section className="portfolio-content" aria-label={t("portfolio.projectsAria")}>
          <div
            className="portfolio-filters"
            aria-label={t("portfolio.filterAria")}
          >
            {FILTERS.map((f, i) => (
              <button
                key={f.label}
                onClick={() => setFilter(i)}
                aria-pressed={filter === i}
              >
                {t(f.label)}
              </button>
            ))}
            <span className="mono" aria-live="polite">
              {t("portfolio.count", {
                n: String(visible.length).padStart(2, "0"),
              })}
            </span>
          </div>
          <PortfolioGrid projects={visible} filtered={filter !== 0} />
          {member?.portfolioLinks?.length > 0 && (
            <div className="external-portfolios">
              {member.portfolioLinks.map((l) => (
                <a
                  key={l.url}
                  className="text-link"
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {L(l.label, lang)} ↗
                </a>
              ))}
            </div>
          )}
        </section>
        <div className="about-invite">
          <p>
            {t("portfolio.invite1")}
            <br />
            {t("portfolio.invite2")}
          </p>
          <Link className="solid-button" to="/#contacto">
            {t("portfolio.inviteCta")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
