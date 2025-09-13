import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowLeft,
  ChefHat,
  Truck,
  Leaf,
  CheckCircle,
  Utensils,
  Recycle,
  Target,
  ArrowRight,
  Play,
  Star,
  MapPin,
  Users,
  Building,
  Music,
  Award,
  Globe,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Soluciones Gastronómicas - Curaduría y Sustentabilidad | DER EVENT HUB",
  description:
    "Patios gastronómicos de excelencia, food trucks curados y experiencias gastronómicas sustentables. Casos reales: Buenos Aires Trap 120K personas, Fiesta Nacional de la Manzana. Economía circular y gestión integral.",
  keywords: [
    "soluciones gastronomicas eventos",
    "food trucks eventos",
    "patios gastronomicos",
    "buenos aires trap gastronomia",
    "fiesta manzana gastronomia",
    "catering sustentable",
    "DER Event Hub gastronomia",
  ],
  openGraph: {
    title: "Soluciones Gastronómicas | DER EVENT HUB",
    description:
      "Curaduría especializada y gestión sustentable para eventos de cualquier escala. Desde 4,000 hasta 120,000 personas con identidad regional.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg",
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
      icon: Star,
      title: "Curaduría Gastronómica Especializada",
      description: "Selección y gestión de marcas gastronómicas con identidad y trayectoria, priorizando propuestas nacionales y regionales",
      color: "text-orange-500",
    },
    {
      icon: Building,
      title: "Patios Gastronómicos de Excelencia",
      description: "Diseño y operación de espacios gastronómicos integrales que combinan diversidad culinaria y coherencia estética",
      color: "text-red-500",
    },
    {
      icon: Truck,
      title: "Food Trucks y Street Food",
      description: "Gestión completa de food trucks con estructuras visualmente atractivas y coordinación logística profesional",
      color: "text-orange-600",
    },
    {
      icon: ChefHat,
      title: "Diversidad Gastronómica Curada",
      description: "Desde street food hasta cocinas tradicionales argentinas, opciones saludables, dulces y bebidas con coherencia operativa",
      color: "text-red-600",
    },
    {
      icon: MapPin,
      title: "Economía Circular Local",
      description: "Sistema que prioriza proveedores locales, cocinas cercanas y producción regional sin generar circuitos externos",
      color: "text-orange-500",
    },
    {
      icon: Leaf,
      title: "Gestión Sustentable Integral",
      description: "Plan de manejo de residuos, clasificación en origen, disposición responsable y acuerdos con cooperativas de reciclado",
      color: "text-red-500",
    },
  ]

  const casosUso = [
    {
      icon: Music,
      title: "Festivales y Eventos Masivos",
      description: "Zonas gastronómicas para grandes multitudes",
      examples: ["Buenos Aires Trap - 120,000 personas", "Gestión de múltiples food trucks", "Coordinación logística de 4 días"],
    },
    {
      icon: Award,
      title: "Eventos Regionales con Identidad",
      description: "Gastronomía que refleja la cultura local",
      examples: ["Fiesta Nacional de la Manzana", "Identidad regional auténtica", "Documentación fotográfica profesional"],
    },
    {
      icon: Building,
      title: "Experiencias Corporativas Premium",
      description: "Soluciones gastronómicas para eventos empresariales",
      examples: ["Patios gastronómicos corporativos", "Catering ejecutivo personalizado", "Experiencias gourmet exclusivas"],
    },
  ]

  const tecnologia = [
    {
      feature: "Curaduría y Selección",
      description: "Identificación de marcas gastronómicas con trayectoria, evaluación de propuestas y coordinación de contratos",
      icon: Star,
    },
    {
      feature: "Diseño y Montaje",
      description: "Planificación de espacios, coherencia estética, distribución funcional y coordinación de infraestructura",
      icon: Building,
    },
    {
      feature: "Operación y Logística",
      description: "Gestión de proveedores locales, coordinación de entregas, control de calidad y supervisión operativa",
      icon: Truck,
    },
    {
      feature: "Sustentabilidad y Cierre",
      description: "Manejo de residuos, clasificación en origen, disposición responsable y medición de impacto local",
      icon: Leaf,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Buenos Aires Trap - Zona Gastronómica",
      asistentes: "120,000",
      tecnologia: "Gestión Completa + Mind Market",
      resultado: "4 días operación exitosa",
      badge: "Masivo",
    },
    {
      nombre: "Fiesta Nacional de la Manzana",
      asistentes: "Regional",
      tecnologia: "Identidad Local + Fotografía",
      resultado: "Área gastronómica completa",
      badge: "Cultural",
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
                  <Badge className="bg-orange-500 text-white">Curaduría Regional</Badge>
                  <Badge className="bg-red-500 text-white">Identidad Local</Badge>
                  <Badge className="bg-white text-orange-600">Sustentable</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Soluciones <span className="text-yellow-300">Gastronómicas</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Patios gastronómicos de excelencia, food trucks curados y experiencias gastronómicas que generan impacto real</strong>. 
                  Desde 4,000 hasta 120,000 personas con <strong>curaduría especializada y gestión sustentable</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">120K</div>
                    <div className="text-sm opacity-80">Personas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4 días</div>
                    <div className="text-sm opacity-80">Operación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Regional</div>
                    <div className="text-sm opacity-80">Curaduría</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">♻️</div>
                    <div className="text-sm opacity-80">Sustentable</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cotizador">
                    <Button
                      size="lg"
                      className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
                    >
                      <ChefHat className="mr-2 h-5 w-5" />
                      Solicitar Propuesta
                    </Button>
                  </Link>

                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                    >
                      Ver Casos de Éxito
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
                    alt="Soluciones Gastronómicas DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Buenos Aires Trap - Zona gastronómica para 120,000 personas</p>
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
                Experiencias Gastronómicas <span className="text-orange-500">de Excelencia</span>
              </h2>
              <p className="text-xl text-gray-700">Curaduría especializada, gestión sustentable y coordinación logística</p>
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
              <p className="text-xl text-gray-700">Adaptamos la curaduría según el tipo de evento</p>
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
                Proceso <span className="text-orange-500">Gastronómico</span>
              </h2>
              <p className="text-xl text-gray-700">4 etapas para una experiencia culinaria perfecta</p>
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
              <p className="text-xl text-gray-700">Casos donde transformamos la experiencia gastronómica</p>
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

      {/* FAQ Específico */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Todo lo que necesitás saber sobre soluciones gastronómicas</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye exactamente la curaduría gastronómica?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye selección y gestión de marcas gastronómicas con identidad y trayectoria, priorizando propuestas nacionales y regionales. Como en Buenos Aires Trap, gestionamos múltiples food trucks con una línea estética coherente, y en la Fiesta Nacional de la Manzana implementamos una propuesta gastronómica con identidad regional auténtica.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo manejan la sostenibilidad en eventos gastronómicos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Implementamos un sistema de economía circular que prioriza proveedores locales, cocinas de elaboración cercanas y producción regional. Incluimos plan de manejo de residuos, clasificación en origen, disposición responsable de aceite vegetal y acuerdos con cooperativas de reciclado. En Buenos Aires Trap logramos un impacto local significativo con esta metodología.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden manejar eventos de diferentes escalas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, nuestra experiencia abarca desde eventos pequeños hasta grandes festivales masivos. En Buenos Aires Trap gestionamos una zona gastronómica para 120,000 personas durante 4 días, mientras que en eventos más pequeños adaptamos nuestra curaduría y logística manteniendo los mismos estándares de calidad y sostenibilidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué tipos de cocinas y propuestas pueden incluir?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Ofrecemos una diversidad gastronómica curada que incluye street food, cocinas tradicionales argentinas, opciones saludables, dulces y bebidas. En la Fiesta Nacional de la Manzana implementamos una propuesta que reflejaba la identidad regional, mientras que en Buenos Aires Trap creamos una zona gastronómica con múltiples opciones para diferentes gustos y necesidades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Incluyen servicio de fotografía para documentar la experiencia?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, como en la Fiesta Nacional de la Manzana, ofrecemos servicio de fotografía profesional para documentar la experiencia gastronómica. Capturamos la estética de los food trucks, la diversidad culinaria, momentos de interacción y la identidad del evento, proporcionando un registro visual completo de la propuesta gastronómica.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para planificar una solución gastronómica?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  La planificación varía según la escala del evento. Para eventos pequeños necesitamos 4-6 semanas, mientras que para eventos masivos como Buenos Aires Trap (120,000 personas) requiere 3-4 meses de anticipación. El tiempo incluye curaduría de marcas, logística, diseño del espacio, coordinación de proveedores y planificación de sostenibilidad.
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
                <ChefHat className="w-4 h-4 mr-2" />
                ¿Necesitás una solución gastronómica para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Experiencias que <span className="text-yellow-300">alimentan recuerdos</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>Buenos Aires Trap con 120,000 personas hasta la Fiesta Nacional de la Manzana</strong>, 
                creamos soluciones gastronómicas que transforman eventos con identidad, sostenibilidad y sabor.
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
                  Solicitar Propuesta
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Casos de Éxito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Curaduría</h3>
                <p className="text-sm opacity-80">Especializada</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Economía</h3>
                <p className="text-sm opacity-80">Circular</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Impacto</h3>
                <p className="text-sm opacity-80">Local</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Experiencia</h3>
                <p className="text-sm opacity-80">Memorable</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece una experiencia gastronómica única</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Buenos Aires Trap (120,000 personas, 4 días de operación) y 
                Fiesta Nacional de la Manzana (identidad regional auténtica), creamos soluciones 
                gastronómicas que van más allá de la comida.
                <strong> Curaduría especializada, sostenibilidad e impacto local garantizados.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}