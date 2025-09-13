"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Search, SortAsc, SortDesc, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import BlogCard from "@/components/blog-card"
import { getBlogImageUrl } from "@/lib/unsplash"

// Obtener imagen de autor basada en el nombre
function getAuthorImage(authorName: string) {
  // Aquí podrías tener una lógica más compleja para obtener imágenes de autor
  // Por ahora usamos un placeholder con el nombre
  return `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(authorName)}`
}

// Obtener bio del autor basada en el nombre
function getAuthorBio(authorName: string) {
  // Aquí podrías tener una base de datos de bios de autores
  // Por ahora devolvemos una bio genérica
  const bios: Record<string, string> = {
    "Carolina Méndez":
      "Especialista en tendencias de la industria de eventos con más de 10 años de experiencia. Ha trabajado con marcas internacionales y es conferencista habitual en congresos del sector.",
    "Martín Torres":
      "Experto en tecnología aplicada a eventos con background en ingeniería y producción audiovisual. Lidera el área de innovación en DER Eventos.",
    "Laura Gómez":
      "Consultora en sostenibilidad y eventos con impacto positivo. Certificada en gestión ambiental y especializada en reducir la huella de carbono en grandes producciones.",
    "Daniel Rodríguez":
      "Estratega de marketing y medición de ROI en eventos corporativos. MBA con especialización en análisis de datos y comportamiento del consumidor.",
    "Ana Martínez":
      "Diseñadora de experiencias y especialista en gamificación. Combina psicología y diseño para crear eventos memorables y con alto engagement.",
    "Carlos Sánchez":
      "Experto en seguridad y gestión de riesgos en eventos masivos. Ex consultor para eventos deportivos internacionales y conciertos de gran escala.",
    "Valeria Pérez":
      "Neuropsicóloga especializada en marketing experiencial y emocional. Investiga cómo las experiencias en vivo impactan en la memoria y percepción de marca.",
  }

  return (
    bios[authorName] ||
    "Especialista en la industria de eventos con amplia experiencia en organización, tecnología y tendencias del sector."
  )
}

interface AuthorPageProps {
  authorName: string
  posts: any[]
}

export default function AuthorPage({ authorName, posts }: AuthorPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Extraer todas las categorías únicas de los posts
  const allCategories = Array.from(new Set(posts.flatMap((post) => post.category)))

  // Filtrar posts cuando cambia la búsqueda o categoría
  useEffect(() => {
    let result = [...posts]

    // Filtrar por término de búsqueda
    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      result = result.filter((post) => post.category === selectedCategory)
    }

    // Ordenar por fecha
    result.sort((a, b) => {
      const dateA = new Date(a.date.split(" de ")[0] + " " + a.date.split(" de ")[1]).getTime()
      const dateB = new Date(b.date.split(" de ")[0] + " " + b.date.split(" de ")[1]).getTime()
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB
    })

    setFilteredPosts(result)
  }, [searchTerm, selectedCategory, sortOrder, posts])

  // Obtener imagen y bio del autor
  const authorImage = getAuthorImage(authorName)
  const authorBio = getAuthorBio(authorName)

  return (
    <>
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-900 dark:to-orange-700">
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <Link href="/blog" className="inline-flex items-center text-white hover:text-orange-100 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={authorImage || "/placeholder.svg"}
                alt={authorName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Artículos de {authorName}</h1>
              <p className="text-white/90 text-lg max-w-2xl mb-6">{authorBio}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button className="bg-white text-orange-600 hover:bg-orange-50">
                  <User className="mr-2 h-4 w-4" /> Contactar
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  Ver perfil completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="bg-gray-100 dark:bg-dark-200 border-b border-gray-200 dark:border-gray-700">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {allCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
                className="h-10 w-10"
              >
                {sortOrder === "desc" ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
              </Button>

              <div className="border rounded-lg overflow-hidden flex">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="h-10 w-10 rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="h-10 w-10 rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100">
        <div className="container px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {filteredPosts.length} artículo{filteredPosts.length !== 1 ? "s" : ""} encontrado
                {filteredPosts.length !== 1 ? "s" : ""}
              </h2>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex flex-col md:flex-row gap-6 border-b border-gray-200 dark:border-gray-700 pb-8"
                    >
                      <div className="relative h-48 md:h-40 md:w-64 rounded-lg overflow-hidden">
                        <Image
                          src={getBlogImageUrl(post.id) || post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          <Link href={`/blog/${post.id}`} className="hover:text-orange-500 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-700 dark:text-slate-300 mb-4">{post.excerpt}</p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                        >
                          Leer artículo completo
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No se encontraron artículos</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                No hay artículos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Ver todos los artículos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Sección de Suscripción */}
      <section className="py-16 bg-orange-50 dark:bg-dark-200">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Te gustan los artículos de {authorName}?
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-8">
              Suscríbete a nuestro newsletter y recibe los últimos artículos y tendencias directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-300"
                placeholder="Tu correo electrónico"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Suscribirme</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
