export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  category: string
  date: string
  location: string
  attendees: string
  services: string[]
  featured: boolean
  stats: {
    label: string
    value: string
  }[]
  challenges: string[]
  solutions: string[]
  results: string[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
  tags: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  icon: string
}

export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Synerfy IASP",
    slug: "synerfy-iasp",
    description: "Evento corporativo tecnológico con 800 asistentes y networking de alto nivel",
    longDescription:
      "Evento corporativo tecnológico que reunió a 800 profesionales del sector tech en un ambiente de networking premium con activaciones digitales y experiencias inmersivas.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/synerfy-hero.jpg",
    category: "Corporativo",
    date: "2024",
    location: "Buenos Aires",
    attendees: "800",
    services: ["Producción Integral", "Networking", "Tecnología", "Catering"],
    featured: true,
    stats: [
      { label: "Asistentes", value: "800" },
      { label: "Empresas", value: "50+" },
      { label: "Speakers", value: "12" },
      { label: "Horas", value: "8" },
    ],
    challenges: [
      "Crear ambiente de networking efectivo",
      "Integrar tecnología de vanguardia",
      "Gestionar agenda compleja de speakers",
    ],
    solutions: [
      "Espacios diseñados para interacción",
      "Plataforma digital personalizada",
      "Coordinación logística detallada",
    ],
    results: [
      "95% satisfacción de asistentes",
      "200+ conexiones de negocio generadas",
      "Cobertura en medios especializados",
    ],
  },
  {
    id: "2",
    title: "Expo Autos CeNARD",
    slug: "expo-autos-cenard",
    description: "Exhibición automovilística masiva con 50,000+ visitantes y 200+ vehículos expuestos",
    longDescription:
      "La exhibición automovilística más grande del año con más de 50,000 visitantes, 200+ vehículos de lujo y deportivos, test drives exclusivos y activaciones de marcas premium.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/expo-autos-hero.jpg",
    category: "Exhibición",
    date: "2024",
    location: "CeNARD",
    attendees: "50,000+",
    services: ["Montaje", "Logística", "Seguridad", "Activaciones"],
    featured: true,
    stats: [
      { label: "Visitantes", value: "50,000+" },
      { label: "Vehículos", value: "200+" },
      { label: "Marcas", value: "25" },
      { label: "Días", value: "3" },
    ],
    challenges: [
      "Gestión de flujo masivo de visitantes",
      "Seguridad de vehículos de alto valor",
      "Coordinación de múltiples marcas",
    ],
    solutions: [
      "Sistema de control de accesos inteligente",
      "Protocolo de seguridad especializado",
      "Gestión centralizada de activaciones",
    ],
    results: ["50,000+ visitantes en 3 días", "Zero incidentes de seguridad", "100% satisfacción de expositores"],
  },
  {
    id: "3",
    title: "Buenos Aires Trap",
    slug: "buenos-aires-trap",
    description: "Festival de música trap con 15,000+ asistentes y artistas internacionales",
    longDescription:
      "El festival de trap más grande de Argentina con más de 15,000 asistentes, artistas internacionales, 3 escenarios simultáneos y experiencias inmersivas para fanáticos del género.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/buenos-aires-trap-hero.jpg",
    category: "Musical",
    date: "2024",
    location: "Buenos Aires",
    attendees: "15,000+",
    services: ["Producción", "Sonido", "Iluminación", "Seguridad"],
    featured: true,
    stats: [
      { label: "Asistentes", value: "15,000+" },
      { label: "Artistas", value: "20+" },
      { label: "Escenarios", value: "3" },
      { label: "Horas", value: "12" },
    ],
    challenges: [
      "Gestión de multitudes jóvenes",
      "Coordinación de múltiples escenarios",
      "Logística de artistas internacionales",
    ],
    solutions: ["Plan de seguridad especializado", "Sistema de sonido distribuido", "Protocolo VIP para artistas"],
    results: ["15,000+ fanáticos satisfechos", "Trending topic nacional", "Cobertura mediática masiva"],
  },
  {
    id: "4",
    title: "Abel Pintos Giras",
    slug: "abel-pintos-giras",
    description: "Control oficial de accesos para giras con 14,431 tickets y 86.2% de asistencia promedio",
    longDescription:
      "Gestión integral como controlador oficial de accesos para las giras de Abel Pintos, incluyendo CORDILLERA Y MAR y GRACIAS A LA VIDA + ACÚSTICO, con tecnología de punta y análisis detallado.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/abel-pintos-hero.jpg",
    category: "Musical",
    date: "2024",
    location: "Argentina",
    attendees: "14,431",
    services: ["Control Accesos", "Ticketing", "Analytics", "Logística"],
    featured: true,
    stats: [
      { label: "Tickets", value: "14,431" },
      { label: "Asistencia", value: "86.2%" },
      { label: "Ciudades", value: "6" },
      { label: "Eventos", value: "9" },
    ],
    challenges: ["Gestión de múltiples venues", "Control preciso de asistencia", "Análisis en tiempo real"],
    solutions: ["Sistema unificado de control", "Tecnología QR avanzada", "Dashboard de analytics"],
    results: [
      "86.2% tasa de asistencia promedio",
      "Zero errores en control de accesos",
      "Mejor performance: Ushuaia 98.4%",
    ],
  },
  {
    id: "5",
    title: "La Mirona",
    slug: "la-mirona",
    description: "4 eventos corporativos de fin de año con 4,000 asistentes y sorteos digitales interactivos",
    longDescription:
      "Colaboración estratégica con La Mirona para MIGOR, desarrollando 4 eventos corporativos de fin de año con plataforma digital personalizada, sorteos interactivos y experiencias gamificadas.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/la-mirona-hero.jpg",
    category: "Corporativo",
    date: "2024",
    location: "Buenos Aires",
    attendees: "4,000",
    services: ["Desarrollo Digital", "Gamificación", "Producción", "Analytics"],
    featured: true,
    stats: [
      { label: "Eventos", value: "4" },
      { label: "Asistentes", value: "4,000" },
      { label: "Participación", value: "95%" },
      { label: "Sorteos", value: "20+" },
    ],
    challenges: [
      "Crear experiencia digital atractiva",
      "Gestionar múltiples eventos simultáneos",
      "Maximizar participación en sorteos",
    ],
    solutions: [
      "Plataforma gamificada personalizada",
      "Sistema de gestión centralizado",
      "Mecánicas de engagement innovadoras",
    ],
    results: ["95% participación en dinámicas", "4,000 asistentes totales", "100% satisfacción del cliente"],
  },
  {
    id: "6",
    title: "Myke Towers Concert",
    slug: "myke-towers-concert",
    description: "Concierto en doble sede con 6,000+ asistentes en Tecnópolis y Estadio Mary Terán de Weiss",
    longDescription:
      "Producción integral del concierto de Myke Towers en formato doble sede, adaptando la experiencia musical a dos venues diferentes con sistemas de sonido, iluminación y logística especializada.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/myke-towers-hero.jpg",
    category: "Musical",
    date: "2024",
    location: "Buenos Aires",
    attendees: "6,000+",
    services: ["Producción", "Sonido", "Iluminación", "Logística"],
    featured: false,
    stats: [
      { label: "Asistentes", value: "6,000+" },
      { label: "Venues", value: "2" },
      { label: "Horas", value: "4" },
      { label: "Crew", value: "50+" },
    ],
    challenges: [
      "Adaptación a dos venues diferentes",
      "Coordinación logística compleja",
      "Mantenimiento de calidad en ambas sedes",
    ],
    solutions: ["Sistema modular adaptable", "Equipos especializados por venue", "Protocolo de calidad unificado"],
    results: ["6,000+ fanáticos satisfechos", "Sold out en ambas fechas", "Experiencia musical excepcional"],
  },
  {
    id: "7",
    title: "Wave Conference 2023",
    slug: "wave-conference-2023",
    description: "Conferencia tecnológica con 2,500 asistentes, speakers internacionales y networking premium",
    longDescription:
      "Conferencia tecnológica de vanguardia que reunió a 2,500 profesionales del sector tech con speakers internacionales, workshops especializados y espacios de networking diseñados para maximizar las conexiones de negocio.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/wave-conference-hero.jpg",
    category: "Tecnológico",
    date: "2023",
    location: "Buenos Aires",
    attendees: "2,500",
    services: ["Producción", "Tecnología", "Networking", "Streaming"],
    featured: false,
    stats: [
      { label: "Asistentes", value: "2,500" },
      { label: "Speakers", value: "25" },
      { label: "Workshops", value: "12" },
      { label: "Países", value: "8" },
    ],
    challenges: [
      "Gestión de agenda compleja",
      "Tecnología de streaming avanzada",
      "Networking efectivo para 2,500 personas",
    ],
    solutions: [
      "Plataforma de gestión integral",
      "Sistema de streaming profesional",
      "App de networking personalizada",
    ],
    results: ["2,500 profesionales conectados", "500+ conexiones de negocio", "Streaming a 10,000+ viewers"],
  },
  {
    id: "8",
    title: "Leyendas de México",
    slug: "leyendas-de-mexico",
    description: "Control de accesos para evento cultural masivo con 25,000+ asistentes en dos ediciones",
    longDescription:
      "Gestión integral del control de accesos para Leyendas de México en sus dos ediciones, implementando sistema de acreditación con códigos QR dinámicos y soporte técnico en tiempo real para 25,000+ asistentes.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/leyendas-mexico-hero.jpg",
    category: "Cultural",
    date: "2024-2025",
    location: "Tecnópolis",
    attendees: "25,000+",
    services: ["Control Accesos", "Acreditación", "Soporte Técnico", "Analytics"],
    featured: false,
    stats: [
      { label: "Asistentes", value: "25,000+" },
      { label: "Ediciones", value: "2" },
      { label: "QR Codes", value: "25,000+" },
      { label: "Uptime", value: "99.9%" },
    ],
    challenges: ["Gestión masiva de asistentes", "Sistema de acreditación complejo", "Soporte técnico 24/7"],
    solutions: ["Códigos QR dinámicos", "Sistema de backup redundante", "Equipo de soporte especializado"],
    results: ["25,000+ accesos gestionados", "99.9% uptime del sistema", "Zero incidentes de seguridad"],
  },
  {
    id: "9",
    title: "Fiesta Nacional de la Manzana",
    slug: "fiesta-nacional-de-la-manzana",
    description: "Festival gastronómico tradicional con 8,000+ asistentes y actividades familiares",
    longDescription:
      "Organización integral de la Fiesta Nacional de la Manzana, celebrando la tradición gastronómica argentina con más de 8,000 asistentes, stands gastronómicos, espectáculos folclóricos y actividades para toda la familia.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/fiesta-manzana-hero.jpg",
    category: "Gastronómico",
    date: "2024",
    location: "Río Negro",
    attendees: "8,000+",
    services: ["Producción", "Gastronomía", "Entretenimiento", "Logística"],
    featured: false,
    stats: [
      { label: "Asistentes", value: "8,000+" },
      { label: "Stands", value: "40+" },
      { label: "Shows", value: "15" },
      { label: "Días", value: "3" },
    ],
    challenges: [
      "Coordinación de múltiples stands",
      "Logística gastronómica compleja",
      "Entretenimiento para todas las edades",
    ],
    solutions: ["Layout optimizado de stands", "Sistema de refrigeración móvil", "Programación diversificada"],
    results: ["8,000+ visitantes satisfechos", "40+ productores participantes", "Tradición gastronómica preservada"],
  },
  {
    id: "10",
    title: "Saint Mary of the Hills",
    slug: "saint-mary-of-the-hills",
    description: "Torneo deportivo internacional con 1,200 asistentes y competencias de alto nivel",
    longDescription:
      "Organización del torneo deportivo Saint Mary of the Hills, reuniendo a 1,200 participantes y espectadores en competencias de alto nivel con estándares internacionales y cobertura mediática especializada.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/saint-mary-hero.jpg",
    category: "Deportivo",
    date: "2024",
    location: "Buenos Aires",
    attendees: "1,200",
    services: ["Organización Deportiva", "Logística", "Arbitraje", "Cobertura"],
    featured: false,
    stats: [
      { label: "Participantes", value: "1,200" },
      { label: "Deportes", value: "8" },
      { label: "Países", value: "12" },
      { label: "Días", value: "5" },
    ],
    challenges: [
      "Coordinación de múltiples deportes",
      "Estándares internacionales",
      "Logística de equipos extranjeros",
    ],
    solutions: ["Cronograma optimizado", "Protocolo de calidad deportiva", "Servicios de hospitalidad"],
    results: [
      "1,200 deportistas satisfechos",
      "Estándares internacionales cumplidos",
      "Cobertura en medios deportivos",
    ],
  },
  {
    id: "11",
    title: "Manchester City Trophy Tour",
    slug: "manchester-city-treble-trophy-tour", // cambié de manchester-city-trophy-tour a manchester-city-treble-trophy-tour
    description: "Experiencia integral para Manchester City con 2,000+ fanáticos y branding deportivo mundial",
    longDescription:
      "Una de nuestras producciones más emblemáticas. DER se encargó de diseñar, coordinar y ejecutar cada aspecto desde conceptualización creativa hasta operativo en terreno, reuniendo más de 2,000 fanáticos en una atmósfera de branding deportivo de clase mundial.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg",
    category: "Deportivo",
    date: "2024",
    location: "Argentina",
    attendees: "2,000+",
    services: ["Producción Integral", "Branding", "Experiencia Fan", "Gestión Prensa"],
    featured: false,
    stats: [
      { label: "Fanáticos", value: "2,000+" },
      { label: "Activaciones", value: "Múltiples" },
      { label: "Cobertura", value: "Mediática" },
      { label: "Branding", value: "Mundial" },
    ],
    challenges: [
      "Experiencia auténtica Manchester City",
      "Adaptación al contexto argentino",
      "Múltiples activaciones simultáneas",
    ],
    solutions: [
      "Identidad global + toques locales",
      "Sistema de gestión en tiempo real",
      "Equipos dedicados especializados",
    ],
    results: ["2,000+ fanáticos reunidos", "Cobertura en medios principales", "Experiencia inmersiva lograda"],
  },
  {
    id: "campus-party-entre-rios-2025",
    title: "Campus Party Entre Ríos 2025",
    slug: "campus-party-entre-rios-2025",
    description: "Evento tecnológico masivo con 10,000+ asistentes, hackathons y conferencias",
    longDescription:
      "Producción integral de Campus Party 2024, el evento tecnológico más grande del año con más de 10,000 asistentes, hackathons de 48 horas, conferencias magistrales y actividades de innovación tecnológica.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/campus-party-hero.jpg",
    category: "Tecnológico",
    date: "2024",
    location: "Buenos Aires",
    attendees: "10,000+",
    services: ["Producción", "Tecnología", "Hackathons", "Networking"],
    featured: false,
    stats: [
      { label: "Asistentes", value: "10,000+" },
      { label: "Hackathons", value: "5" },
      { label: "Conferencias", value: "30+" },
      { label: "Horas", value: "72" },
    ],
    challenges: [
      "Gestión de evento de 72 horas",
      "Infraestructura tecnológica masiva",
      "Coordinación de múltiples actividades",
    ],
    solutions: ["Operativo 24/7 especializado", "Red de conectividad robusta", "Sistema de gestión integral"],
    results: ["10,000+ participantes activos", "5 hackathons exitosos", "Networking masivo logrado"],
  },
  {
    id: "13",
    title: "Espacio Shell 2024",
    slug: "espacio-shell-2024",
    description: "Evento corporativo con 1,500 asistentes y tecnología Face ID para control de accesos",
    longDescription:
      "Evento corporativo premium para Shell con 1,500 asistentes, implementando tecnología Face ID para control de accesos, experiencias VIP personalizadas y activaciones de marca de alto impacto.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/shell-hero.jpg",
    category: "Corporativo",
    date: "2024",
    location: "Buenos Aires",
    attendees: "1,500",
    services: ["Face ID", "Producción", "Experiencias VIP", "Branding"],
    featured: false,
    stats: [
      { label: "Asistentes", value: "1,500" },
      { label: "Face ID", value: "100%" },
      { label: "VIP", value: "200" },
      { label: "Activaciones", value: "8" },
    ],
    challenges: ["Implementación de Face ID masivo", "Experiencias VIP diferenciadas", "Branding corporativo premium"],
    solutions: ["Sistema Face ID de última generación", "Espacios VIP exclusivos", "Activaciones de marca inmersivas"],
    results: ["100% precisión en Face ID", "1,500 experiencias personalizadas", "Branding corporativo exitoso"],
  },
  {
    id: "indie-dev-argentina-2025",
    title: "Indie Dev Argentina 2025",
    slug: "indie-dev-argentina-2025",
    description: "Conferencia de desarrollo indie con 1,500+ asistentes, showcases y networking especializado",
    longDescription:
      "Indie Dev Argentina 2025, la conferencia más importante de desarrollo independiente del país con más de 1,500 desarrolladores, showcases de juegos, conferencias especializadas, workshops técnicos y networking enfocado en la industria indie.",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1748920002/indie-dev-hero.jpg",
    category: "Gaming",
    date: "2025",
    location: "Buenos Aires",
    attendees: "1,500+",
    services: ["Producción", "Showcases", "Networking", "Streaming", "Workshops"],
    featured: true,
    stats: [
      { label: "Desarrolladores", value: "1,500+" },
      { label: "Juegos", value: "100+" },
      { label: "Conferencias", value: "25" },
      { label: "Publishers", value: "15" },
    ],
    challenges: [
      "Showcases técnicos complejos",
      "Networking especializado indie",
      "Coordinación con publishers internacionales",
    ],
    solutions: [
      "Espacios de showcase optimizados",
      "Plataforma de networking especializada",
      "Protocolo para publishers internacionales",
    ],
    results: [
      "1,500+ desarrolladores conectados",
      "100+ juegos showcaseados",
      "15 publishers internacionales participantes",
    ],
  },
]

