import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import { STUDIO } from "../config.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Portfolio() {
  const { id } = useParams();
  const member = getMember(id);

  useReveal(id);

  useEffect(() => {
    if (member) {
      document.title = `Portfolio de ${member.nombreCompleto} — ${STUDIO.nombre}`;
    }
  }, [member]);

  if (!member) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar
        nav={[
          { label: "Equipo", href: "/#equipo" },
          { label: "Perfil", to: `/profile/${member.id}`, muted: true },
        ]}
        social={member.social}
      />

      <main>
        <section id="portfolio" className="section">
          <div id="portfolio__head">
            <span className="hero__eyebrow reveal">Portfolio</span>
            <h1 className="reveal">Trabajos de {member.nombre}</h1>
            <p className="paragraph reveal">
              Selección de proyectos en camino. Muy pronto vas a poder ver acá
              las piezas de {member.nombreCompleto}.
            </p>
            <Link className="contact-btn reveal" to={`/profile/${member.id}`}>
              ← Volver al perfil
            </Link>
          </div>
          <div id="portfolio-grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <div className="portfolio-cell reveal" key={i}></div>
            ))}
          </div>
        </section>
      </main>

      <Footer name={`${member.nombreCompleto}®`} />
    </>
  );
}
