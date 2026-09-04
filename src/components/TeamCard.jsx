import { Link } from "react-router-dom";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";

export default function TeamCard({ member }) {
  const { lang, t } = useLanguage();
  return (
    <Link
      className="team-card reveal"
      to={`/profile/${member.id}`}
      style={{ "--accent": member.accent }}
    >
      <div className="team-card__media">
        <img
          src={member.portrait}
          alt={t("profile.portraitAlt", { name: member.nombreCompleto })}
        />
      </div>
      <div className="team-card__body">
        <span className="team-card__tag">{L(member.tagline, lang)}</span>
        <h3 className="team-card__name">{member.nombre}</h3>
        <p className="team-card__role">{L(member.rol, lang)}</p>
        <span className="team-card__cta">{t("team.viewProfile")}</span>
      </div>
    </Link>
  );
}
