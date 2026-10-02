// UI string dictionary. Each key holds { es, en }.
// Data content (services, demos, team, projects) lives translated in
// src/data/* instead, as { es, en } fields resolved with L().
//
// Strings may contain {placeholders} that t(key, params) replaces.

export const STRINGS = {
  // --- Shell ---
  skip: { es: "Saltar al contenido", en: "Skip to content" },
  "dialog.close": { es: "Cerrar", en: "Close" },

  // --- Navigation ---
  "nav.homeAria": { es: "Ruido de Mate — Inicio", en: "Ruido de Mate — Home" },
  "nav.where": { es: "BUENOS AIRES ↗ MUNDO", en: "BUENOS AIRES ↗ WORLD" },
  "nav.menu": { es: "MENÚ +", en: "MENU +" },
  "nav.close": { es: "CERRAR −", en: "CLOSE −" },
  "nav.aria": { es: "Navegación principal", en: "Main navigation" },
  "nav.about": { es: "Nosotros", en: "About" },
  "nav.contact": { es: "Hablemos", en: "Let's talk" },
  "motion.pause": { es: "Pausar animaciones", en: "Pause animations" },
  "motion.play": { es: "Activar animaciones", en: "Play animations" },
  "motion.reduced": {
    es: "Animaciones desactivadas por preferencia del sistema",
    en: "Animations off by system preference",
  },
  "lang.aria": {
    es: "Cambiar idioma a inglés",
    en: "Switch language to Spanish",
  },

  // --- Hero ---
  "hero.tagline": {
    es: "PUBLICIDAD CON IA. CRITERIO DE CINE.",
    en: "AI ADVERTISING. A FILMMAKER'S EYE.",
  },
  "hero.reelAria": { es: "Ver reel del estudio", en: "Watch the studio reel" },
  "hero.reel": { es: "VER REEL", en: "WATCH REEL" },
  "hero.eyebrow": {
    es: "CONTENIDO SINTÉTICO / FILMS CON IA / UGC CON AGENTES",
    en: "SYNTHETIC CONTENT / AI FILMS / AGENT-MADE UGC",
  },
  "hero.title1": { es: "OFICIO VIEJO.", en: "OLD CRAFT." },
  "hero.title2": { es: "MUNDO NUEVO.", en: "NEW WORLD." },
  "hero.text1": {
    es: "Publicidad hecha con inteligencia artificial",
    en: "Advertising made with artificial intelligence",
  },
  "hero.text2": {
    es: "por gente de cine, post y sonido.",
    en: "by people from film, post and sound.",
  },
  "hero.downAria": { es: "Conocer el estudio", en: "Meet the studio" },
  "hero.videoStopped": {
    es: "Video pausado con las animaciones",
    en: "Video paused along with animations",
  },
  "hero.videoPlay": { es: "Reproducir video de fondo", en: "Play background video" },
  "hero.videoPause": { es: "Pausar video de fondo", en: "Pause background video" },
  "hero.stopped": { es: "Ⅱ EN PAUSA", en: "Ⅱ PAUSED" },
  "hero.play": { es: "▷ REPRODUCIR", en: "▷ PLAY" },
  "hero.pause": { es: "Ⅱ PAUSAR", en: "Ⅱ PAUSE" },
  "hero.reelLabel": { es: "Reel de Ruido de Mate", en: "Ruido de Mate reel" },
  "hero.reelCaption": {
    es: "RUIDO DE MATE / SELECTED CUTS — EDICIÓN VISUAL, SIN AUDIO",
    en: "RUIDO DE MATE / SELECTED CUTS — PICTURE EDIT, NO SOUND",
  },

  // --- Home ---
  "home.docTitle": {
    es: "Ruido de Mate — Publicidad con IA. Oficio de cine.",
    en: "Ruido de Mate — AI advertising. Film craft.",
  },
  "home.who": { es: "[ QUIÉNES SOMOS ]", en: "[ WHO WE ARE ]" },
  "home.fromSet": { es: "DEL SET A LA IA", en: "FROM THE SET TO AI" },
  "home.manifesto1": { es: "La IA genera.", en: "AI generates." },
  "home.manifesto2": { es: "El oficio", en: "Craft" },
  "home.manifesto3": { es: "decide.", en: "decides." },
  "home.manifestoText": {
    es: "Somos un estudio de publicidad especializado en inteligencia artificial. Venimos de rodajes, islas de edición y salas de mezcla: aprendimos a contar historias antes de que existiera un prompt. Hoy usamos la IA para producir más rápido y a escala, y el oficio para que el resultado no parezca hecho con IA.",
    en: "We're an advertising studio specialized in artificial intelligence. We come from film sets, edit suites and mixing rooms: we learned to tell stories before prompts existed. Today we use AI to produce faster and at scale, and craft to make sure the result doesn't look AI-made.",
  },
  "home.niche": {
    es: "UN SOLO NICHO: PUBLICIDAD. TRES PILARES.",
    en: "ONE NICHE: ADVERTISING. THREE PILLARS.",
  },
  "home.team": { es: "UN MISMO EQUIPO. ↓", en: "ONE TEAM. ↓" },
  "home.nextCampaign": {
    es: "[ TU PRÓXIMA CAMPAÑA EMPIEZA ACÁ ]",
    en: "[ YOUR NEXT CAMPAIGN STARTS HERE ]",
  },
  "home.contact1": { es: "¿HACEMOS", en: "MAKE SOME" },
  "home.contact2": { es: "RUIDO?", en: "NOISE?" },
  "home.contactText": {
    es: "Traé tu producto, tu marca o tu calendario de contenido.",
    en: "Bring your product, your brand or your content calendar.",
  },
  "home.contactCta": { es: "Contanos tu proyecto", en: "Tell us about your project" },
  "home.contactMail": { es: "O ESCRIBINOS POR EMAIL ↗", en: "OR EMAIL US ↗" },

  // --- Demos ---
  "clone.product": { es: "Producto", en: "Product" },
  "clone.setting": { es: "Situación", en: "Setting" },
  "clone.ugc": { es: "UGC con el clon", en: "UGC with the clone" },
  "clone.hintHover": { es: "Pasá el mouse", en: "Hover to turn" },
  "clone.hintTouch": { es: "Deslizá", en: "Swipe" },
  "clone.spinAria": {
    es: "{alt}. Vista 360: mové el mouse sobre la imagen o usá las flechas.",
    en: "{alt}. 360° view: move the mouse over the image or use the arrow keys.",
  },
  "clone.clipAria": { es: "UGC con el clon: {name}", en: "UGC with the clone: {name}" },
  "clone.viewLarge": { es: "Ver en grande: {name}", en: "View large: {name}" },
  "clone.onStage": { es: "▶ En pantalla", en: "▶ On screen" },
  "film.frameAlt": { es: "Fotograma de {title}", en: "Frame from {title}" },
  "film.raw": { es: "CRUDO", en: "RAW" },
  "film.final": { es: "FINAL", en: "FINAL" },
  "film.compare": {
    es: "Comparar el fotograma crudo con el final",
    en: "Compare the raw frame with the final one",
  },
  "film.watch": { es: "VER FILM ↗", en: "WATCH FILM ↗" },
  "ugc.model": { es: "Modelo", en: "Creator" },
  "ugc.action": { es: "Acción", en: "Action" },
  "ugc.sheet": { es: "Character sheet", en: "Character sheet" },
  "ugc.sheetAlt": {
    es: "Character sheet de {name}: cuerpo entero en cuatro ángulos y cinco expresiones",
    en: "{name}'s character sheet: full body from four angles and five expressions",
  },
  "ugc.paid": {
    es: "Colaboración pagada · Creado con IA",
    en: "Paid partnership · Made with AI",
  },

  // --- About ---
  "about.docTitle": { es: "Nosotros — Ruido de Mate", en: "About — Ruido de Mate" },
  "about.kicker": { es: "[ NOSOTROS ]", en: "[ ABOUT ]" },
  "about.title1": { es: "HUMANOS", en: "HUMANS" },
  "about.title2": { es: "DETRÁS DE", en: "BEHIND" },
  "about.title3": { es: "LA IA.", en: "THE AI." },
  "about.intro": {
    es: "Editores, postproductores, sonidistas, diseñadores y tecnólogos creativos. Aprendimos el oficio en rodajes, islas de edición y salas de mezcla; hoy lo aplicamos a la publicidad hecha con inteligencia artificial.",
    en: "Editors, post-producers, sound designers, designers and creative technologists. We learned the craft on film sets, in edit suites and mixing rooms; today we bring it to advertising made with artificial intelligence.",
  },
  "about.teamKicker": { es: "[ EL EQUIPO ]", en: "[ THE TEAM ]" },
  "about.teamTitle": { es: "Humanos, por suerte.", en: "Humans, luckily." },
  "about.alterOn": { es: "ACTIVAR ALTER EGOS ↗", en: "SWITCH ON ALTER EGOS ↗" },
  "about.alterOff": { es: "VOLVER A LA REALIDAD ↺", en: "BACK TO REALITY ↺" },
  "about.hint": {
    es: "PASÁ POR LOS RETRATOS: CADA UNO TIENE SU VERSIÓN GENERADA CON IA.",
    en: "HOVER THE PORTRAITS: EACH ONE HAS AN AI-GENERATED VERSION.",
  },
  "about.archive1": { es: "De dónde venimos:", en: "Where we come from:" },
  "about.archive2": { es: "el archivo del equipo.", en: "the team's archive." },
  "about.archiveCta": { es: "Ver el archivo ↗", en: "See the archive ↗" },
  "about.next1": { es: "La próxima campaña", en: "The next campaign" },
  "about.next2": { es: "podría ser la tuya.", en: "could be yours." },
  "about.nextCta": { es: "Hablemos ↗", en: "Let's talk ↗" },

  // --- Team card ---
  "team.portraitAlt": { es: "Retrato de {name}", en: "Portrait of {name}" },
  "team.human": { es: "HUMANO /", en: "HUMAN /" },
  "team.alter": { es: "ALTER EGO IA", en: "AI ALTER EGO" },

  // --- Profile ---
  "profile.back": { es: "← VOLVER AL EQUIPO", en: "← BACK TO THE TEAM" },
  "profile.viewWork": { es: "Ver trabajos ↗", en: "See work ↗" },
  "profile.contact": { es: "Contacto ↗", en: "Contact ↗" },
  "profile.trayectoria": { es: "Trayectoria", en: "Experience" },
  "profile.formacion": { es: "Formación", en: "Education" },
  "profile.herramientas": { es: "Herramientas", en: "Tools" },
  "profile.idiomas": { es: "Idiomas", en: "Languages" },

  // --- Portfolio ---
  "portfolio.docStudio": { es: "Archivo", en: "Archive" },
  "portfolio.docMember": { es: "Trabajos de {name}", en: "{name}'s work" },
  "portfolio.kicker": { es: "[ ARCHIVO ]", en: "[ ARCHIVE ]" },
  "portfolio.kicker2": { es: "EL OFICIO DE ANTES.", en: "THE CRAFT BEFORE." },
  "portfolio.memberTitle1": { es: "EL RUIDO", en: "THE WORK" },
  "portfolio.memberTitle2": { es: "DE", en: "OF" },
  "portfolio.studioTitle1": { es: "EL OFICIO", en: "THE CRAFT" },
  "portfolio.studioTitle2": { es: "DE ANTES.", en: "BEFORE AI." },
  "portfolio.memberText": {
    es: "Una selección de proyectos de {name}.",
    en: "A selection of projects by {name}.",
  },
  "portfolio.studioText": {
    es: "Antes de la IA hubo rodajes, islas de edición y salas de mezcla. Este es el archivo de trabajos de quienes formamos Ruido de Mate: la base de todo lo que hacemos hoy.",
    en: "Before AI there were film sets, edit suites and mixing rooms. This is the archive of work by the people behind Ruido de Mate: the foundation of everything we do today.",
  },
  "portfolio.backProfile": { es: "Volver al perfil ↗", en: "Back to profile ↗" },
  "portfolio.today": { es: "Lo que hacemos hoy ↗", en: "What we do today ↗" },
  "portfolio.projectsAria": { es: "Proyectos", en: "Projects" },
  "portfolio.filterAria": { es: "Filtrar por disciplina", en: "Filter by discipline" },
  "portfolio.count": { es: "{n} PROYECTOS", en: "{n} PROJECTS" },
  "portfolio.filter.all": { es: "Todo", en: "All" },
  "portfolio.filter.post": { es: "Post & motion", en: "Post & motion" },
  "portfolio.filter.design": { es: "Creatividad & diseño", en: "Creative & design" },
  "portfolio.filter.sound": { es: "Sonido & música", en: "Sound & music" },
  "portfolio.filter.ai": { es: "IA", en: "AI" },
  "portfolio.empty": {
    es: "Todavía no hay proyectos cargados. ¡Muy pronto!",
    en: "No projects here yet. Coming soon!",
  },
  "portfolio.emptyFiltered": {
    es: "No hay proyectos en esta categoría. Probá otro filtro.",
    en: "No projects in this category. Try another filter.",
  },
  "portfolio.invite1": { es: "Hagamos algo", en: "Let's make something" },
  "portfolio.invite2": { es: "que valga la pena mirar.", en: "worth watching." },
  "portfolio.inviteCta": {
    es: "Contanos tu proyecto ↗",
    en: "Tell us about your project ↗",
  },

  // --- Project cards / modal ---
  "project.fallback": { es: "Proyecto", en: "Project" },
  "project.view": { es: "Ver proyecto →", en: "View project →" },
  "project.viewAria": { es: "Ver proyecto {title}", en: "View project {title}" },

  // --- Footer ---
  "footer.line": {
    es: "OFICIO DE CINE, HERRAMIENTAS DE IA Y UNOS CUANTOS MATES.",
    en: "FILM CRAFT, AI TOOLS AND A FEW ROUNDS OF MATE.",
  },
  "footer.top": { es: "VOLVER ARRIBA ↑", en: "BACK TO TOP ↑" },
  "footer.homeAria": { es: "Ruido de Mate, inicio", en: "Ruido de Mate, home" },

  // --- Contact modal ---
  "contact.label": { es: "Contanos tu proyecto", en: "Tell us about your project" },
  "contact.kicker": { es: "[ HAGAMOS RUIDO ]", en: "[ LET'S MAKE NOISE ]" },
  "contact.title1": { es: "Contanos", en: "Tell us about" },
  "contact.title2": { es: "tu proyecto.", en: "your project." },
  "contact.prepared": {
    es: "Tu brief está listo para enviar desde tu aplicación de correo. El envío se completa allí.",
    en: "Your brief is ready to send from your email app. Sending happens there.",
  },
  "contact.notOpened": {
    es: "Si no se abrió, escribinos a",
    en: "If it didn't open, write to us at",
  },
  "contact.back": { es: "Volver al brief ↗", en: "Back to the brief ↗" },
  "contact.name": { es: "Tu nombre *", en: "Your name *" },
  "contact.namePh": { es: "¿Cómo te llamás?", en: "What's your name?" },
  "contact.email": { es: "Email *", en: "Email *" },
  "contact.emailPh": { es: "hola@tumarca.com", en: "hello@yourbrand.com" },
  "contact.company": { es: "Empresa / marca", en: "Company / brand" },
  "contact.companyPh": { es: "Tu equipo o tu marca", en: "Your team or your brand" },
  "contact.type": { es: "¿Qué necesitás?", en: "What do you need?" },
  "contact.typeFull": { es: "Proyecto integral", en: "Full project" },
  "contact.typeOther": { es: "Otro", en: "Other" },
  "contact.budget": { es: "Presupuesto estimado", en: "Estimated budget" },
  "contact.deadline": { es: "Plazo", en: "Timeline" },
  "contact.deadlinePh": { es: "¿Para cuándo lo necesitás?", en: "When do you need it?" },
  "contact.message": {
    es: "Tu producto, tu marca o tu idea *",
    en: "Your product, brand or idea *",
  },
  "contact.messagePh": {
    es: "Qué querés comunicar, en qué redes, con qué frecuencia…",
    en: "What you want to say, on which channels, how often…",
  },
  "contact.note": {
    es: "Este formulario prepara un email. Lo enviás desde tu aplicación de correo.",
    en: "This form drafts an email. You send it from your email app.",
  },
  "contact.submit": { es: "Preparar email", en: "Draft email" },

  // Brief mailto composition
  "brief.subject": { es: "Nuevo proyecto — {name}", en: "New project — {name}" },
  "brief.name": { es: "Nombre", en: "Name" },
  "brief.email": { es: "Email", en: "Email" },
  "brief.company": { es: "Empresa", en: "Company" },
  "brief.service": { es: "Servicio", en: "Service" },
  "brief.budget": { es: "Presupuesto", en: "Budget" },
  "brief.deadline": { es: "Plazo", en: "Timeline" },
};

// Contact form budget options. Index-aligned across languages so the value the
// user sees always matches the current language.
export const CONTACT_BUDGETS = {
  es: [
    "A definir",
    "Menos de USD 1.000",
    "USD 1.000 – 5.000",
    "USD 5.000 – 15.000",
    "Más de USD 15.000",
  ],
  en: [
    "To be defined",
    "Under USD 1,000",
    "USD 1,000 – 5,000",
    "USD 5,000 – 15,000",
    "Over USD 15,000",
  ],
};
