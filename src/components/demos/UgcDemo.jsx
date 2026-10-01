import { useEffect, useMemo, useState } from "react";
import { useMotion } from "../MotionProvider.jsx";
import OptionChips from "./OptionChips.jsx";
import { UGC_ACTIONS, UGC_MODELS, buildPost } from "../../data/ugc.js";
import { useLanguage, L } from "../../i18n/LanguageContext.jsx";

const RENDER_MS = 1100;

// Synthetic creator visual: real media when the team adds it, otherwise a
// casting card built from the creator's palette.
function CreatorVisual({ model, clip }) {
  if (clip)
    return (
      <video
        className="creator-visual"
        src={clip}
        muted
        loop
        autoPlay
        playsInline
      />
    );
  if (model.portrait)
    return <img className="creator-visual" src={model.portrait} alt="" />;
  return (
    <div
      className="creator-visual creator-card"
      style={{ "--c1": model.colors[0], "--c2": model.colors[1] }}
    />
  );
}

export default function UgcDemo() {
  const { motion } = useMotion();
  const { lang, t } = useLanguage();
  const [modelId, setModelId] = useState(UGC_MODELS[0].id);
  const [actionId, setActionId] = useState(UGC_ACTIONS[0].id);
  const model = UGC_MODELS.find((m) => m.id === modelId);
  const action = UGC_ACTIONS.find((a) => a.id === actionId);
  const post = useMemo(
    () => buildPost(model, action, lang),
    [model, action, lang],
  );
  const actions = UGC_ACTIONS.map((a) => ({ id: a.id, name: L(a.label, lang) }));

  // A short "generating" pass whenever the combination changes.
  const combo = `${modelId}/${actionId}`;
  const [shown, setShown] = useState(combo);
  const rendering = motion && shown !== combo;
  useEffect(() => {
    if (shown === combo) return;
    if (!motion) {
      setShown(combo);
      return;
    }
    const timer = setTimeout(() => setShown(combo), RENDER_MS);
    return () => clearTimeout(timer);
  }, [combo, shown, motion]);

  return (
    <div className="ugc-demo">
      <div className="ugc-pickers">
        <div className="ugc-models" role="group" aria-label={t("ugc.model")}>
          <span className="mono">{t("ugc.model")}</span>
          <div>
            {UGC_MODELS.map((m) => (
              <button
                key={m.id}
                type="button"
                className="model-pick"
                aria-pressed={m.id === modelId}
                onClick={() => setModelId(m.id)}
              >
                <CreatorVisual model={m} />
                <span>
                  <strong>{m.name}</strong>
                  <small className="mono">{L(m.niche, lang)}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
        <OptionChips
          label={t("ugc.action")}
          items={actions}
          value={actionId}
          onChange={setActionId}
        />
      </div>

      <div
        className={`ugc-phone ${rendering ? "is-rendering" : "is-ready"}`}
        style={{ "--dur": `${action.duration}s` }}
        aria-live="polite"
      >
        <div className="ugc-phone__screen">
          <CreatorVisual model={model} clip={post.clip} />
          <div className="ugc-phone__scan" aria-hidden="true" />
          <div className="ugc-phone__ui">
            <div className="ugc-phone__progress">
              <span key={`${combo}-${rendering}`} />
            </div>
            <div className="ugc-phone__top">
              <i style={{ background: model.colors[1] }}>{model.name[0]}</i>
              <span>
                <strong>{model.handle}</strong>
                <small>{t("ugc.paid")}</small>
              </span>
            </div>
            <p className="ugc-phone__hook">
              <span>{post.hook}</span>
            </p>
            <div className="ugc-phone__rail" aria-hidden="true">
              <span>♥</span>
              <span>✎</span>
              <span>↗</span>
            </div>
            <div className="ugc-phone__caption">
              <strong>{model.handle}</strong>
              <p>{post.caption}</p>
              <p className="ugc-phone__tags">{post.hashtags.join(" ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
