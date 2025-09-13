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
  Calendar,
  MapPin,
  Building,
  Clock,
  Car,
  Utensils,
  Truck,
  Trophy,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Expo Autos CeNARD 2024 - Food Trucks 4,000+ Asistentes | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó la provisión de food trucks para Expo Autos CeNARD 2024 con 4,000+ asistentes durante 4 días. Logística gastronómica para evento automotriz masivo.",
  keywords: [
    "Expo Autos CeNARD 2024 food trucks 4000",
    "logística gastronómica evento automotriz",
    "provisión food trucks 4 días consecutivos",
    "deporte motor CeNARD Buenos Aires",
    "Franco Colapinto F1 Williams evento",
  ],
  openGraph: {
    title: "Expo Autos CeNARD 2024 - Food Trucks 4,000+ Asistentes",
    description:
      "Provisión de food trucks para 4,000 personas en 'Expo Autos CeNARD', un evento de exposición de vehículos y deporte motor durante 4 días.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/expo-autos-cenard-2024.jpg",
        width: 1200,
        height: 630,
        alt: "Expo Autos CeNARD 2024 - Food trucks 4,000+ asistentes",
      },
    ],
  },
}

export default function ExpoAutosCeNARD2024Page() {
  const projectStats = [
    { icon: Users, label: "Asistentes", value: "4,000+", color: "text-[#FF5C00]" },
    { icon: Calendar, label: "Días", value: "4", color: "text-[#333333]" },
    { icon: Car, label: "Vehículos", value: "100+", color: "text-[#FF5C00]" },
    { icon: Truck, label: "Food Trucks", value: "Múltiples", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Provisión Food Trucks",
      icon: Truck,
      description: "Gestión completa de food trucks para alimentar 4,000+ asistentes durante 4 días consecutivos",
    },
    {
      name: "Coordinación Logística",
      icon: Target,
      description: "Logística integral para servicio continuo durante todo el evento automotriz",
    },
    {
      name: "Selección Gastronómica",
      icon: Utensils,
      description: "Selección de food trucks con opciones culinarias variadas para todos los gustos",
    },
    {
      name: "Distribución Estratégica",
      icon: MapPin,
      description: "Diseño de distribución estratégica en predio CeNARD para optimizar flujos",
    },
    {
      name: "Gestión Permisos",
      icon: Shield,
      description: "Gestión de todos los aspectos regulatorios y permisos para operación impecable",
    },
    {
      name: "Optimización Flujos",
      icon: Zap,
      description: "Optimización de flujos de público para facilitar acceso a zona gastronómica",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Gastronómica",
      duracion: "6 semanas",
      actividades: [
        "Briefing Expo Autos CeNARD",
        "Selección food trucks especializados",
        "Diseño distribución predio CeNARD",
        "Coordinación con organizadores",
      ],
    },
    {
      fase: "Gestión Permisos",
      duracion: "3 semanas",
      actividades: [
        "Tramitación permisos gastronómicos",
        "Coordinación aspectos regulatorios",
        "Validación normativas evento masivo",
        "Preparación logística operativa",
      ],
    },
    {
      fase: "Ejecución 4 Días",
      duracion: "21-24 noviembre",
      actividades: [
        "Montaje food trucks CeNARD",
        "Servicio continuo 4,000+ asistentes",
        "Coordinación flujos gastronómicos",
        "Supervisión operación diaria",
      ],
    },
    {
      fase: "Gestión y Cierre",
      duracion: "Post-evento",
      actividades: [
        "Coordinación desmontaje",
        "Evaluación servicio gastronómico",
        "Reportes cumplimiento normativas",
        "Análisis satisfacción asistentes",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Evento Masivo 4 Días Consecutivos",
      descripcion: "Asegurar oferta gastronómica variada y eficiente para 4,000+ asistentes durante 4 días",
      solucion: "Selección food trucks especializados + distribución estratégica + servicio continuo",
    },
    {
      icon: Car,
      titulo: "Evento Automotriz Especializado",
      descripcion: "Integrar zona gastronómica en evento de deporte motor con más de 100 vehículos",
      solucion: "Distribución optimizada en predio CeNARD + coordinación con exposición automotriz",
    },
    {
      icon: Shield,
      titulo: "Cumplimiento Normativas CeNARD",
      descripcion: "Gestionar permisos y normativas para servicio gastronómico en centro deportivo",
      solucion: "Gestión completa aspectos regulatorios + coordinación con autoridades CeNARD",
    },
  ]

  const eventoFeatures = [
    {
      name: "Más de 100 Vehículos",
      description: "Autos, kartings, motos y lanchas expuestos",
      icon: Car,
    },
    {
      name: "Simuladores y Carpas",
      description: "Simuladores, carpas informativas y pantalla gigante",
      icon: Monitor,
    },
    {
      name: "Desafío ECO YPF",
      description: "Presentación del Desafío ECO YPF",
      icon: Trophy,
    },
    {
      name: "Comisión Nacional Karting",
      description: "Muestra de la Comisión Nacional de Karting",
      icon: Award,
    },
  ]

  const organizadores = [
    { name: "Secretaría Turismo, Ambiente y Deportes", sector: "Organizador Principal" },
    { name: "ACA", sector: "Apoyo Institucional" },
    { name: "AAV", sector: "Apoyo Institucional" },
    { name: "ENARD", sector: "Apoyo Institucional" },
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
            <span className="text-[#333333] font-medium">Expo Autos CeNARD 2024</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Soluciones Gastronómicas</Badge>
                  <Badge className="bg-white/20 text-white">4,000+ Asistentes</Badge>
                  <Badge className="bg-white/20 text-white">Deporte Motor</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Expo Autos <span className="text-yellow-300">CeNARD 2024</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Provisión de food trucks para 4,000 personas en 'Expo Autos CeNARD'.</strong>
                  DER gestionó la <strong>logística gastronómica completa</strong> durante
                  <strong>4 días consecutivos</strong> para el evento de exposición de vehículos y deporte motor con{" "}
                  <strong>más de 100 autos, kartings, motos y lanchas</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4,000+</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4</div>
                    <div className="text-sm opacity-80">Días</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100+</div>
                    <div className="text-sm opacity-80">Vehículos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Food Trucks</div>
                    <div className="text-sm opacity-80">Múltiples</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>21-24 Noviembre 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>CeNARD, Buenos Aires</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Evento Automotriz</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/expo-autos-cenard-2024.jpg"
                    alt="Expo Autos CeNARD 2024 - Food trucks 4,000+ asistentes"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Expo Autos CeNARD 2024 - Food trucks para 4,000+ asistentes</p>
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
                Deporte <span className="text-[#FF5C00]">Motor</span>
              </h2>
              <p className="text-xl text-[#333333]">
                El evento automotriz llega al Centro Nacional de Alto Rendimiento Deportivo
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
              <p className="text-xl text-[#333333]">Logística gastronómica para evento automotriz masivo de 4 días</p>
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

      {/* Logística Food Trucks */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Logística <span className="text-[#FF5C00]">Food Trucks</span>
              </h2>
              <p className="text-xl text-[#333333]">Gestión gastronómica integral para Expo Autos CeNARD</p>
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
              <p className="text-xl text-[#333333]">De la planificación a la ejecución gastronómica</p>
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

      {/* Características del Evento */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Evento <span className="text-[#FF5C00]">Automotriz</span>
              </h2>
              <p className="text-xl text-[#333333]">El Deporte Motor Llega al CeNARD</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventoFeatures.map((feature, index) => (
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

      {/* Organizadores */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Organizadores <span className="text-[#FF5C00]">Institucionales</span>
              </h2>
              <p className="text-xl text-[#333333]">Apoyo oficial para Expo Autos CeNARD 2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizadores.map((organizador, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00] text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">{organizador.name}</h3>
                    <p className="text-sm text-[#333333] opacity-70">{organizador.sector}</p>
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
              <p className="text-xl text-[#333333]">Logros comprobados de la gestión gastronómica</p>
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
                        <div className="font-semibold text-[#333333]">4,000+ Asistentes Alimentados</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Gestión exitosa durante 4 días consecutivos
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Servicio Continuo 4 Días</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Del 21 al 24 de noviembre sin interrupciones
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Truck className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Coordinación Food Trucks Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Múltiples proveedores con opciones variadas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Cumplimiento Normativas</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Permisos y regulaciones para eventos masivos
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto del Evento */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto del Evento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Contribución Experiencia General</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Zona gastronómica integrada al evento automotriz
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Distribución Estratégica Optimizada</div>
                        <div className="text-sm text-[#333333] opacity-70">Flujos optimizados en predio CeNARD</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Apoyo Institucional Múltiple</div>
                        <div className="text-sm text-[#333333] opacity-70">Coordinación con ACA, AAV y ENARD</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Evento Gratuito Exitoso</div>
                        <div className="text-sm text-[#333333] opacity-70">Entrada libre para todos los asistentes</div>
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
                <Car className="w-4 h-4 mr-2" />
                ¿Tenés un evento automotriz que necesita logística gastronómica?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos la logística gastronómica de tu <span className="text-yellow-300">evento automotriz</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos los food trucks para{" "}
                <strong>Expo Autos CeNARD 2024 con 4,000+ asistentes durante 4 días consecutivos</strong>, coordinando
                múltiples proveedores y cumpliendo todas las normativas, tu evento automotriz también puede tener la
                mejor experiencia gastronómica.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Truck className="mr-2 h-5 w-5" />
                  Cotizar Food Trucks
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Logística Gastronómica
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
                <h3 className="font-semibold mb-2">4,000+ Asistentes</h3>
                <p className="text-sm opacity-80">4 días consecutivos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Food Trucks</h3>
                <p className="text-sm opacity-80">Múltiples opciones</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Normativas</h3>
                <p className="text-sm opacity-80">Cumplimiento total</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">CeNARD 2024</h3>
                <p className="text-sm opacity-80">Evento automotriz</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento automotriz merece la mejor logística gastronómica?</h3>
              <p className="text-lg opacity-90">
                <strong>Expo Autos CeNARD 2024</strong> confió en DER para gestionar los food trucks de{" "}
                <strong>4,000+ asistentes durante 4 días consecutivos</strong>
                con más de 100 vehículos expuestos. Coordinación perfecta, múltiples proveedores y cumplimiento total de
                normativas. Tu evento automotriz también puede tener una experiencia gastronómica impecable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
