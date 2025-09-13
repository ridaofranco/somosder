import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Users,
  CheckCircle,
  Target,
  MessageSquare,
  Award,
  ArrowRight,
  Play,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios Post-Evento - Resultados Medibles | DER EVENT HUB",
  description:
    "Análisis post-evento y seguimiento de resultados. Encuestas NPS, reportes ROI, seguimiento comercial, gestión de contenido. Transformamos datos en insights accionables para maximizar el impacto de tu evento.",
  keywords: [
    "servicios post evento",
    "analisis post evento",
    "reportes ROI",
    "encuestas satisfaccion",
    "seguimiento comercial",
    "metricas eventos",
    "DER Event Hub post evento",
  ],
  openGraph: {
    title: "Servicios Post-Evento - El Evento No Termina Cuando Termina | DER EVENT HUB",
    description:
      "El evento no termina cuando termina. Analizamos cada métrica, nutrimos cada lead y convertimos la experiencia en resultados medibles para tu negocio.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/servicios-post-evento-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios Post-Evento DER Event Hub",
      },
    ],
  },
}

export default function ServiciosPostEventoPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Métricas clave, asistencia real vs esperada, engagement y leads generados",
      color: "text-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Reportes ROI/ROO",
      description: "Retorno de inversión medible con insights accionables para futuros eventos",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Seguimiento Comercial",
      description: "Nutrición de leads, concertación de reuniones y conversión post-evento",
      color: "text-orange-600",
    },
    {
      icon: MessageSquare,
      title: "Feedback Integral",
      description: "Encuestas NPS, testimoniales y retroalimentación para mejora continua",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Award,
      title: "Eventos Corporativos",
      description: "ROI empresarial y seguimiento comercial",
      examples: ["Generación de leads B2B", "Conversión post-evento", "Análisis de satisfacción ejecutiva"],
    },
    {
      icon: Target,
      title: "Lanzamientos de Producto",
      description: "Impacto comercial y brand awareness",
      examples: [
        "Tracking de ventas post-lanzamiento",
        "Análisis de cobertura mediática",
        "Engagement en redes sociales",
      ],
    },
    {
      icon: Heart,
      title: "Eventos de Networking",
      description: "Conexiones generadas y valor agregado",
      examples: ["Mapeo de conexiones realizadas", "Seguimiento de colaboraciones", "NPS de networking"],
    },
  ]

  const serviciosDetallados = [
    {
      icon: BarChart3,
      title: "Análisis de Métricas",
      description: "Dashboard completo con KPIs del evento",
      items: [
        "Asistencia real vs esperada",
        "Tiempo de permanencia",
        "Engagement por actividad",
        "Conversiones logradas",
      ],
    },
    {
      icon: MessageSquare,
      title: "Encuestas de Satisfacción",
      description: "NPS y feedback detallado de asistentes",
      items: [
        "Encuestas post-evento automatizadas",
        "Análisis de sentimientos",
        "Testimoniales en video",
        "Sugerencias de mejora",
      ],
    },
    {
      icon: TrendingUp,
      title: "Reportes ROI",
      description: "Retorno de inversión con datos concretos",
      items: ["Cálculo de ROI/ROO", "Comparativa con objetivos", "Insights accionables", "Recomendaciones futuras"],
    },
    {
      icon: Users,
      title: "Gestión de Leads",
      description: "Seguimiento comercial post-evento",
      items: ["Base de datos cualificada", "Secuencias de follow-up", "Reuniones concertadas", "Pipeline de ventas"],
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Trophy Tour",
      asistentes: "2,000+",
      tecnologia: "NPS 72 + ROI Analysis",
      resultado: "Insights accionables entregados",
      badge: "Deportivo",
    },
    {
      nombre: "Campus Party 2024",
      asistentes: "10,000+",
      tecnologia: "Analytics + Lead Nurturing",
      resultado: "Seguimiento comercial exitoso",
      badge: "Tech",
    },
    {
      nombre: "Eventos Corporativos DER",
      asistentes: "Variable",
      tecnologia: "ROI Reports + Feedback",
      resultado: "Mejora continua garantizada",
      badge: "Corporativo",
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
            <span className="text-gray-900">Servicios Post-Evento</span>
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
                  <Badge className="bg-orange-500 text-white">Resultados Medibles</Badge>
                  <Badge className="bg-red-500 text-white">Insights Accionables</Badge>
                  <Badge className="bg-white text-orange-600">Mejora Continua</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Servicios <span className="text-yellow-300">Post-Evento</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>El evento no termina cuando termina.</strong> Analizamos cada métrica, nutrimos cada lead
                  generado y convertimos toda la experiencia en <strong>resultados medibles para tu negocio</strong>.
                  Porque los mejores eventos son los que siguen generando valor mucho después de que se apaguen las
                  luces.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">72</div>
                    <div className="text-sm opacity-80">NPS Manchester City</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Eventos Analizados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">48h</div>
                    <div className="text-sm opacity-80">Reporte Entregado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">📊</div>
                    <div className="text-sm opacity-80">Datos Accionables</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Cotizar Análisis Post-Evento
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Reportes de Ejemplo
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/servicios-post-evento-hero.jpg"
                    alt="Servicios Post-Evento DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Dashboard de análisis post-evento con métricas en tiempo real</p>
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
                Transformamos datos en <span className="text-orange-500">resultados</span>
              </h2>
              <p className="text-xl text-gray-700">Cada evento genera valor más allá del día de ejecución</p>
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

      {/* Servicios Detallados */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios <span className="text-red-500">Detallados</span>
              </h2>
              <p className="text-xl text-gray-700">4 pilares para maximizar el valor post-evento</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviciosDetallados.map((servicio, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <servicio.icon className="w-5 h-5 text-orange-500 mr-2" />
                      {servicio.title}
                    </CardTitle>
                    <p className="text-gray-600">{servicio.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {servicio.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
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

      {/* Casos de Uso */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Casos de <span className="text-red-500">Uso</span>
              </h2>
              <p className="text-xl text-gray-700">Análisis adaptado según objetivos del evento</p>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Métricas clave:</h4>
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

      {/* Proyectos Reales */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos <span className="text-orange-500">Reales</span>
              </h2>
              <p className="text-xl text-gray-700">Casos donde entregamos análisis post-evento completos</p>
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
                        <div className="text-sm text-gray-600">asistentes</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Análisis:</span>
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
              <p className="text-xl text-gray-700">Inversión según la profundidad del análisis requerido</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Análisis Básico</Badge>
                  <CardTitle className="text-2xl">Reporte Estándar</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 500 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $500-1,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Métricas básicas de asistencia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Encuesta NPS automatizada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Reporte PDF ejecutivo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Entrega en 48-72h</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Reporte Estándar</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Análisis Completo</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 2,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $1,500-3,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Dashboard interactivo completo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Análisis ROI detallado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Seguimiento comercial 30 días</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Reunión de insights</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Análisis Completo</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Enterprise</Badge>
                  <CardTitle className="text-2xl">Análisis Estratégico</CardTitle>
                  <p className="text-gray-600">Para eventos +2,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Análisis predictivo avanzado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Benchmarking con industria</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Seguimiento comercial 90 días</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Consultoría estratégica incluida</span>
                    </li>
                  </ul>

                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-gray-300 hover:border-orange-500 bg-transparent">
                      Consultar Análisis Estratégico
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestros servicios post-evento</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye el análisis post-evento completo?
                  </h3>
                  <p className="text-gray-700">
                    Incluye dashboard interactivo con métricas clave (asistencia real vs esperada, tiempo de
                    permanencia, engagement por actividad), encuestas NPS automatizadas, análisis de satisfacción
                    detallado, cálculo de ROI/ROO con datos concretos, base de datos de leads cualificada, secuencias de
                    follow-up personalizadas, reunión de insights accionables y recomendaciones para futuros eventos.
                    Como en Manchester City Trophy Tour, entregamos NPS 72 con análisis completo.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Cómo calculan el ROI de un evento?</h3>
                  <p className="text-gray-700">
                    Calculamos ROI considerando inversión total vs resultados medibles: leads generados y su valor
                    potencial, ventas directas atribuibles al evento, aumento de brand awareness (medido por menciones,
                    engagement, cobertura), networking y conexiones comerciales logradas, ahorro en costos de
                    adquisición vs métodos tradicionales. Comparamos con objetivos iniciales y benchmarks de industria
                    para entregar insights accionables y recomendaciones de optimización.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Incluyen seguimiento comercial de los leads generados?
                  </h3>
                  <p className="text-gray-700">
                    Sí, incluimos seguimiento comercial completo durante 30-90 días según el paquete. Creamos secuencias
                    de follow-up personalizadas, emails de agradecimiento con contenido relevante, concertación de
                    reuniones comerciales, nutrición de leads con contenido de valor, tracking de conversiones y
                    pipeline de ventas. Entregamos reportes semanales de progreso comercial y recomendaciones de
                    optimización para maximizar la conversión post-evento.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su análisis post-evento de otros proveedores?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la integración completa con la producción del evento y el enfoque en
                    resultados comerciales medibles. No solo entregamos métricas, sino insights accionables para mejorar
                    futuros eventos. Conocemos cada detalle de la ejecución, por lo que podemos correlacionar resultados
                    con decisiones específicas tomadas durante la planificación y ejecución. Además, incluimos
                    seguimiento comercial activo, no solo reportes estáticos.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuánto tiempo toma recibir el análisis completo?
                  </h3>
                  <p className="text-gray-700">
                    Entregamos reportes básicos en 48-72h post-evento, análisis completos en 5-7 días, y análisis
                    estratégicos enterprise en 10-14 días. Los dashboards interactivos están disponibles en tiempo real
                    durante el evento y se actualizan automáticamente. Las encuestas NPS se envían automáticamente 24h
                    post-evento, y los primeros insights están disponibles en 48h. El seguimiento comercial comienza
                    inmediatamente después del evento.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden comparar resultados con eventos anteriores o benchmarks de industria?
                  </h3>
                  <p className="text-gray-700">
                    Sí, mantenemos una base de datos de benchmarks de industria por tipo de evento, sector y tamaño.
                    Comparamos tus resultados con eventos similares, identificamos áreas de mejora y oportunidades de
                    optimización. Para clientes recurrentes, creamos análisis de tendencias y evolución de métricas a lo
                    largo del tiempo. Esto permite identificar patrones de éxito y replicar las mejores prácticas en
                    futuros eventos.
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
              <p className="text-xl text-gray-700">Comparación con servicios de análisis tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Post-Evento</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración con Producción</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Conocimiento Completo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Análisis externo</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Seguimiento Comercial</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">30-90 días activo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo reportes estáticos</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Insights Accionables</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Recomendaciones Específicas</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo métricas básicas</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">ROI Medible</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Cálculo Detallado</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">ROI aproximado</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Comprobada</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">NPS 72 Manchester City</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Sin casos comprobados</span>
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
                <BarChart3 className="w-4 h-4 mr-2" />
                ¿Querés maximizar el valor de tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                El evento no termina <span className="text-yellow-300">cuando termina</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>análisis básicos hasta seguimiento comercial estratégico</strong>, transformamos cada dato
                en resultados medibles para tu negocio con insights accionables.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Cotizar Análisis Post-Evento
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Reportes de Ejemplo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Datos Precisos</h3>
                <p className="text-sm opacity-80">Métricas en tiempo real</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ROI Medible</h3>
                <p className="text-sm opacity-80">Resultados concretos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Seguimiento Activo</h3>
                <p className="text-sm opacity-80">Leads convertidos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">NPS 72 Manchester City</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu inversión merece resultados medibles</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Trophy Tour (NPS 72 con análisis ROI completo), Campus Party 2024
                (analytics + lead nurturing exitoso) y múltiples eventos corporativos, nuestros servicios post-evento
                transforman datos en crecimiento comercial.
                <strong> El evento no termina cuando termina.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
