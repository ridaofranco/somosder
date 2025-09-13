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
  CheckCircle,
  ArrowRight,
  Target,
  Award,
  Building,
  Camera,
  Trophy,
  Gift,
  Heart,
  Star,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Saint Mary of the Hills - Torneo de Fútbol Deportivo Educativo | DER EVENT HUB",
  description:
    "Descubrí cómo DER organizó el torneo de fútbol de Saint Mary of the Hills con gestión deportiva integral, 4 sponsors (Hilton Pilar, Pascual Toso, Go Seven, Goalty) y proyecto ad honorem.",
  keywords: [
    "Saint Mary Hills torneo fútbol gestión deportiva",
    "evento deportivo educativo 4 sponsors ad honorem",
    "Hilton Pilar Pascual Toso Go Seven Goalty",
    "sorteos vivo engagement torneo fútbol",
    "proyecto sin costo comunidad educativa",
  ],
  openGraph: {
    title: "Saint Mary of the Hills - Torneo de Fútbol Deportivo Educativo",
    description:
      "Organización integral del torneo de fútbol con gestión deportiva completa, 4 marcas patrocinadoras (Hilton Pilar, Pascual Toso, Go Seven, Goalty), sorteos en vivo y logística integral. Proyecto ad honorem.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/saint-mary-hills-torneo.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Mary of the Hills - Torneo de fútbol deportivo educativo",
      },
    ],
  },
}

