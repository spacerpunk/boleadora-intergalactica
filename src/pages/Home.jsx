import { useEffect } from "react";
import { TEAM } from "../data/team.js";
import { STUDIO } from "../config.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TeamCard from "../components/TeamCard.jsx";
import FeaturedWorks from "../components/FeaturedWorks.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Home() {
  useReveal("home");

  useEffect(() => {
    document.title = `${STUDIO.nombre} — Postproducción & Creatividad`;
  }, []);

  const mailto = STUDIO.social.mail;

  return (
    <>
      <Navbar
        nav={[
          { label: "Trabajos", href: "#trabajos" },
          { label: "Equipo", href: "#equipo" },
          { label: "Portfolio", to: "/portfolio", muted: true },
        ]}
        social={STUDIO.social}
      />

      <main>
        <header id="hero" className="section">
          <div id="hero__text">
            <span className="hero__eyebrow reveal">
              Postproducción &amp; Creatividad
            </span>
            <h1 className="reveal">{STUDIO.nombre}</h1>
            <p className="paragraph reveal">
              Somos un equipo de postproductores y creativos. Diseño, edición,
              dirección de arte y VFX bajo un mismo techo — de la idea a la
              pieza final.
            </p>
          </div>
        </header>

        <FeaturedWorks />

        <section id="equipo" className="section">
          <h2 className="reveal">El equipo</h2>
          <div id="team-grid">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section id="contacto" className="section">
          <h2 className="reveal">Trabajemos juntos</h2>
          <p className="paragraph reveal">
            ¿Tenés un proyecto en mente? Escribinos y contanos de qué se trata.
          </p>
          <a className="contact-btn reveal" href={mailto}>
            {mailto.replace("mailto:", "")}
          </a>
        </section>
      </main>

      <Footer name={STUDIO.copyright} />
    </>
  );
}
