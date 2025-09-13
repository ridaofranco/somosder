import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Video, Mic, Monitor, Edit, Share2 } from "lucide-react"
import ServiceDetailComponent from "@/components/service-detail"
import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"

export const metadata: Metadata = {
  title: "Cobertura Audiovisual | DER - Desarrollo de Eventos y Reuniones",
  description:
    "Cobertura profesional completa para tu evento: fotografía, video, streaming en vivo, producción audiovisual y documentación multimedia de alta calidad.",
  keywords: "cobertura audiovisual, fotografía eventos, video profesional, streaming eventos, producción multimedia",
}

export default function CoberturaPage() {
  const serviceDataForDetailComponent = {
    title: "Cobertura Audiovisual",
    description:
      "Capturamos cada momento importante de tu evento con la más alta calidad profesional. Desde fotografía hasta streaming en vivo, documentamos tu evento para maximizar su alcance e impacto.",
    image: getServiceFeaturedImage("cobertura"),
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1749304189/20230813_233735_0000_tzahax.jpg",
    benefits: [
      "Equipo profesional de última generación",
      "Cobertura completa en múltiples formatos",
      "Streaming en vivo con calidad broadcast",
      "Edición y post-producción incluida",
      "Entrega rápida de contenido",
      "Derechos de uso comercial incluidos",
    ],
    features: [
      {
        title: "Fotografía Profesional",
        description:
          "Cobertura fotográfica completa del evento con equipos de alta gama, capturando momentos clave, networking, presentaciones y ambiente general.",
        icon: <Camera className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Video y Documentales",
        description:
          "Producción de videos promocionales, documentales del evento, testimoniales de participantes y resúmenes ejecutivos de alta calidad.",
        icon: <Video className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Streaming Profesional",
        description:
          "Transmisión en vivo con calidad broadcast, múltiples cámaras, audio profesional, gráficos en tiempo real y distribución multi-plataforma.",
        icon: <Monitor className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Audio y Sonido",
        description:
          "Grabación de audio de alta fidelidad, captación de conferencias, paneles, entrevistas y ambiente del evento con equipos profesionales.",
        icon: <Mic className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Post-Producción",
        description:
          "Edición profesional, color grading, audio mastering, gráficos animados, subtítulos y entrega en múltiples formatos y resoluciones.",
        icon: <Edit className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Distribución Digital",
        description:
          "Optimización para redes sociales, plataformas de video, sitios web corporativos y estrategias de distribución de contenido.",
        icon: <Share2 className="h-10 w-10 text-orange-500 mb-4" />,
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
            src={getServiceFeaturedImage("cobertura")}
            alt="Cobertura Audiovisual"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Cobertura <span className="text-orange-500">Audiovisual</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Cobertura audiovisual profesional que documenta, amplifica y perpetúa el impacto de tu evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Solicitar Cobertura
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Documenta tu evento con DER</h2>
            <p className="text-white text-opacity-90 mb-8">
              Solicita una consulta personalizada y descubre cómo nuestra cobertura audiovisual puede amplificar el
              impacto de tu evento.
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
