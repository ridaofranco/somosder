import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import ServiceDetailComponent from "@/components/service-detail"
import { Plane, MapPin, Clock, Shield, Users, Package } from "lucide-react"

export const metadata = {
  title: "Logística Internacional | DER",
  description:
    "Servicios de logística integral para eventos corporativos. Gestionamos transporte, alojamiento, catering y todos los aspectos operativos de tu evento.",
}

export default function LogisticaPage() {
  const serviceId = "logistica"
  const featuredImage = getServiceFeaturedImage(serviceId)

  const serviceDataForDetailComponent = {
    title: "Logística Internacional y de Eventos",
    description:
      "Aseguramos que todos los recursos, personas y servicios lleguen a destino, en tiempo y forma. Nuestra logística internacional para eventos te permite expandir tus horizontes y realizar eventos en múltiples países.",
    image: featuredImage,
    sidebarImage: "https://res.cloudinary.com/dtuh208kh/image/upload/v1749304189/20230814_000253_0000_v1eggm.jpg",
    benefits: [
      "Gestión centralizada para eventos en múltiples países",
      "Conocimiento de regulaciones internacionales",
      "Red global de proveedores confiables",
      "Soluciones para transporte y alojamiento internacional",
      "Adaptación cultural y lingüística",
    ],
    features: [
      {
        title: "Planificación logística integral",
        description: "Transporte, hoteles, catering, equipamiento con coordinación completa",
        icon: <Package className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Coordinación de vuelos y charters",
        description: "Gestión de vuelos comerciales, charters y traslados especializados",
        icon: <Plane className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Travel management",
        description: "Gestión de viajes para ejecutivos, atletas e invitados VIP",
        icon: <MapPin className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Planes de contingencia",
        description: "Seguros y planes alternativos para cualquier imprevisto",
        icon: <Shield className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Gestión documental",
        description: "Visas, permisos, documentación internacional especializada",
        icon: <Clock className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Logística de equipamiento",
        description: "Transporte y montaje de equipos técnicos y materiales",
        icon: <Users className="h-8 w-8 text-orange-500" />,
      },
    ],
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
        <OptimizedImage src={featuredImage} alt="Logística Internacional" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Logística <span className="text-orange-500">Internacional</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8">
            Coordinación perfecta de todos los aspectos operativos para que tu evento fluya sin contratiempos.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Necesitas una logística perfecta para tu evento?
            </h2>
            <p className="text-white text-opacity-90 mb-8">
              Nuestro equipo de expertos en logística está listo para hacer que tu evento fluya sin contratiempos.
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
