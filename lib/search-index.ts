import { featuredProjects, blogPosts, faqs } from "./data"

// Tipo para cada elemento del índice de búsqueda
export type SearchIndexItem = {
  id: string
  title: string
  content: string
  url: string
  type: "servicio" | "proyecto" | "blog" | "faq" | "página"
  tags: string[]
  image?: string
  excerpt?: string
  date?: string
}

// Función para crear el índice de búsqueda
export function createSearchIndex(): SearchIndexItem[] {
  const searchIndex: SearchIndexItem[] = []

  // Añadir servicios al índice
  const currentServices = [
    {
      id: "accesos",
      slug: "accesos",
      title: "Control de Accesos Inteligente",
      description: "Sistema propio con QR únicos, Face ID avanzado y dashboard en tiempo real. De 300 a 5,000+ asistentes.",
    },
    {
      id: "tecnologia-eventos",
      slug: "tecnologia-eventos",
      title: "Tecnología Audiovisual",
      description: "Streaming profesional, equipamiento de sonido e iluminación, producción audiovisual completa.",
    },
    {
      id: "tecnologia",
      slug: "tecnologia",
      title: "Aplicaciones Interactivas",
      description: "Apps personalizadas, sorteos digitales en tiempo real, plataformas de engagement para eventos.",
    },
    {
      id: "produccion-integral",
      slug: "produccion-integral",
      title: "Producción Integral",
      description: "Gestión 360° desde la planificación hasta la ejecución. Coordinación completa de proveedores y logística.",
    },
    {
      id: "gestion-deportiva",
      slug: "gestion-deportiva",
      title: "Gestión Deportiva",
      description: "Organización completa de torneos, competencias y eventos deportivos con logística especializada.",
    },
    {
      id: "logistica",
      slug: "logistica",
      title: "Logística y Coordinación",
      description: "Transporte, setup, coordinación de equipos y gestión operativa completa del evento.",
    },
    {
      id: "marketing-experiencial",
      slug: "marketing-experiencial",
      title: "Marketing y Activaciones",
      description: "Estrategias de marketing, activaciones de marca y experiencias memorables para tu audiencia.",
    },
    {
      id: "fotografia-video",
      slug: "fotografia-video",
      title: "Fotografía y Video",
      description: "Cobertura profesional completa, contenido audiovisual y documentación de tu evento.",
    },
    {
      id: "gastronomia",
      slug: "gastronomia",
      title: "Gastronomía y Catering",
      description: "Food trucks, catering premium, servicios gastronómicos adaptados a tu evento y audiencia.",
    },
    {
      id: "post-evento",
      slug: "post-evento",
      title: "Post-Evento y Analytics",
      description: "Análisis completo de datos, reportes de impacto y métricas de ROI para optimizar futuros eventos.",
    },
    {
      id: "consultoria-estrategica",
      slug: "consultoria-estrategica",
      title: "Consultoría Estratégica",
      description: "Asesoramiento integral desde la conceptualización hasta la ejecución de tu estrategia de eventos.",
    },
    {
      id: "alianzas-estrategicas",
      slug: "alianzas-estrategicas",
      title: "Alianzas Estratégicas",
      description: "Gestión de sponsors, partnerships corporativos y alianzas que potencien el impacto de tu evento.",
    },
  ]

  currentServices.forEach((service) => {
    searchIndex.push({
      id: service.id,
      title: service.title,
      content: service.description,
      url: `/servicios/${service.slug}`,
      type: "servicio",
      tags: [service.title, "servicio", ...service.description.split(" ")],
      image: `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(service.title)}`,
    })
  })

  // Añadir proyectos al índice
  featuredProjects.forEach((project) => {
    searchIndex.push({
      id: project.id,
      title: project.title,
      content: project.description,
      url: `/proyectos/${project.id}`,
      type: "proyecto",
      tags: [project.title, "proyecto", project.category, ...project.description.split(" ")],
      image: project.image,
    })
  })

  // Añadir posts del blog al índice
  blogPosts.forEach((post) => {
    searchIndex.push({
      id: post.id,
      title: post.title,
      content: post.excerpt,
      url: `/blog/${post.id}`,
      type: "blog",
      tags: [post.title, "blog", post.category, post.author, ...post.excerpt.split(" ")],
      image: post.image,
      excerpt: post.excerpt,
      date: post.date,
    })
  })

  // Añadir FAQs al índice
  faqs.forEach((faq, index) => {
    searchIndex.push({
      id: `faq-${index}`,
      title: faq.question,
      content: faq.answer,
      url: `/faq#faq-${index}`,
      type: "faq",
      tags: [faq.question, "faq", "pregunta", "ayuda", ...faq.answer.split(" ")],
    })
  })

  // Añadir páginas principales
  const mainPages = [
    {
      id: "home",
      title: "Inicio",
      content: "Página principal de DER Eventos, soluciones integrales para eventos.",
      url: "/",
      tags: ["inicio", "home", "principal", "der", "eventos"],
    },
    {
      id: "servicios",
      title: "Nuestros Servicios",
      content: "Descubre todos los servicios que ofrecemos para tus eventos.",
      url: "/servicios",
      tags: ["servicios", "soluciones", "eventos", "producción", "consultoría"],
    },
    {
      id: "proyectos",
      title: "Proyectos",
      content: "Explora nuestros proyectos y casos de éxito.",
      url: "/proyectos",
      tags: ["proyectos", "portfolio", "trabajos", "casos", "éxito"],
    },
    {
      id: "nosotros",
      title: "Sobre Nosotros",
      content: "Conoce más sobre DER Eventos, nuestra historia y equipo.",
      url: "/nosotros",
      tags: ["nosotros", "equipo", "historia", "empresa", "quienes somos"],
    },
    {
      id: "contacto",
      title: "Contacto",
      content: "Ponte en contacto con nosotros para consultas o cotizaciones.",
      url: "/contacto",
      tags: ["contacto", "consulta", "cotización", "mensaje", "email", "teléfono"],
    },
    {
      id: "blog",
      title: "Blog",
      content: "Artículos y noticias sobre la industria de eventos.",
      url: "/blog",
      tags: ["blog", "artículos", "noticias", "tendencias", "industria"],
    },
    {
      id: "cotizador",
      title: "Cotizador Virtual",
      content: "Calcula el costo estimado de tu evento en segundos.",
      url: "/cotizador",
      tags: ["cotizador", "presupuesto", "costo", "precio", "estimación"],
    },
    {
      id: "recursos",
      title: "Recursos",
      content: "Descarga recursos útiles para la planificación de eventos.",
      url: "/recursos",
      tags: ["recursos", "descargas", "guías", "plantillas", "herramientas"],
    },
    {
      id: "trabaja-con-nosotros",
      title: "Trabaja con Nosotros",
      content: "Explora oportunidades laborales en DER Eventos.",
      url: "/trabaja-con-nosotros",
      tags: ["empleo", "trabajo", "carrera", "vacantes", "oportunidades"],
    },
    {
      id: "faq",
      title: "Preguntas Frecuentes",
      content: "Respuestas a las preguntas más comunes sobre nuestros servicios.",
      url: "/faq",
      tags: ["faq", "preguntas", "ayuda", "soporte", "información"],
    },
  ]

  // Añadir páginas principales al índice
  mainPages.forEach((page) => {
    searchIndex.push({
      id: page.id,
      title: page.title,
      content: page.content,
      url: page.url,
      type: "página",
      tags: page.tags,
    })
  })

  return searchIndex
}

