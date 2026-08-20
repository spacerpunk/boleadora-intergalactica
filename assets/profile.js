// Renders an individual profile page from TEAM data based on ?member=<id>.

function getMemberIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("member") || "benja";
}

function toolBubble(name) {
  const icon = TOOL_ICONS[name] || "";
  return `<div class="tool-bubble reveal">${icon}<p>${name}</p></div>`;
}

function trayectoriaItem(item) {
  return `<li class="reveal">${item.puesto}<span>${item.periodo}</span></li>`;
}

function estudioItem(item) {
  return `<li class="reveal">${item.texto}<span>${item.periodo}</span></li>`;
}

function renderProfile(member) {
  const bioHtml = member.bio.join("<br /><br />");

  const trayectoria = member.trayectoria.map(trayectoriaItem).join("\n");
  const estIzq = member.estudios.izquierda.map(estudioItem).join("\n");
  const estDer = member.estudios.derecha.map(estudioItem).join("\n");
  const tools = member.herramientas.map(toolBubble).join("\n");
  const idiomas = member.idiomas
    .map((i) => `<li class="reveal">${i}</li>`)
    .join("\n");

  return `
    <div id="main" class="section">
      <div id="main__text">
        <h1 class="reveal">${member.saludo}</h1>
        <p class="paragraph reveal">
          ${member.rol}.
          <br /><br />
          ${bioHtml}
        </p>
      </div>
      <div id="main__hero" class="reveal">
        <img src="${member.portrait}" alt="Retrato de ${member.nombreCompleto}" id="main__hero__img" />
      </div>
    </div>

    <div id="trayectoria-laboral" class="section">
      <h2 class="reveal">Trayectoria Laboral</h2>
      <ul>
        ${trayectoria}
      </ul>
    </div>

    <div id="estudios" class="section">
      <h2 class="reveal">Estudios y Certificaciones</h2>
      <div id="estudios__sections">
        <div class="estudios__section text-align-right">
          <ul>
            ${estIzq}
          </ul>
        </div>
        <div class="estudios__section text-align-left">
          <ul>
            ${estDer}
          </ul>
        </div>
      </div>
    </div>

    <div id="tecnologias" class="section">
      <h2 class="reveal">Herramientas / Tecnologías</h2>
      <div id="tools">
        ${tools}
      </div>
    </div>

    <div id="idioma" class="section">
      <h2 class="reveal">Idiomas</h2>
      <ul>
        ${idiomas}
      </ul>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getMemberIdFromUrl();
  const member = getMember(id);

  if (!member) {
    window.location.replace("index.html");
    return;
  }

  document.title = `${member.nombreCompleto} — ${STUDIO.nombre}`;

  // Chrome (navbar + footer) tailored to this member.
  mountChrome({
    navbar: {
      nav: [
        { label: "Equipo", href: "index.html#equipo" },
        { label: "Portfolio", href: `portfolio.html?member=${member.id}`, muted: true },
      ],
      social: member.social,
    },
    footer: { name: `${member.nombreCompleto}®` },
  });

  document.getElementById("app").innerHTML = renderProfile(member);

  initReveal();
});
