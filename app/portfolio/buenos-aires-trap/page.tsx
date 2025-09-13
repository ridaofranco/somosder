import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Target,
  Award,
  TrendingUp,
  MapPin,
  Building,
  Music,
  Utensils,
  Recycle,
  Truck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Buenos Aires Trap Festival - Zona Gastronómica 120,000 Asistentes | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó la zona gastronómica del Buenos Aires Trap Festival para 120,000 asistentes en co-producción con Mind Market. Street food urbano, gestión sostenible y logística masiva.",
  keywords: [
    "Buenos Aires Trap Festival zona gastronómica 120000",
    "street food urbano trap festival masivo",
    "gestión sostenible residuos 120mil asistentes",
    "co-producción Mind Market DER logística",
    "festival cocina urbana Buenos Aires",
  ],
  openGraph: {
    title: "Buenos Aires Trap Festival - Zona Gastronómica 120,000 Asistentes",
    description:
      "Gestión de zona gastronómica en festival urbano para 120,000 personas, en colaboración con Mind Market. Street food urbano y gestión sostenible.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/buenos-aires-trap-festival.jpg",
        width: 1200,
        height: 630,
        alt: "Buenos Aires Trap Festival - Zona gastronómica 120,000 asistentes",
      },
    ],
  },
}

