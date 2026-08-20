// Renders the studio home page: hero + team grid.

function memberCard(member) {
  return `
    <a class="team-card reveal" href="profile.html?member=${member.id}" style="--accent:${member.accent}">
      <div class="team-card__media">
        <img src="${member.portrait}" alt="Retrato de ${member.nombreCompleto}" />
      </div>
      <div class="team-card__body">
        <span class="team-card__tag">${member.tagline}</span>
        <h3 class="team-card__name">${member.nombre}</h3>
        <p class="team-card__role">${member.rol}</p>
        <span class="team-card__cta">Ver perfil →</span>
      </div>
    </a>`;
}

function renderHome() {
  const cards = TEAM.map(memberCard).join("\n");

  return `
    <header id="hero" class="section">
      <div id="hero__text">
        <span class="hero__eyebrow reveal">Postproducción &amp; Creatividad</span>
        <h1 class="reveal">${STUDIO.nombre}</h1>
        <p class="paragraph reveal">
          Somos un equipo de postproductores y creativos. Diseño, edición,
          dirección de arte y VFX bajo un mismo techo — de la idea a la pieza final.
        </p>
      </div>
    </header>

    <section id="equipo" class="section">
      <h2 class="reveal">El equipo</h2>
      <div id="team-grid">
        ${cards}
      </div>
    </section>

    <section id="contacto" class="section">
      <h2 class="reveal">Trabajemos juntos</h2>
      <p class="paragraph reveal">
        ¿Tenés un proyecto en mente? Escribinos y contanos de qué se trata.
      </p>
      <a class="contact-btn reveal" href="${STUDIO.social.mail}">${STUDIO.social.mail.replace("mailto:", "")}</a>
    </section>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${STUDIO.nombre} — Postproducción & Creatividad`;

  mountChrome({
    navbar: {
      nav: [
        { label: "Equipo", href: "#equipo" },
        { label: "Contacto", href: "#contacto", muted: true },
      ],
      social: STUDIO.social,
    },
    footer: { name: STUDIO.copyright },
  });

  document.getElementById("app").innerHTML = renderHome();

  initReveal();
});
