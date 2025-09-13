"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Filter } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { categories, featuredProjects, projects } from "@/lib/data"
import CTASection from "@/components/cta-section"

export default function PortfolioClientPage() {
  const monthMap = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  }

  function parseDate(dateString) {
    if (!dateString) return new Date(0)
    const lowerDateString = dateString.toLowerCase()
    const parts = lowerDateString.split(/[\s,-]+/)
    let year, monthStr, dayStr

    year = parts.find((p) => /^\d{4}$/.test(p))
    monthStr = parts.find((p) => monthMap[p] !== undefined)

    const dayMatch = lowerDateString.match(/(\d{1,2})(?:-\d{1,2})?/)
    if (dayMatch) {
      dayStr = dayMatch[1]
    }

    if (year && monthStr) {
      const month = monthMap[monthStr]
      const day = dayStr ? Number.parseInt(dayStr) : 1
      return new Date(Number.parseInt(year), month, day)
    }
    console.warn(`Could not parse date for sorting: ${dateString}`)
    return new Date(0) // Fallback for unparseable dates
  }

  const [activeFilter, setActiveFilter] = useState("all")
  const [sortedProjects, setSortedProjects] = useState([])

  useEffect(() => {
    const projectsWithParsedDates = projects.map((p) => ({ ...p, parsedDate: parseDate(p.date) }))
    const sorted = [...projectsWithParsedDates].sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())
    setSortedProjects(sorted)
  }, []) // Se ejecuta una vez al montar el componente

  const filteredProjects =
    activeFilter === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => {
          if (Array.isArray(project.category)) {
            return project.category.includes(activeFilter)
          }
          return project.category === activeFilter
        })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent dark:from-dark-100 dark:to-transparent z-10" />
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637574/DSC_0218_b94879.jpg"
            alt="Portfolio DER"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Nuestro <span className="text-orange-500">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 mb-8">
                Descubre nuestros proyectos más destacados y casos de éxito en la industria de eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                href={`/portfolio/${project.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filters */}
      <section className="w-full py-12 md:py-24 bg-secondary section-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Todos los Proyectos</h2>

            {/* Filtros para móvil */}
            <div className="md:hidden w-full">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveFilter}>
                <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category === "Todos" ? "all" : category}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Filtros para desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filtrar:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const categoryValue = cat === "Todos" ? "all" : cat
                  return (
                    <Button
                      key={cat}
                      variant={activeFilter === categoryValue ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => setActiveFilter(categoryValue)}
                      className="rounded-full px-3 py-1 text-xs hover:bg-accent"
                    >
                      {cat}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  href={`/portfolio/${project.id}`}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para crear tu próximo evento?"
        subtitle="Contáctanos hoy mismo y descubre cómo podemos ayudarte a crear una experiencia inolvidable que supere todas tus expectativas."
        primaryButtonText="Solicita una Consulta"
        primaryButtonLink="/contacto"
        secondaryButtonText="Cotiza tu Evento"
        secondaryButtonLink="/cotizador"
        variant="gradient"
      />
    </div>
  )
}
