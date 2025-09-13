import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Camera,
  Video,
  Users,
  CheckCircle,
  Zap,
  Edit,
  Eye,
  Play,
  ImageIcon,
  Award,
  ArrowRight,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fotografía y Video - Momentos Imborrables | DER EVENT HUB",
  description:
    "Cobertura fotográfica y videográfica profesional para eventos. Capturamos momentos únicos con calidad cinematográfica. Casos reales: SYNERFY IASP 2025, Fiesta Manzana. Edición y entrega rápida.",
  keywords: [
    "fotografia eventos",
    "video eventos",
    "cobertura fotografica",
    "videografia profesional",
    "edicion video",
    "streaming eventos",
    "DER Event Hub fotografia",
  ],
  openGraph: {
    title: "Fotografía y Video - Cada Imagen Cuenta una Historia | DER EVENT HUB",
    description:
      "Inmortalizamos los momentos más importantes de tu evento. Nuestro ojo experto captura emociones genuinas con calidad cinematográfica.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/fotografia-video-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Fotografía y Video DER Event Hub",
      },
    ],
  },
}

export default function FotografiaVideoPage() {
  const features = [
    {
      icon: Camera,
      title: "Fotografía Profesional",
      description: "Grupales, ambiente, producto, institucionales y espontáneas con ojo experto",
      color: "text-orange-500",
    },
    {
      icon: Video,
      title: "Video Cinematográfico",
      description: "Multicámara, resumen, entrevistas, livestream y aftermovies de alta definición",
      color: "text-red-500",
    },
    {
      icon: Edit,
      title: "Edición Avanzada",
      description: "Postproducción con branding, retoque fotográfico y formatos entregables",
      color: "text-orange-600",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Highlights en 24-48h e insta-service para redes sociales en tiempo real",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Award,
      title: "Eventos Corporativos",
      description: "Documentación profesional empresarial",
      examples: ["SYNERFY IASP Latinoamérica 2025", "Conferencias ejecutivas", "Lanzamientos de producto"],
    },
    {
      icon: Users,
      title: "Eventos Masivos",
      description: "Cobertura de gran escala",
      examples: ["Fiesta Nacional de la Manzana", "Festivales culturales", "Competencias deportivas"],
    },
    {
      icon: Heart,
      title: "Eventos Premium",
      description: "Momentos únicos y exclusivos",
      examples: ["Ceremonias VIP", "Activaciones de marca", "Experiencias inmersivas"],
    },
  ]

  const tecnologia = [
    {
      feature: "Captura Profesional",
      description: "Cámaras de última generación, drones 4K, estabilizadores y equipamiento cinematográfico",
      icon: Camera,
    },
    {
      feature: "Cobertura Integral",
      description: "Fotógrafos especializados en el lugar preciso, sin interferir, captando emociones genuinas",
      icon: Eye,
    },
    {
      feature: "Producción Multicámara",
      description: "Grabación simultánea, streaming en vivo, entrevistas y testimonios profesionales",
      icon: Video,
    },
    {
      feature: "Postproducción Creativa",
      description: "Edición dinámica con branding, banco de fotos/videos y analytics de visualizaciones",
      icon: Edit,
    },
  ]

  const proyectosReales = [
    {
      nombre: "SYNERFY - IASP Latinoamérica 2025",
      asistentes: "Internacional",
      tecnologia: "Cobertura Fotográfica Completa",
      resultado: "Documentación profesional",
      badge: "Corporativo",
    },
    {
      nombre: "Fiesta Nacional de la Manzana",
      asistentes: "Masivo",
      tecnologia: "Video + Fotografía Evento",
      resultado: "Momentos capturados",
      badge: "Cultural",
    },
    {
      nombre: "Eventos Premium DER",
      asistentes: "Variable",
      tecnologia: "Cobertura Cinematográfica",
      resultado: "Calidad garantizada",
      badge: "Premium",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/servicios" className="hover:text-orange-600">
              Servicios
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Fotografía y Video</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div>
                <Link href="/servicios" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Servicios
                </Link>

                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-orange-500 text-white">Calidad Cinematográfica</Badge>
                  <Badge className="bg-red-500 text-white">Ojo Experto</Badge>
                  <Badge className="bg-white text-orange-600">Recuerdos Imborrables</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Fotografía y <span className="text-yellow-300">Video</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Inmortalizamos los momentos más importantes de tu evento.</strong> Nuestro equipo de
                  fotógrafos y videógrafos especializados sabe estar en el lugar preciso en el instante justo,{" "}
                  <strong>sin interferir</strong>, para captar las emociones genuinas y los highlights que querrás
                  compartir con el mundo.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4K</div>
                    <div className="text-sm opacity-80">Alta Definición</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24h</div>
                    <div className="text-sm opacity-80">Entrega Rápida</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Cobertura Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">📸</div>
                    <div className="text-sm opacity-80">Momentos Únicos</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Camera className="mr-2 h-5 w-5" />
                      Cotizar Fotografía y Video
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Portfolio Visual
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=SYNERFY+IASP+Cobertura+Fotográfica+Profesional"
                    alt="Fotografía y Video DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">SYNERFY IASP - Cobertura fotográfica profesional internacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cada imagen cuenta <span className="text-orange-500">una historia</span>
              </h2>
              <p className="text-xl text-gray-700">Capturamos la esencia de tu evento con pasión artística</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de <span className="text-red-500">Cobertura</span>
              </h2>
              <p className="text-xl text-gray-700">Adaptamos el estilo según el evento y objetivos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {casosUso.map((caso, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <caso.icon className="w-5 h-5 text-orange-500 mr-2" />
                      {caso.title}
                    </CardTitle>
                    <p className="text-gray-600">{caso.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Casos reales:</h4>
                    <ul className="space-y-2">
                      {caso.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
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

      {/* Proceso Creativo */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proceso <span className="text-orange-500">Cinematográfico</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para capturar momentos perfectos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tecnologia.map((tech, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <tech.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.feature}</h3>
                        <p className="text-gray-700 text-sm">{tech.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Reales */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos <span className="text-orange-500">Reales</span>
              </h2>
              <p className="text-xl text-gray-700">Casos donde capturamos momentos únicos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proyectosReales.map((proyecto, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{proyecto.nombre}</h3>
                        <Badge className="bg-orange-100 text-orange-800">{proyecto.badge}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{proyecto.asistentes}</div>
                        <div className="text-sm text-gray-600">alcance</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Cobertura:</span>
                        <span className="font-semibold text-gray-900">{proyecto.tecnologia}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Resultado:</span>
                        <span className="font-semibold text-green-600">{proyecto.resultado}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Precios y Paquetes */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Precios <span className="text-red-500">Orientativos</span>
              </h2>
              <p className="text-xl text-gray-700">Inversión según la duración y complejidad de cobertura</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Eventos Cortos</Badge>
                  <CardTitle className="text-2xl">Cobertura Básica</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 4 horas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $800-1,500
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">1 fotógrafo profesional</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">100-200 fotos editadas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Entrega en 48-72h</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Galería online privada</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Cobertura Básica</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Cobertura Premium</CardTitle>
                  <p className="text-gray-600">Para eventos de día completo</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $2,000-4,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Foto + Video multicámara</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">300-500 fotos + aftermovie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Highlights en 24h</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Insta-service redes sociales</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Cobertura Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Cinematográfico</Badge>
                  <CardTitle className="text-2xl">Cobertura Enterprise</CardTitle>
                  <p className="text-gray-600">Para eventos multi-día</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo completo especializado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Streaming + documentación</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Entrevistas y testimoniales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Banco de contenido completo</span>
                    </li>
                  </ul>

                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-gray-300 hover:border-orange-500 bg-transparent">
                      Consultar Proyecto Enterprise
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Específico */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestra cobertura audiovisual</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye la cobertura fotográfica y videográfica completa?
                  </h3>
                  <p className="text-gray-700">
                    Incluye fotógrafos y videógrafos especializados con equipamiento profesional 4K, cobertura integral
                    del evento (llegada, momentos clave, networking, ceremonias), fotografías grupales e
                    institucionales, video resumen/aftermovie, entrevistas y testimoniales, edición profesional con
                    branding, galería online privada y entrega en múltiples formatos. Como en SYNERFY IASP, documentamos
                    cada momento importante sin interferir.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo garantizan capturar los momentos más importantes?
                  </h3>
                  <p className="text-gray-700">
                    Nuestro equipo tiene experiencia específica en eventos y sabe estar en el lugar preciso en el
                    momento justo. Realizamos briefing previo para identificar momentos clave, VIPs importantes y shots
                    obligatorios. Utilizamos múltiples fotógrafos estratégicamente posicionados, comunicación por
                    auriculares y coordinación con el equipo de producción para anticipar momentos únicos sin interferir
                    en la experiencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Ofrecen servicio de streaming en vivo y transmisión?
                  </h3>
                  <p className="text-gray-700">
                    Sí, ofrecemos streaming profesional multicámara con calidad broadcast, transmisión simultánea a
                    múltiples plataformas (YouTube, Facebook, LinkedIn, plataformas privadas), switching en vivo, audio
                    profesional, gráficos y lower thirds personalizados, y grabación simultánea para posterior edición.
                    Ideal para eventos híbridos donde parte de la audiencia participa remotamente.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué es el "insta-service" para redes sociales?
                  </h3>
                  <p className="text-gray-700">
                    Es nuestro servicio de edición y entrega rápida durante el evento. Seleccionamos las mejores fotos
                    en tiempo real, aplicamos edición básica y branding, y las entregamos vía WhatsApp o email para que
                    puedas subirlas a redes sociales inmediatamente. Perfecto para mantener engagement durante eventos
                    largos y generar expectativa. Las fotos del insta-service también están incluidas en la galería
                    final completa.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden trabajar en eventos masivos como la Fiesta de la Manzana?
                  </h3>
                  <p className="text-gray-700">
                    Absolutamente. Tenemos experiencia comprobada en eventos masivos como la Fiesta Nacional de la
                    Manzana. Para este tipo de eventos utilizamos múltiples fotógrafos distribuidos estratégicamente,
                    drones para tomas aéreas, equipos de video móviles, comunicación por radio y coordinación
                    centralizada. Capturamos tanto la magnitud del evento como momentos íntimos y espontáneos del
                    público.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su cobertura de otros fotógrafos de eventos?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la especialización exclusiva en eventos y la integración con nuestros
                    otros servicios. Conocemos la dinámica de eventos, sabemos cuándo y dónde estarán los momentos
                    clave, y coordinamos la cobertura con la producción y logística. Nuestro equipo entiende de eventos,
                    no solo de fotografía, lo que resulta en imágenes más auténticas y completas de la experiencia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación con Competencia */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir <span className="text-red-500">DER</span>?
              </h2>
              <p className="text-xl text-gray-700">Comparación con fotógrafos tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Audiovisual</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Especialización</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">100% Eventos</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Fotografía genérica</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Conocimiento del Evento</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Coordinación con Producción</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Sin contexto del evento</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Masiva</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Fiesta Manzana Comprobado</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo eventos pequeños</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Entrega Rápida</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Insta-Service 24h</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Semanas de espera</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración de Servicios</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Foto + Video + Streaming</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo fotografía</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Camera className="w-4 h-4 mr-2" />
                ¿Querés inmortalizar tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cada momento merece ser <span className="text-yellow-300">recordado para siempre</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>eventos corporativos hasta festivales masivos</strong>, capturamos la esencia de tu evento
                con calidad cinematográfica y entrega rápida.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ImageIcon className="mr-2 h-5 w-5" />
                  Cotizar Fotografía y Video
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Portfolio Visual
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Calidad 4K</h3>
                <p className="text-sm opacity-80">Cinematográfica</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Ojo Experto</h3>
                <p className="text-sm opacity-80">Momentos únicos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Entrega Rápida</h3>
                <p className="text-sm opacity-80">Highlights en 24h</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">SYNERFY, Fiesta Manzana</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece ser inmortalizado</h3>
              <p className="text-lg opacity-90">
                Con casos reales como SYNERFY IASP Latinoamérica 2025 (cobertura fotográfica internacional) y Fiesta
                Nacional de la Manzana (evento masivo), nuestro equipo audiovisual está probado en todas las escalas.
                Capturamos emociones genuinas sin interferir.
                <strong> Cada imagen cuenta una historia única.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
