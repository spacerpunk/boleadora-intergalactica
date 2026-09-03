// Team data. Edit freely — the profile pages render entirely from this file.
// Benja's data is the original portfolio content; Nico / Palo / Ceci are
// starter profiles meant to be personalised.

export const TEAM = [
  {
    id: "benja",
    nombre: "Benja",
    nombreCompleto: "Benja García",
    saludo: "Hola, soy Benja",
    rol: "Diseñador / Ilustrador y Programador",
    tagline: "Diseño & Front-end",
    accent: "#f1c8c8",
    portrait: "/imgs/benja-portrait.png",
    email: "nagmengarcia@gmail.com",
    social: {
      instagram: "https://www.instagram.com/nico.reque/",
      github: "https://github.com/spacerpunk",
      mail: "mailto:requena.nicolas@gmail.com",
    },
    bio: [
      "Tengo 7 años en el área de Diseño Digital, gráfico y de interfaces de usuario. Durante los últimos 2 años me aventuré en el mundo del desarrollo front-end para complementar mi entendimiento en el desarrollo de websites.",
      "Me encanta crear sistemas escalables y automatizar / crear flujos óptimos de trabajo.",
      "Si te interesa charlar escribíme a nagmengarcia@gmail.com.",
    ],
    trayectoria: [
      { puesto: "Diseñador de Producción Sr, WPP Production.", periodo: "(2026 - HOY)" },
      { puesto: "Diseñador de Producción Ssr, WPP Production.", periodo: "(2022 - 2025)" },
      { puesto: "Diseñador Digital Ssr, Aivo.", periodo: "(2020 - 2021)" },
      { puesto: "Freelancer.", periodo: "(2019 - 2021)" },
      { puesto: "Consultor Creativo, Woola Brands.", periodo: "(2019 - 2021)" },
      { puesto: "Líder de Diseño, Keenvil.", periodo: "(2019)" },
      { puesto: "Diseñador UI Jr, Keenvil.", periodo: "(2019)" },
      { puesto: "Diseñador, Gráfica Espacio Uno.", periodo: "(2018 - 2019)" },
    ],
    estudios: {
      izquierda: [
        { texto: "Bachiller en Cs Sociales y Humanidades.", periodo: "(P. 2011)" },
        { texto: "Técnicatura en Diseño Gráfico.", periodo: "(2018)" },
        { texto: "Carrera de Desarrollador Front-end React.", periodo: "(2024)" },
      ],
      derecha: [
        { texto: "React JS, CoderHouse.", periodo: "(2024)" },
        { texto: "Javascript, CoderHouse.", periodo: "(2024)" },
        { texto: "Desarrollo Web, CoderHouse.", periodo: "(2023)" },
        { texto: "UX/UI, CoderHouse.", periodo: "(2021)" },
        { texto: "Diseño Web & JS, Nakama Workshops.", periodo: "(2021)" },
        { texto: "Tecnicatura en Diseño Gráfico.", periodo: "(2018)" },
      ],
    },
    herramientas: [
      "Illustrator", "Photoshop", "InDesign", "After Effects", "Premiere",
      "Adobe XD", "Sketch", "Figma", "Zeplin", "HTML5", "CSS & Sass",
      "React JS", "Javascript",
    ],
    idiomas: ["Español nativo", "Inglés intermedio"],
  },

  {
    id: "nico",
    nombre: "Nico",
    nombreCompleto: "Nicolás Requena",
    saludo: "Hola, soy Nico",
    rol: "Creative Technologist / Postproductor Audiovisual",
    tagline: "Musica, Tech & Video",
    accent: "#bcd4f1",
    portrait: "/imgs/nico-portrait.jpg",
    email: "hola@ruidodemate.studio",
    social: {
      instagram: "https://www.instagram.com/nico.reque/",
      github: "https://github.com/spacerpunk",
      mail: "mailto:requena.nicolas@gmail.com",
    },
    bio: [
      "Compositor, Ingeniero en Sonido y Productor Musical que se enseño a si mismo a programar, ama el Cine y los VFX.",
      "Empece en el mundo del sonido para cine pero mi camino me llevo a aprender 3D, VFX y Edicion de video y hoy llevo más ahi que en el mundo del audio.",
      "¿Tenés un proyecto en mente? Escribíme a hola@ruidodemate.studio.",
    ],
    trayectoria: [
      { puesto: "Creative Technologist & AI Engineer @ .monks", periodo: "(2023 - HOY)" },
      { puesto: "3D Generalist, Video Editor, VFX Artist @ Tungsteno Films", periodo: "(2019 - HOY)" },
      { puesto: "Director de Audio & Compositor", periodo: "(2018 - 2022)" },
      { puesto: "Sonido Directo, Edicion de Dialogo", periodo: "(2016 - 2018)" },
      { puesto: "Compositor, Musica para Publicidad y Cortometrajes", periodo: "(2012 - 2016)" }
    ],
    estudios: {
      izquierda: [
        { texto: "Produccion Musical", periodo: "(2012 - 2015)" },
        { texto: "Ingenieria en Sonido", periodo: "(2015)" },
        { texto: "Diseño Industrial", periodo: "(2026)" },
      ],
      derecha: [
        { texto: "Game Audio", periodo: "(2019)" },
        { texto: "Unreal Engine Partnership", periodo: "(2022)" },
        { texto: "C++ Programacion para Video Juegos", periodo: "(2022)" },
        { texto: "NVIDIA NIMS Training & Agents", periodo: "(2026)" }
      ],
    },
    herramientas: [
      "Pro Tools", "Blender", "Unreal Engine", "After Effects", "DaVinci Resolve", "Photoshop", "Cubase", "MaxMSP","Premiere", "C++", "JS", "Tidal Cycles", "Agentic AI"
    ],
    idiomas: ["Español nativo", "Inglés avanzado"],
  },

  {
    id: "palo",
    nombre: "Palo",
    nombreCompleto: "Paloma Mollo",
    saludo: "Hola, soy Palo",
    rol: "Diseñadora de Imagen y Sonido / Fotógrafa",
    tagline: "Postproducción & Motion Graphics",
    accent: "#f1c8c8",
    portrait: "/imgs/palo-portrait.jpg",
    email: "paloma.mollo@gmail.com",
    social: {
      instagram: "https://www.instagram.com/palo.jpg/",
      youtube: "https://youtube.com/@palomamollo",
      behance: "https://www.behance.net/palomamollo",
      mail: "mailto:paloma.mollo@gmail.com",
    },
    bio: [
      "Soy diseñadora de Imagen y Sonido y fotógrafa. Me especializo en postproducción, con foco en edición de video y motion graphics, y también tengo experiencia trabajando con workflows 3D y Realidad Virtual.",
      "Durante el último año estuve enfocándome especialmente en la automatización de contenido audiovisual: desarrollo de templates de After Effects, expresiones y workflows que permiten producir grandes volúmenes de videos de forma más rápida y eficiente.",
      "Si querés que trabajemos juntos, podés escribirme a paloma.mollo@gmail.com o contactarte con todo el equipo de RdM :)",
    ],
    trayectoria: [
      { puesto: "Medior Video Editor, Monks.", periodo: "(2024 - ACTUALIDAD)" },
      { puesto: "Postproducción y Motion Graphics para Contenido Audiovisual de Redes, Freelance.", periodo: "(2022 - 2024)" },
      { puesto: "Generalista 3D, Number9VR.", periodo: "(2021 - 2022)" },
    ],
    estudios: {
      izquierda: [
        { texto: "Diseño de Imagen y Sonido, Universidad de Buenos Aires.", periodo: "(2017 - 2025)" },
        { texto: "Diseño Gráfico, Universidad de Buenos Aires.", periodo: "(2021 - ACTUALIDAD)" },
        { texto: "Curso de Fotografía Profesional, Instituto IDES.", periodo: "(2015 - 2016)" },
        { texto: "Bachillerato en Ciencias Sociales.", periodo: "(2016)" },
      ],
      derecha: [
        { texto: "Ayudante de cátedra, Animación 3D — Cátedra ex-Malamud, FADU, UBA.", periodo: "(2025 - ACTUALIDAD)" },
        { texto: "Curso de Fotografía Profesional, Instituto IDES — Certificación UNLaM.", periodo: "(2015 - 2016)" },
      ],
    },
    herramientas: [
      "After Effects", "Premiere", "Photoshop", "Illustrator", "Blender 3D",
      "Unreal Engine", "Figma",
    ],
    idiomas: ["Español nativo", "Inglés intermedio"],
  },

  {
    id: "ceci",
    nombre: "Ceci",
    nombreCompleto: "Cecilia Fagoaga",
    saludo: "Hola, soy Ceci",
    rol: "Sonidista",
    tagline: "Postproducción de sonido",
    accent: "#c8d8f1",
    portrait: "/imgs/ceci-portrait.jpg",
    email: "fagoagacecilia@gmail.com",
    social: {
      mail: "mailto:fagoagacecilia@gmail.com",
    },
    bio: [
      "Desde hace 4 años me dedico al área de postproducción de sonido en cine y series.",
      "Grabo y edito foley y también hago diseño de sonido para mini documentales web desde hace ya dos años.",
      "Trabajé en proyectos como El Eternauta, Los Delincuentes, Envidiosa, entre otras cositas. También doy clases en FADU en Sonido 1.",
      "Si te interesa charlar escribime a fagoagacecilia@gmail.com.",
    ],
    trayectoria: [
      { puesto: "Postproducción y Diseño de Sonido.", periodo: "(2022 - HOY)" },
    ],
    estudios: {
      izquierda: [
        { texto: "Diseñadora de Imagen y Sonido, Universidad de Buenos Aires.", periodo: "" },
      ],
      derecha: [],
    },
    herramientas: [
      "Pro Tools", "Reaper",
    ],
    idiomas: ["Español nativo", "Inglés"],
  },

  {
    id: "mati",
    nombre: "Mati",
    nombreCompleto: "Matias Crochi",
    saludo: "Hola, soy Matias",
    rol: "Editor / Realizador Audiovisual",
    tagline: "Edición & Realización",
    accent: "#c8e6d0",
    portrait: "/imgs/matias-portrait.jpg",
    email: "hola@ruidodemate.studio",
    social: {
      instagram: "https://www.instagram.com/nico.reque/",
      github: "https://github.com/spacerpunk",
      mail: "mailto:requena.nicolas@gmail.com",
    },
    bio: [
      "Editor y realizador audiovisual. Trabajo piezas de principio a fin: montaje, ritmo y postproducción para publicidad, videoclips y contenido de marca.",
      "Me gusta encontrar la mejor versión de cada historia en la sala de edición.",
      "Podés ver mi trabajo completo en mi portfolio.",
    ],
    trayectoria: [
      { puesto: "Editor / Realizador, Ruido de Mate.", periodo: "(2023 - HOY)" },
      { puesto: "Editor Audiovisual, Freelance.", periodo: "(2020 - 2023)" },
      { puesto: "Asistente de Edición, Productora.", periodo: "(2018 - 2020)" },
    ],
    estudios: {
      izquierda: [
        { texto: "Realización Audiovisual.", periodo: "(2018)" },
        { texto: "Edición y Montaje.", periodo: "(2019)" },
      ],
      derecha: [
        { texto: "Dirección de Fotografía, Taller.", periodo: "(2021)" },
        { texto: "Color, Curso.", periodo: "(2022)" },
        { texto: "Narrativa Audiovisual.", periodo: "(2020)" },
      ],
    },
    herramientas: [
      "Premiere", "After Effects", "DaVinci Resolve", "Photoshop",
    ],
    idiomas: ["Español nativo", "Inglés intermedio"],
  },
];

export function getMember(id) {
  return TEAM.find((m) => m.id === id) || null;
}
