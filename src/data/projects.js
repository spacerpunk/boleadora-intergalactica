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
    id: "reel-marca",
    titulo: "Reel de Marca 2024",
    categoria: "Edición · Branded Content",
    cliente: "Marca de indumentaria",
    anio: "2024",
    owner: "nico",
    accent: "#bcd4f1",
    resumen: "Montaje y ritmo para el reel anual de una marca.",
    descripcion: [
      "Edición y postproducción del reel anual: selección de tomas, armado narrativo y sincronía con la música.",
      "Se trabajó el color y el pacing para lograr una pieza dinámica pensada para redes y presentaciones.",
    ],
    tags: ["Edición", "Color", "Motion"],
    links: [
      { label: "Ver en Vimeo", url: "#" },
      { label: "Instagram", url: "https://instagram.com/" },
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
    id: "matias-portfolio",
    titulo: "Portfolio Audiovisual",
    categoria: "Edición · Realización",
    owner: "matias",
    accent: "#c8e6d0",
    resumen: "Selección de piezas de edición y realización.",
    descripcion: [
      "Una selección de trabajos audiovisuales: publicidad, videoclips y contenido de marca, editados y realizados de principio a fin.",
      "Podés ver el portfolio completo en el siguiente enlace.",
    ],
    tags: ["Edición", "Realización", "Video"],
    links: [
      { label: "Ver portfolio", url: "https://matiascrochi.myportfolio.com/videos" },
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
