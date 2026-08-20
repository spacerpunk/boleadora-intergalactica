# Boleadora Intergaláctica

Portfolio web de un equipo de postproductores y creativos.
**React + Vite**, con perfiles renderizados desde un único archivo de datos.

## Requisitos

- Node.js 18+ (probado con Node 24)

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción -> dist/
npm run preview # previsualizar el build
```

## Estructura

```
index.html              Entry point de Vite
vite.config.js
public/
  imgs/                 Retratos e imágenes (servidas en /imgs/...)
src/
  main.jsx              Bootstrap de React + Router
  App.jsx               Rutas
  index.css             Estilos (migrados del sitio original)
  config.js             STUDIO: nombre, copyright, redes del estudio
  data/
    team.js             ⭐ Datos del equipo — editá acá los perfiles
  assets/
    svg.js              Artwork SVG (logo, íconos sociales, íconos de tools)
  hooks/
    useReveal.js        Reveal-on-scroll (IntersectionObserver)
  components/
    Navbar.jsx  Footer.jsx  TeamCard.jsx  ToolBubble.jsx  RawSvg.jsx
  pages/
    Home.jsx    Profile.jsx  Portfolio.jsx
legacy/                 Versión estática original (solo referencia)
```

## Rutas

| Ruta                 | Página                              |
| -------------------- | ----------------------------------- |
| `/`                  | Home — hero + grilla del equipo      |
| `/profile/:id`       | Perfil (`benja`, `nico`, `palo`, `ceci`) |
| `/portfolio/:id`     | Portfolio del integrante (WIP)       |

## Cómo editar

- **Contenido de un perfil** (bio, trayectoria, estudios, herramientas,
  idiomas, redes, retrato): editá el objeto correspondiente en
  [`src/data/team.js`](src/data/team.js). Toda la UI se genera desde ahí.
- **Retratos**: los de Nico, Palo y Ceci son placeholders SVG en
  `public/imgs/`. Reemplazalos por fotos y actualizá `portrait` en `team.js`
  (la ruta empieza con `/imgs/...`).
- **Íconos de herramientas**: si una tool no tiene ícono, se muestra como
  pill de texto. Para agregar uno, sumalo a `TOOL_ICONS` en
  [`src/assets/svg.js`](src/assets/svg.js) con el mismo nombre que usás en
  `team.js`.
- **Datos del estudio / contacto**: [`src/config.js`](src/config.js).

## Notas

- El contenido de Benja proviene del portfolio original. Nico, Palo y Ceci
  son textos de arranque para personalizar.
- El portfolio por integrante está en construcción (grilla placeholder).
- La versión estática anterior quedó archivada en `legacy/` (también está en
  el historial de git).
