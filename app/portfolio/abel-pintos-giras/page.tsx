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
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Music,
  QrCode,
  Mountain,
  Waves,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Abel Pintos - Gira Cordillera y Mar + CABA + Mar del Plata | DER EVENT HUB",
  description:
    "Descubrí cómo DER controló accesos de la gira completa de Abel Pintos: 6 fechas Patagonia (1000 personas), 20 fechas CABA (800 personas) y 4 fechas Mar del Plata (800 personas). Control remoto y dashboards.",
  keywords: [
    "Abel Pintos gira Cordillera Mar control accesos",
    "DER control accesos 30 fechas Abel Pintos",
    "Patagonia CABA Mar del Plata 800 1000 personas",
    "dashboards remotos capacitación personal",
    "acompañamiento gira dispositivos equipos DER",
  ],
  openGraph: {
    title: "Abel Pintos - Gira Cordillera y Mar + CABA + Mar del Plata",
    description:
      "Control de accesos integral para la gira completa de Abel Pintos: 6 fechas en Patagonia, 20 fechas en CABA y 4 fechas en Mar del Plata. Dashboards remotos y acompañamiento técnico.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/abel-pintos-gira-cordillera-mar.jpg",
        width: 1200,
        height: 630,
        alt: "Abel Pintos - Gira Cordillera y Mar control de accesos",
      },
    ],
  },
}

