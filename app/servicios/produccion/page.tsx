import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import ServiceDetailComponent from "@/components/service-detail"
import { Monitor, Users, Calendar, Settings, Lightbulb, Target } from "lucide-react"

export const metadata = {
  title: "Producción de Eventos | DER",
  description:
    "Servicios de producción integral para eventos corporativos, congresos, lanzamientos y más. Soluciones técnicas y creativas para eventos memorables.",
}

export default function ProduccionPage() {
  const serviceId = "produccion"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Producción de Eventos",
    description:
      "Coordinamos de forma integral todo el proceso del evento: desde la conceptualización hasta el desmontaje. Nuestro servicio de producción integral abarca todos los aspectos logísticos y operativos de tu evento.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746643089/IMG_2292_xhkghv.jpg",
    benefits: [
      "Gestión completa de todos los aspectos operativos",
      "Coordinación centralizada de proveedores",
      "Solución rápida de imprevistos",
      "Optimización de tiempos y recursos",
      "Supervisión profesional durante todo el evento",
    ],
    features: [
      {
        title: "Producción 360°",
        description: "Eventos corporativos, culturales, sociales, deportivos con gestión integral",
        icon: <Target className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Dirección técnica y de montaje",
        description: "Supervisión profesional de todos los aspectos técnicos del evento",
        icon: <Settings className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Coordinación de proveedores",
        description: "Gestión centralizada de todos los proveedores y servicios",
        icon: <Users className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Producción de espectáculos",
        description: "Shows y presentaciones con alto impacto visual y experiencial",
        icon: <Monitor className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Gestión de cronogramas",
        description: "Planificación detallada de tiempos y ensayos",
        icon: <Calendar className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Gestión de talento",
        description: "Coordinación de speakers, artistas y staff operativo",
        icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      },
    ],
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
        <OptimizedImage src={featuredImage} alt="Producción de Eventos" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Producción de <span className="text-orange-500">Eventos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Transformamos ideas en experiencias memorables con nuestra producción integral de eventos.
          </p>
          <div>
            <a
              href="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Solicitar Información
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Component */}
      <ServiceDetailComponent service={serviceDataForDetailComponent} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para crear un evento memorable?</h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestro equipo de producción está preparado para transformar tus ideas en experiencias extraordinarias.
            </p>
            <a
              href="/contacto"
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
