import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthorNotFound() {
  return (
    <div className="container px-4 md:px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Autor no encontrado</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Lo sentimos, no pudimos encontrar el autor que estás buscando o no hay artículos asociados a este autor.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/blog">Explorar el blog</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}
