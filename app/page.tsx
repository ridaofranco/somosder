import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Calculator, 
  Monitor, 
  Users, 
  BarChart, 
  Phone, 
  Mail, 
  MessageCircle, 
  Trophy, 
  Shield, 
  Clock, 
  Award, 
  Building, 
  Music, 
  Mic,
  Lightbulb,
  Calendar,
  Palette,
  Ticket,
  Handshake,
  Camera
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-5"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Eventos <span className="text-orange-500">360°</span> que
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                Superan Expectativas
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              <strong>Tecnología propia + Producción integral.</strong> Creamos experiencias memorables 
              con control de accesos en tiempo real, analytics completos y 12 servicios integrados.
            </p>

            {/* Social Proof Numbers */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">50K+</span>
                <span className="text-sm text-gray-600">Asistentes Gestionados</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">360°</span>
                <span className="text-sm text-gray-600">Producción Integral</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">12</span>
                <span className="text-sm text-gray-600">Servicios Integrados</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-orange-500">LATAM</span>
                <span className="text-sm text-gray-600">Alcance Regional</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/cotizador">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Cotizar Mi Evento Gratis
                </button>
              </Link>

              <Link href="/portfolio">
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent rounded-lg flex items-center">
                  Ver Casos de Éxito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Video/Demo Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637657/DSC_0713_hjhtrb.jpg"
                  alt="DER Event Hub - Experiencias Memorables"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">Experiencias que Conectan</p>
                  <p className="text-lg font-semibold">Tecnología + Creatividad + Resultados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Diferenciadores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir <span className="text-orange-500">DER EVENT HUB</span>?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Somos la única empresa en LATAM que integra tecnología propia, producción 360° y analytics en tiempo real bajo un solo contrato.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Diferenciador 1 */}
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnología Propia</h3>
                <p className="text-gray-700 mb-4">
                  Control de accesos con QR únicos, dashboard en tiempo real, y analytics completos. Sin dependencias externas.
                </p>
                <div className="text-sm text-orange-600 font-medium">
                  ✓ Face ID • ✓ Real-time Dashboard • ✓ Backup Automático
                </div>
              </div>

              {/* Diferenciador 2 */}
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Producción 360°</h3>
                <p className="text-gray-700 mb-4">
                  12 servicios integrados: desde consultoría estratégica hasta post-evento analytics. Un solo proveedor, un solo contrato.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  ✓ Consultoría • ✓ Logística • ✓ Marketing • ✓ Tecnología
                </div>
              </div>

              {/* Diferenciador 3 */}
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Medible</h3>
                <p className="text-gray-700 mb-4">
                  Analytics en tiempo real, reportes de impacto, y métricas de engagement. Sabés exactamente qué funciona.
                </p>
                <div className="text-sm text-green-600 font-medium">
                  ✓ NPS tracking • ✓ Impacto Detallado • ✓ Métricas Precisas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}