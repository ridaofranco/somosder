import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Trophy,
  Users,
  Timer,
  CheckCircle,
  Clock,
  Award,
  Target,
  ArrowRight,
  Play,
  Clipboard,
  Network,
  Wrench,
  BarChart3,
  Building,
  Music,
  Globe,
  Medal,
  Flag,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Gestión Deportiva Profesional - Competencias y Torneos | DER EVENT HUB",
  description:
    "Gestión integral de eventos deportivos con experiencia comprobada. Casos reales: Saint Mary of the Hills, Campeonato Mundial Sub 17 Halterofilia Buenos Aires 2026. Cronometraje, premiaciones y ceremonias.",
  keywords: [
    "gestion deportiva",
    "eventos deportivos",
    "cronometraje profesional",
    "saint mary hills torneo",
    "mundial halterofilia 2026",
    "ceremonias deportivas",
    "DER Event Hub deportivo",
  ],
  openGraph: {
    title: "Gestión Deportiva Profesional | DER EVENT HUB",
    description:
      "Experiencia deportiva comprobada en torneos y competencias internacionales. Saint Mary of the Hills y Mundial Sub 17 Halterofilia 2026.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg",
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
      icon: Clipboard,
      title: "Planificación Estratégica",
      description: "Desarrollo completo del evento desde la conceptualización hasta la ejecución final",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Gestión de Participantes",
      description: "Registro, acreditación y coordinación de atletas, equipos y oficiales",
      color: "text-red-500",
    },
    {
      icon: Timer,
      title: "Cronometraje Profesional",
      description: "Sistemas de medición de tiempo precisos y certificados para competencias oficiales",
      color: "text-orange-600",
    },
    {
      icon: Award,
      title: "Ceremonias y Premiación",
      description: "Organización de ceremonias de apertura, clausura y premiación memorable",
      color: "text-red-600",
    },
    {
      icon: Network,
      title: "Coordinación con Federaciones",
      description: "Articulación con federaciones deportivas, clubes y organismos oficiales",
      color: "text-orange-500",
    },
    {
      icon: BarChart3,
      title: "Gestión de Resultados",
      description: "Seguimiento de resultados en tiempo real, rankings y estadísticas oficiales",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Building,
      title: "Torneos Institucionales",
      description: "Competencias educativas y comunitarias",
      examples: ["Saint Mary Hills torneo fútbol", "Campeonatos escolares", "Ligas barriales organizadas"],
    },
    {
      icon: Trophy,
      title: "Eventos Deportivos Premium",
      description: "Experiencias deportivas de alto nivel",
      examples: ["Manchester City experiencias", "Exhibiciones profesionales", "Activaciones de marca deportiva"],
    },
    {
      icon: Globe,
      title: "Competencias Internacionales",
      description: "Eventos de escala mundial",
      examples: ["Mundial Sub-17 Halterofilia 2026", "Campeonatos federativos", "Competencias olímpicas"],
    },
    {
      icon: Medal,
      title: "Eventos Corporativos Deportivos",
      description: "Activaciones deportivas empresariales",
      examples: ["Torneos corporativos", "Team building deportivo", "Competencias de empleados"],
    },
  ]

  const tecnologia = [
    {
      feature: "Planificación Deportiva",
      description: "Fixtures, inscripciones, categorías, reglamentos y coordinación con federaciones oficiales",
      icon: Clipboard,
    },
    {
      feature: "Operativa de Competencia",
      description: "Arbitrajes certificados, cronometraje, resultados en vivo y protocolos deportivos",
      icon: Timer,
    },
    {
      feature: "Gestión de Stakeholders",
      description: "Atletas, entrenadores, dirigentes, sponsors, medios y autoridades deportivas",
      icon: Users,
    },
    {
      feature: "Experiencia Integral",
      description: "Ceremonias, premiaciones, fan zones, activaciones y legado deportivo sostenible",
      icon: Trophy,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Saint Mary of the Hills",
      asistentes: "Torneo",
      tecnologia: "Gestión Integral + Sponsors",
      resultado: "Torneo exitoso completo",
      badge: "Institucional",
    },
    {
      nombre: "Campeonato Mundial Sub 17 Halterofilia Buenos Aires 2026",
      asistentes: "Internacional",
      tecnologia: "Consultoría CEO Deportiva",
      resultado: "Propuesta integral aprobada",
      badge: "Mundial",
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
                  <Badge className="bg-orange-500 text-white">Experiencia Deportiva</Badge>
                  <Badge className="bg-red-500 text-white">Competencias Oficiales</Badge>
                  <Badge className="bg-white text-orange-600">Mundial 2026</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Gestión <span className="text-yellow-300">Deportiva</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Gestionamos pasiones deportivas con profesionalismo</strong> y experiencia comprobada en competencias oficiales. 
                  Desde <strong>torneos institucionales hasta campeonatos mundiales</strong> con cronometraje certificado y ceremonias memorables.
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
                    <div className="text-3xl font-bold text-yellow-300">Pro</div>
                    <div className="text-sm opacity-80">Cronometraje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Deportivo</div>
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
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
                    alt="Gestión Deportiva DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Gestión deportiva profesional - Saint Mary y Mundial 2026</p>
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
                Experiencia <span className="text-orange-500">Deportiva</span>
              </h2>
              <p className="text-xl text-gray-700">6 pilares de nuestra gestión deportiva profesional</p>
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
              <p className="text-xl text-gray-700">Adaptamos la gestión según el nivel deportivo</p>
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
              <p className="text-xl text-gray-700">Casos donde aplicamos gestión deportiva</p>
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

      {/* FAQ Específico */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre gestión deportiva</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye exactamente la gestión deportiva integral?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye planificación estratégica completa, gestión de inscripciones y participantes, coordinación con federaciones deportivas, cronometraje profesional certificado, ceremonias de apertura y premiación, y gestión de resultados en tiempo real. Como en Saint Mary of the Hills manejamos el torneo completo con sponsors incluidos, y para el Mundial Sub-17 Halterofilia 2026 desarrollamos la consultoría CEO deportiva integral.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden manejar competencias internacionales como el Mundial Sub-17?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, tenemos experiencia comprobada en eventos deportivos internacionales. Para el Campeonato Mundial Sub-17 Halterofilia Buenos Aires 2026 desarrollamos la consultoría CEO deportiva completa, incluyendo estructura organizacional, protocolos internacionales, coordinación con federaciones mundiales, y gestión de delegaciones internacionales. Nuestra experiencia deportiva nos permite manejar la complejidad de eventos de nivel mundial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tipo de cronometraje profesional utilizan?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Utilizamos sistemas de cronometraje certificados y precisos según el tipo de competencia. Para eventos oficiales trabajamos con equipamiento homologado por federaciones, cronometraje electrónico con respaldo manual, sistemas de foto finish cuando es necesario, y resultados en tiempo real. Todos nuestros sistemas cumplen con estándares internacionales para competencias oficiales y rankings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo coordinan con federaciones deportivas oficiales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Tenemos experiencia directa trabajando con federaciones deportivas nacionales e internacionales. Coordinamos homologaciones, permisos oficiales, reglamentos específicos, designación de árbitros certificados, y validación de resultados para rankings oficiales. Para el Mundial Sub-17 Halterofilia trabajamos directamente con la federación internacional, y en Saint Mary coordinamos con organismos locales para validación oficial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Incluyen ceremonias de apertura y premiación?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, las ceremonias son parte integral de nuestra gestión deportiva. Organizamos ceremonias de apertura memorables, premiaciones oficiales con protocolos deportivos, himnos nacionales, entrega de medallas y trofeos, y ceremonias de clausura. Cada ceremonia respeta las tradiciones deportivas y crea momentos memorables para atletas y espectadores, adaptándose al nivel y magnitud de la competencia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden gestionar desde torneos barriales hasta campeonatos mundiales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Absolutamente. Nuestra experiencia deportiva nos permite adaptarnos a cualquier escala: desde torneos institucionales como Saint Mary of the Hills hasta competencias mundiales como el Campeonato Sub-17 Halterofilia 2026. Escalamos recursos, protocolos y servicios según el nivel de la competencia, manteniendo siempre profesionalismo y estándares de calidad apropiados para cada evento deportivo.
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
                <Trophy className="w-4 h-4 mr-2" />
                ¿Necesitás gestión deportiva profesional?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Experiencia deportiva que <span className="text-yellow-300">transforma competencias</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Saint Mary of the Hills hasta el Mundial Sub-17 Halterofilia Buenos Aires 2026</strong>, 
                nuestra experiencia deportiva garantiza competencias profesionales de cualquier escala.
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
                <h3 className="font-semibold mb-2">Experiencia Deportiva</h3>
                <p className="text-sm opacity-80">Nuestro fuerte</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Cronometraje Pro</h3>
                <p className="text-sm opacity-80">Certificado oficial</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Escala Mundial</h3>
                <p className="text-sm opacity-80">Mundial 2026</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Ceremonias Memorables</h3>
                <p className="text-sm opacity-80">Apertura y premiación</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu competencia merece la mejor gestión deportiva</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Saint Mary of the Hills (torneo integral con sponsors) y 
                Campeonato Mundial Sub-17 Halterofilia Buenos Aires 2026 (consultoría CEO deportiva), 
                nuestra experiencia deportiva está probada en competencias de todas las escalas.
                <strong> Cronometraje profesional, ceremonias memorables y gestión integral garantizada.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}