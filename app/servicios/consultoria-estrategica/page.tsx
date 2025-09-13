import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  BarChart3,
  Lightbulb,
  PieChart,
  Globe,
  Award,
  ArrowRight,
  Play,
  Brain,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Consultoría Estratégica de Eventos - ROI y Planificación | DER EVENT HUB",
  description:
    "Consultoría estratégica especializada en eventos. Análisis de objetivos, ROI, planificación integral. Casos reales: Mundial Sub-17 Halterofilia 2026, proyectos corporativos 360°.",
  keywords: [
    "consultoria estrategica eventos",
    "planificacion eventos",
    "ROI eventos",
    "estrategia eventos",
    "consultoria deportiva",
    "mundial halterofilia",
    "DER Event Hub consultoria",
  ],
  openGraph: {
    title: "Consultoría Estratégica de Eventos | DER EVENT HUB",
    description:
      "Transformamos objetivos en estrategias ganadoras. Consultoría especializada con casos reales como Mundial Sub-17 Halterofilia 2026.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/consultoria-estrategica-hero.jpg",
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
      title: "Análisis Estratégico",
      description: "Objetivos claros, público definido, presupuesto optimizado y ROI proyectado",
      color: "text-orange-500",
    },
    {
      icon: Brain,
      title: "Planificación Integral",
      description: "Roadmaps detallados, cronogramas, gestión de riesgos y planes de contingencia",
      color: "text-red-500",
    },
    {
      icon: PieChart,
      title: "Optimización de Recursos",
      description: "Maximización de presupuesto, negociación estratégica y eficiencia operativa",
      color: "text-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      description: "KPIs específicos, métricas de impacto y análisis post-evento garantizado",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Globe,
      title: "Eventos Internacionales",
      description: "Competencias y eventos de escala mundial",
      examples: ["Mundial Sub-17 Halterofilia 2026", "Competencias deportivas internacionales", "Summits globales"],
    },
    {
      icon: Award,
      title: "Eventos Corporativos",
      description: "Estrategia empresarial y activaciones",
      examples: ["Lanzamientos de producto", "Conferencias corporativas", "Activaciones de marca"],
    },
    {
      icon: Users,
      title: "Proyectos Complejos",
      description: "Eventos multi-stakeholder y alta complejidad",
      examples: ["Eventos gubernamentales", "Federaciones deportivas", "Organizaciones internacionales"],
    },
  ]

  const tecnologia = [
    {
      feature: "Diagnóstico Estratégico",
      description: "Análisis profundo de objetivos, audiencia, competencia y oportunidades de mercado",
      icon: Lightbulb,
    },
    {
      feature: "Planificación Operativa",
      description: "Roadmaps detallados, cronogramas críticos, gestión de recursos y coordinación",
      icon: BarChart3,
    },
    {
      feature: "Gestión de Stakeholders",
      description: "Mapeo de actores clave, estrategias de comunicación y alineación de intereses",
      icon: Users,
    },
    {
      feature: "Optimización Financiera",
      description: "Presupuestación estratégica, búsqueda de financiamiento y maximización de ROI",
      icon: PieChart,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Mundial Sub-17 Halterofilia 2026",
      asistentes: "Internacional",
      tecnologia: "Consultoría CEO Completa",
      resultado: "Propuesta integral aprobada",
      badge: "Deportivo",
    },
    {
      nombre: "Proyectos Corporativos 360°",
      asistentes: "Variable",
      tecnologia: "Planificación Estratégica",
      resultado: "ROI optimizado garantizado",
      badge: "Corporativo",
    },
    {
      nombre: "Eventos Multi-Stakeholder",
      asistentes: "Complejo",
      tecnologia: "Gestión Integral",
      resultado: "Coordinación exitosa",
      badge: "Institucional",
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
                  <Badge className="bg-orange-500 text-white">ROI Garantizado</Badge>
                  <Badge className="bg-red-500 text-white">Planificación Integral</Badge>
                  <Badge className="bg-white text-orange-600">Resultados Medibles</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Consultoría <span className="text-yellow-300">Estratégica</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Transformamos objetivos en estrategias ganadoras</strong> con consultoría especializada en
                  eventos. Desde <strong>análisis estratégico hasta optimización de ROI</strong>
                  con planificación integral comprobada.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Análisis Integral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">ROI</div>
                    <div className="text-sm opacity-80">Optimizado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2026</div>
                    <div className="text-sm opacity-80">Mundial Sub-17</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Estratégico</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Target className="mr-2 h-5 w-5" />
                      Cotizar Consultoría Estratégica
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
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/consultoria-estrategica-hero.jpg"
                    alt="Consultoría Estratégica DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Consultoría estratégica - Mundial Sub-17 Halterofilia 2026</p>
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
                Análisis <span className="text-orange-500">Estratégico</span>
              </h2>
              <p className="text-xl text-gray-700">De objetivos a resultados medibles</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="text-xl text-gray-700">Adaptamos la consultoría según la complejidad del proyecto</p>
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

      {/* Metodología Detallada */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Metodología <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">4 pilares de nuestra consultoría estratégica</p>
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
              <p className="text-xl text-gray-700">Casos donde implementamos consultoría estratégica</p>
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

      {/* Precios y Paquetes */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Precios <span className="text-red-500">Orientativos</span>
              </h2>
              <p className="text-xl text-gray-700">Inversión según la complejidad y duración del proyecto</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Eventos Simples</Badge>
                  <CardTitle className="text-2xl">Consultoría Básica</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 1,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $1,500-3,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Análisis de objetivos y audiencia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Presupuestación estratégica</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Cronograma detallado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Plan de contingencias</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Consultoría Básica</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Consultoría Premium</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 5,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $5,000-10,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Estrategia integral 360°</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Optimización de ROI garantizada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión de stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Análisis post-evento incluido</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Consultoría Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Internacional</Badge>
                  <CardTitle className="text-2xl">Consultoría Enterprise</CardTitle>
                  <p className="text-gray-600">Para eventos internacionales complejos</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Consultoría CEO nivel mundial</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión multi-stakeholder</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Búsqueda de financiamiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo consultor dedicado</span>
                    </li>
                  </ul>

                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-gray-300 hover:border-orange-500 bg-transparent">
                      Consultar Proyecto Enterprise
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestra consultoría estratégica</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye el análisis estratégico completo?
                  </h3>
                  <p className="text-gray-700">
                    Incluye diagnóstico profundo de objetivos, análisis de audiencia target, benchmarking competitivo,
                    optimización presupuestaria, definición de KPIs, cronograma crítico, gestión de riesgos y plan de
                    contingencias. Como en el Mundial Sub-17 Halterofilia 2026, desarrollamos la propuesta integral
                    desde la conceptualización hasta la ejecución operativa.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden manejar eventos internacionales complejos?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia comprobada en eventos de escala mundial. Para el Mundial Sub-17 Halterofilia
                    2026 desarrollamos la consultoría CEO completa, incluyendo estructura organizacional, gestión
                    financiera, coordinación internacional, protocolos deportivos y legacy planning. Manejamos la
                    complejidad multi-stakeholder con metodología probada.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo garantizan la optimización del ROI?
                  </h3>
                  <p className="text-gray-700">
                    Utilizamos metodología de optimización financiera que incluye análisis de costo-beneficio,
                    negociación estratégica con proveedores, búsqueda de financiamiento alternativo, maximización de
                    ingresos por sponsoreo y medición de impacto real. Establecemos KPIs específicos desde el inicio y
                    monitoreamos el retorno durante todo el proyecto.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su consultoría de otros consultores?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la especialización exclusiva en eventos y la integración con capacidades
                    de ejecución. No solo planificamos estratégicamente, sino que podemos ejecutar directamente con
                    nuestros servicios propios (control de accesos, producción, gastronomía). Esto garantiza coherencia
                    entre estrategia y ejecución, algo único en el mercado.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Incluyen seguimiento post-evento y análisis de resultados?
                  </h3>
                  <p className="text-gray-700">
                    Sí, en nuestros planes premium incluimos análisis post-evento completo con métricas de impacto, ROI
                    real alcanzado, lecciones aprendidas y recomendaciones para futuros eventos. Medimos KPIs
                    establecidos inicialmente, satisfacción de stakeholders, impacto mediático y retorno financiero.
                    Este análisis es clave para optimizar eventos futuros.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden ayudar con la búsqueda de financiamiento y sponsors?
                  </h3>
                  <p className="text-gray-700">
                    Absolutamente. Incluimos estrategias de financiamiento alternativo, identificación de sponsors
                    potenciales, desarrollo de propuestas de valor para patrocinadores y negociación de acuerdos. En
                    proyectos como el Mundial Sub-17 desarrollamos modelos financieros completos con múltiples fuentes
                    de ingresos y estrategias de monetización.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación con Competencia */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir <span className="text-red-500">DER</span>?
              </h2>
              <p className="text-xl text-gray-700">Comparación con consultores tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Consultoría</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Especialización</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">100% Eventos</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Consultoría genérica</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Capacidad de Ejecución</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Estrategia + Ejecución</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo planificación</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Internacional</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Mundial Sub-17 2026</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Experiencia limitada</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">ROI Garantizado</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Optimización Comprobada</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Sin garantías</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Seguimiento Post-Evento</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Análisis Completo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Costo adicional</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                ¿Necesitás consultoría estratégica para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Transformemos tus objetivos en <span className="text-yellow-300">estrategia ganadora</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>eventos simples hasta proyectos internacionales</strong>, tenemos la metodología y
                experiencia para maximizar tu ROI.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Cotizar Consultoría Estratégica
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
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Análisis 360°</h3>
                <p className="text-sm opacity-80">Objetivos a resultados</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ROI Optimizado</h3>
                <p className="text-sm opacity-80">Garantía de resultados</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Escala Internacional</h3>
                <p className="text-sm opacity-80">Mundial Sub-17 2026</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Seguimiento Completo</h3>
                <p className="text-sm opacity-80">Análisis post-evento</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor consultoría estratégica</h3>
              <p className="text-lg opacity-90">
                Con casos reales como el Mundial Sub-17 Halterofilia 2026 (consultoría CEO completa) y múltiples
                proyectos corporativos 360°, nuestra consultoría estratégica está probada en eventos de todas las
                escalas.
                <strong> Especialización exclusiva en eventos, ROI optimizado y seguimiento garantizado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
