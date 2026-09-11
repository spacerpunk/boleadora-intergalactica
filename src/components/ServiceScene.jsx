import { useScrollScene } from "../hooks/useScrollScene.js";

function SceneArtwork({ service }) {
  const [back, front] = service.art || [];
  return (
    <div className="art-stack" aria-hidden="true">
      <figure className="art-frame art-frame--back">
        <img src={back} alt="" loading="lazy" />
      </figure>
      <figure className="art-frame art-frame--front">
        <img src={front} alt="" loading="lazy" />
        <figcaption className="mono">
          {service.short} / {service.number}
        </figcaption>
      </figure>
      <span className="art-mark">✳</span>
    </div>
  );
}

export default function ServiceScene({ service, onContact }) {
  const ref = useScrollScene();
  return (
    <section
      id={service.id}
      className={`service-scene scene-${service.id}`}
      ref={ref}
      aria-labelledby={`${service.id}-title`}
    >
      <div className="scene-sticky">
        <div className="scene-top mono">
          <span>0{Number(service.number)} / LO QUE HACEMOS</span>
          <span>{service.note}</span>
          <span>[ RDM® ]</span>
        </div>
        <div className="scene-grid">
          <div className="service-copy">
            <span className="service-label">
              <i />
              {service.label}
            </span>
            <h3 id={`${service.id}-title`}>
              {service.title[0]}
              <br />
              <span>{service.title[1]}</span>
            </h3>
            <p>{service.description}</p>
            <ul className="disciplines">
              {service.disciplines.map((text, i) => (
                <li key={text}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {text}
                </li>
              ))}
            </ul>
            <button
              className="text-link"
              onClick={() => onContact(service.form)}
            >
              {service.cta}
              <span>↗</span>
            </button>
          </div>
          <div className="service-art">
            <SceneArtwork service={service} />
            <div className="art-caption mono">
              <span>EXPERIMENTAR ES PARTE DEL PROCESO.</span>
              <span>↙ ↗</span>
            </div>
          </div>
        </div>
        <div className="scene-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
