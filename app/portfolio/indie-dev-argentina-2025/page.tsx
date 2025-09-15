import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Calendar,
  MapPin,
  QrCode,
  Monitor,
  Smartphone,
  Shield,
  CheckCircle,
  ArrowRight,
  Gamepad2,
  Trophy,
  BarChart3,
  Headphones,
  Settings,
  Building,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Indie Dev Argentina 2025 - Control de Accesos Gaming | DER EVENT HUB",
  description:
    "Control de accesos integral para Indie Dev Argentina 2025: 1,400+ asistentes en 2 días, 5 puntos de control, pre-registro online y personal DER especializado en Casa de la Provincia.",
  keywords: [
    "Indie Dev Argentina 2025 control accesos gaming",
    "DER control accesos evento gaming 1400 asistentes",
    "Casa de la Provincia pre-registro online QR",
    "showcase videojuegos control flujo desarrolladores",
    "personal DER equipos propios gaming eventos",
  ],
  openGraph: {
    title: "Indie Dev Argentina 2025 - Control de Accesos Gaming",
    description:
      "Control integral para el evento gaming más importante de desarrolladores independientes: 1,400+ asistentes, 5 puntos de control y tecnología DER propia.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1756484259/IMG-20250720-WA0054_pptc6k.jpg",
        width: 1200,
        height: 630,
        alt: "Indie Dev Argentina 2025 - Control de accesos gaming",
      },
    ],
  },
}

