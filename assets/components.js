// Shared UI builders. Relies on globals from assets/_svg-lib.js:
//   LOGO_SVG, WORDMARK_SVG, SOCIAL_ICONS, TOOL_ICONS

const STUDIO = {
  nombre: "Boleadora Intergaláctica",
  copyright: "Boleadora Intergaláctica®",
  social: { behance: "#", linkedin: "#", dribbble: "#", mail: "mailto:hola@boleadora.studio" },
};

function socialLinks(social) {
  const s = social || STUDIO.social;
  return Object.keys(SOCIAL_ICONS)
    .map((key) => {
      const href = s[key] || "#";
      const external = href.startsWith("http");
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="navbar__rrss__icon" href="${href}"${attrs} aria-label="${key}">${SOCIAL_ICONS[key]}</a>`;
    })
    .join("\n");
}

/**
 * Build the navbar markup.
 * @param {Object} opts
 * @param {Array<{label:string, href:string, muted?:boolean}>} opts.nav
 * @param {Object} opts.social  map of social keys -> href
 */
function buildNavbar(opts = {}) {
  const nav = opts.nav || [
    { label: "Equipo", href: "index.html#equipo" },
    { label: "Contacto", href: "index.html#contacto", muted: true },
  ];
  const items = nav
    .map(
      (n) =>
        `<li${n.muted ? ' class="muted"' : ""}><a href="${n.href}">${n.label}</a></li>`
    )
    .join("\n");

  return `
    <div id="navbar">
      <ul id="navbar__navigation">
        ${items}
      </ul>
      <a id="navbar__logo" href="index.html" aria-label="Inicio">
        ${LOGO_SVG}
      </a>
      <div id="navbar__rrss">
        ${socialLinks(opts.social)}
      </div>
    </div>`;
}

/**
 * Build the footer markup.
 * @param {Object} opts
 * @param {string} opts.name  name shown in the copyright line
 */
function buildFooter(opts = {}) {
  const name = opts.name || STUDIO.copyright;
  const year = new Date().getFullYear();
  return `
    <footer>
      <div class="footer__separator"></div>
      <div class="footer__section">
        <p>
          2024 – ${year} | ${name}
          <br />
          TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div id="footer__logo">
          ${WORDMARK_SVG}
        </div>
      </div>
    </footer>`;
}

// Mount navbar + footer into their placeholder elements if present.
function mountChrome(opts = {}) {
  const navHost = document.getElementById("nav-root");
  const footHost = document.getElementById("footer-root");
  if (navHost) navHost.innerHTML = buildNavbar(opts.navbar);
  if (footHost) footHost.innerHTML = buildFooter(opts.footer);
}
