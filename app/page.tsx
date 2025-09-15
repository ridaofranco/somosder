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
  const services = [
    {
      title: "Control de Accesos",
      description: "Sistemas avanzados de control de accesos y acreditaciones para eventos de cualquier escala.",
      icon: Ticket,
      href: "/servicios/accesos",
    },
    {
      title: "Alianzas Estratégicas",
      description: "Partnerships que potencian tu evento con la mejor red de proveedores y venues premium.",
      icon: Handshake,
      href: "/servicios/alianzas-estrategicas",
    },
    {
      title: "Consultoría Estratégica",
      description: "Asesoramiento experto para planificar y ejecutar eventos exitosos que cumplan tus objetivos.",
      icon: Monitor,
      href: "/servicios/consultoria-estrategica",
    },
    {
      title: "Fotografía y Video",
      description: "Captura profesional de momentos únicos con equipamiento de última generación.",
      icon: Camera,
      href: "/servicios/fotografia-video",
    },
    {
      title: "Soluciones Gastronómicas",
      description: "Experiencias culinarias memorables adaptadas a cada tipo de evento y presupuesto.",
      icon: ChefHat, // Assuming ChefHat is also imported from lucide-react
      href: "/servicios/gastronomia",
    },
    {
      title: "Gestión Deportiva",
      description: "Organización profesional de eventos deportivos de cualquier escala y disciplina.",
      icon: Trophy,
      href: "/servicios/gestion-deportiva",
    },
    {
      title: "Logística Internacional",
      description: "Coordinación integral de logística para eventos nacionales e internacionales.",
      icon: Truck, // Assuming Truck is also imported from lucide-react
      href: "/servicios/logistica",
    },
    {
      title: "Marketing Experiencial",
      description: "Estrategias creativas para maximizar el impacto y alcance de tus eventos.",
      icon: Palette,
      href: "/servicios/marketing-experiencial",
    },
    {
      title: "Post Evento",
      description: "Análisis completo y seguimiento post-evento para maximizar el retorno de inversión.",
      icon: BarChart,
      href: "/servicios/post-evento",
    },
    {
      title: "Producción Integral",
      description: "Gestión integral de eventos corporativos, sociales y deportivos con atención al detalle.",
      icon: Calendar,
      href: "/servicios/produccion-integral",
    },
    {
      title: "Tecnología para Eventos",
      description: "Implementación de tecnologías innovadoras para crear experiencias interactivas y memorables.",
      icon: Monitor,
      href: "/servicios/tecnologia-eventos",
    },
    {
      title: "Tecnología Avanzada",
      description: "Soluciones tecnológicas de vanguardia para eventos del futuro.",
      icon: Lightbulb, // Using Lightbulb as a generic tech icon
      href: "/servicios/tecnologia",
    },
  ]

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

      {/* Sección de Resultados y Casos de Éxito */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Casos de <span className="text-orange-500">Éxito</span>
              </h2>
              <p className="text-xl text-gray-700">Proyectos que transforman experiencias</p>
            </div>

            <div className="space-y-12 mb-16">
              {/* Manchester City */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                      <Trophy className="w-4 h-4 mr-1" />
                      Deportivo
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Manchester City Treble Trophy Tour</h3>
                    <p className="text-gray-700 mb-6">
                      Producción integral del tour del trofeo en Argentina. Control de accesos con QR únicos, 
                      experiencia inmersiva para fans y logística impecable.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">1,000</div>
                        <div className="text-sm text-gray-600">Asistentes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">0</div>
                        <div className="text-sm text-gray-600">Incidentes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">3</div>
                        <div className="text-sm text-gray-600">Turnos</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Febrero 2024</div>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg"
                      alt="Manchester City Treble Trophy Tour"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Experiencia completa para fans</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Abel Pintos */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/abel-pintos-tour_k9x2h3.jpg"
                      alt="Abel Pintos Gira Nacional"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Gira Cordillera y Mar</p>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                      <Mic className="w-4 h-4 mr-1" />
                      Musical
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Abel Pintos - Gira Nacional</h3>
                    <p className="text-gray-700 mb-6">
                      Producción integral de la gira, incluyendo control de accesos, logística de escenarios 
                      y experiencia de fans en múltiples ciudades.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">26,000+</div>
                        <div className="text-sm text-gray-600">Asistentes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">4</div>
                        <div className="text-sm text-gray-600">Fechas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">100%</div>
                        <div className="text-sm text-gray-600">Satisfacción</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Noviembre 2024</div>
                  </div>
                </div>
              </div>

              {/* Buenos Aires Trap */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                      <Music className="w-4 h-4 mr-1" />
                      Urbano
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Buenos Aires Trap Festival</h3>
                    <p className="text-gray-700 mb-6">
                      Producción completa del festival de música urbana, implementando tecnología de control 
                      de accesos de vanguardia y experiencia inmersiva para fans.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">120,000</div>
                        <div className="text-sm text-gray-600">Asistentes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">3</div>
                        <div className="text-sm text-gray-600">Días</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">12</div>
                        <div className="text-sm text-gray-600">Escenarios</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Enero 2025</div>
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/buenos-aires-trap_x7h2q1.jpg"
                      alt="Buenos Aires Trap Festival"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Experiencia urbana premium</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiesta Nacional de la Manzana */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/fiesta-manzana_p9x2r3.jpg"
                      alt="Fiesta Nacional de la Manzana"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Evento Cultural Regional</p>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                      <Award className="w-4 h-4 mr-1" />
                      Cultural
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Fiesta Nacional de la Manzana</h3>
                    <p className="text-gray-700 mb-6">
                      Producción integral de evento cultural regional, gestionando logística, 
                      tecnología de accesos y experiencia de visitantes con precisión.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">25,000+</div>
                        <div className="text-sm text-gray-600">Asistentes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">5</div>
                        <div className="text-sm text-gray-600">Días</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">10+</div>
                        <div className="text-sm text-gray-600">Actividades</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Marzo 2025</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg">
                  Ver Todos los Casos de Éxito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white section-lighter">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-700">
              Ofrecemos soluciones integrales para cada etapa de tu evento, desde la planificación estratégica hasta la
              ejecución impecable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-sm text-gray-600 text-center mb-4">{service.description}</p>
                <Link 
                  href={service.href} 
                  className="text-orange-500 hover:underline block text-center"
                >
                  Más información
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/servicios">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg">
                Ver Todos los Servicios <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cotizador CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cotiza tu evento en segundos</h2>
              <p className="text-white/90 text-lg mb-6">
                Utiliza nuestro cotizador virtual para obtener un presupuesto estimado de tu evento. Personaliza los
                parámetros según tus necesidades y recibí una cotización al instante.
              </p>
              <Link href="/cotizador">
                <button className="bg-white text-orange-600 hover:bg-white/90 px-8 py-4 rounded-lg flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Ir al Cotizador Virtual
                </button>
              </Link>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-1">Tipo de Evento</h3>
                  <p className="text-white/80 text-sm">Corporativo, Social o Deportivo</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-1">Asistentes</h3>
                  <p className="text-white/80 text-sm">De 50 a 5000 personas</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-1">Duración</h3>
                  <p className="text-white/80 text-sm">De 1 a 7 días</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-1">Servicios</h3>
                  <p className="text-white/80 text-sm">Selecciona los que necesites</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white/20 rounded-lg text-center">
                <p className="text-white font-medium">Presupuesto estimado al instante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-orange-500">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-700">Resolvemos las dudas más comunes sobre nuestros servicios</p>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cuánto tiempo necesitan para organizar un evento?
                </h3>
                <p className="text-gray-700">
                  Dependiendo de la complejidad, podemos organizar eventos desde 2 semanas hasta 1 año. Para eventos
                  corporativos típicos (100-500 personas), necesitamos al menos 4-6 semanas. Para eventos masivos como
                  Campus Party, trabajamos con 3-6 meses de anticipación.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué incluye su tecnología de control de accesos?
                </h3>
                <p className="text-gray-700">
                  Nuestro sistema incluye: registro pre-evento con QR únicos, dashboard en tiempo real con ocupancy
                  live, backup offline con router 4G, integración API/CSV, y reportes post-evento completos. Todo
                  desarrollado internamente, sin dependencias externas.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Trabajan solo en Argentina o también en otros países?
                </h3>
                <p className="text-gray-700">
                  Operamos principalmente en Argentina y Paraguay, con expansión a Chile, Uruguay, Perú y
                  Brasil. También manejamos proyectos outbound para Europa y Estados Unidos. Nuestro equipo es 100%
                  bilingüe (español/inglés).
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cuál es el rango de precios de sus servicios?
                </h3>
                <p className="text-gray-700">
                  Nuestros contratos van desde $800 a $1,500 USD para servicios modulares. Para eventos completos 360°,
                  manejamos presupuestos desde $15,000 hasta proyectos multimillonarios. Usá nuestro cotizador gratuito
                  para un presupuesto personalizado.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué los diferencia de otras empresas de eventos?
                </h3>
                <p className="text-gray-700">
                  Somos la única empresa en LATAM que combina tecnología propia, 12 servicios integrados y analytics en
                  tiempo real bajo un solo contrato. Además, tenemos experiencia comprobada con marcas como Manchester City y Campus Party, con 100% de retención de clientes.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contacto">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg">
                  ¿Tenés otra pregunta? Contactanos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-white section-lighter">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clientes Que Confían en Nosotros</h2>
            <p className="text-gray-700">
              Trabajamos con empresas líderes en diversos sectores para crear eventos excepcionales.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Logos de clientes */}
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747333505/image-2_wjdkdy_e_background_removal_f_png_gwxc5f.png" 
              alt="Manchester City" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747331112/1000002233_274362aa63d8d438f3c733a23b8a7081-16_1_2024_16_19_59_pxz9b8.png" 
              alt="Campus Party" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747330395/png-2_kfxfhw.png" 
              alt="Client 3" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747331093/png-13_vhrqcu.png" 
              alt="Client 4" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747335090/logo-garzia_t1dsn2.png" 
              alt="Client 5" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747330395/png_yzxhgx.png" 
              alt="Client 6" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747330651/png-11_b9obrk_e_background_removal_f_png_yfzbso.png" 
              alt="Client 7" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747338886/png-10_xkycdh.png" 
              alt="Client 8" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747341016/Disen%CC%83o_sin_ti%CC%81tulo_2_hkx4ds.png" 
              alt="Client 9" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747341679/Logo-5yardas-01-1024x414_w0juja.png" 
              alt="Client 10" 
              width={120} 
              height={60} 
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Respuesta en 24-48 horas garantizada
            </div>

            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              ¿Listo para crear tu <span className="text-orange-500">próximo evento</span>?
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contáctanos hoy mismo y descubrí cómo podemos ayudarte a crear una experiencia inolvidable que{" "}
              <strong>supere todas tus expectativas</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Cotizar Mi Evento Gratis
                </button>
              </Link>

              <Link href="/contacto">
                <button
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg flex items-center"
                >
                  Hablar con un Experto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Llamanos</h3>
                <p className="text-sm opacity-80">Respuesta inmediata</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-80">24-48h respuesta</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm opacity-80">Chat directo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}