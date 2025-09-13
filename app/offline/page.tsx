"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WifiOff, Home, RefreshCw } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="mb-8 p-6 bg-orange-100 dark:bg-orange-900/20 rounded-full">
        <WifiOff className="h-16 w-16 text-orange-500" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Sin conexión a Internet</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Parece que no tienes conexión a Internet. Algunas funciones pueden no estar disponibles hasta que te vuelvas a
        conectar.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Ir al inicio
          </Link>
        </Button>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600" onClick={() => {
          if (typeof window !== "undefined") {
            window.location.reload()
          }
        }}>
          <RefreshCw className="mr-2 h-5 w-5" />
          Intentar nuevamente
        </Button>
      </div>
    </div>
  )
}
