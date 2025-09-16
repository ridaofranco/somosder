import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import ServiceDetailComponent from "@/components/service-detail"
import { Trophy, Users, Target, Award, Clock, Medal } from "lucide-react"

export const metadata = {
  title: "Gestión Deportiva | DER",
  description:
    "Organización integral de eventos deportivos. Desde competencias locales hasta torneos internacionales con gestión completa y profesional.",
}

export default function DeportesPage() {
  const serviceId = "deportes"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Gestión de Eventos Deportivos",
    description:
      "Organizamos eventos deportivos de cualquier magnitud con la experiencia y profesionalismo que tu competencia merece. Desde la planificación hasta la ejecución completa.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746643089/IMG_2292_xhkghv.jpg",
    benefits: [
      "Organización integral de competencias",
      "Gestión de inscripciones y participantes",
      "Coordinación con federaciones deportivas",
      "Sistemas de cronometraje profesional",
      "Ceremonias de premiación",
      "Cobertura mediática especializada",
    ],
    features: [
      {
        title: "Planificación Estratégica",
        description: "Desarrollo completo del evento desde la conceptualización hasta la ejecución final.",
        icon: <Target className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Gestión de Participantes",
        description: "Registro, acreditación y coordinación de atletas, equipos y oficiales.",
        icon: <Users className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Competencia Profesional",
        description: "Sistemas de cronometraje, arbitraje y seguimiento de resultados en tiempo real.",
        icon: <Trophy className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Ceremonias y Premiación",
        description: "Organización de ceremonias de apertura, clausura y premiación memorable.",
        icon: <Award className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Cronometraje Profesional",
        description: "Sistemas de medición de tiempo precisos y certificados para competencias oficiales.",
        icon: <Clock className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Gestión de Premiación",
        description: "Coordinación completa de medallas, trofeos y reconocimientos para todos los participantes.",
        icon: <Medal className="h-8 w-8 text-orange-500" />,
      },
    ],
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
        <OptimizedImage src={featuredImage} alt="Gestión Deportiva" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Gestión <span className="text-orange-500">Deportiva</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Organizamos eventos deportivos de cualquier magnitud con experiencia y profesionalismo.
          </p>
          <div>
            <a
              href="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Organizar Evento
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para organizar tu evento deportivo?
            </h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestro equipo especializado está preparado para hacer de tu competencia un éxito total.
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
