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
  Globe,
  Target,
  Award,
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Eye,
  Brain,
  Cpu,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Wave Conference 2023 - Control Accesos 5,000+ Asistentes IA | DER EVENT HUB",
  description:
    "Descubrí cómo DER implementó control de accesos digital para Wave Conference 2023 con 5,000+ asistentes, pre-registro Eventbrite, QR dinámico y dashboard tiempo real en el Parque de Innovación.",
  keywords: [
    "Wave Conference 2023 control accesos IA",
    "Parque Innovación Buenos Aires 5000 asistentes",
    "acreditaciones digitales Eventbrite QR dinámico",
    "evento inteligencia artificial Argentina",
    "Nvidia IBM Quantum Globant Microsoft",
  ],
  openGraph: {
    title: "Wave Conference 2023 - Control Accesos Digital 5,000+ Asistentes IA",
    description:
      "Control de accesos y acreditaciones para Wave Conference 2023, el evento de IA más importante de Argentina con 5,000+ asistentes en el Parque de Innovación.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/wave-conference-2023.jpg",
        width: 1200,
        height: 630,
        alt: "Wave Conference 2023 - Control accesos digital 5,000+ asistentes",
      },
    ],
  },
}

export default function WaveConference2023Page() {
  const projectStats = [
    { icon: Users, label: "Asistentes", value: "5,000+", color: "text-[#FF5C00]" },
    { icon: Brain, label: "Temática", value: "IA", color: "text-[#333333]" },
    { icon: Smartphone, label: "Sistema", value: "Digital", color: "text-[#FF5C00]" },
    { icon: Globe, label: "Acceso", value: "Gratuito", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Control Accesos Digital",
      icon: Shield,
      description: "Sistema integral de acreditaciones digitales para gestión eficiente de 5,000+ asistentes",
    },
    {
      name: "Pre-registro Eventbrite",
      icon: Smartphone,
      description: "Integración con Eventbrite para obtener acreditación digital antes del evento",
    },
    {
      name: "QR Dinámico Avanzado",
      icon: Target,
      description: "Tecnología QR dinámica para prevenir duplicaciones y garantizar máxima seguridad",
    },
    {
      name: "Dashboard Tiempo Real",
      icon: Monitor,
      description: "Monitoreo en vivo de ocupación por espacios y decisiones operativas inmediatas",
    },
    {
      name: "Múltiples Puntos Acceso",
      icon: MapPin,
      description: "Puntos de acceso estratégicamente ubicados para flujo optimizado",
    },
    {
      name: "Validación Tiempo Real",
      icon: Zap,
      description: "Sistema de validación instantánea con múltiples checkpoints simultáneos",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Digital",
      duracion: "8 semanas",
      actividades: [
        "Briefing Wave Conference 2023",
        "Integración sistema Eventbrite",
        "Diseño flujo pre-registro digital",
        "Mapeo espacios Parque Innovación",
      ],
    },
    {
      fase: "Desarrollo Técnico",
      duracion: "4 semanas",
      actividades: [
        "Setup QR dinámico avanzado",
        "Configuración dashboard tiempo real",
        "Múltiples puntos acceso estratégicos",
        "Pruebas validación instantánea",
      ],
    },
    {
      fase: "Ejecución Evento IA",
      duracion: "Días del evento",
      actividades: [
        "Control accesos Centro Inmersividad",
        "Monitoreo ocupación domo 360°",
        "Gestión flujo workshops/stands",
        "5,000+ validaciones exitosas",
      ],
    },
    {
      fase: "Análisis y Cierre",
      duracion: "1 semana",
      actividades: [
        "Reportes ocupación por espacios",
        "Métricas sistema QR dinámico",
        "Evaluación flujo sin colas",
        "Documentación caso éxito IA",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Alto Volumen Evento Gratuito",
      descripcion: "Evento de participación abierta y gratuita con 5,000+ asistentes y alta demanda",
      solucion: "Pre-registro Eventbrite + acreditaciones digitales + validación tiempo real",
    },
    {
      icon: Building,
      titulo: "Limitaciones Capacidad Espacios",
      descripcion: "Centro de Inmersividad con limitaciones de capacidad en domo 360° y workshops",
      solucion: "Dashboard tiempo real para monitorear ocupación y tomar decisiones operativas",
    },
    {
      icon: Target,
      titulo: "Acceso Múltiples Áreas Especializadas",
      descripcion: "Flujo a domo principal, workshops IA y stands de Nvidia, IBM, Globant, Microsoft",
      solucion: "Múltiples puntos de acceso estratégicos + QR dinámico + validación instantánea",
    },
  ]

  const espaciosEvento = [
    {
      name: "Domo Principal 360°",
      description: "Proyección inmersiva principal del evento",
      icon: Eye,
    },
    {
      name: "Workshops IA",
      description: "Talleres especializados en Inteligencia Artificial",
      icon: Brain,
    },
    {
      name: "Stands Empresas Líderes",
      description: "Nvidia, IBM Quantum, Globant, Microsoft",
      icon: Building,
    },
    {
      name: "Centro de Inmersividad",
      description: "Venue principal Parque de Innovación",
      icon: Cpu,
    },
  ]

  const empresasParticipantes = [
    { name: "Nvidia", sector: "GPU/IA" },
    { name: "IBM Quantum", sector: "Computación Cuántica" },
    { name: "Globant", sector: "Tecnología" },
    { name: "Microsoft", sector: "Cloud/IA" },
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
            <span className="text-[#333333] font-medium">Wave Conference 2023</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Inteligencia Artificial</Badge>
                  <Badge className="bg-white/20 text-white">5,000+ Asistentes</Badge>
                  <Badge className="bg-white/20 text-white">Evento Gratuito</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Wave Conference <span className="text-yellow-300">2023</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Control de accesos para el evento de IA más importante de Argentina.</strong>
                  DER implementó <strong>sistema integral de acreditaciones digitales</strong> para
                  <strong>5,000+ asistentes</strong> con pre-registro Eventbrite, QR dinámico y dashboard tiempo real en
                  el <strong>Parque de Innovación</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5,000+</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">IA</div>
                    <div className="text-sm opacity-80">Temática</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Digital</div>
                    <div className="text-sm opacity-80">Sistema</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Gratuito</div>
                    <div className="text-sm opacity-80">Acceso</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Parque de Innovación, Buenos Aires</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Evento de Inteligencia Artificial</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/wave-conference-2023.jpg"
                    alt="Wave Conference 2023 - Control accesos digital 5,000+ asistentes"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Wave Conference 2023 - Control accesos digital 5,000+ asistentes IA
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
                Evento <span className="text-[#FF5C00]">IA Argentina</span>
              </h2>
              <p className="text-xl text-[#333333]">
                El evento de Inteligencia Artificial más importante de Argentina en 2023
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
                Gestionar evento gratuito de alta demanda con limitaciones de capacidad
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

      {/* Sistema Digital */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Sistema <span className="text-[#FF5C00]">Digital</span>
              </h2>
              <p className="text-xl text-[#333333]">Control de accesos integral para Wave Conference 2023</p>
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
              <p className="text-xl text-[#333333]">De la planificación digital a la ejecución exitosa</p>
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

      {/* Espacios del Evento */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Espacios <span className="text-[#FF5C00]">Evento</span>
              </h2>
              <p className="text-xl text-[#333333]">Centro de Inmersividad del Parque de Innovación</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {espaciosEvento.map((espacio, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mr-4">
                        <espacio.icon className="w-6 h-6 text-[#FF5C00]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">{espacio.name}</h3>
                    </div>
                    <p className="text-[#333333]">{espacio.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Empresas Participantes */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Empresas <span className="text-[#FF5C00]">Líderes</span>
              </h2>
              <p className="text-xl text-[#333333]">Participantes destacados en Wave Conference 2023</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {empresasParticipantes.map((empresa, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00] text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">{empresa.name}</h3>
                    <p className="text-sm text-[#333333] opacity-70">{empresa.sector}</p>
                  </CardContent>
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
              <p className="text-xl text-[#333333]">Logros comprobados de Wave Conference 2023</p>
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
                        <div className="font-semibold text-[#333333]">5,000+ Validaciones Exitosas</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Gestión eficiente de todos los asistentes
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Acceso Fluido Sin Colas</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Eliminación de aglomeraciones y tiempos de espera
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Monitoreo Tiempo Real</div>
                        <div className="text-sm text-[#333333] opacity-70">Dashboard con ocupación por espacios</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">QR Dinámico Seguro</div>
                        <div className="text-sm text-[#333333] opacity-70">Prevención de duplicaciones y fraudes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto del Evento */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto del Evento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Evento IA Más Importante</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Argentina 2023 con empresas líderes globales
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Eye className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Experiencia Inmersiva Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Domo 360°, workshops y stands empresariales
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Participación Empresas Líderes</div>
                        <div className="text-sm text-[#333333] opacity-70">Nvidia, IBM Quantum, Globant, Microsoft</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Acceso Democrático Gratuito</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Evento abierto con alta demanda gestionada
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
                <Brain className="w-4 h-4 mr-2" />
                ¿Tenés un evento de tecnología masivo?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos tu próximo <span className="text-yellow-300">evento tech exitoso</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos <strong>Wave Conference 2023 con 5,000+ asistentes</strong>, el evento de IA más
                importante de Argentina, con pre-registro Eventbrite, QR dinámico y dashboard tiempo real, tu evento
                tecnológico también puede tener un control de accesos perfecto.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Cotizar Evento Tecnológico
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Sistema Digital
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
                <h3 className="font-semibold mb-2">5,000+ Asistentes</h3>
                <p className="text-sm opacity-80">Capacidad masiva</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Sistema Digital</h3>
                <p className="text-sm opacity-80">QR dinámico + Eventbrite</p>
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
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Evento IA Argentina</h3>
                <p className="text-sm opacity-80">Más importante 2023</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento tecnológico merece el mejor control de accesos?</h3>
              <p className="text-lg opacity-90">
                <strong>Wave Conference 2023</strong>, el evento de IA más importante de Argentina, confió en DER para
                gestionar 5,000+ asistentes con sistema digital completo. Pre-registro Eventbrite, QR dinámico,
                dashboard tiempo real y acceso fluido garantizado. Tu evento tech también puede ser un éxito total.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
