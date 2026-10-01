import CloneDemo from "./demos/CloneDemo.jsx";
import FilmDemo from "./demos/FilmDemo.jsx";
import UgcDemo from "./demos/UgcDemo.jsx";
import { useLanguage, L } from "../i18n/LanguageContext.jsx";

const DEMOS = {
  "contenido-sintetico": CloneDemo,
  "films-ia": FilmDemo,
  "ugc-agentes": UgcDemo,
};

// One pillar on the home page: its name, a one-line promise and its demo.
// `onContact` gets the service id, which preselects it in the contact form.
export default function PillarSection({ service, total, onContact }) {
  const { lang } = useLanguage();
  const Demo = DEMOS[service.id];
  const [promise, rest] = L(service.title, lang);
  return (
    <section
      id={service.id}
      className={`pillar pillar--${service.id}`}
      aria-labelledby={`${service.id}-title`}
    >
      <header className="pillar-head">
        <span className="mono">
          {service.number} / {String(total).padStart(2, "0")}
        </span>
        <h2 id={`${service.id}-title`}>{L(service.label, lang)}</h2>
        <p>
          {promise} <span>{rest}</span>
        </p>
        <button
          type="button"
          className="text-link"
          onClick={() => onContact(service.id)}
        >
          {L(service.cta, lang)}
          <span>↗</span>
        </button>
      </header>
      <Demo />
    </section>
  );
}
