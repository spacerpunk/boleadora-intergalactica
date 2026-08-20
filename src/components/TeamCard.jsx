import { Link } from "react-router-dom";

export default function TeamCard({ member }) {
  return (
    <Link
      className="team-card reveal"
      to={`/profile/${member.id}`}
      style={{ "--accent": member.accent }}
    >
      <div className="team-card__media">
        <img
          src={member.portrait}
          alt={`Retrato de ${member.nombreCompleto}`}
        />
      </div>
      <div className="team-card__body">
        <span className="team-card__tag">{member.tagline}</span>
        <h3 className="team-card__name">{member.nombre}</h3>
        <p className="team-card__role">{member.rol}</p>
        <span className="team-card__cta">Ver perfil →</span>
      </div>
    </Link>
  );
}