export default function SaintMaryOfTheHillsPage() {
  const projectStats = [
    { icon: Trophy, label: "Servicios", value: "6", color: "text-[#FF5C00]" },
    { icon: Building, label: "Sponsors", value: "4", color: "text-[#333333]" },
    { icon: Gift, label: "Sorteos", value: "Vivo", color: "text-[#FF5C00]" },
    { icon: DollarSign, label: "Costo", value: "$0", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Gestión Deportiva",
      icon: Trophy,
      description: "Coordinación integral de múltiples equipos y categorías en espacios optimizados",
    },
    {
      name: "Marcas Patrocinadoras",
      icon: Building,
      description: "Articulación e integración orgánica de sponsors como Hilton Pilar, Pascual Toso, Go Seven y Goalty",
    },
    {
      name: "Sorteos en Vivo",
      icon: Gift,
      description: "Sistema de premios y sorteos con mecánicas participativas para mantener el engagement",
    },
    {
      name: "Logística Integral",
      icon: Zap,
      description: "Control de accesos, cronograma optimizado y coordinación completa del evento",
    },
    {
      name: "Fotografía y Video",
      icon: Camera,
      description: "Documentación completa del torneo capturando momentos únicos y emocionantes",
    },
    {
      name: "Colaboración Ad Honorem",
      icon: Heart,
      description: "Proyecto sin costo para apoyar a la comunidad educativa y fomentar el deporte",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Deportiva",
      duracion: "4 semanas",
      actividades: [
        "Análisis espacios disponibles",
        "Coordinación múltiples categorías",
        "Cronograma optimizado equipos",
        "Logística integral evento",
      ],
    },
    {
      fase: "Integración Sponsors",
      duracion: "3 semanas",
      actividades: [
        "Articulación Hilton Pilar",
        "Coordinación Pascual Toso",
        "Integración Go Seven Goalty",
        "Activación orgánica marcas",
      ],
    },
    {
      fase: "Ejecución Torneo",
      duracion: "Día del evento",
      actividades: [
        "Gestión deportiva tiempo real",
        "Sorteos en vivo mecánicas",
        "Fotografía video documentación",
        "Coordinación completa logística",
      ],
    },
    {
      fase: "Cierre y Evaluación",
      duracion: "1 semana",
      actividades: [
        "Análisis feedback positivo",
        "Reporte sponsors satisfacción",
        "Documentación proyecto honorem",
        "Evaluación comunidad educativa",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Users,
      titulo: "Múltiples Equipos Espacios Limitados",
      descripcion: "Coordinar diferentes categorías y equipos en espacios limitados del colegio",
      solucion: "Cronograma optimizado con gestión deportiva integral y espacios maximizados",
    },
    {
      icon: Building,
      titulo: "Integración Orgánica Sponsors",
      descripcion: "Activar 4 marcas patrocinadoras de manera natural sin saturar el evento",
      solucion: "Articulación estratégica de Hilton Pilar, Pascual Toso, Go Seven y Goalty",
    },
    {
      icon: Gift,
      titulo: "Engagement Durante Torneo",
      descripcion: "Mantener interés de participantes y espectadores durante todo el evento",
      solucion: "Sistema de sorteos en vivo con mecánicas participativas continuas",
    },
  ]

  const marcasPatrocinadoras = [
    {
      name: "Hilton Pilar",
      description: "Descuentos exclusivos y premios para participantes destacados",
      icon: Star,
    },
    {
      name: "Pascual Toso",
      description: "Bebidas premium y espacio de degustación para adultos",
      icon: Award,
    },
    {
      name: "Go Seven",
      description: "Equipamiento deportivo profesional para elevar la competencia",
      icon: Trophy,
    },
    {
      name: "Goalty",
      description: "Premios para equipos y material deportivo especializado",
      icon: Target,
    },
  ]

  const resultadosDestacados = [
    { name: "Múltiples Equipos", descripcion: "Coordinación exitosa" },
    { name: "4 Sponsors", descripcion: "Integración orgánica" },
    { name: "Sorteos y Premios", descripcion: "Engagement continuo" },
    { name: "Feedback Positivo", descripcion: "Valoración excelente" },
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
            <span className="text-[#333333] font-medium">Saint Mary of the Hills</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Deportivo Educativo</Badge>
                  <Badge className="bg-white/20 text-white">4 Sponsors</Badge>
                  <Badge className="bg-white/20 text-white">Ad Honorem</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Saint Mary <span className="text-yellow-300">of the Hills</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Organización integral del torneo de fútbol.</strong>
                  DER gestionó <strong>gestión deportiva completa</strong> con
                  <strong>4 marcas patrocinadoras</strong> (Hilton Pilar, Pascual Toso, Go Seven, Goalty),{" "}
                  <strong>sorteos en vivo</strong> y logística integral.
                  <strong>Proyecto ad honorem</strong> para fomentar el deporte y la comunidad educativa.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">6</div>
                    <div className="text-sm opacity-80">Servicios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4</div>
                    <div className="text-sm opacity-80">Sponsors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Vivo</div>
                    <div className="text-sm opacity-80">Sorteos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">$0</div>
                    <div className="text-sm opacity-80">Costo</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Torneo de Fútbol</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Saint Mary of the Hills</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Colaboración Comunitaria</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/saint-mary-hills-torneo.jpg"
                    alt="Saint Mary of the Hills - Torneo de fútbol deportivo educativo"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Saint Mary of the Hills - Torneo de fútbol con gestión deportiva integral
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
                Torneo <span className="text-[#FF5C00]">de Fútbol</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Saint Mary of the Hills con gestión deportiva integral y compromiso social
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
                Coordinar múltiples equipos, integrar sponsors orgánicamente y mantener engagement
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

      {/* Nuestra Solución */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Nuestra <span className="text-[#FF5C00]">Solución</span>
              </h2>
              <p className="text-xl text-[#333333]">6 servicios integrales para un torneo deportivo exitoso</p>
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

      {/* Desarrollo del Proyecto */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Desarrollo del <span className="text-[#FF5C00]">Proyecto</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación deportiva al proyecto ad honorem exitoso</p>
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

      {/* Marcas Patrocinadoras */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Marcas <span className="text-[#FF5C00]">Patrocinadoras</span>
              </h2>
              <p className="text-xl text-[#333333]">4 sponsors que elevaron la calidad y experiencia del torneo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marcasPatrocinadoras.map((marca, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mr-4">
                        <marca.icon className="w-6 h-6 text-[#FF5C00]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">{marca.name}</h3>
                    </div>
                    <p className="text-[#333333]">{marca.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Verificables</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros concretos del torneo Saint Mary of the Hills</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Deportivos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Deportivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Coordinación de Múltiples Equipos</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Gestión exitosa de diferentes categorías y equipos en espacios optimizados
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Integración Exitosa de Sponsors</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Activación orgánica de 4 marcas patrocinadoras durante todo el evento
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Gift className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Sistema de Sorteos y Premios</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Mecánicas participativas que mantuvieron el engagement durante el torneo
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Feedback Positivo</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Valoración excelente de la institución, participantes y espectadores
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proyecto Ad Honorem */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Proyecto Ad Honorem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-[#333333] mb-4">
                      <strong>Saint Mary of the Hills</strong> fue un proyecto sin costo para apoyar a la comunidad
                      educativa y fomentar el deporte entre los jóvenes.
                    </p>
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Compromiso Social</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          DER realizó este proyecto de manera gratuita como parte de su compromiso con la comunidad
                          educativa
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-2">
                          <DollarSign className="w-6 h-6 text-[#FF5C00]" />
                        </div>
                        <div className="text-sm font-semibold text-[#333333]">Sin Costo</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-2">
                          <Trophy className="w-6 h-6 text-[#FF5C00]" />
                        </div>
                        <div className="text-sm font-semibold text-[#333333]">Fomento Deportivo</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-2">
                          <Building className="w-6 h-6 text-[#FF5C00]" />
                        </div>
                        <div className="text-sm font-semibold text-[#333333]">Comunidad Educativa</div>
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
                <Trophy className="w-4 h-4 mr-2" />
                ¿Tenés un evento deportivo educativo?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Creemos tu próximo <span className="text-yellow-300">torneo deportivo exitoso</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si organizamos el <strong>torneo de fútbol de Saint Mary of the Hills</strong>
                con gestión deportiva integral, <strong>4 marcas patrocinadoras</strong> y sorteos en vivo, podemos
                llevar tu evento deportivo educativo al siguiente nivel.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Cotizar Evento Deportivo
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Consultar Gestión Deportiva
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">4 Sponsors</h3>
                <p className="text-sm opacity-80">Marcas integradas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Sorteos Vivo</h3>
                <p className="text-sm opacity-80">Engagement continuo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Ad Honorem</h3>
                <p className="text-sm opacity-80">Sin costo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Gestión Integral</h3>
                <p className="text-sm opacity-80">Coordinación completa</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu institución educativa merece el mejor torneo deportivo?</h3>
              <p className="text-lg opacity-90">
                <strong>Saint Mary of the Hills</strong> confió en DER para su torneo de fútbol: gestión deportiva
                integral, 4 sponsors, sorteos en vivo y proyecto ad honorem. Tu evento deportivo educativo también puede
                ser un éxito total con compromiso social.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
