import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import ServiceDetailComponent from "@/components/service-detail"
import { Megaphone, TrendingUp, Users, BarChart3, Target, Zap } from "lucide-react"

export const metadata = {
  title: "Marketing y Creatividad | DER",
  description:
    "Estrategias de marketing integral para eventos. Promoción digital, redes sociales, relaciones públicas y campañas publicitarias efectivas.",
}

export default function MarketingPage() {
  const serviceId = "marketing"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Marketing y Creatividad",
    description:
      "Desarrollamos estrategias de marketing integral para maximizar el alcance y éxito de tu evento. Desde campañas digitales hasta relaciones públicas tradicionales.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747795219/IMG_1582_pkplqc.jpg",
    benefits: [
      "Estrategias de marketing personalizadas",
      "Gestión de redes sociales especializada",
      "Campañas publicitarias efectivas",
      "Relaciones públicas y prensa",
      "Análisis de métricas y ROI",
      "Branding y identidad visual",
    ],
    features: [
      {
        title: "Estrategia Digital",
        description: "Campañas en redes sociales, email marketing y publicidad online segmentada.",
        icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Relaciones Públicas",
        description: "Gestión de medios, notas de prensa y cobertura mediática especializada.",
        icon: <Megaphone className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Engagement de Audiencia",
        description: "Estrategias para aumentar la participación y fidelización del público objetivo.",
        icon: <Users className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Análisis y Métricas",
        description: "Seguimiento detallado del rendimiento y optimización continua de campañas.",
        icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Segmentación de Audiencia",
        description: "Identificación y targeting preciso de audiencias específicas para maximizar conversiones.",
        icon: <Target className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Activación de Marca",
        description: "Experiencias de marca inmersivas que conectan emocionalmente con los asistentes.",
        icon: <Zap className="h-8 w-8 text-orange-500" />,
      },
    ],
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
        <OptimizedImage src={featuredImage} alt="Marketing y Creatividad" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Marketing y <span className="text-orange-500">Creatividad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Estrategias de marketing integral para maximizar el alcance y éxito de tu evento.
          </p>
          <div>
            <a
              href="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Solicitar Estrategia
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para potenciar tu evento?</h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestras estrategias de marketing pueden maximizar el impacto y alcance de tu evento.
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
