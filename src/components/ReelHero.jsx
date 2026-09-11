import { useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionProvider.jsx";
import Dialog from "./Dialog.jsx";

export default function ReelHero() {
  const video = useRef(null);
  const { motion } = useMotion();
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
            <i className="status-dot" /> INDEPENDENT CREATIVE STUDIO
          </span>
          <span>IDEAS QUE SE VEN. RUIDO QUE SE SIENTE.</span>
        </div>
        <div className="hero-center">
          <button
            className="reel-open"
            onClick={() => setOpen(true)}
            aria-label="Ver reel del estudio"
          >
            <span>↗</span>
            <span className="mono">
              VER REEL
              <br />
              00:18
            </span>
          </button>
        </div>
        <div className="hero-message">
          <div className="hero-eyebrow mono">
            POSTPRODUCCIÓN / CREATIVIDAD / AI SOLUTIONS
          </div>
          <h1 id="hero-title">
            BUENAS IDEAS.
            <br />
            <span>MUCHO RUIDO.</span>
          </h1>
          <div className="hero-description">
            <p>
              Hacemos que tu próxima idea
              <br />
              se vea, se escuche y se sienta.
            </p>
            <a
              className="hero-down"
              href="#servicios"
              aria-label="Explorar nuestros servicios"
            >
              ↓
            </a>
          </div>
        </div>
        <div className="hero-bottom mono">
          <span>RUIDO DE MATE® — BUENOS AIRES, ARG.</span>
          <span className="hero-edition">SELECTED CUTS / 2026</span>
          <button
            onClick={() => setPaused(!paused)}
            disabled={!motion || failed}
            aria-label={
              !motion
                ? "Video pausado con las animaciones"
                : paused
                  ? "Reproducir video de fondo"
                  : "Pausar video de fondo"
            }
          >
            {!motion ? "Ⅱ EN PAUSA" : paused ? "▷ REPRODUCIR" : "Ⅱ PAUSAR"}
          </button>
        </div>
      </section>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        label="Reel de Ruido de Mate"
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
          RUIDO DE MATE / SELECTED CUTS — EDICIÓN VISUAL, SIN AUDIO
        </p>
      </Dialog>
    </>
  );
}
