import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  Handshake,
  Globe,
  CheckCircle,
  Target,
  TrendingUp,
  ArrowRight,
  Play,
  Building,
  Users,
  Award,
  Zap,
  Network,
  Star,
  Rocket,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Alianzas Estratégicas - Partnerships que Potencian | DER EVENT HUB",
  description:
    "Creamos alianzas que transforman eventos. Casos reales: Manchester City Trophy Tour, Accesos Paraguay partnership. Red de venues premium, partners tecnológicos y alcance internacional.",
  keywords: [
    "alianzas estrategicas eventos",
    "partnerships eventos",
    "manchester city alianza",
    "accesos paraguay partnership",
    "venues premium",
    "DER Event Hub alianzas",
  ],
  openGraph: {
    title: "Alianzas Estratégicas | DER EVENT HUB",
    description:
      "Partnerships formales que expanden capacidades y generan oportunidades. Ecosistema integrado con alcance internacional.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
        width: 1200,
        height: 630,
        alt: "Alianzas Estratégicas DER Event Hub",
      },
    ],
  },
}

export default function AlianzasEstrategicasPage() {
  const features = [
    {
      icon: Network,
      title: "Partners Tecnológicos",
      description: "Alianzas con líderes en tecnología para eventos: plataformas de registro, apps móviles, sistemas de votación interactiva y soluciones de streaming profesional",
      color: "text-orange-500",
    },
    {
      icon: Building,
      title: "Red de Venues Premium",
      description: "Acceso exclusivo a los mejores espacios para eventos en toda la región, con condiciones preferenciales y servicios diferenciados",
      color: "text-red-500",
    },
    {
      icon: Zap,
      title: "Proveedores Especializados",
      description: "Colaboración con expertos en catering gourmet, producción audiovisual, seguridad, transporte VIP y servicios de protocolo",
      color: "text-orange-600",
    },
    {
      icon: Globe,
      title: "Alcance Internacional",
      description: "Partners estratégicos en principales ciudades de América Latina para eventos multinacionales y expansión regional",
      color: "text-red-600",
    },
    {
      icon: Star,
      title: "Sponsors Corporativos",
      description: "Gestión integral de patrocinios y activación de marcas, conectando tu evento con sponsors relevantes para tu industria",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Ecosistema Integrado",
      description: "Coordinación perfecta entre todos los partners para garantizar una experiencia fluida y cohesiva en cada evento",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Award,
      title: "Eventos Deportivos Internacionales",
      description: "Alianzas para competencias de alto nivel",
      examples: ["Manchester City Trophy Tour", "Partnerships con marcas globales", "Activaciones deportivas premium"],
    },
    {
      icon: Zap,
      title: "Soluciones Tecnológicas Integradas",
      description: "Partnerships tecnológicos especializados",
      examples: ["Accesos Paraguay - Control de accesos", "Proveedores de equipamiento premium", "Plataformas de streaming avanzadas"],
    },
    {
      icon: Building,
      title: "Expansión de Mercado",
      description: "Red estratégica para crecimiento",
      examples: ["Venues premium en LATAM", "Agencias de marketing complementarias", "Sponsors corporativos estratégicos"],
    },
  ]

  const tecnologia = [
    {
      feature: "Identificación Estratégica",
      description: "Mapeo de partners tecnológicos, venues y proveedores especializados con potencial de integración",
      icon: Target,
    },
    {
      feature: "Negociación y Estructuración",
      description: "Desarrollo de acuerdos win-win, contratos de referral y alianzas preferenciales",
      icon: Handshake,
    },
    {
      feature: "Integración Operativa",
      description: "Implementación de workflows conjuntos, sistemas compartidos y protocolos de colaboración",
      icon: Network,
    },
    {
      feature: "Gestión y Optimización",
      description: "Monitoreo de performance, optimización continua y expansión del ecosistema de partners",
      icon: TrendingUp,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Trophy Tour",
      asistentes: "Global",
      tecnologia: "Alianza Estratégica Internacional",
      resultado: "Activación Premium Exitosa",
      badge: "Deportivo",
    },
    {
      nombre: "Accesos Paraguay Partnership",
      asistentes: "Regional",
      tecnologia: "Socio Tecnológico Estratégico",
      resultado: "Expansión Tecnológica",
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
            <span className="text-gray-900">Alianzas Estratégicas</span>
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
                  <Badge className="bg-orange-500 text-white">Ecosistema Integrado</Badge>
                  <Badge className="bg-red-500 text-white">Alcance Internacional</Badge>
                  <Badge className="bg-white text-orange-600">Partners Estratégicos</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Alianzas <span className="text-yellow-300">Estratégicas</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Transformamos eventos a través de partnerships de alto impacto</strong>. 
                  Conectamos tu proyecto con la mejor red de partners tecnológicos, venues premium 
                  y proveedores especializados <strong>para una experiencia sin límites</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">150+</div>
                    <div className="text-sm opacity-80">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🌍</div>
                    <div className="text-sm opacity-80">Global</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">360°</div>
                    <div className="text-sm opacity-80">Integración</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">🤝</div>
                    <div className="text-sm opacity-80">Win-Win</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <Handshake className="mr-2 h-5 w-5" />
                      Crear Alianza Estratégica
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Red de Partners
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
                    alt="Alianzas Estratégicas DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Manchester City Trophy Tour - Alianza estratégica internacional</p>
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
                Características <span className="text-orange-500">Principales</span>
              </h2>
              <p className="text-xl text-gray-700">Nuestra red estratégica potencia cada evento</p>
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
              <p className="text-xl text-gray-700">Adaptamos nuestra red estratégica a tus necesidades</p>
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
                Proceso <span className="text-orange-500">Estratégico</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para construir alianzas de alto impacto</p>
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
              <p className="text-xl text-gray-700">Casos donde nuestra red estratégica genera impacto</p>
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
                        <span className="text-gray-700">Consultoría:</span>
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
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre alianzas estratégicas</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo seleccionan sus partners estratégicos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Realizamos un mapeo exhaustivo de partners tecnológicos, venues y proveedores especializados, evaluando su expertise, capacidades de integración y potencial de valor agregado. Como en el Manchester City Trophy Tour, buscamos partners que no solo complementen nuestras capacidades, sino que también aporten una dimensión estratégica única.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué beneficios obtienen los partners al trabajar con ustedes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Ofrecemos expansión de mercado, referencias de calidad, integración tecnológica, visibilidad en proyectos internacionales y oportunidades de crecimiento conjunto. Como en el caso de Accesos Paraguay, nuestras alianzas no son transaccionales, sino verdaderas colaboraciones estratégicas que generan valor mutuo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo garantizan la calidad de los partners?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Implementamos un riguroso proceso de due diligence que incluye evaluación de trayectoria, referencias, capacidad tecnológica y alineamiento estratégico. Cada partner pasa por una validación exhaustiva para asegurar que cumpla con nuestros altos estándares de calidad e innovación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Trabajan con partners internacionales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, nuestra red incluye partners en toda Latinoamérica, con conexiones estratégicas en principales ciudades. El Manchester City Trophy Tour es un ejemplo perfecto de nuestra capacidad para gestionar alianzas internacionales de alto nivel, integrando tecnología, logística y experiencia de marca.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo miden el éxito de una alianza?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Utilizamos KPIs específicos como proyectos conjuntos, nuevos mercados penetrados, ingresos generados, satisfacción del partner y casos de éxito compartidos. Nuestro objetivo es crear relaciones de largo plazo que generen valor mutuo y transformador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tipos de eventos pueden beneficiarse de estas alianzas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Desde eventos deportivos internacionales como el Manchester City Trophy Tour, hasta conferencias corporativas, lanzamientos de producto, eventos tecnológicos y experiencias de marca. Nuestra red versátil se adapta a prácticamente cualquier tipo de evento que requiera una estrategia de partners sofisticada.
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
                <Handshake className="w-4 h-4 mr-2" />
                ¿Necesitás expandir tus capacidades con alianzas estratégicas?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Partnerships que <span className="text-yellow-300">transforman eventos</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Manchester City Trophy Tour hasta Accesos Paraguay</strong>, 
                nuestra red estratégica de partners tecnológicos, venues premium y 
                proveedores especializados potencia cada proyecto.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Network className="mr-2 h-5 w-5" />
                  Crear Alianza Estratégica
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Red de Partners
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Red Global</h3>
                <p className="text-sm opacity-80">150+ Partners</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Alcance</h3>
                <p className="text-sm opacity-80">Internacional</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Acuerdos</h3>
                <p className="text-sm opacity-80">Win-Win</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Relaciones</h3>
                <p className="text-sm opacity-80">Estratégicas</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece la mejor red estratégica</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City Trophy Tour (alianza internacional) y 
                Accesos Paraguay (partnership tecnológico), construimos relaciones que van 
                más allá de la colaboración puntual.
                <strong> Red global, integración completa y crecimiento conjunto garantizados.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}