// UGC demo: synthetic creators × actions. Picking one of each builds a post
// for a fictional product, Boleadora Cold Brew. Copy is written as { es, en }
// and resolved with L(); hooks are one function per language.
//
// Media: until real renders exist, each creator shows a styled casting card.
// To use real content, add a portrait (`portrait`) and/or one clip per action
// (`clips: { unboxing: "/media/demos/ugc/luli-unboxing.mp4", ... }`).
// Clips should be 9:16, muted, short and web-compressed.
import { L } from "../i18n/LanguageContext.jsx";

export const UGC_PRODUCT_TAG = "#BoleadoraColdBrew";

export const UGC_MODELS = [
  {
    id: "luli",
    name: "Luli",
    handle: "@luli.enfoco",
    niche: { es: "Lifestyle", en: "Lifestyle" },
    colors: ["#c99a8a", "#6e3a30"],
    opener: { es: "Chicas, paren todo", en: "Girls, stop everything" },
    moment: { es: "antes de la facu", en: "before class" },
    routine: { es: "mañana", en: "morning" },
    replaces: { es: "el tercer café", en: "my third coffee" },
    trend: {
      es: "Get ready with me en 10 segundos",
      en: "Get ready with me in 10 seconds",
    },
    signoff: { es: "Besito y chau", en: "Love you, bye" },
    hashtags: { es: ["#grwm", "#rutina"], en: ["#grwm", "#routine"] },
    portrait: null,
    clips: {},
  },
  {
    id: "tomas",
    name: "Tomás",
    handle: "@tomi.corre",
    niche: { es: "Fitness", en: "Fitness" },
    colors: ["#9fb69a", "#34523b"],
    opener: { es: "Arrancamos", en: "Let's go" },
    moment: { es: "antes de salir a correr", en: "before my run" },
    routine: { es: "previa de entrenamiento", en: "pre-workout" },
    replaces: { es: "el energizante", en: "energy drinks" },
    trend: { es: "5 km antes de las 7", en: "5K before 7 a.m." },
    signoff: {
      es: "Nos vemos en el próximo kilómetro",
      en: "See you at the next kilometre",
    },
    hashtags: { es: ["#running", "#fitness"], en: ["#running", "#fitness"] },
    portrait: null,
    clips: {},
  },
  {
    id: "marta",
    name: "Marta",
    handle: "@lacocinademarta",
    niche: { es: "Cocina", en: "Cooking" },
    colors: ["#c8b182", "#6b5226"],
    opener: { es: "Buen día, familia", en: "Morning, family" },
    moment: { es: "a media tarde", en: "in the afternoon" },
    routine: { es: "merienda", en: "afternoon snack" },
    replaces: { es: "el café de las cinco", en: "my five o'clock coffee" },
    trend: {
      es: "La receta de la abuela, versión 2026",
      en: "Grandma's recipe, 2026 edition",
    },
    signoff: { es: "Un beso grande", en: "Big hugs" },
    hashtags: { es: ["#recetas", "#merienda"], en: ["#recipes", "#snacktime"] },
    portrait: null,
    clips: {},
  },
  {
    id: "kenji",
    name: "Kenji",
    handle: "@kenji.setup",
    niche: { es: "Gaming", en: "Gaming" },
    colors: ["#95a8c9", "#27395e"],
    opener: { es: "Ok, esto hay que analizarlo", en: "Ok, we need to break this down" },
    moment: { es: "en medio de una partida", en: "mid-match" },
    routine: { es: "noche de stream", en: "stream night" },
    replaces: { es: "las latas de energizante", en: "energy drink cans" },
    trend: { es: "Rating de setups", en: "Rating setups" },
    signoff: { es: "GG", en: "GG" },
    hashtags: { es: ["#setup", "#gaming"], en: ["#setup", "#gaming"] },
    portrait: null,
    clips: {},
  },
  {
    id: "valen",
    name: "Valen",
    handle: "@valen.multitask",
    niche: { es: "Familia", en: "Family" },
    colors: ["#b69ab9", "#523057"],
    opener: { es: "Modo multitarea activado", en: "Multitask mode on" },
    moment: {
      es: "entre reuniones y la salida del cole",
      en: "between meetings and school pickup",
    },
    routine: { es: "mañana caótica", en: "chaotic morning" },
    replaces: { es: "el café recalentado", en: "reheated coffee" },
    trend: {
      es: "Un día normal de una mamá que trabaja",
      en: "A normal day as a working mom",
    },
    signoff: { es: "Sobreviviendo, como siempre", en: "Surviving, as always" },
    hashtags: {
      es: ["#maternidad", "#organizacion"],
      en: ["#momlife", "#organization"],
    },
    portrait: null,
    clips: {},
  },
];

export const UGC_ACTIONS = [
  {
    id: "unboxing",
    label: { es: "Unboxing", en: "Unboxing" },
    duration: 18,
    hook: {
      es: (m) => `${m.opener}: me llegó esto y lo abro acá mismo, sin cortes.`,
      en: (m) => `${m.opener}: this just arrived and I'm opening it right here, no cuts.`,
    },
  },
  {
    id: "review",
    label: { es: "Review", en: "Review" },
    duration: 24,
    hook: {
      es: (m) => `Lo tomé 7 días seguidos ${m.moment}. Te cuento todo.`,
      en: (m) => `I drank it 7 days straight ${m.moment}. Here's everything.`,
    },
  },
  {
    id: "rutina",
    label: { es: "Rutina", en: "Routine" },
    duration: 20,
    hook: {
      es: (m) => `Mi ${m.routine} en 20 segundos.`,
      en: (m) => `My ${m.routine} in 20 seconds.`,
    },
  },
  {
    id: "tutorial",
    label: { es: "Tutorial", en: "Tutorial" },
    duration: 22,
    hook: {
      es: () => "3 formas de tomarlo que nadie te cuenta.",
      en: () => "3 ways to drink it nobody tells you about.",
    },
  },
  {
    id: "trend",
    label: { es: "Trend", en: "Trend" },
    duration: 15,
    hook: {
      es: (m) => `Hice el trend «${m.trend}», pero con mate frío.`,
      en: (m) => `I did the "${m.trend}" trend, but with cold mate.`,
    },
  },
  {
    id: "testimonio",
    label: { es: "Antes y después", en: "Before & after" },
    duration: 21,
    hook: {
      es: (m) => `Por qué dejé ${m.replaces} y no lo extraño.`,
      en: (m) => `Why I quit ${m.replaces} and don't miss it.`,
    },
  },
];

// The post for a creator × action in one language.
export function buildPost(model, action, lang) {
  const m = Object.fromEntries(
    Object.entries(model).map(([key, value]) => [key, L(value, lang)]),
  );
  const hook = L(action.hook, lang)(m);
  return {
    hook,
    caption: `${hook} ${m.signoff}.`,
    hashtags: [UGC_PRODUCT_TAG, ...m.hashtags, lang === "en" ? "#ad" : "#publicidad"],
    clip: model.clips?.[action.id] || null,
  };
}
