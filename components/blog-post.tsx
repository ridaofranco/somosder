import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Tag, Facebook, Twitter, Linkedin, Copy } from "lucide-react"

interface BlogPostProps {
  post: {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    author: string
    author_image: string
    author_bio: string
    categories: string[]
    image: string
    related_posts: {
      id: string
      title: string
      excerpt: string
      image: string
    }[]
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="lg:col-span-8">
      <div
        className="prose prose-lg dark:prose-invert max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      {/* Tags */}
      <div className="flex items-center flex-wrap gap-3 mb-12">
        <Tag className="h-5 w-5 text-gray-500 mr-2" />
        {post.categories.map((category, index) => (
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
          <Image src={post.author_image || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.author}</h3>
          <p className="text-gray-700 dark:text-slate-300 mb-4">{post.author_bio}</p>
          <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
            Ver todos los artículos
          </Button>
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
  )
}
