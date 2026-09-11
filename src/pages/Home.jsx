import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ReelHero from "../components/ReelHero.jsx";
import ServiceScene from "../components/ServiceScene.jsx";
import ContactModal from "../components/ContactModal.jsx";
import { SERVICES } from "../data/services.js";
import { STUDIO } from "../config.js";
export default function Home() {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    document.title = "Ruido de Mate — Buenas ideas. Mucho ruido.";
  }, []);
  return (
    <>
      <Navbar />
      <main id="top">
        <ReelHero />
        <div className="service-index mono">
          {SERVICES.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              <span>{s.number}</span>
              {s.label}
              <span>↘</span>
            </a>
          ))}
        </div>
        <section
          id="servicios"
          className="manifesto"
          aria-labelledby="services-heading"
        >
          <div className="section-kicker mono">
            <span>[ LO QUE HACEMOS ]</span>
            <span>EST. EN BUENAS IDEAS</span>
          </div>
          <div className="manifesto-grid">
            <span className="manifesto-star" aria-hidden="true">
              ✳
            </span>
            <div>
              <h2 id="services-heading">
                Tu idea tiene potencial.
                <br />
                Vamos a <em>hacer ruido.</em>
              </h2>
              <p>
                Somos un estudio independiente de creatividad, postproducción y
                tecnología. Nos sumamos a marcas, agencias y equipos para llevar
                sus ideas del «estaría bueno» al «quedó increíble».
              </p>
            </div>
          </div>
          <div className="manifesto-bottom mono">
            <span>TRES FORMAS DE POTENCIAR TU PROYECTO.</span>
            <span>UN MISMO EQUIPO. ↓</span>
          </div>
        </section>
        {SERVICES.map((service) => (
          <ServiceScene
            key={service.id}
            service={service}
            onContact={setContact}
          />
        ))}
        <section className="studio-bridges">
          <Link to="/portfolio">
            <img
              src="/imgs/projects/nico-toyota-team23.jpg"
              alt="Film conceptual de Toyota, proyecto del equipo"
              loading="lazy"
            />
            <div>
              <span className="mono">[ LAS IDEAS, EN ACCIÓN ]</span>
              <h2>
                Menos palabras.
                <br />
                Más play.
              </h2>
              <span className="bridge-link">Explorá el portfolio ↗</span>
            </div>
          </Link>
          <Link to="/nosotros">
            <span className="bridge-asterisk" aria-hidden="true">
              ✳
            </span>
            <div>
              <span className="mono">[ EL LADO HUMANO ]</span>
              <h2>
                Mucho oficio.
                <br />
                Cero solemnidad.
              </h2>
              <span className="bridge-link">Conocé al equipo ↗</span>
            </div>
          </Link>
        </section>
        <section id="contacto" className="contact-section">
          <div className="section-kicker mono">
            <span>[ TU PRÓXIMO PROYECTO EMPIEZA ACÁ ]</span>
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
            <p>
              Traé la idea, el desafío o las ganas.
              <br />
              Nosotros ponemos el resto.
            </p>
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
