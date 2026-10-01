import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { TEAM } from "../data/team.js";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function About() {
  const [alternate, setAlternate] = useState(false);
  const { t } = useLanguage();
  useEffect(() => {
    document.title = t("about.docTitle");
  }, [t]);
  return (
    <>
      <Navbar />
      <main id="top" className="about-page">
        <section className="page-heading">
          <div className="section-kicker mono">
            <span>{t("about.kicker")}</span>
            <span>{t("nav.where")}</span>
          </div>
          <h1>
            {t("about.title1")}
            <br />
            {t("about.title2")} <em>{t("about.title3")}</em>
          </h1>
          <div className="page-intro">
            <span className="page-asterisk" aria-hidden="true">
              ✳
            </span>
            <p>{t("about.intro")}</p>
          </div>
        </section>
        <section className="team-section" aria-labelledby="team-heading">
          <div className="team-section-top">
            <div>
              <span className="mono orange">{t("about.teamKicker")}</span>
              <h2 id="team-heading">{t("about.teamTitle")}</h2>
            </div>
            <button
              className="portrait-switch mono"
              aria-pressed={alternate}
              onClick={() => setAlternate(!alternate)}
            >
              {t(alternate ? "about.alterOff" : "about.alterOn")}
            </button>
          </div>
          <p className="team-hint mono">
            {t("about.hint")}
          </p>
          <div className={`team-grid ${alternate ? "show-alternates" : ""}`}>
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        <div className="about-invite">
          <p>
            {t("about.archive1")}
            <br />
            {t("about.archive2")}
          </p>
          <Link className="solid-button" to="/portfolio">
            {t("about.archiveCta")}
          </Link>
        </div>
        <div className="about-invite">
          <p>
            {t("about.next1")}
            <br />
            {t("about.next2")}
          </p>
          <Link className="solid-button" to="/#contacto">
            {t("about.nextCta")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
