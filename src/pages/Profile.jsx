import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
export default function Profile() {
  const { id } = useParams();
  const member = getMember(id);
  useEffect(() => {
    if (member) document.title = `${member.nombreCompleto} — Ruido de Mate`;
  }, [member]);
  if (!member) return <Navigate to="/" replace />;
  return (
    <>
      <Navbar />
      <main id="top" className="profile-page">
        <Link className="back-link mono" to="/nosotros">
          ← VOLVER AL EQUIPO
        </Link>
        <section className="profile-intro">
          <div>
            <span className="mono orange">[ {member.tagline} ]</span>
            <h1>{member.nombreCompleto}</h1>
            <h2>{member.rol}</h2>
            {member.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="profile-actions">
              <Link className="solid-button" to={`/portfolio/${member.id}`}>
                Ver trabajos ↗
              </Link>
              <a className="text-link" href={`mailto:${member.email}`}>
                Contacto ↗
              </a>
            </div>
          </div>
          <img
            src={member.portrait}
            alt={member.nombreCompleto}
            className={`profile-photo profile-photo--${member.id}`}
          />
        </section>
        <section className="profile-details">
          <div>
            <h2>Trayectoria</h2>
            <ul>
              {member.trayectoria.map((t, i) => (
                <li key={i}>
                  {t.puesto}
                  <span className="mono">{t.periodo}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Formación</h2>
            <ul>
              {[...member.estudios.izquierda, ...member.estudios.derecha].map(
                (t, i) => (
                  <li key={i}>
                    {t.texto}
                    <span className="mono">{t.periodo}</span>
                  </li>
                ),
              )}
            </ul>
            <h2>Herramientas</h2>
            <div className="project-tags">
              {member.herramientas.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h2>Idiomas</h2>
            <p>{member.idiomas.join(" · ")}</p>
            <div className="profile-social">
              {Object.entries(member.social)
                .filter(([key]) => key !== "mail")
                .map(([key, url]) => (
                  <a
                    className="text-link"
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {key} ↗
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
