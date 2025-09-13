import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Zap,
  Monitor,
  CheckCircle,
  ArrowRight,
  Globe,
  Target,
  Calendar,
  MapPin,
  Building,
  Camera,
  Brain,
  Lightbulb,
  FileImage,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SYNERFY - IASP Latinoamérica 2025 - Cobertura Fotográfica Profesional | DER EVENT HUB",
  description:
    "Descubrí cómo DER realizó la cobertura fotográfica profesional para SYNERFY - Conferencia IASP Latinoamérica 2025 en el Parque de Innovación. Documentación sistema de ingreso y networking de alto nivel.",
  keywords: [
    "SYNERFY IASP Latinoamérica 2025 fotografía profesional",
    "cobertura fotográfica parques científicos tecnológicos",
    "documentación sistema ingreso Synerfy tiempo real",
    "Parque Innovación Buenos Aires networking",
    "fotografía eventos innovación inteligencia artificial",
  ],
  openGraph: {
    title: "SYNERFY - IASP Latinoamérica 2025 - Cobertura Fotográfica Profesional",
    description:
      "Cobertura fotográfica profesional para el encuentro regional entre líderes y referentes de parques científicos y tecnológicos en el Parque de Innovación de Buenos Aires.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747410817/IMG_4052_r3qohv.jpg",
        width: 1200,
        height: 630,
        alt: "SYNERFY - IASP Latinoamérica 2025 - Cobertura fotográfica profesional",
      },
    ],
  },
}

