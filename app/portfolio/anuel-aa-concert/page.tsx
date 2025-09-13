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
  Globe,
  Target,
  Award,
  Smartphone,
  Calendar,
  MapPin,
  Music,
  Car,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Anuel AA Tour - Control Accesos Dual Tecnópolis y Parque Roca | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó el tour de Anuel AA con control de accesos peatonal y vehicular en Tecnópolis, y control vehicular + soporte técnico en Parque Roca durante 4 fechas.",
  keywords: [
    "Anuel AA tour Argentina control accesos",
    "Tecnópolis Parque Roca accesos duales",
    "Dios del Trap tour 4 fechas Buenos Aires",
    "control vehicular peatonal eventos masivos",
    "sistema dual validación entradas",
  ],
  openGraph: {
    title: "Anuel AA Tour - Control Accesos Dual en Tecnópolis y Parque Roca",
    description:
      "Control de accesos peatonal y vehicular para el tour de Anuel AA en Tecnópolis y Parque Roca. Sistema dual con validación de entradas para 4 fechas del 'Dios del Trap'.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746634834/IMG-20241106-WA0002_szh6a9.jpg",
        width: 1200,
        height: 630,
        alt: "Anuel AA Tour - Control accesos dual Tecnópolis y Parque Roca",
      },
    ],
  },
}

