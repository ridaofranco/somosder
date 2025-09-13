import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import ServiceDetailComponent from "@/components/service-detail"
import { Ticket, CreditCard, Smartphone, BarChart3, Shield, Users } from "lucide-react"

export const metadata = {
  title: "Gestión de Entradas y Ticketing | DER",
  description:
    "Sistemas completos de venta y gestión de entradas para eventos. Plataformas de ticketing, control de acceso y análisis de ventas.",
}

export default function EntradasPage() {
  const serviceId = "entradas"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Gestión de Entradas y Ticketing",
    description:
      "Ofrecemos soluciones completas para la venta y gestión de entradas de tu evento. Desde plataformas de ticketing online hasta sistemas de control de acceso en tiempo real.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg",
    benefits: [
      "Plataforma de venta online personalizada",
      "Múltiples métodos de pago integrados",
      "Control de acceso en tiempo real",
      "Reportes detallados de ventas",
      "Gestión de promociones y descuentos",
      "Soporte técnico durante el evento",
    ],
    features: [
      {
        title: "Plataforma de Ticketing",
        description: "Sistema completo de venta online con diseño personalizado y múltiples opciones de pago.",
        icon: <Ticket className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Procesamiento de Pagos",
        description: "Integración con múltiples pasarelas de pago para facilitar las transacciones.",
        icon: <CreditCard className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Entradas Digitales",
        description: "Generación automática de entradas digitales con códigos QR únicos.",
        icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Análisis de Ventas",
        description: "Dashboard con métricas detalladas de ventas, conversiones y comportamiento de compra.",
        icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Seguridad Anti-Fraude",
        description: "Sistemas de validación y prevención de fraude para proteger las ventas.",
        icon: <Shield className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Gestión de Asistentes",
        description: "Base de datos completa de compradores con herramientas de comunicación.",
        icon: <Users className="h-8 w-8 text-orange-500" />,
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
          alt="Gestión de Entradas y Ticketing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Gestión de <span className="text-orange-500">Entradas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Sistemas completos de venta y gestión de entradas para maximizar tus ventas y controlar el acceso.
          </p>
          <div>
            <a
              href="/contacto"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Solicitar Plataforma
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas una plataforma de ticketing?</h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestros sistemas de gestión de entradas maximizan tus ventas y simplifican el control de acceso.
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
