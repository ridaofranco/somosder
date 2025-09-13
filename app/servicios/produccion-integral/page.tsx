import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Settings,
  Users,
  Truck,
  CheckCircle,
  Clock,
  Camera,
  Target,
  ArrowRight,
  Play,
  Clipboard,
  Network,
  Wrench,
  Handshake,
  Building,
  Music,
  Trophy,
  Globe,
  Award,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Producción Integral de Eventos - Gestión Completa | DER EVENT HUB",
  description:
    "Producción integral de eventos desde concepto hasta ejecución. Casos reales: Manchester City Treble Trophy Tour, Saint Mary of the Hills. Gestión completa, proveedores, logística y sponsors.",
  keywords: [
    "produccion integral eventos",
    "gestion completa eventos",
    "manchester city produccion",
    "saint mary hills evento",
    "coordinacion proveedores eventos",
    "DER Event Hub produccion",
  ],
  openGraph: {
    title: "Producción Integral de Eventos | DER EVENT HUB",
    description:
      "Gestión completa desde concepto hasta ejecución. Casos reales: Manchester City y Saint Mary of the Hills con sponsors conseguidos.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
        width: 1200,
        height: 630,
        alt: "Producción Integral DER Event Hub",
      },
    ],
  },
}

export default function ProduccionIntegralPage() {
  const features = [
    {
      icon: Settings,
      title: "Gestión Integral de Eventos",
      description: "Desde concepto inicial hasta ejecución final, coordinamos cada detalle del evento",
      color: "text-orange-500",
    },
    {
      icon: Network,
      title: "Coordinación de Proveedores",
      description: "Red especializada de suppliers, negociación y gestión de contratos con proveedores clave",
      color: "text-red-500",
    },
    {
      icon: Truck,
      title: "Logística y Montaje",
      description: "Setup completo, coordinación técnica, montaje de espacios y gestión de equipamiento",
      color: "text-orange-600",
    },
    {
      icon: Handshake,
      title: "Gestión de Sponsors",
      description: "Conseguir y activar patrocinadores, negociación de acuerdos y maximización de partnerships",
      color: "text-red-600",
    },
    {
      icon: Camera,
      title: "Fotografía y Video",
      description: "Documentación profesional del evento, cobertura completa y entregables post-evento",
      color: "text-orange-500",
    },
    {
      icon: BarChart3,
      title: "Gestión Post-Evento",
      description: "Análisis de resultados, reportes detallados, seguimiento de sponsors y recomendaciones",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Globe,
      title: "Eventos Internacionales Premium",
      description: "Producción completa para marcas globales",
      examples: ["Manchester City Treble Trophy Tour", "Coordinación con estándares internacionales", "Protocolos de seguridad globales"],
    },
    {
      icon: Handshake,
      title: "Eventos con Gestión de Sponsors",
      description: "Producción integral incluyendo patrocinadores",
      examples: ["Saint Mary of the Hills - 4 sponsors conseguidos", "Activaciones de marca integradas", "Negociación y coordinación de partnerships"],
    },
    {
      icon: Camera,
      title: "Eventos con Cobertura Completa",
      description: "Producción integral con documentación profesional",
      examples: ["Fotografía profesional incluida", "Cobertura para redes sociales", "Entregables post-evento editados"],
    },
  ]

  const tecnologia = [
    {
      feature: "Planificación Estratégica",
      description: "Definición de objetivos, presupuestación, cronograma maestro y identificación de stakeholders clave",
      icon: Clipboard,
    },
    {
      feature: "Coordinación Operativa",
      description: "Gestión de proveedores, logística, permisos, seguros y coordinación de equipos multidisciplinarios",
      icon: Users,
    },
    {
      feature: "Ejecución y Supervisión",
      description: "Montaje, supervisión en tiempo real, gestión de contingencias y coordinación durante el evento",
      icon: Wrench,
    },
    {
      feature: "Cierre y Análisis",
      description: "Desmontaje, liquidación de proveedores, análisis de resultados y reportes finales para stakeholders",
      icon: Target,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Treble Trophy Tour",
      asistentes: "1,000",
      tecnologia: "Producción Integral Completa",
      resultado: "Evento internacional exitoso",
      badge: "Internacional",
    },
    {
      nombre: "Saint Mary of the Hills",
      asistentes: "Torneo",
      tecnologia: "Producción + Sponsors + Fotografía",
      resultado: "4 sponsors conseguidos",
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
            <span className="text-gray-900">Producción Integral</span>
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
                  <Badge className="bg-orange-500 text-white">Gestión Completa</Badge>
                  <Badge className="bg-red-500 text-white">Casos Internacionales</Badge>
                  <Badge className="bg-white text-orange-600">360° Integral</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Producción <span className="text-yellow-300">Integral</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Gestión completa desde concepto hasta ejecución</strong> con producción integral probada en eventos internacionales. 
                  Desde <strong>coordinación de proveedores hasta gestión de sponsors</strong> con casos como Manchester City y Saint Mary.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Gestión Integral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4</div>
                    <div className="text-sm opacity-80">Sponsors Saint Mary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1,000</div>
                    <div className="text-sm opacity-80">Manchester City</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Éxito</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Settings className="mr-2 h-5 w-5" />
                      Cotizar Producción Integral
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos Completos
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
                    alt="Producción Integral DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Producción integral - Manchester City y Saint Mary</p>
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
                Gestión <span className="text-orange-500">Completa</span>
              </h2>
              <p className="text-xl text-gray-700">6 áreas de especialización en producción integral</p>
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
              <p className="text-xl text-gray-700">Producción adaptada según el tipo de evento</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <h4 className="font-semibold text-gray-900 mb-3">Casos reales:</h4>
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

      {/* Metodología Detallada */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Metodología <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">4 pasos para producción sin fallas</p>
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
              <p className="text-xl text-gray-700">Casos donde aplicamos producción integral</p>
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
                        <div className="text-sm text-gray-600">escala</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Producción:</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre producción integral</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye exactamente la producción integral de eventos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye gestión completa desde concepto hasta ejecución: planificación estratégica, coordinación de proveedores, logística y montaje, gestión de sponsors, fotografía profesional y análisis post-evento. Como en Manchester City (1,000 asistentes) manejamos todo internamente, y en Saint Mary of the Hills conseguimos 4 sponsors (Hilton Pilar, Pascual Toso, Go Seven, Goalty) además de la producción completa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden manejar eventos internacionales como Manchester City?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, tenemos experiencia comprobada en eventos internacionales. Para Manchester City Treble Trophy Tour manejamos la producción integral completa con 1,000 asistentes, coordinando con estándares internacionales, protocolos de seguridad globales y requisitos específicos de la marca. Manejamos la complejidad logística, proveedores especializados y coordinación con equipos internacionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo consiguen sponsors como parte de la producción integral?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  La gestión de sponsors está integrada en nuestro proceso de producción. En Saint Mary of the Hills conseguimos 4 sponsors clave: Hilton Pilar, Pascual Toso, Go Seven y Goalty. Identificamos oportunidades de patrocinio, desarrollamos propuestas de valor, negociamos acuerdos y coordinamos las activaciones durante el evento. Es parte integral de nuestra metodología de producción 360°.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué diferencia su producción integral de otros productores?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Nuestra diferencia está en la integración real de servicios bajo una sola gestión. No subcontratamos todo: tenemos tecnología propia (control de accesos), equipo interno de fotografía, capacidad de conseguir sponsors, y coordinación directa con proveedores. Esto garantiza coherencia, calidad uniforme y un solo punto de contacto para el cliente durante todo el proceso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Incluyen fotografía y documentación profesional del evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, la fotografía profesional está incluida en nuestra producción integral. Tenemos equipo interno especializado que documenta todo el evento: momentos clave, activaciones de sponsors, cobertura general y entregables post-evento. En Saint Mary of the Hills proporcionamos cobertura fotográfica completa además de la gestión integral del torneo. Los entregables incluyen galería editada y contenido para redes sociales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para planificar una producción integral?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Para eventos como Manchester City necesitamos mínimo 2-3 meses para coordinación internacional completa. Para eventos locales como Saint Mary of the Hills, 4-6 semanas son suficientes. El tiempo incluye planificación estratégica, conseguir sponsors, coordinar proveedores, obtener permisos, y preparar toda la logística. Eventos más complejos o con mayor escala requieren más tiempo de preparación.
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
                <Settings className="w-4 h-4 mr-2" />
                ¿Necesitás producción integral para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestión completa que <span className="text-yellow-300">nunca falla</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Manchester City con 1,000 asistentes hasta Saint Mary con 4 sponsors conseguidos</strong>, 
                nuestra producción integral garantiza el éxito de eventos de cualquier escala.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Cotizar Producción Integral
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos Completos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Gestión 360°</h3>
                <p className="text-sm opacity-80">Integral completa</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Sponsors Incluidos</h3>
                <p className="text-sm opacity-80">4 conseguidos Saint Mary</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Setup en 1 Semana</h3>
                <p className="text-sm opacity-80">Implementación rápida</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Fotografía Incluida</h3>
                <p className="text-sm opacity-80">Cobertura profesional</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor producción integral</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Treble Trophy Tour (1,000 asistentes, evento internacional) y 
                Saint Mary of the Hills (4 sponsors conseguidos: Hilton Pilar, Pascual Toso, Go Seven, Goalty), 
                nuestra producción integral está probada en eventos de todas las escalas.
                <strong> Gestión 360°, sponsors incluidos y fotografía profesional garantizada.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}