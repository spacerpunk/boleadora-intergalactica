# Ruido de Mate

Sitio de un estudio independiente de **postproducción, creatividad y AI Production Solutions**, pensado para marcas, agencias y equipos que buscan contratar sus servicios.

## Desarrollo

```sh
npm install
npm run dev
npm run build
npm run preview
```

React 18 + Vite + React Router. Sin backend. La rama del rediseño es `codex/services-first-redesign`.

## Experiencia

- `/`: reel de apertura, introducción, tres capítulos de servicios animados con scroll nativo, proceso de trabajo y consulta comercial.
- `/nosotros`: equipo y retratos alternativos generados con IA. Se activan con hover, foco de teclado o un botón para dispositivos táctiles.
- `/portfolio`: proyectos del equipo con filtros por disciplina y fichas en modal.
- `/profile/:id` y `/portfolio/:id`: perfiles y trabajos individuales.

## Contenido y componentes

| Archivo                              | Uso                                                       |
| ------------------------------------ | --------------------------------------------------------- |
| `src/data/services.js`               | Servicios, textos, disciplinas y categoría del formulario |
| `src/data/team.js`                   | Perfiles y retratos originales                            |
| `src/data/projects.js`               | Proyectos existentes y enlaces                            |
| `src/config.js`                      | Contacto y redes del estudio                              |
| `src/studio.css`                     | Sistema visual y responsive                               |
| `src/components/ReelHero.jsx`        | Reel de entrada, pausa y reproductor ampliado             |
| `src/components/ServiceScene.jsx`    | Escenas de servicios y motion graphics                    |
| `src/components/SignalSculpture.jsx` | Escultura 3D procedural proyectada sobre Canvas           |
| `src/hooks/useScrollScene.js`        | Transformaciones vinculadas al scroll, sin bloquearlo     |
| `src/components/MotionProvider.jsx`  | Pausa global y preferencia de movimiento reducido         |
| `src/components/Dialog.jsx`          | Dialog nativo, foco, Escape y restauración del foco       |
| `public/imgs/alter-egos/`            | Retratos generados originales PNG y versiones web WebP    |

`src/index.css`, los componentes antiguos que ya no se importan y `legacy/` conservan material de la versión anterior. El punto de entrada usa `src/studio.css`.

## Reel

`public/media/studio-reel.mp4` es una **primera edición visual de 18 segundos sin audio**, hecha a partir del material disponible en el repositorio. Pesa aproximadamente 2,8 MB, H.264, 1280 × 720, 24 fps. No es una selección editorial definitiva ni una mezcla de sonido terminada.

Para reconstruirlo con Python y FFmpeg instalados:

```sh
python scripts/build-reel.py
```

El script necesita los originales bajo `assets/Portfolios/`; algunos ya estaban como archivos locales sin seguimiento de Git. Los archivos listos para servir están en `public/media/`, así que esos originales no son necesarios para desarrollar o publicar el sitio. El manifiesto de cortes está en `public/media/reel-sources.json`.

Para usar un reel final, reemplazar el MP4 y su póster. Si cambia su duración, actualizar `ReelHero.jsx`. El video de fondo se reproduce en silencio y se pausa fuera de pantalla o al desactivar animaciones. Con movimiento reducido usa el póster; el usuario puede abrir el reproductor con controles.

## Contacto

Cada servicio abre el formulario con su categoría seleccionada. El formulario construye un enlace `mailto:`: **no envía ni almacena datos**. El visitante termina el envío en su aplicación de correo. Para recepción directa desde la web habría que conectar un proveedor o endpoint.

## Dirección visual

Negro carbón, blanco cálido y naranja; tipografía condensada editorial, anotaciones monoespaciadas, objetos con profundidad y escenas de alto contraste. Referencias proporcionadas: [Zypsy](https://www.zypsy.com/), [Pendo](https://pendo.ca/), `UX ref.jpg` y `Polvo_Website_Reference_01.jpg`. Se usaron como referencias de composición e interacción; los medios del sitio provienen del equipo o de las generaciones documentadas.

Los prompts y archivos de los retratos están en [docs/alter-egos.md](docs/alter-egos.md).
