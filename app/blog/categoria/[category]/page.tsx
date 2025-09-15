import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogImageUrl } from "@/lib/unsplash"
import { blogs } from "@/lib/blog-data"

// Lista de categorías disponibles
const blogCategories = Array.from(new Set(blogs.flatMap((blog) => blog.categories))).sort()

// Lista de blogs con sus categorías - ELIMINADO
const blogPosts = blogs

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