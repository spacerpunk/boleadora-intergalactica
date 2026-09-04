import { useEffect, useState } from "react";
import { TEAM } from "../data/team.js";
import { STUDIO } from "../config.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TeamCard from "../components/TeamCard.jsx";
import FeaturedWorks from "../components/FeaturedWorks.jsx";
import ContactModal from "../components/ContactModal.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Home() {
  const { t } = useLanguage();
  useReveal("home");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.title = `${STUDIO.nombre} — ${t("home.docTitle")}`;
  }, [t]);

  const mailto = STUDIO.social.mail;

  return (
    <>
      <Navbar
        nav={[
          { label: t("nav.trabajos"), href: "#trabajos" },
          { label: t("nav.equipo"), href: "#equipo" },
          { label: t("nav.portfolio"), to: "/portfolio", muted: true },
        ]}
        social={STUDIO.social}
      />

      <main>
        <header id="hero" className="section">
          <div id="hero__text">
            <span className="hero__eyebrow reveal">{t("home.eyebrow")}</span>
            <h1 className="reveal">{STUDIO.nombre}</h1>
            <p className="paragraph reveal">{t("home.heroText")}</p>
          </div>
        </header>

        <FeaturedWorks />

        <section id="equipo" className="section">
          <h2 className="reveal">{t("home.teamTitle")}</h2>
          <div id="team-grid">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section id="contacto" className="section">
          <h2 className="reveal">{t("home.contactTitle")}</h2>
          <p className="paragraph reveal">{t("home.contactText")}</p>
          <div className="contact-actions reveal">
            <button
              type="button"
              className="contact-btn contact-btn--solid"
              onClick={() => setContactOpen(true)}
            >
              {t("home.contactCta")}
            </button>
            <a className="contact-btn" href={mailto}>
              {mailto.replace("mailto:", "")}
            </a>
          </div>
        </section>
      </main>

      <Footer name={STUDIO.copyright} />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
