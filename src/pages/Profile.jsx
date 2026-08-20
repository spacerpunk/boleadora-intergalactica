import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getMember } from "../data/team.js";
import { STUDIO } from "../config.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ToolBubble from "../components/ToolBubble.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Profile() {
  const { id } = useParams();
  const member = getMember(id);

  useReveal(id);

  useEffect(() => {
    if (member) {
      document.title = `${member.nombreCompleto} — ${STUDIO.nombre}`;
    }
  }, [member]);

  if (!member) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar
        nav={[
          { label: "Equipo", href: "/#equipo" },
          { label: "Portfolio", to: `/portfolio/${member.id}`, muted: true },
        ]}
        social={member.social}
      />

      <main>
        <div id="main" className="section">
          <div id="main__text">
            <h1 className="reveal">{member.saludo}</h1>
            <p className="paragraph reveal">
              {member.rol}.
              <br />
              <br />
              {member.bio.map((para, i) => (
                <span key={i}>
                  {para}
                  {i < member.bio.length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
          <div id="main__hero" className="reveal">
            <img
              src={member.portrait}
              alt={`Retrato de ${member.nombreCompleto}`}
              id="main__hero__img"
            />
          </div>
        </div>

        <div id="trayectoria-laboral" className="section">
          <h2 className="reveal">Trayectoria Laboral</h2>
          <ul>
            {member.trayectoria.map((item, i) => (
              <li className="reveal" key={i}>
                {item.puesto}
                <span>{item.periodo}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="estudios" className="section">
          <h2 className="reveal">Estudios y Certificaciones</h2>
          <div id="estudios__sections">
            <div className="estudios__section text-align-right">
              <ul>
                {member.estudios.izquierda.map((item, i) => (
                  <li className="reveal" key={i}>
                    {item.texto}
                    <span>{item.periodo}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="estudios__section text-align-left">
              <ul>
                {member.estudios.derecha.map((item, i) => (
                  <li className="reveal" key={i}>
                    {item.texto}
                    <span>{item.periodo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="tecnologias" className="section">
          <h2 className="reveal">Herramientas / Tecnologías</h2>
          <div id="tools">
            {member.herramientas.map((name) => (
              <ToolBubble key={name} name={name} />
            ))}
          </div>
        </div>

        <div id="idioma" className="section">
          <h2 className="reveal">Idiomas</h2>
          <ul>
            {member.idiomas.map((idioma, i) => (
              <li className="reveal" key={i}>
                {idioma}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer name={`${member.nombreCompleto}®`} />
    </>
  );
}
