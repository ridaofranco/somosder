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
  Monitor,
  CheckCircle,
  ArrowRight,
  Target,
  Award,
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Clock,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Espacio Shell 2024 - Face ID 1,300 Ejecutivos Control Accesos | DER EVENT HUB",
  description:
    "Descubrí cómo DER implementó Face ID avanzado para Shell Argentina con 1,300 asistentes ejecutivos, validación en 2 segundos para control de accesos corporativo premium.",
  keywords: [
    "Espacio Shell 2024 Face ID ejecutivos",
    "Shell Argentina control accesos 1300",
    "reconocimiento facial 2 segundos validación",
    "Face ID avanzado control accesos corporativo",
    "tecnología accesos Shell Argentina",
  ],
  openGraph: {
    title: "Espacio Shell 2024 - Face ID Control Accesos 1,300 Ejecutivos Shell Argentina",
    description:
      "Control de accesos corporativo Shell Argentina con tecnología Face ID avanzado para 1,300 asistentes. Reconocimiento facial en 2 segundos.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png",
        width: 1200,
        height: 630,
        alt: "Espacio Shell 2024 - Face ID control accesos 1,300 asistentes",
      },
    ],
  },
}

export default function EspacioShell2024Page() {
  const projectStats = [
    { icon: Users, label: "Ejecutivos", value: "1,300", color: "text-[#FF5C00]" },
    { icon: Clock, label: "Validación", value: "2s", color: "text-[#333333]" },
    { icon: Eye, label: "Tecnología", value: "Face ID", color: "text-[#FF5C00]" },
    { icon: Shield, label: "Seguridad", value: "Máxima", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Face ID Avanzado",
      icon: Eye,
      description: "Reconocimiento facial para 1,300 asistentes corporativos con validación en 2 segundos",
    },
    {
      name: "Control Accesos Corporativo",
      icon: Shield,
      description: "Sistema de control de accesos especializado para evento Shell Argentina",
    },
    {
      name: "Dashboard Tiempo Real",
      icon: Monitor,
      description: "Monitoreo en tiempo real con métricas de acceso corporativo",
    },
    {
      name: "Base Datos Ejecutivos",
      icon: Users,
      description: "Gestión de 1,300 perfiles registrados Shell Argentina",
    },
    {
      name: "Backup QR Integrado",
      icon: Smartphone,
      description: "Sistema dual Face ID + QR para máxima confiabilidad",
    },
    {
      name: "Soporte Técnico Premium",
      icon: Target,
      description: "Soporte técnico especializado durante todo el evento corporativo",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Corporativa",
      duracion: "6 semanas",
      actividades: [
        "Briefing Shell Argentina",
        "Diseño Face ID personalizado",
        "Protocolos seguridad corporativa",
        "Registro 1,300 ejecutivos",
      ],
    },
    {
      fase: "Desarrollo Técnico",
      duracion: "4 semanas",
      actividades: [
        "Setup Face ID avanzado",
        "Pruebas reconocimiento facial",
        "Integración sistema Shell",
        "Configuración backup QR",
      ],
    },
    {
      fase: "Ejecución Evento",
      duracion: "2 días",
      actividades: [
        "Control accesos Face ID",
        "Monitoreo tiempo real",
        "Soporte técnico continuo",
        "1,300 validaciones exitosas",
      ],
    },
    {
      fase: "Análisis y Cierre",
      duracion: "1 semana",
      actividades: [
        "Reportes accesos Shell",
        "Métricas sistema Face ID",
        "Evaluación rendimiento",
        "Documentación proyecto",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Eye,
      titulo: "Face ID Masivo Corporativo",
      descripcion: "1,300 ejecutivos con reconocimiento facial simultáneo en evento Shell Argentina",
      solucion: "Sistema Face ID avanzado con validación en 2 segundos y base datos corporativa",
    },
    {
      icon: Shield,
      titulo: "Seguridad Corporativa Máxima",
      descripcion: "Máximo nivel de seguridad requerido para evento corporativo Shell",
      solucion: "Protocolos premium con backup QR integrado y soporte técnico especializado",
    },
    {
      icon: Building,
      titulo: "Estándares Shell Internacional",
      descripcion: "Cumplir con los altos estándares corporativos de Shell Argentina",
      solucion: "Control de accesos especializado con tecnología avanzada y monitoreo continuo",
    },
  ]

  const faceIdFeatures = [
    {
      name: "Reconocimiento 2 Segundos",
      description: "Validación facial instantánea para ejecutivos",
      icon: Clock,
    },
    {
      name: "Base de Datos Corporativa",
      description: "1,300 perfiles registrados Shell Argentina",
      icon: Users,
    },
    {
      name: "Backup QR Integrado",
      description: "Sistema dual para máxima confiabilidad",
      icon: Smartphone,
    },
    {
      name: "Dashboard Premium",
      description: "Métricas de acceso en tiempo real",
      icon: Monitor,
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
            <span className="text-[#333333] font-medium">Espacio Shell 2024</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Corporativo</Badge>
                  <Badge className="bg-white/20 text-white">Face ID</Badge>
                  <Badge className="bg-white/20 text-white">Shell Argentina</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Espacio Shell <span className="text-yellow-300">2024</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Control de accesos corporativo Shell Argentina.</strong> DER implementó
                  <strong> tecnología Face ID avanzado para 1,300 asistentes</strong> ejecutivos con{" "}
                  <strong>reconocimiento facial en 2 segundos</strong> y sistema de control de accesos premium para
                  evento corporativo.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1,300</div>
                    <div className="text-sm opacity-80">Ejecutivos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2s</div>
                    <div className="text-sm opacity-80">Validación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Face ID</div>
                    <div className="text-sm opacity-80">Tecnología</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Máxima</div>
                    <div className="text-sm opacity-80">Seguridad</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Argentina</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Evento Corporativo</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
                    alt="Espacio Shell 2024 - Face ID control accesos 1,300 asistentes"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Espacio Shell 2024 - Face ID control accesos 1,300 asistentes</p>
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
                Face ID <span className="text-[#FF5C00]">Corporativo</span>
              </h2>
              <p className="text-xl text-[#333333]">Tecnología de reconocimiento facial para Shell Argentina</p>
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
                Control de accesos corporativo de máximo nivel para Shell Argentina
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

      {/* Control de Accesos */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Control <span className="text-[#FF5C00]">Accesos</span>
              </h2>
              <p className="text-xl text-[#333333]">Sistema Face ID especializado para evento corporativo Shell</p>
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
                Desarrollo <span className="text-[#FF5C00]">Proyecto</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación Shell a la implementación Face ID</p>
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

      {/* Face ID Avanzado */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Face ID <span className="text-[#FF5C00]">Avanzado</span>
              </h2>
              <p className="text-xl text-[#333333]">Reconocimiento facial en 2 segundos para 1,300 ejecutivos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faceIdFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-[#FF5C00]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">{feature.name}</h3>
                    </div>
                    <p className="text-[#333333]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Shell */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Shell</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros verificables del control de accesos Shell Argentina</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Técnicos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Técnicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">1,300 Validaciones Exitosas</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Todos los ejecutivos procesados correctamente
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Promedio 2 Segundos</div>
                        <div className="text-sm text-[#333333] opacity-70">Tiempo de validación por persona</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Seguridad Máxima</div>
                        <div className="text-sm text-[#333333] opacity-70">Estándares Shell Argentina cumplidos</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smartphone className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Sistema Dual Confiable</div>
                        <div className="text-sm text-[#333333] opacity-70">Face ID + backup QR integrado</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Corporativo */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto Corporativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Estándares Internacionales</div>
                        <div className="text-sm text-[#333333] opacity-70">Control de accesos nivel Shell global</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Dashboard Premium</div>
                        <div className="text-sm text-[#333333] opacity-70">Métricas de acceso en tiempo real</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Soporte Técnico Especializado</div>
                        <div className="text-sm text-[#333333] opacity-70">Atención continua durante el evento</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Evento Exitoso</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Shell Argentina completamente satisfecho
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
                <Building className="w-4 h-4 mr-2" />
                ¿Necesitás Face ID para tu evento corporativo?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Implementemos <span className="text-yellow-300">Face ID avanzado en tu evento</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si <strong>Shell Argentina confió en nosotros para 1,300 ejecutivos</strong> con Face ID y validación en
                2 segundos, tu evento corporativo también puede tener la mejor tecnología de control de accesos.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Cotizar Face ID Corporativo
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Demo Face ID
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Face ID 2s</h3>
                <p className="text-sm opacity-80">Validación instantánea</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">1,300 Ejecutivos</h3>
                <p className="text-sm opacity-80">Capacidad corporativa</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Seguridad Máxima</h3>
                <p className="text-sm opacity-80">Estándares Shell</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Shell Argentina</h3>
                <p className="text-sm opacity-80">Cliente corporativo</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento corporativo merece Face ID?</h3>
              <p className="text-lg opacity-90">
                <strong>Shell Argentina</strong> eligió nuestro Face ID avanzado para sus 1,300 ejecutivos. Validación
                en 2 segundos y sistema de control de accesos premium. Tu evento corporativo también puede tener la
                mejor tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
