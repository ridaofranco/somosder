import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Smartphone,
  Video,
  Users,
  CheckCircle,
  BarChart3,
  Monitor,
  Gamepad2,
  Camera,
  Award,
  ArrowRight,
  Play,
  Cpu,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tecnología para Eventos - Apps, Streaming, AR/VR | DER EVENT HUB",
  description:
    "Soluciones tecnológicas avanzadas para eventos. Apps personalizadas, streaming híbrido, experiencias AR/VR, activaciones digitales. Casos reales: Campus Party (5K+), Manchester City AR.",
  keywords: [
    "tecnologia eventos",
    "apps eventos",
    "streaming eventos",
    "realidad aumentada eventos",
    "activaciones digitales",
    "eventos hibridos",
    "DER Event Hub tecnologia",
  ],
  openGraph: {
    title: "Tecnología para Eventos - Innovación Digital | DER EVENT HUB",
    description:
      "Transformamos eventos con tecnología de vanguardia. Apps, streaming, AR/VR, activaciones digitales. Campus Party, Manchester City comprobados.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/tecnologia-eventos-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tecnología para Eventos DER Event Hub",
      },
    ],
  },
}

export default function TecnologiaEventosPage() {
  const features = [
    {
      icon: Smartphone,
      title: "Apps Personalizadas",
      description: "Aplicaciones móviles nativas con agenda, networking, gamificación y push notifications",
      color: "text-orange-500",
    },
    {
      icon: Video,
      title: "Streaming Híbrido",
      description: "Transmisiones en vivo multi-plataforma con interacción en tiempo real",
      color: "text-red-500",
    },
    {
      icon: Camera,
      title: "Experiencias AR/VR",
      description: "Realidad aumentada y virtual para activaciones inmersivas memorables",
      color: "text-orange-600",
    },
    {
      icon: Gamepad2,
      title: "Activaciones Digitales",
      description: "Photo booths inteligentes, social walls, NFC, gamificación y engagement",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Users,
      title: "Eventos Masivos Tech",
      description: "Tecnología para grandes audiencias",
      examples: ["Campus Party (5,000+ con apps)", "Conferencias tecnológicas", "Festivales digitales"],
    },
    {
      icon: Award,
      title: "Activaciones de Marca",
      description: "Experiencias digitales inmersivas",
      examples: ["Manchester City AR (650 shares)", "Lanzamientos de producto", "Experiencias premium"],
    },
    {
      icon: Monitor,
      title: "Eventos Híbridos",
      description: "Presencial + virtual integrado",
      examples: ["Conferencias corporativas", "Summits internacionales", "Capacitaciones empresariales"],
    },
  ]

  const tecnologia = [
    {
      feature: "Desarrollo de Apps Nativas",
      description: "iOS y Android personalizadas con agenda, speakers, networking, encuestas y notificaciones",
      icon: Smartphone,
    },
    {
      feature: "Plataforma de Streaming",
      description: "Transmisión multi-canal con chat, Q&A, breakout rooms y analytics en tiempo real",
      icon: Video,
    },
    {
      feature: "Experiencias Inmersivas",
      description: "AR/VR personalizada, photo booths inteligentes, filtros branded y activaciones 3D",
      icon: Camera,
    },
    {
      feature: "Engagement Digital",
      description: "Gamificación, social walls, encuestas live, networking AI y métricas de participación",
      icon: BarChart3,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Campus Party 2024/2025",
      asistentes: "5,000+",
      tecnologia: "App + Tech Integral",
      resultado: "Engagement máximo 4 días",
      badge: "Tecnológico",
    },
    {
      nombre: "Manchester City AR Experience",
      asistentes: "2,000+",
      tecnologia: "AR Photobooth",
      resultado: "650 shares virales",
      badge: "Deportivo",
    },
    {
      nombre: "Eventos Híbridos Corporativos",
      asistentes: "Variable",
      tecnologia: "Streaming + Interacción",
      resultado: "Alcance global exitoso",
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
            <span className="text-gray-900">Tecnología para Eventos</span>
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
                  <Badge className="bg-orange-500 text-white">Innovación Digital</Badge>
                  <Badge className="bg-red-500 text-white">Experiencias Inmersivas</Badge>
                  <Badge className="bg-white text-orange-600">Engagement Máximo</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Tecnología para <span className="text-yellow-300">Eventos</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Transformamos eventos con tecnología de vanguardia</strong> - apps personalizadas, streaming
                  híbrido, AR/VR. Desde <strong>activaciones digitales hasta experiencias masivas</strong>
                  con engagement garantizado.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5K+</div>
                    <div className="text-sm opacity-80">Campus Party</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">650</div>
                    <div className="text-sm opacity-80">AR Shares</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Streaming Live</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Personalizado</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Cpu className="mr-2 h-5 w-5" />
                      Cotizar Tecnología para Eventos
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Demo Tecnológico
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/tecnologia-eventos-hero.jpg"
                    alt="Tecnología para Eventos DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">AR Experience Manchester City - 650 shares virales</p>
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
                Soluciones <span className="text-orange-500">Avanzadas</span>
              </h2>
              <p className="text-xl text-gray-700">Tecnología que potencia la experiencia del evento</p>
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
              <p className="text-xl text-gray-700">Adaptamos la tecnología según el tipo de evento</p>
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

      {/* Stack Tecnológico */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stack <span className="text-orange-500">Tecnológico</span>
              </h2>
              <p className="text-xl text-gray-700">4 pilares de nuestra propuesta tecnológica</p>
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
              <p className="text-xl text-gray-700">Casos donde implementamos tecnología avanzada</p>
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
                        <div className="text-sm text-gray-600">usuarios</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Tecnología:</span>
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
              <p className="text-xl text-gray-700">Inversión según la complejidad tecnológica del evento</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Activaciones Básicas</Badge>
                  <CardTitle className="text-2xl">Tech Básico</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 1,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $2,000-4,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Photo booth inteligente</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Social wall en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Encuestas digitales live</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Streaming básico</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Tech Básico</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Tech Premium</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 5,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $6,000-12,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">App personalizada completa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Experiencias AR/VR</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Streaming multi-plataforma</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gamificación avanzada</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Tech Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Masivo</Badge>
                  <CardTitle className="text-2xl">Tech Enterprise</CardTitle>
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
                      <span className="text-sm">Plataforma tecnológica completa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Experiencias inmersivas 360°</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Integración IoT y sensores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo tech dedicado</span>
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
              <p className="text-xl text-gray-700">
                Todo lo que necesitás saber sobre nuestras soluciones tecnológicas
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluyen las apps personalizadas para eventos?
                  </h3>
                  <p className="text-gray-700">
                    Nuestras apps incluyen agenda interactiva, perfiles de speakers, networking inteligente, encuestas
                    en tiempo real, push notifications, gamificación, mapas del venue, y integración con redes sociales.
                    Como en Campus Party, desarrollamos funcionalidades específicas para cada evento con branding
                    personalizado y analytics completos.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo funcionan las experiencias AR como en Manchester City?
                  </h3>
                  <p className="text-gray-700">
                    Desarrollamos experiencias de realidad aumentada personalizadas usando tecnología de vanguardia. En
                    Manchester City creamos un AR photobooth que permitía a los fanáticos fotografiarse con los trofeos
                    virtuales, generando 650 shares virales. Incluimos filtros branded, activaciones 3D y experiencias
                    inmersivas que conectan emocionalmente con la audiencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden manejar streaming para eventos masivos como Campus Party?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia comprobada en eventos masivos. Para Campus Party (5,000+ asistentes durante
                    4 días) implementamos streaming multi-plataforma con interacción en tiempo real, breakout rooms,
                    chat moderado, Q&A live y analytics detallados. Nuestra infraestructura soporta miles de usuarios
                    simultáneos con calidad broadcast.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su tecnología de otros proveedores?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la integración completa con nuestros otros servicios. No solo proveemos
                    tecnología, sino que la integramos con control de accesos, producción y analytics. Desarrollamos
                    soluciones personalizadas (no plantillas) y tenemos casos reales comprobados. Además, ofrecemos
                    soporte técnico 24/7 durante el evento.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Incluyen capacitación para el equipo del cliente?
                  </h3>
                  <p className="text-gray-700">
                    Sí, incluimos capacitación completa para el equipo organizador. Proporcionamos manuales de usuario,
                    sesiones de training en vivo, soporte durante el evento y documentación técnica. Para eventos como
                    Campus Party, capacitamos al staff en el uso de todas las herramientas tecnológicas para garantizar
                    una operación fluida.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué analytics y métricas proporcionan post-evento?
                  </h3>
                  <p className="text-gray-700">
                    Entregamos reportes completos con métricas de engagement, uso de la app, interacciones en streaming,
                    participación en activaciones AR/VR, alcance en redes sociales, y ROI de las activaciones digitales.
                    Incluimos heatmaps de uso, demografía de usuarios, momentos pico de interacción y recomendaciones
                    para futuros eventos.
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
              <p className="text-xl text-gray-700">Comparación con proveedores tecnológicos tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Tech</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Personalización</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">100% Personalizado</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Plantillas genéricas</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración de Servicios</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">360° Integrado</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo tecnología</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Masiva</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Campus Party 5K+</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Capacidad limitada</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencias AR/VR</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Manchester City 650 Shares</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Costo adicional</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Soporte 24/7</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Durante Todo el Evento</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Horario limitado</span>
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
                <Cpu className="w-4 h-4 mr-2" />
                ¿Necesitás tecnología avanzada para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Transformemos tu evento con <span className="text-yellow-300">tecnología de vanguardia</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>activaciones digitales hasta experiencias masivas</strong>, tenemos la tecnología y
                experiencia para crear engagement máximo.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Cotizar Tecnología para Eventos
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Demo Tecnológico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Apps Personalizadas</h3>
                <p className="text-sm opacity-80">100% customizadas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Experiencias AR/VR</h3>
                <p className="text-sm opacity-80">Inmersivas y virales</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Streaming 24/7</h3>
                <p className="text-sm opacity-80">Multi-plataforma</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">Campus Party, Manchester City</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor tecnología</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Campus Party (5,000+ usuarios durante 4 días) y Manchester City AR Experience (650
                shares virales), nuestra tecnología está probada en eventos de todas las escalas.
                <strong> Soluciones personalizadas, integración 360° y engagement garantizado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
