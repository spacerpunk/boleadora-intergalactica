# Boleadora Intergaláctica

Portfolio web de un equipo de postproductores y creativos. Sitio estático,
sin build step: HTML + CSS + JavaScript vanilla.

## Estructura

```
index.html            Home — hero del estudio + grilla del equipo
profile.html          Plantilla de perfil (lee ?member=<id>)
portfolio.html        Portfolio por integrante (?member=<id>) — WIP
styles.css            Estilos
script.js             Reveal on scroll (RevealOnScroll + initReveal)
data/
  team.js             ⭐ Datos del equipo — editá acá los perfiles
assets/
  _svg-lib.js         Artwork SVG (logo, íconos sociales, íconos de tools)
  components.js       Navbar + footer compartidos (buildNavbar/buildFooter)
  home.js             Render del home
  profile.js          Render de un perfil
  portfolio.js        Render del portfolio
imgs/                 Retratos e imágenes de proyectos
```

## Integrantes

Benja, Nico, Palo y Ceci. Cada uno tiene su perfil en
`profile.html?member=<id>` (`benja`, `nico`, `palo`, `ceci`).

## Cómo editar

- **Contenido de un perfil** (bio, trayectoria, estudios, herramientas,
  idiomas, redes, retrato): editá el objeto correspondiente en
  [`data/team.js`](data/team.js). Todo el HTML se genera desde ahí.
- **Retratos**: los de Nico, Palo y Ceci son placeholders SVG en `imgs/`.
  Reemplazalos por fotos reales y actualizá la ruta `portrait` en `team.js`.
- **Íconos de herramientas**: si una tool no tiene ícono se muestra como
  pill de texto. Para agregar un ícono, sumalo a `TOOL_ICONS` en
  `assets/_svg-lib.js` con el mismo nombre que usás en `team.js`.
- **Redes del estudio / contacto**: `STUDIO` en `assets/components.js`.

## Correr localmente

Al usar `fetch`-free rendering no hace falta servidor, pero por comodidad:

```bash
python -m http.server 8000
```

Y abrí http://localhost:8000

## Notas

- El contenido de Benja proviene del portfolio original. Los perfiles de
  Nico, Palo y Ceci son textos de arranque pensados para personalizar.
- El portfolio por integrante está en construcción (grilla placeholder).