export default function BuenosAiresTrapFestivalPage() {
  const projectStats = [
    { icon: Users, label: "Asistentes", value: "120,000", color: "text-[#FF5C00]" },
    { icon: Music, label: "Género", value: "Trap", color: "text-[#333333]" },
    { icon: Utensils, label: "Zona", value: "Gastronómica", color: "text-[#FF5C00]" },
    { icon: Recycle, label: "Gestión", value: "Sostenible", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Gestión Zona Gastronómica",
      icon: Utensils,
      description: "Coordinación completa de zona gastronómica para 120,000 asistentes del festival urbano",
    },
    {
      name: "Logística y Montaje",
      icon: Truck,
      description: "Montaje de espacios gastronómicos y logística masiva para evento de trap",
    },
    {
      name: "Producción Creativa",
      icon: Target,
      description: "Concepto 'street food urbano' integrado con estética trap del festival",
    },
    {
      name: "Coordinación Proveedores",
      icon: Building,
      description: "Gestión de múltiples proveedores gastronómicos con servicio rápido y calidad",
    },
    {
      name: "Layout Optimizado",
      icon: MapPin,
      description: "Diseño de flujos optimizados y espacios de consumo con ambientación temática",
    },
    {
      name: "Gestión Residuos Sostenible",
      icon: Recycle,
      description: "Sistema de gestión de residuos sostenible para festival masivo urbano",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Co-producción",
      duracion: "8 semanas",
      actividades: [
        "Alianza estratégica Mind Market",
        "Concepto street food urbano",
        "Selección proveedores gastronómicos",
        "Diseño layout zona gastronómica",
      ],
    },
    {
      fase: "Desarrollo Creativo",
      duracion: "4 semanas",
      actividades: [
        "Integración estética trap festival",
        "Ambientación temática espacios",
        "Coordinación múltiples proveedores",
        "Sistema gestión residuos sostenible",
      ],
    },
    {
      fase: "Montaje y Ejecución",
      duracion: "Días del festival",
      actividades: [
        "Montaje zona gastronómica masiva",
        "Coordinación 120,000 asistentes",
        "Gestión flujos optimizados",
        "Operación street food urbano",
      ],
    },
    {
      fase: "Gestión y Cierre",
      duracion: "Post-evento",
      actividades: [
        "Gestión sostenible residuos",
        "Coordinación desmontaje",
        "Evaluación satisfacción asistentes",
        "Reportes co-producción exitosa",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Escala Masiva 120,000 Personas",
      descripcion: "Festival urbano con 120,000 asistentes requería zona gastronómica de gran escala",
      solucion: "Concepto street food urbano + múltiples proveedores + layout optimizado para flujos masivos",
    },
    {
      icon: Music,
      titulo: "Coherencia Estética Urbana",
      descripcion: "Zona gastronómica debía complementar experiencia musical trap con coherencia estética",
      solucion: "Integración estética trap + ambientación temática + espacios consumo alineados",
    },
    {
      icon: Building,
      titulo: "Coordinación Múltiples Proveedores",
      descripcion: "Gestión eficiente de múltiples proveedores gastronómicos con servicio rápido",
      solucion: "Selección especializada + coordinación operativa + sistema integrado festival",
    },
  ]

  const colaboracionFeatures = [
    {
      name: "Co-producción Mind Market",
      description: "Alianza estratégica para Festival de Cocina Urbana",
      icon: Building,
    },
    {
      name: "Street Food Urbano",
      description: "Concepto gastronómico integrado con estética trap",
      icon: Utensils,
    },
    {
      name: "Sinergia Marcas",
      description: "Trabajo colaborativo con otras marcas y equipos",
      icon: Target,
    },
    {
      name: "Resultado Cohesivo",
      description: "Alto impacto con integración sistema general",
      icon: Award,
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
            <span className="text-[#333333] font-medium">Buenos Aires Trap Festival</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Co-producción</Badge>
                  <Badge className="bg-white/20 text-white">120,000 Asistentes</Badge>
                  <Badge className="bg-white/20 text-white">Festival Urbano</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Buenos Aires Trap <span className="text-yellow-300">Festival</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Gestión de zona gastronómica en festival urbano para 120,000 personas.</strong>
                  DER en <strong>co-producción con Mind Market</strong> desarrolló el
                  <strong>Festival de Cocina Urbana</strong> con concepto street food urbano, logística masiva y{" "}
                  <strong>gestión sostenible de residuos</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">120,000</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Trap</div>
                    <div className="text-sm opacity-80">Género</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Gastronómica</div>
                    <div className="text-sm opacity-80">Zona</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Sostenible</div>
                    <div className="text-sm opacity-80">Gestión</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Buenos Aires</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Festival de Trap</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Co-producción Mind Market</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747799115/Imagen_de_WhatsApp_2025-05-16_a_las_12.46.05_3f53ba85_p44ieh.jpg"
                    alt="Buenos Aires Trap Festival - Zona gastronómica 120,000 asistentes"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Buenos Aires Trap Festival - Zona gastronómica 120,000 asistentes
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
                Festival <span className="text-[#FF5C00]">Masivo</span>
              </h2>
              <p className="text-xl text-[#333333]">El evento más masivo del portfolio DER con 120,000 asistentes</p>
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
              <p className="text-xl text-[#333333]">Zona gastronómica masiva con coherencia estética urbana</p>
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

      {/* Zona Gastronómica */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Zona <span className="text-[#FF5C00]">Gastronómica</span>
              </h2>
              <p className="text-xl text-[#333333]">Festival de Cocina Urbana para 120,000 asistentes</p>
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
              <p className="text-xl text-[#333333]">De la co-producción a la ejecución masiva</p>
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

      {/* Co-producción Mind Market */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Co-producción <span className="text-[#FF5C00]">Mind Market</span>
              </h2>
              <p className="text-xl text-[#333333]">Alianza estratégica para Festival de Cocina Urbana</p>
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
              <p className="text-xl text-[#333333]">Logros comprobados del festival urbano más masivo</p>
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
                        <div className="font-semibold text-[#333333]">120,000 Asistentes Gestionados</div>
                        <div className="text-sm text-[#333333] opacity-70">El evento más masivo del portfolio DER</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Múltiples Proveedores Coordinados</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Gestión eficiente de proveedores gastronómicos
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Integración Sistema General</div>
                        <div className="text-sm text-[#333333] opacity-70">Zona gastronómica integrada al festival</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Recycle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Gestión Sostenible Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sistema de residuos sostenible implementado
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto del Festival */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto del Festival
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Experiencia Gastronómica Urbana</div>
                        <div className="text-sm text-[#333333] opacity-70">Street food alineado con estética trap</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Alto Nivel Satisfacción</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Asistentes satisfechos con zona gastronómica
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Co-producción Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">Alianza estratégica con Mind Market</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Resultado Cohesivo Alto Impacto</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Sinergia con marcas y equipos del festival
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
                ¿Tenés un festival masivo que necesita zona gastronómica?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos la zona gastronómica de tu <span className="text-yellow-300">festival masivo</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos la zona gastronómica del{" "}
                <strong>Buenos Aires Trap Festival para 120,000 asistentes</strong> con street food urbano, gestión
                sostenible y co-producción exitosa, tu festival también puede tener la mejor experiencia gastronómica
                integrada.
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
                  Ver Street Food Urbano
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
                <h3 className="font-semibold mb-2">120,000 Asistentes</h3>
                <p className="text-sm opacity-80">Escala masiva</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Street Food Urbano</h3>
                <p className="text-sm opacity-80">Concepto integrado</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Gestión Sostenible</h3>
                <p className="text-sm opacity-80">Residuos eco-friendly</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Co-producción</h3>
                <p className="text-sm opacity-80">Alianzas estratégicas</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu festival masivo merece la mejor zona gastronómica?</h3>
              <p className="text-lg opacity-90">
                El <strong>Buenos Aires Trap Festival</strong> confió en DER para gestionar la zona gastronómica de{" "}
                <strong>120,000 asistentes</strong> con street food urbano, gestión sostenible y co-producción exitosa
                con Mind Market. Tu festival también puede tener una experiencia gastronómica perfectamente integrada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
