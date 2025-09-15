import type { Metadata } from "next"
import BlogLayout from "@/components/blog-layout"
import { blogs } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Probando el Esqueleto de Blog: Una Guía de Prueba | Blog DER EVENT HUB",
  description: "Este es un artículo de prueba para visualizar cómo se renderiza el esqueleto de un blog post y asegurar su correcta implementación.",
}

export default function BlogPostSkeletonTestPage() {
  const post = blogs.find((blog) => blog.id === "blog-post-skeleton-test")

  if (!post) {
    notFound()
  }

  return <BlogLayout post={post} />
}