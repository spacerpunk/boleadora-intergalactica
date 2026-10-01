import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
export default function Profile() {
  const { id } = useParams();
  const member = getMember(id);
  const { lang, t } = useLanguage();
  useEffect(() => {
    if (member) document.title = `${member.nombreCompleto} — Ruido de Mate`;
  }, [member]);
  if (!member) return <Navigate to="/" replace />;
  return (
    <>
      <Navbar />
      <main id="top" className="profile-page">
        <Link className="back-link mono" to="/nosotros">
          {t("profile.back")}
        </Link>
        <section className="profile-intro">
          <div>
            <span className="mono orange">[ {L(member.tagline, lang)} ]</span>
            <h1>{member.nombreCompleto}</h1>
            <h2>{L(member.rol, lang)}</h2>
            {L(member.bio, lang).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="profile-actions">
              <Link className="solid-button" to={`/portfolio/${member.id}`}>
                {t("profile.viewWork")}
              </Link>
              <a className="text-link" href={`mailto:${member.email}`}>
                {t("profile.contact")}
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
            <h2>{t("profile.trayectoria")}</h2>
            <ul>
              {member.trayectoria.map((item, i) => (
                <li key={i}>
                  {L(item.puesto, lang)}
                  <span className="mono">{L(item.periodo, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t("profile.formacion")}</h2>
            <ul>
              {[...member.estudios.izquierda, ...member.estudios.derecha].map(
                (item, i) => (
                  <li key={i}>
                    {L(item.texto, lang)}
                    <span className="mono">{L(item.periodo, lang)}</span>
                  </li>
                ),
              )}
            </ul>
            <h2>{t("profile.herramientas")}</h2>
            <div className="project-tags">
              {member.herramientas.map((tool) => (
                <span key={L(tool, "es")}>{L(tool, lang)}</span>
              ))}
            </div>
            <h2>{t("profile.idiomas")}</h2>
            <p>{member.idiomas.map((i) => L(i, lang)).join(" · ")}</p>
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
