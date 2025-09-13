import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data"
import AuthorPage from "./author-page"

interface AuthorPageProps {
  params: {
    author: string
  }
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  // Decodificar y formatear el nombre del autor
  const authorName = decodeURIComponent(params.author)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Verificar si el autor existe
  const authorPosts = blogPosts.filter((post) => post.author.toLowerCase() === authorName.toLowerCase())

  if (authorPosts.length === 0) {
    return {
      title: "Autor no encontrado | DER Eventos",
      description: "No se encontraron artículos para este autor.",
    }
  }

  return {
    title: `Artículos de ${authorName} | Blog DER Eventos`,
    description: `Descubre todos los artículos escritos por ${authorName} sobre eventos, tendencias y estrategias en la industria.`,
    openGraph: {
      title: `Artículos de ${authorName} | Blog DER Eventos`,
      description: `Descubre todos los artículos escritos por ${authorName} sobre eventos, tendencias y estrategias en la industria.`,
      type: "website",
    },
  }
}

export default function AuthorPageWrapper({ params }: AuthorPageProps) {
  // Decodificar y formatear el nombre del autor
  const authorName = decodeURIComponent(params.author)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Filtrar posts por autor
  const authorPosts = blogPosts.filter((post) => post.author.toLowerCase() === authorName.toLowerCase())

  // Si no hay posts, mostrar página 404
  if (authorPosts.length === 0) {
    notFound()
  }

  return <AuthorPage authorName={authorName} posts={authorPosts} />
}