export const categories = [
  "Todos",
  "Corporativo",
  "Musical",
  "Tecnológico",
  "Deportivo",
  "Cultural",
  "Gastronómico",
  "Exhibición",
  "Empresarial",
  "Gaming",
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Tendencias en Eventos 2025: Tecnología e Innovación",
    slug: "tendencias-eventos-2025",
    excerpt:
      "Descubrí las principales tendencias que marcarán la industria de eventos en 2025, desde IA hasta experiencias híbridas.",
    content: "El 2025 promete ser un año revolucionario para la industria de eventos...",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/blog-tendencias-2025.jpg",
    author: "DER Team",
    date: "2024-12-15",
    category: "Tendencias",
    readTime: "5 min",
    tags: ["Tecnología", "Innovación", "Eventos", "2025"],
  },
  {
    id: "2",
    title: "Cómo Organizar Eventos Corporativos Exitosos",
    slug: "eventos-corporativos-exitosos",
    excerpt: "Guía completa para planificar y ejecutar eventos corporativos que generen impacto y ROI medible.",
    content: "Los eventos corporativos son una herramienta fundamental para las empresas...",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/blog-corporativos.jpg",
    author: "DER Team",
    date: "2024-12-10",
    category: "Corporativo",
    readTime: "7 min",
    tags: ["Corporativo", "ROI", "Planificación", "Empresas"],
  },
  {
    id: "3",
    title: "El Futuro de los Eventos Musicales Post-Pandemia",
    slug: "eventos-musicales-post-pandemia",
    excerpt: "Análisis de cómo la industria musical se adaptó y las nuevas oportunidades que surgieron.",
    content: "La pandemia transformó para siempre la industria de eventos musicales...",
    image: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/blog-musicales.jpg",
    author: "DER Team",
    date: "2024-12-05",
    category: "Musical",
    readTime: "6 min",
    tags: ["Música", "Post-Pandemia", "Adaptación", "Industria"],
  },
]

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "¿Qué servicios ofrece DER Event Hub?",
    answer:
      "Ofrecemos servicios integrales de producción de eventos: desde conceptualización y planificación hasta ejecución completa. Incluye control de accesos, tecnología, logística, catering, entretenimiento y post-evento.",
    category: "Servicios",
  },
  {
    id: "2",
    question: "¿Cuál es el tamaño mínimo y máximo de eventos que manejan?",
    answer:
      "Manejamos eventos desde 50 personas hasta más de 50,000 asistentes. Nuestro portfolio incluye desde reuniones corporativas íntimas hasta festivales masivos y conciertos internacionales.",
    category: "Capacidad",
  },
  {
    id: "3",
    question: "¿Con cuánta anticipación debo contactarlos?",
    answer:
      "Recomendamos contactarnos con al menos 2-3 meses de anticipación para eventos medianos, y 6+ meses para eventos masivos o complejos. Sin embargo, también manejamos eventos con menor tiempo de planificación.",
    category: "Planificación",
  },
  {
    id: "4",
    question: "¿Trabajan en todo el país?",
    answer:
      "Sí, trabajamos en toda Argentina y también tenemos experiencia en eventos internacionales. Contamos con una red de proveedores y partners en las principales ciudades del país.",
    category: "Cobertura",
  },
  {
    id: "5",
    question: "¿Cómo calculan el presupuesto de un evento?",
    answer:
      "El presupuesto se calcula según múltiples factores: cantidad de asistentes, tipo de evento, servicios requeridos, ubicación, duración y complejidad. Ofrecemos cotizaciones detalladas y transparentes.",
    category: "Presupuesto",
  },
  {
    id: "6",
    question: "¿Qué garantías ofrecen?",
    answer:
      "Garantizamos la ejecución profesional del evento según lo acordado, con seguros de responsabilidad civil, planes de contingencia y un equipo de soporte 24/7 durante el evento.",
    category: "Garantías",
  },
]

