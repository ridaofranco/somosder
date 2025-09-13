import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Camera,
  Video,
  Edit,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  ArrowRight,
  Play,
  Aperture,
  Film,
  Palette,
  Building,
  Users,
  Award,
  Globe,
  Monitor,
  Heart, // Added Heart icon as it was in the original file
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fotografía y Video Profesional - Calidad Cinematográfica | DER EVENT HUB",
  description:
    "Inmortalizamos los momentos más importantes de tu evento. Casos reales: SYNERFY IASP Latinoamérica 2025, Fiesta Nacional de la Manzana. Cobertura 4K, entrega 24h, ojo experto.",
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

      {/* Metodología Detallada */}
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

      {/* FAQ Específico */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre fotografía y video</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye exactamente la cobertura fotográfica y de video?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye fotografía profesional (grupales, ambiente, producto, institucionales y espontáneas), video cinematográfico multicámara, aftermovies, livestream, entrevistas, tomas aéreas con drones 4K, edición avanzada con branding, y entrega rápida de highlights en 24-48h. Como en SYNERFY IASP Latinoamérica 2025 proporcionamos documentación profesional completa, y en Fiesta Nacional de la Manzana capturamos todos los momentos del evento masivo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo garantizan que no interfieren con el desarrollo del evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Nuestro equipo está entrenado para ser invisible pero efectivo. Conocemos los momentos clave, nos posicionamos estratégicamente antes de que sucedan, usamos equipamiento silencioso, y coordinamos previamente con organizadores para identificar momentos críticos. Sabemos estar en el lugar preciso en el instante justo, captando emociones genuinas sin interrumpir el flujo natural del evento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué es el insta-service y cómo funciona?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  El insta-service es edición y entrega de fotos en tiempo real durante el evento. Capturamos, editamos rápidamente con branding del evento, y las compartimos inmediatamente para redes sociales. Esto permite que los organizadores tengan contenido fresco para postear mientras el evento está sucediendo, maximizando el engagement y la cobertura orgánica en tiempo real.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden hacer cobertura multicámara para eventos grandes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, manejamos producciones multicámara con grabación simultánea desde múltiples ángulos, streaming en vivo, entrevistas profesionales, y testimonios. Para eventos masivos como Fiesta Nacional de la Manzana coordinamos varios equipos de filmación, cámaras fijas estratégicas, drones para tomas aéreas, y edición en tiempo real. El resultado es cobertura cinematográfica completa desde todas las perspectivas importantes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué formatos de entrega proporcionan post-evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Entregamos banco completo de fotos en alta resolución, highlights editados en 24-48h, aftermovies cinematográficos, versiones para redes sociales (cuadradas, verticales, horizontales), galería web privada para descarga, videos cortos para Instagram/TikTok, y analytics de visualizaciones. Todo con branding personalizado y formatos optimizados para diferentes usos: marketing, comunicación interna, redes sociales, y archivo institucional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden adaptarse a diferentes estilos según el tipo de evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Absolutamente. Para eventos corporativos como SYNERFY IASP usamos estilo profesional y sobrio, para eventos masivos como Fiesta Nacional de la Manzana aplicamos enfoque dinámico y colorido, y para eventos premium adoptamos estilo cinematográfico elegante. Adaptamos iluminación, composición, edición y narrativa visual según la personalidad del evento y objetivos de comunicación del cliente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                ¿Necesitás cobertura fotográfica y de video profesional?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Momentos que <span className="text-yellow-300">nunca se olvidan</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>SYNERFY IASP Latinoamérica 2025 hasta la Fiesta Nacional de la Manzana</strong>, 
                capturamos la esencia de cada evento con calidad cinematográfica y ojo experto.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Camera className="mr-2 h-5 w-5" />
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
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Calidad 4K</h3>
                <p className="text-sm opacity-80">Cinematográfica</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Entrega 24-48h</h3>
                <p className="text-sm opacity-80">Highlights rápidos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Ojo Experto</h3>
                <p className="text-sm opacity-80">Sin interferir</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Banco Completo</h3>
                <p className="text-sm opacity-80">Todos los formatos</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor cobertura visual</h3>
              <p className="text-lg opacity-90">
                Con casos reales como SYNERFY IASP Latinoamérica 2025 (documentación profesional internacional) y 
                Fiesta Nacional de la Manzana (cobertura masiva completa), inmortalizamos cada momento importante 
                con calidad cinematográfica y ojo experto.
                <strong> Cobertura 4K, entrega en 24-48h y recuerdos imborrables garantizados.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}