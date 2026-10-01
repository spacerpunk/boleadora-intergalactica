import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ReelHero from "../components/ReelHero.jsx";
import PillarSection from "../components/PillarSection.jsx";
import ContactModal from "../components/ContactModal.jsx";
import { SERVICES } from "../data/services.js";
import { STUDIO } from "../config.js";
export default function Home() {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    document.title = "Ruido de Mate — Publicidad con IA. Oficio de cine.";
  }, []);
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
            <span>[ QUIÉNES SOMOS ]</span>
            <span>DEL SET A LA IA</span>
          </div>
          <div className="manifesto-grid">
            <span className="manifesto-star" aria-hidden="true">
              ✳
            </span>
            <div>
              <h2 id="manifesto-heading">
                La IA genera.
                <br />
                El oficio <em>decide.</em>
              </h2>
              <p>
                Somos un estudio de publicidad especializado en inteligencia
                artificial. Venimos de rodajes, islas de edición y salas de
                mezcla: aprendimos a contar historias antes de que existiera un
                prompt. Hoy usamos la IA para producir más rápido y a escala, y
                el oficio para que el resultado no parezca hecho con IA.
              </p>
            </div>
          </div>
          <div className="manifesto-bottom mono">
            <span>UN SOLO NICHO: PUBLICIDAD. TRES PILARES.</span>
            <span>UN MISMO EQUIPO. ↓</span>
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
            <span>[ TU PRÓXIMA CAMPAÑA EMPIEZA ACÁ ]</span>
            <span>BA ↗ WORLDWIDE</span>
          </div>
          <button
            className="contact-headline"
            onClick={() => setContact("Proyecto integral")}
          >
            ¿HACEMOS
            <br />
            <span>RUIDO?</span>
            <span className="contact-arrow">↗</span>
          </button>
          <div className="contact-bottom">
            <p>Traé tu producto, tu marca o tu calendario de contenido.</p>
            <button
              className="solid-button"
              onClick={() => setContact("Proyecto integral")}
            >
              Contanos tu proyecto <span>↗</span>
            </button>
            <a className="mono" href={STUDIO.social.mail}>
              O ESCRIBINOS POR EMAIL ↗
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
