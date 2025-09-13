import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  UtensilsCrossed,
  Coffee,
  Users,
  CheckCircle,
  ChefHat,
  Wine,
  Sparkles,
  Shield,
  Award,
  ArrowRight,
  Play,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Soluciones Gastronómicas - Sabores Inolvidables | DER EVENT HUB",
  description:
    "Catering integral y experiencias culinarias para eventos. Desde coffee breaks hasta banquetes gourmet. Casos reales: Buenos Aires Trap Festival (120K), Fiesta Manzana, Expo Autos CeNARD. Calidad y puntualidad garantizada.",
  keywords: [
    "catering eventos",
    "soluciones gastronomicas",
    "food trucks",
    "banquetes",
    "coffee breaks",
    "barra de tragos",
    "DER Event Hub catering",
  ],
  openGraph: {
    title: "Soluciones Gastronómicas - Deléitate con Sabores Únicos | DER EVENT HUB",
    description:
      "Deléitate con nuestras propuestas gastronómicas hechas a la medida: desde finos cócteles hasta comfort food para multitudes, siempre con máxima calidad.",
    images: [
      {
        url: "https://res.cloudinary.com/dqiwqlu8v/image/upload/v1234567890/soluciones-gastronomicas-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Soluciones Gastronómicas DER Event Hub",
      },
    ],
  },
}

