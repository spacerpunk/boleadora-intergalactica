// Portfolio projects. Shown on the studio portfolio (/portfolio) and, filtered
// by `owner`, on each member's portfolio (/portfolio/:id).
//
// - cover: optional image path (in /public). If omitted, a gradient placeholder
//   is rendered using `accent`.
// - links: array of { label, url } shown inside the project modal.

export const PROJECTS = [
  {
    id: "fud",
    titulo: "Füd",
    categoria: "UX/UI · App Mobile",
    cliente: "Proyecto académico",
    anio: "2021",
    owner: "benja",
    cover: "/imgs/projects/fud.jpg",
    resumen: "Diseño de una app mobile con metodología Design Thinking.",
    descripcion: [
      "Creación y diseño de app mobile. Füd es un proyecto realizado en la cursada de UX/UI de CoderHouse.",
      "Consistió en crear un producto mínimo viable para celular a través de la metodología Design Thinking y la utilización de patrones comunes de UI.",
    ],
    tags: ["UX/UI", "Design Thinking", "Mobile", "Prototipado"],
    links: [
      { label: "Ver caso completo", url: "#" },
      { label: "Behance", url: "https://www.behance.net/" },
    ],
  },
  {
    id: "tienda10",
    titulo: "Tienda 10",
    categoria: "Motion · E-commerce",
    cliente: "Tienda 10",
    anio: "2022",
    owner: "benja",
    cover: "/imgs/projects/tienda10.gif",
    resumen: "Piezas animadas para una tienda online.",
    descripcion: [
      "Set de piezas animadas para campañas de e-commerce: banners, stories y motion para redes.",
      "El objetivo fue darle ritmo y personalidad a la comunicación de producto manteniendo la identidad de marca.",
    ],
    tags: ["Motion", "Social", "E-commerce"],
    links: [{ label: "Ver reel", url: "#" }],
  },
  {
    id: "toyota-team23",
    titulo: "Toyota @ Team23",
    categoria: "IA Generativa · Film Publicitario",
    cliente: "Toyota (vía Team23)",
    anio: "2025",
    owner: "nico",
    accent: "#d7000f",
    cover: "/imgs/projects/nico-toyota-team23.jpg",
    resumen:
      "Storyboards y assets generados con IA para un film conceptual de Toyota.",
    descripcion: [
      "Storyboards e imágenes generadas con IA para un cortometraje conceptual publicitario de Toyota, construidos a partir de referencias y modelos 3D, con dirección de arte de Team23 para mantener el auto fiel al producto real.",
      "El pipeline combinó ComfyUI, Weave y Fal.ai con modelos como Flux 2, NanoBanana2, Seedream y ChatGPT Image 2. Mi rol fue la generación de imágenes y storyboards, y luego la generación y composición de los elementos de video. Edición, sonido, música y armado final estuvieron a cargo de Team23.",
    ],
    tags: ["IA Generativa", "Storyboard", "Compositing", "Automotriz"],
    links: [
      {
        label: "Ver en YouTube",
        url: "https://www.youtube.com/watch?v=31N6t_bTIJI",
      },
      {
        label: "Caso completo",
        url: "https://spacerpunk.github.io/work/toyotateam23",
      },
      { label: "Team23", url: "https://www.team23.online/" },
    ],
  },
  {
    id: "dove",
    titulo: "Dove: Real Virtual Beauty",
    categoria: "Animación · 3D / Unreal Engine",
    cliente: "Dove — LOLA MullenLowe",
    anio: "2022",
    owner: "nico",
    accent: "#bcd4f1",
    cover: "/imgs/projects/nico-dove.jpg",
    resumen:
      "Animación de personajes para el lanzamiento global de Dove en el mundo gaming.",
    descripcion: [
      "Dove entra al mundo del gaming con el lanzamiento global de Real Virtual Beauty, una serie de compromisos que desafían la representación de la belleza online y la educación de la autoestima en el ámbito virtual.",
      "Trabajé en la animación de personajes del proyecto, realizado con Substance 3D Painter, After Effects, Blender y Unreal Engine. Dirección de Pedro Maccarone para la agencia LOLA MullenLowe Madrid.",
    ],
    tags: ["Animación", "Rigging", "Unreal Engine", "Blender", "Personajes"],
    links: [
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/153780873/Dove-Real-Virtual-Beauty",
      },
      {
        label: "Caso completo",
        url: "https://spacerpunk.github.io/work/dove",
      },
    ],
  },
  {
    id: "nasaxhonda",
    titulo: "NASA × Honda",
    categoria: "Film Conceptual · Dirección",
    cliente: "Proyecto personal",
    anio: "2025",
    owner: "nico",
    accent: "#e0503a",
    cover: "/imgs/projects/nico-nasaxhonda.jpg",
    resumen:
      "Cortometraje conceptual: una Honda diseñada por la NASA para cualquier terreno.",
    descripcion: [
      "Un cortometraje dinámico de 15 a 30 segundos. Ingenieros de Honda —bajo un programa clasificado junto a la NASA— construyen una moto para cualquier terreno: la Honda XR-LRV, TEST UNIT 03. La misma ingeniería de los rovers de Marte y la Luna llevada a dos ruedas.",
      "Estética retrofuturista de los años 70–80: granulada, quemada por el sol y cinética, como archivo de la NASA cruzado con motocross en Super 8. El diseño de la moto se resolvió con renders conceptuales generados por IA (Gemini).",
    ],
    tags: ["Film Conceptual", "IA Generativa", "Diseño", "Motion"],
    links: [
      {
        label: "Ver en YouTube",
        url: "https://www.youtube.com/watch?v=_F7XKzWlcxc",
      },
      {
        label: "Caso completo",
        url: "https://spacerpunk.github.io/projects/NasaXHonda",
      },
    ],
  },
  {
    id: "agentic-monks",
    titulo: "Agentic @ Monks",
    categoria: "IA Agéntica · Automatización",
    cliente: "Monks",
    anio: "2025",
    owner: "nico",
    accent: "#c8b6f1",
    cover: "/imgs/projects/nico-agentic-monks.gif",
    resumen:
      "Un pipeline 100% agéntico que genera contenido always-on-brand de punta a punta.",
    descripcion: [
      "Un pipeline completamente agéntico construido con Cursor y Claude que conecta las APIs de generación de imagen, texto y video de Google para producir renders siempre fieles a la marca y al producto, alimentando directamente templates de After Effects para generar contenido terminado de forma dinámica.",
      "Orquestado en n8n, el agente resuelve la toma del brief, el prompt engineering consistente con la marca, la generación y el filtrado de assets, y el poblado de templates: convierte un proceso manual de varios días en una corrida automática que entrega variaciones listas para publicar en minutos.",
    ],
    tags: ["IA Agéntica", "n8n", "GenAI", "After Effects", "Automatización"],
    links: [
      {
        label: "Caso completo",
        url: "https://spacerpunk.github.io/work/agenticmonks",
      },
    ],
  },
  {
    id: "tungsteno",
    titulo: "Tungsteno Films",
    categoria: "Dirección de Audio · VFX / 3D",
    cliente: "Tungsteno Films",
    anio: "2016–2021",
    owner: "nico",
    accent: "#8fd6a8",
    cover: "/imgs/projects/nico-tungsteno.jpg",
    resumen:
      "Dirección de audio y VFX/3D en una productora de cine independiente.",
    descripcion: [
      "De 2016 a 2021 trabajé como Director de Audio y luego como Generalista de VFX y 3D en esta productora de cine independiente de Buenos Aires (hoy también en Barcelona). Cuatro cortometrajes, el piloto de una serie, una serie animada semanal, pitches en Unreal Engine para clientes y mucha música original.",
      "Diseño de sonido, música original y mezcla 5.1 en films como La Grieta, Abismo y NO! (Festival Internacional de Mar del Plata), además de animación, render y compositing en piezas para Pringles y la experiencia Legends en el Museo del Fútbol de Barcelona.",
    ],
    tags: ["Sound Design", "Música Original", "VFX", "3D", "Unreal Engine"],
    links: [
      { label: "Tungsteno Films", url: "https://tungstenofilms.com/projects" },
      {
        label: "Caso completo",
        url: "https://spacerpunk.github.io/work/Tungsteno",
      },
    ],
  },
  {
    id: "atea",
    titulo: "ATEA — Música Original",
    categoria: "Música · Sound Design",
    cliente: "ATEA (marca de indumentaria)",
    anio: "2021",
    owner: "nico",
    accent: "#d8c8f1",
    resumen:
      "Horas de música original compuestas para una marca de indumentaria.",
    descripcion: [
      "ATEA es una marca de indumentaria para la que compuse horas de música original para un video de playlist chill.",
      "Podés escuchar extractos del score en Bandcamp.",
    ],
    tags: ["Música Original", "Composición", "Sound Design"],
    links: [
      {
        label: "Escuchar en Bandcamp",
        url: "https://spacerpunk.bandcamp.com/album/atea-tracks",
      },
      { label: "Caso completo", url: "https://spacerpunk.github.io/work/atea" },
    ],
  },
  {
    id: "cafe-orbital",
    titulo: "Café Orbital",
    categoria: "Branding · Identidad Visual",
    cliente: "Café Orbital",
    anio: "2023",
    owner: "palo",
    accent: "#f1e3bc",
    resumen: "Sistema de identidad visual para una cafetería de especialidad.",
    descripcion: [
      "Dirección de arte e identidad visual completa: logotipo, paleta, tipografías y aplicaciones.",
      "El universo gráfico se inspira en lo espacial y lo artesanal, buscando un tono cálido y contemporáneo.",
    ],
    tags: ["Branding", "Dirección de Arte", "Tipografía"],
    links: [
      { label: "Ver identidad", url: "#" },
      { label: "Behance", url: "https://www.behance.net/" },
    ],
  },
  {
    id: "ceci-exteriores",
    titulo: "Sound Design — Exteriores",
    categoria: "Diseño de Sonido",
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-exteriores.jpg",
    resumen: "Diseño de ambientes y sonido de exteriores para cine.",
    descripcion: [
      "Diseño sonoro de escenas de exterior: construcción de ambientes, capas de fondo y detalles que dan profundidad y sensación de lugar.",
      "El objetivo fue que el espectador habite el espacio, con un sonido natural y envolvente.",
    ],
    tags: ["Sound Design", "Ambientes", "Cine"],
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-dna",
    titulo: "DNA (Season 2) — Foley",
    categoria: "Foley · Serie",
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-dna.jpg",
    resumen: "Edición de foley para la segunda temporada de DNA.",
    descripcion: [
      "Grabación y edición de foley para la serie: pasos, ropa, objetos y manipulaciones sincronizadas cuadro a cuadro.",
      "El foley aporta la textura física que acompaña la actuación y sostiene la credibilidad de cada escena.",
    ],
    tags: ["Foley", "Serie", "Edición de Sonido"],
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-shortfilm",
    titulo: "Sound Design — Cortometraje",
    categoria: "Diseño de Sonido",
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-shortfilm.jpg",
    resumen: "Diseño sonoro integral de un cortometraje.",
    descripcion: [
      "Diseño de sonido de un cortometraje de principio a fin: ambientes, efectos y foley trabajados para acompañar la narrativa.",
      "Un enfoque sonoro pensado para reforzar el tono y la emoción de la historia.",
    ],
    tags: ["Sound Design", "Cortometraje", "Foley"],
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-fern",
    titulo: "Fern — Sound Design Test",
    categoria: "Diseño de Sonido",
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-fern.jpg",
    resumen: "Prueba de rediseño sonoro y atmósferas.",
    descripcion: [
      "Ejercicio de rediseño sonoro: reconstrucción de efectos y atmósferas para explorar el clima de la pieza.",
      "Una muestra del proceso de búsqueda de texturas y tratamiento del sonido.",
    ],
    tags: ["Sound Design", "Atmósferas", "Test"],
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-destacados",
    titulo: "Trabajos destacados",
    categoria: "Reel · Sound Design",
    owner: "ceci",
    accent: "#d8c8f1",
    resumen: "Una selección de trabajos de sonido en video.",
    descripcion: [
      "Una selección de piezas donde el diseño de sonido y el foley tienen un rol protagónico.",
      "Podés verlas en los siguientes enlaces.",
    ],
    tags: ["Sound Design", "Foley", "Reel"],
    links: [
      { label: "Trabajo 1", url: "https://youtu.be/k6QEtPm8VLY" },
      { label: "Trabajo 2", url: "https://youtu.be/XH32psFPxao" },
      { label: "Trabajo 3", url: "https://youtu.be/kVlbMBqoa3A" },
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "mati-genius",
    titulo: "Generation Genius",
    categoria: "Motion Graphics",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-genius.jpg",
    resumen: "Motion graphics para contenido educativo de Generation Genius.",
    descripcion: [
      "Animación y motion graphics para piezas de Generation Genius.",
      "Diseño de movimiento pensado para acompañar y clarificar el contenido.",
    ],
    tags: ["Motion Graphics", "After Effects", "Animación"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/genaration-genius",
      },
    ],
  },
  {
    id: "mati-tupperware",
    titulo: "Tupperware",
    categoria: "Cámara · Publicidad",
    cliente: "Tupperware",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-tupperware.jpg",
    resumen: "Trabajo de cámara para una pieza publicitaria de Tupperware.",
    descripcion: [
      "Cámara para una pieza publicitaria de Tupperware.",
      "Registro de producto y planos de apoyo para la campaña.",
    ],
    tags: ["Cámara", "Publicidad", "Producto"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/tupperware",
      },
    ],
  },
  {
    id: "mati-wemove",
    titulo: "We Move Training",
    categoria: "Edición",
    cliente: "We Move Training",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-wemove.jpg",
    resumen: "Edición de video para We Move Training.",
    descripcion: [
      "Edición y armado de una pieza para We Move Training.",
      "Montaje y ritmo pensados para el contenido de entrenamiento.",
    ],
    tags: ["Edición", "Montaje", "Video"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/we-move",
      },
    ],
  },
  {
    id: "mati-cvo",
    titulo: "CVO — ENERC",
    categoria: "Realización y Edición",
    cliente: "ENERC",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-cvo.jpg",
    resumen: "Realización y edición de una entrevista para el CVO (ENERC).",
    descripcion: [
      "Realización y edición de una entrevista para el CVO, sede regional de la ENERC.",
      "Registro y montaje de la pieza de principio a fin.",
    ],
    tags: ["Realización", "Edición", "Entrevista"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/entrevista-para-cvo-enerc",
      },
    ],
  },
  {
    id: "mati-lara-casa",
    titulo: "Lara Casa",
    categoria: "Cámara · Publicidad",
    cliente: "Lara Casa",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-laracasa.jpg",
    resumen: "Trabajo de cámara para una publicidad de Lara Casa.",
    descripcion: [
      "Cámara para una pieza publicitaria de Lara Casa.",
      "Captura de imagen para la campaña.",
    ],
    tags: ["Cámara", "Publicidad"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/publicidad-lara-casa",
      },
    ],
  },
  {
    id: "mati-ambar-violeta",
    titulo: "Ámbar Violeta",
    categoria: "Realización",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-ambar.jpg",
    resumen: "Realización de la pieza Ámbar Violeta.",
    descripcion: [
      "Realización del videoclip Ámbar Violeta.",
      "Dirección y puesta en imagen de la pieza.",
    ],
    tags: ["Realización", "Videoclip"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/ambar-violeta-mechi",
      },
    ],
  },
  {
    id: "mati-jara-beats",
    titulo: "Jara Iktan Beats",
    categoria: "Realización y Edición",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-jara.jpg",
    resumen: "Realización y edición de Jara Iktan Beats.",
    descripcion: [
      "Realización y edición de la pieza Jara Iktan Beats.",
      "Rodaje y montaje trabajados de punta a punta.",
    ],
    tags: ["Realización", "Edición", "Música"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/jara-iktan-beats",
      },
    ],
  },
  {
    id: "mati-harto",
    titulo: "Harto",
    categoria: "Foquista",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-harto.jpg",
    resumen: "Foquista en el rodaje de Harto.",
    descripcion: [
      "Trabajo como foquista en el rodaje de Harto.",
      "Control de foco durante la captura de imagen.",
    ],
    tags: ["Foquista", "Rodaje", "Cámara"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/harto",
      },
    ],
  },
  {
    id: "mati-azcuy",
    titulo: "Azcuy",
    categoria: "Edición",
    cliente: "Azcuy",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-azcuy.jpg",
    resumen: "Edición de una pieza para Azcuy.",
    descripcion: [
      "Edición y montaje de una pieza para Azcuy.",
      "Armado y ritmo del material.",
    ],
    tags: ["Edición", "Montaje"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/azcuy",
      },
    ],
  },
  {
    id: "mati-freestyle",
    titulo: "Freestyle — Iktan Jara",
    categoria: "Realización",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-freestyle.jpg",
    resumen: "Realización de una sesión de freestyle de Iktan Jara.",
    descripcion: [
      "Realización de una sesión de freestyle de Iktan Jara.",
      "Registro en imagen de la performance.",
    ],
    tags: ["Realización", "Música", "Performance"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/freestyle",
      },
    ],
  },
  {
    id: "mati-santa-chana",
    titulo: "La Santa Chana",
    categoria: "Asistente de Dirección",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-santachana.jpg",
    resumen: "Asistencia de dirección en secuencias de La Santa Chana.",
    descripcion: [
      "Asistente de dirección en las secuencias de La Santa Chana.",
      "Apoyo a la dirección durante el rodaje.",
    ],
    tags: ["Asistencia de Dirección", "Rodaje"],
    links: [
      {
        label: "Ver en portfolio",
        url: "https://matiascrochi.myportfolio.com/secuencias-la-santa-chana",
      },
    ],
  },
  {
    id: "santi-tasso",
    titulo: "Website de Santiago Tasso",
    categoria: "Web · Diseño Responsive",
    cliente: "Santiago Tasso",
    anio: "2022",
    owner: "benja",
    accent: "#f1c8c8",
    resumen: "Diseño de un sitio web responsive de portfolio.",
    descripcion: [
      "Diseño de website responsive para el portfolio personal de Santiago Tasso.",
      "Se priorizó una navegación clara y una puesta en página que dejara respirar al contenido en todos los dispositivos.",
    ],
    tags: ["Web Design", "Responsive", "UI"],
    links: [{ label: "Visitar sitio", url: "#" }],
  },
];

export function getProjectsByOwner(id) {
  return PROJECTS.filter((p) => p.owner === id);
}

// Curated selection shown full-width on the home page.
const FEATURED_IDS = [
  "toyota-team23",
  "fud",
  "ceci-exteriores",
  "tienda10",
  "ceci-shortfilm",
];

export function getFeatured() {
  return FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(
    Boolean
  );
}