export default function SynerfyIASPLatinoamerica2025Page() {
  const projectStats = [
    { icon: Camera, label: "Servicio", value: "Fotografía", color: "text-[#FF5C00]" },
    { icon: Brain, label: "Temática", value: "IA", color: "text-[#333333]" },
    { icon: Building, label: "Enfoque", value: "Regional", color: "text-[#FF5C00]" },
    { icon: Lightbulb, label: "Sector", value: "Innovación", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Cobertura Fotográfica Profesional",
      icon: Camera,
      description: "Documentación completa del encuentro regional entre líderes de parques científicos y tecnológicos",
    },
    {
      name: "Documentación Sistema Synerfy",
      icon: Monitor,
      description: "Registro en tiempo real del funcionamiento del sistema de ingreso desarrollado por Synerfy",
    },
    {
      name: "Fotografía Networking",
      icon: Users,
      description: "Captura de momentos clave del networking y actividades del evento de alto nivel profesional",
    },
    {
      name: "Material Editado Inmediato",
      icon: Zap,
      description: "Entrega de material seleccionado y editado para comunicación inmediata post-evento",
    },
    {
      name: "Registro Visual Técnico",
      icon: Target,
      description: "Mirada técnica y creativa para resaltar la innovación en contexto académico",
    },
    {
      name: "Archivo Alta Calidad",
      icon: FileImage,
      description: "Material visual de alta calidad para futuras comunicaciones institucionales",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Fotográfica",
      duracion: "Pre-evento",
      actividades: [
        "Briefing Conferencia IASP 2025",
        "Coordinación sistema Synerfy",
        "Planificación cobertura técnica",
        "Preparación equipo especializado",
      ],
    },
    {
      fase: "Setup y Preparación",
      duracion: "Día del evento",
      actividades: [
        "Setup Parque de Innovación",
        "Coordinación logística ágil",
        "Preparación múltiples actividades",
        "Configuración técnica avanzada",
      ],
    },
    {
      fase: "Cobertura en Vivo",
      duracion: "Durante evento",
      actividades: [
        "Documentación ingreso invitados",
        "Registro sistema Synerfy funcionando",
        "Cobertura networking profesional",
        "Captura momentos clave IA",
      ],
    },
    {
      fase: "Edición y Entrega",
      duracion: "Post-evento inmediato",
      actividades: [
        "Selección material destacado",
        "Edición profesional rápida",
        "Entrega comunicación inmediata",
        "Archivo alta calidad completo",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Monitor,
      titulo: "Documentación Sistema Técnico",
      descripcion: "Registrar funcionamiento sistema Synerfy en tiempo real con precisión y estética profesional",
      solucion: "Mirada técnica y creativa + registro preciso + destacar eficiencia y experiencia usuario",
    },
    {
      icon: Building,
      titulo: "Evento Académico Alto Nivel",
      descripcion: "Cobertura en contexto profesional con líderes regionales de parques científicos",
      solucion: "Enfoque institucional + fotografía discreta + captura networking de alto nivel",
    },
    {
      icon: Zap,
      titulo: "Múltiples Actividades Simultáneas",
      descripcion: "Logística ágil en Parque de Innovación con actividades paralelas y detalles clave",
      solucion: "Equipo especializado + logística ágil + atención detalles + cobertura completa",
    },
  ]

  const eventoFeatures = [
    {
      name: "Lema Oficial IA",
      description: "Innovación en ciudades en la era de la Inteligencia Artificial",
      icon: Brain,
    },
    {
      name: "Expertos Regionales",
      description: "Líderes de parques científicos de toda Latinoamérica",
      icon: Globe,
    },
    {
      name: "Buenas Prácticas",
      description: "Compartir experiencias y desafíos de hubs de innovación",
      icon: Lightbulb,
    },
    {
      name: "Networking Profesional",
      description: "Encuentro de alto nivel entre referentes del sector",
      icon: Users,
    },
  ]

  const entregables = [
    { name: "Material Seleccionado", descripcion: "Fotografías destacadas del evento" },
    { name: "Edición Profesional", descripcion: "Material editado para comunicación" },
    { name: "Entrega Inmediata", descripcion: "Disponibilidad post-evento rápida" },
    { name: "Archivo Completo", descripcion: "Material alta calidad para futuro uso" },
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
            <span className="text-[#333333] font-medium">SYNERFY - IASP Latinoamérica 2025</span>
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
                  <Badge className="bg-white/20 text-white">IASP Latinoamérica</Badge>
                  <Badge className="bg-white/20 text-white">Innovación IA</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  SYNERFY - IASP <span className="text-yellow-300">2025</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Cobertura fotográfica profesional para el encuentro regional.</strong>
                  DER documentó la <strong>Conferencia IASP Latinoamérica 2025</strong> entre líderes de parques
                  científicos con <strong>sistema Synerfy</strong> en el
                  <strong>Parque de Innovación de Buenos Aires</strong> bajo el lema "Innovación en ciudades en la era
                  de la IA".
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Fotografía</div>
                    <div className="text-sm opacity-80">Servicio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">IA</div>
                    <div className="text-sm opacity-80">Temática</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Regional</div>
                    <div className="text-sm opacity-80">Enfoque</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Innovación</div>
                    <div className="text-sm opacity-80">Sector</div>
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
                    <span>Parque de Innovación, Buenos Aires</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Conferencia IASP</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747410817/IMG_4052_r3qohv.jpg"
                    alt="SYNERFY - IASP Latinoamérica 2025 - Cobertura fotográfica profesional"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      SYNERFY - IASP Latinoamérica 2025 - Cobertura fotográfica profesional
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
                Conferencia <span className="text-[#FF5C00]">IASP</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Encuentro regional de líderes en parques científicos y tecnológicos
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
              <p className="text-xl text-[#333333]">Documentación técnica y networking profesional de alto nivel</p>
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

      {/* Servicios Fotográficos */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Cobertura <span className="text-[#FF5C00]">Fotográfica</span>
              </h2>
              <p className="text-xl text-[#333333]">Documentación profesional especializada en innovación</p>
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
                Proceso <span className="text-[#FF5C00]">Fotográfico</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación a la entrega inmediata</p>
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
                Innovación <span className="text-[#FF5C00]">en IA</span>
              </h2>
              <p className="text-xl text-[#333333]">Temática y enfoque de la Conferencia IASP 2025</p>
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

      {/* Entregables */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Material <span className="text-[#FF5C00]">Entregado</span>
              </h2>
              <p className="text-xl text-[#333333]">Resultados fotográficos profesionales</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {entregables.map((entregable, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00] text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileImage className="w-8 h-8 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">{entregable.name}</h3>
                    <p className="text-sm text-[#333333] opacity-70">{entregable.descripcion}</p>
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
              <p className="text-xl text-[#333333]">Logros comprobados de la cobertura fotográfica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Técnicos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Técnicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Documentación Sistema Synerfy</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Registro preciso funcionamiento en tiempo real
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Entrega Inmediata</div>
                        <div className="text-sm text-[#333333] opacity-70">Material editado disponible post-evento</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileImage className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Material Alta Calidad</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Archivo completo para futuras comunicaciones
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Mirada Técnica y Creativa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Innovación destacada en contexto académico
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Profesional */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Networking Documentado</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Captura momentos clave entre líderes regionales
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Evento Académico Alto Nivel</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Cobertura especializada parques científicos
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Temática IA e Innovación</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Registro visual era Inteligencia Artificial
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Alcance Regional Latinoamericano</div>
                        <div className="text-sm text-[#333333] opacity-70">Expertos de toda la región documentados</div>
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
                <Camera className="w-4 h-4 mr-2" />
                ¿Tenés un evento de innovación que necesita cobertura fotográfica profesional?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Documentemos tu próximo <span className="text-yellow-300">evento de innovación</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si documentamos la <strong>Conferencia IASP Latinoamérica 2025</strong> con cobertura fotográfica
                profesional, sistema Synerfy en tiempo real y networking de alto nivel en el Parque de Innovación, tu
                evento también puede tener la mejor documentación visual especializada.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Cotizar Cobertura Fotográfica
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Fotografía Profesional
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Fotografía Profesional</h3>
                <p className="text-sm opacity-80">Alta calidad técnica</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Documentación Técnica</h3>
                <p className="text-sm opacity-80">Sistemas en tiempo real</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Entrega Inmediata</h3>
                <p className="text-sm opacity-80">Material post-evento</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">IASP 2025</h3>
                <p className="text-sm opacity-80">Innovación en IA</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                ¿Tu evento de innovación merece la mejor documentación visual?
              </h3>
              <p className="text-lg opacity-90">
                La <strong>Conferencia IASP Latinoamérica 2025</strong> confió en DER para la cobertura fotográfica
                profesional con documentación del sistema Synerfy, networking de líderes regionales y temática IA en el
                Parque de Innovación. Tu evento también puede tener una documentación visual impecable y especializada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
