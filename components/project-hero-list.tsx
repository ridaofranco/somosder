"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Tipo para los proyectos
interface Project {
  id: string
  title: string
  category: string
  description: string
  heroImage: string
}

// Lista de proyectos con sus imágenes de hero
const projects: Project[] = [
  {
    id: "manchester-city",
    title: "Manchester City",
    category: "Deportes",
    description: "Evento oficial del Manchester City en su gira por Latinoamérica",
    heroImage: "/images/manchester-city-event.png",
  },
  {
    id: "copa-america",
    title: "Copa América",
    category: "Deportes",
    description: "Organización logística para la Copa América 2024",
    heroImage: "/images/copa-america-hero.png",
  },
  {
    id: "festival-primavera",
    title: "Festival de Primavera",
    category: "Música",
    description: "Festival de música con más de 30 artistas internacionales",
    heroImage: "/images/festival-primavera-hero.png",
  },
  {
    id: "tech-summit",
    title: "Tech Summit",
    category: "Tecnología",
    description: "Conferencia internacional de tecnología e innovación",
    heroImage: "/images/tech-summit-hero.png",
  },
  {
    id: "gala-benefica",
    title: "Gala Benéfica",
    category: "Eventos Corporativos",
    description: "Gala benéfica para recaudar fondos para causas sociales",
    heroImage: "/images/gala-benefica-hero.png",
  },
  {
    id: "concierto-internacional",
    title: "Concierto Internacional",
    category: "Música",
    description: "Producción integral de concierto con artistas internacionales",
    heroImage: "/images/concierto-internacional-hero.png",
  },
]

// Categorías únicas para los filtros
const categories = Array.from(new Set(projects.map((project) => project.category)))

export default function ProjectHeroList() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")

  // Filtrar proyectos según la categoría y el término de búsqueda
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeTab === "all" || project.category === activeTab
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Nuestros Proyectos</h2>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Buscar proyectos..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={project.heroImage || `/placeholder.svg?text=${encodeURIComponent(project.title)}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-2 py-1 bg-primary text-white text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                <Button variant="link" className="p-0 h-auto mt-2">
                  Ver proyecto
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center">
            <p className="text-gray-500 mb-4">No se encontraron proyectos que coincidan con tu búsqueda</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setActiveTab("all")
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
