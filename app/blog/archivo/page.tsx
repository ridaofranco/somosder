import BlogArchivoClientPage from "./BlogArchivoClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Archivo de Artículos | Blog DER Eventos",
  description: "Explora nuestra colección completa de artículos sobre eventos, tendencias y mejores prácticas en la industria de eventos.",
  openGraph: {
    title: "Archivo de Artículos | Blog DER Eventos",
    description: "Explora nuestra colección completa de artículos sobre eventos, tendencias y mejores prácticas en la industria de eventos.",
    type: "website",
  },
}

export default function BlogArchivoPage() {
  return <BlogArchivoClientPage />
}
