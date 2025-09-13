import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Target,
  Globe,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Play,
  BarChart,
  Users,
  Award,
  Building,
  Rocket,
  PieChart,
  BookOpen,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Consultoría Estratégica - Soluciones Integrales | DER EVENT HUB",
  description:
    "Transformamos tu visión en estrategia. Casos reales: Manchester City Trophy Tour, Campeonato Mundial Sub-17 Halterofilia. Consultoría internacional con enfoque 360°.",
  keywords: [
    "consultoria estrategica eventos",
    "manchester city estrategia",
    "mundial halterofilia consultoria",
    "planificacion de eventos",
    "estrategia de marca",
    "DER Event Hub consultoria",
  ],
  openGraph: {
    title: "Consultoría Estratégica | DER EVENT HUB",
    description:
      "Análisis profundo, storytelling creativo y planificación integral para eventos de alto impacto.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
        width: 1200,
        height: 630,
        alt: "Consultoría Estratégica DER Event Hub",
      },
    ],
  },
}

export default function ConsultoriaEstrategicaPage() {
  const features = [
    {
      icon: Target,
      title: "Análisis de Objetivos de Negocio",
      description: "Evaluación profunda de metas empresariales y definición de estrategias alineadas",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Definición de Público Objetivo",
      description: "Segmentación de mercado y estrategias de comunicación personalizadas",
      color: "text-red-500",
    },
    {
      icon: Lightbulb,
      title: "Storytelling y Conceptualización",
      description: "Narrativa de marca única y diseño creativo del evento",
      color: "text-orange-600",
    },
    {
      icon: PieChart,
      title: "Planificación Integral",
      description: "Presupuestos optimizados y cronogramas detallados con precisión milimétrica",
      color: "text-red-600",
    },
    {
      icon: Globe,
      title: "Identificación de Tendencias",
      description: "Análisis de mercados argentino e internacional, mejores prácticas innovadoras",
      color: "text-orange-500",
    },
    {
      icon: BarChart,
      title: "Medición y Evaluación",
      description: "KPIs específicos y análisis de impacto con metodología científica",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Building,
      title: "Eventos Corporativos",
      description: "Estrategias de comunicación y activación de marca",
      examples: ["Lanzamientos corporativos", "Conferencias ejecutivas", "Eventos de networking estratégico"],
    },
    {
      icon: Award,
      title: "Eventos Deportivos Internacionales",
      description: "Consultoría para competencias de alto nivel",
      examples: ["Campeonato Mundial Sub-17 Halterofilia", "Activaciones deportivas globales", "Estrategias de sponsoreo"],
    },
    {
      icon: Rocket,
      title: "Lanzamientos de Marca",
      description: "Estrategias creativas para presentaciones de impacto",
      examples: ["Manchester City Trophy Tour", "Presentaciones innovadoras", "Experiencias de marca memorables"],
    },
  ]

  const tecnologia = [
    {
      feature: "Diagnóstico Estratégico",
      description: "Análisis profundo de la situación actual, objetivos y potencial de crecimiento",
      icon: Target,
    },
    {
      feature: "Diseño Conceptual",
      description: "Desarrollo de narrativa única, concepto creativo y estrategia de comunicación",
      icon: Lightbulb,
    },
    {
      feature: "Planificación Táctica",
      description: "Definición de acciones, recursos, cronograma y presupuesto detallado",
      icon: PieChart,
    },
    {
      feature: "Implementación y Seguimiento",
      description: "Ejecución estratégica, monitoreo de KPIs y ajustes en tiempo real",
      icon: TrendingUp,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Trophy Tour",
      asistentes: "Internacional",
      tecnologia: "Consultoría Estratégica Global",
      resultado: "Activación de Marca Exitosa",
      badge: "Deportivo",
    },
    {
      nombre: "Mundial Sub-17 Halterofilia Buenos Aires 2026",
      asistentes: "Olímpico",
      tecnologia: "Consultoría CEO Deportiva",
      resultado: "Estándares Mundiales Aplicados",
      badge: "Internacional",
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
            <span className="text-gray-900">Consultoría Estratégica</span>
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
                  <Badge className="bg-orange-500 text-white">Estrategia 360°</Badge>
                  <Badge className="bg-red-500 text-white">Visión Global</Badge>
                  <Badge className="bg-white text-orange-600">Impacto Medible</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Consultoría <span className="text-yellow-300">Estratégica</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Transformamos tu visión en estrategia</strong>. Desarrollamos soluciones integrales 
                  que convierten tus objetivos en experiencias de alto impacto, 
                  <strong> con un enfoque global y creativo</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Estrategia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">+</div>
                    <div className="text-sm opacity-80">Innovación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Personalizado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🚀</div>
                    <div className="text-sm opacity-80">Impacto</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Solicitar Consultoría
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos de Éxito
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
                    alt="Consultoría Estratégica DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Manchester City Trophy Tour - Consultoría Estratégica Global</p>
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
                Características <span className="text-orange-500">Principales</span>
              </h2>
              <p className="text-xl text-gray-700">Soluciones integrales para transformar tu evento</p>
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
              <p className="text-xl text-gray-700">Adaptamos la estrategia según tus objetivos</p>
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
                Proceso <span className="text-orange-500">Estratégico</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para transformar tu visión en realidad</p>
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
              <p className="text-xl text-gray-700">Casos donde nuestra estrategia genera impacto</p>
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
                        <span className="text-gray-700">Consultoría:</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre consultoría estratégica</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué diferencia nuestra consultoría estratégica de otras?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Nuestra consultoría va más allá del evento: transformamos objetivos de negocio en experiencias de alto impacto. Como en Manchester City Trophy Tour, no solo planificamos el evento, sino que creamos una estrategia global de activación de marca. En el Mundial Sub-17 de Halterofilia desarrollamos una consultoría CEO que alineó objetivos deportivos, de marketing y operativos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo definen el público objetivo de un evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Realizamos un análisis profundo de segmentación utilizando datos demográficos, psicográficos y de comportamiento. En Manchester City Trophy Tour identificamos audiencias globales de fans de fútbol, mientras que en el Mundial Sub-17 de Halterofilia definimos estrategias para deportistas, familias, aficionados y sponsors internacionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué implica su servicio de storytelling y conceptualización?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Desarrollamos narrativas únicas que conectan emocionalmente con la audiencia. En Manchester City Trophy Tour creamos una experiencia que iba más allá de mostrar un trofeo, transformándolo en un viaje emocional para los fans. Para el Mundial Sub-17 de Halterofilia construimos un concepto que celebraba no solo el deporte, sino el potencial y la dedicación de los jóvenes atletas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo optimizan presupuestos en la planificación integral?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Utilizamos análisis de costo-beneficio y benchmarking para maximizar cada recurso. En Manchester City Trophy Tour optimizamos costos de producción sin sacrificar la experiencia de marca, mientras que en el Mundial Sub-17 de Halterofilia desarrollamos un presupuesto que cubría necesidades operativas, de marketing y de experiencia del atleta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tendencias identifican en eventos internacionales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Monitoreamos constantemente mercados globales, identificando innovaciones en tecnología, sostenibilidad, experiencia del usuario y engagement digital. Nuestros casos como Manchester City Trophy Tour y Mundial Sub-17 de Halterofilia reflejan tendencias como experiencias inmersivas, tecnología de activación, sostenibilidad y conexión digital en tiempo real.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo miden el éxito de una estrategia de evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Utilizamos KPIs específicos que van más allá de métricas tradicionales. En Manchester City Trophy Tour medimos engagement global, impacto en redes sociales y percepción de marca. En el Mundial Sub-17 de Halterofilia evaluamos no solo asistencia, sino también desarrollo deportivo, impacto mediático y satisfacción de stakeholders, proporcionando un análisis 360° del éxito estratégico.
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
                <Lightbulb className="w-4 h-4 mr-2" />
                ¿Necesitás transformar tu evento en una experiencia estratégica?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Estrategias que <span className="text-yellow-300">generan impacto</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Manchester City Trophy Tour hasta el Mundial Sub-17 de Halterofilia</strong>, 
                convertimos tu visión en experiencias estratégicas que trascienden lo convencional.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Solicitar Consultoría
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos de Éxito
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
                <h3 className="font-semibold mb-2">Visión</h3>
                <p className="text-sm opacity-80">Global</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Objetivos</h3>
                <p className="text-sm opacity-80">Alineados</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Impacto</h3>
                <p className="text-sm opacity-80">Medible</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Innovación</h3>
                <p className="text-sm opacity-80">Estratégica</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece una estrategia única</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Trophy Tour (activación global de marca) y 
                Mundial Sub-17 de Halterofilia (consultoría estratégica deportiva), desarrollamos 
                soluciones que van más allá de la planificación tradicional.
                <strong> Estrategia 360°, impacto global y creatividad garantizados.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}