export default function SolucionesGastronomicasPage() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "Catering Integral",
      description: "Desde coffee breaks ejecutivos hasta banquetes gourmet con servicio impecable",
      color: "text-orange-500",
    },
    {
      icon: Wine,
      title: "Barra de Bebidas",
      description: "Cocktails de autor, bartending profesional y curaduría de vinos premium",
      color: "text-red-500",
    },
    {
      icon: ChefHat,
      title: "Menús Personalizados",
      description: "Temáticos, dietas especiales, show cooking y experiencias gourmet únicas",
      color: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Estrictos estándares de higiene, ingredientes premium y puntualidad absoluta",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Award,
      title: "Eventos Corporativos",
      description: "Catering ejecutivo y profesional",
      examples: ["Coffee breaks premium", "Almuerzos de trabajo", "Cenas de gala corporativas"],
    },
    {
      icon: Users,
      title: "Eventos Masivos",
      description: "Logística gastronómica de gran escala",
      examples: ["Buenos Aires Trap Festival (120K)", "Fiesta Nacional de la Manzana", "Expo Autos CeNARD (4K+)"],
    },
    {
      icon: Heart,
      title: "Experiencias Gourmet",
      description: "Alta gastronomía y momentos únicos",
      examples: ["Show cooking en vivo", "Degustaciones temáticas", "Maridajes exclusivos"],
    },
  ]

  const tiposServicio = [
    {
      icon: Coffee,
      title: "Coffee Breaks",
      description: "Opciones saludables, facturas clásicas, bebidas premium",
      items: ["Frutas frescas", "Yogures artesanales", "Medialunas y croissants", "Café de especialidad"],
    },
    {
      icon: Wine,
      title: "Cocktails & Recepciones",
      description: "Barra móvil, tragos de autor, canapés gourmet",
      items: ["Bartenders profesionales", "Cocktails personalizados", "Finger food premium", "Estaciones temáticas"],
    },
    {
      icon: UtensilsCrossed,
      title: "Almuerzos & Cenas",
      description: "Menús completos, servicio a la mesa, buffets temáticos",
      items: ["Menús de 3 tiempos", "Buffets internacionales", "Servicio ejecutivo", "Opciones vegetarianas"],
    },
    {
      icon: ChefHat,
      title: "Experiencias Especiales",
      description: "Show cooking, food trucks, estaciones interactivas",
      items: ["Asado en vivo", "Pasta fresca", "Food trucks curados", "Estaciones de postres"],
    },
  ]

  const proyectosReales = [
    {
      nombre: "Buenos Aires Trap Festival",
      asistentes: "120,000",
      tecnologia: "Zona Street Food + Sustentable",
      resultado: "Gestión gastronómica masiva",
      badge: "Masivo",
    },
    {
      nombre: "Fiesta Nacional de la Manzana",
      asistentes: "Masivo",
      tecnologia: "Zona Gastronómica Completa",
      resultado: "Protocolos operativos exitosos",
      badge: "Cultural",
    },
    {
      nombre: "Expo Autos CeNARD 2024",
      asistentes: "4,000+",
      tecnologia: "Logística Food Trucks",
      resultado: "Servicio puntual garantizado",
      badge: "Corporativo",
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
            <span className="text-gray-900">Soluciones Gastronómicas</span>
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
                  <Badge className="bg-orange-500 text-white">Sabores Inolvidables</Badge>
                  <Badge className="bg-red-500 text-white">Calidad Culinaria</Badge>
                  <Badge className="bg-white text-orange-600">Servicio Impecable</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Soluciones <span className="text-yellow-300">Gastronómicas</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Deléitate con nuestras propuestas gastronómicas hechas a la medida de tu evento.</strong>{" "}
                  Desde finos cócteles de autor hasta comfort food para grandes multitudes, siempre con{" "}
                  <strong>la máxima calidad y puntualidad en el servicio</strong>. Si tu evento es temático, nuestra
                  cocina lo refleja.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">120K</div>
                    <div className="text-sm opacity-80">Buenos Aires Trap</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">10K+</div>
                    <div className="text-sm opacity-80">Paladares Servidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Higiene Garantizada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🍽️</div>
                    <div className="text-sm opacity-80">Experiencia Sensorial</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <UtensilsCrossed className="mr-2 h-5 w-5" />
                      Cotizar Soluciones Gastronómicas
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Menús y Opciones
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Buenos+Aires+Trap+Festival+Zona+Gastronómica"
                    alt="Soluciones Gastronómicas DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Buenos Aires Trap Festival - Zona gastronómica para 120,000 asistentes
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
                Experiencia <span className="text-orange-500">Sensorial</span>
              </h2>
              <p className="text-xl text-gray-700">Nos ajustamos al estilo y presupuesto sin perder sabor</p>
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

      {/* Tipos de Servicio */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de <span className="text-red-500">Servicio</span>
              </h2>
              <p className="text-xl text-gray-700">Cada momento del evento tiene su propuesta gastronómica perfecta</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tiposServicio.map((tipo, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <tipo.icon className="w-5 h-5 text-orange-500 mr-2" />
                      {tipo.title}
                    </CardTitle>
                    <p className="text-gray-600">{tipo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {tipo.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
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

      {/* Casos de Uso */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Casos de <span className="text-red-500">Uso</span>
              </h2>
              <p className="text-xl text-gray-700">Adaptamos la gastronomía según el tipo y escala del evento</p>
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

      {/* Proyectos Reales */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos <span className="text-orange-500">Reales</span>
              </h2>
              <p className="text-xl text-gray-700">Casos donde gestionamos la gastronomía integralmente</p>
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
                        <span className="text-gray-700">Solución:</span>
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
              <p className="text-xl text-gray-700">Inversión según el tipo de servicio y cantidad de invitados</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Básico */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-orange-100 text-orange-800 mx-auto mb-4">Coffee Breaks</Badge>
                  <CardTitle className="text-2xl">Servicio Básico</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 100 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    $15-25
                    <span className="text-lg text-gray-600 font-normal">USD/persona</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Coffee breaks premium</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Frutas frescas y facturas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Bebidas calientes y frías</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Servicio de mozos</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar Servicio Básico</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500">
                <CardHeader className="text-center">
                  <Badge className="bg-red-100 text-red-800 mx-auto mb-4">Más Popular</Badge>
                  <CardTitle className="text-2xl">Servicio Premium</CardTitle>
                  <p className="text-gray-600">Para eventos hasta 500 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">
                    $35-60
                    <span className="text-lg text-gray-600 font-normal">USD/persona</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Menú completo + barra de tragos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Cocktails de autor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Estaciones temáticas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Servicio ejecutivo completo</span>
                    </li>
                  </ul>

                  <Link href="/cotizador">
                    <Button className="w-full bg-red-500 hover:bg-red-600">Cotizar Servicio Premium</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-100 text-gray-800 mx-auto mb-4">Masivo</Badge>
                  <CardTitle className="text-2xl">Servicio Enterprise</CardTitle>
                  <p className="text-gray-600">Para eventos +1,000 personas</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    Consultar
                    <span className="text-lg text-gray-600 font-normal">Precio</span>
                  </div>

                  <ul className="space-y-3 text-left mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Logística gastronómica masiva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Food trucks curados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Gestión sustentable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Equipo gastronómico dedicado</span>
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
              <p className="text-xl text-gray-700">
                Todo lo que necesitás saber sobre nuestras soluciones gastronómicas
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué incluyen las soluciones gastronómicas integrales?
                  </h3>
                  <p className="text-gray-700">
                    Incluyen diseño de menú personalizado según el evento y presupuesto, ingredientes premium frescos,
                    servicio de mozos profesionales, barra de bebidas con bartenders, montaje y desmontaje completo,
                    vajilla y cristalería, mantelería, estrictos protocolos de higiene y seguridad alimentaria. Como en
                    Buenos Aires Trap Festival, coordinamos desde coffee breaks hasta zonas gastronómicas masivas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Pueden manejar eventos masivos como Buenos Aires Trap Festival?
                  </h3>
                  <p className="text-gray-700">
                    Sí, tenemos experiencia comprobada en eventos masivos. Para Buenos Aires Trap Festival (120,000
                    asistentes) gestionamos la zona street food completa con múltiples food trucks curados, protocolos
                    de higiene masivos, gestión sustentable de residuos, coordinación logística 24/7 y equipos
                    gastronómicos distribuidos estratégicamente. También manejamos Fiesta Nacional de la Manzana y Expo
                    Autos CeNARD (4,000+) con protocolos operativos exitosos.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cómo garantizan la calidad e higiene en los alimentos?
                  </h3>
                  <p className="text-gray-700">
                    Aplicamos estrictos protocolos HACCP (Análisis de Peligros y Puntos Críticos de Control), trabajamos
                    únicamente con proveedores certificados, mantenemos cadena de frío completa, realizamos controles de
                    temperatura constantes, utilizamos ingredientes premium frescos del día, y nuestro equipo tiene
                    certificaciones en manipulación de alimentos. Todos los menús son probados previamente y tenemos
                    seguros de responsabilidad civil alimentaria.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Ofrecen opciones para dietas especiales y restricciones alimentarias?
                  </h3>
                  <p className="text-gray-700">
                    Sí, diseñamos menús adaptados para vegetarianos, veganos, celíacos, diabéticos, kosher, halal y
                    otras restricciones específicas. Identificamos claramente cada opción, utilizamos utensilios
                    separados para evitar contaminación cruzada, y coordinamos previamente con los invitados para
                    conocer sus necesidades. Nuestros chefs están capacitados en cocina inclusiva y saludable.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué diferencia sus soluciones gastronómicas de otros caterings?
                  </h3>
                  <p className="text-gray-700">
                    Nuestra diferencia está en la integración completa con el evento y la personalización temática. No
                    solo servimos comida, sino que creamos experiencias gastronómicas que reflejan la identidad del
                    evento. Coordinamos la gastronomía con la producción, decoración y timing del evento. Además,
                    tenemos experiencia específica en eventos masivos y complejos, no solo catering tradicional.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Incluyen servicio de barra de tragos y bartending profesional?
                  </h3>
                  <p className="text-gray-700">
                    Sí, incluimos barra móvil completa con bartenders profesionales certificados, carta de cocktails de
                    autor personalizados según el evento, curaduría de vinos y destilados premium, barra de cervezas
                    artesanales, opciones sin alcohol creativas, y montaje completo de la estación de bebidas. Los
                    bartenders pueden crear cocktails temáticos exclusivos para tu evento.
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
              <p className="text-xl text-gray-700">Comparación con caterings tradicionales</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-orange-600">DER Gastronómico</th>
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
                      <span className="text-red-600">Catering genérico</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Experiencia Masiva</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">120K Buenos Aires Trap</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo eventos pequeños</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Personalización Temática</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Menús Reflejan Evento</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Menús estándar</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Integración de Servicios</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Gastronómico + Producción</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Solo comida</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-semibold text-gray-900">Gestión Sustentable</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-green-600 font-semibold">Protocolos Ecológicos</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600">Sin enfoque sustentable</span>
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
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                ¿Querés deleitar a tus invitados?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cada sabor cuenta <span className="text-yellow-300">una historia única</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>coffee breaks ejecutivos hasta zonas gastronómicas masivas</strong>, creamos experiencias
                culinarias que reflejan la identidad de tu evento con calidad garantizada.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ChefHat className="mr-2 h-5 w-5" />
                  Cotizar Soluciones Gastronómicas
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Menús y Opciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Calidad Premium</h3>
                <p className="text-sm opacity-80">Ingredientes frescos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Higiene Total</h3>
                <p className="text-sm opacity-80">Protocolos HACCP</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Experiencia Única</h3>
                <p className="text-sm opacity-80">Menús temáticos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Reales</h3>
                <p className="text-sm opacity-80">120K Buenos Aires Trap</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece sabores inolvidables</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Buenos Aires Trap Festival (120,000 asistentes con zona street food sustentable),
                Fiesta Nacional de la Manzana (zona gastronómica completa) y Expo Autos CeNARD (logística food trucks
                para 4,000+), nuestras soluciones gastronómicas están probadas en todas las escalas.
                <strong> Cada sabor refleja la identidad de tu evento.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
