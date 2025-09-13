import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Truck,
  Globe,
  Users,
  CheckCircle,
  Plane,
  Ship,
  MapPin,
  Shield,
  ArrowRight,
  Play,
  Package,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Logística Internacional para Eventos - Sin Fronteras | DER EVENT HUB",
  description:
    "Logística internacional especializada en eventos. Transporte global, gestión aduanera, coordinación de delegaciones. Casos reales: Mundial Sub-17 Halterofilia 2026, Manchester City, eventos LATAM.",
  keywords: [
    "logistica internacional eventos",
    "transporte internacional",
    "gestion aduanera",
    "coordinacion delegaciones",
    "eventos internacionales",
    "logistica global",
    "DER Event Hub internacional",
  ],
  openGraph: {
    title: "Logística Internacional - Operador Global | DER EVENT HUB",
    description:
      "No hay frontera que impida llevar a cabo tu evento. Logística internacional puerta a puerta con puntualidad garantizada.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/logistica-internacional-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Logística Internacional DER Event Hub",
      },
    ],
  },
}

export default function LogisticaInternacionalPage() {
  const features = [
    {
      icon: Package,
      title: "Transporte Global",
      description: "Equipos, stands, merchandising y materiales desde origen hasta destino final",
      color: "text-orange-500",
    },
    {
      icon: Shield,
      title: "Gestión Aduanera",
      description: "Documentación, permisos, ATA carnet, impuestos y trámites internacionales",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Coordinación de Delegaciones",
      description: "Viajes, visados, hospedaje y transporte para equipos de trabajo y artistas",
      color: "text-orange-600",
    },
    {
      icon: MapPin,
      title: "Logística Local",
      description: "Última milla, almacenes, handling y coordinación con proveedores locales",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Globe,
      title: "Eventos Deportivos Globales",
      description: "Competencias internacionales y giras",
      examples: ["Mundial Sub-17 Halterofilia 2026", "Manchester City Trophy Tour", "Competencias federativas"],
    },
    {
      icon: Plane,
      title: "Giras Corporativas",
      description: "Eventos empresariales multi-país",
      examples: ["Lanzamientos globales", "Conferencias internacionales", "Roadshows corporativos"],
    },
    {
      icon: Ship,
      title: "Exposiciones Itinerantes",
      description: "Ferias y exhibiciones móviles",
      examples: ["Stands modulares", "Exposiciones artísticas", "Muestras comerciales"],
    },
  ]

  const tecnologia = [
    {
      feature: "Planificación Logística Global",
      description: "Análisis de rutas, tiempos de tránsito, documentación requerida y coordinación multi-país",
      icon: Globe,
    },
    {
      feature: "Gestión de Carga Internacional",
      description: "Embalaje especializado, seguimiento GPS, seguro de carga y entrega puntual garantizada",
      icon: Truck,
    },
    {
      feature: "Coordinación de Viajes",
      description: "Pasajes, visados, hoteles, transfers y gestión completa de delegaciones internacionales",
      icon: Plane,
    },
    {
      feature: "Red de Partners Globales",
      description: "Agentes locales, proveedores certificados y operadores especializados en cada destino",
      icon: MapPin,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Mundial Sub-17 Halterofilia 2026",
      asistentes: "Internacional",
      tecnologia: "Logística Olímpica Completa",
      resultado: "Estándares mundiales aplicados",
      badge: "Olímpico",
    },
    {
      nombre: "Manchester City Trophy Tour",
      asistentes: "Global",
      tecnologia: "Transporte Trofeos + Delegación",
      resultado: "Logística impecable",
      badge: "Deportivo",
    },
    {
      nombre: "Eventos LATAM Multi-País",
      asistentes: "Regional",
      tecnologia: "Coordinación Internacional",
      resultado: "Operación sin fronteras",
      badge: "Regional",
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
            <span className="text-gray-900">Logística Internacional</span>
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
                  <Badge className="bg-orange-500 text-white">Operador Global</Badge>
                  <Badge className="bg-red-500 text-white">Puntualidad Garantizada</Badge>
                  <Badge className="bg-white text-orange-600">Sin Fronteras</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Logística <span className="text-yellow-300">Internacional</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>No hay frontera que impida llevar a cabo tu evento.</strong> Coordinamos la logística
                  internacional de principio a fin: desde el embalaje seguro en origen hasta el montaje en destino,{" "}
                  <strong>cumpliendo con todos los requisitos aduaneros</strong>
                  con puntualidad garantizada.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🌎</div>
                    <div className="text-sm opacity-80">Sin Fronteras</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Seguimiento GPS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Puntualidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2026</div>
                    <div className="text-sm opacity-80">Mundial Sub-17</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      Cotizar Logística Internacional
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos Globales
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/logistica-internacional-hero.jpg"
                    alt="Logística Internacional DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Manchester City Trophy Tour - Logística internacional de trofeos
                    </p>
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
                Expertos en <span className="text-orange-500">Logística Global</span>
              </h2>
              <p className="text-xl text-gray-700">Puerta a puerta sin preocupaciones</p>
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
                Casos de <span className="text-red-500">Uso</span>
              </h2>
              <p className="text-xl text-gray-700">Adaptamos la logística según el alcance internacional</p>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Ejemplos reales:</h4>
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

      {/* Red Global */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Red <span className="text-orange-500">Global</span>
              </h2>
              <p className="text-xl text-gray-700">4 pilares de nuestra operación internacional</p>
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
              <p className="text-xl text-gray-700">Casos donde coordinamos logística internacional</p>
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
                        <span className="text-gray-700">Logística:</span>
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
              <p className="text-xl text-gray-700">Inversión según la complejidad logística y distancia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Regional LATAM</Badge>
                  <CardTitle className="text-2xl">Logística Regional</CardTitle>
                  <p className="text-gray-600">Para eventos en países limítrofes</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $3,000-8,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Transporte terrestre/aéreo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión aduanera básica</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación de viajes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Seguimiento GPS</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Logística Regional</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Logística Global</CardTitle>
                  <p className="text-gray-600">Para eventos intercontinentales</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $10,000-25,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Logística puerta a puerta</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">ATA carnet y documentación</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Delegaciones completas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Seguro internacional</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Logística Global</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Olímpico</Badge>
                  <CardTitle className="text-2xl">Logística Enterprise</CardTitle>
                  <p className="text-gray-600">Para eventos de escala mundial</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Operación multi-país simultánea</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Estándares olímpicos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación gubernamental</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo logístico dedicado</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestra logística internacional</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye la logística internacional puerta a puerta?
                  </h3>
                  <p className="text-gray-700">
                    Incluye recolección en origen, embalaje especializado, documentación aduanera completa (ATA carnet,
                    permisos, certificados), transporte internacional (aéreo/marítimo/terrestre), gestión de impuestos y
                    aranceles, seguimiento GPS 24/7, desaduanaje en destino, transporte local y entrega final. Como en
                    Manchester City Trophy Tour, coordinamos cada detalle desde el embalaje de trofeos hasta la entrega
                    en venue.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden manejar eventos de escala mundial como el Mundial Sub-17?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia comprobada en eventos olímpicos. Para el Mundial Sub-17 Halterofilia 2026
                    desarrollamos la logística internacional completa: coordinación de delegaciones de 50+ países,
                    transporte de equipamiento deportivo especializado, gestión de visados y acreditaciones,
                    coordinación con autoridades gubernamentales y aeroportuarias, y operación multi-sede con estándares
                    internacionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo garantizan la puntualidad en envíos internacionales?
                  </h3>
                  <p className="text-gray-700">
                    Utilizamos análisis de rutas optimizadas, partners logísticos certificados en cada país, seguimiento
                    GPS en tiempo real, planes de contingencia para cada envío y coordinación directa con aduanas.
                    Tenemos acuerdos con las principales aerolíneas de carga y navieras. Además, incluimos buffer time
                    en la planificación y seguros de carga que cubren retrasos y garantizan reposición inmediata.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia su logística internacional de otros operadores?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la especialización exclusiva en eventos y la integración con nuestros
                    otros servicios. No solo transportamos, sino que coordinamos la logística con la producción,
                    tecnología y montaje. Entendemos las particularidades de equipos audiovisuales, stands modulares,
                    merchandising y materiales de eventos. Además, tenemos experiencia específica en logística deportiva
                    y cultural, no solo comercial.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Manejan la coordinación completa de delegaciones internacionales?
                  </h3>
                  <p className="text-gray-700">
                    Sí, coordinamos delegaciones completas: pasajes aéreos, gestión de visados y documentación, reservas
                    hoteleras, transfers aeropuerto-hotel-venue, seguros de viaje, roaming internacional, y coordinación
                    de itinerarios. Para eventos como Manchester City, gestionamos la delegación completa incluyendo
                    staff técnico, equipos de filmación y coordinadores de marca, asegurando que todo el equipo llegue
                    sincronizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué cobertura de seguro incluyen en envíos internacionales?
                  </h3>
                  <p className="text-gray-700">
                    Incluimos seguro internacional completo: cobertura de carga por valor total declarado, protección
                    contra daños, pérdidas, robos y retrasos, seguro de responsabilidad civil, cobertura de fuerza mayor
                    y eventos climáticos. Para equipos especializados (audiovisuales, deportivos, artísticos) ofrecemos
                    pólizas específicas con reposición inmediata y cobertura de lucro cesante por retrasos.
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
              <p className="text-xl text-gray-700">Comparación con operadores logísticos tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Logística</th>
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
                      <span className="text-red-600">Logística genérica</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración de Servicios</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Logística + Producción + Tech</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo transporte</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Olímpica</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Mundial Sub-17 2026</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Sin experiencia deportiva</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Coordinación de Delegaciones</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Servicio Integral</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Servicio adicional</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Seguimiento Personalizado</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">24/7 GPS + Coordinador</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Tracking básico</span>
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
                <Globe className="w-4 h-4 mr-2" />
                ¿Necesitás logística internacional para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                No hay frontera que <span className="text-yellow-300">impida tu evento</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>eventos regionales hasta competencias mundiales</strong>, coordinamos la logística
                internacional de principio a fin con puntualidad garantizada.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Cotizar Logística Internacional
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos Globales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Sin Fronteras</h3>
                <p className="text-sm opacity-80">Operador global</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Puntualidad</h3>
                <p className="text-sm opacity-80">Garantizada 100%</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Puerta a Puerta</h3>
                <p className="text-sm opacity-80">Servicio completo</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">Mundial Sub-17, Manchester City</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento internacional merece logística profesional</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Mundial Sub-17 Halterofilia 2026 (logística olímpica completa), Manchester City
                Trophy Tour (transporte internacional de trofeos) y múltiples eventos LATAM, nuestra logística
                internacional está probada en todas las escalas.
                <strong> Operador global con puntualidad garantizada.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
