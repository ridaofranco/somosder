"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { getBlogCardImageUrl } from "@/lib/unsplash"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    image?: string
  }
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  // Obtener imagen fija para este blog específico
  const imageUrl = post.image || getBlogCardImageUrl(post.id)

  return (
    <div className={`group flex flex-col ${featured ? "h-full" : ""}`}>
      <div className={`relative ${featured ? "h-64" : "h-48"} rounded-lg overflow-hidden mb-4`}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />

        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </div>

        {/* Crédito a Unsplash */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          <span>Unsplash</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.date}</span>
          <User className="h-4 w-4 mr-1" />
          <span>{post.author}</span>
        </div>
        <h3 className={`${featured ? "text-xl" : "text-lg"} font-bold text-gray-900 dark:text-white mb-3`}>
          <Link href={`/blog/${post.id}`} className="hover:text-orange-500 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-700 dark:text-slate-300 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.id}`}
          className="mt-auto text-orange-500 hover:text-orange-600 font-medium flex items-center"
        >
          Leer más <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
