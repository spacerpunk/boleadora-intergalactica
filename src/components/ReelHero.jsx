import { useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionProvider.jsx";
import Dialog from "./Dialog.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ReelHero() {
  const video = useRef(null);
  const { motion } = useMotion();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = video.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && motion && !paused && !open)
        el.play().catch(() => setPaused(true));
      else el.pause();
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.pause();
    };
  }, [motion, paused, open]);
  return (
    <>
      <section className="reel-hero" aria-labelledby="hero-title">
        <div className="hero-film">
          <video
            ref={video}
            src="/media/studio-reel.mp4"
            poster="/media/reel-poster.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            aria-hidden="true"
          />
          {failed && <img src="/media/reel-poster.jpg" alt="" />}
        </div>
        <div className="hero-shade" />
        <div className="hero-topline mono">
          <span>
            <i className="status-dot" /> AI ADVERTISING STUDIO
          </span>
          <span>{t("hero.tagline")}</span>
        </div>
        <div className="hero-center">
          <button
            className="reel-open"
            onClick={() => setOpen(true)}
            aria-label={t("hero.reelAria")}
          >
            <span>↗</span>
            <span className="mono">
              {t("hero.reel")}
              <br />
              00:18
            </span>
          </button>
        </div>
        <div className="hero-message">
          <div className="hero-eyebrow mono">
            {t("hero.eyebrow")}
          </div>
          <h1 id="hero-title">
            {t("hero.title1")}
            <br />
            <span>{t("hero.title2")}</span>
          </h1>
          <div className="hero-description">
            <p>
              {t("hero.text1")}
              <br />
              {t("hero.text2")}
            </p>
            <a
              className="hero-down"
              href="#manifiesto"
              aria-label={t("hero.downAria")}
            >
              ↓
            </a>
          </div>
        </div>
        <div className="hero-bottom mono">
          <span>RUIDO DE MATE® — AI ADVERTISING, BUENOS AIRES</span>
          <span className="hero-edition">SELECTED CUTS / 2026</span>
          <button
            onClick={() => setPaused(!paused)}
            disabled={!motion || failed}
            aria-label={t(
              !motion
                ? "hero.videoStopped"
                : paused
                  ? "hero.videoPlay"
                  : "hero.videoPause",
            )}
          >
            {t(!motion ? "hero.stopped" : paused ? "hero.play" : "hero.pause")}
          </button>
        </div>
      </section>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        label={t("hero.reelLabel")}
        className="reel-dialog"
      >
        <video
          controls
          autoPlay
          playsInline
          src="/media/studio-reel.mp4"
          poster="/media/reel-poster.jpg"
        />
        <p className="mono">
          {t("hero.reelCaption")}
        </p>
      </Dialog>
    </>
  );
}
