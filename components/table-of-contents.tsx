"use client"
import { useState, useEffect } from "react"
import { List, ChevronDown, ChevronUp } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
  collapsible?: boolean
}

export function TableOfContents({ content, className = "", collapsible = true }: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [isOpen, setIsOpen] = useState(!collapsible)
  const [activeId, setActiveId] = useState<string | null>(null)

  // Extraer encabezados del contenido HTML
  useEffect(() => {
    if (typeof window === "undefined") return
    
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headings = Array.from(doc.querySelectorAll("h2, h3, h4"))

    const items = headings.map((heading, index) => {
      const level = Number.parseInt(heading.tagName.substring(1))
      const text = heading.textContent || ""
      const id = `heading-${index}`

      // Añadir ID al encabezado original si no tiene uno
      if (!heading.id) {
        heading.id = id
      }

      return {
        id: heading.id || id,
        text,
        level,
      }
    })

    setToc(items)
  }, [content])

  // Observar encabezados visibles para resaltar en TOC
  useEffect(() => {
    if (typeof window === "undefined" || toc.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -66% 0px" },
    )

    toc.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => {
      toc.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [toc])

  if (toc.length === 0) return null

  return (
    <div className={`bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 ${className}`}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => collapsible && setIsOpen(!isOpen)}
      >
        <div className="flex items-center font-medium">
          <List className="h-4 w-4 mr-2" />
          <span>Tabla de contenidos</span>
        </div>
        {collapsible && (
          <button aria-label={isOpen ? "Colapsar tabla de contenidos" : "Expandir tabla de contenidos"}>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        )}
      </div>

      {isOpen && (
        <nav className="mt-3">
          <ul className="space-y-1">
            {toc.map((item) => (
              <li
                key={item.id}
                className={`
                  ${item.level === 2 ? "ml-0" : item.level === 3 ? "ml-4" : "ml-8"}
                  ${activeId === item.id ? "text-orange-500 font-medium" : "text-gray-700 dark:text-gray-300"}
                `}
              >
                <a
                  href={`#${item.id}`}
                  className="hover:text-orange-500 transition-colors block py-1 text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    if (typeof window !== "undefined") {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
