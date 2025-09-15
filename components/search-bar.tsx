"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { searchInIndex, getSuggestions, type SearchIndexItem } from "@/lib/search-index"
import Image from "next/image"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchIndexItem[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Función para realizar la búsqueda
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setSuggestions([])
      setLoading(false); // Asegurarse de que loading sea false si la consulta está vacía
      return
    }

    setLoading(true)

    // Simular un pequeño retraso para evitar demasiadas búsquedas mientras se escribe
    const timer = setTimeout(() => {
      try {
        // Obtener sugerencias
        const newSuggestions = getSuggestions(query)
        setSuggestions(newSuggestions)

        // Realizar la búsqueda
        const searchResults = searchInIndex(query, 8)
        setResults(searchResults)
      } catch (error) {
        console.error("Error durante la búsqueda en SearchBar:", error);
        setResults([]);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Manejar navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Si hay sugerencias mostradas
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === "Enter" && selectedSuggestion >= 0) {
        e.preventDefault()
        setQuery(suggestions[selectedSuggestion])
        setSelectedSuggestion(-1)
        setSuggestions([])
      } else if (e.key === "Escape") {
        setSuggestions([])
        setSelectedSuggestion(-1)
      }
    }
  }

  // Aplicar sugerencia seleccionada
  const applySuggestion = (suggestion: string) => {
    setQuery(suggestion)
    setSuggestions([])
    setSelectedSuggestion(-1)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSuggestions([])
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Obtener icono según el tipo de resultado
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "servicio":
        return "🛠️"
      case "proyecto":
        return "📂"
      case "blog":
        return "📝"
      case "faq":
        return "❓"
      case "página":
        return "📄"
      default:
        return "🔍"
    }
  }

  return (
    <div className="relative w-full max-w-xs" ref={searchRef}>
      <div className="flex items-center border rounded-full bg-background/80 hover:bg-background transition-colors px-3 py-1.5">
        <Search className="h-4 w-4 text-muted-foreground mr-2" />
        <Input
          type="text"
          placeholder="Buscar cualquier término..."
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto text-sm bg-transparent"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        {loading && <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />}
        {query && !loading && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
              setSuggestions([])
            }}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Sugerencias de autocompletado */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-background border rounded-md shadow-md z-50 overflow-hidden">
          <div className="p-1">
            <p className="text-xs text-muted-foreground px-2 py-1">Sugerencias:</p>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className={`w-full text-left px-3 py-1.5 text-sm rounded ${
                  selectedSuggestion === index ? "bg-muted" : "hover:bg-muted/50"
                } transition-colors`}
                onClick={() => applySuggestion(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Resultados de búsqueda */}
      {isOpen && query.length > 0 && !suggestions.length && (
        <div className="absolute top-full mt-1 w-full sm:w-80 bg-background border rounded-md shadow-md z-50 overflow-hidden">
          {loading ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              <Loader2 className="h-5 w-5 mx-auto mb-2 animate-spin" />
              Buscando...
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-[350px] overflow-y-auto">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  className="flex items-start p-3 hover:bg-muted/50 transition-colors border-b last:border-b-0"
                  onClick={() => {
                    setIsOpen(false)
                    setQuery("")
                  }}
                >
                  {result.image ? (
                    <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 mr-3">
                      <Image
                        src={result.image || "/placeholder.svg"}
                        alt={result.title}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-lg">{getTypeIcon(result.type)}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-sm font-medium line-clamp-1">{result.title}</h4>
                      <span className="text-xs bg-muted px-1.5 py-0.5 rounded-full text-muted-foreground whitespace-nowrap flex-shrink-0">
                        {result.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{result.content}</p>
                    {result.date && <p className="text-xs text-muted-foreground mt-1">{result.date}</p>}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No se encontraron resultados para &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  )
}