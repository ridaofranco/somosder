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
  Target,
  Award,
  Building,
  Clock,
  Eye,
  Camera,
  Apple,
  Utensils,
  FileImage,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fiesta Nacional de la Manzana - Zona Gastronómica y Fotografía | DER EVENT HUB",
  description:
    "Descubrí cómo DER organizó la zona gastronómica y fotografía profesional para la Fiesta Nacional de la Manzana. Colaboración con Mind Market, identidad regional y documentación completa.",
  keywords: [
    "Fiesta Nacional Manzana zona gastronómica fotografía",
    "evento tradicional argentino producción gastronómica",
    "Mind Market colaboración DER identidad regional",
    "protocolos sanitarios eventos masivos múltiples jornadas",
    "fotografía profesional documentación gastronómica",
  ],
  openGraph: {
    title: "Fiesta Nacional de la Manzana - Zona Gastronómica y Fotografía",
    description:
      "Organización del área gastronómica y servicio de fotografía profesional para documentar toda el área y sus actividades en la Fiesta Nacional de la Manzana.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/fiesta-nacional-manzana.jpg",
        width: 1200,
        height: 630,
        alt: "Fiesta Nacional de la Manzana - Zona gastronómica y fotografía",
      },
    ],
  },
}

export default function FiestaNacionalManzanaPage() {
  const projectStats = [
    { icon: Utensils, label: "Servicio", value: "Gastronomía", color: "text-[#FF5C00]" },
    { icon: Camera, label: "Fotografía", value: "Profesional", color: "text-[#333333]" },
    { icon: Apple, label: "Temática", value: "Regional", color: "text-[#FF5C00]" },
    { icon: Building, label: "Colaboración", value: "Mind Market", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Zona Gastronómica Regional",
      icon: Utensils,
      description:
        "Organización completa del área gastronómica con identidad regional y productos derivados de la manzana",
    },
    {
      name: "Fotografía Profesional",
      icon: Camera,
      description: "Documentación sistemática de toda la experiencia gastronómica y actividades del área",
    },
    {
      name: "Selección Proveedores",
      icon: Target,
      description: "Coordinación y selección de proveedores especializados en productos regionales",
    },
    {
      name: "Diseño del Espacio",
      icon: Monitor,
      description: "Diseño de espacio con áreas diferenciadas: comida rápida, gourmet y degustaciones",
    },
    {
      name: "Protocolos Sanitarios",
      icon: Shield,
      description: "Implementación de protocolos sanitarios específicos para garantizar seguridad alimentaria",
    },
    {
      name: "Supervisión Operativa",
      icon: Zap,
      description: "Supervisión operativa continua durante múltiples jornadas consecutivas del evento",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Gastronómica",
      duracion: "Pre-evento",
      actividades: [
        "Briefing Fiesta Nacional Manzana",
        "Colaboración estratégica Mind Market",
        "Concepto gastronómico regional",
        "Selección proveedores especializados",
      ],
    },
    {
      fase: "Diseño y Permisos",
      duracion: "Preparación",
      actividades: [
        "Diseño espacio gastronómico",
        "Gestión permisos sanitarios",
        "Protocolos seguridad alimentaria",
        "Coordinación áreas diferenciadas",
      ],
    },
    {
      fase: "Montaje y Ejecución",
      duracion: "Durante evento",
      actividades: [
        "Montaje zona gastronómica",
        "Sistema rotación proveedores",
        "Supervisión operativa continua",
        "Cobertura fotográfica sistemática",
      ],
    },
    {
      fase: "Documentación y Cierre",
      duracion: "Post-evento",
      actividades: [
        "Procesamiento material fotográfico",
        "Evaluación operativa completa",
        "Entrega documentación final",
        "Análisis resultados colaboración",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Apple,
      titulo: "Identidad Regional Auténtica",
      descripcion: "Crear propuesta gastronómica que honrara identidad regional con productos derivados de manzana",
      solucion: "Concepto gastronómico regional + productos locales + áreas diferenciadas + experiencias auténticas",
    },
    {
      icon: Users,
      titulo: "Evento Masivo Múltiples Jornadas",
      descripcion: "Gestionar espacio operativo eficiente durante múltiples jornadas consecutivas para público masivo",
      solucion: "Sistema rotación proveedores + supervisión continua + protocolos operativos + frescura garantizada",
    },
    {
      icon: Camera,
      titulo: "Documentación Profesional Completa",
      descripcion: "Documentar profesionalmente toda experiencia gastronómica para promoción y archivo",
      solucion: "Equipo fotográfico especializado + cobertura sistemática + momentos clave + material promocional",
    },
  ]

  const areasGastronomicas = [
    {
      name: "Comida Rápida Regional",
      description: "Opciones rápidas con identidad local y productos de la manzana",
      icon: Zap,
    },
    {
      name: "Experiencias Gourmet",
      description: "Propuestas gastronómicas premium con productos regionales",
      icon: Award,
    },
    {
      name: "Zona de Degustaciones",
      description: "Espacio especializado para degustación de productos derivados",
      icon: Apple,
    },
    {
      name: "Rotación de Proveedores",
      description: "Sistema dinámico para mantener frescura durante todo el evento",
      icon: Target,
    },
  ]

  const colaboracionFeatures = [
    {
      name: "Mind Market Partnership",
      description: "Colaboración estratégica en producción gastronómica",
      icon: Building,
    },
    {
      name: "Identidad Cultural",
      description: "Integración perfecta con identidad del festival tradicional",
      icon: Heart,
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
            <span className="text-[#333333] font-medium">Fiesta Nacional de la Manzana</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Fotografía</Badge>
                  <Badge className="bg-white/20 text-white">Zona Gastronómica</Badge>
                  <Badge className="bg-white/20 text-white">Identidad Regional</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Fiesta Nacional <span className="text-yellow-300">de la Manzana</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Organización del área gastronómica y fotografía profesional.</strong>
                  DER colaboró con <strong>Mind Market</strong> en la producción de la
                  <strong>zona gastronómica</strong> con identidad regional y
                  <strong>documentación fotográfica completa</strong> de toda la experiencia gastronómica del evento
                  tradicional.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Gastronomía</div>
                    <div className="text-sm opacity-80">Servicio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Fotografía</div>
                    <div className="text-sm opacity-80">Profesional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Regional</div>
                    <div className="text-sm opacity-80">Temática</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Mind Market</div>
                    <div className="text-sm opacity-80">Colaboración</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Apple className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Fiesta Nacional</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Zona Gastronómica</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Documentación Completa</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/fiesta-nacional-manzana.jpg"
                    alt="Fiesta Nacional de la Manzana - Zona gastronómica y fotografía"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Fiesta Nacional de la Manzana - Zona gastronómica y fotografía profesional
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
                Evento <span className="text-[#FF5C00]">Tradicional</span>
              </h2>
              <p className="text-xl text-[#333333]">Fiesta Nacional con identidad regional y productos locales</p>
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
                Identidad regional auténtica con operación masiva y documentación profesional
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
              <p className="text-xl text-[#333333]">Gastronomía regional y documentación fotográfica profesional</p>
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
              <p className="text-xl text-[#333333]">De la planificación gastronómica a la documentación final</p>
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

      {/* Áreas Gastronómicas */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Áreas <span className="text-[#FF5C00]">Gastronómicas</span>
              </h2>
              <p className="text-xl text-[#333333]">Espacios diferenciados con identidad regional</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areasGastronomicas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mr-4">
                        <area.icon className="w-6 h-6 text-[#FF5C00]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">{area.name}</h3>
                    </div>
                    <p className="text-[#333333]">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Colaboración Mind Market */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Colaboración <span className="text-[#FF5C00]">Mind Market</span>
              </h2>
              <p className="text-xl text-[#333333]">Alianza estratégica para producción gastronómica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {colaboracionFeatures.map((feature, index) => (
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

      {/* Resultados Verificables */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Verificables</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros comprobados de la gestión gastronómica y fotográfica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Gastronómicos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Utensils className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Gastronómicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Apple className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Espacio con Identidad Regional</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Zona gastronómica auténtica con productos de la manzana
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Operación Continua Múltiples Jornadas</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Funcionamiento eficiente durante todo el evento
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Cumplimiento Normativas Sanitarias</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Protocolos sanitarios específicos implementados
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Valoración Positiva</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Reconocimiento de autoridades y público asistente
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Logros Fotográficos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Fotográficos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FileImage className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Cobertura Profesional Completa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Documentación sistemática de toda el área gastronómica
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Eye className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Momentos Clave Capturados</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Platos destacados e interacción del público
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Material Promocional y Archivo</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Contenido para comunicación y registro histórico
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Colaboración Mind Market Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Alianza estratégica documentada profesionalmente
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
                <Apple className="w-4 h-4 mr-2" />
                ¿Tenés un evento tradicional que necesita zona gastronómica y documentación?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Creemos la zona gastronómica perfecta para tu{" "}
                <span className="text-yellow-300">evento tradicional</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si organizamos la <strong>zona gastronómica de la Fiesta Nacional de la Manzana</strong>
                con identidad regional auténtica, colaboración con Mind Market, protocolos sanitarios y documentación
                fotográfica profesional completa, tu evento tradicional también puede tener una experiencia gastronómica
                memorable.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Utensils className="mr-2 h-5 w-5" />
                  Cotizar Zona Gastronómica
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Gastronomía Regional
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Identidad Regional</h3>
                <p className="text-sm opacity-80">Productos locales</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Fotografía Profesional</h3>
                <p className="text-sm opacity-80">Documentación completa</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Protocolos Sanitarios</h3>
                <p className="text-sm opacity-80">Seguridad alimentaria</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Mind Market</h3>
                <p className="text-sm opacity-80">Colaboración exitosa</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento tradicional merece la mejor zona gastronómica?</h3>
              <p className="text-lg opacity-90">
                La <strong>Fiesta Nacional de la Manzana</strong> confió en DER para organizar su zona gastronómica con
                identidad regional auténtica, colaboración con Mind Market, operación continua durante múltiples
                jornadas y documentación fotográfica profesional. Tu evento tradicional también puede tener una
                experiencia gastronómica memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
