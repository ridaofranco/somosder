import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import ServiceDetailComponent from "@/components/service-detail"
import { Shield, Users, Clock, CheckCircle2, BarChart, Smartphone } from "lucide-react"

export const metadata = {
  title: "Control de Accesos y Acreditaciones | DER",
  description:
    "Servicios profesionales de control de accesos para eventos. Sistemas de seguridad, gestión de entradas y control de flujo de personas.",
}

export default function AccesosPage() {
  const serviceId = "accesos"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Control de Accesos y Acreditaciones",
    description:
      "Garantizamos la seguridad y el control eficiente del flujo de personas en tu evento con sistemas profesionales de control de accesos, acreditaciones y gestión de entradas.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg",
    benefits: [
      "Control total del flujo de personas",
      "Sistemas de acreditación personalizados",
      "Tecnología RFID y códigos QR",
      "Personal especializado en seguridad",
      "Reportes en tiempo real",
      "Integración con sistemas de ticketing",
    ],
    features: [
      {
        title: "Acreditación Digital y Física",
        description:
          "Sistema de pre-registro y generación de credenciales digitales (QR) o físicas con impresión in-situ.",
        icon: <Shield className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Control de Aforo Inteligente",
        description:
          "Monitoreo en tiempo real de la capacidad y gestión automática de accesos según límites establecidos.",
        icon: <Users className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Acceso Rápido y Validación",
        description: "Validación de alta velocidad que permite el ingreso fluido sin generar colas o demoras.",
        icon: <Clock className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Seguridad Anti-Fraude",
        description: "Sistemas antifraude y validación múltiple para garantizar la seguridad del evento.",
        icon: <CheckCircle2 className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Reportes en Tiempo Real",
        description: "Dashboard con métricas de asistencia, flujos de acceso y análisis de comportamiento.",
        icon: <BarChart className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "App de Gestión para Staff",
        description: "Aplicación móvil para el equipo de control que permite gestión remota y coordinación eficiente.",
        icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      },
    ],
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
        <OptimizedImage
          src={featuredImage}
          alt="Control de Accesos y Acreditaciones"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Control de <span className="text-orange-500">Accesos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Sistemas profesionales de control de accesos, acreditaciones y gestión de entradas para eventos seguros.
          </p>
          <div>
            <a
              href="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Solicitar Sistema
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
              ¿Necesitas control de accesos profesional?
            </h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestros sistemas garantizan la seguridad y fluidez de tu evento con tecnología de última generación.
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
