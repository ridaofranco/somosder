import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Building,
  MapPin,
  Users,
  CheckCircle,
  BarChart3,
  Search,
  Handshake,
  Settings,
  Sparkles,
  Award,
  ArrowRight,
  Play,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Búsqueda de Venues - Espacios Perfectos | DER EVENT HUB",
  description:
    "Búsqueda y gestión integral de venues para eventos. Selección estratégica, negociación contractual, coordinación operativa. Red exclusiva de espacios en Argentina y LATAM.",
  keywords: [
    "busqueda venues",
    "espacios eventos",
    "gestion venues",
    "seleccion espacios",
    "negociacion venues",
    "venues argentina",
    "DER Event Hub venues",
  ],
  openGraph: {
    title: "Búsqueda de Venues - El Espacio Perfecto | DER EVENT HUB",
    description:
      "Encontramos el espacio perfecto y nos encargamos de cada detalle logístico con el venue, para que tu evento brille.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/busqueda-venues-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Búsqueda de Venues DER Event Hub",
      },
    ],
  },
}

export default function BusquedaVenuesPage() {
  const features = [
    {
      icon: Search,
      title: "Selección Estratégica",
      description: "Consultoría de locación con opciones personalizadas según tipo de evento y presupuesto",
      color: "text-orange-500",
    },
    {
      icon: Handshake,
      title: "Negociación Experta",
      description: "Mejores condiciones contractuales, precios, horarios y servicios incluidos",
      color: "text-red-500",
    },
    {
      icon: Settings,
      title: "Coordinación Operativa",
      description: "Gestión completa con el venue: cronogramas, proveedores, permisos y normas",
      color: "text-orange-600",
    },
    {
      icon: Sparkles,
      title: "Transformación de Espacios",
      description: "Adaptamos cualquier lugar en la sede soñada con layout optimizado",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Building,
      title: "Eventos Corporativos",
      description: "Centros de convenciones y espacios empresariales",
      examples: ["Hoteles 5 estrellas", "Centros de convenciones", "Espacios corporativos únicos"],
    },
    {
      icon: Award,
      title: "Eventos Premium",
      description: "Locaciones exclusivas y de alto nivel",
      examples: ["Venues históricos", "Espacios al aire libre", "Locaciones temáticas"],
    },
    {
      icon: Users,
      title: "Eventos Masivos",
      description: "Estadios y espacios de gran capacidad",
      examples: ["Estadios deportivos", "Centros de exposiciones", "Espacios públicos"],
    },
  ]

  const tecnologia = [
    {
      feature: "Consultoría de Locación",
      description: "Análisis de necesidades, propuesta de opciones y asesoramiento en pros/contras de cada espacio",
      icon: MapPin,
    },
    {
      feature: "Negociación Contractual",
      description: "Gestión de contratos, cláusulas, precios preferenciales y condiciones favorables para el cliente",
      icon: Handshake,
    },
    {
      feature: "Coordinación con Venue",
      description: "Gestión de cronogramas, proveedores internos, electricidad, mobiliario y servicios del lugar",
      icon: Settings,
    },
    {
      feature: "Cumplimiento Normativo",
      description: "Permisos municipales, seguros, capacidad, evacuación y reglamentos locales",
      icon: BarChart3,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Eventos Corporativos Premium",
      asistentes: "300-2,000",
      tecnologia: "Selección + Negociación",
      resultado: "Venues optimizados",
      badge: "Corporativo",
    },
    {
      nombre: "Eventos Masivos LATAM",
      asistentes: "5,000+",
      tecnologia: "Gestión Integral Venue",
      resultado: "Operación sin sorpresas",
      badge: "Masivo",
    },
    {
      nombre: "Locaciones Exclusivas",
      asistentes: "Variable",
      tecnologia: "Transformación Espacios",
      resultado: "Espacios únicos logrados",
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
            <span className="text-gray-900">Búsqueda de Venues</span>
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
                  <Badge className="bg-orange-500 text-white">Expertos Locales</Badge>
                  <Badge className="bg-red-500 text-white">Red Exclusiva</Badge>
                  <Badge className="bg-white text-orange-600">Sin Sorpresas</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Búsqueda de <span className="text-yellow-300">Venues</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>
                    Encontramos el espacio perfecto y nos encargamos de cada detalle logístico con el venue.
                  </strong>{" "}
                  Olvídate de la letra chica del contrato del salón; nosotros la manejamos en tu favor con{" "}
                  <strong>conocimiento local y astucia negociadora</strong>
                  para que tu evento brille.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">50+</div>
                    <div className="text-sm opacity-80">Venues Gestionados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Sin Sorpresas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">LATAM</div>
                    <div className="text-sm opacity-80">Red Regional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-80">Coordinación</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Home className="mr-2 h-5 w-5" />
                      Cotizar Búsqueda de Venues
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Red de Venues
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Venue+Premium+Seleccionado+Gestión+Integral"
                    alt="Búsqueda de Venues DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Venue premium seleccionado - Gestión integral del espacio</p>
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
                Expertos en <span className="text-orange-500">Espacios</span>
              </h2>
              <p className="text-xl text-gray-700">Transformamos cualquier lugar en la sede soñada</p>
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
                Tipos de <span className="text-red-500">Venues</span>
              </h2>
              <p className="text-xl text-gray-700">Adaptamos la selección según el tipo de evento</p>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Opciones disponibles:</h4>
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

      {/* Proceso de Gestión */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proceso <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para asegurar el venue perfecto</p>
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

      {/* Catálogo de Venues Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Catálogo de <span className="text-orange-500">Venues</span>
              </h2>
              <p className="text-xl text-gray-700">Algunos espacios destacados de nuestra red</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Centro Costa Salguero */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Centro+Costa+Salguero+Buenos+Aires"
                    alt="Centro Costa Salguero"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">Premium</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Centro Costa Salguero</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complejo ferial con vista al río, ideal para eventos corporativos y exposiciones
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Capacidad: 5,000+</span>
                    <span className="text-orange-600 font-semibold">Buenos Aires</span>
                  </div>
                </CardContent>
              </Card>

              {/* La Rural */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=La+Rural+Predio+Ferial+Buenos+Aires"
                    alt="La Rural"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">Masivo</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">La Rural</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Predio histórico con múltiples pabellones para eventos de gran escala
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Capacidad: 10,000+</span>
                    <span className="text-orange-600 font-semibold">Buenos Aires</span>
                  </div>
                </CardContent>
              </Card>

              {/* Teatro Colón */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Teatro+Colón+Buenos+Aires+Histórico"
                    alt="Teatro Colón"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gray-800 text-white">Histórico</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Teatro Colón</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Icónico teatro con acústica mundial para eventos culturales exclusivos
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Capacidad: 2,500</span>
                    <span className="text-orange-600 font-semibold">Buenos Aires</span>
                  </div>
                </CardContent>
              </Card>

              {/* Hoteles 5 Estrellas */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Hoteles+5+Estrellas+LATAM+Premium"
                    alt="Hoteles 5 Estrellas"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">Corporativo</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoteles 5 Estrellas</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Red de hoteles premium con salones equipados y servicios de lujo
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Capacidad: 200-1,000</span>
                    <span className="text-orange-600 font-semibold">LATAM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Espacios al Aire Libre */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Espacios+Aire+Libre+Parques+Terrazas"
                    alt="Espacios al Aire Libre"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">Outdoor</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Espacios al Aire Libre</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Parques, terrazas y espacios únicos para eventos memorables
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Capacidad: Variable</span>
                    <span className="text-orange-600 font-semibold">Argentina</span>
                  </div>
                </CardContent>
              </Card>

              {/* Estadios Deportivos */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Estadios+Deportivos+Eventos+Masivos"
                    alt="Estadios Deportivos"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">Deportivo</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Estadios Deportivos</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Recintos deportivos para eventos masivos y activaciones de marca
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Capacidad: 20,000+</span>
                    <span className="text-orange-600 font-semibold">Regional</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/contacto">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                  <MapPin className="mr-2 h-5 w-5" />
                  Ver Catálogo Completo de Venues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Reales */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos <span className="text-orange-500">Reales</span>
              </h2>
              <p className="text-xl text-gray-700">Casos donde gestionamos venues integralmente</p>
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
                        <div className="text-sm text-gray-600">capacidad</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Gestión:</span>
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
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Precios <span className="text-red-500">Orientativos</span>
              </h2>
              <p className="text-xl text-gray-700">Inversión según la complejidad de gestión del venue</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Consultoría</Badge>
                  <CardTitle className="text-2xl">Búsqueda Básica</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 500 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $800-1,500
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Consultoría de locación personalizada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">3-5 opciones de venues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Asesoramiento pros/contras</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Contacto directo con venue</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Búsqueda Básica</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Gestión Integral</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 2,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $2,500-5,000
                    <span className="text-lg text-gray-600 font-normal">USD</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Búsqueda + negociación completa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión contractual integral</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinación operativa venue</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Transformación de espacios</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Gestión Integral</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Premium</Badge>
                  <CardTitle className="text-2xl">Venues Exclusivos</CardTitle>
                  <p className="text-gray-600">Para eventos +2,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Acceso a venues exclusivos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Negociación preferencial</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión multi-sede</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coordinador venue dedicado</span>
                    </li>
                  </ul>

                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-gray-300 hover:border-orange-500 bg-transparent">
                      Consultar Venues Exclusivos
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre nuestra gestión de venues</p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluye la gestión integral de venues?
                  </h3>
                  <p className="text-gray-700">
                    Incluye consultoría de locación personalizada, búsqueda de 3-5 opciones según presupuesto y
                    necesidades, negociación contractual completa (precios, horarios, servicios incluidos), coordinación
                    operativa con el venue (cronogramas, proveedores, electricidad), gestión de permisos y seguros, y
                    transformación del espacio (layout optimizado, división de salones, ampliación de escenarios con
                    permiso del venue).
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo garantizan mejores condiciones que si contrato directamente?
                  </h3>
                  <p className="text-gray-700">
                    Nuestro conocimiento local y volumen de eventos nos permite negociar precios preferenciales,
                    horarios extendidos sin costo adicional, servicios incluidos (electricidad, limpieza, seguridad),
                    flexibilidad en cláusulas contractuales y acceso a fechas bloqueadas. Además, manejamos la "letra
                    chica" del contrato para evitar sorpresas y costos ocultos que los clientes directos suelen
                    enfrentar.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Tienen acceso a venues exclusivos o únicos?
                  </h3>
                  <p className="text-gray-700">
                    Sí, nuestra red incluye venues exclusivos que no están disponibles para contratación directa:
                    espacios históricos con acceso restringido, locaciones privadas de alto nivel, venues con lista de
                    espera, espacios gubernamentales que requieren gestión especializada, y locaciones únicas (museos,
                    teatros, espacios al aire libre) que necesitan permisos especiales y coordinación compleja.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué pasa si el venue elegido no cumple con las expectativas?
                  </h3>
                  <p className="text-gray-700">
                    Realizamos visitas previas obligatorias con el cliente, briefing detallado de expectativas, pruebas
                    técnicas (sonido, iluminación, conectividad), y coordinación previa con el venue para confirmar
                    todos los detalles. Si durante el evento surgen problemas con el venue, nuestro coordinador on-site
                    gestiona la solución inmediata. Tenemos seguros de responsabilidad y planes de contingencia para
                    cada locación.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden transformar espacios que no son tradicionalmente para eventos?
                  </h3>
                  <p className="text-gray-700">
                    Sí, nos especializamos en transformar cualquier espacio en la sede soñada. Hemos convertido fábricas
                    en salones de gala, parques en centros de convenciones, museos en espacios corporativos, y terrazas
                    en salones de baile. Incluye diseño de layout optimizado, instalación de infraestructura temporal
                    (electricidad, sonido, climatización), división o ampliación de espacios, y cumplimiento de
                    normativas de seguridad.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Trabajan con venues fuera de Buenos Aires?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos red de venues en toda Argentina y LATAM. Trabajamos con hoteles 5 estrellas, centros de
                    convenciones, espacios únicos y venues exclusivos en las principales ciudades de la región. Nuestro
                    conocimiento local en cada destino nos permite ofrecer las mejores opciones y condiciones,
                    coordinando la logística completa sin importar la ubicación del evento.
                  </p>
                </CardContent>
              </Card>
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
                <Home className="w-4 h-4 mr-2" />
                ¿Buscás el venue perfecto?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                El espacio perfecto <span className="text-yellow-300">te está esperando</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>hoteles 5 estrellas hasta espacios únicos</strong>, encontramos y gestionamos el venue
                ideal para que tu evento brille sin sorpresas contractuales.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Building className="mr-2 h-5 w-5" />
                  Cotizar Búsqueda de Venues
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Catálogo de Venues
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Búsqueda Experta</h3>
                <p className="text-sm opacity-80">Conocimiento local</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Negociación</h3>
                <p className="text-sm opacity-80">Mejores condiciones</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Coordinación</h3>
                <p className="text-sm opacity-80">Gestión integral</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Transformación</h3>
                <p className="text-sm opacity-80">Espacios únicos</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece el espacio perfecto</h3>
              <p className="text-lg opacity-90">
                Con nuestra red exclusiva de venues en Argentina y LATAM, conocimiento local y astucia negociadora,
                transformamos cualquier espacio en la sede soñada. Olvídate de la letra chica del contrato.
                <strong> Nosotros la manejamos en tu favor.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
