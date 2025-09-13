import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  MapPin,
  Zap,
  Monitor,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Target,
  Award,
  TrendingUp,
  Smartphone,
  Shield,
  Calendar,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Campus Party Entre Ríos 2025 - 13,000+ Inscriptos Primera Edición Provincial | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó Campus Party Entre Ríos 2025: primera edición provincial con 13,000+ inscriptos, 5,000+ asistentes presenciales y posicionamiento como capital de innovación.",
  keywords: [
    "Campus Party Entre Ríos 2025 13000 inscriptos",
    "primera edición provincial tecnológica",
    "5000 asistentes presenciales Paraná",
    "capital innovación Entre Ríos",
    "evento tecnológico provincial Argentina",
  ],
  openGraph: {
    title: "Campus Party Entre Ríos 2025 - 13,000+ Inscriptos Primera Edición Provincial",
    description:
      "Primera edición provincial con 13,000+ inscriptos, 5,000+ asistentes presenciales y posicionamiento de Entre Ríos como protagonista de la economía del conocimiento.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Campus+Party+Entre+Rios+2025",
        width: 1200,
        height: 630,
        alt: "Campus Party Entre Ríos 2025 - 13000 inscriptos primera edición provincial",
      },
    ],
  },
}

export default function CampusPartyEntreRios2025Page() {
  const projectStats = [
    { icon: Users, label: "Inscriptos", value: "13,000+", color: "text-[#FF5C00]" },
    { icon: Building, label: "Presenciales", value: "5,000+", color: "text-[#333333]" },
    { icon: Calendar, label: "Jornadas", value: "2", color: "text-[#FF5C00]" },
    { icon: Award, label: "Provincial", value: "1°", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Acreditaciones Digitales",
      icon: Shield,
      description: "Sistema integral adaptado al Centro Provincial de Convenciones Paraná para 5,000+ asistentes",
    },
    {
      name: "Pre-registro Online",
      icon: Smartphone,
      description: "Pre-registro obligatorio para gestionar eficientemente 13,000+ inscriptos masivos",
    },
    {
      name: "Códigos QR Dinámicos",
      icon: Zap,
      description: "Sistema QR dinámico con múltiples puntos de validación distribuidos estratégicamente",
    },
    {
      name: "Dashboard Tiempo Real",
      icon: Monitor,
      description: "Monitoreo en vivo que permitió decisiones operativas inmediatas durante las jornadas",
    },
    {
      name: "Flujo Personalizado",
      icon: Target,
      description: "Diseño de flujo adaptado específicamente a la arquitectura del venue provincial",
    },
    {
      name: "Soporte Técnico 24/7",
      icon: BarChart3,
      description: "Resolución inmediata de problemas durante las dos jornadas intensas del evento",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Adaptación Provincial",
      duracion: "8 semanas",
      actividades: [
        "Análisis Centro Convenciones Paraná",
        "Adaptación sistema arquitectura específica",
        "Diseño flujo personalizado",
        "Planificación 13,000+ inscriptos",
      ],
    },
    {
      fase: "Implementación Digital",
      duracion: "4 semanas",
      actividades: [
        "Pre-registro online obligatorio",
        "Códigos QR dinámicos desarrollo",
        "Sistema escaneo distribuido",
        "Dashboard tiempo real setup",
      ],
    },
    {
      fase: "Ejecución Intensiva",
      duracion: "2 jornadas",
      actividades: [
        "Gestión 5,000+ asistentes presenciales",
        "Monitoreo flujos tiempo real",
        "Decisiones operativas inmediatas",
        "Soporte técnico continuo",
      ],
    },
    {
      fase: "Impacto Provincial",
      duracion: "2 semanas",
      actividades: [
        "Análisis asistencia por áreas",
        "Reporte posicionamiento Entre Ríos",
        "Evaluación capital innovación",
        "Documentación primera edición",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Award,
      titulo: "Primera Edición Provincial",
      descripcion: "Adaptar Campus Party a Entre Ríos como primer evento tecnológico provincial masivo",
      solucion: "Sistema adaptado específicamente al Centro Provincial de Convenciones Paraná",
    },
    {
      icon: Users,
      titulo: "13,000+ Inscriptos Masivos",
      descripcion: "Gestionar alto volumen de inscriptos y 5,000+ asistentes presenciales simultáneos",
      solucion: "Pre-registro obligatorio con códigos QR dinámicos y sistema escaneo distribuido",
    },
    {
      icon: Globe,
      titulo: "Posicionamiento Innovación",
      descripcion: "Contribuir a visión de Entre Ríos como nuevo polo de innovación y economía conocimiento",
      solucion: "Dashboard tiempo real para optimizar experiencia y demostrar capacidad tecnológica",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-[#333333]">
            <Link href="/" className="hover:text-[#FF5C00]">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:text-[#FF5C00]">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#333333] font-medium">Campus Party Entre Ríos 2025</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5C00] via-[#E54F00] to-[#CC4400] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div>
                <Link href="/portfolio" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Portfolio
                </Link>

                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-white text-[#FF5C00]">Tecnológico Provincial</Badge>
                  <Badge className="bg-white/20 text-white">Primera Edición</Badge>
                  <Badge className="bg-white/20 text-white">Hito Provincial</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Campus Party <span className="text-yellow-300">Entre Ríos 2025</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Primer Campus Party provincial con hito histórico.</strong> DER gestionó integralmente la
                  primera edición con <strong>13,000+ inscriptos y 5,000+ asistentes presenciales</strong> durante dos
                  jornadas intensas, posicionando a{" "}
                  <strong>Entre Ríos como protagonista de la economía del conocimiento</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">13K+</div>
                    <div className="text-sm opacity-80">Inscriptos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5K+</div>
                    <div className="text-sm opacity-80">Presenciales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2</div>
                    <div className="text-sm opacity-80">Jornadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1°</div>
                    <div className="text-sm opacity-80">Provincial</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Centro Provincial Convenciones Paraná</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Primera Edición</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Campus+Party+Entre+Rios+2025+-+13000+inscriptos"
                    alt="Campus Party Entre Ríos 2025 - 13000 inscriptos primera edición provincial"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Campus Party Entre Ríos 2025 - 13,000+ inscriptos, 5,000+ presenciales, primera edición provincial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Hito <span className="text-[#FF5C00]">Provincial</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Evento más importante de tecnología e innovación realizado por primera vez en Entre Ríos
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projectStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-[#333333] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#333333] opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                El <span className="text-[#FF5C00]">Desafío</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Primera edición provincial con 13,000+ inscriptos en Centro Provincial de Convenciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {desafiosSoluciones.map((desafio, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mb-4">
                      <desafio.icon className="w-6 h-6 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">{desafio.titulo}</h3>
                    <p className="text-[#333333] text-sm mb-4">
                      <strong>Desafío:</strong> {desafio.descripcion}
                    </p>
                    <p className="text-[#FF5C00] text-sm">
                      <strong>Solución:</strong> {desafio.solucion}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sistema Integral */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Sistema <span className="text-[#FF5C00]">Integral</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Acreditaciones digitales que optimizaron la experiencia de 5,000+ asistentes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviciosImplementados.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">{service.name}</h3>
                    <p className="text-[#333333] text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desarrollo Provincial */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Desarrollo <span className="text-[#FF5C00]">Provincial</span>
              </h2>
              <p className="text-xl text-[#333333]">
                De la adaptación específica al impacto en economía del conocimiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cronologiaProyecto.map((fase, index) => (
                <Card
                  key={index}
                  className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#FF5C00] text-white">Fase {index + 1}</Badge>
                      <span className="text-sm text-[#333333] opacity-70">{fase.duracion}</span>
                    </div>
                    <CardTitle className="text-lg text-[#333333]">{fase.fase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fase.actividades.map((actividad, actividadIndex) => (
                        <li key={actividadIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-[#FF5C00] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#333333]">{actividad}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {index < cronologiaProyecto.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-[#FF5C00] opacity-30"></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Verificables */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Verificables</span>
              </h2>
              <p className="text-xl text-[#333333]">Impacto real del primer Campus Party provincial</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Operativos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Operativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Gestión Eficiente 5,000+ Presenciales</div>
                        <div className="text-sm text-[#333333] opacity-70">De 13,000+ inscriptos totales</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Tiempo Ingreso Optimizado</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Para alto flujo durante jornadas intensas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Monitoreo Tiempo Real</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Asistencia por áreas con decisiones inmediatas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Experiencia Positiva</div>
                        <div className="text-sm text-[#333333] opacity-70">Para miles de asistentes sin incidentes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Provincial */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto Provincial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Posicionamiento Entre Ríos</div>
                        <div className="text-sm text-[#333333] opacity-70">Como capital de innovación y tecnología</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Economía del Conocimiento</div>
                        <div className="text-sm text-[#333333] opacity-70">Protagonismo en desarrollo tecnológico</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Oportunidades Jóvenes</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Fomento emprendedores e innovación regional
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Política Pública Clara</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Contribución a visión provincial tecnológica
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF5C00] via-[#E54F00] to-[#CC4400] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                ¿Tenés un evento tecnológico provincial?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Posicionemos tu provincia como <span className="text-yellow-300">capital de innovación</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos Campus Party Entre Ríos con <strong>13,000+ inscriptos y 5,000+ presenciales</strong>,
                posicionando la provincia como protagonista de la economía del conocimiento, podemos hacer lo mismo con
                tu evento tecnológico.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Cotizar Evento Tecnológico
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Hablar sobre Innovación Provincial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">13,000+ Inscriptos</h3>
                <p className="text-sm opacity-80">Capacidad masiva</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Dashboard Tiempo Real</h3>
                <p className="text-sm opacity-80">Decisiones inmediatas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Impacto Provincial</h3>
                <p className="text-sm opacity-80">Posicionamiento innovación</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Primera Edición</h3>
                <p className="text-sm opacity-80">Hito tecnológico</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu provincia merece ser capital de innovación?</h3>
              <p className="text-lg opacity-90">
                Campus Party Entre Ríos confió en DER para su primer evento provincial masivo:{" "}
                <strong>13,000+ inscriptos, 5,000+ asistentes presenciales</strong> y posicionamiento como protagonista
                de la economía del conocimiento. Tu evento tecnológico también puede marcar un hito provincial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
