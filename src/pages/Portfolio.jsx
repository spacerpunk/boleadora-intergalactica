import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import { PROJECTS, getProjectsByOwner } from "../data/projects.js";
import { STUDIO } from "../config.js";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const { id } = useParams();
  const member = id ? getMember(id) : null;

  // Re-init reveal when switching between studio / members.
  useReveal(id || "studio");

  useEffect(() => {
    document.title = member
      ? `${t("portfolio.docMember", { name: member.nombreCompleto })} — ${
          STUDIO.nombre
        }`
      : `${t("portfolio.docStudio")} — ${STUDIO.nombre}`;
  }, [member, t]);

  // /portfolio/:id with an unknown id -> back home.
  if (id && !member) return <Navigate to="/" replace />;

  const projects = member ? getProjectsByOwner(member.id) : PROJECTS;

  const navbar = member
    ? {
        nav: [
          { label: t("nav.equipo"), href: "/#equipo" },
          { label: t("nav.perfil"), to: `/profile/${member.id}`, muted: true },
        ],
        social: member.social,
      }
    : {
        nav: [
          { label: t("nav.equipo"), href: "/#equipo" },
          { label: t("nav.portfolio"), to: "/portfolio", muted: true },
        ],
        social: STUDIO.social,
      };

  return (
    <>
      <Navbar nav={navbar.nav} social={navbar.social} />

      <main>
        <section id="portfolio" className="section">
          <div id="portfolio__head">
            <span className="hero__eyebrow reveal">{t("portfolio.eyebrow")}</span>
            <h1 className="reveal">
              {member
                ? t("portfolio.memberTitle", { name: member.nombre })
                : t("portfolio.studioTitle")}
            </h1>
            <p className="paragraph reveal">
              {member
                ? t("portfolio.memberText", { name: member.nombreCompleto })
                : t("portfolio.studioText")}
            </p>
            {member ? (
              <Link className="contact-btn reveal" to={`/profile/${member.id}`}>
                {t("portfolio.backProfile")}
              </Link>
            ) : null}
          </div>

          <PortfolioGrid projects={projects} />

          {member?.portfolioLinks?.length ? (
            <div id="portfolio__links">
              {member.portfolioLinks.map((l, i) => (
                <a
                  key={i}
                  className="contact-btn reveal"
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {L(l.label, lang)} →
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
