import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogImageUrl } from "@/lib/unsplash"
import { SocialShare } from "@/components/social-share"
import { ReadingTime } from "@/components/reading-time"
import { TableOfContents } from "@/components/table-of-contents"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { blogs } from "@/lib/blog-data"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((blog) => blog.id === params.slug)

  if (!blog) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${blog.title} | Blog DER Eventos`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | Blog DER Eventos`,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.categories,
    },
  }
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.id,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.id === params.slug)

  if (!blog) {
    notFound()
  }

  // Encontrar artículos relacionados (mismas categorías)
  const relatedPosts = blogs
    .filter((post) => post.id !== blog.id && post.categories.some((category) => blog.categories.includes(category)))
    .slice(0, 3)

  // Encontrar el índice del blog actual para navegación prev/next
  const currentIndex = blogs.findIndex((b) => b.id === blog.id)
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

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
        <span className="text-orange-500 font-medium truncate max-w-[200px]">{blog.title}</span>
      </div>

      {/* Back to blog */}
      <Link href="/blog" className="flex items-center text-orange-500 hover:underline mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span>Volver al blog</span>
      </Link>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.categories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/categoria/${encodeURIComponent(category)}`}
              className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-full flex items-center"
            >
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </Link>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-8">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{blog.date}</span>
          </div>
          <ReadingTime content={blog.content} />
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-10">
        <Image
          src={getBlogImageUrl(blog.id) || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24 space-y-6">
            <TableOfContents content={blog.content} />

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-medium mb-3">Compartir</h3>
              <SocialShare url={`/blog/${blog.id}`} title={blog.title} description={blog.excerpt} variant="vertical" />
            </div>

            <NewsletterSubscription
              title="¿Te gustó este artículo?"
              description="Suscríbete para recibir más contenido como este directamente en tu email."
              variant="compact"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Etiquetas:</span>
              {blog.categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/categoria/${encodeURIComponent(category)}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                <Image
                  src={`/placeholder.svg?height=80&width=80&query=profile photo of ${blog.author}`}
                  alt={blog.author}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{blog.author}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Experto en organización de eventos con más de 10 años de experiencia en la industria. Especializado en{" "}
                  {blog.categories[0].toLowerCase()} y estrategias innovadoras para crear experiencias memorables.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver perfil
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver todos sus artículos
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {prevBlog && (
              <Link href={`/blog/${prevBlog.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors h-full">
                  <div className="flex items-center text-orange-500 mb-2">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Artículo anterior</span>
                  </div>
                  <h3 className="font-bold group-hover:text-orange-500 transition-colors line-clamp-2">
                    {prevBlog.title}
                  </h3>
                </div>
              </Link>
            )}

            {nextBlog && (
              <Link href={`/blog/${nextBlog.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors h-full">
                  <div className="flex items-center justify-end text-orange-500 mb-2">
                    <span className="text-sm font-medium">Artículo siguiente</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                  <h3 className="font-bold text-right group-hover:text-orange-500 transition-colors line-clamp-2">
                    {nextBlog.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={getBlogImageUrl(post.id) || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                        <div className="mt-auto text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-300 py-8">
                Los comentarios están desactivados para este artículo.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-orange-500 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Te gustaría organizar un evento inolvidable?</h2>
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
      </div>
    </div>
  )
}