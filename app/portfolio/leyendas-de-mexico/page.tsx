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
  BarChart3,
  Target,
  Award,
  Smartphone,
  Calendar,
  MapPin,
  Music,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Leyendas de México - 25,000+ Asistentes Control Accesos Tecnópolis | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó el control de accesos para Leyendas de México en Tecnópolis con 25,000+ asistentes en dos ediciones, códigos QR dinámicos y menos de 45 segundos por persona.",
  keywords: [
    "Leyendas de México Tecnópolis 25000 asistentes",
    "control accesos masivo Argentina 2024 2025",
    "festival música códigos QR dinámicos",
    "evento masivo Tecnópolis Buenos Aires",
    "sistema acceso 45 segundos por persona",
  ],
  openGraph: {
    title: "Leyendas de México - 25,000+ Asistentes en Tecnópolis",
    description:
      "Control total de accesos para el evento 'Leyendas de Mexico' en Tecnópolis durante Septiembre 2024 y Febrero 2025, gestionando 25,000+ asistentes con códigos QR dinámicos.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746635385/14-IMG_0544_ydcxsn.jpg",
        width: 1200,
        height: 630,
        alt: "Leyendas de México - 25,000+ asistentes en Tecnópolis",
      },
    ],
  },
}

export default function LeyendasDeMexicoPage() {
  const projectStats = [
    { icon: Users, label: "Asistentes", value: "25K+", color: "text-[#FF5C00]" },
    { icon: Calendar, label: "Ediciones", value: "2", color: "text-[#333333]" },
    { icon: Clock, label: "Tiempo Ingreso", value: "<45s", color: "text-[#FF5C00]" },
    { icon: Shield, label: "Incidentes", value: "0", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Códigos QR Dinámicos",
      icon: Smartphone,
      description: "Sistema de acreditación con códigos QR dinámicos para acceso rápido y seguro",
    },
    {
      name: "Puntos Control Estratégicos",
      icon: Target,
      description: "Organización estratégica de puntos de control para optimizar flujo de 25,000+ asistentes",
    },
    {
      name: "Soporte Técnico Tiempo Real",
      icon: Monitor,
      description: "Equipo técnico en tiempo real resolviendo problemas de ingreso en minutos",
    },
    {
      name: "Personal Capacitado",
      icon: Users,
      description: "Personal especializado en cada punto de acceso para gestión eficiente",
    },
    {
      name: "Centro Control Centralizado",
      icon: BarChart3,
      description: "Centro de control centralizado para monitoreo y coordinación integral",
    },
    {
      name: "Seguridad Anti-Falsificación",
      icon: Shield,
      description: "Sistema robusto para prevenir falsificaciones y garantizar seguridad total",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Masiva",
      duracion: "10 semanas",
      actividades: [
        "Análisis Tecnópolis para 25,000+ asistentes",
        "Diseño sistema QR dinámicos",
        "Coordinación dos ediciones festival",
        "Estrategia puntos control optimizados",
      ],
    },
    {
      fase: "Desarrollo e Implementación",
      duracion: "6 semanas",
      actividades: [
        "Configuración códigos QR dinámicos",
        "Setup puntos control estratégicos",
        "Centro control centralizado",
        "Capacitación personal especializado",
      ],
    },
    {
      fase: "Ejecución Ediciones",
      duracion: "2 eventos",
      actividades: [
        "Septiembre 2024: Primera edición",
        "Febrero 2025: Segunda edición",
        "25,000+ validaciones totales",
        "Soporte técnico tiempo real",
      ],
    },
    {
      fase: "Resultados y Análisis",
      duracion: "2 semanas",
      actividades: [
        "Análisis flujo 25,000+ asistentes",
        "Cero incidentes seguridad registrados",
        "Tiempo promedio <45 segundos",
        "Documentación mejores prácticas",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Evento Masivo 25,000+ Asistentes",
      descripcion: "Gestionar un evento masivo en Tecnópolis garantizando seguridad y eficiencia para miles de fans",
      solucion: "Sistema de acreditación con códigos QR dinámicos y puntos de control estratégicamente organizados",
    },
    {
      icon: Shield,
      titulo: "Prevención Falsificaciones",
      descripcion: "Garantizar seguridad total previniendo falsificaciones en evento de gran magnitud",
      solucion: "Códigos QR dinámicos con sistema robusto anti-falsificación y validación en tiempo real",
    },
    {
      icon: Target,
      titulo: "Adaptación Venue Específico",
      descripcion: "Adaptar sistema a características específicas de Tecnópolis manteniendo eficiencia",
      solucion: "Centro de control centralizado con personal capacitado y soporte técnico inmediato",
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
            <span className="text-[#333333] font-medium">Leyendas de México</span>
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
                  <Badge className="bg-white/20 text-white">Festival Masivo</Badge>
                  <Badge className="bg-white/20 text-white">25K+ Asistentes</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Leyendas de <span className="text-yellow-300">México</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Control total de accesos en Tecnópolis.</strong> DER implementó sistema integral para el
                  evento <strong>'Leyendas de Mexico'</strong> durante <strong>Septiembre 2024 y Febrero 2025</strong>,
                  gestionando <strong>más de 25,000 asistentes</strong> con códigos QR dinámicos y
                  <strong>menos de 45 segundos por persona</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">25K+</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2</div>
                    <div className="text-sm opacity-80">Ediciones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">&lt;45s</div>
                    <div className="text-sm opacity-80">Tiempo Ingreso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">0</div>
                    <div className="text-sm opacity-80">Incidentes</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Sep 2024 - Feb 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Tecnópolis, Argentina</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Festival Leyendas</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635385/14-IMG_0544_ydcxsn.jpg"
                    alt="Leyendas de México - 25,000+ asistentes en Tecnópolis"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Leyendas de México - Control masivo de accesos en Tecnópolis</p>
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
                Festival <span className="text-[#FF5C00]">Masivo</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Control total de accesos garantizando seguridad y agilidad para 25,000+ asistentes
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
                Gestión masiva en Tecnópolis, seguridad total y adaptación a venue específico
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
                Tecnología avanzada con soporte técnico en tiempo real para 25,000+ asistentes
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

      {/* Cronología del Proyecto */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Desarrollo <span className="text-[#FF5C00]">Festival</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación masiva a cero incidentes de seguridad</p>
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
              <p className="text-xl text-[#333333]">
                Logros verificables del festival Leyendas de México en Tecnópolis
              </p>
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
                        <div className="font-semibold text-[#333333]">Gestión Eficiente 25,000+ Asistentes</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Total estimado de ambas ediciones en Argentina
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Tiempo Promedio Ingreso</div>
                        <div className="text-sm text-[#333333] opacity-70">Menos de 45 segundos por persona</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Cero Incidentes Seguridad</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          En accesos en Tecnópolis durante ambas ediciones
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Resolución Inmediata</div>
                        <div className="text-sm text-[#333333] opacity-70">De problemas de ingreso en tiempo real</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Festival */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto Festival
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Smartphone className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Códigos QR Dinámicos</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sistema robusto anti-falsificación para evento masivo
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Puntos Control Estratégicos</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Optimización de flujo para 25,000+ asistentes
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Soporte Técnico Tiempo Real</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Centro control centralizado con personal capacitado
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Experiencia Fluida</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sin retrasos ni aglomeraciones para los asistentes
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
                ¿Tenés un festival masivo?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos tu próximo <span className="text-yellow-300">evento de miles de asistentes</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos <strong>Leyendas de México con 25,000+ asistentes</strong> en Tecnópolis durante dos
                ediciones con códigos QR dinámicos y cero incidentes de seguridad, podemos garantizar el control total
                de tu evento masivo.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Cotizar Sistema QR
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Consultar Eventos Masivos
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
                <h3 className="font-semibold mb-2">25,000+ Asistentes</h3>
                <p className="text-sm opacity-80">Gestión eficiente</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Menos 45 Segundos</h3>
                <p className="text-sm opacity-80">Por persona</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Cero Incidentes</h3>
                <p className="text-sm opacity-80">Seguridad total</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">QR Dinámicos</h3>
                <p className="text-sm opacity-80">Anti-falsificación</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu festival merece el control más avanzado?</h3>
              <p className="text-lg opacity-90">
                <strong>Leyendas de México</strong> confió en DER para gestionar 25,000+ asistentes en Tecnópolis
                durante dos ediciones con <strong>códigos QR dinámicos, soporte técnico en tiempo real</strong> y cero
                incidentes de seguridad. Tu evento masivo también puede tener la máxima eficiencia y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
