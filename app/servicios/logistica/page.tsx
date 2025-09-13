import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Truck,
  Plane,
  Globe,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  ArrowRight,
  Play,
  Package,
  FileText,
  Users,
  Navigation,
  Building,
  Trophy,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Logística Internacional para Eventos - Operador Global | DER EVENT HUB",
  description:
    "Logística internacional sin fronteras con puntualidad garantizada. Casos reales: Mundial Sub-17 Halterofilia 2026, Manchester City Trophy Tour. Transporte, aduanas, delegaciones y seguimiento GPS.",
  keywords: [
    "logistica internacional eventos",
    "transporte internacional",
    "gestion aduanera eventos",
    "mundial halterofilia logistica",
    "manchester city logistica",
    "operador global eventos",
    "DER Event Hub logistica",
  ],
  openGraph: {
    title: "Logística Internacional para Eventos | DER EVENT HUB",
    description:
      "Operador global sin fronteras. Mundial Sub-17 Halterofilia 2026 y Manchester City Trophy Tour con logística impecable.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
        width: 1200,
        height: 630,
        alt: "Logística Internacional DER Event Hub",
      },
    ],
  },
}

export default function LogisticaInternacionalPage() {
  const features = [
    {
      icon: Package,
      title: "Transporte Global",
      description: "Equipos, stands, merchandising y materiales desde origen hasta destino final",
      color: "text-orange-500",
    },
    {
      icon: FileText,
      title: "Gestión Aduanera",
      description: "Documentación, permisos, ATA carnet, impuestos y trámites internacionales",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Coordinación de Delegaciones",
      description: "Viajes, visados, hospedaje y transporte para equipos de trabajo y artistas",
      color: "text-orange-600",
    },
    {
      icon: MapPin,
      title: "Logística Local",
      description: "Última milla, almacenes, handling y coordinación con proveedores locales",
      color: "text-red-600",
    },
    {
      icon: Shield,
      title: "Planes de Contingencia",
      description: "Seguros y planes alternativos para cualquier imprevisto",
      color: "text-orange-500",
    },
    {
      icon: Navigation,
      title: "Seguimiento GPS",
      description: "Monitoreo en tiempo real de carga y delegaciones con puntualidad garantizada",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Trophy,
      title: "Eventos Deportivos Globales",
      description: "Competencias internacionales y giras deportivas",
      examples: ["Mundial Sub-17 Halterofilia 2026", "Manchester City Trophy Tour", "Competencias federativas internacionales"],
    },
    {
      icon: Briefcase,
      title: "Giras Corporativas Multi-País",
      description: "Eventos empresariales con alcance internacional",
      examples: ["Lanzamientos globales de producto", "Conferencias internacionales", "Roadshows corporativos multi-ciudad"],
    },
    {
      icon: Building,
      title: "Exposiciones Itinerantes",
      description: "Ferias y exhibiciones que viajan entre países",
      examples: ["Stands modulares internacionales", "Exposiciones artísticas móviles", "Muestras comerciales itinerantes"],
    },
  ]

  const tecnologia = [
    {
      feature: "Planificación Logística Global",
      description: "Análisis de rutas, tiempos de tránsito, documentación requerida y coordinación multi-país",
      icon: Globe,
    },
    {
      feature: "Gestión de Carga Internacional",
      description: "Embalaje especializado, seguimiento GPS, seguro de carga y entrega puntual garantizada",
      icon: Package,
    },
    {
      feature: "Coordinación de Viajes",
      description: "Pasajes, visados, hoteles, transfers y gestión completa de delegaciones internacionales",
      icon: Plane,
    },
    {
      feature: "Red de Partners Globales",
      description: "Agentes locales, proveedores certificados y operadores especializados en cada destino",
      icon: Users,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Mundial Sub-17 Halterofilia Buenos Aires 2026",
      asistentes: "Internacional",
      tecnologia: "Logística Olímpica Completa",
      resultado: "Estándares mundiales aplicados",
      badge: "Olímpico",
    },
    {
      nombre: "Manchester City Trophy Tour",
      asistentes: "Global",
      tecnologia: "Transporte Trofeos + Delegación",
      resultado: "Logística impecable",
      badge: "Deportivo",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/servicios" className="hover:text-orange-600">
              Servicios
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Logística Internacional</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div>
                <Link href="/servicios" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Servicios
                </Link>

                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-orange-500 text-white">Operador Global</Badge>
                  <Badge className="bg-red-500 text-white">Puntualidad Garantizada</Badge>
                  <Badge className="bg-white text-orange-600">Sin Fronteras</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Logística <span className="text-yellow-300">Internacional</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>No hay frontera que impida llevar a cabo tu evento</strong>. Coordinamos la logística internacional 
                  de principio a fin: desde el embalaje seguro en origen hasta el montaje en destino, 
                  <strong> cumpliendo con todos los requisitos aduaneros</strong> con puntualidad garantizada.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🌎</div>
                    <div className="text-sm opacity-80">Sin Fronteras</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Seguimiento GPS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Puntualidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2026</div>
                    <div className="text-sm opacity-80">Mundial Sub-17</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Truck className="mr-2 h-5 w-5" />
                      Cotizar Logística Internacional
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos Globales
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg"
                    alt="Logística Internacional DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Manchester City Trophy Tour - Logística internacional de trofeos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Expertos en <span className="text-orange-500">Logística Global</span>
              </h2>
              <p className="text-xl text-gray-700">Puerta a puerta sin preocupaciones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Casos de <span className="text-red-500">Uso</span>
              </h2>
              <p className="text-xl text-gray-700">Adaptamos la logística según el alcance internacional</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {casosUso.map((caso, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <caso.icon className="w-5 h-5 text-orange-500 mr-2" />
                      {caso.title}
                    </CardTitle>
                    <p className="text-gray-600">{caso.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Ejemplos reales:</h4>
                    <ul className="space-y-2">
                      {caso.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Red Global */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Red <span className="text-orange-500">Global</span>
              </h2>
              <p className="text-xl text-gray-700">4 pilares de nuestra operación internacional</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tecnologia.map((tech, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <tech.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.feature}</h3>
                        <p className="text-gray-700 text-sm">{tech.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Reales */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos <span className="text-orange-500">Reales</span>
              </h2>
              <p className="text-xl text-gray-700">Casos donde coordinamos logística internacional</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proyectosReales.map((proyecto, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{proyecto.nombre}</h3>
                        <Badge className="bg-orange-100 text-orange-800">{proyecto.badge}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{proyecto.asistentes}</div>
                        <div className="text-sm text-gray-600">alcance</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Logística:</span>
                        <span className="font-semibold text-gray-900">{proyecto.tecnologia}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Resultado:</span>
                        <span className="font-semibold text-green-600">{proyecto.resultado}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre logística internacional</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye exactamente la logística internacional para eventos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye transporte global de equipos y materiales, gestión aduanera completa (documentación, permisos, ATA carnet), coordinación de delegaciones (viajes, visados, hospedaje), logística local en destino, planes de contingencia y seguimiento GPS 24/7. Como en Manchester City Trophy Tour coordinamos el transporte de trofeos y delegación completa, y para el Mundial Sub-17 Halterofilia 2026 aplicamos estándares olímpicos de logística internacional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo manejan la documentación aduanera y permisos internacionales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Gestionamos toda la documentación requerida: ATA carnet para equipos temporales, permisos de importación/exportación, certificados de origen, seguros de carga internacional, y trámites específicos por país. Tenemos conocimiento especializado en regulaciones internacionales y una red de agentes aduaneros certificados en cada destino. Garantizamos que toda la carga llegue sin retenciones ni demoras aduaneras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué pasa si hay retrasos o problemas durante el transporte internacional?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Tenemos planes de contingencia para cada escenario: rutas alternativas, proveedores de backup, seguros de carga completos, y seguimiento GPS 24/7 con alertas inmediatas. En caso de retrasos, activamos protocolos de emergencia con transporte express, coordinación con aerolíneas para carga prioritaria, y comunicación constante con el cliente. Nuestro objetivo es puntualidad 100% garantizada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden coordinar delegaciones internacionales completas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, gestionamos delegaciones completas: pasajes aéreos, visados y documentación, hoteles y alojamiento, transfers aeropuerto-hotel-evento, comidas especiales y restricciones dietéticas, y coordinación con embajadas cuando es necesario. Para eventos como el Mundial Sub-17 Halterofilia coordinamos delegaciones de múltiples países con diferentes requerimientos culturales y logísticos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Tienen red de proveedores locales en diferentes países?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, tenemos una red global de partners certificados: agentes locales especializados en eventos, proveedores de equipamiento técnico, operadores logísticos de confianza, y coordinadores locales en cada destino. Esta red nos permite ofrecer el mismo nivel de servicio en cualquier país, con conocimiento local de regulaciones, cultura y mejores prácticas operativas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para planificar logística internacional?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Para logística internacional recomendamos mínimo 8-12 semanas de anticipación para permitir gestión aduanera, obtención de permisos, coordinación de vuelos y reservas de hoteles. Para eventos complejos como competencias mundiales, necesitamos 4-6 meses. El tiempo incluye análisis de rutas, documentación, coordinación con autoridades locales, y preparación de planes de contingencia. Cuanto más tiempo tengamos, mejores tarifas y opciones podemos conseguir.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                ¿Necesitás logística internacional para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Logística global que <span className="text-yellow-300">nunca falla</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Manchester City Trophy Tour hasta el Mundial Sub-17 Halterofilia Buenos Aires 2026</strong>, 
                nuestra logística internacional garantiza que todo llegue a destino en tiempo y forma.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Truck className="mr-2 h-5 w-5" />
                  Cotizar Logística Internacional
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos Globales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Sin Fronteras</h3>
                <p className="text-sm opacity-80">Operador global</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Seguimiento GPS</h3>
                <p className="text-sm opacity-80">24/7 monitoreo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Puntualidad 100%</h3>
                <p className="text-sm opacity-80">Garantizada</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Planes de Contingencia</h3>
                <p className="text-sm opacity-80">Seguros incluidos</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor logística internacional</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Trophy Tour (logística impecable de trofeos y delegación) y 
                Mundial Sub-17 Halterofilia Buenos Aires 2026 (estándares olímpicos aplicados), 
                nuestra logística internacional está probada en eventos de escala global.
                <strong> Sin fronteras, seguimiento GPS 24/7 y puntualidad 100% garantizada.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}