export default function AnuelAATourPage() {
  const projectStats = [
    { icon: MapPin, label: "Venues", value: "2", color: "text-[#FF5C00]" },
    { icon: Calendar, label: "Fechas", value: "4", color: "text-[#333333]" },
    { icon: Car, label: "Sistema", value: "Dual", color: "text-[#FF5C00]" },
    { icon: Users, label: "Fans", value: "Miles", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Control Accesos Peatonal Tecnópolis",
      icon: Users,
      description: "Gestión integral del acceso peatonal para miles de fans del 'Dios del Trap' en Tecnópolis",
    },
    {
      name: "Control Accesos Vehicular Tecnópolis",
      icon: Car,
      description: "Coordinación especializada del acceso vehicular en Tecnópolis para múltiples fechas",
    },
    {
      name: "Control Vehicular Parque Roca",
      icon: Target,
      description: "Gestión exclusiva del control vehicular en Parque Roca durante las fechas del tour",
    },
    {
      name: "Soporte Técnico Parque Roca",
      icon: Monitor,
      description: "Soporte técnico especializado al control peatonal en Parque Roca",
    },
    {
      name: "Validación de Entradas",
      icon: Smartphone,
      description: "Sistema de validación de entradas con redundancia offline para múltiples venues",
    },
    {
      name: "Protocolo Dual Estandarizado",
      icon: Shield,
      description: "Protocolo de accesos estandarizado adaptado a las características de cada venue",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Dual Venues",
      duracion: "6 semanas",
      actividades: [
        "Análisis Tecnópolis y Parque Roca",
        "Protocolo accesos dual diferenciado",
        "Coordinación equipos seguridad artista",
        "Sistema validación multi-venue",
      ],
    },
    {
      fase: "Preparación Operativa",
      duracion: "3 semanas",
      actividades: [
        "Capacitación equipos por venue",
        "Setup sistema dual peatonal-vehicular",
        "Integración requerimientos específicos",
        "Protocolos soporte técnico Roca",
      ],
    },
    {
      fase: "Ejecución Tour 4 Fechas",
      duracion: "Fechas del tour",
      actividades: [
        "Tecnópolis: Control dual completo",
        "Parque Roca: Vehicular + soporte",
        "Validación entradas multi-venue",
        "Coordinación seguridad continua",
      ],
    },
    {
      fase: "Cierre Tour",
      duracion: "1 semana",
      actividades: [
        "Análisis operativo dual venues",
        "Reporte coordinación seguridad",
        "Evaluación protocolo diferenciado",
        "Documentación tour exitoso",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: MapPin,
      titulo: "Dual Venues con Características Diferentes",
      descripcion: "Tour en Tecnópolis y Parque Roca requería sistemas adaptados a cada venue específico",
      solucion: "Protocolo dual: control completo en Tecnópolis y vehicular + soporte técnico en Parque Roca",
    },
    {
      icon: Shield,
      titulo: "Estándares Seguridad Artista Internacional",
      descripcion: "Altos estándares de seguridad requeridos por el 'Dios del Trap' y su equipo",
      solucion: "Coordinación con equipos de seguridad del artista integrando requerimientos específicos",
    },
    {
      icon: Car,
      titulo: "Gestión Simultánea Accesos Duales",
      descripcion: "Venues de gran escala con accesos peatonales y vehiculares simultáneos",
      solucion: "Sistema dual con validación, redundancia offline y gestión diferenciada por venue",
    },
  ]

  const venuesData = [
    {
      name: "Tecnópolis",
      location: "Buenos Aires",
      services: ["Control Peatonal", "Control Vehicular"],
      description: "Gestión integral de accesos peatonales y vehiculares",
    },
    {
      name: "Parque Roca",
      location: "Buenos Aires",
      services: ["Control Vehicular", "Soporte Técnico"],
      description: "Control vehicular exclusivo y soporte técnico al peatonal",
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
            <span className="text-[#333333] font-medium">Anuel AA Tour</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Reggaeton Internacional</Badge>
                  <Badge className="bg-white/20 text-white">4 Fechas</Badge>
                  <Badge className="bg-white/20 text-white">Dios del Trap</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Anuel AA <span className="text-yellow-300">Tour</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Control de accesos dual en Tecnópolis y Parque Roca.</strong> DER gestionó el tour de{" "}
                  <strong>Anuel AA</strong> con <strong>control peatonal y vehicular completo en Tecnópolis</strong>y{" "}
                  <strong>control vehicular + soporte técnico en Parque Roca</strong> durante
                  <strong>4 fechas</strong> del 'Dios del Trap'.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2</div>
                    <div className="text-sm opacity-80">Venues</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4</div>
                    <div className="text-sm opacity-80">Fechas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Dual</div>
                    <div className="text-sm opacity-80">Sistema</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Miles</div>
                    <div className="text-sm opacity-80">Fans</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Octubre 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Tecnópolis y Parque Roca</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Gira Sudamérica</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634834/IMG-20241106-WA0002_szh6a9.jpg"
                    alt="Anuel AA Tour - Control accesos dual Tecnópolis y Parque Roca"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Anuel AA Tour - Control accesos dual en Tecnópolis y Parque Roca
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
                Tour <span className="text-[#FF5C00]">Sudamérica</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Anuel AA regresó a Argentina con 4 presentaciones tras agotar rápidamente las primeras entradas
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
                Tour en dual venues con desafíos logísticos complejos y altos estándares de seguridad
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

      {/* Sistema Dual */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Sistema <span className="text-[#FF5C00]">Dual</span>
              </h2>
              <p className="text-xl text-[#333333]">
                DER gestionó el control de accesos adaptado a las características específicas de cada venue
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
                Desarrollo <span className="text-[#FF5C00]">Tour</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación dual venues al tour exitoso</p>
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

      {/* Venues del Tour */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Venues <span className="text-[#FF5C00]">Tour</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Los venues icónicos donde Anuel AA confirmó nuevas fechas tras agotar entradas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venuesData.map((venue, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-[#FF5C00] mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-[#333333]">{venue.name}</h3>
                        <p className="text-sm text-[#333333] opacity-70">{venue.location}</p>
                      </div>
                    </div>

                    <p className="text-[#333333] mb-4">{venue.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {venue.services.map((service, serviceIndex) => (
                        <Badge
                          key={serviceIndex}
                          className="bg-[#F0F0F0] text-[#333333] hover:bg-[#FF5C00] hover:text-white"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Verificables */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Verificables</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros comprobados del tour Anuel AA en Tecnópolis y Parque Roca</p>
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
                        <div className="font-semibold text-[#333333]">Gestión Simultánea Accesos</div>
                        <div className="text-sm text-[#333333] opacity-70">Peatonales y vehiculares en Tecnópolis</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Coordinación Equipos Seguridad</div>
                        <div className="text-sm text-[#333333] opacity-70">Integración con equipos del artista</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smartphone className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Validación Múltiples Venues</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sistema adaptado para Tecnópolis y Parque Roca
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Tour Exitoso Completado</div>
                        <div className="text-sm text-[#333333] opacity-70">4 fechas gestionadas con protocolo dual</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto del Tour */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto del Tour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Entradas Agotadas Rápidamente</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Confirmación de nuevas fechas por demanda
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Gira Sudamérica Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Tecnópolis y Parque Roca como venues principales en Argentina
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Protocolo Dual Estandarizado</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sistema consistente adaptado a múltiples venues
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Car className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Ingreso Fluido y Seguro</div>
                        <div className="text-sm text-[#333333] opacity-70">Para miles de fans del 'Dios del Trap'</div>
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
                ¿Tenés un tour con múltiples fechas?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos tu próximo <span className="text-yellow-300">tour musical exitoso</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos <strong>4 fechas de Anuel AA</strong> con sistema dual en Tecnópolis y Parque Roca,
                coordinando equipos de seguridad del artista, podemos asegurar el éxito operativo de tu tour musical con
                los más altos estándares.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Cotizar Tour Musical
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Hablar sobre Accesos Duales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">4 Fechas</h3>
                <p className="text-sm opacity-80">Tour completo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Sistema Dual</h3>
                <p className="text-sm opacity-80">Peatonal + Vehicular</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Coordinación Seguridad</h3>
                <p className="text-sm opacity-80">Equipos artista</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Dios del Trap</h3>
                <p className="text-sm opacity-80">Artista internacional</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu tour musical merece los mejores accesos?</h3>
              <p className="text-lg opacity-90">
                <strong>Anuel AA, el 'Dios del Trap'</strong>, confió en DER para sus 4 fechas en Tecnópolis y Parque
                Roca. Sistema dual con validación de entradas y coordinación con equipos de seguridad del artista. Tu
                tour musical también puede tener un operativo exitoso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
