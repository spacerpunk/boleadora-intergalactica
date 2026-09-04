// UI string dictionary. Each key holds { es, en }.
// Data content (bios, project copy) lives translated in src/data/* instead.
//
// Strings may contain {placeholders} that t(key, params) replaces.

export const STRINGS = {
  // --- Navigation ---
  "nav.trabajos": { es: "Trabajos", en: "Work" },
  "nav.equipo": { es: "Equipo", en: "Team" },
  "nav.portfolio": { es: "Portfolio", en: "Portfolio" },
  "nav.contacto": { es: "Contacto", en: "Contact" },
  "nav.perfil": { es: "Perfil", en: "Profile" },
  "nav.inicio": { es: "Inicio", en: "Home" },

  // --- Home ---
  "home.eyebrow": {
    es: "Postproducción & Creatividad",
    en: "Post-production & Creativity",
  },
  "home.heroText": {
    es: "Somos un equipo de postproductores y creativos. Diseño, edición, dirección de arte y VFX bajo un mismo techo — de la idea a la pieza final.",
    en: "We're a team of post-producers and creatives. Design, editing, art direction and VFX under one roof — from the idea to the final piece.",
  },
  "home.teamTitle": { es: "El equipo", en: "The team" },
  "home.contactTitle": { es: "Trabajemos juntos", en: "Let's work together" },
  "home.contactText": {
    es: "¿Tenés un proyecto en mente? Contanos de qué se trata y te respondemos con una propuesta.",
    en: "Got a project in mind? Tell us what it's about and we'll get back to you with a proposal.",
  },
  "home.contactCta": { es: "Trabajemos juntos", en: "Let's work together" },
  "home.docTitle": {
    es: "Postproducción & Creatividad",
    en: "Post-production & Creativity",
  },

  // --- Featured works ---
  "featured.title": { es: "Nuestros trabajos", en: "Our work" },
  "featured.text": {
    es: "Una selección de piezas del equipo. Mirá el detalle de cada una o explorá el portfolio completo.",
    en: "A selection of pieces by the team. Dive into each one or explore the full portfolio.",
  },
  "featured.seeAll": {
    es: "Ver todo el portfolio →",
    en: "See the full portfolio →",
  },

  // --- Project cards / modal ---
  "project.view": { es: "Ver proyecto →", en: "View project →" },
  "project.viewAria": {
    es: "Ver proyecto {title}",
    en: "View project {title}",
  },

  // --- Team card ---
  "team.viewProfile": { es: "Ver perfil →", en: "View profile →" },

  // --- Portfolio page ---
  "portfolio.eyebrow": { es: "Portfolio", en: "Portfolio" },
  "portfolio.studioTitle": { es: "Nuestro trabajo", en: "Our work" },
  "portfolio.studioText": {
    es: "Una selección de proyectos del equipo. Hacé clic en cualquiera para ver el detalle.",
    en: "A selection of projects by the team. Click any to see the details.",
  },
  "portfolio.memberTitle": {
    es: "Trabajos de {name}",
    en: "{name}'s work",
  },
  "portfolio.memberText": {
    es: "Una selección de proyectos de {name}. Hacé clic en cualquiera para ver más.",
    en: "A selection of projects by {name}. Click any to see more.",
  },
  "portfolio.backProfile": {
    es: "← Volver al perfil",
    en: "← Back to profile",
  },
  "portfolio.empty": {
    es: "Todavía no hay proyectos cargados. ¡Muy pronto!",
    en: "No projects here yet. Coming soon!",
  },
  "portfolio.docStudio": { es: "Portfolio", en: "Portfolio" },
  "portfolio.docMember": {
    es: "Portfolio de {name}",
    en: "{name}'s portfolio",
  },

  // --- Profile page ---
  "profile.trayectoria": { es: "Trayectoria Laboral", en: "Work Experience" },
  "profile.estudios": {
    es: "Estudios y Certificaciones",
    en: "Education & Certifications",
  },
  "profile.herramientas": {
    es: "Herramientas / Tecnologías",
    en: "Tools / Technologies",
  },
  "profile.idiomas": { es: "Idiomas", en: "Languages" },
  "profile.viewPortfolio": {
    es: "Ver portfolio de {name} →",
    en: "View {name}'s portfolio →",
  },
  "profile.portraitAlt": {
    es: "Retrato de {name}",
    en: "Portrait of {name}",
  },

  // --- Footer ---
  "footer.rights": {
    es: "TODOS LOS DERECHOS RESERVADOS.",
    en: "ALL RIGHTS RESERVED.",
  },

  // --- Theme toggle ---
  "theme.toLight": {
    es: "Activar modo claro",
    en: "Switch to light mode",
  },
  "theme.toDark": {
    es: "Activar modo oscuro",
    en: "Switch to dark mode",
  },
  "theme.light": { es: "Modo claro", en: "Light mode" },
  "theme.dark": { es: "Modo oscuro", en: "Dark mode" },

  // --- Language toggle ---
  "lang.aria": {
    es: "Cambiar idioma a inglés",
    en: "Switch language to Spanish",
  },
  "lang.title": {
    es: "English",
    en: "Español",
  },

  // --- Contact modal ---
  "contact.eyebrow": { es: "Trabajemos juntos", en: "Let's work together" },
  "contact.title": {
    es: "Contanos de tu proyecto",
    en: "Tell us about your project",
  },
  "contact.name": { es: "Nombre *", en: "Name *" },
  "contact.namePh": { es: "Tu nombre", en: "Your name" },
  "contact.email": { es: "Email *", en: "Email *" },
  "contact.emailPh": { es: "tu@email.com", en: "you@email.com" },
  "contact.company": { es: "Empresa / marca", en: "Company / brand" },
  "contact.companyPh": { es: "Opcional", en: "Optional" },
  "contact.type": { es: "Tipo de proyecto", en: "Project type" },
  "contact.budget": { es: "Presupuesto", en: "Budget" },
  "contact.deadline": { es: "Plazo estimado", en: "Estimated timeline" },
  "contact.deadlinePh": {
    es: "Ej: 3 semanas, para fin de mes…",
    en: "e.g. 3 weeks, by end of month…",
  },
  "contact.message": {
    es: "Contanos del proyecto *",
    en: "Tell us about the project *",
  },
  "contact.messagePh": {
    es: "¿Qué necesitás? Objetivo, referencias, entregables…",
    en: "What do you need? Goal, references, deliverables…",
  },
  "contact.submit": { es: "Enviar brief", en: "Send brief" },
  "contact.orWrite": {
    es: "o escribinos a {mail}",
    en: "or write to us at {mail}",
  },
  "contact.close": { es: "Cerrar", en: "Close" },
  "contact.sentText": {
    es: "¡Gracias! Se abrió tu cliente de correo con el brief listo para enviar. Si no se abrió, escribinos directo a ",
    en: "Thanks! Your email client just opened with the brief ready to send. If it didn't, write to us directly at ",
  },

  // Brief mailto composition
  "brief.subject": {
    es: "Brief de proyecto — {name}",
    en: "Project brief — {name}",
  },
  "brief.newContact": { es: "Nuevo contacto", en: "New contact" },
  "brief.lblName": { es: "Nombre", en: "Name" },
  "brief.lblEmail": { es: "Email", en: "Email" },
  "brief.lblCompany": { es: "Empresa / marca", en: "Company / brand" },
  "brief.lblType": { es: "Tipo de proyecto", en: "Project type" },
  "brief.lblBudget": { es: "Presupuesto", en: "Budget" },
  "brief.lblDeadline": { es: "Plazo", en: "Timeline" },
  "brief.lblProject": { es: "Proyecto:", en: "Project:" },
};

// Contact form option lists. Index-aligned across languages so the value the
// user sees always matches the current language.
export const CONTACT_TYPES = {
  es: [
    "Edición / Montaje",
    "VFX / 3D",
    "Diseño de sonido / Foley",
    "Dirección de arte",
    "Diseño / Front-end",
    "Proyecto integral",
    "Otro",
  ],
  en: [
    "Editing",
    "VFX / 3D",
    "Sound design / Foley",
    "Art direction",
    "Design / Front-end",
    "Full project",
    "Other",
  ],
};

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
