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
  Target,
  Users,
  CheckCircle,
  BarChart3,
  Trophy,
  Globe,
  Award,
  ArrowRight,
  Play,
  DollarSign,
  TrendingUp,
  Building,
  Music,
  Smartphone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Alianzas Estratégicas y Sponsors para Eventos | DER EVENT HUB",
  description:
    "Conseguimos sponsors y partnerships estratégicos para eventos. Casos reales: Manchester City, Campeonato Mundial Sub 17 Buenos Aires 2026. Propuestas data-driven y ROI optimizado.",
  keywords: [
    "alianzas estrategicas eventos",
    "sponsors eventos",
    "partnerships eventos",
    "patrocinadores eventos",
    "manchester city sponsors",
    "mundial sub 17 sponsors",
    "DER Event Hub alianzas",
  ],
  openGraph: {
    title: "Alianzas Estratégicas y Sponsors | DER EVENT HUB",
    description:
      "Conseguimos sponsors y partnerships que potencian eventos. Casos reales: Manchester City y Mundial Sub 17 Buenos Aires 2026.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg",
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
      icon: Target,
      title: "Identificación de Sponsors",
      description: "Mapeo de audiencia, research de marcas y análisis de fit estratégico",
      color: "text-orange-500",
    },
    {
      icon: BarChart3,
      title: "Propuestas Data-Driven",
      description: "Métricas reales, ROI proyectado y casos de éxito verificables",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Negociación Profesional",
      description: "Presentaciones ejecutivas, términos win-win y contratos sólidos",
      color: "text-orange-600",
    },
    {
      icon: Trophy,
      title: "Activación de Sponsors",
      description: "Espacios branded, experiencias interactivas y content marketing",
      color: "text-red-600",
    },
  ]

  const casosUso = [
    {
      icon: Trophy,
      title: "Eventos Deportivos Internacionales",
      description: "Competencias y eventos de escala mundial",
      examples: ["Campeonato Mundial Sub 17 Buenos Aires 2026", "Competencias deportivas internacionales", "Eventos FIFA/Olympic level"],
    },
    {
      icon: Building,
      title: "Eventos Corporativos Premium",
      description: "Activaciones empresariales y lanzamientos",
      examples: ["Manchester City Treble Trophy Tour", "Lanzamientos de producto", "Conferencias corporativas"],
    },
    {
      icon: Music,
      title: "Festivales y Conciertos Masivos",
      description: "Eventos musicales de gran escala",
      examples: ["Abel Pintos - 26,000+ fans", "Anuel AA Tour", "Campus Party 13,000+ inscriptos"],
    },
  ]

  const tecnologia = [
    {
      feature: "Análisis Estratégico",
      description: "Mapeo de audiencia, análisis competitivo y identificación de oportunidades únicas",
      icon: Target,
    },
    {
      feature: "Propuestas Data-Driven",
      description: "Métricas reales de alcance, ROI proyectado y paquetes flexibles adaptados",
      icon: BarChart3,
    },
    {
      feature: "Negociación Profesional",
      description: "Presentaciones ejecutivas, términos beneficiosos y documentación legal completa",
      icon: Users,
    },
    {
      feature: "Ejecución y Medición",
      description: "Activaciones impactantes, analytics en tiempo real y reportes de impacto",
      icon: Trophy,
    },
  ]

  const proyectosReales = [
    {
      nombre: "Manchester City Treble Trophy Tour",
      asistentes: "1,000",
      tecnologia: "Partnerships Estratégicos",
      resultado: "74% engagement rate",
      badge: "Corporativo",
    },
    {
      nombre: "Campeonato Mundial Sub 17 Buenos Aires 2026",
      asistentes: "Internacional",
      tecnologia: "Consultoría Estratégica",
      resultado: "Estrategia integral aprobada",
      badge: "Deportivo",
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
                  <Badge className="bg-orange-500 text-white">Partnerships</Badge>
                  <Badge className="bg-red-500 text-white">Data-Driven</Badge>
                  <Badge className="bg-white text-orange-600">Casos Internacionales</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Alianzas <span className="text-yellow-300">Estratégicas</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Conseguimos sponsors y partnerships que potencian eventos</strong> con estrategias data-driven. 
                  Desde <strong>identificación hasta activación y medición de resultados</strong> con casos internacionales comprobados.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">74%</div>
                    <div className="text-sm opacity-80">Engagement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5+</div>
                    <div className="text-sm opacity-80">Sponsors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">2026</div>
                    <div className="text-sm opacity-80">Mundial Sub 17</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-sm opacity-80">Deals Cerrados</div>
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
                      Cotizar Alianzas Estratégicas
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
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
                    alt="Alianzas Estratégicas DER Event Hub"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">Alianzas estratégicas - Manchester City y Mundial Sub 17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Casos de <span className="text-orange-600">uso</span>
              </h2>
              <p className="text-xl text-gray-600">
                Situaciones donde nuestras alianzas estratégicas marcan la diferencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Eventos Deportivos Internacionales</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Para eventos como el Campeonato Mundial Sub 17 Buenos Aires 2026, desarrollamos estrategias 
                  para conseguir sponsors que cubran costos operativos y potencien la experiencia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Marcas deportivas globales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Suplementos y nutrición</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Medios especializados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Eventos Corporativos Premium</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Como en Manchester City, identificamos oportunidades de partnerships que eleven 
                  la experiencia y generen valor mutuo entre marcas y eventos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Marcas premium locales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Servicios financieros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Tecnología y telecomunicaciones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Festivales de Música Masivos</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Para artistas como Abel Pintos o Anuel AA, conseguimos partnerships que financian 
                  la producción y mejoran la experiencia del fan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Bebidas y alimentos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Plataformas de streaming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Marcas de lifestyle</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Eventos Tech y Startups</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Para eventos como Campus Party, conectamos con sponsors tech que buscan 
                  llegar a audiencias especializadas y generar leads calificados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Empresas de software</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Hardware y gaming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Servicios cloud</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Reales - SOLO 2 */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Casos <span className="text-orange-600">reales</span>
              </h2>
              <p className="text-xl text-gray-600">
                Proyectos donde aplicamos nuestras estrategias de alianzas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Manchester City */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg"
                    alt="Manchester City Treble Trophy Tour"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-orange-100 text-orange-800 px-3 py-1 text-sm font-semibold">
                    Evento Internacional
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-semibold">
                    Manchester City
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Manchester City Treble Trophy Tour
                </h3>

                <p className="text-gray-600 mb-6">
                  Desarrollamos estrategias de partnerships para potenciar la experiencia de 1,000 asistentes 
                  en Buenos Aires con activaciones de marca efectivas.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Identificación de Partners</h4>
                      <p className="text-sm text-gray-600">Marcas locales alineadas con el público futbolero</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Activaciones Experienciales</h4>
                      <p className="text-sm text-gray-600">Photobooth con 650 shares (74% engagement rate)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Gestión Integral</h4>
                      <p className="text-sm text-gray-600">Coordinación completa de partnerships</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campeonato Mundial Sub 17 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
                    alt="Campeonato Mundial Sub 17 Buenos Aires 2026"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-orange-100 text-orange-800 px-3 py-1 text-sm font-semibold">
                    Consultoría Estratégica
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold">
                    Mundial 2026
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Campeonato Mundial Sub 17, Buenos Aires 2026
                </h3>

                <p className="text-gray-600 mb-6">
                  Desarrollamos la estrategia completa de alianzas para conseguir sponsors internacionales 
                  que financien este evento deportivo mundial.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Estrategia Global</h4>
                      <p className="text-sm text-gray-600">Identificación de sponsors deportivos internacionales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Propuestas Data-Driven</h4>
                      <p className="text-sm text-gray-600">ROI proyectado basado en eventos similares</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alcance Internacional</h4>
                      <p className="text-sm text-gray-600">Estrategia para evento de nivel mundial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología/Metodología */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Nuestra <span className="text-orange-600">metodología</span>
              </h2>
              <p className="text-xl text-gray-600">
                Proceso probado para conseguir las mejores alianzas estratégicas
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis Estratégico</h3>
                  <p className="text-gray-600 mb-6">
                    Estudiamos tu evento, audiencia y objetivos para identificar el perfil exacto de sponsors 
                    que generarán mayor impacto mutuo.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Mapeo de Audiencia</h4>
                      <p className="text-sm text-gray-600">Demographics, intereses, poder adquisitivo</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Análisis Competitivo</h4>
                      <p className="text-sm text-gray-600">Qué sponsors usan eventos similares</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Oportunidades Únicas</h4>
                      <p className="text-sm text-gray-600">Ventajas específicas de tu evento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Propuestas Data-Driven</h3>
                  <p className="text-gray-600 mb-6">
                    Creamos propuestas basadas en datos reales de eventos anteriores, con proyecciones 
                    de ROI específicas y casos de éxito verificables.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Métricas Reales</h4>
                      <p className="text-sm text-gray-600">Alcance, engagement, conversiones</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">ROI Proyectado</h4>
                      <p className="text-sm text-gray-600">Retorno esperado con casos similares</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Paquetes Flexibles</h4>
                      <p className="text-sm text-gray-600">Opciones adaptadas al presupuesto</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Negociación Profesional</h3>
                  <p className="text-gray-600 mb-6">
                    Gestionamos todo el proceso de negociación, desde el primer contacto hasta la firma 
                    del contrato, maximizando el valor para ambas partes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Presentaciones Ejecutivas</h4>
                      <p className="text-sm text-gray-600">Pitch decks profesionales y convincentes</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Términos Win-Win</h4>
                      <p className="text-sm text-gray-600">Acuerdos beneficiosos para ambas partes</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Contratos Sólidos</h4>
                      <p className="text-sm text-gray-600">Documentación legal completa y clara</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ejecución y Medición</h3>
                  <p className="text-gray-600 mb-6">
                    Implementamos las activaciones acordadas y medimos el impacto real para demostrar 
                    valor y asegurar renovaciones futuras.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Activaciones Impactantes</h4>
                      <p className="text-sm text-gray-600">Experiencias memorables para la audiencia</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics en Tiempo Real</h4>
                      <p className="text-sm text-gray-600">Métricas durante y post-evento</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Reportes de Impacto</h4>
                      <p className="text-sm text-gray-600">ROI real y recomendaciones futuras</p>
                    </div>
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
                Proceso <span className="text-orange-500">Integral</span>
              </h2>
              <p className="text-xl text-gray-700">De identificación a activación y medición</p>
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
              <p className="text-xl text-gray-700">Adaptamos las alianzas según el tipo de evento</p>
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
                Metodología <span className="text-orange-500">Probada</span>
              </h2>
              <p className="text-xl text-gray-700">4 pasos para conseguir las mejores alianzas</p>
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
              <p className="text-xl text-gray-700">Casos donde aplicamos alianzas estratégicas</p>
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
                        <span className="text-gray-700">Estrategia:</span>
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
                  ¿Qué tipo de sponsors pueden conseguir para mi evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Depende del tipo de evento y audiencia. Para eventos deportivos como el Campeonato Mundial Sub 17 Buenos Aires 2026 identificamos marcas deportivas, suplementos y medios especializados. Para eventos corporativos como Manchester City trabajamos con marcas premium locales, servicios financieros y tecnología. Para festivales musicales buscamos bebidas, plataformas de streaming y marcas de lifestyle. Cada estrategia es específica para tu evento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para desarrollar una estrategia de alianzas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  El proceso típico toma 4-8 semanas desde el análisis inicial hasta la presentación de la estrategia completa. La primera semana hacemos el análisis estratégico y identificación de prospects, las siguientes 2-3 semanas desarrollamos propuestas y estrategias de acercamiento, y las últimas 3-4 semanas son para refinamiento y presentación final. Para eventos con más de 6 meses de anticipación, podemos desarrollar estrategias más robustas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Cómo miden el éxito de las estrategias de alianzas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Medimos tanto métricas cuantitativas como cualitativas. En Manchester City logramos 74% de engagement rate en activaciones y 650 shares en photobooth. Medimos alcance, impresiones, leads generados, y efectividad de las propuestas desarrolladas. Cada cliente recibe un reporte completo con análisis de la estrategia implementada y recomendaciones para futuros eventos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Trabajan con eventos de cualquier tamaño?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Trabajamos mejor con eventos de 500+ asistentes donde el ROI para sponsors es más atractivo. Hemos desarrollado estrategias desde eventos corporativos de 1,000 personas (Manchester City) hasta eventos deportivos internacionales (Mundial Sub 17 2026). Para eventos más pequeños, nos enfocamos en sponsors locales y partnerships estratégicos que buscan audiencias muy específicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Qué incluye el servicio de alianzas estratégicas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Incluye análisis completo de tu evento y audiencia, identificación de sponsors potenciales, desarrollo de propuestas data-driven, estrategias de acercamiento y negociación, y plan de activaciones. También proporcionamos templates de presentaciones, documentos de negociación, y seguimiento post-estrategia. El servicio se adapta según si buscás consultoría pura o implementación completa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-orange-600/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300">
                  ¿Pueden trabajar con eventos internacionales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sí, ya trabajamos en eventos internacionales como Manchester City (marca global) y Campeonato Mundial Sub 17 Buenos Aires 2026. Tenemos experiencia identificando sponsors tanto locales como internacionales. Para eventos globales, combinamos marcas locales que buscan asociarse con eventos internacionales, y marcas globales que quieren presencia local. Manejamos presentaciones en inglés y español.
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
                ¿Necesitás sponsors para tu evento?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Conseguimos los <span className="text-yellow-300">sponsors perfectos</span> para tu evento
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Desde <strong>eventos corporativos hasta competencias internacionales</strong>, tenemos la metodología y 
                experiencia para conseguir las mejores alianzas estratégicas.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Handshake className="mr-2 h-5 w-5" />
                  Cotizar Alianzas Estratégicas
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
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Identificación Estratégica</h3>
                <p className="text-sm opacity-80">Sponsors alineados</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Propuestas Data-Driven</h3>
                <p className="text-sm opacity-80">ROI proyectado</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Casos Internacionales</h3>
                <p className="text-sm opacity-80">Mundial Sub 17 2026</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Resultados Medibles</h3>
                <p className="text-sm opacity-80">74% engagement</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Tu evento merece las mejores alianzas estratégicas</h3>
              <p className="text-lg opacity-90">
                Con casos reales como Manchester City (74% engagement rate) y Campeonato Mundial Sub 17 Buenos Aires 2026 
                (consultoría estratégica completa), nuestras alianzas están probadas en eventos de todas las escalas.
                <strong> Identificación estratégica, propuestas data-driven y resultados medibles garantizados.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
