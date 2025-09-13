import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Shield,
  Monitor,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Award,
  Smartphone,
  Calendar,
  Building,
  Gift,
  Cpu,
  Heart,
} from "lucide-react"

const metadata: Metadata = {
  title: "MIGOR con La Mirona - Eventos Corporativos y Sorteos Interactivos | DER EVENT HUB",
  description:
    "Descubrí cómo DER colaboró con La Mirona para MIGOR en 4 eventos de fin de año con control de accesos y plataforma digital para sorteos interactivos. Hasta 1000 personas por evento.",
  keywords: [
    "MIGOR La Mirona eventos corporativos fin año",
    "control accesos sorteos interactivos 1000 personas",
    "plataforma digital personalizada QR engagement",
    "colaboración DER La Mirona empleados socios",
    "tecnología eventos corporativos pantallas gigantes",
  ],
  openGraph: {
    title: "MIGOR con La Mirona - Eventos Corporativos y Sorteos Interactivos",
    description:
      "Colaboración con La Mirona para MIGOR: control de accesos y sorteos interactivos en 4 eventos de fin de año para empleados y socios (hasta 1000 personas por evento).",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1746635618/Imagen_de_WhatsApp_2025-01-23_a_las_13.37.28_7d29a749-2_cyzebc.jpg",
        width: 1200,
        height: 630,
        alt: "MIGOR con La Mirona - Eventos corporativos y sorteos interactivos",
      },
    ],
  },
}