// Crear y exportar el índice de búsqueda
export const searchIndex = createSearchIndex()

// Función para buscar en el índice
export function searchInIndex(query: string, limit = 10): SearchIndexItem[] {
  if (!query || query.trim() === "") {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()
  const queryTerms = normalizedQuery.split(/\s+/)

  // Función para calcular la relevancia de un resultado
  const calculateRelevance = (item: SearchIndexItem): number => {
    let score = 0

    // Coincidencia exacta en el título (mayor prioridad)
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      score += 10
    }

    // Coincidencia de términos individuales en el título
    queryTerms.forEach((term) => {
      if (item.title.toLowerCase().includes(term)) {
        score += 5
      }
    })

    // Coincidencia en el contenido
    if (item.content.toLowerCase().includes(normalizedQuery)) {
      score += 3
    }

    // Coincidencia de términos individuales en el contenido
    queryTerms.forEach((term) => {
      if (item.content.toLowerCase().includes(term)) {
        score += 2
      }
    })

    // Coincidencia en etiquetas
    item.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        score += 4
      }

      queryTerms.forEach((term) => {
        if (tag.toLowerCase().includes(term)) {
          score += 1
        }
      })
    })

    return score
  }

  // Filtrar y ordenar resultados por relevancia
  return searchIndex
    .filter((item) => {
      // Un ítem es relevante si el query aparece en el título, contenido o etiquetas
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.content.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        // También verificar si alguno de los términos individuales coincide
        queryTerms.some(
          (term) =>
            item.title.toLowerCase().includes(term) ||
            item.content.toLowerCase().includes(term) ||
            item.tags.some((tag) => tag.toLowerCase().includes(term)),
        )
      )
    })
    .sort((a, b) => calculateRelevance(b) - calculateRelevance(a))
    .slice(0, limit)
}

// Función para obtener sugerencias de búsqueda basadas en el índice
export function getSuggestions(query: string, limit = 5): string[] {
  if (!query || query.trim() === "") {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()

  // Extraer términos únicos de todos los títulos y etiquetas
  const allTerms = new Set<string>()

  searchIndex.forEach((item) => {
    // Añadir palabras del título
    item.title.split(/\s+/).forEach((word) => {
      if (word.length > 3) {
        // Ignorar palabras muy cortas
        allTerms.add(word.toLowerCase())
      }
    })

    // Añadir etiquetas relevantes
    item.tags.forEach((tag) => {
      if (tag.length > 3) {
        // Ignorar etiquetas muy cortas
        allTerms.add(tag.toLowerCase())
      }
    })
  })

  // Filtrar términos que coincidan con la consulta
  return Array.from(allTerms)
    .filter((term) => term.includes(normalizedQuery))
    .sort((a, b) => {
      // Priorizar términos que comienzan con la consulta
      const aStartsWith = a.startsWith(normalizedQuery)
      const bStartsWith = b.startsWith(normalizedQuery)

      if (aStartsWith && !bStartsWith) return -1
      if (!aStartsWith && bStartsWith) return 1

      // Si ambos comienzan o no comienzan con la consulta, ordenar por longitud
      return a.length - b.length
    })
    .slice(0, limit)
}