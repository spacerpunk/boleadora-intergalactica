import { useEffect, useState } from "react";
import ProductClone from "./ProductClone.jsx";
import OptionChips from "./OptionChips.jsx";
import { CLONE_FLAVORS, CLONE_SCENES, CLONE_SHOTS } from "../../data/clone.js";

const SHOT_MS = 2000;
const sceneById = (id) => CLONE_SCENES.find((s) => s.id === id);

function CloneStage({ scene, flavor, frame = {}, trio, film, children }) {
  const { zoom = 1, x = 0, y = 0, rot = 0 } = frame;
  const clone = (f) => (
    <ProductClone
      key={f.id}
      flavor={f}
      rim={scene.rim}
      shadow={scene.shadow}
      droplets={scene.droplets}
    />
  );
  return (
    <div className={`clone-stage ${film ? "is-film" : ""}`}>
      <div className="clone-stage__camera">
        <div
          className="clone-stage__bg"
          style={{ background: scene.background }}
        />
        {scene.props === "neon" && <span className="clone-neon" />}
        <div
          className={`clone-stage__subject ${trio ? "is-trio" : ""}`}
          style={{
            transform: `translate(${x}%, ${y}%) scale(${zoom}) rotate(${rot}deg)`,
          }}
        >
          {trio ? CLONE_FLAVORS.map(clone) : clone(flavor)}
        </div>
        {scene.props === "ice" && (
          <>
            <span className="clone-ice clone-ice--a" />
            <span className="clone-ice clone-ice--b" />
            <span className="clone-ice clone-ice--c" />
          </>
        )}
      </div>
      {children}
    </div>
  );
}

export default function CloneDemo() {
  const [sceneId, setSceneId] = useState("estudio");
  const [flavorId, setFlavorId] = useState("original");
  const [shot, setShot] = useState(null); // shot index while the film plays
  const playing = shot !== null;

  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(
      () => setShot((i) => (i + 1 < CLONE_SHOTS.length ? i + 1 : null)),
      SHOT_MS,
    );
    return () => clearTimeout(timer);
  }, [shot, playing]);

  const flavor = CLONE_FLAVORS.find((f) => f.id === flavorId);
  const current = playing ? CLONE_SHOTS[shot] : null;
  const scene = sceneById(current ? current.scene : sceneId);

  return (
    <div className="clone-demo">
      <CloneStage
        key={playing ? `shot-${shot}` : "still"}
        scene={scene}
        flavor={flavor}
        frame={current?.frame}
        trio={current?.trio}
        film={playing}
      >
        {playing && (
          <span className="clone-tc mono" aria-hidden="true">
            ▶ {current.tc} / 00:10
          </span>
        )}
      </CloneStage>
      <div className="clone-demo__controls">
        <OptionChips
          label="Escena"
          items={CLONE_SCENES}
          value={playing ? null : sceneId}
          onChange={(id) => {
            setSceneId(id);
            setShot(null);
          }}
          swatch={(s) => s.background}
        />
        <OptionChips
          label="Sabor"
          items={CLONE_FLAVORS}
          value={flavorId}
          onChange={setFlavorId}
          swatch={(f) => f.body}
        />
        <button
          type="button"
          className="solid-button"
          aria-pressed={playing}
          onClick={() => setShot(playing ? null : 0)}
        >
          {playing ? "Detener" : "Ver el film"}
          <span aria-hidden="true">{playing ? "■" : "▶"}</span>
        </button>
      </div>
    </div>
  );
}
