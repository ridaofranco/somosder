import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  Calculator, 
  Monitor, 
  Users, 
  BarChart, 
  Trophy, 
  Music, 
  Mic,
  Handshake as HandshakeIcon, // Renombrado para evitar conflicto con Handshake de lucide-react si se usara directamente
  Camera as CameraIcon, // Renombrado para evitar conflicto con Camera de lucide-react si se usara directamente
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Control de Accesos",
      description: "Sistemas avanzados de control de accesos y acreditaciones para eventos de cualquier escala.",
      icon: Trophy,
      href: "/servicios/accesos"
    },
    {
      title: "Alianzas Estratégicas",
      description: "Partnerships que potencian tu evento con la mejor red de proveedores y venues premium.",
      icon: HandshakeIcon,
      href: "/servicios/alianzas-estrategicas"
    },
    {
      title: "Consultoría Estratégica",
      description: "Asesoramiento experto para planificar y ejecutar eventos exitosos que cumplan tus objetivos.",
      icon: Monitor,
      href: "/servicios/consultoria-estrategica"
    },
    {
      title: "Fotografía y Video",
      description: "Captura profesional de momentos únicos con equipamiento de última generación.",
      icon: CameraIcon,
      href: "/servicios/fotografia-video"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
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

            {/* Servicios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <Link href={service.href} className="text-orange-500 hover:underline mt-2 inline-block">
                    Más información
                  </Link>
                </div>
              ))}
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
    </>
  )
}