export default function AbelPintosGiraPage() {
  const projectStats = [
    { icon: Music, label: "Fechas", value: "30", color: "text-[#FF5C00]" },
    { icon: Users, label: "Asistentes", value: "26,000", color: "text-[#333333]" },
    { icon: MapPin, label: "Ciudades", value: "9", color: "text-[#FF5C00]" },
    { icon: Monitor, label: "Dashboards", value: "Remotos", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Control de Accesos Integral",
      icon: Shield,
      description: "Sistema de control para 30 fechas: 6 en Patagonia, 20 en CABA y 4 en Mar del Plata",
    },
    {
      name: "Asistencias Remotas",
      icon: Monitor,
      description: "Monitoreo y soporte técnico remoto durante toda la gira Cordillera y Mar",
    },
    {
      name: "Capacitación de Personal",
      icon: Target,
      description: "Entrenamiento especializado del personal local en cada ciudad de la gira",
    },
    {
      name: "Dashboards de Lecturas",
      icon: BarChart3,
      description: "Dashboards en tiempo real para monitoreo de accesos y métricas por fecha",
    },
    {
      name: "Informes Totales",
      icon: Award,
      description: "Reportes completos de asistencia y análisis post-evento para cada presentación",
    },
    {
      name: "Acompañamiento Técnico",
      icon: Zap,
      description: "Dispositivos y equipos DER para garantizar operación continua en toda la gira",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Gira Integral",
      duracion: "Pre-gira",
      actividades: [
        "Coordinación 30 fechas Abel Pintos",
        "Logística Patagonia + CABA + MdP",
        "Configuración sistemas remotos",
        "Preparación equipos DER",
      ],
    },
    {
      fase: "Gira Patagonia Cordillera y Mar",
      duracion: "Junio 2025",
      actividades: [
        "6 fechas 1000 personas cada una",
        "Neuquén, Bariloche, Comodoro",
        "Río Gallegos, Puerto Madryn, Ushuaia",
        "Control accesos + dashboards",
      ],
    },
    {
      fase: "Gira CABA Teatro Alvear",
      duracion: "Agosto 2025",
      actividades: [
        "20 fechas 800 personas cada una",
        "Teatro Alvear Av. Corrientes",
        "Gracias a la Vida + Acústico",
        "Monitoreo remoto continuo",
      ],
    },
    {
      fase: "Gira Mar del Plata",
      duracion: "Julio 2025",
      actividades: [
        "4 fechas 800 personas cada una",
        "Teatro Tronador presentaciones",
        "Informes totales finales",
        "Análisis gira completa",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Mountain,
      titulo: "Gira Multi-Ciudad Patagonia",
      descripcion: "Controlar accesos en 6 ciudades patagónicas con 1000 personas cada fecha",
      solucion: "Sistema remoto + capacitación local + equipos DER + dashboards tiempo real",
    },
    {
      icon: Music,
      titulo: "20 Fechas Consecutivas CABA",
      descripcion: "Gestionar control de accesos para 20 presentaciones con 800 personas cada una",
      solucion: "Dashboards remotos + informes totales + acompañamiento técnico continuo",
    },
    {
      icon: Waves,
      titulo: "Coordinación Integral Multi-Venue",
      descripcion: "Sincronizar operaciones en Teatro Alvear, Teatro Tronador y venues patagónicos",
      solucion: "Capacitación personal + asistencias remotas + dispositivos unificados DER",
    },
  ]

  const fechasGira = [
    {
      region: "Patagonia - Cordillera y Mar",
      fechas: [
        { fecha: "7 y 8/6", ciudad: "Neuquén", venue: "Estadio Ruca Che" },
        { fecha: "10 y 11/6", ciudad: "Bariloche", venue: "Bomberos" },
        { fecha: "13/6", ciudad: "Comodoro Rivadavia", venue: "Predio Ferial" },
        { fecha: "15/6", ciudad: "Río Gallegos", venue: "Club Boxing" },
        { fecha: "18/6", ciudad: "Ushuaia", venue: "Hotel Las Hayas" },
        { fecha: "21 y 22/6", ciudad: "Puerto Madryn", venue: "Gimnasio N1" },
      ],
      asistentes: "1,000 por fecha",
      icon: Mountain,
    },
    {
      region: "CABA - Teatro Alvear",
      fechas: [{ fecha: "12-23/8", ciudad: "Buenos Aires", venue: "Teatro Alvear, Av. Corrientes 1659" }],
      asistentes: "800 por fecha (20 fechas)",
      icon: Building,
    },
    {
      region: "Mar del Plata",
      fechas: [{ fecha: "23-26/7", ciudad: "Mar del Plata", venue: "Teatro Tronador" }],
      asistentes: "800 por fecha (4 fechas)",
      icon: Waves,
    },
  ]

  const resultadosDestacados = [
    { name: "30 Fechas", descripcion: "Control integral" },
    { name: "26,000 Asistentes", descripcion: "Total gira" },
    { name: "9 Ciudades", descripcion: "Cobertura nacional" },
    { name: "Dashboards Remotos", descripcion: "Monitoreo continuo" },
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
            <span className="text-[#333333] font-medium">Abel Pintos - Gira Cordillera y Mar</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Gira Nacional</Badge>
                  <Badge className="bg-white/20 text-white">30 Fechas</Badge>
                  <Badge className="bg-white/20 text-white">26,000 Asistentes</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Abel Pintos <span className="text-yellow-300">Cordillera y Mar</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Control de accesos integral para la gira completa de Abel Pintos.</strong>
                  DER gestionó <strong>30 fechas</strong> con <strong>26,000 asistentes totales</strong>:
                  <strong>6 fechas en Patagonia</strong> (1000 personas), <strong>20 fechas en CABA</strong>
                  (800 personas) y <strong>4 fechas en Mar del Plata</strong> (800 personas). Con{" "}
                  <strong>dashboards remotos</strong> y acompañamiento técnico completo.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">30</div>
                    <div className="text-sm opacity-80">Fechas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">26K</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">9</div>
                    <div className="text-sm opacity-80">Ciudades</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Remotos</div>
                    <div className="text-sm opacity-80">Dashboards</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Mountain className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Cordillera y Mar</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Teatro Alvear CABA</span>
                  </div>
                  <div className="flex items-center">
                    <Waves className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Teatro Tronador MdP</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/abel-pintos-gira-cordillera-mar.jpg"
                    alt="Abel Pintos - Gira Cordillera y Mar control de accesos"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Abel Pintos - Control de accesos gira completa Cordillera y Mar
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
                Gira <span className="text-[#FF5C00]">Nacional</span>
              </h2>
              <p className="text-xl text-[#333333]">30 fechas con control de accesos integral y dashboards remotos</p>
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
                Controlar accesos en gira multi-ciudad con diferentes capacidades y venues
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

      {/* Servicios Implementados */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Servicios <span className="text-[#FF5C00]">Implementados</span>
              </h2>
              <p className="text-xl text-[#333333]">Control integral con dashboards remotos y acompañamiento técnico</p>
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
                Desarrollo <span className="text-[#FF5C00]">Gira</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación integral a la ejecución en 9 ciudades</p>
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

      {/* Fechas de la Gira */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Fechas <span className="text-[#FF5C00]">Confirmadas</span>
              </h2>
              <p className="text-xl text-[#333333]">30 fechas distribuidas en Patagonia, CABA y Mar del Plata</p>
            </div>

            <div className="space-y-8">
              {fechasGira.map((region, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <region.icon className="w-5 h-5 text-[#FF5C00] mr-2" />
                      {region.region}
                      <Badge className="ml-auto bg-[#F0F0F0] text-[#333333]">{region.asistentes}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {region.fechas.map((fecha, fechaIndex) => (
                        <div key={fechaIndex} className="flex items-center p-3 bg-[#F0F0F0] rounded-lg">
                          <Calendar className="w-4 h-4 text-[#FF5C00] mr-3" />
                          <div>
                            <div className="font-semibold text-[#333333] text-sm">{fecha.fecha}</div>
                            <div className="text-xs text-[#333333] opacity-70">
                              {fecha.ciudad} - {fecha.venue}
                            </div>
                          </div>
                        </div>
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
              <p className="text-xl text-[#333333]">Logros comprobados de la gira nacional Abel Pintos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Operativos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Operativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Music className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">30 Fechas Control Integral</div>
                        <div className="text-sm text-[#333333] opacity-70">6 Patagonia + 20 CABA + 4 Mar del Plata</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">26,000 Asistentes Totales</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          1000 Patagonia + 16,000 CABA + 3,200 MdP
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">9 Ciudades Diferentes</div>
                        <div className="text-sm text-[#333333] opacity-70">Cobertura nacional completa</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Capacitación Personal Local</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Entrenamiento especializado en cada ciudad
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Logros Tecnológicos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Tecnológicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Dashboards Remotos Tiempo Real</div>
                        <div className="text-sm text-[#333333] opacity-70">Monitoreo continuo durante toda la gira</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Asistencias Remotas 24/7</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Soporte técnico durante todas las fechas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Informes Totales Completos</div>
                        <div className="text-sm text-[#333333] opacity-70">Reportes detallados por fecha y ciudad</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smartphone className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Dispositivos DER Unificados</div>
                        <div className="text-sm text-[#333333] opacity-70">Equipos propios para operación continua</div>
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
                ¿Tenés una gira nacional que necesita control de accesos?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Controlemos los accesos de tu próxima <span className="text-yellow-300">gira nacional</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si controlamos los accesos de <strong>Abel Pintos en 30 fechas</strong>
                con <strong>26,000 asistentes totales</strong> en 9 ciudades diferentes (Patagonia + CABA + Mar del
                Plata) con dashboards remotos y acompañamiento técnico completo, tu gira también puede tener el control
                más profesional.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Cotizar Control Gira
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Dashboards Remotos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">30 Fechas</h3>
                <p className="text-sm opacity-80">Control integral</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">26,000 Asistentes</h3>
                <p className="text-sm opacity-80">Total gira</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Dashboards Remotos</h3>
                <p className="text-sm opacity-80">Monitoreo continuo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">9 Ciudades</h3>
                <p className="text-sm opacity-80">Cobertura nacional</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu gira merece el mejor control de accesos nacional?</h3>
              <p className="text-lg opacity-90">
                <strong>Abel Pintos</strong> confió en DER para controlar accesos de su gira completa: 30 fechas, 26,000
                asistentes, 9 ciudades, dashboards remotos y acompañamiento técnico. Tu gira también puede tener la
                tecnología más avanzada y el soporte más profesional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
