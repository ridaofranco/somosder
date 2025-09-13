import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Smartphone,
  Monitor,
  Zap,
  CheckCircle,
  Clock,
  Users,
  Camera,
  ArrowRight,
  Play,
  QrCode,
  Eye,
  Database,
  Wifi,
  Building,
  Music,
  Trophy,
  Globe,
  Gamepad2,
  Video,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tecnología para Eventos - Apps, Streaming, AR/VR | DER EVENT HUB",
  description:
    "Soluciones tecnológicas integrales para eventos: acreditaciones inteligentes, apps personalizadas, streaming híbrido, experiencias inmersivas. Casos reales: La Mirona con Migor, Indie Dev 2025.",
  keywords: [
    "tecnologia eventos",
    "apps eventos",
    "streaming eventos",
    "realidad aumentada eventos",
    "acreditaciones inteligentes",
    "indie dev argentina",
    "DER Event Hub tecnologia",
  ],
  openGraph: {
    title: "Tecnología para Eventos | DER EVENT HUB",
    description:
      "Soluciones tech integrales: desde acreditaciones inteligentes hasta experiencias inmersivas. Casos reales con desarrollo a medida.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747908990/Captura_de_pantalla_2024-05-10_153233_mlh6y3.png",
        width: 1200,
        height: 630,
        alt: "Tecnología para Eventos DER Event Hub",
      },
    ],
  },
}

