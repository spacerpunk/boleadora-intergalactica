import { Link } from "react-router-dom";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";
export default function TeamCard({ member }) {
  const { lang, t } = useLanguage();
  return (
    <Link
      className={`team-card team-card--${member.id}`}
      to={`/profile/${member.id}`}
    >
      <div className="team-card__media">
        <img
          className="portrait-original"
          src={member.portrait}
          alt={t("team.portraitAlt", { name: member.nombreCompleto })}
          loading="lazy"
        />
        <img
          className="portrait-alternate"
          src={`/imgs/alter-egos/${member.id}.webp`}
          alt=""
          loading="lazy"
        />
        <span className="portrait-label mono">
          {t("team.human")} <span>{t("team.alter")}</span>
        </span>
        <span className="portrait-arrow">↗</span>
      </div>
      <div className="team-card__body">
        <span className="mono">{L(member.tagline, lang)}</span>
        <h3>{member.nombreCompleto}</h3>
        <p>{L(member.rol, lang)}</p>
      </div>
    </Link>
  );
}
