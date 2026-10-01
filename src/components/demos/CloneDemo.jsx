import { useEffect, useRef, useState } from "react";
import { useMotion } from "../MotionProvider.jsx";
import OptionChips from "./OptionChips.jsx";
import { CLONE_PRODUCTS } from "../../data/clone.js";
import { useLanguage, L } from "../../i18n/LanguageContext.jsx";

// The product photo. On the hero shot, moving the pointer across it (or
// dragging on touch, or the arrow keys) turns the product through its
// turntable frames: left edge is the first angle, right edge the last.
function CloneStage({ product, scene }) {
  const { lang, t } = useLanguage();
  const alt = L(scene.alt, lang);
  const spin = scene === product.scenes[0] ? product.spin : [];
  const [armed, setArmed] = useState(false); // turntable frames mounted
  const [frame, setFrame] = useState(null); // turntable frame while turning

  const follow = (e) => {
    if (!spin.length) return;
    if (e.pointerType !== "mouse" && !e.buttons) return;
    const box = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - box.left) / box.width, 0), 0.999);
    setArmed(true);
    setFrame(Math.floor(ratio * spin.length));
  };
  const step = (e) => {
    if (!spin.length) return;
    const delta = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!delta) return;
    e.preventDefault();
    setFrame((f) => ((f ?? 0) + delta + spin.length) % spin.length);
  };

  const turning = frame !== null && spin.length > 0;
  return (
    <div
      className={`clone-stage ${spin.length ? "is-spinnable" : ""} ${turning ? "is-turning" : ""}`}
      {...(spin.length && {
        tabIndex: 0,
        role: "img",
        "aria-label": t("clone.spinAria", { alt }),
        onPointerEnter: follow,
        onPointerDown: follow,
        onPointerMove: follow,
        onPointerLeave: () => setFrame(null),
        onPointerUp: (e) => e.pointerType !== "mouse" && setFrame(null),
        onPointerCancel: () => setFrame(null),
        onFocus: () => setArmed(true),
        onKeyDown: step,
        onBlur: () => setFrame(null),
      })}
    >
      <img
        key={scene.id}
        className="clone-stage__still"
        src={scene.src}
        alt={spin.length ? "" : alt}
        draggable="false"
      />
      {armed && spin.length > 0 && (
        <div className="clone-stage__spin" aria-hidden="true">
          {spin.map((f, i) => (
            <img
              key={f.deg}
              className={i === frame ? "is-on" : ""}
              src={f.src}
              alt=""
              draggable="false"
            />
          ))}
        </div>
      )}
      {spin.length > 0 && (
        <span className="clone-stage__badge mono" aria-hidden="true">
          360° ·{" "}
          {turning ? (
            `${spin[frame].deg}°`
          ) : (
            <>
              <span className="hint-hover">{t("clone.hintHover")}</span>
              <span className="hint-touch">{t("clone.hintTouch")}</span>
            </>
          )}
        </span>
      )}
    </div>
  );
}

// A UGC clip shown large in the stage, with sound and player controls. The
// blurred poster fills the space the vertical video leaves around it.
function StageClip({ clip }) {
  const { lang, t } = useLanguage();
  return (
    <div className="clone-stage is-video">
      <img className="clone-stage__backdrop" src={clip.poster} alt="" />
      <video
        className="clone-stage__video"
        src={clip.src}
        poster={clip.poster}
        aria-label={t("clone.clipAria", { name: L(clip.name, lang) })}
        controls
        autoPlay
        playsInline
      />
    </div>
  );
}

// A UGC clip thumbnail. Plays muted while on screen; pressing it opens the
// clip large in the stage.
function UgcClip({ clip, active, onSelect }) {
  const { motion } = useMotion();
  const { lang, t } = useLanguage();
  const name = L(clip.name, lang);
  const video = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(video.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = video.current;
    if (visible && motion && !active) el.play().catch(() => {});
    else el.pause();
  }, [visible, motion, active]);

  return (
    <button
      type="button"
      className="ugc-clip"
      aria-pressed={active}
      aria-label={t("clone.viewLarge", { name })}
      onClick={onSelect}
    >
      <video
        ref={video}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <span className="mono">
        {active ? t("clone.onStage") : `▶ ${name}`}
      </span>
    </button>
  );
}

function ProductDemo({ product, picker }) {
  const { lang, t } = useLanguage();
  // What the stage shows: a scene or a UGC clip, by id.
  const [shownId, setShownId] = useState(product.scenes[0].id);
  const clip = product.ugc.find((c) => c.id === shownId);
  const scene = product.scenes.find((s) => s.id === shownId);

  return (
    <div className="clone-demo">
      {clip ? (
        <StageClip key={clip.id} clip={clip} />
      ) : (
        <CloneStage product={product} scene={scene} />
      )}
      <div className="clone-demo__controls">
        {picker}
        <div
          className="clone-scenes"
          role="group"
          aria-label={t("clone.setting")}
        >
          <span className="mono">{t("clone.setting")}</span>
          <div>
            {product.scenes.map((s) => (
              <button
                key={s.id}
                type="button"
                className="scene-pick"
                aria-pressed={s.id === shownId}
                onClick={() => setShownId(s.id)}
              >
                <img src={s.thumb} alt="" loading="lazy" />
                {L(s.name, lang)}
              </button>
            ))}
          </div>
        </div>
        {product.ugc.length > 0 && (
          <div
            className="clone-ugc"
            role="group"
            aria-label={t("clone.ugc")}
          >
            <span className="mono">{t("clone.ugc")}</span>
            <div>
              {product.ugc.map((c) => (
                <UgcClip
                  key={c.id}
                  clip={c}
                  active={c.id === shownId}
                  onSelect={() => setShownId(c.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Product picker on top of the selected product's demo. Switching product
// remounts the demo so it starts again from its hero shot.
export default function CloneDemo() {
  const { lang, t } = useLanguage();
  const [productId, setProductId] = useState(CLONE_PRODUCTS[0].id);
  const product = CLONE_PRODUCTS.find((p) => p.id === productId);

  return (
    <ProductDemo
      key={product.id}
      product={product}
      picker={
        <div className="clone-product">
          <OptionChips
            label={t("clone.product")}
            items={CLONE_PRODUCTS}
            value={productId}
            onChange={setProductId}
          />
          <p className="mono">{L(product.kind, lang)}</p>
        </div>
      }
    />
  );
}
