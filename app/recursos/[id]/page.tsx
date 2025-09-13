import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download, FileText, Share2, Calendar, Eye } from "lucide-react"

import { SchemaOrg } from "@/components/schema-org"

// Datos de ejemplo para recursos descargables
const resources = [
  {
    id: "guia-eventos-sostenibles",
    title: "Guía Completa para Eventos Sostenibles",
    description:
      "Aprende a implementar prácticas sostenibles en tus eventos y reduce su impacto ambiental sin comprometer la experiencia.",
    category: "Sostenibilidad",
    image: "/placeholder.svg?height=600&width=1200&text=Guía+Eventos+Sostenibles",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "4.2 MB",
    publishDate: "15 de marzo, 2025",
    updateDate: "20 de abril, 2025",
    downloads: 1245,
    views: 3890,
    fullDescription:
      "Esta guía completa te ofrece estrategias prácticas y consejos para implementar prácticas sostenibles en tus eventos. Desde la selección de proveedores eco-friendly hasta la gestión de residuos y la medición de la huella de carbono, encontrarás todo lo que necesitas para hacer que tus eventos sean más respetuosos con el medio ambiente sin comprometer la calidad o la experiencia de los asistentes.",
    highlights: [
      "Estrategias para reducir residuos y eliminar plásticos de un solo uso",
      "Guía de selección de proveedores sostenibles",
      "Cálculo y compensación de huella de carbono",
      "Comunicación efectiva de tus iniciativas sostenibles",
      "Casos de éxito y ejemplos reales",
    ],
    tableOfContents: [
      "Introducción a la sostenibilidad en eventos",
      "Planificación sostenible desde el inicio",
      "Selección de venues y proveedores",
      "Gestión de residuos y economía circular",
      "Transporte y movilidad sostenible",
      "Alimentación responsable",
      "Medición de impacto y reportes",
      "Comunicación y marketing verde",
    ],
    relatedResources: ["checklist-planificacion-eventos", "plantilla-presupuesto-eventos"],
  },
  {
    id: "checklist-planificacion-eventos",
    title: "Checklist Completa para Planificación de Eventos",
    description:
      "Una checklist exhaustiva con todos los elementos a considerar en la planificación y ejecución de eventos exitosos.",
    category: "Planificación",
    image: "/placeholder.svg?height=600&width=1200&text=Checklist+Planificación",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "2.8 MB",
    publishDate: "10 de febrero, 2025",
    updateDate: "5 de abril, 2025",
    downloads: 2340,
    views: 5670,
    fullDescription:
      "Esta checklist exhaustiva te guiará a través de todas las etapas de planificación y ejecución de tu evento, asegurando que no olvides ningún detalle importante. Organizada cronológicamente y por áreas funcionales, esta herramienta es indispensable tanto para organizadores novatos como para profesionales experimentados que buscan optimizar sus procesos y garantizar eventos exitosos.",
    highlights: [
      "Más de 250 ítems organizados por categorías y cronología",
      "Versiones adaptadas para diferentes tipos de eventos",
      "Formato editable para personalizar según tus necesidades",
      "Incluye secciones para asignación de responsables y fechas límite",
      "Consejos profesionales para cada etapa del proceso",
    ],
    tableOfContents: [
      "Planificación estratégica (12-6 meses antes)",
      "Logística y operaciones (6-3 meses antes)",
      "Marketing y comunicación (6-1 mes antes)",
      "Producción y montaje (1 mes - 1 día antes)",
      "Ejecución (día del evento)",
      "Post-evento y evaluación",
    ],
    relatedResources: ["guia-eventos-sostenibles", "plantilla-presupuesto-eventos"],
  },
  {
    id: "plantilla-presupuesto-eventos",
    title: "Plantilla de Presupuesto para Eventos",
    description:
      "Herramienta completa en Excel para planificar, gestionar y controlar el presupuesto de tus eventos con precisión.",
    category: "Finanzas",
    image: "/placeholder.svg?height=600&width=1200&text=Plantilla+Presupuesto",
    downloadUrl: "#",
    fileType: "XLSX",
    fileSize: "1.5 MB",
    publishDate: "5 de enero, 2025",
    updateDate: "15 de marzo, 2025",
    downloads: 1890,
    views: 4120,
    fullDescription:
      "Esta plantilla de Excel te permite planificar, gestionar y controlar el presupuesto de tus eventos con precisión profesional. Con fórmulas preconfiguradas, categorías detalladas y funciones de seguimiento, podrás mantener tus finanzas bajo control en todo momento. La herramienta incluye dashboards visuales para analizar la distribución de gastos y comparar presupuesto vs. gastos reales.",
    highlights: [
      "Fórmulas preconfiguradas para cálculos automáticos",
      "Categorías detalladas para todos los aspectos del evento",
      "Seguimiento de presupuesto vs. gastos reales",
      "Dashboards visuales para análisis financiero",
      "Versiones para eventos pequeños, medianos y grandes",
    ],
    tableOfContents: [
      "Instrucciones de uso",
      "Resumen ejecutivo y dashboards",
      "Presupuesto detallado por categorías",
      "Seguimiento de pagos y facturas",
      "Análisis de variaciones",
      "Proyecciones y escenarios",
    ],
    relatedResources: ["guia-eventos-sostenibles", "checklist-planificacion-eventos"],
  },
  {
    id: "guia-tecnologia-eventos",
    title: "Guía de Tecnologías Innovadoras para Eventos",
    description:
      "Explora las últimas tecnologías y herramientas digitales para crear experiencias memorables e interactivas en tus eventos.",
    category: "Tecnología",
    image: "/placeholder.svg?height=600&width=1200&text=Tecnología+Eventos",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "5.7 MB",
    publishDate: "20 de abril, 2025",
    updateDate: "10 de mayo, 2025",
    downloads: 980,
    views: 2450,
    fullDescription:
      "Esta guía te introduce en el mundo de las tecnologías innovadoras para eventos, desde realidad aumentada y virtual hasta sistemas de networking digital y análisis de datos en tiempo real. Descubrirás cómo estas herramientas pueden transformar la experiencia de tus asistentes, aumentar el engagement y proporcionar datos valiosos para medir el éxito de tu evento y mejorar futuras ediciones.",
    highlights: [
      "Análisis de más de 30 tecnologías emergentes para eventos",
      "Casos de uso y ejemplos de implementación exitosa",
      "Guía de selección según tipo de evento y objetivos",
      "Consideraciones de presupuesto y ROI",
      "Tendencias futuras y tecnologías a vigilar",
    ],
    tableOfContents: [
      "Panorama actual de la tecnología en eventos",
      "Realidad aumentada y virtual",
      "Aplicaciones móviles y engagement digital",
      "Sistemas de registro y acreditación",
      "Tecnologías para networking",
      "Análisis de datos y métricas",
      "Streaming y eventos híbridos",
      "Implementación y consideraciones prácticas",
    ],
    relatedResources: ["checklist-planificacion-eventos", "guia-eventos-sostenibles"],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const resource = resources.find((resource) => resource.id === params.id)

  if (!resource) {
    return {
      title: "Recurso no encontrado",
    }
  }

  return {
    title: `${resource.title} | Recursos DER Eventos`,
    description: resource.description,
  }
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    id: resource.id,
  }))
}

