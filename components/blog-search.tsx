"use client"
import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBlogCardImageUrl } from "@/lib/unsplash"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  categories: string[]
}

interface BlogSearchProps {
  blogs: BlogPost[]
  className?: string
  placeholder?: string
}

export function BlogSearch({ blogs, className = "", placeholder = "Buscar artículos..." }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<BlogPost[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    if (typeof window === "undefined") return
    
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Realizar búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([])
      setIsOpen(false)
      return
    }

    const searchResults = blogs.filter((blog) => {
      const searchLower = searchTerm.toLowerCase()
      return (
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower) ||
        blog.author.toLowerCase().includes(searchLower) ||
        blog.categories.some((cat) => cat.toLowerCase().includes(searchLower))
      )
    })

    setResults(searchResults)
    setIsOpen(searchResults.length > 0)
  }, [searchTerm, blogs])

  const handleClear = () => {
    setSearchTerm("")
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
          aria-label="Buscar artículos"
          onFocus={() => {
            if (results.length > 0) setIsOpen(true)
          }}
        />
        {searchTerm ? (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-[70vh] overflow-y-auto">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {results.length} {results.length === 1 ? "resultado" : "resultados"} encontrados
            </p>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {results.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.id}`}
                className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={getBlogCardImageUrl(blog.id) || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1 line-clamp-1">{blog.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">{blog.excerpt}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</span>
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full">
                        {blog.categories[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href={`/blog/archivo?q=${encodeURIComponent(searchTerm)}`}
              className="text-orange-500 hover:text-orange-600 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ver todos los resultados
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
