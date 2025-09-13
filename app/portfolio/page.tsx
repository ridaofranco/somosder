import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Calendar,
  MapPin,
  ArrowRight,
  Trophy,
  Monitor,
  Building,
  Music,
  Star,
  Calculator,
  Utensils,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio de Eventos | DER EVENT HUB - Casos de Éxito Reales",
  description:
    "Descubrí nuestros casos de éxito: Manchester City, Campus Party, Anuel AA, Myke Towers. +20K asistentes, 0 incidentes, 100% retención. Control de accesos y producción integral.",
  keywords: [
    "portfolio eventos Argentina",
    "casos de éxito eventos",
    "Manchester City Argentina",
    "Campus Party producción",
    "Anuel AA control accesos",
    "Myke Towers eventos",
    "eventos corporativos portfolio",
    "DER Event Hub casos",
  ],
  openGraph: {
    title: "Portfolio de Eventos | DER EVENT HUB",
    description: "Casos de éxito reales: Manchester City, Campus Party, +20K asistentes gestionados",
    images: ["/images/portfolio-og.jpg"],
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637574/DSC_0218_b94879.jpg"
          alt="Portfolio DER"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-orange-600/80 to-red-600/80"></div>
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8">
              <Trophy className="w-4 h-4 mr-2" />
              Casos de éxito verificables
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestro <span className="text-yellow-300">Portfolio</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              De Manchester City a Campus Party, cada evento es una historia de éxito.
              <strong> 100% de casos reales, 0% de marketing inflado.</strong>
            </p>

            {/* Stats - actualizadas con números reales de todos los proyectos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">17+</div>
                <div className="text-sm opacity-80">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">180K+</div>
                <div className="text-sm opacity-80">Asistentes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
                <div className="text-sm opacity-80">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-sm opacity-80">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Buscar por cliente, evento o categoría..." className="pl-10" />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600">
                  Todos
                </Button>
                <Button variant="outline" size="sm">
                  <Building className="w-4 h-4 mr-1" />
                  Corporativo
                </Button>
                <Button variant="outline" size="sm">
                  <Music className="w-4 h-4 mr-1" />
                  Entretenimiento
                </Button>
                <Button variant="outline" size="sm">
                  <Monitor className="w-4 h-4 mr-1" />
                  Tecnología
                </Button>
                <Button variant="outline" size="sm">
                  <Trophy className="w-4 h-4 mr-1" />
                  Deportivo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos <span className="text-orange-500">Destacados</span>
              </h2>
              <p className="text-xl text-gray-700">Nuestros casos de mayor impacto y reconocimiento</p>
            </div>

            {/* Manchester City - Featured */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600 text-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Proyecto Estrella
                    </Badge>
                    <Badge variant="outline">Deportivo</Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Manchester City Treble Trophy Tour</h3>

                  <p className="text-gray-700 mb-6 text-lg">
                    Gestión completa del tour del trofeo en Buenos Aires. Control de accesos con QR únicos, fotobooth
                    interactivo con realidad aumentada, y coordinación logística para una experiencia premium de los
                    fans.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">1,000</div>
                      <div className="text-sm text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">0</div>
                      <div className="text-sm text-gray-600">Incidentes</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">3</div>
                      <div className="text-sm text-gray-600">Turnos</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Febrero 2024
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Buenos Aires
                    </div>
                  </div>

                  <Link href="/portfolio/manchester-city-treble-trophy-tour">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Ver Caso Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg"
                    alt="Manchester City Treble Trophy Tour"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium mb-1">Experiencia premium para fans</p>
                    <p className="text-xs opacity-90">Control de accesos + Fotobooth AR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Abel Pintos - Second Featured */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-12 hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748920001/abel-pintos-hero.jpg"
                    alt="Abel Pintos Giras"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium mb-1">Control oficial de accesos</p>
                    <p className="text-xs opacity-90">14,431 tickets gestionados</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-green-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Control Oficial
                    </Badge>
                    <Badge variant="outline">Musical</Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Abel Pintos Giras</h3>

                  <p className="text-gray-700 mb-6 text-lg">
                    Control oficial de accesos para las giras CORDILLERA Y MAR y GRACIAS A LA VIDA + ACÚSTICO. Gestión
                    integral de 14,431 tickets con tecnología QR avanzada y análisis detallado de asistencia.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">14,431</div>
                      <div className="text-sm text-gray-600">Tickets</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">86.2%</div>
                      <div className="text-sm text-gray-600">Asistencia</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-orange-500">9</div>
                      <div className="text-sm text-gray-600">Eventos</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      2024
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Argentina
                    </div>
                  </div>

                  <Link href="/portfolio/abel-pintos-giras">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      Ver Caso Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todos Nuestros <span className="text-orange-500">Proyectos</span>
              </h2>
              <p className="text-xl text-gray-700">Cada evento es una historia de éxito verificable</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748920002/indie-dev-hero.jpg"
                    alt="Indie Dev Argentina 2025"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      <Monitor className="w-3 h-3 mr-1" />
                      Gaming
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Indie Dev Argentina 2025</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Conferencia de desarrollo indie con 1,500+ desarrolladores y 50+ speakers internacionales
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">1.5K+</div>
                      <div className="text-xs text-gray-600">Desarrolladores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">50+</div>
                      <div className="text-xs text-gray-600">Speakers</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2025
                    </div>
                    <Link href="/portfolio/indie-dev-argentina-2025">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
                    alt="Campus Party Entre Ríos 2025"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      <Monitor className="w-3 h-3 mr-1" />
                      Tecnológico
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Party Entre Ríos 2025</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Evento tecnológico masivo con 5,000+ asistentes y 13,000 inscriptos en Entre Ríos
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">5K+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">13K</div>
                      <div className="text-xs text-gray-600">Inscriptos</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2025
                    </div>
                    <Link href="/portfolio/campus-party-entre-rios-2025">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
                    alt="Camondo WWR"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-600 text-white">
                      <Building className="w-3 h-3 mr-1" />
                      Empresarial
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">11° Edición de Camondo WWR</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Evento VIP empresarial con 300 asistentes y experiencias exclusivas de networking
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">300</div>
                      <div className="text-xs text-gray-600">Ejecutivos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">11°</div>
                      <div className="text-xs text-gray-600">Edición</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/camondo-wwr">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Synerfy IASP */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637083/_MG_0804_edited_rtovsy.jpg"
                    alt="Synerfy IASP"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-indigo-600 text-white">
                      <Building className="w-3 h-3 mr-1" />
                      Corporativo
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Synerfy IASP</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Evento corporativo tecnológico con 800 asistentes y networking de alto nivel
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">800</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">50+</div>
                      <div className="text-xs text-gray-600">Empresas</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/synerfy-iasp">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/fiesta-manzana-hero.jpg"
                    alt="Fiesta Nacional de la Manzana"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      <Utensils className="w-3 h-3 mr-1" />
                      Gastronómico
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fiesta Nacional de la Manzana</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Festival gastronómico tradicional con 8,000+ asistentes y actividades familiares
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">8K+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">40+</div>
                      <div className="text-xs text-gray-600">Stands</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/fiesta-nacional-de-la-manzana">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635618/Imagen_de_WhatsApp_2025-01-23_a_las_13.37.28_7d29a749-2_cyzebc.jpg"
                    alt="La Mirona"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-indigo-600 text-white">
                      <Building className="w-3 h-3 mr-1" />
                      Corporativo
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eventos Corporativos MIGOR con La Mirona</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    4 eventos corporativos de fin de año con 4,000 asistentes y sorteos digitales interactivos
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">4K</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">95%</div>
                      <div className="text-xs text-gray-600">Participación</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/migor-la-mirona">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Buenos Aires Trap */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747799115/Imagen_de_WhatsApp_2025-05-16_a_las_12.46.05_3f53ba85_p44ieh.jpg"
                    alt="Buenos Aires Trap"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      <Music className="w-3 h-3 mr-1" />
                      Festival
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Buenos Aires Trap</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Festival de música trap con 15,000+ asistentes y artistas internacionales
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">15K+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">20+</div>
                      <div className="text-xs text-gray-600">Artistas</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/gastronomia-trap">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Expo Autos CeNARD */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634959/IMG_3025_kpld55.jpg"
                    alt="Expo Autos CeNARD"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Exhibición
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expo Autos CeNARD</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Exhibición automovilística masiva con 50,000+ visitantes y 200+ vehículos expuestos
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">50K+</div>
                      <div className="text-xs text-gray-600">Visitantes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">200+</div>
                      <div className="text-xs text-gray-600">Vehículos</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/expo-autos-cenard">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Saint Mary of the Hills */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746636992/476-IMG_2915_zgzlzc.jpg"
                    alt="Saint Mary of the Hills"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Deportivo
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Saint Mary of the Hills</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Torneo deportivo internacional con 1,200 asistentes y competencias de alto nivel
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">1.2K</div>
                      <div className="text-xs text-gray-600">Participantes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">12</div>
                      <div className="text-xs text-gray-600">Países</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/saint-mary">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Myke Towers Concert */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1744834/IMG-20241030-WA0159_gw0gda.jpg"
                    alt="Myke Towers Concert"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">
                      <Music className="w-3 h-3 mr-1" />
                      Concierto
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Myke Towers Concert</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Concierto en doble sede con 6,000+ asistentes en Tecnópolis y Estadio Mary Terán de Weiss
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">6K+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">2</div>
                      <div className="text-xs text-gray-600">Venues</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/myke-towers">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Campus Party 2024 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
                    alt="Campus Party 2024"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      <Monitor className="w-3 h-3 mr-1" />
                      Tecnológico
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Party 2024</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Evento tecnológico masivo con 10,000+ asistentes, hackathons y conferencias
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">10,000+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">72h</div>
                      <div className="text-xs text-gray-600">Duración</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/campus-party-2024">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Anuel AA Concert */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1744834/IMG-20241106-WA0002_szh6a9.jpg"
                    alt="Anuel AA Concert"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">
                      <Music className="w-3 h-3 mr-1" />
                      Concierto
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Anuel AA Concert</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Concierto masivo con 40,000+ asistentes en 4 fechas en Tecnópolis
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">40K+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">4</div>
                      <div className="text-xs text-gray-600">Fechas</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/anuel-aa">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Leyendas de México */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635385/14-IMG_0544_ydcxsn.jpg"
                    alt="Leyendas de México"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Cultural
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Leyendas de México</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Control de accesos para evento cultural masivo con 25,000+ asistentes en dos ediciones
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">25K+</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">2</div>
                      <div className="text-xs text-gray-600">Ediciones</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024-2025
                    </div>
                    <Link href="/portfolio/leyendas-mexico">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Espacio Shell 2024 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
                    alt="Espacio Shell 2024"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-600 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      Corporativo
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Espacio Shell 2024</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Evento corporativo con 1,500 asistentes y tecnología Face ID para control de accesos
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">1.5K</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">Face ID</div>
                      <div className="text-xs text-gray-600">Tecnología</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2024
                    </div>
                    <Link href="/portfolio/shell-corporate">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Manchester City Treble Trophy Tour */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748920000/manchester-city-hero.jpg"
                    alt="Manchester City Treble Trophy Tour"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      <Trophy className="w-3 h-3 mr-1" />
                      Deportivo
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manchester City Treble Trophy Tour</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Tour histórico de los trofeos del Treble con 15,000+ fanáticos y tecnología avanzada
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">15K+</div>
                      <div className="text-xs text-gray-600">Fanáticos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">3</div>
                      <div className="text-xs text-gray-600">Trofeos</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2023
                    </div>
                    <Link href="/portfolio/manchester-city-treble-trophy-tour">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Wave Conference 2023 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/wave-conference-hero.jpg"
                    alt="Wave Conference 2023"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-600 text-white">
                      <Monitor className="w-3 h-3 mr-1" />
                      Tecnológico
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wave Conference 2023</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Conferencia tecnológica con 2,500 asistentes, speakers internacionales y networking premium
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">2.5K</div>
                      <div className="text-xs text-gray-600">Asistentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-500">25</div>
                      <div className="text-xs text-gray-600">Speakers</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      2023
                    </div>
                    <Link href="/portfolio/wave-conference-2023">
                      <Button size="sm" variant="outline">
                        Ver Más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para ser nuestro <span className="text-yellow-300">próximo caso de éxito</span>?
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Cada proyecto en nuestro portfolio comenzó con una consulta gratuita.
              <strong> El tuyo puede ser el siguiente.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cotizador">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl">
                  <Calculator className="mr-2 h-5 w-5" />
                  Cotizar Mi Evento Gratis
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                >
                  Hablar con un Experto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
