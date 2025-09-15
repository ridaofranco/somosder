import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Target,
  Award,
  Globe,
  Calendar,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  Trophy,
  Heart,
  Zap,
  Shield,
  Lightbulb,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros | DER EVENT HUB - Quiénes Somos y Nuestra Historia",
  description:
    "Conocé la historia de DER Event Hub, nuestro equipo y valores. 2 años transformando eventos en Argentina y LATAM con tecnología propia y 100% retención de clientes.",
  keywords: [
    "sobre DER Event Hub",
    "equipo DER eventos",
    "historia DER producciones",
    "valores empresa eventos",
    "nosotros SOMOS DER",
    "fundadores DER Event Hub",
    "misión visión eventos Argentina",
  ],
}

export default function NosotrosPage() {
  const stats = [
    { number: "2", label: "Años de Experiencia", icon: Calendar },
    { number: "50+", label: "Eventos Realizados", icon: Trophy },
    { number: "100%", label: "Retención de Clientes", icon: Star },
    { number: "120K", label: "Asistentes Máximo", icon: Users },
    { number: "12", label: "Servicios Integrados", icon: Building },
    { number: "5", label: "Países de Operación", icon: Globe },
  ]

  const valores = [
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "0 incidentes en 2 años. Cumplimos lo que prometemos.",
      color: "blue",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Tecnología propia sin dependencias externas.",
      color: "purple",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Cada evento es único y lo tratamos como tal.",
      color: "red",
    },
    {
      icon: Zap,
      title: "Agilidad",
      description: "Respuesta rápida y adaptación constante.",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos como extensión de tu equipo.",
      color: "green",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "100% de nuestros clientes repiten con nosotros.",
      color: "orange",
    },
  ]

  const timeline = [
    {
      year: "2023",
      title: "Fundación",
      description: "Nace DER Event Hub con la visión de integrar tecnología y producción de eventos.",
      achievements: ["Primeros eventos corporativos", "Desarrollo de tecnología propia"],
    },
    {
      year: "2024",
      title: "Expansión",
      description: "Crecimiento exponencial con eventos masivos y clientes internacionales.",
      achievements: ["Manchester City Trophy Tour", "Campus Party 2024", "Eventos +100K asistentes"],
    },
    {
      year: "2025",
      title: "Consolidación",
      description: "Liderazgo en LATAM con 12 servicios integrados y expansión regional.",
      achievements: ["Campus Party 2025", "Expansión a Paraguay", "Portfolio de 50+ eventos"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635746/Imagen_de_WhatsApp_2024-11-16_a_las_22.26.40_0b19554a_txjtnq.jpg"
            alt="NOSOTROS-DER2"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-orange-600/85 to-red-600/90"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Creado por organizadores, para organizadores
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Somos <span className="text-yellow-300">DER EVENT HUB</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Transformamos la industria de eventos con <strong>tecnología propia</strong>,
              <strong>servicios integrados</strong> y un compromiso inquebrantable con la
              <strong>excelencia</strong>.
            </p>

            {/* Stats Preview */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">2</div>
                <div className="text-sm opacity-80">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">100%</div>
                <div className="text-sm opacity-80">Retención</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">0</div>
                <div className="text-sm opacity-80">Incidentes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nuestra <span className="text-orange-500">Historia</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    <strong>DER Event Hub nace en 2023</strong> de la experiencia de profesionales del sector que
                    identificaron una oportunidad única: ofrecer soluciones integrales de producción y gestión de
                    eventos con tecnología propia.
                  </p>

                  <p>
                    Desde el diseño creativo y la logística hasta el control de accesos y análisis de ROI,
                    <strong>todo en una sola propuesta</strong>. Creemos que cada evento es una oportunidad para crear
                    experiencias memorables que generen impacto real.
                  </p>

                  <p>
                    En solo <strong>2 años</strong> hemos logrado lo que muchas empresas tardan décadas:
                    <strong>100% de retención de clientes</strong>, 0 incidentes operativos y la confianza de marcas
                    internacionales como Manchester City, Campus Party y Shell.
                  </p>

                  <p>
                    Hoy somos líderes en Argentina y nos expandimos por LATAM, siempre con el mismo compromiso:
                    <strong>transformar la industria de eventos</strong> con innovación, tecnología propia y un servicio
                    que supera expectativas.
                  </p>
                </div>

                {/* Stats destacados */}
                <div className="grid grid-cols-3 gap-6 mt-8 p-6 bg-orange-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">2023</div>
                    <div className="text-sm text-gray-600">Fundación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">50+</div>
                    <div className="text-sm text-gray-600">Eventos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Retención</div>
                  </div>
                </div>
              </div>

              {/* Imagen */}
              <div className="relative">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635746/Imagen_de_WhatsApp_2024-11-16_a_las_22.26.40_0b19554a_txjtnq.jpg"
                    alt="Equipo DER Event Hub trabajando en evento"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Badge flotante */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-2 border-orange-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Líderes en LATAM</div>
                      <div className="text-sm text-gray-600">Eventos integrales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Misión & <span className="text-orange-500">Visión</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Nuestro propósito y hacia dónde vamos</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Misión */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Nuestra Misión</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6">
                    <strong>Transformar la experiencia de organizar eventos</strong> ofreciendo soluciones integrales
                    360° que combinan tecnología propia, servicios especializados y un enfoque personalizado.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Simplificar la gestión de eventos complejos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Garantizar resultados medibles y ROI positivo</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <span className="text-gray-700">Crear experiencias memorables para todos</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visión */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-purple-200">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Nuestra Visión</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6">
                    <strong>Ser la empresa líder en LATAM</strong> en soluciones integrales de eventos, reconocida por
                    nuestra innovación tecnológica, excelencia operativa y capacidad de crear experiencias
                    transformadoras.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                      <span className="text-gray-700">Expandir a toda LATAM para 2026</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                      <span className="text-gray-700">Ser referente en innovación tecnológica</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                      <span className="text-gray-700">Impactar +1 millón de asistentes anuales</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros <span className="text-orange-500">Valores</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Los principios que guían cada decisión y acción</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <valor.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{valor.title}</h3>
                    <p className="text-gray-700">{valor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                DER Event Hub en <span className="text-orange-500">Números</span>
              </h2>
              <p className="text-xl text-gray-700">Resultados que hablan por sí solos</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
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
                <Heart className="w-4 h-4 mr-2" />
                Conocé el equipo detrás de tu próximo evento exitoso
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para trabajar con <span className="text-yellow-300">nosotros</span>?
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Cada gran evento comienza con el equipo correcto.
                <strong>Nosotros somos ese equipo.</strong>
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Conocé Nuestro Proceso
                </Button>
              </Link>

              <Link href="/cotizador">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Cotizar Mi Evento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías Finales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">0 Incidentes</h3>
                <p className="text-sm opacity-80">2 años sin problemas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">100% Retención</h3>
                <p className="text-sm opacity-80">Todos nuestros clientes repiten</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Respuesta 24h</h3>
                <p className="text-sm opacity-80">Siempre disponibles</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Tecnología Propia</h3>
                <p className="text-sm opacity-80">Sin dependencias externas</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Somos más que proveedores</h3>
              <p className="text-lg opacity-90 mb-6">
                Somos tu socio estratégico para crear eventos que marquen la diferencia. Con 2 años de experiencia,
                tecnología propia y 100% de retención de clientes, estamos listos para hacer realidad tu visión.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Argentina • Paraguay • LATAM</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+54 9 11 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contacto@somosder.com.ar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}