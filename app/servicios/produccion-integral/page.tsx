import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Clapperboard,
  Users,
  Clock,
  CheckCircle,
  BarChart3,
  Camera,
  Megaphone,
  Trophy,
  Target,
  Award,
  ArrowRight,
  Play,
  Settings,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Producción Integral de Eventos - 360° Completa | DER EVENT HUB",
  description:
    "Producción integral de eventos 360°. Desde conceptualización hasta ejecución completa. Casos reales: Manchester City Trophy Tour (2,000+ fanáticos), Saint Mary Hills torneo fútbol.",
  keywords: [
    "produccion integral eventos",
    "eventos 360 grados",
    "produccion completa eventos",
    "manchester city argentina",
    "torneos deportivos",
    "produccion deportiva",
    "DER Event Hub produccion",
  ],
  openGraph: {
    title: "Producción Integral de Eventos 360° | DER EVENT HUB",
    description:
      "Producción completa desde conceptualización hasta ejecución. Manchester City Trophy Tour, Saint Mary Hills. Experiencias memorables garantizadas.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/produccion-integral-hero.jpg",
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
      icon: Clapperboard,
      title: "Producción 360°",
      description: "Eventos corporativos, culturales, sociales, deportivos con gestión integral",
      color: "text-orange-500",
    },
    {
      icon: Settings,
      title: "Dirección Técnica",
      description: "Supervisión profesional de todos los aspectos técnicos del evento",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Coordinación Total",
      description: "Gestión centralizada de todos los proveedores y servicios",
      color: "text-orange-600",
    },
    {
      icon: Trophy,
      title: "Experiencia Premium",
      description: "Shows y presentaciones con alto impacto visual y experiencial",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Trophy,
      title: "Eventos Deportivos",
      description: "Experiencias deportivas memorables",
      examples: ["Manchester City Trophy Tour (2,000+)", "Torneos institucionales", "Activaciones deportivas"],
    },
    {
      icon: Award,
      title: "Eventos Corporativos",
      description: "Producciones empresariales de alto nivel",
      examples: ["Lanzamientos de producto", "Conferencias corporativas", "Eventos de marca"],
    },
    {
      icon: Target,
      title: "Eventos Comunitarios",
      description: "Producciones para instituciones educativas",
      examples: ["Saint Mary Hills torneo fútbol", "Eventos escolares", "Actividades comunitarias"],
    },
  ]

  const tecnologia = [
    {
      feature: "Conceptualización Creativa",
      description: "Desarrollo completo del evento desde la idea inicial hasta la ejecución final",
      icon: Megaphone,
    },
    {
      feature: "Gestión de Producción",
      description: "Coordinación de montaje, cronogramas, ensayos y supervisión técnica completa",
      icon: BarChart3,
    },
    {
      feature: "Experiencia del Participante",
      description: "Diseño de experiencias inmersivas que conectan emocionalmente con la audiencia",
      icon: Camera,
    },
    {
      feature: "Coordinación Logística",
      description: "Gestión integral de proveedores, talento, staff operativo y recursos técnicos",
      icon: Settings,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Trophy Tour",
      asistentes: "2,000+",
      tecnologia: "Producción 360° Completa",
      resultado: "Experiencia inmersiva exitosa",
      badge: "Deportivo",
    },
    {
      nombre: "Saint Mary of the Hills",
      asistentes: "Comunidad",
      tecnologia: "Torneo + Patrocinadores",
      resultado: "Evento comunitario memorable",
      badge: "Educativo",
    },
    {
      nombre: "Activaciones Corporativas",
      asistentes: "Variable",
      tecnologia: "Producción Personalizada",
      resultado: "Impacto de marca garantizado",
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
                  <Badge className="bg-orange-500 text-white">Producción 360°</Badge>
                  <Badge className="bg-red-500 text-white">Experiencias Memorables</Badge>
                  <Badge className="bg-white text-orange-600">Gestión Completa</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Producción <span className="text-yellow-300">Integral</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Transformamos ideas en experiencias memorables</strong> con producción integral 360°. Desde{" "}
                  <strong>eventos comunitarios hasta experiencias masivas</strong>
                  con coordinación logística impecable.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Producción Completa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2K+</div>
                    <div className="text-sm opacity-80">Manchester City</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Coordinación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Supervisión</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Clapperboard className="mr-2 h-5 w-5" />
                      Cotizar Producción Integral
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
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/produccion-integral-hero.jpg"
                    alt="Producción Integral DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Manchester City Trophy Tour - Producción completa</p>
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
                Producción <span className="text-orange-500">360°</span>
              </h2>
              <p className="text-xl text-gray-700">De la conceptualización a la ejecución impecable</p>
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
              <p className="text-xl text-gray-700">Adaptamos la producción según el tipo de evento</p>
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
              <p className="text-xl text-gray-700">4 pilares de nuestra producción completa</p>
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
              <p className="text-xl text-gray-700">Casos donde implementamos producción integral</p>
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
                        <div className="text-sm text-gray-600">fanáticos</div>
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

      {/* Precios y Paquetes */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Precios <span className="text-red-500">Orientativos</span>
              </h2>
              <p className="text-xl text-gray-700">Inversión según el tamaño y complejidad del evento</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Eventos Comunitarios</Badge>
                  <CardTitle className="text-2xl">Producción Básica</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 500 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $3,000-6,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Conceptualización del evento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación de proveedores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Supervisión durante evento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión logística básica</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Producción Básica</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Producción Premium</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 2,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $8,000-15,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Producción 360° completa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Experiencia inmersiva diseñada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación técnica avanzada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión de talento y speakers</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Producción Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Corporativo</Badge>
                  <CardTitle className="text-2xl">Producción Enterprise</CardTitle>
                  <p className="text-gray-600">Para eventos +5,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Producción masiva especializada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo técnico dedicado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión multi-venue</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Cobertura mediática incluida</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestra producción integral</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye la producción integral 360°?
                  </h3>
                  <p className="text-gray-700">
                    Incluye conceptualización creativa completa, diseño de experiencia del participante, coordinación de
                    todos los proveedores, gestión técnica, supervisión de montaje, dirección durante el evento y
                    desmontaje. Como en Manchester City, manejamos desde la llegada de los trofeos hasta la experiencia
                    final de cada fanático.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden manejar eventos deportivos como Manchester City?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia comprobada en eventos deportivos de alto nivel. Para Manchester City Trophy
                    Tour coordinamos la experiencia completa para más de 2,000 fanáticos, incluyendo montaje de
                    escenarios, activaciones interactivas, gestión de prensa y coordinación logística. Cada evento
                    deportivo requiere protocolos específicos que manejamos profesionalmente.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo coordinan múltiples proveedores y servicios?
                  </h3>
                  <p className="text-gray-700">
                    Utilizamos un sistema de gestión centralizada donde coordinamos todos los aspectos técnicos,
                    logísticos y creativos. En Saint Mary Hills coordinamos marcas patrocinadoras, logística del torneo
                    y sorteos en vivo. Tenemos protocolos establecidos para timing, comunicación y contingencias que
                    garantizan una ejecución impecable.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su producción de otros proveedores?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la integración completa: no solo coordinamos, sino que diseñamos la
                    experiencia desde cero. Combinamos creatividad, tecnología propia (como nuestros sistemas de acceso)
                    y gestión logística bajo una sola dirección. Esto garantiza coherencia en todos los aspectos del
                    evento y una experiencia memorable para los participantes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden trabajar con instituciones educativas como Saint Mary?
                  </h3>
                  <p className="text-gray-700">
                    Absolutamente. Tenemos experiencia en eventos institucionales y comunitarios. En Saint Mary of the
                    Hills organizamos el torneo de fútbol completo, incluyendo gestión deportiva, coordinación con
                    marcas patrocinadoras y sorteos en vivo. Adaptamos nuestra metodología al contexto educativo y los
                    valores institucionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Incluyen cobertura mediática y documentación?
                  </h3>
                  <p className="text-gray-700">
                    Sí, en nuestros planes premium incluimos gestión de prensa y documentación profesional del evento.
                    Para Manchester City coordinamos la cobertura mediática en principales medios deportivos y
                    documentamos toda la experiencia. Esto incluye fotografía profesional, coordinación con medios,
                    material para redes sociales y archivo completo del evento.
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
              <p className="text-xl text-gray-700">Comparación con productoras tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Producción</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Enfoque</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Producción 360° Integral</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Servicios fragmentados</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Tecnología Propia</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Sistemas Integrados</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Dependencia externa</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Deportiva</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Manchester City Comprobado</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Experiencia limitada</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Coordinación</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Gestión Centralizada</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Múltiples contactos</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Flexibilidad</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Comunitario a Masivo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Especialización rígida</span>
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
                <Clapperboard className="w-4 h-4 mr-2" />
                ¿Necesitás producción integral para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Transformemos tu idea en una <span className="text-yellow-300">experiencia memorable</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>eventos comunitarios hasta experiencias masivas</strong>, tenemos la metodología y
                experiencia para crear el evento perfecto.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Cotizar Producción Integral
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
                  <Clapperboard className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Producción 360°</h3>
                <p className="text-sm opacity-80">Conceptualización a ejecución</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Coordinación Total</h3>
                <p className="text-sm opacity-80">Un solo punto de contacto</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Supervisión 24/7</h3>
                <p className="text-sm opacity-80">Durante todo el evento</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">Manchester City, Saint Mary Hills</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor producción integral</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Trophy Tour (2,000+ fanáticos) y Saint Mary of the Hills (torneo
                completo), nuestra producción integral está probada en eventos deportivos, corporativos y comunitarios.
                <strong> Metodología 360°, coordinación centralizada y experiencias memorables garantizadas.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
