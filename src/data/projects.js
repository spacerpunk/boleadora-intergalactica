// Portfolio projects. Shown on the studio portfolio (/portfolio) and, filtered
// by `owner`, on each member's portfolio (/portfolio/:id).
//
// - cover: optional image path (in /public). If omitted, a gradient placeholder
//   is rendered using `accent`.
// - links: array of { label, url } shown inside the project modal.
//
// Translatable fields (categoria, cliente, resumen, descripcion, tags, link
// labels) are written as { es, en }. Titles, years, URLs and brand names stay
// as plain strings and are shared across languages. The UI resolves them via
// the L() helper in src/i18n.

export const PROJECTS = [
  {
    id: "fud",
    titulo: "Füd",
    categoria: { es: "UX/UI · App Mobile", en: "UX/UI · Mobile App" },
    cliente: { es: "Proyecto académico", en: "Academic project" },
    anio: "2021",
    owner: "benja",
    cover: "/imgs/projects/fud.jpg",
    resumen: {
      es: "Diseño de una app mobile con metodología Design Thinking.",
      en: "Design of a mobile app using the Design Thinking method.",
    },
    descripcion: {
      es: [
        "Creación y diseño de app mobile. Füd es un proyecto realizado en la cursada de UX/UI de CoderHouse.",
        "Consistió en crear un producto mínimo viable para celular a través de la metodología Design Thinking y la utilización de patrones comunes de UI.",
      ],
      en: [
        "Creation and design of a mobile app. Füd is a project made during the UX/UI course at CoderHouse.",
        "It consisted of building a minimum viable product for mobile through the Design Thinking method and the use of common UI patterns.",
      ],
    },
    tags: {
      es: ["UX/UI", "Design Thinking", "Mobile", "Prototipado"],
      en: ["UX/UI", "Design Thinking", "Mobile", "Prototyping"],
    },
    links: [
      { label: { es: "Ver caso completo", en: "View full case" }, url: "#" },
      { label: "Behance", url: "https://www.behance.net/" },
    ],
  },
  {
    id: "tienda10",
    titulo: "Tienda 10",
    categoria: { es: "Motion · E-commerce", en: "Motion · E-commerce" },
    cliente: "Tienda 10",
    anio: "2022",
    owner: "benja",
    cover: "/imgs/projects/tienda10.gif",
    resumen: {
      es: "Piezas animadas para una tienda online.",
      en: "Animated pieces for an online store.",
    },
    descripcion: {
      es: [
        "Set de piezas animadas para campañas de e-commerce: banners, stories y motion para redes.",
        "El objetivo fue darle ritmo y personalidad a la comunicación de producto manteniendo la identidad de marca.",
      ],
      en: [
        "A set of animated pieces for e-commerce campaigns: banners, stories and motion for social media.",
        "The goal was to give the product communication rhythm and personality while keeping the brand identity.",
      ],
    },
    tags: {
      es: ["Motion", "Social", "E-commerce"],
      en: ["Motion", "Social", "E-commerce"],
    },
    links: [{ label: { es: "Ver reel", en: "Watch reel" }, url: "#" }],
  },
  {
    id: "toyota-team23",
    titulo: "Toyota @ Team23",
    categoria: {
      es: "IA Generativa · Film Publicitario",
      en: "Generative AI · Commercial Film",
    },
    cliente: { es: "Toyota (vía Team23)", en: "Toyota (via Team23)" },
    anio: "2025",
    owner: "nico",
    accent: "#d7000f",
    cover: "/imgs/projects/nico-toyota-team23.jpg",
    resumen: {
      es: "Storyboards y assets generados con IA para un film conceptual de Toyota.",
      en: "AI-generated storyboards and assets for a Toyota concept film.",
    },
    descripcion: {
      es: [
        "Storyboards e imágenes generadas con IA para un cortometraje conceptual publicitario de Toyota, construidos a partir de referencias y modelos 3D, con dirección de arte de Team23 para mantener el auto fiel al producto real.",
        "El pipeline combinó ComfyUI, Weave y Fal.ai con modelos como Flux 2, NanoBanana2, Seedream y ChatGPT Image 2. Mi rol fue la generación de imágenes y storyboards, y luego la generación y composición de los elementos de video. Edición, sonido, música y armado final estuvieron a cargo de Team23.",
      ],
      en: [
        "AI-generated storyboards and images for a Toyota conceptual commercial short, built from references and 3D models, with art direction by Team23 to keep the car true to the real product.",
        "The pipeline combined ComfyUI, Weave and Fal.ai with models like Flux 2, NanoBanana2, Seedream and ChatGPT Image 2. My role was image and storyboard generation, and then the generation and compositing of the video elements. Editing, sound, music and final assembly were handled by Team23.",
      ],
    },
    tags: {
      es: ["IA Generativa", "Storyboard", "Compositing", "Automotriz"],
      en: ["Generative AI", "Storyboard", "Compositing", "Automotive"],
    },
    links: [
      {
        label: { es: "Ver en YouTube", en: "Watch on YouTube" },
        url: "https://www.youtube.com/watch?v=31N6t_bTIJI",
      },
      {
        label: { es: "Caso completo", en: "Full case" },
        url: "https://spacerpunk.github.io/work/toyotateam23",
      },
      { label: "Team23", url: "https://www.team23.online/" },
    ],
  },
  {
    id: "dove",
    titulo: "Dove: Real Virtual Beauty",
    categoria: {
      es: "Animación · 3D / Unreal Engine",
      en: "Animation · 3D / Unreal Engine",
    },
    cliente: "Dove — LOLA MullenLowe",
    anio: "2022",
    owner: "nico",
    accent: "#bcd4f1",
    cover: "/imgs/projects/nico-dove.jpg",
    resumen: {
      es: "Animación de personajes para el lanzamiento global de Dove en el mundo gaming.",
      en: "Character animation for Dove's global launch into the gaming world.",
    },
    descripcion: {
      es: [
        "Dove entra al mundo del gaming con el lanzamiento global de Real Virtual Beauty, una serie de compromisos que desafían la representación de la belleza online y la educación de la autoestima en el ámbito virtual.",
        "Trabajé en la animación de personajes del proyecto, realizado con Substance 3D Painter, After Effects, Blender y Unreal Engine. Dirección de Pedro Maccarone para la agencia LOLA MullenLowe Madrid.",
      ],
      en: [
        "Dove steps into the gaming world with the global launch of Real Virtual Beauty, a series of commitments that challenge how beauty is represented online and how self-esteem is taught in virtual spaces.",
        "I worked on character animation for the project, made with Substance 3D Painter, After Effects, Blender and Unreal Engine. Directed by Pedro Maccarone for the agency LOLA MullenLowe Madrid.",
      ],
    },
    tags: {
      es: ["Animación", "Rigging", "Unreal Engine", "Blender", "Personajes"],
      en: ["Animation", "Rigging", "Unreal Engine", "Blender", "Characters"],
    },
    links: [
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/153780873/Dove-Real-Virtual-Beauty",
      },
      {
        label: { es: "Caso completo", en: "Full case" },
        url: "https://spacerpunk.github.io/work/dove",
      },
    ],
  },
  {
    id: "nasaxhonda",
    titulo: "NASA × Honda",
    categoria: {
      es: "Film Conceptual · Dirección",
      en: "Concept Film · Direction",
    },
    cliente: { es: "Proyecto personal", en: "Personal project" },
    anio: "2025",
    owner: "nico",
    accent: "#e0503a",
    cover: "/imgs/projects/nico-nasaxhonda.jpg",
    resumen: {
      es: "Cortometraje conceptual: una Honda diseñada por la NASA para cualquier terreno.",
      en: "Concept short film: a Honda designed by NASA for any terrain.",
    },
    descripcion: {
      es: [
        "Un cortometraje dinámico de 15 a 30 segundos. Ingenieros de Honda —bajo un programa clasificado junto a la NASA— construyen una moto para cualquier terreno: la Honda XR-LRV, TEST UNIT 03. La misma ingeniería de los rovers de Marte y la Luna llevada a dos ruedas.",
        "Estética retrofuturista de los años 70–80: granulada, quemada por el sol y cinética, como archivo de la NASA cruzado con motocross en Super 8. El diseño de la moto se resolvió con renders conceptuales generados por IA (Gemini).",
      ],
      en: [
        "A dynamic 15-to-30-second short film. Honda engineers — under a classified program with NASA — build a bike for any terrain: the Honda XR-LRV, TEST UNIT 03. The same engineering behind the Mars and Moon rovers, brought to two wheels.",
        "A retro-futuristic 70s–80s aesthetic: grainy, sun-bleached and kinetic, like NASA archive footage crossed with Super 8 motocross. The bike design was resolved with AI-generated concept renders (Gemini).",
      ],
    },
    tags: {
      es: ["Film Conceptual", "IA Generativa", "Diseño", "Motion"],
      en: ["Concept Film", "Generative AI", "Design", "Motion"],
    },
    links: [
      {
        label: { es: "Ver en YouTube", en: "Watch on YouTube" },
        url: "https://www.youtube.com/watch?v=_F7XKzWlcxc",
      },
      {
        label: { es: "Caso completo", en: "Full case" },
        url: "https://spacerpunk.github.io/projects/NasaXHonda",
      },
    ],
  },
  {
    id: "agentic-monks",
    titulo: "Agentic @ Monks",
    categoria: {
      es: "IA Agéntica · Automatización",
      en: "Agentic AI · Automation",
    },
    cliente: "Monks",
    anio: "2025",
    owner: "nico",
    accent: "#c8b6f1",
    cover: "/imgs/projects/nico-agentic-monks.gif",
    resumen: {
      es: "Un pipeline 100% agéntico que genera contenido always-on-brand de punta a punta.",
      en: "A 100% agentic pipeline that generates always-on-brand content end to end.",
    },
    descripcion: {
      es: [
        "Un pipeline completamente agéntico construido con Cursor y Claude que conecta las APIs de generación de imagen, texto y video de Google para producir renders siempre fieles a la marca y al producto, alimentando directamente templates de After Effects para generar contenido terminado de forma dinámica.",
        "Orquestado en n8n, el agente resuelve la toma del brief, el prompt engineering consistente con la marca, la generación y el filtrado de assets, y el poblado de templates: convierte un proceso manual de varios días en una corrida automática que entrega variaciones listas para publicar en minutos.",
      ],
      en: [
        "A fully agentic pipeline built with Cursor and Claude that connects Google's image, text and video generation APIs to produce renders that are always true to the brand and the product, feeding After Effects templates directly to generate finished content dynamically.",
        "Orchestrated in n8n, the agent handles the brief intake, brand-consistent prompt engineering, asset generation and filtering, and template population: it turns a multi-day manual process into an automatic run that delivers ready-to-publish variations in minutes.",
      ],
    },
    tags: {
      es: ["IA Agéntica", "n8n", "GenAI", "After Effects", "Automatización"],
      en: ["Agentic AI", "n8n", "GenAI", "After Effects", "Automation"],
    },
    links: [
      {
        label: { es: "Caso completo", en: "Full case" },
        url: "https://spacerpunk.github.io/work/agenticmonks",
      },
    ],
  },
  {
    id: "tungsteno",
    titulo: "Tungsteno Films",
    categoria: {
      es: "Dirección de Audio · VFX / 3D",
      en: "Audio Direction · VFX / 3D",
    },
    cliente: "Tungsteno Films",
    anio: "2016–2021",
    owner: "nico",
    accent: "#8fd6a8",
    cover: "/imgs/projects/nico-tungsteno.jpg",
    resumen: {
      es: "Dirección de audio y VFX/3D en una productora de cine independiente.",
      en: "Audio direction and VFX/3D at an independent film studio.",
    },
    descripcion: {
      es: [
        "De 2016 a 2021 trabajé como Director de Audio y luego como Generalista de VFX y 3D en esta productora de cine independiente de Buenos Aires (hoy también en Barcelona). Cuatro cortometrajes, el piloto de una serie, una serie animada semanal, pitches en Unreal Engine para clientes y mucha música original.",
        "Diseño de sonido, música original y mezcla 5.1 en films como La Grieta, Abismo y NO! (Festival Internacional de Mar del Plata), además de animación, render y compositing en piezas para Pringles y la experiencia Legends en el Museo del Fútbol de Barcelona.",
      ],
      en: [
        "From 2016 to 2021 I worked as Audio Director and later as a VFX and 3D Generalist at this independent film studio in Buenos Aires (now also in Barcelona). Four short films, a series pilot, a weekly animated series, Unreal Engine pitches for clients and a lot of original music.",
        "Sound design, original music and 5.1 mixing on films like La Grieta, Abismo and NO! (Mar del Plata International Film Festival), plus animation, rendering and compositing on pieces for Pringles and the Legends experience at the Football Museum in Barcelona.",
      ],
    },
    tags: {
      es: ["Sound Design", "Música Original", "VFX", "3D", "Unreal Engine"],
      en: ["Sound Design", "Original Music", "VFX", "3D", "Unreal Engine"],
    },
    links: [
      { label: "Tungsteno Films", url: "https://tungstenofilms.com/projects" },
      {
        label: { es: "Caso completo", en: "Full case" },
        url: "https://spacerpunk.github.io/work/Tungsteno",
      },
    ],
  },
  {
    id: "atea",
    titulo: "ATEA — Música Original",
    categoria: { es: "Música · Sound Design", en: "Music · Sound Design" },
    cliente: {
      es: "ATEA (marca de indumentaria)",
      en: "ATEA (apparel brand)",
    },
    anio: "2021",
    owner: "nico",
    accent: "#d8c8f1",
    resumen: {
      es: "Horas de música original compuestas para una marca de indumentaria.",
      en: "Hours of original music composed for an apparel brand.",
    },
    descripcion: {
      es: [
        "ATEA es una marca de indumentaria para la que compuse horas de música original para un video de playlist chill.",
        "Podés escuchar extractos del score en Bandcamp.",
      ],
      en: [
        "ATEA is an apparel brand for which I composed hours of original music for a chill playlist video.",
        "You can listen to excerpts of the score on Bandcamp.",
      ],
    },
    tags: {
      es: ["Música Original", "Composición", "Sound Design"],
      en: ["Original Music", "Composition", "Sound Design"],
    },
    links: [
      {
        label: { es: "Escuchar en Bandcamp", en: "Listen on Bandcamp" },
        url: "https://spacerpunk.bandcamp.com/album/atea-tracks",
      },
      {
        label: { es: "Caso completo", en: "Full case" },
        url: "https://spacerpunk.github.io/work/atea",
      },
    ],
  },
  {
    id: "cafe-orbital",
    titulo: "Café Orbital",
    categoria: {
      es: "Branding · Identidad Visual",
      en: "Branding · Visual Identity",
    },
    cliente: "Café Orbital",
    anio: "2023",
    owner: "palo",
    accent: "#f1e3bc",
    resumen: {
      es: "Sistema de identidad visual para una cafetería de especialidad.",
      en: "Visual identity system for a specialty coffee shop.",
    },
    descripcion: {
      es: [
        "Dirección de arte e identidad visual completa: logotipo, paleta, tipografías y aplicaciones.",
        "El universo gráfico se inspira en lo espacial y lo artesanal, buscando un tono cálido y contemporáneo.",
      ],
      en: [
        "Art direction and a full visual identity: logo, palette, typography and applications.",
        "The graphic universe draws on the spatial and the artisanal, aiming for a warm, contemporary tone.",
      ],
    },
    tags: {
      es: ["Branding", "Dirección de Arte", "Tipografía"],
      en: ["Branding", "Art Direction", "Typography"],
    },
    links: [
      { label: { es: "Ver identidad", en: "View identity" }, url: "#" },
      { label: "Behance", url: "https://www.behance.net/" },
    ],
  },
  {
    id: "ceci-exteriores",
    titulo: "Sound Design — Exteriores",
    categoria: { es: "Diseño de Sonido", en: "Sound Design" },
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-exteriores.jpg",
    resumen: {
      es: "Diseño de ambientes y sonido de exteriores para cine.",
      en: "Ambience and exterior sound design for film.",
    },
    descripcion: {
      es: [
        "Diseño sonoro de escenas de exterior: construcción de ambientes, capas de fondo y detalles que dan profundidad y sensación de lugar.",
        "El objetivo fue que el espectador habite el espacio, con un sonido natural y envolvente.",
      ],
      en: [
        "Sound design for exterior scenes: building ambiences, background layers and details that add depth and a sense of place.",
        "The goal was for the viewer to inhabit the space, with a natural, immersive sound.",
      ],
    },
    tags: {
      es: ["Sound Design", "Ambientes", "Cine"],
      en: ["Sound Design", "Ambiences", "Film"],
    },
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-dna",
    titulo: "DNA (Season 2) — Foley",
    categoria: { es: "Foley · Serie", en: "Foley · Series" },
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-dna.jpg",
    resumen: {
      es: "Edición de foley para la segunda temporada de DNA.",
      en: "Foley editing for the second season of DNA.",
    },
    descripcion: {
      es: [
        "Grabación y edición de foley para la serie: pasos, ropa, objetos y manipulaciones sincronizadas cuadro a cuadro.",
        "El foley aporta la textura física que acompaña la actuación y sostiene la credibilidad de cada escena.",
      ],
      en: [
        "Recording and editing foley for the series: footsteps, clothing, objects and handling synced frame by frame.",
        "Foley brings the physical texture that supports the performance and holds up the credibility of every scene.",
      ],
    },
    tags: {
      es: ["Foley", "Serie", "Edición de Sonido"],
      en: ["Foley", "Series", "Sound Editing"],
    },
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-shortfilm",
    titulo: "Sound Design — Cortometraje",
    categoria: { es: "Diseño de Sonido", en: "Sound Design" },
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-shortfilm.jpg",
    resumen: {
      es: "Diseño sonoro integral de un cortometraje.",
      en: "Full sound design of a short film.",
    },
    descripcion: {
      es: [
        "Diseño de sonido de un cortometraje de principio a fin: ambientes, efectos y foley trabajados para acompañar la narrativa.",
        "Un enfoque sonoro pensado para reforzar el tono y la emoción de la historia.",
      ],
      en: [
        "Sound design of a short film from start to finish: ambiences, effects and foley crafted to support the narrative.",
        "A sound approach designed to reinforce the tone and emotion of the story.",
      ],
    },
    tags: {
      es: ["Sound Design", "Cortometraje", "Foley"],
      en: ["Sound Design", "Short Film", "Foley"],
    },
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-fern",
    titulo: "Fern — Sound Design Test",
    categoria: { es: "Diseño de Sonido", en: "Sound Design" },
    owner: "ceci",
    accent: "#d8c8f1",
    cover: "/imgs/projects/ceci-fern.jpg",
    resumen: {
      es: "Prueba de rediseño sonoro y atmósferas.",
      en: "A sound redesign and atmosphere test.",
    },
    descripcion: {
      es: [
        "Ejercicio de rediseño sonoro: reconstrucción de efectos y atmósferas para explorar el clima de la pieza.",
        "Una muestra del proceso de búsqueda de texturas y tratamiento del sonido.",
      ],
      en: [
        "A sound redesign exercise: rebuilding effects and atmospheres to explore the mood of the piece.",
        "A glimpse of the process of searching for textures and shaping sound.",
      ],
    },
    tags: {
      es: ["Sound Design", "Atmósferas", "Test"],
      en: ["Sound Design", "Atmospheres", "Test"],
    },
    links: [
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "ceci-destacados",
    titulo: "Trabajos destacados",
    categoria: { es: "Reel · Sound Design", en: "Reel · Sound Design" },
    owner: "ceci",
    accent: "#d8c8f1",
    resumen: {
      es: "Una selección de trabajos de sonido en video.",
      en: "A selection of sound work in video.",
    },
    descripcion: {
      es: [
        "Una selección de piezas donde el diseño de sonido y el foley tienen un rol protagónico.",
        "Podés verlas en los siguientes enlaces.",
      ],
      en: [
        "A selection of pieces where sound design and foley take center stage.",
        "You can watch them at the links below.",
      ],
    },
    tags: {
      es: ["Sound Design", "Foley", "Reel"],
      en: ["Sound Design", "Foley", "Reel"],
    },
    links: [
      { label: { es: "Trabajo 1", en: "Work 1" }, url: "https://youtu.be/k6QEtPm8VLY" },
      { label: { es: "Trabajo 2", en: "Work 2" }, url: "https://youtu.be/XH32psFPxao" },
      { label: { es: "Trabajo 3", en: "Work 3" }, url: "https://youtu.be/kVlbMBqoa3A" },
      { label: "IMDb", url: "https://www.imdb.com/es/name/nm14398099/" },
    ],
  },
  {
    id: "mati-genius",
    titulo: "Generation Genius",
    categoria: { es: "Motion Graphics", en: "Motion Graphics" },
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-genius.jpg",
    resumen: {
      es: "Motion graphics para contenido educativo de Generation Genius.",
      en: "Motion graphics for Generation Genius educational content.",
    },
    descripcion: {
      es: [
        "Animación y motion graphics para piezas de Generation Genius.",
        "Diseño de movimiento pensado para acompañar y clarificar el contenido.",
      ],
      en: [
        "Animation and motion graphics for Generation Genius pieces.",
        "Motion design meant to support and clarify the content.",
      ],
    },
    tags: {
      es: ["Motion Graphics", "After Effects", "Animación"],
      en: ["Motion Graphics", "After Effects", "Animation"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/genaration-genius",
      },
    ],
  },
  {
    id: "mati-tupperware",
    titulo: "Tupperware",
    categoria: { es: "Cámara · Publicidad", en: "Camera · Advertising" },
    cliente: "Tupperware",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-tupperware.jpg",
    resumen: {
      es: "Trabajo de cámara para una pieza publicitaria de Tupperware.",
      en: "Camera work for a Tupperware commercial piece.",
    },
    descripcion: {
      es: [
        "Cámara para una pieza publicitaria de Tupperware.",
        "Registro de producto y planos de apoyo para la campaña.",
      ],
      en: [
        "Camera for a Tupperware commercial piece.",
        "Product footage and supporting shots for the campaign.",
      ],
    },
    tags: {
      es: ["Cámara", "Publicidad", "Producto"],
      en: ["Camera", "Advertising", "Product"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/tupperware",
      },
    ],
  },
  {
    id: "mati-wemove",
    titulo: "We Move Training",
    categoria: { es: "Edición", en: "Editing" },
    cliente: "We Move Training",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-wemove.jpg",
    resumen: {
      es: "Edición de video para We Move Training.",
      en: "Video editing for We Move Training.",
    },
    descripcion: {
      es: [
        "Edición y armado de una pieza para We Move Training.",
        "Montaje y ritmo pensados para el contenido de entrenamiento.",
      ],
      en: [
        "Editing and assembly of a piece for We Move Training.",
        "Cut and pacing tailored to training content.",
      ],
    },
    tags: {
      es: ["Edición", "Montaje", "Video"],
      en: ["Editing", "Montage", "Video"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/we-move",
      },
    ],
  },
  {
    id: "mati-cvo",
    titulo: "CVO — ENERC",
    categoria: { es: "Realización y Edición", en: "Directing & Editing" },
    cliente: "ENERC",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-cvo.jpg",
    resumen: {
      es: "Realización y edición de una entrevista para el CVO (ENERC).",
      en: "Directing and editing of an interview for the CVO (ENERC).",
    },
    descripcion: {
      es: [
        "Realización y edición de una entrevista para el CVO, sede regional de la ENERC.",
        "Registro y montaje de la pieza de principio a fin.",
      ],
      en: [
        "Directing and editing of an interview for the CVO, ENERC's regional campus.",
        "Shooting and editing the piece from start to finish.",
      ],
    },
    tags: {
      es: ["Realización", "Edición", "Entrevista"],
      en: ["Directing", "Editing", "Interview"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/entrevista-para-cvo-enerc",
      },
    ],
  },
  {
    id: "mati-lara-casa",
    titulo: "Lara Casa",
    categoria: { es: "Cámara · Publicidad", en: "Camera · Advertising" },
    cliente: "Lara Casa",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-laracasa.jpg",
    resumen: {
      es: "Trabajo de cámara para una publicidad de Lara Casa.",
      en: "Camera work for a Lara Casa commercial.",
    },
    descripcion: {
      es: [
        "Cámara para una pieza publicitaria de Lara Casa.",
        "Captura de imagen para la campaña.",
      ],
      en: [
        "Camera for a Lara Casa commercial piece.",
        "Image capture for the campaign.",
      ],
    },
    tags: {
      es: ["Cámara", "Publicidad"],
      en: ["Camera", "Advertising"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/publicidad-lara-casa",
      },
    ],
  },
  {
    id: "mati-ambar-violeta",
    titulo: "Ámbar Violeta",
    categoria: { es: "Realización", en: "Directing" },
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-ambar.jpg",
    resumen: {
      es: "Realización de la pieza Ámbar Violeta.",
      en: "Directing of the piece Ámbar Violeta.",
    },
    descripcion: {
      es: [
        "Realización del videoclip Ámbar Violeta.",
        "Dirección y puesta en imagen de la pieza.",
      ],
      en: [
        "Directing of the music video Ámbar Violeta.",
        "Direction and visual staging of the piece.",
      ],
    },
    tags: {
      es: ["Realización", "Videoclip"],
      en: ["Directing", "Music Video"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/ambar-violeta-mechi",
      },
    ],
  },
  {
    id: "mati-jara-beats",
    titulo: "Jara Iktan Beats",
    categoria: { es: "Realización y Edición", en: "Directing & Editing" },
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-jara.jpg",
    resumen: {
      es: "Realización y edición de Jara Iktan Beats.",
      en: "Directing and editing of Jara Iktan Beats.",
    },
    descripcion: {
      es: [
        "Realización y edición de la pieza Jara Iktan Beats.",
        "Rodaje y montaje trabajados de punta a punta.",
      ],
      en: [
        "Directing and editing of the piece Jara Iktan Beats.",
        "Shooting and editing handled end to end.",
      ],
    },
    tags: {
      es: ["Realización", "Edición", "Música"],
      en: ["Directing", "Editing", "Music"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/jara-iktan-beats",
      },
    ],
  },
  {
    id: "mati-harto",
    titulo: "Harto",
    categoria: { es: "Foquista", en: "Focus Puller" },
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-harto.jpg",
    resumen: {
      es: "Foquista en el rodaje de Harto.",
      en: "Focus puller on the Harto shoot.",
    },
    descripcion: {
      es: [
        "Trabajo como foquista en el rodaje de Harto.",
        "Control de foco durante la captura de imagen.",
      ],
      en: [
        "Working as focus puller on the Harto shoot.",
        "Focus control during image capture.",
      ],
    },
    tags: {
      es: ["Foquista", "Rodaje", "Cámara"],
      en: ["Focus Puller", "Shoot", "Camera"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/harto",
      },
    ],
  },
  {
    id: "mati-azcuy",
    titulo: "Azcuy",
    categoria: { es: "Edición", en: "Editing" },
    cliente: "Azcuy",
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-azcuy.jpg",
    resumen: {
      es: "Edición de una pieza para Azcuy.",
      en: "Editing of a piece for Azcuy.",
    },
    descripcion: {
      es: [
        "Edición y montaje de una pieza para Azcuy.",
        "Armado y ritmo del material.",
      ],
      en: [
        "Editing and assembly of a piece for Azcuy.",
        "Cut and pacing of the material.",
      ],
    },
    tags: {
      es: ["Edición", "Montaje"],
      en: ["Editing", "Montage"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/azcuy",
      },
    ],
  },
  {
    id: "mati-freestyle",
    titulo: "Freestyle — Iktan Jara",
    categoria: { es: "Realización", en: "Directing" },
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-freestyle.jpg",
    resumen: {
      es: "Realización de una sesión de freestyle de Iktan Jara.",
      en: "Directing of an Iktan Jara freestyle session.",
    },
    descripcion: {
      es: [
        "Realización de una sesión de freestyle de Iktan Jara.",
        "Registro en imagen de la performance.",
      ],
      en: [
        "Directing of an Iktan Jara freestyle session.",
        "Capturing the performance on camera.",
      ],
    },
    tags: {
      es: ["Realización", "Música", "Performance"],
      en: ["Directing", "Music", "Performance"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/freestyle",
      },
    ],
  },
  {
    id: "mati-santa-chana",
    titulo: "La Santa Chana",
    categoria: { es: "Asistente de Dirección", en: "Assistant Director" },
    owner: "matias",
    accent: "#c9b8f1",
    cover: "/imgs/projects/mati-santachana.jpg",
    resumen: {
      es: "Asistencia de dirección en secuencias de La Santa Chana.",
      en: "Assistant directing on sequences of La Santa Chana.",
    },
    descripcion: {
      es: [
        "Asistente de dirección en las secuencias de La Santa Chana.",
        "Apoyo a la dirección durante el rodaje.",
      ],
      en: [
        "Assistant director on the sequences of La Santa Chana.",
        "Supporting the direction during the shoot.",
      ],
    },
    tags: {
      es: ["Asistencia de Dirección", "Rodaje"],
      en: ["Assistant Direction", "Shoot"],
    },
    links: [
      {
        label: { es: "Ver en portfolio", en: "View in portfolio" },
        url: "https://matiascrochi.myportfolio.com/secuencias-la-santa-chana",
      },
    ],
  },
  {
    id: "santi-tasso",
    titulo: "Website de Santiago Tasso",
    categoria: { es: "Web · Diseño Responsive", en: "Web · Responsive Design" },
    cliente: "Santiago Tasso",
    anio: "2022",
    owner: "benja",
    accent: "#f1c8c8",
    resumen: {
      es: "Diseño de un sitio web responsive de portfolio.",
      en: "Design of a responsive portfolio website.",
    },
    descripcion: {
      es: [
        "Diseño de website responsive para el portfolio personal de Santiago Tasso.",
        "Se priorizó una navegación clara y una puesta en página que dejara respirar al contenido en todos los dispositivos.",
      ],
      en: [
        "Design of a responsive website for Santiago Tasso's personal portfolio.",
        "The focus was clear navigation and a layout that lets the content breathe across every device.",
      ],
    },
    tags: {
      es: ["Web Design", "Responsive", "UI"],
      en: ["Web Design", "Responsive", "UI"],
    },
    links: [{ label: { es: "Visitar sitio", en: "Visit site" }, url: "#" }],
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
