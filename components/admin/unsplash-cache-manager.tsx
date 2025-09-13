"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Trash2, Download, BarChart3 } from "lucide-react"

interface CacheStats {
  total: number
  expired: number
  active: number
}

export default function UnsplashCacheManager() {
  const [stats, setStats] = useState<CacheStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchStats = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/cache/unsplash?action=stats")
      const data = await response.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error("Error fetching cache stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const cleanCache = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/cache/unsplash?action=clean")
      const data = await response.json()
      if (data.success) {
        await fetchStats() // Actualizar estadísticas
      }
    } catch (error) {
      console.error("Error cleaning cache:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const preloadImages = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/cache/unsplash?action=preload")
      const data = await response.json()
      if (data.success) {
        await fetchStats() // Actualizar estadísticas
      }
    } catch (error) {
      console.error("Error preloading images:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Gestión de Caché de Unsplash
        </CardTitle>
        <CardDescription>
          Administra el caché de imágenes de Unsplash para optimizar el rendimiento del blog
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats?.total || 0}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats?.active || 0}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Activas</div>
          </div>
          <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats?.expired || 0}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Expiradas</div>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex flex-wrap gap-3">
          <Button onClick={fetchStats} disabled={isLoading} variant="outline" className="flex items-center gap-2">
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Actualizar Stats
          </Button>

          <Button onClick={cleanCache} disabled={isLoading} variant="outline" className="flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Limpiar Expiradas
          </Button>

          <Button
            onClick={preloadImages}
            disabled={isLoading}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600"
          >
            <Download className="h-4 w-4" />
            Precargar Imágenes
          </Button>
        </div>

        {/* Información adicional */}
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>• Las imágenes se almacenan en caché por 24 horas</p>
          <p>• La precarga obtiene imágenes para blogs específicos y categorías comunes</p>
          <p>• Limpiar expiradas libera memoria eliminando imágenes antiguas</p>
        </div>
      </CardContent>
    </Card>
  )
}
