import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog DER Eventos | Tendencias y Estrategias en la Industria de Eventos",
  description:
    "Descubre las últimas tendencias, estrategias y mejores prácticas en la industria de eventos. Artículos escritos por expertos para profesionales del sector.",
  keywords:
    "blog eventos, tendencias eventos, tecnología eventos, estrategias eventos, organización eventos, eventos corporativos",
  openGraph: {
    title: "Blog DER Eventos | Tendencias y Estrategias en la Industria de Eventos",
    description: "Descubre las últimas tendencias, estrategias y mejores prácticas en la industria de eventos.",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