export const services: Service[] = [
  {
    id: "1",
    name: "Producción Integral",
    description: "Gestión completa de eventos desde la conceptualización hasta la ejecución",
    features: [
      "Planificación estratégica",
      "Coordinación logística",
      "Gestión de proveedores",
      "Supervisión en tiempo real",
    ],
    icon: "settings",
  },
  {
    id: "2",
    name: "Control de Accesos",
    description: "Sistemas avanzados de control y gestión de asistentes",
    features: ["Tecnología QR y Face ID", "Acreditación digital", "Analytics en tiempo real", "Soporte técnico 24/7"],
    icon: "shield",
  },
  {
    id: "3",
    name: "Experiencias Digitales",
    description: "Plataformas y activaciones digitales personalizadas",
    features: ["Apps de evento", "Gamificación", "Streaming profesional", "Redes sociales"],
    icon: "monitor",
  },
  {
    id: "4",
    name: "Eventos Corporativos",
    description: "Soluciones especializadas para el sector empresarial",
    features: ["Networking premium", "Conferencias magistrales", "Team building", "ROI medible"],
    icon: "users",
  },
]

// Funciones utilitarias
export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return featuredProjects.filter((project) => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  return featuredProjects.filter((project) => project.category === category)
}

// Alias para compatibilidad
export const projects = featuredProjects
