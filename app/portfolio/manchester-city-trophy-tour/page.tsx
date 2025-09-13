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
  Monitor,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Target,
  Award,
  Globe,
  TrendingUp,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Manchester City Trophy Tour - 2,000+ Fanáticos Branding Mundial | DER EVENT HUB",
  description:
    "Descubrí cómo DER produjo integralmente Manchester City Trophy Tour con 2,000+ fanáticos, múltiples activaciones simultáneas y branding deportivo de clase mundial.",
  keywords: [
    "Manchester City Trophy Tour 2000 fanáticos",
    "branding deportivo mundial Argentina",
    "activaciones simultáneas Manchester City",
    "producción integral emblemática DER",
    "experiencia fan Manchester City",
  ],
  openGraph: {
    title: "Manchester City Trophy Tour - 2,000+ Fanáticos Branding Mundial",
    description:
      "Producción integral emblemática con 2,000+ fanáticos reunidos en atmósfera de branding deportivo de clase mundial con múltiples activaciones simultáneas.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg",
        width: 1200,
        height: 630,
        alt: "Manchester City Trophy Tour 2000 fanáticos",
      },
    ],
  },
}

export default function ManchesterCityTrophyTourPage() {
  const projectStats = [
    { icon: Users, label: "Fanáticos", value: "2,000+", color: "text-orange-500" },
    { icon: Globe, label: "Branding", value: "Mundial", color: "text-gray-700" },
    { icon: Target, label: "Activaciones", value: "Múltiples", color: "text-orange-500" },
    { icon: Award, label: "Producción", value: "Integral", color: "text-gray-700" },
  ]

  const services = [
    {
      name: "Producción Integral",
      icon: Monitor,
      description: "Diseño, coordinación y ejecución completa desde conceptualización hasta operativo en terreno",
    },
    {
      name: "Branding Deportivo Mundial",
      icon: Globe,
      description: "Identidad global Manchester City adaptada al contexto argentino con toques locales",
    },
    {
      name: "Experiencia Fan Auténtica",
      icon: Star,
      description: "Atmósfera inmersiva que conectó genuinamente con 2,000+ fanáticos del club",
    },
    {
      name: "Activaciones Múltiples",
      icon: Zap,
      description: "Gestión simultánea de múltiples activaciones con equipos dedicados especializados",
    },
    {
      name: "Gestión Prensa",
      icon: BarChart3,
      description: "Cobertura en medios principales con impacto mediático significativo",
    },
    {
      name: "Sistema Tiempo Real",
      icon: Shield,
      description: "Gestión operativa en tiempo real para coordinación perfecta de todas las actividades",
    },
  ]

  const timeline = [
    {
      phase: "Conceptualización Creativa",
      duration: "6 semanas",
      tasks: [
        "Diseño experiencia Manchester City auténtica",
        "Adaptación identidad global al contexto argentino",
        "Planificación activaciones múltiples",
        "Desarrollo concepto branding mundial",
      ],
    },
    {
      phase: "Coordinación Integral",
      duration: "4 semanas",
      tasks: [
        "Coordinación equipos especializados",
        "Setup sistema gestión tiempo real",
        "Preparación activaciones simultáneas",
        "Organización logística fanáticos",
      ],
    },
    {
      phase: "Ejecución Emblemática",
      duration: "1 día",
      tasks: [
        "Gestión 2,000+ fanáticos reunidos",
        "Activaciones múltiples simultáneas",
        "Branding deportivo clase mundial",
        "Cobertura medios principales",
      ],
    },
    {
      phase: "Impacto Mediático",
      duration: "2 semanas",
      tasks: [
        "Análisis cobertura medios principales",
        "Evaluación experiencia inmersiva",
        "Reporte impacto fanáticos",
        "Documentación producción emblemática",
      ],
    },
  ]

  const desafios = [
    {
      icon: Star,
      titulo: "Experiencia Auténtica Manchester City",
      descripcion: "Crear atmósfera genuina del club inglés que conecte con fanáticos argentinos",
      solucion: "Identidad global con toques locales y experiencia inmersiva auténtica",
    },
    {
      icon: Globe,
      titulo: "Adaptación Contexto Argentino",
      descripcion: "Mantener branding mundial mientras se adapta a la cultura local",
      solucion: "Equilibrio perfecto entre identidad global Manchester City y elementos locales",
    },
    {
      icon: Zap,
      titulo: "Múltiples Activaciones Simultáneas",
      descripcion: "Coordinar diferentes actividades para 2,000+ fanáticos al mismo tiempo",
      solucion: "Equipos dedicados especializados con sistema de gestión en tiempo real",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-500">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:text-orange-500">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Manchester City Trophy Tour</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div>
                <Link href="/portfolio" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Portfolio
                </Link>

                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-orange-500 text-white">Deportivo</Badge>
                  <Badge className="bg-gray-700 text-white">Branding Mundial</Badge>
                  <Badge className="bg-gray-600 text-white">Producción Integral</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Manchester City <span className="text-orange-500">Trophy Tour</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Una de nuestras producciones más emblemáticas.</strong> DER se encargó de diseñar, coordinar y
                  ejecutar cada aspecto desde conceptualización creativa hasta operativo en terreno, reuniendo{" "}
                  <strong>más de 2,000 fanáticos</strong> en una atmósfera de{" "}
                  <strong>branding deportivo de clase mundial</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">2K+</div>
                    <div className="text-sm opacity-80">Fanáticos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">Mundial</div>
                    <div className="text-sm opacity-80">Branding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">Múltiples</div>
                    <div className="text-sm opacity-80">Activaciones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">Integral</div>
                    <div className="text-sm opacity-80">Producción</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Argentina</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="w-4 h-4 mr-2" />
                    <span>Experiencia Fan</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg"
                    alt="Manchester City Trophy Tour 2000 fanáticos"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Manchester City Trophy Tour - 2,000+ fanáticos, branding deportivo mundial
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Producción <span className="text-orange-500">Emblemática</span>
              </h2>
              <p className="text-xl text-gray-700">
                Una de nuestras producciones más destacadas con branding deportivo de clase mundial
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projectStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                El <span className="text-orange-500">Desafío</span>
              </h2>
              <p className="text-xl text-gray-700">
                Crear experiencia auténtica Manchester City con múltiples activaciones simultáneas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {desafios.map((desafio, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <desafio.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{desafio.titulo}</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      <strong>Desafío:</strong> {desafio.descripcion}
                    </p>
                    <p className="text-orange-700 text-sm">
                      <strong>Solución:</strong> {desafio.solucion}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Producción <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">
                6 servicios especializados para experiencia Manchester City auténtica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline del Proyecto */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Desarrollo <span className="text-orange-500">Emblemático</span>
              </h2>
              <p className="text-xl text-gray-700">De la conceptualización creativa al impacto mediático</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((phase, index) => (
                <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-orange-500 text-white">Fase {index + 1}</Badge>
                      <span className="text-sm text-gray-500">{phase.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-orange-200"></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Comprobados */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Resultados <span className="text-orange-500">Verificables</span>
              </h2>
              <p className="text-xl text-gray-700">Impacto real de la producción emblemática</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Resultados Operativos */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-orange-500 mr-2" />
                    Logros Operativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">2,000+ Fanáticos Reunidos</div>
                        <div className="text-sm text-gray-600">En atmósfera de branding deportivo mundial</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-gray-700 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Activaciones Múltiples Simultáneas</div>
                        <div className="text-sm text-gray-600">Coordinación perfecta con equipos especializados</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Experiencia Inmersiva Lograda</div>
                        <div className="text-sm text-gray-600">Conexión auténtica con identidad Manchester City</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-700 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Producción Integral Exitosa</div>
                        <div className="text-sm text-gray-600">Desde conceptualización hasta ejecución completa</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Mediático */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 text-orange-500 mr-2" />
                    Impacto Mediático
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Cobertura Medios Principales</div>
                        <div className="text-sm text-gray-600">Impacto mediático significativo nacional</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-gray-700 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Branding Deportivo Clase Mundial</div>
                        <div className="text-sm text-gray-600">Identidad global adaptada al contexto argentino</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Referencia Producción Deportiva</div>
                        <div className="text-sm text-gray-600">Estableció estándar para eventos deportivos</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-gray-700 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Experiencia Fan Auténtica</div>
                        <div className="text-sm text-gray-600">Conexión genuina con cultura Manchester City</div>
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                ¿Tenés un evento deportivo de clase mundial?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Creemos tu experiencia <span className="text-orange-500">deportiva emblemática</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si produjimos integralmente <strong>Manchester City Trophy Tour con 2,000+ fanáticos</strong> y branding
                deportivo de clase mundial, podemos crear la experiencia deportiva perfecta para tu marca o evento.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Award className="mr-2 h-5 w-5" />
                  Cotizar Evento Deportivo
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Hablar sobre Branding Deportivo
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
                <h3 className="font-semibold mb-2">2,000+ Fanáticos</h3>
                <p className="text-sm opacity-80">Experiencia masiva</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Branding Mundial</h3>
                <p className="text-sm opacity-80">Clase internacional</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Activaciones Múltiples</h3>
                <p className="text-sm opacity-80">Coordinación perfecta</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Producción Integral</h3>
                <p className="text-sm opacity-80">Emblemática</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu marca deportiva merece una experiencia emblemática?</h3>
              <p className="text-lg opacity-90">
                Manchester City confió en DER para su Trophy Tour más importante:{" "}
                <strong>2,000+ fanáticos reunidos</strong> en atmósfera de branding deportivo de clase mundial. Tu
                evento deportivo también puede ser una producción emblemática.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
