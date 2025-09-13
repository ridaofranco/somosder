import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Palette,
  Heart,
  CheckCircle,
  BarChart3,
  Megaphone,
  Lightbulb,
  Target,
  Sparkles,
  Award,
  ArrowRight,
  Play,
  Wand2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Marketing Experiencial - Creatividad que Conecta | DER EVENT HUB",
  description:
    "Marketing experiencial que transforma eventos en recuerdos imborrables. Creatividad sin límites, engagement emocional, historias de marca. Activaciones Manchester City, campañas integradas.",
  keywords: [
    "marketing experiencial",
    "creatividad eventos",
    "activaciones de marca",
    "engagement emocional",
    "experiencias memorables",
    "campañas integradas",
    "DER Event Hub marketing",
  ],
  openGraph: {
    title: "Marketing Experiencial - Creatividad que Conecta | DER EVENT HUB",
    description:
      "Uniendo estrategia y arte, creamos experiencias que hablan el lenguaje de tu marca y resuenan en tu público. Creatividad sin límites.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/marketing-experiencial-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Marketing Experiencial DER Event Hub",
      },
    ],
  },
}

export default function MarketingExperiencialPage() {
  const features = [
    {
      icon: Lightbulb,
      title: "Creatividad Conceptual",
      description: "Conceptos fuera de lo común que transforman ideas en experiencias memorables",
      color: "text-orange-500",
    },
    {
      icon: Palette,
      title: "Diseño & Multimedia",
      description: "Branding personalizado, escenarios temáticos y activaciones visuales impactantes",
      color: "text-red-500",
    },
    {
      icon: Megaphone,
      title: "Campañas Integradas",
      description: "Estrategias 360° que conectan con tu audiencia en todos los touchpoints",
      color: "text-orange-600",
    },
    {
      icon: Heart,
      title: "Engagement Emocional",
      description: "Experiencias que sorprenden, deleitan y crean vínculos duraderos con la marca",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Award,
      title: "Activaciones Deportivas",
      description: "Experiencias de marca en eventos deportivos",
      examples: ["Manchester City experiencias inmersivas", "Activaciones en estadios", "Fan engagement premium"],
    },
    {
      icon: Target,
      title: "Lanzamientos de Marca",
      description: "Presentaciones que generan impacto",
      examples: ["Eventos de producto innovadores", "Experiencias de marca únicas", "Activaciones corporativas"],
    },
    {
      icon: Sparkles,
      title: "Experiencias Premium",
      description: "Momentos extraordinarios de marca",
      examples: ["Eventos VIP exclusivos", "Experiencias personalizadas", "Activaciones de lujo"],
    },
  ]

  const tecnologia = [
    {
      feature: "Proceso Creativo Integral",
      description: "Entendemos tu marca, definimos la experiencia, diseñamos la activación y medimos el impacto",
      icon: Wand2,
    },
    {
      feature: "Storytelling de Marca",
      description: "Narrativas que conectan emocionalmente, transmiten valores y generan recordación",
      icon: Megaphone,
    },
    {
      feature: "Activaciones Interactivas",
      description: "Experiencias inmersivas, photo walls, instalaciones artísticas y momentos instagrameables",
      icon: Sparkles,
    },
    {
      feature: "Medición de Impacto",
      description: "Analytics de engagement, reach, sentiment analysis y ROI de experiencias de marca",
      icon: BarChart3,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Brand Experience",
      asistentes: "2,000+",
      tecnologia: "Activación 360° Inmersiva",
      resultado: "Engagement emocional máximo",
      badge: "Deportivo",
    },
    {
      nombre: "Activaciones Corporativas Premium",
      asistentes: "Variable",
      tecnologia: "Experiencias Personalizadas",
      resultado: "Impacto de marca garantizado",
      badge: "Corporativo",
    },
    {
      nombre: "Campañas Integradas Multi-Canal",
      asistentes: "Masivo",
      tecnologia: "Marketing 360°",
      resultado: "Alcance y recordación óptimos",
      badge: "Integral",
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
            <span className="text-gray-900">Marketing Experiencial</span>
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
                  <Badge className="bg-orange-500 text-white">Creatividad Sin Límites</Badge>
                  <Badge className="bg-red-500 text-white">Engagement Emocional</Badge>
                  <Badge className="bg-white text-orange-600">Historias de Marca</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Marketing <span className="text-yellow-300">Experiencial</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Creatividad que convierte eventos en recuerdos imborrables.</strong> Uniendo estrategia y
                  arte, creamos experiencias que hablan el lenguaje de tu marca y{" "}
                  <strong>resuenan en tu público</strong>
                  con engagement emocional garantizado.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Experiencias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">∞</div>
                    <div className="text-sm opacity-80">Creatividad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Memorable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">ROI</div>
                    <div className="text-sm opacity-80">Medible</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Wand2 className="mr-2 h-5 w-5" />
                      Cotizar Marketing Experiencial
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Portfolio Creativo
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/marketing-experiencial-hero.jpg"
                    alt="Marketing Experiencial DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Activación Manchester City - Experiencia inmersiva de marca</p>
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
                Creatividad <span className="text-orange-500">Sin Límites</span>
              </h2>
              <p className="text-xl text-gray-700">Experiencias que sorprenden y deleitan</p>
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
              <p className="text-xl text-gray-700">Adaptamos la creatividad según el objetivo de marca</p>
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

      {/* Proceso Creativo */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proceso <span className="text-orange-500">Creativo</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para crear experiencias memorables</p>
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
              <p className="text-xl text-gray-700">Casos donde implementamos marketing experiencial</p>
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
                        <div className="text-sm text-gray-600">impacto</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Experiencia:</span>
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
              <p className="text-xl text-gray-700">Inversión según la complejidad creativa y alcance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Activaciones Simples</Badge>
                  <CardTitle className="text-2xl">Creatividad Básica</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 1,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $3,000-6,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Concepto creativo personalizado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Branding y elementos visuales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Activación interactiva básica</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Métricas de engagement</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Creatividad Básica</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Experiencia Premium</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 5,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $8,000-15,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Campaña experiencial 360°</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Activaciones inmersivas múltiples</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Storytelling de marca avanzado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">ROI y analytics completos</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Experiencia Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Campañas Masivas</Badge>
                  <CardTitle className="text-2xl">Marketing Enterprise</CardTitle>
                  <p className="text-gray-600">Para campañas multi-evento</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Campañas integradas multi-canal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Experiencias de marca globales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Activaciones simultáneas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo creativo dedicado</span>
                    </li>
                  </ul>

                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-gray-300 hover:border-orange-500 bg-transparent">
                      Consultar Campaña Enterprise
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestro marketing experiencial</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye una campaña de marketing experiencial completa?
                  </h3>
                  <p className="text-gray-700">
                    Incluye proceso creativo integral desde el brief hasta la medición de resultados: análisis de marca
                    y audiencia, conceptualización creativa, diseño de experiencias, activaciones interactivas, branding
                    personalizado, storytelling, implementación técnica y analytics de impacto. Como en Manchester City,
                    creamos experiencias memorables que conectan emocionalmente con la audiencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo garantizan que la experiencia sea memorable y diferente?
                  </h3>
                  <p className="text-gray-700">
                    Nuestro proceso creativo se basa en "creatividad sin límites" - entendemos profundamente tu marca,
                    analizamos la competencia, identificamos oportunidades únicas y diseñamos experiencias fuera de lo
                    común. Cada activación es personalizada, nunca usamos plantillas. Nos enfocamos en crear momentos
                    "instagrameables" que generen engagement orgánico y recordación duradera.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden integrar marketing experiencial con otros servicios de DER?
                  </h3>
                  <p className="text-gray-700">
                    Absolutamente. Nuestra ventaja competitiva es la integración 360°: combinamos marketing experiencial
                    con producción integral, tecnología (AR/VR, apps), control de accesos inteligente, fotografía
                    profesional y analytics. Esto garantiza coherencia en toda la experiencia y maximiza el impacto de
                    marca en cada touchpoint del evento.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo miden el ROI y el impacto de las experiencias de marca?
                  </h3>
                  <p className="text-gray-700">
                    Utilizamos métricas cuantitativas y cualitativas: engagement rate, alcance orgánico, shares virales,
                    tiempo de interacción, sentiment analysis, brand recall, NPS post-evento, y conversión a ventas.
                    Implementamos tracking en tiempo real durante activaciones, análisis de redes sociales, encuestas de
                    recordación y estudios de impacto de marca a largo plazo.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su enfoque creativo de otras agencias de marketing?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la especialización exclusiva en eventos y la capacidad de ejecutar
                    integralmente. No solo diseñamos campañas, sino que las implementamos con nuestros servicios propios
                    (producción, tecnología, logística). Esto garantiza coherencia creativa desde el concepto hasta la
                    ejecución. Además, nuestro enfoque es "creatividad sin límites" - no nos limitamos por restricciones
                    técnicas porque controlamos toda la cadena de valor.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Trabajan con marcas internacionales y eventos globales?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia con marcas globales como Manchester City y eventos internacionales.
                    Adaptamos nuestras campañas a diferentes culturas y mercados, manteniendo la coherencia de marca
                    global pero con relevancia local. Manejamos activaciones simultáneas en múltiples países y
                    coordinamos campañas integradas que trascienden fronteras geográficas.
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
              <p className="text-xl text-gray-700">Comparación con agencias de marketing tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Marketing</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Especialización</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">100% Marketing Experiencial</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Marketing genérico</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Capacidad de Ejecución</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Creatividad + Producción</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo conceptos</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencias Memorables</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Manchester City Comprobado</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Activaciones estándar</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración Tecnológica</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">AR/VR + Apps Propias</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Dependencia externa</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">ROI Medible</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Analytics Completos</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Métricas básicas</span>
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
                <Wand2 className="w-4 h-4 mr-2" />
                ¿Necesitás marketing experiencial que sorprenda?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Creemos experiencias que <span className="text-yellow-300">nunca se olvidan</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>activaciones simples hasta campañas masivas</strong>, tenemos la creatividad y capacidad
                de ejecución para hacer que tu marca brille.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Cotizar Marketing Experiencial
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Portfolio Creativo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Creatividad Sin Límites</h3>
                <p className="text-sm opacity-80">Conceptos únicos siempre</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Engagement Emocional</h3>
                <p className="text-sm opacity-80">Conexiones memorables</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Ejecución Integral</h3>
                <p className="text-sm opacity-80">De concepto a realidad</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ROI Medible</h3>
                <p className="text-sm opacity-80">Resultados comprobables</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu marca merece experiencias extraordinarias</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City (experiencias inmersivas memorables) y múltiples activaciones
                corporativas, nuestro marketing experiencial está probado en eventos de todas las escalas.
                <strong> Creatividad sin límites, engagement emocional y ROI garantizado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