export default function IndieDevArgentina2025() {
  // Stats del proyecto
  const projectStats = [
    { icon: Users, value: "1,400+", label: "Asistentes Totales", color: "text-[#FF5C00]" },
    { icon: Calendar, value: "2", label: "Días de Evento", color: "text-[#333333]" },
    { icon: QrCode, value: "5", label: "Puntos de Control", color: "text-[#FF5C00]" },
    { icon: Gamepad2, value: "20", label: "Videojuegos Showcase", color: "text-[#333333]" },
  ]

  // Desafíos y soluciones
  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Evento Gratuito Masivo",
      descripcion:
        "Control de 700 personas por día en evento gratuito con alta rotación, desarrolladores, prensa y público general mezclados.",
      solucion:
        "Pre-registro online obligatorio con QR únicos diferenciados por tipo de participante y múltiples puntos de control para distribuir el flujo sin cuellos de botella.",
    },
    {
      icon: Gamepad2,
      titulo: "Múltiples Espacios Gaming Simultáneos",
      descripcion:
        "Control de acceso a showcase de 20 videojuegos, charlas técnicas, talleres hands-on y espacios de networking con capacidades diferentes.",
      solucion:
        "Sistema integral con control principal + 4 puntos internos específicos para cada actividad, con permisos diferenciados y monitoreo de capacidad en tiempo real.",
    },
    {
      icon: Trophy,
      titulo: "Indie Dev Awards y Desarrolladores VIP",
      descripcion:
        "Gestión especial de acceso a ceremonia de premios, control de desarrolladores participantes del concurso y manejo de prensa especializada.",
      solucion:
        "Acreditaciones diferenciadas con 3 niveles: desarrolladores participantes, jurado/prensa, y público general, cada uno con permisos específicos y accesos prioritarios.",
    },
  ]

  // Servicios implementados
  const serviciosImplementados = [
    {
      icon: QrCode,
      name: "Control de Accesos Integral",
      description: "Sistema completo con pre-registro online, QR únicos y control principal + salas de charlas",
      bullets: [
        "Pre-registro online obligatorio con validación",
        "QR únicos por participante y tipo de acceso",
        "Control principal Casa de la Provincia",
        "4 puntos internos para charlas y talleres",
      ],
    },
    {
      icon: Monitor,
      name: "Dashboard Tiempo Real",
      description: "Monitoreo continuo de ocupación, flujo de personas y métricas por espacio durante 48 horas",
      bullets: [
        "Visualización ocupación por sala en tiempo real",
        "Métricas de flujo y rotación de asistentes",
        "Alertas automáticas de capacidad máxima",
        "Reportes cada 30 minutos durante el evento",
      ],
    },
    {
      icon: Users,
      name: "Personal Propio DER",
      description: "6 personas especializadas en control de accesos gaming con experiencia en eventos tecnológicos",
      bullets: [
        "Equipo DER especializado en eventos gaming",
        "Coordinador general + 5 operadores",
        "Experiencia previa en Campus Party y eventos tech",
        "Capacitación específica en showcase videojuegos",
      ],
    },
    {
      icon: Smartphone,
      name: "Equipos Propios DER",
      description: "8 tablets, routers 4G, scanners y backup offline con tecnología 100% propia",
      bullets: [
        "8 tablets DER con software propietario",
        "3 routers 4G para backup de conectividad",
        "Scanners QR de alta velocidad",
        "Baterías portátiles y cargadores de respaldo",
      ],
    },
    {
      icon: Shield,
      name: "Backup Offline Total",
      description: "Sistema de respaldo sin internet, cache local y redundancia para operación continua",
      bullets: [
        "Cache local de todos los QR registrados",
        "Sincronización automática al recuperar conexión",
        "Modo offline completo en cada punto",
        "Backup de datos cada 15 minutos",
      ],
    },
    {
      icon: Headphones,
      name: "Soporte Técnico 24/7",
      description: "Asistencia técnica continua durante las 48 horas del evento con personal especializado",
      bullets: [
        "Técnico DER on-site durante todo el evento",
        "Soporte remoto 24/7 desde central DER",
        "Resolución de incidencias < 2 minutos",
        "Monitoreo proactivo del sistema",
      ],
    },
  ]

  // Cronología del proyecto
  const cronologiaProyecto = [
    {
      fase: "Pre-Registro Online",
      duracion: "2 semanas",
      actividades: [
        "Desarrollo plataforma registro específica gaming",
        "Generación QR únicos por tipo de participante",
        "Validación datos desarrolladores vs público general",
        "Configuración permisos diferenciados por actividad",
      ],
    },
    {
      fase: "Setup Tecnológico",
      duracion: "3 días",
      actividades: [
        "Instalación equipos DER en Casa de la Provincia",
        "Configuración 5 puntos control (1 principal + 4 internos)",
        "Pruebas sistema completo con simulación de carga",
        "Capacitación personal propio en protocolo gaming",
      ],
    },
    {
      fase: "Día 1 - Sábado 19 Julio",
      duracion: "8 horas (11:00-19:00)",
      actividades: [
        "Control acceso principal 700 personas",
        "Monitoreo showcase 20 videojuegos argentinos",
        "Gestión acceso charlas técnicas simultáneas",
        "Dashboard tiempo real + reportes cada 30min",
      ],
    },
    {
      fase: "Día 2 - Domingo 20 Julio",
      duracion: "6 horas (12:00-18:00)",
      actividades: [
        "Control acceso principal 700 personas",
        "Gestión especial Indie Dev Awards ceremony",
        "Control networking desarrolladores VIP",
        "Cierre operativo + reportes finales completos",
      ],
    },
  ]

  // Espacios controlados
  const espaciosControlados = [
    {
      espacio: "Acceso Principal",
      descripcion: "Casa de la Provincia - Av. Callao 237",
      capacidad: "700 personas por día",
      tecnologia: "QR + backup offline",
    },
    {
      espacio: "Showcase Videojuegos",
      descripcion: "Exhibición de 20 videojuegos argentinos",
      capacidad: "Rotación continua",
      tecnologia: "Control interno flujo",
    },
    {
      espacio: "Salas de Charlas",
      descripcion: "3 salas simultáneas para charlas técnicas",
      capacidad: "80 personas por sala",
      tecnologia: "QR específicos por charla",
    },
    {
      espacio: "Talleres Formativos",
      descripcion: "Espacios hands-on para desarrolladores",
      capacidad: "40 personas por taller",
      tecnologia: "Pre-inscripción + QR",
    },
  ]

  // Resultados verificables
  const resultadosVerificables = [
    {
      categoria: "Operativos",
      metricas: [
        "1,400+ asistentes controlados sin incidencias",
        "Tiempo promedio de ingreso: 22 segundos",
        "0 accesos no autorizados detectados",
        "99.9% uptime del sistema durante 48 horas",
      ],
    },
    {
      categoria: "Tecnológicos",
      metricas: [
        "2,100+ pre-registros procesados exitosamente",
        "5 puntos de control operando simultáneamente",
        "15+ charlas con control de acceso específico",
        "Dashboard tiempo real con 0 interrupciones",
      ],
    },
    {
      categoria: "Gaming Específicos",
      metricas: [
        "20 videojuegos showcase con flujo controlado",
        "Indie Dev Awards sin incidencias de acceso",
        "Networking desarrolladores con 95% satisfacción",
        "0 quejas por demoras o problemas técnicos",
      ],
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
            <span className="text-[#333333] font-medium">Indie Dev Argentina 2025</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Gaming</Badge>
                  <Badge className="bg-white/20 text-white">1,400+ Asistentes</Badge>
                  <Badge className="bg-white/20 text-white">Julio 2025</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Indie Dev Argentina <span className="text-yellow-300">2025</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Control de accesos integral para el evento gaming más importante</strong> de desarrolladores
                  independientes argentinos. <strong>1,400+ asistentes</strong> en 2 días con
                  <strong> pre-registro online</strong>, <strong>5 puntos de control</strong> y
                  <strong>personal propio DER</strong> con equipos propios.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1,400+</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5</div>
                    <div className="text-sm opacity-80">Puntos Control</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">20</div>
                    <div className="text-sm opacity-80">Videojuegos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">48h</div>
                    <div className="text-sm opacity-80">Monitoreo</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Casa de la Provincia</span>
                  </div>
                  <div className="flex items-center">
                    <Gamepad2 className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Showcase Nacional</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Indie Dev Awards</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/indie-dev-argentina-2025.jpg"
                    alt="Indie Dev Argentina 2025 - Control de accesos gaming"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Indie Dev Argentina 2025 - Evento gaming nacional con control integral
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
                Evento Gaming <span className="text-[#FF5C00]">Nacional</span>
              </h2>
              <p className="text-xl text-[#333333]">
                2 días de showcase indie con control integral y tecnología propia
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
                Control integral de evento gaming gratuito con múltiples espacios simultáneos
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
              <p className="text-xl text-[#333333]">Control integral con personal y equipos propios DER</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviciosImplementados.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <service.icon className="w-5 h-5 text-[#FF5C00] mr-2" />
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#333333] text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-[#FF5C00] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#333333]">{bullet}</span>
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

      {/* Cronología del Proyecto */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Desarrollo <span className="text-[#FF5C00]">Proyecto</span>
              </h2>
              <p className="text-xl text-[#333333]">Del pre-registro online a la ejecución en 48 horas</p>
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

      {/* Espacios Controlados */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Espacios <span className="text-[#FF5C00]">Controlados</span>
              </h2>
              <p className="text-xl text-[#333333]">5 puntos de control con tecnología diferenciada</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {espaciosControlados.map((espacio, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="w-5 h-5 text-[#FF5C00] mr-2" />
                      {espacio.espacio}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-[#333333] mr-2 mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#333333] text-sm">Ubicación</div>
                          <div className="text-xs text-[#333333] opacity-70">{espacio.descripcion}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-4 h-4 text-[#FF5C00] mr-2 mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#333333] text-sm">Capacidad</div>
                          <div className="text-xs text-[#333333] opacity-70">{espacio.capacidad}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Settings className="w-4 h-4 text-[#333333] mr-2 mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#333333] text-sm">Tecnología</div>
                          <div className="text-xs text-[#333333] opacity-70">{espacio.tecnologia}</div>
                        </div>
                      </div>
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
              <p className="text-xl text-[#333333]">Logros comprobados del evento gaming nacional</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resultadosVerificables.map((categoria, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-[#FF5C00] mr-2" />
                      {categoria.categoria}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categoria.metricas.map((metrica, metricaIndex) => (
                        <div key={metricaIndex} className="flex items-start">
                          <TrendingUp className="w-4 h-4 text-[#FF5C00] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#333333] text-sm">{metrica}</span>
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

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF5C00] via-[#E54F00] to-[#CC4400] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Gamepad2 className="w-4 h-4 mr-2" />
                ¿Tenés un evento gaming que necesita control profesional?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Controlemos los accesos de tu próximo <span className="text-yellow-300">evento gaming</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si controlamos los accesos de <strong>Indie Dev Argentina 2025</strong> con
                <strong> 1,400+ asistentes</strong> en 2 días, <strong>5 puntos de control</strong>, pre-registro online
                y personal DER especializado, tu evento gaming también puede tener el control más profesional del
                mercado.
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
                  Cotizar Control Gaming
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Más Proyectos Gaming
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
                <h3 className="font-semibold mb-2">1,400+ Asistentes</h3>
                <p className="text-sm opacity-80">Control integral</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">5 Puntos Control</h3>
                <p className="text-sm opacity-80">Tecnología propia</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Dashboard 48h</h3>
                <p className="text-sm opacity-80">Monitoreo continuo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Personal DER</h3>
                <p className="text-sm opacity-80">Especializado gaming</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento gaming merece el mejor control de accesos?</h3>
              <p className="text-lg opacity-90">
                <strong>Indie Dev Argentina 2025</strong> confió en DER para controlar accesos de su showcase nacional:
                1,400+ asistentes, 5 puntos de control, personal especializado y equipos propios. Tu evento gaming
                también puede tener la tecnología más avanzada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
