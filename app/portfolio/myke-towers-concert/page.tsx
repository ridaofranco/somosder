import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Shield,
  Zap,
  Monitor,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Award,
  Calendar,
  MapPin,
  Music,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Myke Towers Gira La Pantera Negra - 6,000+ Asistentes Tecnópolis | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó el control de accesos para Myke Towers en Tecnópolis con 6,000+ asistentes, 12 puntos de validación simultáneos y más de 6,000 validaciones en menos de 90 minutos.",
  keywords: [
    "Myke Towers Argentina gira pantera negra",
    "control accesos Tecnópolis 6000 asistentes",
    "concierto reggaeton Buenos Aires 2024",
    "sistema validación múltiple escaneo",
    "evento musical masivo Argentina",
  ],
  openGraph: {
    title: "Myke Towers Gira La Pantera Negra - 6,000+ Asistentes en Tecnópolis",
    description:
      "Control de ingreso con escaneo ágil para el concierto de Myke Towers en Tecnópolis (Gira La Pantera Negra), gestionando más de 6,000 asistentes con 12 puntos de validación simultáneos.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746634834/IMG-20241030-WA0159_gw0gda.jpg",
        width: 1200,
        height: 630,
        alt: "Myke Towers Gira La Pantera Negra - 6,000+ asistentes en Tecnópolis",
      },
    ],
  },
}

