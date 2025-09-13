import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Handshake, FileText, Settings, Layout, Users } from "lucide-react"
import ServiceDetailComponent from "@/components/service-detail"
import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"

export const metadata: Metadata = {
  title: "Gestión de Venues | DER - Desarrollo de Eventos y Reuniones",
  description:
    "Encontramos y gestionamos el venue perfecto para tu evento. Desde la selección hasta la coordinación completa del espacio y servicios.",
}

export default function VenuesGestionPage() {
  const serviceDataForDetailComponent = {
    title: "Gestión Integral de Venues",
    description:
      "El venue es el escenario donde cobra vida tu evento. Gestionamos integralmente la selección, negociación y coordinación del espacio perfecto que se alinee con tus objetivos y presupuesto. Nuestro equipo especializado cuenta con acceso a un portfolio exclusivo de venues premium y mantiene relaciones estratégicas con los mejores espacios para eventos, garantizando condiciones comerciales favorables y un servicio de excelencia en cada proyecto.",
    image: getServiceFeaturedImage("venues-gestion"),
    benefits: [
      "Acceso a portfolio exclusivo de venues premium",
      "Negociación comercial favorable y transparente",
      "Gestión integral de contratos y permisos",
      "Coordinación completa con servicios del venue",
      "Supervisión de montaje y desmontaje",
      "Backup venues para contingencias",
    ],
    features: [
      {
        title: "Selección Estratégica",
        description:
          "Análisis de venues basado en objetivos del evento, perfil de audiencia, logística, presupuesto y imagen de marca que deseas proyectar.",
        icon: <Building className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Negociación Comercial",
        description:
          "Gestión comercial integral incluyendo tarifas, servicios incluidos, políticas de cancelación, y optimización de costos sin comprometer calidad.",
        icon: <Handshake className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Gestión Contractual",
        description:
          "Manejo completo de contratos, seguros, permisos municipales, licencias especiales y toda la documentación legal requerida.",
        icon: <FileText className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Coordinación Técnica",
        description:
          "Supervisión de aspectos técnicos: capacidad eléctrica, sistemas audiovisuales, climatización, accesibilidad y requerimientos especiales.",
        icon: <Settings className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Layout y Distribución",
        description:
          "Diseño óptimo del espacio considerando flujo de personas, zonas de networking, áreas VIP, accesos, y experiencia del participante.",
        icon: <Layout className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Coordinación de Servicios",
        description:
          "Gestión integral con proveedores del venue (catering, seguridad, limpieza, valet parking) y coordinación con proveedores externos.",
        icon: <Users className="h-10 w-10 text-orange-500 mb-4" />,
      },
    ],
  }

  return (
    <>
      {/* Hero Section Original */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10" />
        <div className="relative h-[60vh] md:h-[70vh]">
          <OptimizedImage
            src={getServiceFeaturedImage("venues-gestion")}
            alt="Gestión de Venues para Eventos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Gestión de <span className="text-orange-500">Venues</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Encontramos y gestionamos el venue perfecto para tu evento. Desde la selección hasta la coordinación
                completa del espacio y servicios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Encontrar Venue
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componente ServiceDetail con los datos adaptados */}
      <ServiceDetailComponent service={serviceDataForDetailComponent} />

      {/* CTA Section Genérico */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Encuentra el venue perfecto con DER</h2>
            <p className="text-white text-opacity-90 mb-8">
              Solicita una consulta personalizada y descubre cómo podemos ayudarte a encontrar y gestionar el espacio
              ideal para tu evento.
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
