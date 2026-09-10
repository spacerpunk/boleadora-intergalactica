import { Link } from "react-router-dom";
export default function TeamCard({ member }) {
  return (
    <Link
      className={`team-card team-card--${member.id}`}
      to={`/profile/${member.id}`}
    >
      <div className="team-card__media">
        <img
          className="portrait-original"
          src={member.portrait}
          alt={`Retrato de ${member.nombreCompleto}`}
          loading="lazy"
        />
        <img
          className="portrait-alternate"
          src={`/imgs/alter-egos/${member.id}.webp`}
          alt=""
          loading="lazy"
        />
        <span className="portrait-label mono">
          HUMANO / <span>ALTER EGO IA</span>
        </span>
        <span className="portrait-arrow">↗</span>
      </div>
      <div className="team-card__body">
        <span className="mono">{member.tagline}</span>
        <h3>{member.nombreCompleto}</h3>
        <p>{member.rol}</p>
      </div>
    </Link>
  );
}
