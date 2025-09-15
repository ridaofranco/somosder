"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, ArrowRight, Loader2, FileText, Calendar, Lightbulb, HelpCircle, File } from "lucide-react"
import Link from "next/link"
import { searchInIndex, getSuggestions, type SearchIndexItem } from "@/lib/search-index"
import Image from "next/image"

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchIndexItem[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  // Función para realizar la búsqueda
  useEffect(() => {
    if (!query.trim() || !open) {
      setResults([])
      setSuggestions([])
      setLoading(false); // Asegurarse de que loading sea false si la consulta está vacía o el diálogo está cerrado
      return
    }

    setLoading(true)

    // Simular un pequeño retraso para evitar demasiadas búsquedas mientras se escribe
    const timer = setTimeout(() => {
      try {
        // Obtener sugerencias si la consulta es corta
        if (query.length < 4) {
          const newSuggestions = getSuggestions(query, 6)
          setSuggestions(newSuggestions)
        } else {
          setSuggestions([])
        }

        // Realizar la búsqueda
        const searchResults = searchInIndex(query, 15)
        setResults(searchResults)
      } catch (error) {
        console.error("Error durante la búsqueda en SearchDialog:", error);
        setResults([]);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query, open])

  // Enfocar el input cuando se abre el diálogo
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [open])

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

  // Obtener icono según el tipo de resultado
  const getIcon = (type: string) => {
    switch (type) {
      case "servicio":
        return <Lightbulb className="h-5 w-5 text-orange-500" />
      case "proyecto":
        return <Calendar className="h-5 w-5 text-orange-500" />
      case "blog":
        return <FileText className="h-5 w-5 text-orange-500" />
      case "faq":
        return <HelpCircle className="h-5 w-5 text-orange-500" />
      case "página":
        return <File className="h-5 w-5 text-orange-500" />
      default:
        return <Search className="h-5 w-5 text-orange-500" />
    }
  }

  // Obtener etiqueta según el tipo de resultado
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "servicio":
        return "Servicio"
      case "proyecto":
        return "Proyecto"
      case "blog":
        return "Blog"
      case "faq":
        return "FAQ"
      case "página":
        return "Página"
      default:
        return "Resultado"
    }
  }

  // Agrupar resultados por tipo
  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.type]) {
        acc[result.type] = []
      }
      acc[result.type].push(result)
      return acc
    },
    {} as Record<string, SearchIndexItem[]>,
  )

  // Orden de los tipos para mostrar
  const typeOrder = ["servicio", "proyecto", "blog", "faq", "página"]

  // Añade esta función dentro del componente SearchDialog
  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim() && selectedSuggestion === -1) {
      e.preventDefault()
      setOpen(false)
      window.location.href = `/busqueda?q=${encodeURIComponent(query)}`
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Buscar">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-0 max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="px-4 pt-4 pb-2 flex-shrink-0">
          <DialogTitle className="sr-only">Buscar en DER Eventos</DialogTitle>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar servicios, proyectos, artículos..."
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                handleKeyDown(e)
                handleSearch(e)
              }}
              ref={inputRef}
            />
            {loading && <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />}
            {query && !loading && (
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 text-muted-foreground"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </DialogHeader>

        {/* Sugerencias de autocompletado */}
        {suggestions.length > 0 && (
          <div className="px-4 py-2 border-t">
            <p className="text-xs text-muted-foreground mb-1">Sugerencias:</p>
            <div className="flex flex-wrap gap-1">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedSuggestion === index
                      ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                      : "bg-muted hover:bg-orange-50 dark:hover:bg-orange-950"
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
        <div className="flex-1 overflow-y-auto">
          {loading && query ? (
            <div className="py-12 text-center text-muted-foreground">
              <Loader2 className="h-8 w-8 mx-auto mb-4 animate-spin" />
              <p>Buscando resultados para &quot;{query}&quot;...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y">
              {typeOrder.map((type) => {
                if (!groupedResults[type] || groupedResults[type].length === 0) return null

                return (
                  <div key={type} className="py-2 px-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 capitalize">{getTypeLabel(type)}s</h3>
                    <div className="space-y-2">
                      {groupedResults[type].map((result, index) => (
                        <Link
                          key={index}
                          href={result.url}
                          className="flex items-start gap-3 p-2 hover:bg-muted/50 rounded-md transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <div className="mt-1 flex-shrink-0">
                            {result.image ? (
                              <div className="w-10 h-10 rounded overflow-hidden">
                                <Image
                                  src={result.image || "/placeholder.svg"}
                                  alt={result.title}
                                  width={40}
                                  height={40}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            ) : (
                              <div className="flex-shrink-0">{getIcon(result.type)}</div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-base font-medium truncate">{result.title}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{result.content}</p>
                            {result.date && <p className="text-xs text-muted-foreground mt-1">{result.date}</p>}
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground mt-1.5 ml-2 flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : query.length > 1 ? (
            <div className="py-12 text-center text-muted-foreground">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-lg mb-2">No se encontraron resultados</p>
              <p className="text-sm">No hay coincidencias para &quot;{query}&quot;</p>
              <p className="text-sm mt-4">Sugerencias:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>Verifica que todas las palabras estén escritas correctamente</li>
                <li>Prueba con términos más generales</li>
                <li>Prueba con sinónimos</li>
              </ul>
            </div>
          ) : null}
        </div>
        {query.trim() && results.length > 0 && (
          <div className="p-4 border-t text-center">
            <Link
              href={`/busqueda?q=${encodeURIComponent(query)}`}
              className="text-sm text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400 inline-flex items-center"
              onClick={() => setOpen(false)}
            >
              Ver todos los resultados
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}