export default function MykeTowersGiraPanteraNegra() {
  const projectStats = [
    { icon: Users, label: "Asistentes", value: "6K+", color: "text-[#FF5C00]" },
    { icon: Target, label: "Puntos Validación", value: "12", color: "text-[#333333]" },
    { icon: Clock, label: "Tiempo Ingreso", value: "90min", color: "text-[#FF5C00]" },
    { icon: Music, label: "Gira", value: "Pantera Negra", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Sistema Escaneo Múltiple",
      icon: Target,
      description: "12 puntos de validación simultáneos para gestionar flujo masivo de 6,000+ asistentes",
    },
    {
      name: "Validación Instantánea",
      icon: Zap,
      description: "Sistema de validación en tiempo real con respuesta inmediata para cada asistente",
    },
    {
      name: "Dashboard Tiempo Real",
      icon: Monitor,
      description: "Monitoreo en vivo que permitía redistribuir personal según flujos de ingreso",
    },
    {
      name: "Ingreso Escalonado",
      icon: Users,
      description: "Protocolo de comunicación previa con asistentes para evitar aglomeraciones",
    },
    {
      name: "Integración Seguridad Venue",
      icon: Shield,
      description: "Coordinación directa con sistema de seguridad de Tecnópolis",
    },
    {
      name: "Reportes Detallados",
      icon: BarChart3,
      description: "Análisis completo de flujo de ingreso y experiencia de asistentes",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Masiva",
      duracion: "8 semanas",
      actividades: [
        "Análisis Tecnópolis para 6,000+ fans",
        "Diseño sistema 12 puntos validación",
        "Coordinación Gira La Pantera Negra",
        "Protocolo comunicación previa asistentes",
      ],
    },
    {
      fase: "Setup Tecnológico",
      duracion: "3 semanas",
      actividades: [
        "Instalación 12 puntos escaneo simultáneos",
        "Dashboard tiempo real configuración",
        "Integración seguridad Tecnópolis",
        "Pruebas sistema validación instantánea",
      ],
    },
    {
      fase: "Ejecución 22 Nov 2024",
      duracion: "1 día",
      actividades: [
        "6,000+ validaciones en 90 minutos",
        "Monitoreo flujos tiempo real",
        "Redistribución personal según demanda",
        "Coordinación ingreso escalonado",
      ],
    },
    {
      fase: "Análisis Post-Show",
      duracion: "1 semana",
      actividades: [
        "Reportes detallados flujo ingreso",
        "Feedback positivo asistentes",
        "Análisis experiencia entrada",
        "Documentación mejores prácticas",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Público Joven Entusiasta",
      descripcion: "Fans muy entusiastas que llegarían mayoritariamente en un período muy corto de tiempo",
      solucion: "Sistema de ingreso escalonado con protocolo de comunicación previa con los asistentes",
    },
    {
      icon: Clock,
      titulo: "Potencial Aglomeraciones",
      descripcion: "Riesgo de generar aglomeraciones por llegada masiva simultánea al venue",
      solucion: "12 puntos de validación simultáneos con dashboard para redistribuir personal según flujos",
    },
    {
      icon: Music,
      titulo: "Expectativa Gira Internacional",
      descripcion: "Mantener estándares internacionales de La Pantera Negra en Tecnópolis",
      solucion: "Integración con sistema de seguridad del venue y reportes detallados de experiencia",
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
            <span className="text-[#333333] font-medium">Myke Towers Gira La Pantera Negra</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Control de Accesos</Badge>
                  <Badge className="bg-white/20 text-white">Evento Musical</Badge>
                  <Badge className="bg-white/20 text-white">6K+ Asistentes</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Myke Towers <span className="text-yellow-300">Argentina</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Gira La Pantera Negra en Tecnópolis.</strong> DER implementó control de ingreso con escaneo
                  ágil para el concierto de <strong>Myke Towers</strong> gestionando
                  <strong>más de 6,000 asistentes</strong> con <strong>12 puntos de validación simultáneos</strong>y más
                  de 6,000 validaciones en menos de 90 minutos.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">6K+</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">12</div>
                    <div className="text-sm opacity-80">Puntos Validación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">90min</div>
                    <div className="text-sm opacity-80">Tiempo Ingreso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Nov</div>
                    <div className="text-sm opacity-80">2024</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>22 Noviembre 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Tecnópolis, Buenos Aires</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Gira La Pantera Negra</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634834/IMG-20241030-WA0159_gw0gda.jpg"
                    alt="Myke Towers Gira La Pantera Negra - 6,000+ asistentes en Tecnópolis"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Myke Towers - Gira La Pantera Negra en Tecnópolis</p>
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
                Gira La <span className="text-[#FF5C00]">Pantera Negra</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Control de ingreso con escaneo ágil para más de 6,000 asistentes en Tecnópolis
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
                Público joven entusiasta con llegada masiva en período corto y potencial aglomeraciones
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
                Sistema <span className="text-[#FF5C00]">Optimizado</span>
              </h2>
              <p className="text-xl text-[#333333]">12 puntos de validación simultáneos con monitoreo en tiempo real</p>
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

      {/* Cronología del Proyecto */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Desarrollo <span className="text-[#FF5C00]">Show</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación masiva al feedback positivo de asistentes</p>
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
                Resultados <span className="text-[#FF5C00]">Comprobados</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros verificables del concierto de Myke Towers en Tecnópolis</p>
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
                        <div className="font-semibold text-[#333333]">Más de 6,000 Validaciones</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          En menos de 90 minutos para el show en Tecnópolis
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Integración con Seguridad Venue</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Coordinación directa con sistema de seguridad de Tecnópolis
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Reportes Detallados</div>
                        <div className="text-sm text-[#333333] opacity-70">De flujo de ingreso y análisis completo</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Feedback Positivo</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          De asistentes sobre la experiencia de entrada
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Musical */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto Musical
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">12 Puntos Validación Simultáneos</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sistema optimizado para eventos musicales masivos
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Ingreso Ordenado y Seguro</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Contribuyendo a la experiencia positiva del público
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Dashboard Tiempo Real</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Redistribución de personal según flujos de ingreso
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Estándares Gira Internacional</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          La Pantera Negra con calidad internacional en Argentina
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
                <Music className="w-4 h-4 mr-2" />
                ¿Tenés un evento musical masivo?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos tu próximo <span className="text-yellow-300">concierto con miles de fans</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos <strong>Myke Towers Gira La Pantera Negra con 6,000+ asistentes</strong> en Tecnópolis
                con 12 puntos de validación simultáneos, podemos asegurar el ingreso ordenado y seguro de tu evento
                musical masivo.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Target className="mr-2 h-5 w-5" />
                  Cotizar Control Accesos
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Consultar Eventos Musicales
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
                <h3 className="font-semibold mb-2">6,000+ Validaciones</h3>
                <p className="text-sm opacity-80">En 90 minutos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">12 Puntos Validación</h3>
                <p className="text-sm opacity-80">Simultáneos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Dashboard Tiempo Real</h3>
                <p className="text-sm opacity-80">Monitoreo continuo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Feedback Positivo</h3>
                <p className="text-sm opacity-80">Asistentes satisfechos</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento musical merece la máxima eficiencia?</h3>
              <p className="text-lg opacity-90">
                <strong>Myke Towers Gira La Pantera Negra</strong> confió en DER para gestionar 6,000+ fans entusiastas
                en Tecnópolis con <strong>12 puntos de validación simultáneos y dashboard en tiempo real</strong>. Tu
                concierto también puede tener el ingreso más ordenado y seguro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
