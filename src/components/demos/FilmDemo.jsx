import { useState } from "react";

const FILMS = [
  {
    id: "nasa",
    title: "NASA × Honda",
    frame: "/media/reel-poster.jpg",
    url: "https://www.youtube.com/watch?v=_F7XKzWlcxc",
  },
  {
    id: "toyota",
    title: "Toyota @ Team23",
    frame: "/imgs/projects/nico-toyota-team23.jpg",
    url: "https://www.youtube.com/watch?v=31N6t_bTIJI",
  },
];

// Raw frame vs. finished frame. The finish (grade, halation, grain,
// vignette, gate weave and scope) is simulated live with CSS.
export default function FilmDemo() {
  const [filmId, setFilmId] = useState(FILMS[0].id);
  const [split, setSplit] = useState(50);
  const film = FILMS.find((f) => f.id === filmId);

  return (
    <div className="film-demo">
      <div className="grade-frame" style={{ "--split": `${split}%` }}>
        <img
          className="grade-raw"
          src={film.frame}
          alt={`Fotograma de ${film.title}`}
        />
        <div className="grade-post" aria-hidden="true">
          <div className="grade-plate">
            <img src={film.frame} alt="" />
            <img className="grade-halation" src={film.frame} alt="" />
          </div>
          <span className="grade-tint" />
          <span className="grade-vignette" />
          <span className="grade-grain" />
          <span className="grade-bar grade-bar--top" />
          <span className="grade-bar grade-bar--bottom" />
        </div>
        <div className="grade-divider" aria-hidden="true">
          <span>↔</span>
        </div>
        <span className="grade-tag grade-tag--raw mono" aria-hidden="true">
          CRUDO
        </span>
        <span className="grade-tag grade-tag--post mono" aria-hidden="true">
          FINAL
        </span>
        <input
          className="grade-range"
          type="range"
          min="0"
          max="100"
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          aria-label="Comparar el fotograma crudo con el final"
        />
      </div>

      <ul className="film-picks">
        {FILMS.map((f) => (
          <li key={f.id}>
            <button
              type="button"
              aria-pressed={f.id === filmId}
              onClick={() => setFilmId(f.id)}
            >
              <img src={f.frame} alt="" loading="lazy" />
              <span>{f.title}</span>
            </button>
            <a className="mono" href={f.url} target="_blank" rel="noreferrer">
              VER FILM ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
