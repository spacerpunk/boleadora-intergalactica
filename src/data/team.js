// Team data. Edit freely — the profile pages render entirely from this file.
//
// Translatable fields are written as { es, en }. Plain strings (names, tool
// names, emails, URLs, pure date ranges) are the same in both languages and are
// left as-is. The UI resolves them through the L() helper in src/i18n.

export const TEAM = [
  {
    id: "benja",
    nombre: "Benja",
    nombreCompleto: "Benja García",
    saludo: { es: "Hola, soy Benja", en: "Hi, I'm Benja" },
    rol: {
      es: "Diseñador / Ilustrador y Programador",
      en: "Designer / Illustrator & Developer",
    },
    tagline: { es: "Diseño & Front-end", en: "Design & Front-end" },
    accent: "#f1c8c8",
    portrait: "/imgs/benja-portrait.png",
    email: "nagmengarcia@gmail.com",
    social: {
      instagram: "https://www.instagram.com/nico.reque/",
      github: "https://github.com/spacerpunk",
      mail: "mailto:requena.nicolas@gmail.com",
    },
    bio: {
      es: [
        "Tengo 7 años en el área de Diseño Digital, gráfico y de interfaces de usuario. Durante los últimos 2 años me aventuré en el mundo del desarrollo front-end para complementar mi entendimiento en el desarrollo de websites.",
        "Me encanta crear sistemas escalables y automatizar / crear flujos óptimos de trabajo.",
        "Si te interesa charlar escribíme a nagmengarcia@gmail.com.",
      ],
      en: [
        "I have 7 years of experience in digital, graphic and user-interface design. Over the last 2 years I ventured into front-end development to round out my understanding of how websites are built.",
        "I love building scalable systems and automating / designing efficient workflows.",
        "If you'd like to chat, write to me at nagmengarcia@gmail.com.",
      ],
    },
    trayectoria: [
      {
        puesto: {
          es: "Diseñador de Producción Sr, WPP Production.",
          en: "Sr Production Designer, WPP Production.",
        },
        periodo: { es: "(2026 - HOY)", en: "(2026 - PRESENT)" },
      },
      {
        puesto: {
          es: "Diseñador de Producción Ssr, WPP Production.",
          en: "Ssr Production Designer, WPP Production.",
        },
        periodo: "(2022 - 2025)",
      },
      {
        puesto: {
          es: "Diseñador Digital Ssr, Aivo.",
          en: "Ssr Digital Designer, Aivo.",
        },
        periodo: "(2020 - 2021)",
      },
      {
        puesto: { es: "Freelancer.", en: "Freelancer." },
        periodo: "(2019 - 2021)",
      },
      {
        puesto: {
          es: "Consultor Creativo, Woola Brands.",
          en: "Creative Consultant, Woola Brands.",
        },
        periodo: "(2019 - 2021)",
      },
      {
        puesto: {
          es: "Líder de Diseño, Keenvil.",
          en: "Design Lead, Keenvil.",
        },
        periodo: "(2019)",
      },
      {
        puesto: {
          es: "Diseñador UI Jr, Keenvil.",
          en: "Jr UI Designer, Keenvil.",
        },
        periodo: "(2019)",
      },
      {
        puesto: {
          es: "Diseñador, Gráfica Espacio Uno.",
          en: "Designer, Gráfica Espacio Uno.",
        },
        periodo: "(2018 - 2019)",
      },
    ],
    estudios: {
      izquierda: [
        {
          texto: {
            es: "Bachiller en Cs Sociales y Humanidades.",
            en: "High School Diploma, Social Sciences & Humanities.",
          },
          periodo: "(P. 2011)",
        },
        {
          texto: {
            es: "Técnicatura en Diseño Gráfico.",
            en: "Technical Degree in Graphic Design.",
          },
          periodo: "(2018)",
        },
        {
          texto: {
            es: "Carrera de Desarrollador Front-end React.",
            en: "Front-end React Developer Program.",
          },
          periodo: "(2024)",
        },
      ],
      derecha: [
        { texto: "React JS, CoderHouse.", periodo: "(2024)" },
        { texto: "Javascript, CoderHouse.", periodo: "(2024)" },
        {
          texto: {
            es: "Desarrollo Web, CoderHouse.",
            en: "Web Development, CoderHouse.",
          },
          periodo: "(2023)",
        },
        { texto: "UX/UI, CoderHouse.", periodo: "(2021)" },
        {
          texto: {
            es: "Diseño Web & JS, Nakama Workshops.",
            en: "Web Design & JS, Nakama Workshops.",
          },
          periodo: "(2021)",
        },
        {
          texto: {
            es: "Tecnicatura en Diseño Gráfico.",
            en: "Technical Degree in Graphic Design.",
          },
          periodo: "(2018)",
        },
      ],
    },
    herramientas: [
      "Illustrator", "Photoshop", "InDesign", "After Effects", "Premiere",
      "Adobe XD", "Sketch", "Figma", "Zeplin", "HTML5", "CSS & Sass",
      "React JS", "Javascript",
    ],
    idiomas: [
      { es: "Español nativo", en: "Native Spanish" },
      { es: "Inglés intermedio", en: "Intermediate English" },
    ],
  },

  {
    id: "nico",
    nombre: "Nico",
    nombreCompleto: "Nicolás Requena",
    saludo: { es: "Hola, soy Nico", en: "Hi, I'm Nico" },
    rol: {
      es: "Creative Technologist / Postproductor Audiovisual",
      en: "Creative Technologist / Audiovisual Post-producer",
    },
    tagline: { es: "Musica, Tech & Video", en: "Music, Tech & Video" },
    accent: "#bcd4f1",
    portrait: "/imgs/nico-portrait.jpg",
    email: "hola@ruidodemate.studio",
    social: {
      instagram: "https://www.instagram.com/nico.reque/",
      github: "https://github.com/spacerpunk",
      mail: "mailto:requena.nicolas@gmail.com",
    },
    bio: {
      es: [
        "Compositor, Ingeniero en Sonido y Productor Musical que se enseño a si mismo a programar, ama el Cine y los VFX.",
        "Empece en el mundo del sonido para cine pero mi camino me llevo a aprender 3D, VFX y Edicion de video y hoy llevo más ahi que en el mundo del audio.",
        "¿Tenés un proyecto en mente? Escribíme a hola@ruidodemate.studio.",
      ],
      en: [
        "Composer, Sound Engineer and Music Producer who taught himself to code, and who loves film and VFX.",
        "I started out in sound for film, but my path led me to learn 3D, VFX and video editing — and today I spend more time there than in the audio world.",
        "Got a project in mind? Write to me at hola@ruidodemate.studio.",
      ],
    },
    trayectoria: [
      {
        puesto: "Creative Technologist & AI Engineer @ .monks",
        periodo: { es: "(2023 - HOY)", en: "(2023 - PRESENT)" },
      },
      {
        puesto: "3D Generalist, Video Editor, VFX Artist @ Tungsteno Films",
        periodo: { es: "(2019 - HOY)", en: "(2019 - PRESENT)" },
      },
      {
        puesto: {
          es: "Director de Audio & Compositor",
          en: "Audio Director & Composer",
        },
        periodo: "(2018 - 2022)",
      },
      {
        puesto: {
          es: "Sonido Directo, Edicion de Dialogo",
          en: "Production Sound, Dialogue Editing",
        },
        periodo: "(2016 - 2018)",
      },
      {
        puesto: {
          es: "Compositor, Musica para Publicidad y Cortometrajes",
          en: "Composer, Music for Ads and Short Films",
        },
        periodo: "(2012 - 2016)",
      },
    ],
    estudios: {
      izquierda: [
        {
          texto: { es: "Produccion Musical", en: "Music Production" },
          periodo: "(2012 - 2015)",
        },
        {
          texto: { es: "Ingenieria en Sonido", en: "Sound Engineering" },
          periodo: "(2015)",
        },
        {
          texto: { es: "Diseño Industrial", en: "Industrial Design" },
          periodo: "(2026)",
        },
      ],
      derecha: [
        { texto: "Game Audio", periodo: "(2019)" },
        { texto: "Unreal Engine Partnership", periodo: "(2022)" },
        {
          texto: {
            es: "C++ Programacion para Video Juegos",
            en: "C++ Programming for Video Games",
          },
          periodo: "(2022)",
        },
        { texto: "NVIDIA NIMS Training & Agents", periodo: "(2026)" },
      ],
    },
    herramientas: [
      "Pro Tools", "Blender", "Unreal Engine", "After Effects", "DaVinci Resolve", "Photoshop", "Cubase", "MaxMSP","Premiere", "C++", "JS", "Tidal Cycles", "Agentic AI"
    ],
    idiomas: [
      { es: "Español nativo", en: "Native Spanish" },
      { es: "Inglés avanzado", en: "Advanced English" },
    ],
    portfolioLinks: [
      { label: "Full Portfolio", url: "https://spacerpunk.github.io/home" },
      { label: { es: "Música", en: "Music" }, url: "https://spacerpunk.bandcamp.com/" },
    ],
  },

  {
    id: "palo",
    nombre: "Palo",
    nombreCompleto: "Paloma Mollo",
    saludo: { es: "Hola, soy Palo", en: "Hi, I'm Palo" },
    rol: {
      es: "Diseñadora de Imagen y Sonido",
      en: "Image & Sound Designer",
    },
    tagline: {
      es: "Postproducción & Motion Graphics",
      en: "Post-production & Motion Graphics",
    },
    accent: "#f1c8c8",
    portrait: "/imgs/palo-portrait.jpg",
    email: "paloma.mollo@gmail.com",
    social: {
      instagram: "https://www.instagram.com/palo.jpg/",
      youtube: "https://youtube.com/@palomamollo",
      behance: "https://www.behance.net/palomamollo",
      mail: "mailto:paloma.mollo@gmail.com",
    },
    bio: {
      es: [
        "Soy diseñadora de Imagen y Sonido y fotógrafa. Me especializo en postproducción, con foco en edición de video y motion graphics, y también tengo experiencia trabajando con workflows 3D y Realidad Virtual.",
        "Durante el último año estuve enfocándome especialmente en la automatización de contenido audiovisual: desarrollo de templates de After Effects, expresiones y workflows que permiten producir grandes volúmenes de videos de forma más rápida y eficiente.",
        "Si querés que trabajemos juntos, podés escribirme a paloma.mollo@gmail.com o contactarte con todo el equipo de RdM :)",
      ],
      en: [
        "I'm an Image & Sound designer and photographer. I specialize in post-production, focused on video editing and motion graphics, and I also have experience working with 3D and Virtual Reality workflows.",
        "Over the past year I've been focusing especially on automating audiovisual content: building After Effects templates, expressions and workflows that make it possible to produce large volumes of video faster and more efficiently.",
        "If you'd like to work together, you can write to me at paloma.mollo@gmail.com or reach out to the whole RdM team :)",
      ],
    },
    trayectoria: [
      {
        puesto: "Medior Video Editor, Monks.",
        periodo: { es: "(2024 - ACTUALIDAD)", en: "(2024 - PRESENT)" },
      },
      {
        puesto: {
          es: "Postproducción y Motion Graphics para Contenido Audiovisual de Redes, Freelance.",
          en: "Post-production & Motion Graphics for Social Media Content, Freelance.",
        },
        periodo: "(2022 - 2024)",
      },
      {
        puesto: {
          es: "Generalista 3D, Number9VR.",
          en: "3D Generalist, Number9VR.",
        },
        periodo: "(2021 - 2022)",
      },
    ],
    estudios: {
      izquierda: [
        {
          texto: {
            es: "Diseño de Imagen y Sonido, UBA",
            en: "Image & Sound Design, UBA",
          },
          periodo: "(2017 - 2025)",
        },
        {
          texto: { es: "Diseño Gráfico, UBA", en: "Graphic Design, UBA" },
          periodo: { es: "(2021 - ACTUALIDAD)", en: "(2021 - PRESENT)" },
        },
        {
          texto: {
            es: "Curso de Fotografía Profesional, Instituto IDES",
            en: "Professional Photography Course, Instituto IDES",
          },
          periodo: "(2015 - 2016)",
        },
        {
          texto: {
            es: "Bachillerato en Ciencias Sociales",
            en: "High School Diploma, Social Sciences",
          },
          periodo: "(2016)",
        },
      ],
      derecha: [
        {
          texto: {
            es: "Ayudante de cátedra, Animación 3D — Cátedra ex-Malamud, FADU, UBA.",
            en: "Teaching Assistant, 3D Animation — former Malamud Chair, FADU, UBA.",
          },
          periodo: { es: "(2025 - ACTUALIDAD)", en: "(2025 - PRESENT)" },
        },
      ],
    },
    herramientas: [
      "After Effects", "Premiere", "Photoshop", "Illustrator", "Blender 3D",
      "Unreal Engine", "Figma",
    ],
    idiomas: [
      { es: "Español nativo", en: "Native Spanish" },
      { es: "Inglés intermedio", en: "Intermediate English" },
    ],
  },

  {
    id: "ceci",
    nombre: "Ceci",
    nombreCompleto: "Cecilia Fagoaga",
    saludo: { es: "Hola, soy Ceci", en: "Hi, I'm Ceci" },
    rol: { es: "Sonidista", en: "Sound Editor" },
    tagline: {
      es: "Postproducción de sonido",
      en: "Sound post-production",
    },
    accent: "#c8d8f1",
    portrait: "/imgs/ceci-portrait.jpg",
    email: "fagoagacecilia@gmail.com",
    social: {
      mail: "mailto:fagoagacecilia@gmail.com",
    },
    bio: {
      es: [
        "Desde hace 4 años me dedico al área de postproducción de sonido en cine y series.",
        "Grabo y edito foley y también hago diseño de sonido para mini documentales web desde hace ya dos años.",
        "Trabajé en proyectos como El Eternauta, Los Delincuentes, Envidiosa, entre otras cositas. También doy clases en FADU en Sonido 1.",
        "Si te interesa charlar escribime a fagoagacecilia@gmail.com.",
      ],
      en: [
        "For the past 4 years I've worked in sound post-production for film and series.",
        "I record and edit foley, and for the last two years I've also done sound design for short web documentaries.",
        "I've worked on projects like El Eternauta, Los Delincuentes and Envidiosa, among other things. I also teach Sound 1 at FADU.",
        "If you'd like to chat, write to me at fagoagacecilia@gmail.com.",
      ],
    },
    trayectoria: [
      {
        puesto: {
          es: "Postproducción y Diseño de Sonido.",
          en: "Sound Post-production & Design.",
        },
        periodo: { es: "(2022 - HOY)", en: "(2022 - PRESENT)" },
      },
    ],
    estudios: {
      izquierda: [
        {
          texto: {
            es: "Diseñadora de Imagen y Sonido, Universidad de Buenos Aires.",
            en: "Image & Sound Designer, University of Buenos Aires.",
          },
          periodo: "",
        },
      ],
      derecha: [],
    },
    herramientas: [
      "Pro Tools", "Reaper",
    ],
    idiomas: [
      { es: "Español nativo", en: "Native Spanish" },
      { es: "Inglés", en: "English" },
    ],
  },

  {
    id: "matias",
    nombre: "Matías",
    nombreCompleto: "Matías Crochi",
    saludo: { es: "Hola, soy Matías", en: "Hi, I'm Matías" },
    rol: {
      es: "Editor de Video / Motion Grapher y Post-productor",
      en: "Video Editor / Motion Grapher & Post-producer",
    },
    tagline: {
      es: "Post-producción & Motion",
      en: "Post-production & Motion",
    },
    accent: "#c9b8f1",
    portrait: "/imgs/matias-portrait.jpg",
    email: "matiascrochi@gmail.com",
    social: {
      portfolio: "https://matiascrochi.myportfolio.com/",
      instagram: "https://www.instagram.com/matiascrochi/",
      linkedin: "https://www.linkedin.com/in/matiascrochi/",
      mail: "mailto:matiascrochi@gmail.com",
    },
    bio: {
      es: [
        "Nací en 1995 en Buenos Aires y hace más de 7 años que vivo de la post-producción audiovisual. Me muevo cómodo entre la edición, el motion graphics y el sonido, resolviendo lo técnico y lo creativo sin perder de vista los tiempos de entrega.",
        "Arranqué como re-recording mixer y motion grapher en la localización audiovisual, seguí como editor freelance y hoy edito y animo campañas globales y locales para marcas como Amazon, Google, SC Johnson, General Motors, Paramount y LinkedIn. En paralelo estoy terminando la Licenciatura en Producción Audiovisual en la UNTREF.",
        "También automatizo procesos con inteligencia artificial y uso IA generativa para crear imagen y video, sumando esas herramientas al flujo de trabajo del equipo.",
        "Si querés charlar de un proyecto, escribíme a matiascrochi@gmail.com.",
      ],
      en: [
        "I was born in 1995 in Buenos Aires and I've made a living from audiovisual post-production for over 7 years. I move comfortably between editing, motion graphics and sound, solving both the technical and the creative sides without losing sight of deadlines.",
        "I started as a re-recording mixer and motion grapher in audiovisual localization, moved on as a freelance editor, and today I edit and animate global and local campaigns for brands like Amazon, Google, SC Johnson, General Motors, Paramount and LinkedIn. Alongside that, I'm finishing my Bachelor's in Audiovisual Production at UNTREF.",
        "I also automate processes with artificial intelligence and use generative AI to create image and video, bringing those tools into the team's workflow.",
        "If you'd like to talk about a project, write to me at matiascrochi@gmail.com.",
      ],
    },
    trayectoria: [
      {
        puesto: {
          es: "Editor de Video / Motion Graphics, Monks.",
          en: "Video Editor / Motion Graphics, Monks.",
        },
        periodo: { es: "(2024 - HOY)", en: "(2024 - PRESENT)" },
      },
      {
        puesto: {
          es: "Editor y mezclador de audiolibros, Penguin Random House.",
          en: "Audiobook Editor & Mixer, Penguin Random House.",
        },
        periodo: "(2021 - 2024)",
      },
      {
        puesto: "Re-recording mixer / Editor / Motion, Caja de Ruidos.",
        periodo: "(2021 - 2024)",
      },
      {
        puesto: {
          es: "Asistente de dirección, cámara y editor, Pájaros AV.",
          en: "Assistant Director, Camera & Editor, Pájaros AV.",
        },
        periodo: "(2019 - 2020)",
      },
    ],
    estudios: {
      izquierda: [
        {
          texto: {
            es: "Licenciatura en Producción Audiovisual, UNTREF.",
            en: "Bachelor's in Audiovisual Production, UNTREF.",
          },
          periodo: { es: "(en curso)", en: "(in progress)" },
        },
        {
          texto: {
            es: "Operador de programas de diseño gráfico (cert. Adobe), Inst. Argentino de Computación.",
            en: "Graphic Design Software Operator (Adobe cert.), Instituto Argentino de Computación.",
          },
          periodo: "(2018)",
        },
      ],
      derecha: [
        {
          texto: {
            es: "Edición de video, Adobe Premiere & DaVinci Resolve.",
            en: "Video editing, Adobe Premiere & DaVinci Resolve.",
          },
          periodo: "",
        },
        {
          texto: "Motion Graphics, Adobe After Effects.",
          periodo: "",
        },
        {
          texto: {
            es: "Edición y mezcla de audio, Pro Tools & Audition.",
            en: "Audio editing & mixing, Pro Tools & Audition.",
          },
          periodo: "",
        },
        {
          texto: {
            es: "IA generativa y automatización de procesos.",
            en: "Generative AI and process automation.",
          },
          periodo: "",
        },
      ],
    },
    herramientas: [
      "Premiere", "After Effects", "DaVinci Resolve", "Pro Tools", "Audition",
      "Photoshop", "Illustrator", "Media Encoder", "IA generativa (imagen/video)",
      "Automatización con IA",
    ],
    idiomas: [
      { es: "Español nativo", en: "Native Spanish" },
      { es: "Inglés", en: "English" },
    ],
    portfolioLinks: [
      {
        label: { es: "Portfolio completo", en: "Full portfolio" },
        url: "https://matiascrochi.myportfolio.com/",
      },
    ],
  },
];

export function getMember(id) {
  return TEAM.find((m) => m.id === id) || null;
}
