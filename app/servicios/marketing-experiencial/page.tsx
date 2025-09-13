import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Sparkles,
  Camera,
  Megaphone,
  CheckCircle,
  Heart,
  BarChart3,
  Target,
  ArrowRight,
  Play,
  Lightbulb,
  Palette,
  Users,
  Trophy,
  Building,
  Award,
  Zap,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Marketing Experiencial - Creatividad Sin Límites | DER EVENT HUB",
  description:
    "Creatividad que convierte eventos en recuerdos imborrables. Casos reales: Manchester City experiencias inmersivas, Saint Mary of the Hills acompañamiento de marcas. Engagement emocional y ROI medible.",
  keywords: [
    "marketing experiencial",
    "activaciones de marca",
    "experiencias inmersivas",
    "manchester city activacion",
    "saint mary marketing",
    "engagement emocional",
    "DER Event Hub marketing",
  ],
  openGraph: {
    title: "Marketing Experiencial | DER EVENT HUB",
    description:
      "Uniendo estrategia y arte, creamos experiencias que hablan el lenguaje de tu marca. Manchester City y Saint Mary of the Hills con engagement garantizado.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
        width: 1200,
        height: 630,
        alt: "Marketing Experiencial DER Event Hub",
      },
    ],
  },
}

export default function MarketingExperiencialPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Activaciones de Marca Inmersivas",
      description: "Experiencias que transforman la percepción de marca y generan conexión emocional profunda",
      color: "text-orange-500",
    },
    {
      icon: Camera,
      title: "Experiencias Interactivas y Photobooth",
      description: "Momentos instagrameables, photo walls personalizados e instalaciones artísticas memorables",
      color: "text-red-500",
    },
    {
      icon: Megaphone,
      title: "Eventos de Lanzamiento y Ruedas de Prensa",
      description: "Presentaciones que generan impacto mediático y experiencias de marca únicas",
      color: "text-orange-600",
    },
    {
      icon: Target,
      title: "Promociones y Sampling",
      description: "Activaciones directas con el consumidor, degustaciones y experiencias de producto",
      color: "text-red-600",
    },
    {
      icon: Users,
      title: "Fan Zones y Espacios Experienciales",
      description: "Espacios temáticos que sumergen al público en el universo de la marca",
      color: "text-orange-500",
    },
    {
      icon: BarChart3,
      title: "Medición de Engagement y ROI",
      description: "Analytics de engagement, reach, sentiment analysis y ROI medible de experiencias",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Trophy,
      title: "Activaciones Deportivas",
      description: "Experiencias de marca en eventos deportivos",
      examples: ["Manchester City experiencias inmersivas", "Activaciones en estadios y competencias", "Fan engagement premium y memorabilia"],
    },
    {
      icon: Building,
      title: "Lanzamientos de Marca",
      description: "Presentaciones que generan impacto",
      examples: ["Eventos de producto innovadores", "Experiencias de marca únicas", "Activaciones corporativas memorables"],
    },
    {
      icon: Award,
      title: "Experiencias Premium",
      description: "Momentos extraordinarios de marca",
      examples: ["Saint Mary acompañamiento de marcas", "Eventos VIP exclusivos", "Activaciones de lujo personalizadas"],
    },
  ]

  const tecnologia = [
    {
      feature: "Proceso Creativo Integral",
      description: "Entendemos tu marca, definimos la experiencia, diseñamos la activación y medimos el impacto",
      icon: Lightbulb,
    },
    {
      feature: "Storytelling de Marca",
      description: "Narrativas que conectan emocionalmente, transmiten valores y generan recordación",
      icon: Heart,
    },
    {
      feature: "Activaciones Interactivas",
      description: "Experiencias inmersivas, photo walls, instalaciones artísticas y momentos instagrameables",
      icon: Eye,
    },
    {
      feature: "Medición de Impacto",
      description: "Analytics de engagement, reach, sentiment analysis y ROI de experiencias de marca",
      icon: BarChart3,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Treble Trophy Tour",
      asistentes: "1,000",
      tecnologia: "Experiencia Inmersiva Completa",
      resultado: "74% engagement rate",
      badge: "Deportivo",
    },
    {
      nombre: "Saint Mary of the Hills",
      asistentes: "Premium",
      tecnologia: "Acompañamiento de Marcas",
      resultado: "Sponsors integrados exitosamente",
      badge: "Institucional",
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
            <span className="text-gray-900">Marketing Experiencial</span>
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
                  <Badge className="bg-orange-500 text-white">Creatividad Sin Límites</Badge>
                  <Badge className="bg-red-500 text-white">Engagement Emocional</Badge>
                  <Badge className="bg-white text-orange-600">ROI Medible</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Marketing <span className="text-yellow-300">Experiencial</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Creatividad que convierte eventos en recuerdos imborrables</strong>. Uniendo estrategia y arte, 
                  creamos experiencias que hablan el lenguaje de tu marca y resuenan en tu público 
                  <strong> con engagement emocional garantizado</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Experiencias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">∞</div>
                    <div className="text-sm opacity-80">Creatividad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Memorable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">ROI</div>
                    <div className="text-sm opacity-80">Medible</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Cotizar Marketing Experiencial
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Portfolio Creativo
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg"
                    alt="Marketing Experiencial DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Activación Manchester City - Experiencia inmersiva de marca</p>
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
                Creatividad <span className="text-orange-500">Sin Límites</span>
              </h2>
              <p className="text-xl text-gray-700">Experiencias que sorprenden y deleitan</p>
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
              <p className="text-xl text-gray-700">Adaptamos la creatividad según el objetivo de marca</p>
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

      {/* Metodología Detallada */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proceso <span className="text-orange-500">Creativo</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para crear experiencias memorables</p>
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
              <p className="text-xl text-gray-700">Casos donde aplicamos marketing experiencial</p>
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
                        <span className="text-gray-700">Experiencia:</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre marketing experiencial</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué diferencia el marketing experiencial de la publicidad tradicional?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  El marketing experiencial crea conexiones emocionales reales a través de experiencias memorables. En lugar de solo comunicar, permite vivir la marca. Como en Manchester City con 74% engagement rate y photobooth con 650 shares, generamos momentos que las personas quieren compartir. No es publicidad que interrumpe, sino experiencias que las personas buscan y recuerdan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo miden el ROI de las experiencias de marca?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Medimos engagement rate, reach orgánico, shares en redes sociales, tiempo de interacción, sentiment analysis y conversión a ventas. En Manchester City logramos 74% engagement rate y 650 shares del photobooth (74% de participación). También medimos brand recall, intención de compra post-experiencia, y generación de leads calificados. Cada activación incluye dashboard de métricas en tiempo real.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tipo de activaciones pueden crear para eventos deportivos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Creamos experiencias inmersivas como photo walls temáticos, simuladores deportivos, meet & greets con atletas, zonas de autógrafos, activaciones con realidad aumentada, y experiencias VIP exclusivas. En Manchester City desarrollamos una experiencia completa que cuidó la marca bajo todo punto de vista, generando momentos memorables y contenido orgánico masivo para redes sociales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden integrar múltiples marcas en una sola experiencia?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, como en Saint Mary of the Hills donde gestionamos el acompañamiento de múltiples marcas hacia el colegio, integrando sponsors de manera orgánica y coherente. Creamos experiencias donde cada marca tiene su momento sin competir, sino complementándose. Desarrollamos narrativas que permiten que múltiples marcas convivan y se potencien mutuamente en la misma activación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluyen las experiencias interactivas y photobooth?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluyen photo walls personalizados con branding de la marca, props temáticos, fondos interactivos, realidad aumentada, filtros personalizados, impresión instantánea, sharing automático a redes sociales, y analytics de participación. Como en Manchester City, el photobooth generó 650 shares con 74% de participación, creando contenido orgánico valioso y momentos memorables para los asistentes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para desarrollar una experiencia de marca?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Para activaciones simples necesitamos 2-3 semanas, para experiencias complejas como Manchester City requerimos 4-6 semanas. El tiempo incluye proceso creativo integral, diseño de la experiencia, desarrollo de materiales, coordinación con proveedores, y testing pre-evento. Cuanto más tiempo tengamos, más personalizada y impactante será la experiencia final.
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
                <Sparkles className="w-4 h-4 mr-2" />
                ¿Necesitás experiencias de marca memorables?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Creatividad que <span className="text-yellow-300">nunca se olvida</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Manchester City con 74% engagement rate hasta Saint Mary con acompañamiento integral de marcas</strong>, 
                creamos experiencias que hablan el lenguaje de tu marca y resuenan en tu público.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Cotizar Marketing Experiencial
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Portfolio Creativo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Creatividad Infinita</h3>
                <p className="text-sm opacity-80">Sin límites</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Engagement Emocional</h3>
                <p className="text-sm opacity-80">74% Manchester City</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Experiencias 360°</h3>
                <p className="text-sm opacity-80">Momentos memorables</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">ROI Medible</h3>
                <p className="text-sm opacity-80">Analytics completos</p>
              </div>

            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu marca merece experiencias inolvidables</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Treble Trophy Tour (74% engagement rate, 650 shares en photobooth) y 
                Saint Mary of the Hills (acompañamiento integral de marcas), creamos experiencias que transforman la percepción 
                de tu marca y generan conexiones emocionales duraderas.
                <strong> Creatividad sin límites, engagement emocional y ROI medible garantizado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}