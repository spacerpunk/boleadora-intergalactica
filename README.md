# Ruido de Mate

Sitio de un estudio de **publicidad con inteligencia artificial**: profesionales del mundo viejo (cine, post, sonido) trabajando en el mundo de la IA. Un solo nicho, publicidad, y tres pilares:

1. **Contenido sintético para marcas**: clones digitales de producto y modelos sintéticos.
2. **AI Cinematic Films**: films generados con IA y terminados con post tradicional.
3. **UGC automatizado con agentes**: creadores sintéticos y agentes que publican a diario o cada semana.

## Desarrollo

```sh
npm install
npm run dev
npm run build
npm run preview
```

React 18 + Vite + React Router. Sin backend. La rama del rediseño es `codex/services-first-redesign`.

## Experiencia

- `/`: reel de apertura, «Quiénes somos» y, al bajar, los tres pilares con su demo, uno debajo del otro, y la consulta comercial. La barra de navegación lleva directo a cada pilar (`/#contenido-sintetico`, `/#films-ia`, `/#ugc-agentes`).
  - **01 Contenido sintético**: un producto ficticio (SVG) en distintas escenas y sabores; «Ver el film» reproduce 5 planos hechos con el mismo clon.
  - **02 Films con IA**: comparador crudo / final sobre fotogramas del equipo. El acabado (grading, halation, grano, viñeta, gate weave, scope) se simula en CSS.
  - **03 UGC con agentes**: grilla de modelos sintéticos × acciones que arma el posteo en un teléfono.
- `/nosotros`: equipo y retratos alternativos generados con IA. Se activan con hover, foco de teclado o un botón para dispositivos táctiles.
- `/portfolio`: archivo de trabajos previos del equipo («el oficio de antes»), con filtros y fichas en modal. No está en el menú: se llega desde Nosotros.
- `/profile/:id` y `/portfolio/:id`: perfiles y trabajos individuales.

## Contenido y componentes

| Archivo                              | Uso                                                        |
| ------------------------------------ | ---------------------------------------------------------- |
| `src/data/services.js`               | Pilares: nombre, frase, CTA y categoría del formulario     |
| `src/data/ugc.js`                    | Demo UGC: modelos sintéticos y acciones                    |
| `src/data/clone.js`                  | Demo de clon: producto, escenas, sabores y planos del film |
| `src/components/PillarSection.jsx`   | Sección de cada pilar en la home, con su demo              |
| `src/components/demos/`              | Módulos interactivos de cada demo                          |
| `src/demos.css`                      | Estilos de los pilares y sus demos                         |
| `src/data/team.js`                   | Perfiles y retratos originales                             |
| `src/data/projects.js`               | Proyectos existentes y enlaces                             |
| `src/config.js`                      | Contacto y redes del estudio                               |
| `src/studio.css`                     | Sistema visual y responsive                                |
| `src/components/ReelHero.jsx`        | Reel de entrada, pausa y reproductor ampliado              |
| `src/components/ServiceScene.jsx`    | Escenas de servicios y motion graphics                     |
| `src/components/SignalSculpture.jsx` | Escultura 3D procedural proyectada sobre Canvas            |
| `src/hooks/useScrollScene.js`        | Transformaciones vinculadas al scroll, sin bloquearlo      |
| `src/components/MotionProvider.jsx`  | Pausa global y preferencia de movimiento reducido          |
| `src/components/Dialog.jsx`          | Dialog nativo, foco, Escape y restauración del foco        |
| `public/imgs/alter-egos/`            | Retratos generados originales PNG y versiones web WebP     |

`src/index.css`, los componentes antiguos que ya no se importan y `legacy/` conservan material de la versión anterior. El punto de entrada usa `src/studio.css`.

## Reel

`public/media/studio-reel.mp4` es una **primera edición visual de 18 segundos sin audio**, hecha a partir del material disponible en el repositorio. Pesa aproximadamente 2,8 MB, H.264, 1280 × 720, 24 fps. No es una selección editorial definitiva ni una mezcla de sonido terminada.

Para reconstruirlo con Python y FFmpeg instalados:

```sh
python scripts/build-reel.py
```

El script necesita los originales bajo `assets/Portfolios/`; algunos ya estaban como archivos locales sin seguimiento de Git. Los archivos listos para servir están en `public/media/`, así que esos originales no son necesarios para desarrollar o publicar el sitio. El manifiesto de cortes está en `public/media/reel-sources.json`.

Para usar un reel final, reemplazar el MP4 y su póster. Si cambia su duración, actualizar `ReelHero.jsx`. El video de fondo se reproduce en silencio y se pausa fuera de pantalla o al desactivar animaciones. Con movimiento reducido usa el póster; el usuario puede abrir el reproductor con controles.

## Demos: contenido real pendiente

Las demos funcionan con material del equipo y visuales de ejemplo. Antes de publicar conviene reemplazar:

- **Modelos sintéticos (UGC)**: hoy son fichas de casting con siluetas. En `src/data/ugc.js`, cada modelo acepta `portrait` (imagen 4:5) y `clips` por acción (`{ unboxing: "/media/demos/ugc/luli-unboxing.mp4" }`, 9:16, mudo y comprimido). El teléfono usa el clip, si no el retrato, si no la ficha.
- **Clon digital**: la lata «Boleadora Cold Brew» es un producto ficticio dibujado en `ProductClone.jsx`. Puede quedarse como demo o reemplazarse por renders de un producto real.

## Contacto

Cada pilar abre el formulario con su categoría seleccionada. El formulario construye un enlace `mailto:`: **no envía ni almacena datos**. El visitante termina el envío en su aplicación de correo. Para recepción directa desde la web habría que conectar un proveedor o endpoint.

## Dirección visual

Carbón neutro, texto hueso y acento celeste, con el contacto sobre celeste; tipografía condensada editorial, anotaciones monoespaciadas, objetos con profundidad y escenas de alto contraste. Referencias proporcionadas: [Zypsy](https://www.zypsy.com/), [Pendo](https://pendo.ca/), `UX ref.jpg` y `Polvo_Website_Reference_01.jpg`. Se usaron como referencias de composición e interacción; los medios del sitio provienen del equipo o de las generaciones documentadas.

Los prompts y archivos de los retratos están en [docs/alter-egos.md](docs/alter-egos.md).
