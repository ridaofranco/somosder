import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  BarChart,
  Users,
  CheckCircle,
  Target,
  Award,
  ArrowRight,
  Play,
  FileText,
  Zap,
  TrendingUp,
  Globe,
  Heart,
  Rocket,
  Mic,
  PieChart
  Building2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios Post Evento - Análisis y Optimización | DER EVENT HUB",
  description:
    "Convierte los resultados de tu evento en insights accionables. Casos reales: Abel Pintos Gira, IDA 2025. Análisis de métricas, seguimiento de leads y reportes ejecutivos.",
  keywords: [
    "servicios post evento",
    "analisis de resultados",
    "seguimiento de leads",
    "abel pintos post evento",
    "ida 2025 evaluacion",
    "metricas de eventos",
    "DER Event Hub post evento",
  ],
  openGraph: {
    title: "Servicios Post Evento | DER EVENT HUB",
    description:
      "El evento no termina cuando se apagan las luces. Maximiza tu ROI con análisis detallado y estrategias de crecimiento.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios Post Evento DER Event Hub",
      },
    ],
  },
}

export default function PostEventoPage() {
  const features = [
    {
      icon: BarChart,
      title: "Análisis de Resultados",
      description: "Evaluación completa de métricas: asistencia, engagement, satisfacción, conversiones y ROI",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Seguimiento de Leads",
      description: "Gestión profesional de contactos generados, con clasificación, scoring y estrategias personalizadas",
      color: "text-red-500",
    },
    {
      icon: FileText,
      title: "Reportes Ejecutivos",
      description: "Documentos con análisis profundo, comparativas de objetivos e insights estratégicos",
      color: "text-orange-600",
    },
    {
      icon: Target,
      title: "Evaluación de Impacto",
      description: "Medición del impacto en objetivos de negocio, brand awareness y satisfacción de stakeholders",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Optimización Continua",
      description: "Identificación de mejoras, benchmarking y desarrollo de estrategias para futuros eventos",
      color: "text-orange-500",
    },
    {
      icon: Award,
      title: "Certificación y Reconocimientos",
      description: "Gestión de certificados, reconocimientos especiales y documentación oficial",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Mic,
      title: "Eventos Musicales y Artísticos",
      description: "Análisis de impacto y engagement en eventos de entretenimiento",
      examples: ["Abel Pintos - Gira Nacional", "Métricas de asistencia y redes sociales", "Seguimiento de leads generados"],
    },
    {
      icon: Globe,
      title: "Eventos Académicos e Innovación",
      description: "Evaluación de impacto académico y networking",
      examples: ["IDA 2025", "Análisis de satisfacción de participantes", "Medición de networking generado"],
    },
    {
      icon: Building,
      title: "Eventos Corporativos",
      description: "Análisis estratégico para objetivos empresariales",
      examples: ["Eventos de lanzamiento", "ROI y generación de oportunidades", "Insights para estrategias futuras"],
    },
  ]

  const tecnologia = [
    {
      feature: "Recolección de Datos",
      description: "Captura de información mediante encuestas, analytics y herramientas de tracking",
      icon: PieChart,
    },
    {
      feature: "Procesamiento de Métricas",
      description: "Análisis estadístico, visualización de datos y generación de insights accionables",
      icon: BarChart,
    },
    {
      feature: "Estrategia de Seguimiento",
      description: "Clasificación de leads, scoring y desarrollo de estrategias de comunicación post-evento",
      icon: Rocket,
    },
    {
      feature: "Documentación Estratégica",
      description: "Reportes ejecutivos, recomendaciones y plan de mejora continua",
      icon: FileText,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Abel Pintos - Gira Nacional",
      asistentes: "Masivo",
      tecnologia: "Análisis de Métricas Completo",
      resultado: "Insights de Engagement",
      badge: "Musical",
    },
    {
      nombre: "IDA 2025",
      asistentes: "Académico",
      tecnologia: "Evaluación de Impacto",
      resultado: "Estrategias de Mejora",
      badge: "Innovación",
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
            <span className="text-gray-900">Servicios Post Evento</span>
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
                  <Badge className="bg-orange-500 text-white">Análisis Profundo</Badge>
                  <Badge className="bg-red-500 text-white">Insights Accionables</Badge>
                  <Badge className="bg-white text-orange-600">ROI Maximizado</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Servicios <span className="text-yellow-300">Post Evento</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>El evento no termina cuando se apagan las luces</strong>. Nuestros servicios post evento 
                  te ayudan a maximizar el ROI, analizar resultados y <strong>construir sobre el éxito alcanzado</strong> 
                  para futuras iniciativas.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Análisis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Métricas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">+</div>
                    <div className="text-sm opacity-80">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🚀</div>
                    <div className="text-sm opacity-80">Crecimiento</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <BarChart className="mr-2 h-5 w-5" />
                      Solicitar Información
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Servicios Post Evento
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
                    alt="Servicios Post Evento DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Análisis de resultados - Abel Pintos Gira Nacional</p>
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
              <p className="text-xl text-gray-700">Descubre las funcionalidades clave de este servicio</p>
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
              <p className="text-xl text-gray-700">Adaptamos el análisis según el tipo de evento</p>
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
                Proceso de <span className="text-orange-500">Análisis</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para maximizar el valor post-evento</p>
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
              <p className="text-xl text-gray-700">Casos donde maximizamos el valor post-evento</p>
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

      {/* FAQ Específico */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre servicios post evento</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye exactamente el análisis de resultados post-evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye evaluación completa de métricas de asistencia, engagement, satisfacción, conversiones y ROI, con reportes detallados y visualizaciones claras. Como en Abel Pintos Gira Nacional analizamos métricas de engagement en redes sociales y asistencia, y en IDA 2025 evaluamos el impacto académico y satisfacción de participantes con insights accionables para futuras ediciones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo manejan el seguimiento de leads generados durante el evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Gestionamos profesionalmente todos los contactos generados durante el evento con clasificación, scoring y estrategias de seguimiento personalizadas. Desarrollamos planes de comunicación post-evento, segmentamos leads según su potencial, y creamos estrategias de nurturing específicas. El objetivo es convertir el interés generado durante el evento en oportunidades reales de negocio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tipo de reportes ejecutivos proporcionan?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Creamos documentos ejecutivos con análisis profundo de resultados, comparativas con objetivos iniciales, insights clave y recomendaciones estratégicas. Los reportes incluyen visualizaciones claras, métricas de performance, análisis de ROI, y un plan de acción para eventos futuros. Como en IDA 2025, proporcionamos estrategias de mejora basadas en datos concretos y feedback de participantes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo miden el impacto real del evento en los objetivos de negocio?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Medimos el impacto en objetivos de negocio, brand awareness, generación de oportunidades y satisfacción de stakeholders mediante KPIs específicos definidos pre-evento. Evaluamos conversiones, engagement rate, alcance orgánico, sentiment analysis, y comparamos resultados con benchmarks de la industria. En Abel Pintos analizamos el impacto en redes sociales y engagement de fans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Incluyen certificación y reconocimientos para participantes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, gestionamos certificados de participación, reconocimientos especiales y documentación oficial para participantes y speakers. Esto incluye diseño personalizado de certificados, validación digital, entrega automatizada, y creación de un sistema de credenciales que agregue valor a la experiencia del participante. Es especialmente valioso en eventos académicos como IDA 2025.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo después del evento entregan los resultados?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Entregamos un reporte preliminar en 48-72h post-evento con métricas básicas, y el análisis completo con insights estratégicos en 1-2 semanas. El tiempo varía según la complejidad del evento y la profundidad del análisis requerido. Para eventos como Abel Pintos o IDA 2025, el análisis completo incluye procesamiento de encuestas, análisis de redes sociales, y desarrollo de recomendaciones estratégicas.
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
                <BarChart className="w-4 h-4 mr-2" />
                ¿Necesitás maximizar el valor de tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Insights que <span className="text-yellow-300">transforman eventos</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Abel Pintos Gira Nacional hasta IDA 2025</strong>, 
                convertimos los resultados de tu evento en estrategias de crecimiento 
                con análisis profundos y recomendaciones accionables.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <BarChart className="mr-2 h-5 w-5" />
                  Solicitar Análisis
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
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Análisis 360°</h3>
                <p className="text-sm opacity-80">Completo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ROI Maximizado</h3>
                <p className="text-sm opacity-80">Insights</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Leads</h3>
                <p className="text-sm opacity-80">Estratégicos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Reportes</h3>
                <p className="text-sm opacity-80">Ejecutivos</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece más que un recuerdo</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Abel Pintos Gira Nacional (análisis de engagement) e 
                IDA 2025 (evaluación de impacto académico), transformamos los datos de tu evento 
                en estrategias de crecimiento.
                <strong> Análisis 360°, insights accionables y ROI maximizado garantizados.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}