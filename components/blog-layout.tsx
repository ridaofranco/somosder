"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Copy, ArrowRight, Search } from "lucide-react"
import { getBlogImageUrl } from "@/lib/unsplash"

interface BlogPost {
  id: string
  title: string
  date: string
  author: string
  author_image?: string
  author_bio?: string
  categories: string[]
  content: string
  related_posts?: {
    id: string
    title: string
    excerpt: string
    image?: string
  }[]
}

interface BlogLayoutProps {
  post: BlogPost
}

export default function BlogLayout({ post }: BlogLayoutProps) {
  // Asegurarnos de que tenemos las categorías y posts relacionados
  const categories = post.categories || ["Tendencias", "Tecnología", "Estrategia"]
  const related_posts = post.related_posts || [
    {
      id: "tecnologia-eventos-hibridos",
      title: "Tecnología Esencial para Eventos Híbridos Exitosos",
      excerpt:
        "Herramientas y plataformas clave para crear una experiencia perfecta tanto para asistentes presenciales como virtuales.",
      image: "/placeholder.svg?height=400&width=600&text=Eventos+Híbridos",
    },
    {
      id: "sostenibilidad-eventos",
      title: "Cómo Implementar Prácticas Sostenibles en tus Eventos",
      excerpt: "Guía completa para reducir el impacto ambiental sin comprometer la experiencia de los participantes.",
      image: "/placeholder.svg?height=400&width=600&text=Eventos+Sostenibles",
    },
    {
      id: "roi-eventos-corporativos",
      title: "Cómo Medir el ROI de tus Eventos Corporativos",
      excerpt:
        "Metodologías y métricas clave para demostrar el valor y retorno de inversión de tus eventos empresariales.",
      image: "/placeholder.svg?height=400&width=600&text=ROI+Eventos",
    },
  ]

  // Obtener la imagen del blog
  const heroImage = getBlogImageUrl(post.id)
  const author_image = post.author_image || "/placeholder.svg?height=100&width=100&text=Author"
  const author_bio =
    post.author_bio ||
    "Especialista en la industria de eventos con amplia experiencia en organización, tecnología y tendencias del sector."

  return (
    <>
      {/* Hero Header con imagen de fondo */}
      <div className="relative">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Overlay para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-20 py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <Link href="/blog" className="inline-flex items-center text-white hover:text-orange-300 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
            </Link>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/blog/categoria/${category.toLowerCase()}`}
                    className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-200 mb-8">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.date}</span>
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100 section-lighter">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {/* Contenido del blog */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex items-center flex-wrap gap-3 mb-12">
                <Tag className="h-5 w-5 text-gray-500 mr-2" />
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/blog/categoria/${category.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </Link>
                ))}
              </div>

              {/* Share */}
              <div className="border-t border-b border-gray-200 dark:border-gray-700 py-8 mb-12">
                <p className="font-medium text-gray-900 dark:text-white mb-4">Compartir este artículo</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Copy className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Author */}
              <div className="bg-secondary dark:bg-dark-300 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center md:items-start mb-12">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <Image
                    src={author_image || "/placeholder.svg"}
                    alt={post.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.author}</h3>
                  <p className="text-gray-700 dark:text-slate-300 mb-4">{author_bio}</p>
                  <Link href={`/blog/autor/${encodeURIComponent(post.author.toLowerCase())}`}>
                    <Button
                      variant="outline"
                      className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      Ver todos los artículos de {post.author}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-12">
                <Link
                  href="/blog/articulo-anterior"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-500"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Artículo anterior
                </Link>
                <Link
                  href="/blog/articulo-siguiente"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-500"
                >
                  Artículo siguiente <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              {/* Sidebar */}
              <div className="space-y-10">
                {/* Search */}
                <div className="bg-gray-100 dark:bg-dark-300 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Buscar</h3>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full py-2 px-4 pr-10 rounded-lg bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-700 dark:text-white"
                      placeholder="Buscar artículos..."
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-100 dark:bg-dark-300 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Categorías</h3>
                  <ul className="space-y-2">
                    {categories.concat(["Marketing", "Producción", "Innovación"]).map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/categoria/${category.toLowerCase()}`}
                          className="text-gray-700 dark:text-gray-300 hover:text-orange-500 flex items-center"
                        >
                          <ArrowRight className="h-3 w-3 mr-2" />
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Posts */}
                <div className="bg-gray-100 dark:bg-dark-300 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Artículos Relacionados</h3>
                  <div className="space-y-6">
                    {related_posts.map((related, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={getBlogImageUrl(related.id) || "/placeholder.svg"}
                            alt={related.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                            <Link href={`/blog/${related.id}`} className="hover:text-orange-500">
                              {related.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subscribe */}
                <div className="bg-orange-500 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Suscríbete al newsletter</h3>
                  <p className="mb-4">Recibe los últimos artículos y tendencias directamente en tu email.</p>
                  <input
                    type="email"
                    className="w-full py-2 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 mb-3"
                    placeholder="Tu correo electrónico"
                  />
                  <Button className="w-full bg-white text-orange-500 hover:bg-white/90">Suscribirme</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Más Artículos que te Pueden Interesar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related_posts.map((related, index) => (
              <div key={index} className="bg-white dark:bg-dark-300 rounded-lg overflow-hidden shadow-md group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getBlogImageUrl(related.id) || "/placeholder.svg"}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    <Link href={`/blog/${related.id}`} className="hover:text-orange-500 transition-colors">
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 text-sm mb-4">{related.excerpt}</p>
                  <Link
                    href={`/blog/${related.id}`}
                    className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center"
                  >
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Ver Todos los Artículos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
