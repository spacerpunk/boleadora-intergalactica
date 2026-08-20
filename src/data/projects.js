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
    id: "spot-vfx",
    titulo: "Spot Televisivo — VFX",
    categoria: "VFX · Compositing",
    cliente: "Agencia de publicidad",
    anio: "2023",
    owner: "ceci",
    accent: "#d8c8f1",
    resumen: "Integración de efectos y compositing para un spot de TV.",
    descripcion: [
      "Compositing y VFX para un spot televisivo: keying, rotoscopiado, limpieza de planos e integración de elementos 3D.",
      "El trabajo buscó que los efectos pasaran desapercibidos, sumando producción sin romper el realismo de la pieza.",
    ],
    tags: ["VFX", "Compositing", "3D"],
    links: [{ label: "Ver breakdown", url: "#" }],
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
