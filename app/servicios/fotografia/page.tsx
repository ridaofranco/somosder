import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Video, Edit, Share2, Monitor, Zap } from "lucide-react"
import ServiceDetailComponent from "@/components/service-detail"
import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"

export const metadata: Metadata = {
  title: "Cobertura Fotográfica | DER - Desarrollo de Eventos y Reuniones",
  description:
    "Capturamos los momentos más importantes de tu evento con cobertura fotográfica profesional, creando un registro visual de alta calidad.",
  keywords: "fotografía eventos, cobertura fotográfica, fotógrafo profesional, registro visual, fotografía corporativa",
}

export default function FotografiaPage() {
  const serviceDataForDetailComponent = {
    title: "Cobertura Fotográfica y Audiovisual",
    description:
      "Capturamos la esencia de tu evento con cobertura fotográfica y audiovisual profesional que preserva los momentos más importantes y crea contenido de valor para tu marca.",
    image: getServiceFeaturedImage("fotografia"),
    benefits: [
      "Cobertura fotográfica profesional completa",
      "Video corporativo y contenido para redes sociales",
      "Streaming profesional y transmisión en vivo",
      "Entrega inmediata de contenido seleccionado",
      "Galería online privada para descarga",
      "Derechos de uso comercial incluidos",
    ],
    features: [
      {
        title: "Fotografía Corporativa",
        description:
          "Cobertura completa del evento con enfoque en momentos clave, networking, presentaciones y detalles que reflejan la calidad de tu marca.",
        icon: <Camera className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Producción Audiovisual",
        description:
          "Videos corporativos, highlights del evento, testimoniales de participantes y contenido optimizado para diferentes plataformas digitales.",
        icon: <Video className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Streaming Profesional",
        description:
          "Transmisión en vivo multi-cámara con calidad broadcast, integración con plataformas digitales y opciones interactivas para audiencia remota.",
        icon: <Monitor className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Entrega Inmediata",
        description:
          "Selección de fotos editadas disponibles durante el evento para redes sociales, con galería completa entregada en 48 horas.",
        icon: <Zap className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Plataforma Digital",
        description:
          "Galería online privada con opciones de descarga en diferentes resoluciones, compartir selectivo y estadísticas de engagement.",
        icon: <Share2 className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Contenido Social Media",
        description:
          "Piezas gráficas optimizadas para Instagram, LinkedIn, Facebook y otras plataformas, con formatos específicos para cada canal.",
        icon: <Edit className="h-10 w-10 text-orange-500 mb-4" />,
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
            src={getServiceFeaturedImage("fotografia")}
            alt="Cobertura Fotográfica y Audiovisual"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Cobertura <span className="text-orange-500">Fotográfica</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Capturamos la esencia de tu evento con fotografía profesional que convierte momentos efímeros en
                recuerdos eternos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Capturar Momentos
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Captura cada momento con DER</h2>
            <p className="text-white text-opacity-90 mb-8">
              Solicita una consulta personalizada y descubre cómo nuestra cobertura fotográfica puede preservar los
              mejores momentos de tu evento.
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
