import { useScrollScene } from "../hooks/useScrollScene.js";
import SignalSculpture from "./SignalSculpture.jsx";

function SceneArtwork({ type }) {
  if (type === "postproduccion")
    return (
      <div className="post-art" aria-hidden="true">
        <div className="art-orbit" />
        <SignalSculpture />
        <div className="floating-frame frame-a">
          <img src="/imgs/projects/nico-nasaxhonda.jpg" alt="" loading="lazy" />
          <span className="mono">VFX / FRAME_024</span>
        </div>
        <div className="floating-frame frame-b">
          <img src="/imgs/projects/nico-dove.jpg" alt="" loading="lazy" />
          <span className="mono">3D / TAKE_003</span>
        </div>
        <div className="sound-strip">
          {Array.from({ length: 44 }, (_, i) => (
            <i
              key={i}
              style={{
                "--bar": `${10 + Math.abs(Math.sin(i * 2.3)) * 33}px`,
                "--delay": `${i * -0.08}s`,
              }}
            />
          ))}
        </div>
        <span className="art-cross cross-a">+</span>
        <span className="art-cross cross-b">+</span>
      </div>
    );
  if (type === "creatividad")
    return (
      <div className="idea-art" aria-hidden="true">
        <div className="idea-star">✳</div>
        <div className="storyboard board-back">
          <span className="mono">01 / EL CONCEPTO</span>
          <div className="concept-scribble">
            ¿Y
            <br />
            SI…?
          </div>
          <span className="mono">NADA GRANDE EMPIEZA OBVIO.</span>
        </div>
        <div className="storyboard board-front">
          <div className="board-meta mono">
            <span>02 / LA HISTORIA</span>
            <span>↗</span>
          </div>
          <img
            src="/imgs/projects/nico-toyota-team23.jpg"
            alt=""
            loading="lazy"
          />
          <div className="board-line" />
          <div className="board-line short" />
          <span className="mono">DE LA IDEA AL PRIMER FRAME.</span>
        </div>
        <svg className="idea-path" viewBox="0 0 500 500">
          <path d="M30 390 C100 410 80 200 210 300 S430 420 455 150 M426 176 L455 150 L470 184" />
        </svg>
      </div>
    );
  return (
    <div className="ai-art" aria-hidden="true">
      <SignalSculpture variant="signal" />
      <div className="pipeline-console mono">
        <div className="console-head">
          <span>rdm / production lab</span>
          <span>↗</span>
        </div>
        <div className="console-tree">
          <span>tu próxima idea</span>
          <span>├─ dirección creativa</span>
          <span>├─ herramientas a medida</span>
          <span>│&nbsp; ├─ imagen + video</span>
          <span>│&nbsp; └─ automatización</span>
          <span>
            └─ <b>nuevas posibilidades ↗</b>
          </span>
        </div>
        <div className="console-status">
          <i /> HUMAN IN THE LOOP
        </div>
      </div>
      <span className="node-tag node-input mono">[ TU DESAFÍO ]</span>
      <span className="node-tag node-output mono">[ HECHO A MEDIDA ]</span>
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
            <span className="art-watermark">{service.short}</span>
            <SceneArtwork type={service.id} />
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