export default function ResourcePage({ params }: { params: { id: string } }) {
  const resource = resources.find((resource) => resource.id === params.id)

  if (!resource) {
    notFound()
  }

  // Obtener recursos relacionados
  const relatedResourcesList = resource.relatedResources.map((id) => resources.find((r) => r.id === id)).filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/recursos" className="hover:text-primary">
          Recursos
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">{resource.title}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <Link href="/recursos" className="flex items-center text-primary hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Volver a recursos</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
            <div className="relative h-64 overflow-hidden">
              <img
                src={resource.image || "/placeholder.svg"}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {resource.category}
              </div>
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{resource.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <FileText className="text-primary h-5 w-5" />
                  <span>{resource.fileType}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <span>{resource.fileSize}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Calendar className="text-gray-500 h-5 w-5" />
                  <span>Actualizado: {resource.updateDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Download className="text-gray-500 h-5 w-5" />
                  <span>{resource.downloads} descargas</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Eye className="text-gray-500 h-5 w-5" />
                  <span>{resource.views} vistas</span>
                </div>
              </div>

              <a
                href={resource.downloadUrl}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
              >
                <Download className="h-5 w-5" />
                <span>Descargar Recurso</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Descripción Detallada</h2>
            <p className="text-gray-700 mb-8">{resource.fullDescription}</p>

            <h2 className="text-2xl font-bold mb-4">Aspectos Destacados</h2>
            <ul className="space-y-3 mb-8">
              {resource.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Contenido</h2>
            <ul className="space-y-3 mb-8">
              {resource.tableOfContents.map((item, index) => (
                <li key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <FileText className="text-primary h-5 w-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Compartir Recurso</h3>
            <div className="flex gap-2 mb-8">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                <span className="sr-only">Compartir en Facebook</span>
                <Share2 className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
                <span className="sr-only">Compartir en Twitter</span>
                <Share2 className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600">
                <span className="sr-only">Compartir en WhatsApp</span>
                <Share2 className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800">
                <span className="sr-only">Compartir en LinkedIn</span>
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <h3 className="text-xl font-semibold mb-4">Recursos Relacionados</h3>
            <div className="space-y-4 mb-8">
              {relatedResourcesList.map(
                (relatedResource) =>
                  relatedResource && (
                    <Link
                      key={relatedResource.id}
                      href={`/recursos/${relatedResource.id}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={relatedResource.image || "/placeholder.svg"}
                          alt={relatedResource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2">{relatedResource.title}</h4>
                        <p className="text-sm text-gray-500">{relatedResource.category}</p>
                      </div>
                    </Link>
                  ),
              )}
            </div>

            <h3 className="text-xl font-semibold mb-4">¿Necesitas un recurso personalizado?</h3>
            <p className="text-gray-600 mb-4">
              Si necesitas un recurso adaptado a tus necesidades específicas, contáctanos y te ayudaremos.
            </p>
            <Link
              href="/contacto"
              className="block w-full bg-primary hover:bg-primary/90 text-white text-center px-6 py-3 rounded-lg font-medium"
            >
              Solicitar Recurso Personalizado
            </Link>
          </div>
        </div>
      </div>

      {/* More Resources */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Más Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources
            .filter((r) => r.id !== resource.id)
            .slice(0, 4)
            .map((otherResource) => (
              <Link key={otherResource.id} href={`/recursos/${otherResource.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={otherResource.image || "/placeholder.svg"}
                      alt={otherResource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      {otherResource.category}
                    </div>
                  </div>

                  <div className="p-4 flex-grow">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {otherResource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{otherResource.description}</p>
                  </div>

                  <div className="p-4 pt-0 mt-auto">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>{otherResource.fileType}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{otherResource.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Schema.org structured data */}
      <SchemaOrg
        type="DigitalDocument"
        name={resource.title}
        description={resource.description}
        datePublished={resource.publishDate}
        dateModified={resource.updateDate}
        provider={{
          type: "Organization",
          name: "DER Eventos",
          url: "https://somosder.ar",
        }}
      />
    </div>
  )
}
