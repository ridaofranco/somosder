import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Shield,
  Smartphone,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  Zap,
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Control de Accesos y Acreditaciones para Eventos | DER EVENT HUB",
  description:
    "Sistema propio de control de accesos con QR únicos y Face ID avanzado. Casos reales: Campus Party 13,000+, Abel Pintos 26,000+ fans, Anuel AA. Dashboard en tiempo real y backup offline.",
  keywords: [
    "control de accesos eventos",
    "acreditaciones eventos",
    "QR code eventos",
    "Face ID eventos",
    "campus party accesos",
    "anuel aa control accesos",
    "DER Event Hub accesos",
  ],
  openGraph: {
    title: "Control de Accesos y Acreditaciones | DER EVENT HUB",
    description:
      "Tecnología propia que manejó Campus Party con 13,000+ inscriptos y Abel Pintos con 26,000+ fans. QR únicos, Face ID y dashboard en tiempo real.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png",
        width: 1200,
        height: 630,
        alt: "Control de Accesos DER Event Hub",
      },
    ],
  },
}

export default function ControlAccesosPage() {
  const features = [
    {
      icon: QrCode,
      title: "QR Codes Únicos",
      description: "Códigos únicos por asistente con validación instantánea y seguridad antifraude",
      color: "text-orange-500",
    },
    {
      icon: Eye,
      title: "Face ID Avanzado",
      description: "Reconocimiento facial sub-3 segundos con validación biométrica avanzada",
      color: "text-red-500",
    },
    {
      icon: BarChart3,
      title: "Dashboard en Tiempo Real",
      description: "Monitoreo live de ocupancy, breakdown por tipo de ticket y acceso remoto",
      color: "text-orange-600",
    },
    {
      icon: Database,
      title: "Backup Offline Automático",
      description: "Export automático, cache offline de scanner y router 4G de respaldo",
      color: "text-red-600",
    },
    {
      icon: Zap,
      title: "Setup Rápido",
      description: "Implementación en 1 semana para sistemas básicos, configuración plug-and-play",
      color: "text-orange-500",
    },
    {
      icon: Wifi,
      title: "Integración Completa",
      description: "API/CSV integration, sistemas externos y conectividad con plataformas existentes",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Music,
      title: "Festivales y Conciertos Masivos",
      description: "Eventos musicales de gran escala",
      examples: ["Abel Pintos - 26,000+ fans en 30 fechas", "Anuel AA - 4 fechas sin incidentes", "Leyendas de México - 25,000+ asistentes"],
    },
    {
      icon: Building,
      title: "Eventos Corporativos y Tech",
      description: "Conferencias y eventos empresariales",
      examples: ["Campus Party - 13,000+ inscriptos", "Espacio Shell 2024 - 1,500 Face ID", "Manchester City - 1,000 asistentes"],
    },
    {
      icon: Trophy,
      title: "Eventos Deportivos",
      description: "Competencias y torneos deportivos",
      examples: ["Buenos Aires Trap Festival - 120,000", "Expo Autos CeNARD - 4,000", "Wave Conference - 5,000+"],
    },
    {
      icon: Globe,
      title: "Eventos Internacionales",
      description: "Eventos de escala global y regional",
      examples: ["SYNERFY IASP Latinoamérica 2025", "Camondo WWR - 300+ ejecutivos", "Fiesta Nacional de la Manzana"],
    },
  ]

  const tecnologia = [
    {
      feature: "Registro Pre-Evento",
      description: "Sistema web de registro con QR únicos, validación de datos y confirmación automática",
      icon: Smartphone,
    },
    {
      feature: "Validación en Tiempo Real",
      description: "Scanners móviles con validación instantánea, alertas de seguridad y control de duplicados",
      icon: Shield,
    },
    {
      feature: "Dashboard de Control",
      description: "Panel web en tiempo real con métricas live, breakdown de asistentes y acceso remoto",
      icon: BarChart3,
    },
    {
      feature: "Backup y Seguridad",
      description: "Export automático, cache offline, router 4G de respaldo y integración API/CSV",
      icon: Database,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Campus Party Entre Ríos 2025",
      asistentes: "13,000+",
      tecnologia: "QR + Face ID Híbrido",
      resultado: "0 incidentes de acceso",
      badge: "Tech",
    },
    {
      nombre: "Abel Pintos - Gira Cordillera y Mar",
      asistentes: "26,000+",
      tecnologia: "QR Masivo Multi-Venue",
      resultado: "30 fechas exitosas",
      badge: "Musical",
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
            <span className="text-gray-900">Control de Accesos</span>
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
                  <Badge className="bg-orange-500 text-white">Tecnología Propia</Badge>
                  <Badge className="bg-red-500 text-white">45,000+ Accesos</Badge>
                  <Badge className="bg-white text-orange-600">0 Fallas Críticas</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Control de <span className="text-yellow-300">Accesos</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>La tecnología que manejó Campus Party y Abel Pintos</strong> con sistema propio de QR únicos y Face ID avanzado. 
                  Desde <strong>300 hasta 30,000+ asistentes</strong> con dashboard en tiempo real y backup offline garantizado.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">45k+</div>
                    <div className="text-sm opacity-80">Accesos Controlados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                    <div className="text-sm opacity-80">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Soporte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1 sem</div>
                    <div className="text-sm opacity-80">Setup</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Shield className="mr-2 h-5 w-5" />
                      Cotizar Control de Accesos
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Demo en Vivo
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
                    alt="Control de Accesos DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Sistema propio - Campus Party y Abel Pintos</p>
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
                Sistema <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">Tecnología propia desarrollada internamente</p>
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
              <p className="text-xl text-gray-700">Adaptamos el sistema según el tipo de evento</p>
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
                Metodología <span className="text-orange-500">Probada</span>
              </h2>
              <p className="text-xl text-gray-700">4 pasos para control de accesos sin fallas</p>
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
              <p className="text-xl text-gray-700">Casos donde aplicamos control de accesos</p>
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
                        <div className="text-sm text-gray-600">asistentes</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Sistema:</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre control de accesos</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué diferencia su sistema de otros proveedores de control de accesos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Nuestro sistema es desarrollado internamente, no revendemos tecnología de terceros. Esto nos permite actualizaciones rápidas, soporte 24/7 directo y personalización según cada evento. Manejamos desde QR básicos hasta Face ID avanzado con validación sub-3 segundos. Campus Party con 13,000+ inscriptos y Abel Pintos con 26,000+ fans son prueba de nuestra escalabilidad y confiabilidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué pasa si hay problemas de conectividad durante el evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Tenemos triple backup: cache offline en scanners (funcionan sin internet), router 4G de respaldo automático, y export de datos en tiempo real. En Anuel AA (4 fechas) y Abel Pintos (30 fechas) nunca tuvimos fallas críticas. Los scanners guardan validaciones localmente y sincronizan cuando se restablece la conexión. Garantizamos 99.9% de uptime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden manejar eventos de más de 10,000 personas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, nuestro sistema es escalable hasta 30,000+ asistentes. Ya manejamos Campus Party con 13,000+ inscriptos, Abel Pintos con 26,000+ fans en 30 fechas, y Buenos Aires Trap Festival con 120,000 asistentes. Para eventos masivos ofrecemos múltiples puntos de acceso, scanners adicionales y dashboard centralizado con métricas en tiempo real por sector.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para implementar el sistema?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Para sistemas básicos con QR necesitamos 1 semana desde la confirmación. Para Face ID avanzado, 2 semanas para calibración y testing. Incluye setup completo, capacitación del equipo, pruebas pre-evento y soporte 24/7 durante el evento. La configuración es plug-and-play: solo necesitamos lista de asistentes y definir puntos de acceso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿El sistema se integra con plataformas de ticketing existentes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, tenemos integración API/CSV con las principales plataformas de ticketing. Importamos automáticamente las listas de asistentes, tipos de tickets y datos adicionales. También exportamos métricas post-evento en formatos compatibles. Trabajamos con Eventbrite, sistemas propios de clientes, y bases de datos custom. La integración es transparente para el organizador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué métricas y reportes proporcionan post-evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Proporcionamos dashboard en tiempo real durante el evento y reporte completo post-evento: total de ingresos por horario, breakdown por tipo de ticket, ocupancy máxima alcanzada, tiempos de espera promedio, y análisis de flujo de personas. En Manchester City registramos 1,000 asistentes con 0 incidentes. Todos los datos se exportan en Excel/CSV para análisis adicional.
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
                <Shield className="w-4 h-4 mr-2" />
                ¿Necesitás control de accesos para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                La tecnología que <span className="text-yellow-300">nunca falla</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Campus Party con 13,000+ inscriptos hasta Abel Pintos con 26,000+ fans</strong>, 
                nuestro sistema propio garantiza control total sin fallas críticas.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Cotizar Control de Accesos
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Demo en Vivo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Tecnología Propia</h3>
                <p className="text-sm opacity-80">Desarrollo interno</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">45,000+ Accesos</h3>
                <p className="text-sm opacity-80">Casos reales</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Setup en 1 Semana</h3>
                <p className="text-sm opacity-80">Implementación rápida</p>
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
              <h3 className="text-2xl font-bold mb-4">Tu evento merece el mejor control de accesos</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Campus Party (13,000+ inscriptos), Abel Pintos (26,000+ fans en 30 fechas) y 
                Anuel AA (4 fechas sin incidentes), nuestro sistema propio está probado en eventos de todas las escalas.
                <strong> Tecnología propia, 99.9% uptime y 0 fallas críticas garantizadas.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}