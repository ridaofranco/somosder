import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Check } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Gestión de Venues | DER - Soluciones Integrales para Eventos",
  description:
    "Te ayudamos a encontrar, transformar o administrar el espacio perfecto para tu evento. Búsqueda de venues estratégicos, gestión de espacios propios y aliados, coordinación técnica y contractual.",
}

export default function VenuesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <OptimizedImage
            src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg"
            alt="Gestión de Venues"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gestión de <span className="text-orange-500">Venues</span>
              </h1>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Te ayudamos a encontrar, transformar o administrar el espacio perfecto para tu evento.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                    Ver Proyectos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Encuentra el Venue Perfecto para tu Evento
              </h2>
              <p className="text-lg text-gray-700 dark:text-slate-300 mb-6">
                La elección del venue adecuado es uno de los factores más determinantes para el éxito de tu evento. En
                DER contamos con una amplia red de espacios aliados y el expertise necesario para ayudarte a encontrar,
                negociar y gestionar el lugar perfecto según tus necesidades específicas.
              </p>
              <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">
                Nuestro equipo evalúa aspectos técnicos, logísticos, estéticos y presupuestarios para ofrecerte opciones
                que realmente se ajusten a tu visión y objetivos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-2 mt-1 bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700 dark:text-slate-300">Búsqueda personalizada según tus necesidades</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700 dark:text-slate-300">Negociación de contratos y tarifas</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700 dark:text-slate-300">Evaluación técnica y logística</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 bg-orange-100 dark:bg-orange-900/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-gray-700 dark:text-slate-300">Gestión de permisos y habilitaciones</p>
                </div>
              </div>
              <Link href="/contacto">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Consultar por este Servicio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <OptimizedImage
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
                alt="Gestión de Venues"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-dark-200">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Nuestros Servicios de Gestión de Venues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Búsqueda de Venues Estratégicos"
              description="Identificamos y evaluamos espacios que se alineen perfectamente con los objetivos de tu evento, considerando ubicación, capacidad, estilo y presupuesto."
              icon={<Building className="h-10 w-10 text-orange-500" />}
            />
            <ServiceCard
              title="Gestión de Espacios Propios y Aliados"
              description="Contamos con una red de venues aliados y espacios exclusivos que podemos gestionar para tu evento, obteniendo condiciones preferenciales."
              icon={<Building className="h-10 w-10 text-orange-500" />}
            />
            <ServiceCard
              title="Coordinación Técnica y Contractual"
              description="Nos encargamos de todos los aspectos técnicos y legales relacionados con la contratación y uso del venue, protegiendo tus intereses."
              icon={<Building className="h-10 w-10 text-orange-500" />}
            />
            <ServiceCard
              title="Diseño de Planos y Usos de Espacio"
              description="Optimizamos el uso del espacio mediante planos detallados que consideran flujos de circulación, áreas funcionales y experiencia del asistente."
              icon={<Building className="h-10 w-10 text-orange-500" />}
            />
            <ServiceCard
              title="Consultoría para Venues"
              description="Asesoramos a propietarios de espacios que deseen mejorar su operación y posicionarse mejor en el mercado de eventos."
              icon={<Building className="h-10 w-10 text-orange-500" />}
            />
            <ServiceCard
              title="Transformación de Espacios No Convencionales"
              description="Convertimos espacios no tradicionales en venues perfectos para eventos, adaptando la infraestructura y servicios necesarios."
              icon={<Building className="h-10 w-10 text-orange-500" />}
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Casos de Éxito
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Transformación de Espacio Industrial"
              description="Convertimos un antiguo galpón industrial en un venue de eventos corporativos de primer nivel, adaptando la infraestructura y creando un ambiente único."
              image="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/SHELL_1_1_ngqjjh.png"
            />
            <CaseStudyCard
              title="Gestión de Venue para Evento Internacional"
              description="Negociamos y gestionamos un venue premium para un evento corporativo internacional con más de 500 asistentes, logrando condiciones preferenciales."
              image="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
            />
            <CaseStudyCard
              title="Consultoría para Centro de Convenciones"
              description="Asesoramos a un centro de convenciones para optimizar su operación y mejorar su propuesta de valor, incrementando su ocupación en un 40%."
              image="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Ver Todos los Proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas ayuda para encontrar o gestionar el venue perfecto?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar y gestionar el espacio ideal para tu próximo
            evento.
          </p>
          <Link href="/contacto">
            <Button className="bg-white text-orange-600 hover:bg-gray-100">
              Contáctanos Hoy <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-dark-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-slate-300">{description}</p>
    </div>
  )
}

function CaseStudyCard({ title, description, image }) {
  return (
    <div className="bg-white dark:bg-dark-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <OptimizedImage src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-slate-300 mb-4">{description}</p>
        <Link href="/portfolio">
          <span className="text-orange-500 font-medium flex items-center">
            Ver más <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  )
}
