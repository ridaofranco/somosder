import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, FileText, Target, TrendingUp, Award } from "lucide-react"
import ServiceDetailComponent from "@/components/service-detail"
import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"

export const metadata: Metadata = {
  title: "Servicios Post Evento | DER - Desarrollo de Eventos y Reuniones",
  description:
    "Maximiza el valor de tu evento con nuestros servicios post evento: análisis de resultados, seguimiento de leads, reportes detallados y estrategias de continuidad.",
  keywords:
    "servicios post evento, análisis de resultados, seguimiento leads, reportes eventos, ROI eventos, evaluación eventos",
}

export default function PostEventoPage() {
  const serviceDataForDetailComponent = {
    title: "Servicios Post Evento",
    description:
      "El evento no termina cuando se apagan las luces. Nuestros servicios post evento te ayudan a maximizar el ROI, analizar resultados y construir sobre el éxito alcanzado para futuras iniciativas.",
    image: getServiceFeaturedImage("post-evento"),
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1749304189/20230813_235058_0000_htdhek.jpg",
    benefits: [
      "Análisis detallado de métricas y KPIs",
      "Seguimiento profesional de leads generados",
      "Reportes ejecutivos con insights accionables",
      "Evaluación de satisfacción de participantes",
      "Recomendaciones para eventos futuros",
      "Documentación completa del evento",
    ],
    features: [
      {
        title: "Análisis de Resultados",
        description:
          "Evaluación completa de todas las métricas del evento: asistencia, engagement, satisfacción, conversiones y ROI, con reportes detallados y visualizaciones claras.",
        icon: <BarChart3 className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Seguimiento de Leads",
        description:
          "Gestión profesional de todos los contactos generados durante el evento, con clasificación, scoring y estrategias de seguimiento personalizadas.",
        icon: <Users className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Reportes Ejecutivos",
        description:
          "Documentos ejecutivos con análisis profundo de resultados, comparativas con objetivos, insights clave y recomendaciones estratégicas.",
        icon: <FileText className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Evaluación de Impacto",
        description:
          "Medición del impacto real del evento en objetivos de negocio, brand awareness, generación de oportunidades y satisfacción de stakeholders.",
        icon: <Target className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Optimización Continua",
        description:
          "Identificación de oportunidades de mejora, benchmarking con mejores prácticas y desarrollo de estrategias para eventos futuros.",
        icon: <TrendingUp className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Certificación y Reconocimientos",
        description:
          "Gestión de certificados de participación, reconocimientos especiales y documentación oficial para participantes y speakers.",
        icon: <Award className="h-10 w-10 text-orange-500 mb-4" />,
      },
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10" />
        <div className="relative h-[60vh] md:h-[70vh]">
          <OptimizedImage
            src={getServiceFeaturedImage("post-evento")}
            alt="Servicios Post Evento"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Servicios <span className="text-orange-500">Post Evento</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Convierte los resultados de tu evento en insights accionables y oportunidades de crecimiento con
                nuestros servicios post evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Analizar Resultados
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componente ServiceDetail */}
      <ServiceDetailComponent service={serviceDataForDetailComponent} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Maximiza el valor de tu evento con DER</h2>
            <p className="text-white text-opacity-90 mb-8">
              Solicita una consulta personalizada y descubre cómo nuestros servicios post evento pueden convertir
              resultados en oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Contactar Ahora
                </Button>
              </Link>
              <Link href="/proyectos">
                <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
