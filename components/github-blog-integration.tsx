"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink } from "lucide-react"

interface BlogPost {
  title: string
  date: string
  description: string
  url: string
}

export default function GitHubBlogIntegration() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        // Reemplaza con tu usuario/organización y repositorio
        const repoOwner = "der-eventos"
        const repoName = "blog"

        // Obtener los archivos del directorio _posts
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/_posts`)

        if (!response.ok) {
          throw new Error("No se pudieron cargar los posts")
        }

        const files = await response.json()

        // Filtrar solo archivos markdown
        const markdownFiles = files.filter((file: any) => file.name.endsWith(".md") || file.name.endsWith(".markdown"))

        // Obtener contenido de cada archivo
        const postsData = await Promise.all(
          markdownFiles.map(async (file: any) => {
            const contentResponse = await fetch(file.download_url)
            const content = await contentResponse.text()

            // Extraer frontmatter (metadatos)
            const frontmatterRegex = /---\n([\s\S]*?)\n---/
            const match = content.match(frontmatterRegex)

            if (match && match[1]) {
              const frontmatter = match[1]

              // Extraer título, fecha y descripción
              const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\n/)
              const dateMatch = frontmatter.match(/date:\s*["']?(.*?)["']?\n/)
              const descriptionMatch = frontmatter.match(/description:\s*["']?(.*?)["']?\n/)

              const title = titleMatch ? titleMatch[1] : file.name
              const date = dateMatch ? dateMatch[1] : "Sin fecha"
              const description = descriptionMatch
                ? descriptionMatch[1]
                : content.replace(frontmatterRegex, "").trim().substring(0, 150) + "..."

              // Construir URL del post
              const fileName = file.name.replace(/\.[^/.]+$/, "")
              const url = `https://${repoOwner}.github.io/${repoName}/${fileName}`

              return { title, date, description, url }
            }

            return {
              title: file.name,
              date: "Sin fecha",
              description: "Sin descripción",
              url: file.html_url,
            }
          }),
        )

        // Ordenar por fecha (más reciente primero)
        postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

        setPosts(postsData)
        setLoading(false)
      } catch (err) {
        console.error("Error al cargar los posts:", err)
        setError("No se pudieron cargar los posts del blog")
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-4 w-1/4" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-slate-300">{post.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{post.date}</span>
            <Button variant="outline" size="sm" asChild>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Leer más <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