export default function TecnologiaEventosPage() {
  const features = [
    {
      icon: QrCode,
      title: "Acreditaciones Inteligentes",
      description: "Sistema de pre-registro, validación en tiempo real, generación de credenciales y control de accesos por QR",
      color: "text-orange-500",
    },
    {
      icon: Smartphone,
      title: "Apps Personalizadas",
      description: "Aplicaciones móviles a medida con agenda interactiva, networking, encuestas, gamificación y análisis de comportamiento",
      color: "text-red-500",
    },
    {
      icon: Video,
      title: "Streaming y Eventos Híbridos",
      description: "Plataformas de transmisión multicámara en alta definición, interacción entre público presencial y virtual",
      color: "text-orange-600",
    },
    {
      icon: Eye,
      title: "Experiencias Inmersivas",
      description: "Realidad aumentada, realidad virtual, instalaciones interactivas y mapping para experiencias únicas",
      color: "text-red-600",
    },
    {
      icon: Camera,
      title: "Activaciones Digitales",
      description: "Photo booths interactivos, social walls, concursos digitales y activaciones con tecnología NFC",
      color: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Desarrollo a Medida",
      description: "Soluciones tecnológicas personalizadas según las necesidades específicas de tu evento o marca",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Smartphone,
      title: "Apps Personalizadas para Eventos",
      description: "Aplicaciones móviles con funcionalidades específicas",
      examples: ["Apps con agenda interactiva y networking", "Gamificación y encuestas en tiempo real", "Push notifications y análisis de comportamiento"],
    },
    {
      icon: Video,
      title: "Streaming y Eventos Híbridos",
      description: "Plataformas de transmisión multicámara",
      examples: ["Conexión audiencia presencial y virtual", "Chat interactivo y networking virtual", "Grabación automática y salas de breakout"],
    },
    {
      icon: Eye,
      title: "Experiencias Inmersivas y Activaciones",
      description: "AR/VR y activaciones digitales personalizadas",
      examples: ["Sistema de sorteos La Mirona con Migor", "Dashboard personalizado Indie Dev 2025", "Photo booths interactivos con IA"],
    },
  ]

  const tecnologia = [
    {
      feature: "Análisis y Planificación Tech",
      description: "Evaluación de necesidades tecnológicas, arquitectura de soluciones y planificación de implementación",
      icon: Monitor,
    },
    {
      feature: "Desarrollo e Integración",
      description: "Creación de soluciones personalizadas, integración con sistemas existentes y testing completo",
      icon: Smartphone,
    },
    {
      feature: "Implementación y Soporte",
      description: "Deploy en producción, capacitación de equipos y soporte técnico durante el evento",
      icon: Users,
    },
    {
      feature: "Monitoreo y Optimización",
      description: "Monitoreo en tiempo real, resolución de incidencias y análisis post-evento para mejoras",
      icon: Database,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Sistema de Sorteos - La Mirona con Migor",
      asistentes: "Privado",
      tecnologia: "Plataforma Custom de Sorteos",
      resultado: "4 eventos exitosos",
      badge: "Corporativo",
    },
    {
      nombre: "Indie Dev Argentina 2025",
      asistentes: "Tech",
      tecnologia: "Dashboard Personalizado + Accesos",
      resultado: "Plataforma única implementada",
      badge: "Tecnológico",
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
            <span className="text-gray-900">Tecnología para Eventos</span>
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
                  <Badge className="bg-orange-500 text-white">Desarrollo Propio</Badge>
                  <Badge className="bg-red-500 text-white">Apps Personalizadas</Badge>
                  <Badge className="bg-white text-orange-600">AR/VR Inmersivo</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Tecnología para <span className="text-yellow-300">Eventos</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Soluciones tecnológicas integrales para eventos</strong> desde acreditaciones inteligentes hasta experiencias inmersivas. 
                  Con <strong>desarrollo a medida, streaming híbrido y activaciones digitales</strong> que potencian cada evento.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">6</div>
                    <div className="text-sm opacity-80">Soluciones Tech</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">A Medida</div>
                    <div className="text-sm opacity-80">Desarrollo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">AR/VR</div>
                    <div className="text-sm opacity-80">Inmersivo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Soporte</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Smartphone className="mr-2 h-5 w-5" />
                      Cotizar Tecnología para Eventos
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos Tecnológicos
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908990/Captura_de_pantalla_2024-05-10_153233_mlh6y3.png"
                    alt="Tecnología para Eventos DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Tecnología avanzada - Apps, AR/VR y desarrollo a medida</p>
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
                Soluciones <span className="text-orange-500">Tecnológicas</span>
              </h2>
              <p className="text-xl text-gray-700">6 áreas de especialización tecnológica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Casos de <span className="text-red-500">Uso</span>
              </h2>
              <p className="text-xl text-gray-700">Tecnología adaptada según el tipo de evento</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <h4 className="font-semibold text-gray-900 mb-3">Soluciones aplicadas:</h4>
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
                Metodología <span className="text-orange-500">Tecnológica</span>
              </h2>
              <p className="text-xl text-gray-700">4 pasos para implementar tecnología sin fallas</p>
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
              <p className="text-xl text-gray-700">Casos donde aplicamos soluciones tecnológicas</p>
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
                        <div className="text-sm text-gray-600">escala</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Tecnología:</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre tecnología para eventos</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué diferencia sus soluciones tecnológicas de otros proveedores?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Desarrollamos soluciones a medida en lugar de usar templates genéricos. Como en el sistema de sorteos para La Mirona con Migor, creamos plataformas únicas según las necesidades específicas. Para Indie Dev 2025 desarrollamos dashboards personalizados y sistemas de accesos únicos. Nuestro enfoque es 100% personalizado, no revendemos software de terceros.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden desarrollar apps móviles personalizadas para eventos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, desarrollamos apps nativas para iOS y Android con funcionalidades específicas: agenda interactiva, networking inteligente, encuestas en tiempo real, gamificación, push notifications y análisis de comportamiento. Cada app se diseña según las necesidades del evento, con branding personalizado y funciones únicas que no encontrarás en soluciones genéricas del mercado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluyen las experiencias inmersivas con AR/VR?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Ofrecemos realidad aumentada para activaciones de marca (filtros personalizados, reconocimiento de objetos), realidad virtual para experiencias inmersivas (showrooms virtuales, simuladores), instalaciones interactivas con sensores de movimiento, y mapping projection para transformar espacios. Cada experiencia se diseña específicamente para los objetivos del evento y la marca.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo funcionan las plataformas de streaming híbrido?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Creamos plataformas que conectan audiencia presencial y virtual en tiempo real. Incluyen transmisión multicámara HD, chat interactivo, encuestas simultáneas, networking virtual, salas de breakout y grabación automática. La audiencia virtual puede participar activamente con preguntas, votaciones y networking, creando una experiencia verdaderamente híbrida e integrada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tipo de activaciones digitales pueden implementar?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Desarrollamos photo booths interactivos con IA, social walls que agregan contenido de redes sociales, concursos digitales con gamificación, activaciones NFC para interacciones táctiles, quizzes interactivos, sorteos digitales en tiempo real, y sistemas de puntos y recompensas. Cada activación se integra con las redes sociales del evento para maximizar el alcance y engagement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para desarrollar una solución tecnológica?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Depende de la complejidad: acreditaciones inteligentes básicas toman 1-2 semanas, apps personalizadas requieren 4-6 semanas, experiencias AR/VR necesitan 6-8 semanas, y plataformas de streaming híbrido toman 3-4 semanas. Incluimos análisis, desarrollo, testing, implementación y soporte durante el evento. Siempre comenzamos con un MVP funcional y iteramos según feedback.
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
                <Smartphone className="w-4 h-4 mr-2" />
                ¿Necesitás tecnología avanzada para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Tecnología que <span className="text-yellow-300">transforma eventos</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>sistemas de sorteos personalizados hasta experiencias AR/VR inmersivas</strong>, 
                desarrollamos la tecnología exacta que tu evento necesita.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Cotizar Tecnología para Eventos
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos Tecnológicos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Desarrollo a Medida</h3>
                <p className="text-sm opacity-80">Soluciones únicas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">AR/VR Inmersivo</h3>
                <p className="text-sm opacity-80">Experiencias únicas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Streaming Híbrido</h3>
                <p className="text-sm opacity-80">Multicámara HD</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Soporte 24/7</h3>
                <p className="text-sm opacity-80">Durante el evento</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor tecnología</h3>
              <p className="text-lg opacity-90">
                Con casos reales como el sistema de sorteos para La Mirona con Migor y la plataforma única 
                para Indie Dev Argentina 2025, desarrollamos tecnología que transforma eventos.
                <strong> Soluciones a medida, AR/VR inmersivo y streaming híbrido garantizado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}