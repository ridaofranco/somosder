"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogLayout({ post }) {
  // Fallbacks para asegurar que el componente no falle si faltan datos
  const authorImage = post.author_image || "/placeholder.svg?height=100&width=100&text=Author"
  const authorBio =
    post.author_bio ||
    "Especialista en la industria de eventos con amplia experiencia en organización, tecnología y tendencias del sector."
  const relatedPosts = post.related_posts || []

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Encabezado del Artículo */}
      <header className="mb-12">
        <div className="flex items-center mb-6 text-gray-600 dark:text-gray-400">
          <Link href="/blog" className="hover:text-orange-600 dark:hover:text-orange-400">
            Blog
          </Link>
          <span className="mx-2">/</span>
          {post.categories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/categoria/${category.toLowerCase()}`}
              className="text-orange-600 dark:text-orange-400 hover:underline mr-2"
            >
              {category}
            </Link>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>

        <div className="flex items-center space-x-4 mb-8">
          <Image src={authorImage} alt={post.author} width={50} height={50} className="rounded-full" unoptimized />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{post.author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
          </div>
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-300 italic border-l-4 border-orange-500 pl-4">
          {post.excerpt}
        </p>
      </header>

      {/* Contenido del Artículo */}
      <article
        className="prose prose-orange dark:prose-invert max-w-none 
        prose-headings:font-bold 
        prose-h2:text-3xl 
        prose-h2:mt-12 
        prose-h2:mb-6
        prose-h3:text-2xl 
        prose-h3:mt-8 
        prose-h3:mb-4
        prose-p:leading-relaxed 
        prose-p:mb-6
        prose-ul:mb-6
        prose-a:no-underline
        prose-a:font-semibold"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Autor y Bio */}
      <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex items-center">
        <Image src={authorImage} alt={post.author} width={100} height={100} className="rounded-full mr-6" unoptimized />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.author}</h3>
          <p className="text-gray-600 dark:text-gray-300">{authorBio}</p>
        </div>
      </section>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related, index) => (
              <Link key={index} href={`/blog/${related.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all h-full">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{related.excerpt}</p>
                    <Button
                      variant="link"
                      className="p-0 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200 mt-auto justify-start"
                    >
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}