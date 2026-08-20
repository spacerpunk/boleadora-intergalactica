// Renders a member's portfolio page. Project data is a work in progress —
// for now this shows a tidy placeholder grid so the section is navigable.

function getMemberIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("member") || "benja";
}

function placeholderGrid(count) {
  let cells = "";
  for (let i = 0; i < count; i++) {
    cells += `<div class="portfolio-cell reveal"></div>`;
  }
  return cells;
}

function renderPortfolio(member) {
  return `
    <section id="portfolio" class="section">
      <div id="portfolio__head">
        <span class="hero__eyebrow reveal">Portfolio</span>
        <h1 class="reveal">Trabajos de ${member.nombre}</h1>
        <p class="paragraph reveal">
          Selección de proyectos en camino. Muy pronto vas a poder ver acá las
          piezas de ${member.nombreCompleto}.
        </p>
        <a class="contact-btn reveal" href="profile.html?member=${member.id}">← Volver al perfil</a>
      </div>
      <div id="portfolio-grid">
        ${placeholderGrid(9)}
      </div>
    </section>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const member = getMember(getMemberIdFromUrl());
  if (!member) {
    window.location.replace("index.html");
    return;
  }

  document.title = `Portfolio de ${member.nombreCompleto} — ${STUDIO.nombre}`;

  mountChrome({
    navbar: {
      nav: [
        { label: "Equipo", href: "index.html#equipo" },
        { label: "Perfil", href: `profile.html?member=${member.id}`, muted: true },
      ],
      social: member.social,
    },
    footer: { name: `${member.nombreCompleto}®` },
  });

  document.getElementById("app").innerHTML = renderPortfolio(member);
  initReveal();
});
