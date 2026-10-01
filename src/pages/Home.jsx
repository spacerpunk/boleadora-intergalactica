import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ReelHero from "../components/ReelHero.jsx";
import PillarSection from "../components/PillarSection.jsx";
import ContactModal from "../components/ContactModal.jsx";
import { SERVICES } from "../data/services.js";
import { STUDIO } from "../config.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
export default function Home() {
  const [contact, setContact] = useState(null);
  const { t } = useLanguage();
  useEffect(() => {
    document.title = t("home.docTitle");
  }, [t]);
  return (
    <>
      <Navbar />
      <main id="top">
        <ReelHero />
        <section
          id="manifiesto"
          className="manifesto"
          aria-labelledby="manifesto-heading"
        >
          <div className="section-kicker mono">
            <span>{t("home.who")}</span>
            <span>{t("home.fromSet")}</span>
          </div>
          <div className="manifesto-grid">
            <span className="manifesto-star" aria-hidden="true">
              ✳
            </span>
            <div>
              <h2 id="manifesto-heading">
                {t("home.manifesto1")}
                <br />
                {t("home.manifesto2")} <em>{t("home.manifesto3")}</em>
              </h2>
              <p>{t("home.manifestoText")}</p>
            </div>
          </div>
          <div className="manifesto-bottom mono">
            <span>{t("home.niche")}</span>
            <span>{t("home.team")}</span>
          </div>
        </section>
        {SERVICES.map((service) => (
          <PillarSection
            key={service.id}
            service={service}
            total={SERVICES.length}
            onContact={setContact}
          />
        ))}
        <section id="contacto" className="contact-section">
          <div className="section-kicker mono">
            <span>{t("home.nextCampaign")}</span>
            <span>BA ↗ WORLDWIDE</span>
          </div>
          <button
            className="contact-headline"
            onClick={() => setContact("full")}
          >
            {t("home.contact1")}
            <br />
            <span>{t("home.contact2")}</span>
            <span className="contact-arrow">↗</span>
          </button>
          <div className="contact-bottom">
            <p>{t("home.contactText")}</p>
            <button
              className="solid-button"
              onClick={() => setContact("full")}
            >
              {t("home.contactCta")} <span>↗</span>
            </button>
            <a className="mono" href={STUDIO.social.mail}>
              {t("home.contactMail")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal
        open={contact !== null}
        initialType={contact}
        onClose={() => setContact(null)}
      />
    </>
  );
}
