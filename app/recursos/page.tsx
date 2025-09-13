import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar, Filter, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Recursos Descargables | DER - Soluciones Integrales para Eventos",
  description: "Descarga guías, checklists, planificadores y templates para organizar eventos exitosos.",
}

export default function ResourcesPage() {
  const resource_categories = [
    { id: "checklists", name: "Checklists" },
    { id: "planificadores", name: "Planificadores" },
    { id: "templates", name: "Templates" },
    { id: "guias", name: "Guías" },
  ]

  const event_types = [
    { id: "corporativo", name: "Eventos Corporativos" },
    { id: "social", name: "Eventos Sociales" },
    { id: "deportivo", name: "Eventos Deportivos" },
    { id: "cultural", name: "Eventos Culturales" },
    { id: "academico", name: "Eventos Académicos" },
  ]

  const resources = [
    {
      id: "checklist-evento-corporativo",
      title: "Checklist Completo para Eventos Corporativos",
      description: "Lista exhaustiva de tareas para planificar y ejecutar un evento corporativo exitoso.",
      type: "checklist",
      eventType: "corporativo",
      downloadCount: 2547,
      updatedAt: "15 de abril, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Checklist+Corporativo",
      fileSize: "1.2 MB",
      fileType: "PDF",
    },
    {
      id: "planificador-conferencias",
      title: "Planificador de Conferencias y Congresos",
      description: "Herramienta detallada para organizar conferencias y congresos de cualquier escala.",
      type: "planificador",
      eventType: "corporativo",
      downloadCount: 1823,
      updatedAt: "10 de abril, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Planificador+Conferencias",
      fileSize: "2.5 MB",
      fileType: "PDF",
    },
    {
      id: "template-presupuesto-eventos",
      title: "Template de Presupuesto para Eventos",
      description: "Plantilla Excel para calcular y gestionar el presupuesto de tu evento con precisión.",
      type: "template",
      eventType: "corporativo",
      downloadCount: 3156,
      updatedAt: "5 de abril, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Template+Presupuesto",
      fileSize: "0.8 MB",
      fileType: "XLSX",
    },
    {
      id: "guia-eventos-sostenibles",
      title: "Guía para Eventos Sostenibles",
      description: "Manual completo con estrategias y prácticas para reducir el impacto ambiental de tus eventos.",
      type: "guia",
      eventType: "todos",
      downloadCount: 1975,
      updatedAt: "1 de abril, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Guía+Sostenibilidad",
      fileSize: "3.5 MB",
      fileType: "PDF",
    },
    {
      id: "checklist-bodas",
      title: "Checklist para Planificación de Bodas",
      description:
        "Lista detallada de tareas para organizar una boda perfecta, desde 12 meses antes hasta el gran día.",
      type: "checklist",
      eventType: "social",
      downloadCount: 4231,
      updatedAt: "28 de marzo, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Checklist+Bodas",
      fileSize: "1.5 MB",
      fileType: "PDF",
    },
    {
      id: "planificador-eventos-deportivos",
      title: "Planificador de Eventos Deportivos",
      description: "Herramienta completa para organizar competencias deportivas de cualquier disciplina y escala.",
      type: "planificador",
      eventType: "deportivo",
      downloadCount: 1456,
      updatedAt: "20 de marzo, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Planificador+Deportivo",
      fileSize: "2.2 MB",
      fileType: "PDF",
    },
    {
      id: "template-plan-marketing-eventos",
      title: "Template de Plan de Marketing para Eventos",
      description: "Plantilla editable para crear un plan de marketing y promoción efectivo para tu evento.",
      type: "template",
      eventType: "todos",
      downloadCount: 2789,
      updatedAt: "15 de marzo, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Template+Marketing",
      fileSize: "1.1 MB",
      fileType: "DOCX",
    },
    {
      id: "guia-tecnologia-eventos",
      title: "Guía de Tecnología para Eventos",
      description:
        "Manual sobre las últimas tecnologías y herramientas digitales para potenciar la experiencia de tu evento.",
      type: "guia",
      eventType: "corporativo",
      downloadCount: 2134,
      updatedAt: "10 de marzo, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Guía+Tecnología",
      fileSize: "4.2 MB",
      fileType: "PDF",
    },
    {
      id: "checklist-eventos-academicos",
      title: "Checklist para Eventos Académicos",
      description: "Lista completa para organizar conferencias, simposios y congresos académicos exitosos.",
      type: "checklist",
      eventType: "academico",
      downloadCount: 1678,
      updatedAt: "5 de marzo, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Checklist+Académico",
      fileSize: "1.3 MB",
      fileType: "PDF",
    },
    {
      id: "planificador-festivales-culturales",
      title: "Planificador de Festivales y Eventos Culturales",
      description: "Herramienta detallada para la organización de festivales, exposiciones y eventos culturales.",
      type: "planificador",
      eventType: "cultural",
      downloadCount: 1345,
      updatedAt: "1 de marzo, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Planificador+Cultural",
      fileSize: "2.7 MB",
      fileType: "PDF",
    },
    {
      id: "template-logistica-eventos",
      title: "Template de Logística para Eventos",
      description: "Plantilla para planificar y gestionar todos los aspectos logísticos de tu evento.",
      type: "template",
      eventType: "todos",
      downloadCount: 2456,
      updatedAt: "25 de febrero, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Template+Logística",
      fileSize: "1.4 MB",
      fileType: "XLSX",
    },
    {
      id: "guia-seguridad-eventos",
      title: "Guía de Seguridad para Eventos",
      description: "Manual completo sobre protocolos y medidas de seguridad para eventos de cualquier tipo y escala.",
      type: "guia",
      eventType: "todos",
      downloadCount: 1897,
      updatedAt: "20 de febrero, 2025",
      image: "/placeholder.svg?height=400&width=600&text=Guía+Seguridad",
      fileSize: "3.8 MB",
      fileType: "PDF",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Recursos <span className="text-orange-500">Descargables</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-slate-300 mb-8">
              Descarga guías, checklists, planificadores y templates para organizar eventos exitosos y profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Explorar Recursos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Solicitar Recurso Personalizado</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white dark:bg-dark-100">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-orange-500" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filtrar Recursos</h2>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Por Tipo de Recurso</h3>
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                    >
                      Todos
                    </TabsTrigger>
                    {resource_categories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Por Tipo de Evento</h3>
                  <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <TabsTrigger
                      value="all-events"
                      className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                    >
                      Todos
                    </TabsTrigger>
                    {event_types.map((type) => (
                      <TabsTrigger
                        key={type.id}
                        value={`event-${type.id}`}
                        className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                      >
                        {type.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-white dark:bg-dark-300 rounded-lg overflow-hidden shadow-md group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{resource.title}</h3>
                        <p className="text-gray-700 dark:text-slate-300 text-sm mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>
                              {resource.fileType} • {resource.fileSize}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{resource.updatedAt}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {resource.downloadCount.toLocaleString()} descargas
                          </span>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Download className="h-4 w-4 mr-2" /> Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Content for each resource type */}
              {resource_categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources
                      .filter((resource) => resource.type === category.id)
                      .map((resource) => (
                        <div
                          key={resource.id}
                          className="bg-white dark:bg-dark-300 rounded-lg overflow-hidden shadow-md group"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{resource.title}</h3>
                            <p className="text-gray-700 dark:text-slate-300 text-sm mb-4">{resource.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-1" />
                                <span>
                                  {resource.fileType} • {resource.fileSize}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{resource.updatedAt}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {resource.downloadCount.toLocaleString()} descargas
                              </span>
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                                <Download className="h-4 w-4 mr-2" /> Descargar
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}

              {/* Content for each event type */}
              {event_types.map((type) => (
                <TabsContent key={type.id} value={`event-${type.id}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources
                      .filter((resource) => resource.eventType === type.id || resource.eventType === "todos")
                      .map((resource) => (
                        <div
                          key={resource.id}
                          className="bg-white dark:bg-dark-300 rounded-lg overflow-hidden shadow-md group"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{resource.title}</h3>
                            <p className="text-gray-700 dark:text-slate-300 text-sm mb-4">{resource.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-1" />
                                <span>
                                  {resource.fileType} • {resource.fileSize}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{resource.updatedAt}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {resource.downloadCount.toLocaleString()} descargas
                              </span>
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                                <Download className="h-4 w-4 mr-2" /> Descargar
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-16 bg-secondary dark:bg-dark-200">
        <div className="container px-4 md:px-6">
          <div className="bg-white dark:bg-dark-300 p-8 md:p-12 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Necesitas un recurso personalizado?
                </h2>
                <p className="text-gray-700 dark:text-slate-300 mb-6">
                  Nuestro equipo puede crear guías, checklists y templates adaptados específicamente a las necesidades
                  de tu evento o empresa.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-slate-300">Adaptados a tu industria y tipo de evento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-slate-300">Con tu marca y elementos visuales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-slate-300">
                      Formatos editables para futuras actualizaciones
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-dark-400 text-gray-900 dark:text-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-dark-400 text-gray-900 dark:text-white"
                        placeholder="Tu email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="resource-type"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Tipo de recurso
                    </label>
                    <select
                      id="resource-type"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-dark-400 text-gray-900 dark:text-white"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="checklist">Checklist</option>
                      <option value="planificador">Planificador</option>
                      <option value="template">Template</option>
                      <option value="guia">Guía</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Detalles de tu solicitud
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-dark-400 text-gray-900 dark:text-white"
                      placeholder="Describe el recurso que necesitas y para qué tipo de evento"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Solicitar Recurso Personalizado
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
