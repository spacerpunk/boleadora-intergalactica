import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMember } from "../data/team.js";
import { STUDIO } from "../config.js";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ToolBubble from "../components/ToolBubble.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Profile() {
  const { lang, t } = useLanguage();
  const { id } = useParams();
  const member = getMember(id);

  useReveal(id);

  useEffect(() => {
    if (member) {
      document.title = `${member.nombreCompleto} — ${STUDIO.nombre}`;
    }
  }, [member]);

  if (!member) return <Navigate to="/" replace />;

  const bio = L(member.bio, lang);

  return (
    <>
      <Navbar
        nav={[
          { label: t("nav.equipo"), href: "/#equipo" },
          { label: t("nav.portfolio"), to: "/portfolio", muted: true },
        ]}
        social={member.social}
      />

      <main>
        <div id="main" className="section">
          <div id="main__text">
            <h1 className="reveal">{L(member.saludo, lang)}</h1>
            <p className="paragraph reveal">
              {L(member.rol, lang)}.
              <br />
              <br />
              {bio.map((para, i) => (
                <span key={i}>
                  {para}
                  {i < bio.length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>
            <Link
              className="contact-btn reveal"
              to={`/portfolio/${member.id}`}
            >
              {t("profile.viewPortfolio", { name: member.nombre })}
            </Link>
          </div>
          <div id="main__hero" className="reveal">
            <img
              src={member.portrait}
              alt={t("profile.portraitAlt", { name: member.nombreCompleto })}
              id="main__hero__img"
            />
          </div>
        </div>

        <div id="trayectoria-laboral" className="section">
          <h2 className="reveal">{t("profile.trayectoria")}</h2>
          <ul>
            {member.trayectoria.map((item, i) => (
              <li className="reveal" key={i}>
                {L(item.puesto, lang)}
                <span>{L(item.periodo, lang)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="estudios" className="section">
          <h2 className="reveal">{t("profile.estudios")}</h2>
          <div id="estudios__sections">
            <div className="estudios__section text-align-right">
              <ul>
                {member.estudios.izquierda.map((item, i) => (
                  <li className="reveal" key={i}>
                    {L(item.texto, lang)}
                    <span>{L(item.periodo, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="estudios__section text-align-left">
              <ul>
                {member.estudios.derecha.map((item, i) => (
                  <li className="reveal" key={i}>
                    {L(item.texto, lang)}
                    <span>{L(item.periodo, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="tecnologias" className="section">
          <h2 className="reveal">{t("profile.herramientas")}</h2>
          <div id="tools">
            {member.herramientas.map((name) => (
              <ToolBubble key={name} name={name} />
            ))}
          </div>
        </div>

        <div id="idioma" className="section">
          <h2 className="reveal">{t("profile.idiomas")}</h2>
          <ul>
            {member.idiomas.map((idioma, i) => (
              <li className="reveal" key={i}>
                {L(idioma, lang)}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer name={`${member.nombreCompleto}®`} />
    </>
  );
}
