import CloneDemo from "./demos/CloneDemo.jsx";
import FilmDemo from "./demos/FilmDemo.jsx";
import UgcDemo from "./demos/UgcDemo.jsx";

const DEMOS = {
  "contenido-sintetico": CloneDemo,
  "films-ia": FilmDemo,
  "ugc-agentes": UgcDemo,
};

// One pillar on the home page: its name, a one-line promise and its demo.
export default function PillarSection({ service, total, onContact }) {
  const Demo = DEMOS[service.id];
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
        <h2 id={`${service.id}-title`}>{service.label}</h2>
        <p>
          {service.title[0]} <span>{service.title[1]}</span>
        </p>
        <button
          type="button"
          className="text-link"
          onClick={() => onContact(service.form)}
        >
          {service.cta}
          <span>↗</span>
        </button>
      </header>
      <Demo />
    </section>
  );
}
