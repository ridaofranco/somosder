import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Trophy,
  Users,
  Target,
  CheckCircle,
  Medal,
  BellIcon as Whistle,
  Flag,
  Shield,
  Award,
  ArrowRight,
  Play,
  Crown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Gestión Deportiva - Modelo Dxtivamente | DER EVENT HUB",
  description:
    "Gestión deportiva integral con modelo Dxtivamente. Organizamos torneos, competencias y eventos deportivos. Casos reales: Saint Mary Hills, Manchester City, Mundial Sub-17 Halterofilia 2026.",
  keywords: [
    "gestion deportiva",
    "organizacion torneos",
    "eventos deportivos",
    "modelo dxtivamente",
    "saint mary hills",
    "manchester city deportivo",
    "DER Event Hub deportes",
  ],
  openGraph: {
    title: "Gestión Deportiva - Pasión y Profesionalismo | DER EVENT HUB",
    description:
      "Gestionamos pasiones deportivas con profesionalismo. Modelo Dxtivamente: valores deportivos, experiencia del atleta y entretenimiento del público.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/gestion-deportiva-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Gestión Deportiva DER Event Hub",
      },
    ],
  },
}

export default function GestionDeportivaPage() {
  const features = [
    {
      icon: Trophy,
      title: "Modelo Dxtivamente",
      description: "Valores deportivos, experiencia del atleta y entretenimiento del público en equilibrio perfecto",
      color: "text-orange-500",
    },
    {
      icon: Medal,
      title: "Organización Integral",
      description: "Federaciones, clubes, sponsors, inscripciones, fixtures, arbitrajes y ceremonias",
      color: "text-red-500",
    },
    {
      icon: Shield,
      title: "Logística Deportiva",
      description: "Seguridad, hidratación, equipamiento, transporte y alojamiento de delegaciones",
      color: "text-orange-600",
    },
    {
      icon: Flag,
      title: "Experiencia del Fan",
      description: "Fan zones, activaciones, merchandising y momentos memorables para el público",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Trophy,
      title: "Torneos Institucionales",
      description: "Competencias educativas y comunitarias",
      examples: ["Saint Mary Hills torneo fútbol", "Campeonatos escolares", "Ligas barriales organizadas"],
    },
    {
      icon: Crown,
      title: "Eventos Deportivos Premium",
      description: "Experiencias deportivas de alto nivel",
      examples: ["Manchester City experiencias", "Exhibiciones profesionales", "Activaciones de marca deportiva"],
    },
    {
      icon: Medal,
      title: "Competencias Internacionales",
      description: "Eventos de escala mundial",
      examples: ["Mundial Sub-17 Halterofilia 2026", "Campeonatos federativos", "Competencias olímpicas"],
    },
  ]

  const tecnologia = [
    {
      feature: "Planificación Deportiva",
      description: "Fixtures, inscripciones, categorías, reglamentos y coordinación con federaciones oficiales",
      icon: Target,
    },
    {
      feature: "Operativa de Competencia",
      description: "Arbitrajes certificados, cronometraje, resultados en vivo y protocolos deportivos",
      icon: Whistle,
    },
    {
      feature: "Gestión de Stakeholders",
      description: "Atletas, entrenadores, dirigentes, sponsors, medios y autoridades deportivas",
      icon: Users,
    },
    {
      feature: "Experiencia Integral",
      description: "Ceremonias, premiaciones, fan zones, activaciones y legado deportivo sostenible",
      icon: Award,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Saint Mary of the Hills",
      asistentes: "Comunidad",
      tecnologia: "Torneo Fútbol Completo",
      resultado: "Evento comunitario exitoso",
      badge: "Educativo",
    },
    {
      nombre: "Manchester City Experience",
      asistentes: "2,000+",
      tecnologia: "Gestión Deportiva Premium",
      resultado: "Experiencia deportiva memorable",
      badge: "Premium",
    },
    {
      nombre: "Mundial Sub-17 Halterofilia 2026",
      asistentes: "Internacional",
      tecnologia: "Propuesta CEO Olímpica",
      resultado: "Estándares mundiales aplicados",
      badge: "Olímpico",
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
            <span className="text-gray-900">Gestión Deportiva</span>
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
                  <Badge className="bg-orange-500 text-white">Modelo Dxtivamente</Badge>
                  <Badge className="bg-red-500 text-white">Pasión Deportiva</Badge>
                  <Badge className="bg-white text-orange-600">Profesionalismo Total</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Gestión <span className="text-yellow-300">Deportiva</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Gestionamos pasiones deportivas con profesionalismo.</strong> Aplicamos nuestro modelo{" "}
                  <strong>Dxtivamente</strong> para llevar eventos deportivos al siguiente nivel: valores deportivos,
                  experiencia del atleta y entretenimiento del público en equilibrio perfecto.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Gestión Integral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2026</div>
                    <div className="text-sm opacity-80">Mundial Sub-17</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Profesional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🏆</div>
                    <div className="text-sm opacity-80">Dxtivamente</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Trophy className="mr-2 h-5 w-5" />
                      Cotizar Gestión Deportiva
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos Deportivos
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/gestion-deportiva-hero.jpg"
                    alt="Gestión Deportiva DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Saint Mary Hills - Torneo de fútbol con gestión integral</p>
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
                Modelo <span className="text-orange-500">Dxtivamente</span>
              </h2>
              <p className="text-xl text-gray-700">Llevamos la emoción del deporte a otro nivel</p>
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
              <p className="text-xl text-gray-700">Adaptamos la gestión según el nivel deportivo</p>
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

      {/* Metodología Deportiva */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Metodología <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">4 pilares de nuestra gestión deportiva profesional</p>
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
              <p className="text-xl text-gray-700">Casos donde implementamos gestión deportiva integral</p>
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
                        <span className="text-gray-700">Gestión:</span>
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
              <p className="text-xl text-gray-700">Inversión según la complejidad y duración del evento deportivo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Torneos Locales</Badge>
                  <CardTitle className="text-2xl">Gestión Básica</CardTitle>
                  <p className="text-gray-600">Para competencias hasta 500 participantes</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $2,500-5,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Planificación y fixture completo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación de inscripciones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Arbitrajes y cronometraje</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Ceremonia de premiación</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Gestión Básica</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Gestión Premium</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 2,000 participantes</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $8,000-15,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión deportiva 360° completa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación con federaciones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Fan zones y activaciones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Logística integral deportiva</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Gestión Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Internacional</Badge>
                  <CardTitle className="text-2xl">Gestión Enterprise</CardTitle>
                  <p className="text-gray-600">Para competencias internacionales</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Estándares olímpicos aplicados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión multi-sede internacional</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación con autoridades</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo deportivo especializado</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestra gestión deportiva</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye la gestión deportiva integral completa?
                  </h3>
                  <p className="text-gray-700">
                    Incluye planificación deportiva completa (fixtures, inscripciones, categorías), coordinación con
                    federaciones y clubes, gestión de arbitrajes certificados, logística deportiva (hidratación,
                    equipamiento, seguridad), fan zones y activaciones, ceremonias de premiación y coordinación con
                    sponsors. Como en Saint Mary Hills, manejamos todos los aspectos deportivos y de entretenimiento.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden manejar eventos deportivos de nivel internacional?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia comprobada en eventos internacionales. Para el Mundial Sub-17 Halterofilia
                    2026 desarrollamos la propuesta CEO completa con estándares olímpicos, incluyendo coordinación
                    multi-sede, protocolos deportivos internacionales, gestión de delegaciones y ceremonias oficiales.
                    Manejamos la complejidad de eventos deportivos de escala mundial.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo coordinan con federaciones y autoridades deportivas?
                  </h3>
                  <p className="text-gray-700">
                    Tenemos protocolos establecidos para trabajar con federaciones deportivas oficiales, clubes y
                    autoridades regulatorias. Gestionamos inscripciones oficiales, homologaciones de árbitros,
                    certificaciones de competencia y cumplimiento de reglamentos deportivos. Coordinamos directamente
                    con dirigentes, comisiones técnicas y organismos de control para garantizar legitimidad deportiva
                    completa.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su gestión deportiva de otros organizadores?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la integración completa con nuestros otros servicios: no solo organizamos
                    la competencia deportiva, sino que creamos la experiencia integral con tecnología propia (control de
                    accesos, apps), producción completa, marketing experiencial y logística especializada. Esto
                    garantiza coherencia entre lo deportivo y lo experiencial, algo único en el mercado.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden trabajar con instituciones educativas como Saint Mary?
                  </h3>
                  <p className="text-gray-700">
                    Absolutamente. Tenemos experiencia específica en eventos deportivos educativos e institucionales. En
                    Saint Mary of the Hills organizamos el torneo de fútbol completo, adaptando nuestra metodología al
                    contexto educativo, valores institucionales y presupuestos escolares. Entendemos las
                    particularidades de eventos deportivos comunitarios y educativos.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Incluyen gestión de sponsors y activaciones comerciales?
                  </h3>
                  <p className="text-gray-700">
                    Sí, incluimos gestión integral de sponsors deportivos: identificación de marcas afines, desarrollo
                    de propuestas de patrocinio, activaciones branded durante la competencia, espacios comerciales,
                    naming rights y medición de impacto para sponsors. En Saint Mary Hills coordinamos marcas
                    patrocinadoras y sorteos en vivo, maximizando el valor para todos los stakeholders.
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
              <p className="text-xl text-gray-700">Comparación con organizadores deportivos tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Deportivo</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Enfoque</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Gestión Deportiva 360°</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo organización básica</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia del Fan</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Fan Zones + Activaciones</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo competencia</span>
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
                      <span className="text-red-600">Solo eventos locales</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración de Servicios</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Deportivo + Tecnología + Producción</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Servicios fragmentados</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Gestión de Sponsors</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Activaciones Integradas</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Gestión básica</span>
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
                <Trophy className="w-4 h-4 mr-2" />
                ¿Necesitás gestión deportiva profesional?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Llevemos tu evento deportivo <span className="text-yellow-300">al siguiente nivel</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>torneos comunitarios hasta competencias internacionales</strong>, tenemos la experiencia y
                metodología para gestionar la pasión deportiva con profesionalismo total.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Medal className="mr-2 h-5 w-5" />
                  Cotizar Gestión Deportiva
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos Deportivos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Gestión 360°</h3>
                <p className="text-sm opacity-80">Deportivo + Experiencial</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Profesionalismo</h3>
                <p className="text-sm opacity-80">Estándares deportivos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flag className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Escala Internacional</h3>
                <p className="text-sm opacity-80">Mundial Sub-17 2026</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">Saint Mary, Manchester City</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento deportivo merece gestión profesional</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Saint Mary of the Hills (torneo fútbol completo), Manchester City (gestión
                deportiva premium) y Mundial Sub-17 Halterofilia 2026 (propuesta CEO olímpica), nuestra gestión
                deportiva está probada en todos los niveles.
                <strong> Pasión deportiva con profesionalismo total garantizado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
