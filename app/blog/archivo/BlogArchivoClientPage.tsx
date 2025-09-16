"use client"

import { useState, useEffect } from "react"
import { Calendar, User, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { getBlogCardImageUrl } from "@/lib/unsplash"

// Datos de ejemplo de blogs
const allBlogs = [
  {
    id: "tendencias-eventos-2025",
    title: "Tendencias en Eventos para 2025: El Futuro de las Experiencias",
    excerpt:
      "Descubre las principales tendencias que transformarán la industria de eventos en 2025, desde tecnología inmersiva hasta sostenibilidad.",
    date: "15 Dic 2024",
    author: "María González",
    categories: ["Tendencias", "Tecnología"],
    readTime: "8 min",
  },
  {
    id: "tecnologia-eventos-hibridos",
    title: "Tecnología para Eventos Híbridos: Guía Completa",
    excerpt: "Todo lo que necesitas saber sobre las herramientas y plataformas para crear eventos híbridos exitosos.",
    date: "10 Dic 2024",
    author: "Carlos Rodríguez",
    categories: ["Tecnología", "Eventos Híbridos"],
    readTime: "10 min",
  },
  {
    id: "sostenibilidad-eventos",
    title: "Eventos Sostenibles: Cómo Reducir el Impacto Ambiental",
    excerpt: "Estrategias prácticas para organizar eventos más ecológicos y responsables con el medio ambiente.",
    date: "5 Dic 2024",
    author: "Ana Martínez",
    categories: ["Sostenibilidad", "Mejores Prácticas"],
    readTime: "7 min",
  },
  {
    id: "metaverso-eventos",
    title: "El Metaverso y los Eventos Virtuales: Nuevas Fronteras",
    excerpt: "Explora cómo el metaverso está revolucionando la forma en que experimentamos los eventos virtuales.",
    date: "28 Nov 2024",
    author: "Luis Fernández",
    categories: ["Tecnología", "Innovación"],
    readTime: "9 min",
  },
  {
    id: "roi-eventos-corporativos",
    title: "Medición del ROI en Eventos Corporativos",
    excerpt: "Aprende a medir y maximizar el retorno de inversión en tus eventos corporativos con métricas clave.",
    date: "20 Nov 2024",
    author: "Patricia López",
    categories: ["Negocios", "Métricas"],
    readTime: "12 min",
  },
  {
    id: "gamificacion-eventos",
    title: "Gamificación en Eventos: Engagement Garantizado",
    excerpt: "Descubre cómo implementar estrategias de gamificación para aumentar la participación en tus eventos.",
    date: "15 Nov 2024",
    author: "Roberto Silva",
    categories: ["Engagement", "Innovación"],
    readTime: "6 min",
  },
  {
    id: "seguridad-eventos-masivos",
    title: "Protocolos de Seguridad para Eventos Masivos",
    excerpt: "Guía completa sobre las mejores prácticas de seguridad para garantizar eventos seguros y exitosos.",
    date: "10 Nov 2024",
    author: "Elena Vargas",
    categories: ["Seguridad", "Logística"],
    readTime: "11 min",
  },
  {
    id: "neuromarketing-eventos",
    title: "Neuromarketing Aplicado a Eventos",
    excerpt: "Cómo utilizar principios de neuromarketing para crear experiencias memorables en eventos.",
    date: "5 Nov 2024",
    author: "Diego Morales",
    categories: ["Marketing", "Psicología"],
    readTime: "8 min",
  },
  {
    id: "tecnologia-rfid-eventos",
    title: "RFID y NFC: Tecnología para Control de Accesos",
    excerpt: "Implementación de tecnología RFID y NFC para mejorar la experiencia y seguridad en eventos.",
    date: "1 Nov 2024",
    author: "Sofía Ramírez",
    categories: ["Tecnología", "Accesos"],
    readTime: "7 min",
  },
  {
    id: "seleccion-venues",
    title: "Cómo Seleccionar el Venue Perfecto para tu Evento",
    excerpt: "Factores clave a considerar al elegir la locación ideal para diferentes tipos de eventos.",
    date: "25 Oct 2024",
    author: "Miguel Torres",
    categories: ["Venues", "Planificación"],
    readTime: "9 min",
  },
  {
    id: "inteligencia-artificial-eventos",
    title: "IA en la Gestión de Eventos: Aplicaciones Prácticas",
    excerpt: "Descubre cómo la inteligencia artificial está transformando la planificación y gestión de eventos.",
    date: "20 Oct 2024",
    author: "Laura Jiménez",
    categories: ["Tecnología", "IA"],
    readTime: "10 min",
  },
  {
    id: "eventos-inclusivos-accesibles",
    title: "Diseñando Eventos Inclusivos y Accesibles",
    excerpt: "Guía para crear eventos que sean accesibles para todas las personas, sin importar sus capacidades.",
    date: "15 Oct 2024",
    author: "Carmen Díaz",
    categories: ["Inclusión", "Accesibilidad"],
    readTime: "8 min",
  },
  {
    id: "networking-efectivo-eventos",
    title: "Estrategias de Networking Efectivo en Eventos",
    excerpt: "Maximiza las oportunidades de networking en tus eventos con estas estrategias probadas.",
    date: "10 Oct 2024",
    author: "Fernando Ruiz",
    categories: ["Networking", "Estrategia"],
    readTime: "6 min",
  },
  {
    id: "streaming-profesional-eventos",
    title: "Streaming Profesional para Eventos: Guía Técnica",
    excerpt: "Todo lo que necesitas saber para transmitir eventos en vivo con calidad profesional.",
    date: "5 Oct 2024",
    author: "Andrea Castillo",
    categories: ["Tecnología", "Streaming"],
    readTime: "11 min",
  },
  {
    id: "eventos-post-pandemia",
    title: "Eventos en la Era Post-Pandemia: Nuevos Paradigmas",
    excerpt: "Cómo la pandemia transformó permanentemente la industria de eventos y qué esperar en el futuro.",
    date: "1 Oct 2024",
    author: "José Mendoza",
    categories: ["Tendencias", "Análisis"],
    readTime: "9 min",
  },
]

// Obtener todas las categorías únicas
const allCategories = Array.from(new Set(allBlogs.flatMap((blog) => blog.categories))).sort()

export default function BlogArchivoClientPage() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("q") || ""

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [sortBy, setSortBy] = useState<"date" | "title">("date")
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs)

  // Filtrar y ordenar blogs
  useEffect(() => {
    let filtered = allBlogs

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.categories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.categories.includes(selectedCategory))
    }

    // Ordenar
    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      // Por fecha (más reciente primero)
      filtered.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
      })
    }

    setFilteredBlogs(filtered)
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/90 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-6">
              Blog DER
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Archivo de <span className="text-orange-200">Artículos</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Explora nuestra colección completa de artículos sobre eventos, tendencias y mejores prácticas en la
              industria
            </p>

            {/* Decorative Elements */}
            <div className="mt-10 flex items-center space-x-4">
              <div className="h-1 w-20 bg-white/40 rounded-full"></div>
              <span className="text-white/80 text-sm">{allBlogs.length} artículos disponibles</span>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full -mr-20 -mb-20 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-orange-300/10 rounded-full -ml-10 -mt-10 blur-2xl"></div>
      </section>

      {/* Filtros y Búsqueda */}
      <section className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Búsqueda */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar artículos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Filtro por categoría */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Todas las categorías</option>
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Ordenar por */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "title")}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="date">Más recientes</option>
              <option value="title">Alfabético</option>
            </select>
          </div>

          {/* Resultados */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? "artículo encontrado" : "artículos encontrados"}
            {searchTerm && ` para "${searchTerm}"`}
            {selectedCategory && ` en ${selectedCategory}`}
          </div>
        </div>
      </section>

      {/* Lista de artículos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBlogs.length > 0 ? (
            <div className="grid gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Imagen */}
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={getBlogCardImageUrl(blog.id) || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.categories.map((category) => (
                          <span
                            key={category}
                            className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        <Link href={`/blog/${blog.id}`} className="hover:text-orange-500 transition-colors">
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {blog.date}
                          </span>
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {blog.author}
                          </span>
                          <span>{blog.readTime} de lectura</span>
                        </div>

                        <Link href={`/blog/${blog.id}`} className="text-orange-500 hover:text-orange-600 font-medium">
                          Leer más →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                }}
                className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
