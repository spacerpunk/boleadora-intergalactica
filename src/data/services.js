// The studio's three pillars. Each one is a section of the home page with
// its own demo (see PillarSection.jsx), a link in the navbar (`id` is the
// anchor, `nav` is its short name there) and a category in the contact
// form (`form`). Copy is written as { es, en } and resolved with L().
export const SERVICES = [
  {
    id: "contenido-sintetico",
    number: "01",
    label: { es: "Contenido sintético", en: "Synthetic content" },
    nav: { es: "Sintético", en: "Synthetic" },
    title: {
      es: ["Tu producto,", "en cualquier lugar."],
      en: ["Your product,", "anywhere."],
    },
    cta: { es: "Clonemos tu producto", en: "Let's clone your product" },
    form: {
      es: "Contenido sintético para marcas",
      en: "Synthetic content for brands",
    },
  },
  {
    id: "films-ia",
    number: "02",
    label: { es: "Films con IA", en: "AI films" },
    nav: { es: "Films", en: "Films" },
    title: {
      es: ["Parece filmado.", "No lo fue."],
      en: ["Looks like it was shot.", "It wasn't."],
    },
    cta: { es: "Hablemos de tu film", en: "Let's talk about your film" },
    form: { es: "Film cinemático con IA", en: "Cinematic AI film" },
  },
  {
    id: "ugc-agentes",
    number: "03",
    label: { es: "UGC con agentes", en: "Agent-made UGC" },
    nav: { es: "UGC", en: "UGC" },
    title: {
      es: ["Contenido todos los días,", "en piloto automático."],
      en: ["Content every day,", "on autopilot."],
    },
    cta: { es: "Automaticemos tu contenido", en: "Let's automate your content" },
    form: {
      es: "UGC automatizado con agentes",
      en: "Automated UGC with agents",
    },
  },
];
