import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Página no encontrada</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>
      <Link href="/">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <Home className="mr-2 h-4 w-4" /> Volver al inicio
        </Button>
      </Link>
    </div>
  )
}
