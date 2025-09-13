import { Monitor, Code, Smartphone, Globe, Zap, FileText } from "lucide-react"
// Renombrar el import para evitar confusión con la prop 'service'
import ServiceDetailComponent from "@/components/service-detail"
import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"

export const metadata = {
  title: "Soluciones Tecnológicas | DER",
  description:
    "Implementación de tecnologías innovadoras para crear experiencias interactivas y memorables en tus eventos.",
}

export default function TecnologiaPage() {
  const serviceId = "tecnologia"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Soluciones Tecnológicas",
    description:
      "En DER implementamos soluciones tecnológicas de vanguardia que transforman los eventos convencionales en experiencias memorables. Nuestras herramientas digitales mejoran la participación, simplifican la logística y proporcionan datos valiosos para optimizar cada aspecto de tu evento.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747795219/IMG_1582_pkplqc.jpg",
    benefits: [
      "Mayor engagement y participación del público",
      "Optimización de procesos y reducción de costos operativos",
      "Análisis de datos en tiempo real para toma de decisiones",
      "Diferenciación y valor añadido para sponsors y participantes",
      "Integración con plataformas y sistemas existentes",
      "Soporte técnico durante todo el evento",
    ],
    features: [
      {
        title: "Acreditaciones Inteligentes",
        description:
          "Sistema de pre-registro, validación en tiempo real, generación de credenciales y control de accesos por QR.",
        icon: <FileText className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Apps Personalizadas",
        description:
          "Aplicaciones móviles a medida con agenda interactiva, networking, encuestas, gamificación y análisis de comportamiento.",
        icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Streaming y Eventos Híbridos",
        description:
          "Plataformas de transmisión multicámara en alta definición, interacción entre público presencial y virtual.",
        icon: <Globe className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Experiencias Inmersivas",
        description:
          "Realidad aumentada, realidad virtual, instalaciones interactivas y mapping para experiencias únicas.",
        icon: <Monitor className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Activaciones Digitales",
        description: "Photo booths interactivos, social walls, concursos digitales y activaciones con tecnología NFC.",
        icon: <Zap className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Desarrollo a Medida",
        description: "Soluciones tecnológicas personalizadas según las necesidades específicas de tu evento o marca.",
        icon: <Code className="h-8 w-8 text-orange-500" />,
      },
    ],
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
        <OptimizedImage src={featuredImage} alt="Soluciones Tecnológicas" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Soluciones <span className="text-orange-500">Tecnológicas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Implementación de tecnologías innovadoras para crear experiencias interactivas y memorables.
          </p>
          <div>
            <a
              href="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Solicitar Demo
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para transformar tu evento?</h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestras soluciones tecnológicas pueden elevar tu evento al siguiente nivel.
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
