import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogImageUrl } from "@/lib/unsplash"

// Lista de categorías disponibles
const blogCategories = [
  "Tendencias",
  "Tecnología",
  "Estrategia",
  "Innovación",
  "Sostenibilidad",
  "Marketing",
  "Experiencia",
  "Planificación",
  "Venues",
  "Logística",
  "Engagement",
  "ROI",
  "Eventos Corporativos",
  "Seguridad",
  "Operaciones",
  "Virtual",
  "Gestión",
  "Eventos Híbridos",
  "Networking",
  "Inclusión",
  "Accesibilidad",
  "Finanzas",
  "Streaming",
  "Gastronomía",
  "Deportes",
  "Producción",
  "IA",
  "Salud",
]

// Lista de blogs con sus categorías
const blogPosts = [
  {
    id: "tendencias-eventos-2025",
    title: "10 Tendencias en Eventos que Definirán 2025",
    excerpt: "Descubre las innovaciones y cambios que transformarán la industria de eventos en el próximo año.",
    date: "12 de abril, 2025",
    author: "Carolina Méndez",
    categories: ["Tendencias", "Tecnología", "Estrategia"],
  },
  {
    id: "tecnologia-eventos-hibridos",
    title: "Tecnología y Eventos Híbridos: La Nueva Era de las Experiencias",
    excerpt:
      "Descubre cómo la tecnología está transformando los eventos híbridos y creando nuevas oportunidades para conectar audiencias.",
    date: "28 de marzo, 2025",
    author: "Martín Torres",
    categories: ["Tecnología", "Innovación", "Eventos Híbridos"],
  },
  {
    id: "sostenibilidad-eventos",
    title: "Cómo Implementar Prácticas Sostenibles en tus Eventos",
    excerpt: "Guía completa para reducir el impacto ambiental sin comprometer la experiencia de los participantes.",
    date: "15 de marzo, 2025",
    author: "Laura Gómez",
    categories: ["Sostenibilidad", "Planificación", "Tendencias"],
  },
  {
    id: "metaverso-eventos",
    title: "El Metaverso Revoluciona los Eventos Virtuales",
    excerpt: "Descubre cómo los espacios virtuales 3D están transformando la experiencia de eventos digitales.",
    date: "20 de abril, 2025",
    author: "Diego Fernández",
    categories: ["Tecnología", "Innovación", "Virtual"],
  },
  {
    id: "roi-eventos-corporativos",
    title: "Cómo Medir el ROI de tus Eventos Corporativos",
    excerpt:
      "Metodologías y métricas clave para demostrar el valor y retorno de inversión de tus eventos empresariales.",
    date: "8 de febrero, 2025",
    author: "Carlos Vega",
    categories: ["Estrategia", "ROI", "Eventos Corporativos"],
  },
  {
    id: "gamificacion-eventos",
    title: "Gamificación: Cómo Aumentar el Engagement en Eventos",
    excerpt:
      "Estrategias efectivas para incorporar elementos de juego que incrementen la participación y retención de información.",
    date: "25 de febrero, 2025",
    author: "Ana Martínez",
    categories: ["Engagement", "Innovación", "Experiencia"],
  },
  {
    id: "seguridad-eventos-masivos",
    title: "Protocolos de Seguridad para Eventos Masivos",
    excerpt:
      "Estrategias y mejores prácticas para garantizar la seguridad de los asistentes en eventos de gran escala.",
    date: "8 de abril, 2025",
    author: "Javier Rodríguez",
    categories: ["Seguridad", "Planificación", "Operaciones"],
  },
  {
    id: "neuromarketing-eventos",
    title: "Neuromarketing Aplicado a la Experiencia de Eventos",
    excerpt:
      "Cómo utilizar principios de neurociencia para diseñar experiencias memorables que conecten emocionalmente.",
    date: "10 de febrero, 2025",
    author: "Valeria Pérez",
    categories: ["Marketing", "Experiencia", "Innovación"],
  },
  {
    id: "tecnologia-rfid-eventos",
    title: "Implementación de Tecnología RFID en Eventos",
    excerpt: "Guía completa sobre cómo la tecnología RFID puede revolucionar la gestión y experiencia de tu evento.",
    date: "5 de febrero, 2025",
    author: "Martín Torres",
    categories: ["Tecnología", "Innovación", "Gestión"],
  },
  {
    id: "seleccion-venues",
    title: "Claves para la Selección del Venue Perfecto",
    excerpt: "Factores críticos a considerar para elegir la sede ideal que se adapte a los objetivos de tu evento.",
    date: "28 de enero, 2025",
    author: "Laura Gómez",
    categories: ["Planificación", "Venues", "Logística"],
  },
  {
    id: "inteligencia-artificial-eventos",
    title: "Inteligencia Artificial en Eventos: Casos de Uso Prácticos",
    excerpt:
      "Descubre cómo la IA está revolucionando la planificación, ejecución y análisis de eventos con ejemplos reales.",
    date: "22 de enero, 2025",
    author: "Diego Fernández",
    categories: ["Tecnología", "Innovación", "IA"],
  },
  {
    id: "eventos-post-pandemia",
    title: "La Nueva Era de los Eventos Post-Pandemia: Lecciones Aprendidas",
    excerpt:
      "Análisis de cómo la industria de eventos se transformó y las mejores prácticas que llegaron para quedarse.",
    date: "15 de enero, 2025",
    author: "Carolina Méndez",
    categories: ["Tendencias", "Estrategia", "Salud"],
  },
  {
    id: "networking-efectivo-eventos",
    title: "Estrategias de Networking Efectivo en Eventos Corporativos",
    excerpt: "Técnicas comprobadas para maximizar las conexiones profesionales y generar valor en eventos de negocios.",
    date: "10 de enero, 2025",
    author: "Carlos Vega",
    categories: ["Networking", "Eventos Corporativos", "Estrategia"],
  },
  {
    id: "eventos-inclusivos-accesibles",
    title: "Guía Completa para Crear Eventos Inclusivos y Accesibles",
    excerpt: "Mejores prácticas para garantizar que todos los asistentes puedan participar plenamente en tus eventos.",
    date: "5 de enero, 2025",
    author: "Ana Martínez",
    categories: ["Inclusión", "Accesibilidad", "Planificación"],
  },
  {
    id: "presupuesto-eventos-optimizacion",
    title: "Optimización de Presupuesto en Eventos: Estrategias que Funcionan",
    excerpt: "Cómo maximizar el impacto de tu evento sin comprometer la calidad, con tips de ahorro inteligente.",
    date: "28 de diciembre, 2024",
    author: "Laura Gómez",
    categories: ["Finanzas", "Planificación", "Estrategia"],
  },
  {
    id: "streaming-profesional-eventos",
    title: "Streaming Profesional para Eventos: Guía Técnica Completa",
    excerpt:
      "Todo lo que necesitas saber sobre equipamiento, plataformas y mejores prácticas para transmisiones en vivo.",
    date: "20 de diciembre, 2024",
    author: "Martín Torres",
    categories: ["Tecnología", "Streaming", "Eventos Híbridos"],
  },
  {
    id: "catering-tendencias-2025",
    title: "Tendencias en Catering para Eventos 2025: Innovación Gastronómica",
    excerpt:
      "Las últimas tendencias en gastronomía para eventos, desde menús sostenibles hasta experiencias interactivas.",
    date: "15 de diciembre, 2024",
    author: "Chef Roberto Silva",
    categories: ["Gastronomía", "Tendencias", "Sostenibilidad"],
  },
  {
    id: "gestion-crisis-eventos",
    title: "Gestión de Crisis en Eventos: Protocolo de Respuesta Rápida",
    excerpt: "Cómo prepararse y responder efectivamente ante situaciones imprevistas durante la producción de eventos.",
    date: "10 de diciembre, 2024",
    author: "Javier Rodríguez",
    categories: ["Seguridad", "Gestión", "Planificación"],
  },
  {
    id: "eventos-deportivos-produccion",
    title: "Producción de Eventos Deportivos: Desafíos y Soluciones",
    excerpt:
      "Guía especializada para la organización exitosa de competencias y eventos deportivos de cualquier escala.",
    date: "5 de diciembre, 2024",
    author: "Pedro Martínez",
    categories: ["Deportes", "Producción", "Logística"],
  },
  {
    id: "realidad-virtual-eventos",
    title: "Realidad Virtual y Aumentada: El Futuro de las Experiencias en Eventos",
    excerpt: "Cómo implementar tecnologías inmersivas para crear experiencias inolvidables en tus eventos.",
    date: "1 de diciembre, 2024",
    author: "Diego Fernández",
    categories: ["Tecnología", "Innovación", "Experiencia"],
  },
]

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = decodeURIComponent(params.category)

  if (!blogCategories.includes(category)) {
    return {
      title: "Categoría no encontrada",
    }
  }

  return {
    title: `${category} | Blog DER Eventos`,
    description: `Artículos sobre ${category.toLowerCase()} en eventos y experiencias para profesionales del sector. Encuentra las últimas tendencias, consejos y mejores prácticas.`,
    openGraph: {
      title: `${category} | Blog DER Eventos`,
      description: `Artículos sobre ${category.toLowerCase()} en eventos y experiencias para profesionales del sector.`,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: encodeURIComponent(category),
  }))
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category)

  if (!blogCategories.includes(category)) {
    notFound()
  }

  // Filtrar posts por categoría
  const filteredPosts = blogPosts.filter((post) => post.categories.includes(category))

  // Ordenar por fecha (más recientes primero)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date.split(", ")[0]).getTime() - new Date(a.date.split(", ")[0]).getTime()
  })

  // Obtener categorías relacionadas (categorías que aparecen junto con la categoría actual)
  const relatedCategories = Array.from(
    new Set(filteredPosts.flatMap((post) => post.categories).filter((cat) => cat !== category)),
  ).slice(0, 10)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-orange-500">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-orange-500">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-orange-500 font-medium">{category}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="flex items-center text-orange-500 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Volver al blog</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Categoría: {category}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explora nuestros artículos sobre {category.toLowerCase()} en la industria de eventos.
          <span className="text-sm text-gray-500 ml-2">({filteredPosts.length} artículos)</span>
        </p>
      </div>

      {/* Posts Grid */}
      {sortedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getBlogImageUrl(post.id) || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category || post.categories[0]}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">No hay artículos en esta categoría</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Actualmente no hay artículos publicados en la categoría {category}.
          </p>
          <Link href="/blog" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
            Ver todas las categorías
          </Link>
        </div>
      )}

      {/* Sidebar with other categories */}
      {relatedCategories.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Categorías relacionadas</h2>
          <div className="flex flex-wrap gap-2">
            {relatedCategories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/categoria/${encodeURIComponent(cat)}`}
                className="bg-white dark:bg-gray-700 hover:bg-orange-500 hover:text-white text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-orange-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas ayuda con tu próximo evento?</h2>
        <p className="text-lg mb-6">
          Nuestro equipo de expertos está listo para ayudarte a crear experiencias excepcionales.
        </p>
        <Link href="/contacto">
          <Button className="bg-white text-orange-500 hover:bg-gray-100">
            Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