function MIGORConLaMironaPage() {
  const projectStats = [
    { icon: Building, label: "Eventos", value: "4", color: "text-[#FF5C00]" },
    { icon: Users, label: "Asistentes", value: "1,000", color: "text-[#333333]" },
    { icon: Gift, label: "Participación", value: "95%", color: "text-[#FF5C00]" },
    { icon: Cpu, label: "Plataforma", value: "Propia", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Control de Accesos Corporativo",
      icon: Shield,
      description: "Sistema eficiente adaptado a cada uno de los cuatro eventos para ingreso fluido y seguro",
    },
    {
      name: "Plataforma Digital Propia",
      icon: Smartphone,
      description: "Desarrollo de software personalizado accesible vía QR para sorteos interactivos",
    },
    {
      name: "Sorteos Interactivos",
      icon: Gift,
      description: "Herramienta digital para dinamizar experiencia y maximizar engagement en tiempo real",
    },
    {
      name: "Visualización Pantallas Gigantes",
      icon: Monitor,
      description: "Integración con pantallas gigantes para experiencia visual impactante",
    },
    {
      name: "Colaboración La Mirona",
      icon: Building,
      description: "Alianza estratégica con La Mirona para gestión integral de eventos corporativos",
    },
    {
      name: "Identidad de Marca Personalizada",
      icon: Target,
      description: "Plataforma personalizada con identidad MIGOR para fortalecer vínculo marca-cliente",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Planificación Estratégica",
      duracion: "Pre-eventos",
      actividades: [
        "Briefing MIGOR eventos fin año",
        "Colaboración estratégica La Mirona",
        "Desarrollo plataforma digital propia",
        "Diseño sistema control accesos",
      ],
    },
    {
      fase: "Desarrollo Tecnológico",
      duracion: "Preparación",
      actividades: [
        "Software personalizado sorteos",
        "Integración QR accesible",
        "Configuración pantallas gigantes",
        "Testing plataforma interactiva",
      ],
    },
    {
      fase: "Ejecución 4 Eventos",
      duracion: "Fin de año",
      actividades: [
        "Control accesos 1000 personas/evento",
        "Sorteos interactivos tiempo real",
        "Gestión engagement empleados/socios",
        "Supervisión técnica continua",
      ],
    },
    {
      fase: "Análisis y Resultados",
      duracion: "Post-eventos",
      actividades: [
        "Captura datos valiosos MIGOR",
        "Análisis participación 95%",
        "Evaluación vínculo marca-cliente",
        "Reportes colaboración exitosa",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Heart,
      titulo: "Fortalecer Vínculo Empleados y Socios",
      descripcion: "Crear momentos memorables que fortalecieran relación MIGOR con empleados y socios",
      solucion: "Sorteos interactivos + plataforma personalizada + experiencia digital + identidad marca",
    },
    {
      icon: Users,
      titulo: "Control Accesos Alta Concurrencia",
      descripcion: "Gestionar acceso impecable para eventos de hasta 1000 personas cada uno",
      solucion: "Sistema eficiente adaptado + ingreso fluido + control seguro + 4 eventos simultáneos",
    },
    {
      icon: Smartphone,
      titulo: "Tecnología Accesible y Engagement",
      descripcion: "Implementar tecnología accesible que maximizara engagement en tiempo real",
      solucion: "Plataforma QR accesible + sorteos interactivos + pantallas gigantes + 95% participación",
    },
  ]

  const eventosFeatures = [
    {
      name: "4 Eventos de Fin de Año",
      description: "Serie de eventos corporativos para empleados y socios MIGOR",
      icon: Calendar,
    },
    {
      name: "Hasta 1000 Asistentes",
      description: "Capacidad máxima de 1000 personas por cada evento",
      icon: Users,
    },
    {
      name: "Colaboración La Mirona",
      description: "Alianza estratégica para gestión integral de eventos",
      icon: Building,
    },
    {
      name: "Tecnología Personalizada",
      description: "Desarrollo de software específico para MIGOR",
      icon: Cpu,
    },
  ]

  const resultadosDestacados = [
    { name: "95% Participación", descripcion: "En sorteos interactivos" },
    { name: "4,000 Asistentes Total", descripcion: "1000 por evento" },
    { name: "Datos Valiosos", descripcion: "Capturados para MIGOR" },
    { name: "Identidad Personalizada", descripcion: "Plataforma con marca" },
  ]

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-[#333333]">
            <Link href="/" className="hover:text-[#FF5C00]">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:text-[#FF5C00]">
              Portfolio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#333333] font-medium">MIGOR con La Mirona</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5C00] via-[#E54F00] to-[#CC4400] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div>
                <Link href="/portfolio" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Portfolio
                </Link>

                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-white text-[#FF5C00]">Tecnología e Innovación</Badge>
                  <Badge className="bg-white/20 text-white">Eventos Corporativos</Badge>
                  <Badge className="bg-white/20 text-white">95% Participación</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  MIGOR con <span className="text-yellow-300">La Mirona</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>Colaboración con La Mirona para MIGOR.</strong>
                  DER gestionó <strong>control de accesos y sorteos interactivos</strong> en
                  <strong>4 eventos de fin de año</strong> para empleados y socios con
                  <strong>hasta 1000 personas por evento</strong> y plataforma digital propia que logró{" "}
                  <strong>95% de participación</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">4</div>
                    <div className="text-sm opacity-80">Eventos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1,000</div>
                    <div className="text-sm opacity-80">Asistentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">95%</div>
                    <div className="text-sm opacity-80">Participación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">Propia</div>
                    <div className="text-sm opacity-80">Plataforma</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Fin de Año</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Colaboración La Mirona</span>
                  </div>
                  <div className="flex items-center">
                    <Gift className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Sorteos Interactivos</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635618/Imagen_de_WhatsApp_2025-01-23_a_las_13.37.28_7d29a749-2_cyzebc.jpg"
                    alt="MIGOR con La Mirona - Eventos corporativos y sorteos interactivos"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      MIGOR con La Mirona - 4 eventos corporativos con sorteos interactivos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Eventos <span className="text-[#FF5C00]">Corporativos</span>
              </h2>
              <p className="text-xl text-[#333333]">
                4 eventos de fin de año con tecnología propia y alta participación
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projectStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-[#333333] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#333333] opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                El <span className="text-[#FF5C00]">Desafío</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Fortalecer vínculos corporativos con tecnología accesible y alta concurrencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {desafiosSoluciones.map((desafio, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mb-4">
                      <desafio.icon className="w-6 h-6 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">{desafio.titulo}</h3>
                    <p className="text-[#333333] text-sm mb-4">
                      <strong>Desafío:</strong> {desafio.descripcion}
                    </p>
                    <p className="text-[#FF5C00] text-sm">
                      <strong>Solución:</strong> {desafio.solucion}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Implementados */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Tecnología <span className="text-[#FF5C00]">Implementada</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Plataforma digital propia y control de accesos para eventos corporativos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviciosImplementados.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">{service.name}</h3>
                    <p className="text-[#333333] text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cronología del Proyecto */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Desarrollo <span className="text-[#FF5C00]">Tecnológico</span>
              </h2>
              <p className="text-xl text-[#333333]">De la planificación estratégica a los resultados exitosos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cronologiaProyecto.map((fase, index) => (
                <Card
                  key={index}
                  className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#FF5C00] text-white">Fase {index + 1}</Badge>
                      <span className="text-sm text-[#333333] opacity-70">{fase.duracion}</span>
                    </div>
                    <CardTitle className="text-lg text-[#333333]">{fase.fase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fase.actividades.map((actividad, actividadIndex) => (
                        <li key={actividadIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-[#FF5C00] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#333333]">{actividad}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {index < cronologiaProyecto.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-[#FF5C00] opacity-30"></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Características de los Eventos */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Eventos <span className="text-[#FF5C00]">Fin de Año</span>
              </h2>
              <p className="text-xl text-[#333333]">Características especiales de los eventos corporativos MIGOR</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventosFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-[#FF5C00]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#333333]">{feature.name}</h3>
                    </div>
                    <p className="text-[#333333]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Destacados */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Destacados</span>
              </h2>
              <p className="text-xl text-[#333333]">Métricas de éxito de la colaboración MIGOR + La Mirona</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resultadosDestacados.map((resultado, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00] text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">{resultado.name}</h3>
                    <p className="text-sm text-[#333333] opacity-70">{resultado.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Verificables */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Verificables</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros comprobados de la colaboración tecnológica</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Tecnológicos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Tecnológicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Gift className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">95% Participación Sorteos Interactivos</div>
                        <div className="text-sm text-[#333333] opacity-70">Engagement excepcional en tiempo real</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smartphone className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Plataforma Digital Propia</div>
                        <div className="text-sm text-[#333333] opacity-70">Software personalizado accesible vía QR</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Integración Pantallas Gigantes</div>
                        <div className="text-sm text-[#333333] opacity-70">Experiencia visual impactante</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Identidad MIGOR Personalizada</div>
                        <div className="text-sm text-[#333333] opacity-70">Plataforma con branding corporativo</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Logros Operativos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Operativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Control Accesos 4,000 Personas</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          1000 personas por evento, ingreso eficiente
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Captura Datos Valiosos MIGOR</div>
                        <div className="text-sm text-[#333333] opacity-70">Información estratégica para la empresa</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Vínculo Marca-Cliente Fortalecido</div>
                        <div className="text-sm text-[#333333] opacity-70">Momentos memorables empleados y socios</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Colaboración La Mirona Exitosa</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Alianza estratégica para gestión integral
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF5C00] via-[#E54F00] to-[#CC4400] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                <Gift className="w-4 h-4 mr-2" />
                ¿Tenés eventos corporativos que necesitan tecnología interactiva?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Desarrollemos la plataforma digital perfecta para tus{" "}
                <span className="text-yellow-300">eventos corporativos</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si desarrollamos una <strong>plataforma digital propia para MIGOR</strong>
                con sorteos interactivos que lograron <strong>95% de participación</strong>
                en 4 eventos de fin de año con hasta 1000 personas cada uno, colaborando con La Mirona, tu empresa
                también puede tener eventos corporativos memorables con tecnología de vanguardia.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Cotizar Plataforma Digital
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Tecnología Corporativa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">95% Participación</h3>
                <p className="text-sm opacity-80">Sorteos interactivos</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">4,000 Asistentes</h3>
                <p className="text-sm opacity-80">1000 por evento</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Plataforma Propia</h3>
                <p className="text-sm opacity-80">Desarrollo personalizado</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">La Mirona</h3>
                <p className="text-sm opacity-80">Colaboración exitosa</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                ¿Tus eventos corporativos merecen la mejor tecnología interactiva?
              </h3>
              <p className="text-lg opacity-90">
                <strong>MIGOR</strong> confió en DER para desarrollar una plataforma digital propia con sorteos
                interactivos que logró <strong>95% de participación</strong>
                en 4 eventos de fin de año, colaborando con La Mirona para gestión integral. Tu empresa también puede
                fortalecer vínculos con empleados y socios mediante tecnología de vanguardia y experiencias memorables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MIGORConLaMironaPage
