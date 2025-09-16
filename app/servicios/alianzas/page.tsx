import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Handshake, Building, Target, Globe, Briefcase, Repeat } from "lucide-react"
import ServiceDetailComponent from "@/components/service-detail"
import OptimizedImage from "@/components/optimized-image"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"

export const metadata: Metadata = {
  title: "Alianzas Estratégicas | DER - Desarrollo de Eventos y Reuniones",
  description:
    "Fortalecemos tu evento a través de alianzas estratégicas con proveedores especializados, sponsors y partners tecnológicos para maximizar el impacto y valor.",
  keywords:
    "alianzas estratégicas, partnerships eventos, sponsors, colaboraciones empresariales, networking corporativo",
}

export default function AlianzasPage() {
  const serviceDataForDetailComponent = {
    title: "Alianzas Estratégicas",
    description:
      "En DER creemos en el poder de las alianzas estratégicas. Trabajamos con una red selecta de partners especializados para ofrecer soluciones integrales que potencien cada aspecto de tu evento.",
    image: getServiceFeaturedImage("alianzas"),
    benefits: [
      "Red de partners especializados y certificados",
      "Acceso a tecnologías de vanguardia",
      "Optimización de costos a través de sinergias",
      "Mayor alcance geográfico y sectorial",
      "Soluciones integrales bajo una sola gestión",
      "Garantía de calidad en todos los servicios",
    ],
    features: [
      {
        title: "Partners Tecnológicos",
        description:
          "Alianzas con líderes en tecnología para eventos: plataformas de registro, apps móviles, sistemas de votación interactiva y soluciones de streaming profesional.",
        icon: <Handshake className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Red de Venues Premium",
        description:
          "Acceso exclusivo a los mejores espacios para eventos en toda la región, con condiciones preferenciales y servicios diferenciados.",
        icon: <Building className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Proveedores Especializados",
        description:
          "Colaboración con expertos en catering gourmet, producción audiovisual, seguridad, transporte VIP y servicios de protocolo.",
        icon: <Target className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Alcance Internacional",
        description:
          "Partners estratégicos en principales ciudades de América Latina para eventos multinacionales y expansión regional.",
        icon: <Globe className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Sponsors Corporativos",
        description:
          "Gestión integral de patrocinios y activación de marcas, conectando tu evento con sponsors relevantes para tu industria.",
        icon: <Briefcase className="h-10 w-10 text-orange-500 mb-4" />,
      },
      {
        title: "Ecosistema Integrado",
        description:
          "Coordinación perfecta entre todos los partners para garantizar una experiencia fluida y cohesiva en cada evento.",
        icon: <Repeat className="h-10 w-10 text-orange-500 mb-4" />,
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
            src={getServiceFeaturedImage("alianzas")}
            alt="Alianzas Estratégicas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Alianzas <span className="text-orange-500">Estratégicas</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Construimos partnerships estratégicos que amplifican el impacto de tu evento y generan oportunidades de
                crecimiento mutuo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Explorar Alianzas
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Construye alianzas exitosas con DER</h2>
            <p className="text-white text-opacity-90 mb-8">
              Solicita una consulta personalizada y descubre cómo nuestras alianzas estratégicas pueden potenciar tu
              evento.
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
