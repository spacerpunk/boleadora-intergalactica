import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { TEAM } from "../data/team.js";
import { Link } from "react-router-dom";

export default function About() {
  const [alternate, setAlternate] = useState(false);
  useEffect(() => {
    document.title = "Nosotros — Ruido de Mate";
  }, []);
  return (
    <>
      <Navbar />
      <main id="top" className="about-page">
        <section className="page-heading">
          <div className="section-kicker mono">
            <span>[ NOSOTROS ]</span>
            <span>BUENOS AIRES ↗ MUNDO</span>
          </div>
          <h1>
            EL TALENTO
            <br />
            HACE <em>RUIDO.</em>
          </h1>
          <div className="page-intro">
            <span className="page-asterisk" aria-hidden="true">
              ✳
            </span>
            <p>
              Distintas cabezas. Un mismo impulso: hacer cosas que nos den ganas
              de volver a mirar. Somos un equipo de artistas, postproductores y
              creativos que cruza imagen, sonido y tecnología.
            </p>
          </div>
        </section>
        <section className="team-section" aria-labelledby="team-heading">
          <div className="team-section-top">
            <div>
              <span className="mono orange">[ EL EQUIPO ]</span>
              <h2 id="team-heading">Humanos, por suerte.</h2>
            </div>
            <button
              className="portrait-switch mono"
              aria-pressed={alternate}
              onClick={() => setAlternate(!alternate)}
            >
              {alternate ? "VOLVER A LA REALIDAD ↺" : "ACTIVAR ALTER EGOS ↗"}
            </button>
          </div>
          <p className="team-hint mono">
            PASÁ POR LOS RETRATOS Y CONOCÉ NUESTRO OTRO LADO.
          </p>
          <div className={`team-grid ${alternate ? "show-alternates" : ""}`}>
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        <div className="about-invite">
          <p>
            El próximo proyecto
            <br />
            podría ser el tuyo.
          </p>
          <Link className="solid-button" to="/#contacto">
            Hablemos ↗
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
