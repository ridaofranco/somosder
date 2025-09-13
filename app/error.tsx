"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error caught by error.tsx:", error)
  }, [error])

  const handleReset = () => {
    try {
      if (typeof reset === "function") {
        reset()
      } else {
        console.warn("Reset function is not available, falling back to page reload")
        if (typeof window !== "undefined") {
          window.location.reload()
        }
      }
    } catch (err) {
      console.error("Error during reset:", err)
      if (typeof window !== "undefined") {
        window.location.reload()
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-orange-500">500</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Algo salió mal</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para
        solucionarlo.
      </p>
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-8 max-w-md overflow-auto text-left">
          <p className="text-red-700 dark:text-red-400 font-mono text-sm">{error.message || JSON.stringify(error)}</p>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleReset} className="bg-orange-500 hover:bg-orange-600 text-white">
          <RefreshCw className="mr-2 h-4 w-4" /> Intentar nuevamente
        </Button>
        <Link href="/">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            <Home className="mr-2 h-4 w-4" /> Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  )
}
