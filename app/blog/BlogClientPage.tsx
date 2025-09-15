"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getBlogImageUrl } from "@/lib/unsplash"
import { BlogSearch } from "@/components/blog-search"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { blogs } from "@/lib/blog-data"

// Extraer todas las categorías únicas y ordenarlas alfabéticamente
const allCategories = Array.from(new Set(blogs.flatMap((blog) => blog.categories))).sort()

// Ordenar blogs por fecha (más recientes primero)
const sortedBlogs = [...blogs].sort((a, b) => {
  return new Date(b.date.split(", ")[0]).getTime() - new Date(a.date.split(", ")[0]).getTime()
})

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [filteredBlogs, setFilteredBlogs] = useState(sortedBlogs)

  // Manejar la búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs(sortedBlogs)
    } else {
      const lowercaseSearch = searchTerm.toLowerCase()
      const results = sortedBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(lowercaseSearch) ||
          blog.excerpt.toLowerCase().includes(lowercaseSearch) ||
          blog.categories.some((category) => category.toLowerCase().includes(lowercaseSearch)) ||
          blog.author.toLowerCase().includes(lowercaseSearch),
      )
      setFilteredBlogs(results)
    }
  }, [searchTerm])

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 dark:from-gray-900/90 dark:to-gray-900/60 z-10" />
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="/images/blog-hero-conference.jpg"
            alt="Conferencia profesional"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Blog</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                Descubre las últimas tendencias, estrategias y mejores prácticas en la industria de eventos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                  <BlogSearch blogs={blogs} placeholder="Buscar artículos..." className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Resultados de búsqueda */}
          {searchTerm && (
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Resultados de búsqueda
                <span className="text-gray-500 text-lg ml-2">({filteredBlogs.length} artículos encontrados)</span>
              </h2>

              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {filteredBlogs.map((blog, index) => (
                    <Link key={index} href={`/blog/${blog.id}`} className="group">
                      <div className="bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={getBlogImageUrl(blog.id) || "/placeholder.svg"}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                          <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {blog.categories[0]}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{blog.excerpt}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                            <span>{blog.date}</span>
                            <span>{blog.author}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    No se encontraron artículos que coincidan con tu búsqueda.
                  </p>
                  <Button onClick={() => setSearchTerm("")} variant="outline" className="bg-white dark:bg-gray-700">
                    Limpiar búsqueda
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Featured Post - Solo mostrar si no hay búsqueda activa */}
          {!searchTerm && (
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Artículo Destacado</h2>
              <div className="bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={getBlogImageUrl(sortedBlogs[0].id) || "/placeholder.svg"}
                      alt={sortedBlogs[0].title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {sortedBlogs[0].categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/blog/categoria/${category.toLowerCase()}`}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-full"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {sortedBlogs[0].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{sortedBlogs[0].excerpt}</p>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{sortedBlogs[0].date}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{sortedBlogs[0].author}</span>
                    </div>
                    <Link href={`/blog/${sortedBlogs[0].id}`}>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Leer artículo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Latest Posts - Solo mostrar si no hay búsqueda activa */}
          {!searchTerm && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Últimos Artículos</h2>
                <Link
                  href="/blog/archivo"
                  className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                >
                  Ver todos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedBlogs.slice(1, 7).map((blog, index) => (
                  <Link key={index} href={`/blog/${blog.id}`} className="group">
                    <div className="bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={getBlogImageUrl(blog.id) || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {blog.categories[0]}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{blog.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                          <span>{blog.date}</span>
                          <span>{blog.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/blog/archivo">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Ver más artículos <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Topics - Solo mostrar si no hay búsqueda activa */}
          {!searchTerm && (
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Explora por Temáticas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Tecnología</h3>
                  <p className="mb-4">Descubre las últimas innovaciones tecnológicas para eventos.</p>
                  <Link
                    href="/blog/categoria/Tecnología"
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Sostenibilidad</h3>
                  <p className="mb-4">Estrategias para eventos más responsables con el medio ambiente.</p>
                  <Link
                    href="/blog/categoria/Sostenibilidad"
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Experiencia</h3>
                  <p className="mb-4">Cómo crear experiencias memorables para los asistentes.</p>
                  <Link
                    href="/blog/categoria/Experiencia"
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Estrategia</h3>
                  <p className="mb-4">Planificación estratégica para maximizar el impacto de tus eventos.</p>
                  <Link
                    href="/blog/categoria/Estrategia"
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Marketing</h3>
                  <p className="mb-4">Tácticas efectivas para promocionar y posicionar tus eventos.</p>
                  <Link
                    href="/blog/categoria/Marketing"
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Tendencias</h3>
                  <p className="mb-4">Las últimas tendencias que están transformando la industria.</p>
                  <Link
                    href="/blog/categoria/Tendencias"
                    className="inline-flex items-center text-white hover:underline"
                  >
                    Explorar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Newsletter */}
          <NewsletterSubscription />
        </div>
      </section>
    </>
  )
}