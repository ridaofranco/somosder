"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { searchInIndex, type SearchIndexItem } from "@/lib/search-index"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Loader2, FileText, Calendar, Lightbulb, HelpCircle, File } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const queryParam = searchParams.get("q") || ""

  const [query, setQuery] = useState(queryParam)
  const [results, setResults] = useState<SearchIndexItem[]>([])
  const [loading, setLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // Realizar búsqueda cuando cambia la consulta
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setLoading(false) // Asegurarse de que loading sea false si la consulta está vacía
      return
    }

    setLoading(true)

    // Pequeño retraso para mejorar la experiencia de usuario
    const timer = setTimeout(() => {
      const searchResults = searchInIndex(query, 50)
      setResults(searchResults)
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Filtrar resultados por tipo
  const filteredResults = activeFilter ? results.filter((result) => result.type === activeFilter) : results

  // Contar resultados por tipo
  const resultCounts = results.reduce(
    (acc, result) => {
      acc[result.type] = (acc[result.type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

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

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Resultados de búsqueda</h1>

      {/* Formulario de búsqueda */}
      <div className="flex items-center gap-2 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar en DER Eventos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
          Buscar
        </Button>
      </div>

      {/* Filtros y resultados */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filtros */}
        <div className="md:col-span-1">
          <div className="bg-muted/50 rounded-lg p-4">
            <h2 className="font-medium mb-3">Filtrar por tipo</h2>
            <div className="space-y-2">
              <button
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
                  activeFilter === null
                    ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveFilter(null)}
              >
                <span>Todos los resultados</span>
                <span className="bg-muted px-2 py-0.5 rounded-full text-xs">{results.length}</span>
              </button>

              {["servicio", "proyecto", "blog", "faq", "página"].map((type) =>
                resultCounts[type] ? (
                  <button
                    key={type}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
                      activeFilter === type
                        ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveFilter(type)}
                  >
                    <span className="flex items-center gap-2">
                      {getIcon(type)}
                      <span>{getTypeLabel(type)}s</span>
                    </span>
                    <span className="bg-muted px-2 py-0.5 rounded-full text-xs">{resultCounts[type]}</span>
                  </button>
                ) : null,
              )}
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="md:col-span-3">
          {loading && query.trim() ? ( // Mostrar loader solo si está cargando Y hay una consulta
            <div className="py-12 text-center text-muted-foreground">
              <Loader2 className="h-8 w-8 mx-auto mb-4 animate-spin" />
              <p>Buscando resultados para &quot;{query}&quot;...</p>
            </div>
          ) : filteredResults.length > 0 ? (
            <div>
              <p className="text-muted-foreground mb-6">
                Se encontraron {filteredResults.length} resultados para &quot;{query}&quot;
                {activeFilter && ` en ${getTypeLabel(activeFilter).toLowerCase()}s`}
              </p>

              <div className="space-y-6">
                {filteredResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className="block bg-card hover:bg-muted/50 rounded-lg p-4 transition-colors border"
                  >
                    <div className="flex gap-4">
                      {result.image ? (
                        <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={result.image || "/placeholder.svg"}
                            alt={result.title}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded bg-muted flex items-center justify-center flex-shrink-0">
                          {getIcon(result.type)}
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-medium">{result.title}</h3>
                          <span className="bg-muted px-2 py-0.5 rounded-full text-xs text-muted-foreground">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>

                        <p className="text-muted-foreground mt-1 line-clamp-2">{result.content}</p>

                        {result.date && <p className="text-xs text-muted-foreground mt-2">{result.date}</p>}

                        <div className="mt-2 text-sm text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400">
                          Ver más →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : query.trim() ? ( // Mostrar "No se encontraron resultados" si hay consulta pero no resultados
            <div className="py-12 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">No se encontraron resultados</h2>
              <p className="text-muted-foreground mb-6">
                No hay coincidencias para &quot;{query}&quot;
                {activeFilter && ` en ${getTypeLabel(activeFilter).toLowerCase()}s`}
              </p>

              <div className="max-w-md mx-auto bg-muted/50 rounded-lg p-4 text-left">
                <h3 className="font-medium mb-2">Sugerencias:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Verifica que todas las palabras estén escritas correctamente</li>
                  <li>Prueba con términos más generales</li>
                  <li>Prueba con sinónimos</li>
                  <li>Intenta buscar en todas las categorías</li>
                </ul>
              </div>
            </div>
          ) : ( // Mostrar mensaje inicial si la consulta está vacía
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Ingresa un término de búsqueda para ver resultados</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}