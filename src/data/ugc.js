// UGC demo: synthetic creators × actions. Picking one of each builds a post
// for a fictional product, Boleadora Cold Brew.
//
// Media: until real renders exist, each creator shows a styled casting card.
// To use real content, add a portrait (`portrait`) and/or one clip per action
// (`clips: { unboxing: "/media/demos/ugc/luli-unboxing.mp4", ... }`).
// Clips should be 9:16, muted, short and web-compressed.

export const UGC_PRODUCT_TAG = "#BoleadoraColdBrew";

export const UGC_MODELS = [
  {
    id: "luli",
    name: "Luli",
    handle: "@luli.enfoco",
    niche: "Lifestyle",
    colors: ["#c99a8a", "#6e3a30"],
    opener: "Chicas, paren todo",
    moment: "antes de la facu",
    routine: "mañana",
    replaces: "el tercer café",
    trend: "Get ready with me en 10 segundos",
    signoff: "Besito y chau",
    hashtags: ["#grwm", "#rutina"],
    portrait: null,
    clips: {},
  },
  {
    id: "tomas",
    name: "Tomás",
    handle: "@tomi.corre",
    niche: "Fitness",
    colors: ["#9fb69a", "#34523b"],
    opener: "Arrancamos",
    moment: "antes de salir a correr",
    routine: "previa de entrenamiento",
    replaces: "el energizante",
    trend: "5 km antes de las 7",
    signoff: "Nos vemos en el próximo kilómetro",
    hashtags: ["#running", "#fitness"],
    portrait: null,
    clips: {},
  },
  {
    id: "marta",
    name: "Marta",
    handle: "@lacocinademarta",
    niche: "Cocina",
    colors: ["#c8b182", "#6b5226"],
    opener: "Buen día, familia",
    moment: "a media tarde",
    routine: "merienda",
    replaces: "el café de las cinco",
    trend: "La receta de la abuela, versión 2026",
    signoff: "Un beso grande",
    hashtags: ["#recetas", "#merienda"],
    portrait: null,
    clips: {},
  },
  {
    id: "kenji",
    name: "Kenji",
    handle: "@kenji.setup",
    niche: "Gaming",
    colors: ["#95a8c9", "#27395e"],
    opener: "Ok, esto hay que analizarlo",
    moment: "en medio de una partida",
    routine: "noche de stream",
    replaces: "las latas de energizante",
    trend: "Rating de setups",
    signoff: "GG",
    hashtags: ["#setup", "#gaming"],
    portrait: null,
    clips: {},
  },
  {
    id: "valen",
    name: "Valen",
    handle: "@valen.multitask",
    niche: "Familia",
    colors: ["#b69ab9", "#523057"],
    opener: "Modo multitarea activado",
    moment: "entre reuniones y la salida del cole",
    routine: "mañana caótica",
    replaces: "el café recalentado",
    trend: "Un día normal de una mamá que trabaja",
    signoff: "Sobreviviendo, como siempre",
    hashtags: ["#maternidad", "#organizacion"],
    portrait: null,
    clips: {},
  },
];

export const UGC_ACTIONS = [
  {
    id: "unboxing",
    label: "Unboxing",
    duration: 18,
    hook: (m) => `${m.opener}: me llegó esto y lo abro acá mismo, sin cortes.`,
  },
  {
    id: "review",
    label: "Review",
    duration: 24,
    hook: (m) => `Lo tomé 7 días seguidos ${m.moment}. Te cuento todo.`,
  },
  {
    id: "rutina",
    label: "Rutina",
    duration: 20,
    hook: (m) => `Mi ${m.routine} en 20 segundos.`,
  },
  {
    id: "tutorial",
    label: "Tutorial",
    duration: 22,
    hook: () => "3 formas de tomarlo que nadie te cuenta.",
  },
  {
    id: "trend",
    label: "Trend",
    duration: 15,
    hook: (m) => `Hice el trend «${m.trend}», pero con mate frío.`,
  },
  {
    id: "testimonio",
    label: "Antes y después",
    duration: 21,
    hook: (m) => `Por qué dejé ${m.replaces} y no lo extraño.`,
  },
];

export function buildPost(model, action) {
  const hook = action.hook(model);
  return {
    hook,
    caption: `${hook} ${model.signoff}.`,
    hashtags: [UGC_PRODUCT_TAG, ...model.hashtags, "#publicidad"],
    clip: model.clips?.[action.id] || null,
  };
}
