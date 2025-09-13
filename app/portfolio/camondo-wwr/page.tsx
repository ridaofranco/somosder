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
  Zap,
  Monitor,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Target,
  Award,
  TrendingUp,
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Crown,
  QrCode,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Camondo WWR 11° Edición - 300+ Empresarios Presidente Milei | DER EVENT HUB",
  description:
    "Descubrí cómo DER gestionó Camondo WWR 11° edición con 300+ empresarios internacionales, presencia del presidente Javier Milei y acreditaciones físicas con códigos QR en menos de 30 segundos.",
  keywords: [
    "Camondo WWR 11 edición 300 empresarios",
    "presidente Javier Milei evento empresarial",
    "acreditaciones físicas códigos QR ejecutivos",
    "evento empresarial internacional Argentina",
    "seguridad presidencial control accesos",
  ],
  openGraph: {
    title: "Camondo WWR 11° Edición - 300+ Empresarios con Presidente Milei",
    description:
      "11° edición del importante encuentro empresarial con 300+ empresarios internacionales, presencia del presidente Javier Milei y sistema integral de acreditaciones físicas con códigos QR.",
    images: [
      {
        url: "https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/camondo-wwr-11-edicion.jpg",
        width: 1200,
        height: 630,
        alt: "Camondo WWR 11° edición - 300+ empresarios con presidente Javier Milei",
      },
    ],
  },
}

export default function CamondoWWRPage() {
  const projectStats = [
    { icon: Users, label: "Empresarios", value: "300+", color: "text-[#FF5C00]" },
    { icon: Building, label: "Sectores", value: "6", color: "text-[#333333]" },
    { icon: Zap, label: "Ingreso", value: "<30s", color: "text-[#FF5C00]" },
    { icon: Crown, label: "Edición", value: "11°", color: "text-[#333333]" },
  ]

  const serviciosImplementados = [
    {
      name: "Acreditaciones Físicas QR",
      icon: QrCode,
      description: "Credenciales físicas personalizadas con códigos QR únicos para 300+ empresarios internacionales",
    },
    {
      name: "Control de Accesos Ejecutivo",
      icon: Shield,
      description: "Gestión integral del control de accesos garantizando seguridad y exclusividad del evento",
    },
    {
      name: "Pre-acreditación Online",
      icon: Smartphone,
      description: "Sistema de registro anticipado para ejecutivos de alto nivel con agendas muy ajustadas",
    },
    {
      name: "Seguridad Presidencial",
      icon: Crown,
      description: "Protocolos especiales coordinados con equipos de seguridad oficiales para presencia presidencial",
    },
    {
      name: "Networking Facilitado",
      icon: Users,
      description: "Acreditaciones que facilitaron identificación y networking entre 300+ empresarios internacionales",
    },
    {
      name: "Personal Especializado",
      icon: Target,
      description: "Equipo capacitado específicamente para eventos corporativos de alto nivel y discreción",
    },
  ]

  const cronologiaProyecto = [
    {
      fase: "Pre-acreditación Online",
      duracion: "6 semanas",
      actividades: [
        "Sistema registro anticipado",
        "Base datos 300+ empresarios",
        "Coordinación agendas ejecutivos",
        "Validación sectores participantes",
      ],
    },
    {
      fase: "Desarrollo Tecnológico",
      duracion: "4 semanas",
      actividades: [
        "Acreditaciones físicas QR personalizadas",
        "Códigos QR dinámicos alta calidad",
        "Sistema networking facilitado",
        "Protocolos seguridad presidencial",
      ],
    },
    {
      fase: "Ejecución 11° Edición",
      duracion: "Días del evento",
      actividades: [
        "Control accesos <30 segundos",
        "Coordinación seguridad Milei",
        "Networking 300+ empresarios",
        "Trato profesional discreto",
      ],
    },
    {
      fase: "Evaluación y Cierre",
      duracion: "2 semanas",
      actividades: [
        "Análisis valoración positiva",
        "Reporte organizadores satisfacción",
        "Documentación seguridad presidencial",
        "Feedback empresarios internacionales",
      ],
    },
  ]

  const desafiosSoluciones = [
    {
      icon: Crown,
      titulo: "Seguridad Presidencial",
      descripcion: "Altos estándares de seguridad requeridos para evento con presencia del presidente Javier Milei",
      solucion:
        "Protocolos especiales coordinados con equipos de seguridad oficiales y acreditaciones físicas reforzadas",
    },
    {
      icon: Users,
      titulo: "300+ Ejecutivos Alto Nivel",
      descripcion: "Proceso eficiente para empresarios internacionales con agendas muy ajustadas",
      solucion: "Pre-acreditación online y sistema de ingreso con códigos QR en menos de 30 segundos por persona",
    },
    {
      icon: Award,
      titulo: "Exclusividad y Elegancia",
      descripcion: "Mantener exclusividad y profesionalismo que caracteriza a Camondo WWR",
      solucion: "Acreditaciones físicas personalizadas de alta calidad con tecnología QR y personal especializado",
    },
  ]

  const sectoresEmpresariales = [
    {
      name: "Tecnología",
      icon: Monitor,
      description: "Empresarios líderes en innovación tecnológica y transformación digital",
    },
    {
      name: "Energía",
      icon: Zap,
      description: "Ejecutivos del sector energético y sustentabilidad empresarial",
    },
    {
      name: "Comercio",
      icon: Globe,
      description: "Líderes en comercio internacional y desarrollo de mercados",
    },
    {
      name: "Innovación",
      icon: TrendingUp,
      description: "Emprendedores y ejecutivos en innovación y nuevos modelos de negocio",
    },
    {
      name: "Bienes Raíces",
      icon: Building,
      description: "Desarrolladores y ejecutivos del sector inmobiliario internacional",
    },
    {
      name: "Finanzas",
      icon: BarChart3,
      description: "Ejecutivos del sector financiero y servicios de inversión internacional",
    },
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
            <span className="text-[#333333] font-medium">Camondo WWR 11° Edición</span>
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
                  <Badge className="bg-white text-[#FF5C00]">Empresarial Internacional</Badge>
                  <Badge className="bg-white/20 text-white">Presidente Milei</Badge>
                  <Badge className="bg-white/20 text-white">11° Edición</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Camondo <span className="text-yellow-300">WWR</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  <strong>11° edición del encuentro empresarial más exclusivo.</strong> DER gestionó integralmente
                  Camondo WWR con <strong>300+ empresarios internacionales</strong> y presencia del
                  <strong> presidente Javier Milei</strong>. Sistema integral de acreditaciones físicas con códigos QR
                  en <strong>menos de 30 segundos por persona</strong>.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">300+</div>
                    <div className="text-sm opacity-80">Empresarios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">6</div>
                    <div className="text-sm opacity-80">Sectores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">&lt;30s</div>
                    <div className="text-sm opacity-80">Ingreso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">11°</div>
                    <div className="text-sm opacity-80">Edición</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Evento Empresarial</span>
                  </div>
                  <div className="flex items-center">
                    <Crown className="w-4 h-4 mr-2 text-yellow-300" />
                    <span>Presencia Presidencial</span>
                  </div>
                </div>
              </div>

              {/* Imagen Principal */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1234567890/camondo-wwr-11-edicion.jpg"
                    alt="Camondo WWR 11° edición - 300+ empresarios con presidente Javier Milei"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">
                      Camondo WWR 11° edición - 300+ empresarios con presidente Javier Milei
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
                Encuentro <span className="text-[#FF5C00]">Empresarial</span>
              </h2>
              <p className="text-xl text-[#333333]">
                11° edición del importante encuentro con presencia presidencial y empresarios internacionales
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
                Seguridad presidencial, 300+ ejecutivos y exclusividad característica de Camondo WWR
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

      {/* Sistema Integral */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Sistema <span className="text-[#FF5C00]">Integral</span>
              </h2>
              <p className="text-xl text-[#333333]">
                Acreditaciones físicas con códigos QR que garantizaron seguridad y exclusividad
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
                Desarrollo <span className="text-[#FF5C00]">11° Edición</span>
              </h2>
              <p className="text-xl text-[#333333]">
                De la pre-acreditación online a la valoración positiva de organizadores
              </p>
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

      {/* Sectores Empresariales */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Sectores <span className="text-[#FF5C00]">Empresariales</span>
              </h2>
              <p className="text-xl text-[#333333]">
                6 sectores clave representados por 300+ empresarios internacionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectoresEmpresariales.map((sector, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <sector.icon className="w-6 h-6 text-[#FF5C00]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">{sector.name}</h3>
                    <p className="text-[#333333] text-sm">{sector.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Verificables */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                Resultados <span className="text-[#FF5C00]">Verificables</span>
              </h2>
              <p className="text-xl text-[#333333]">Logros comprobados de la 11° edición de Camondo WWR</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Logros Operativos */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Logros Operativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <QrCode className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Acreditaciones Físicas QR</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Para más de 300 empresarios internacionales
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Sistema Seguridad Reforzado</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Para la presencia del presidente Javier Milei
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Tiempo Promedio Ingreso</div>
                        <div className="text-sm text-[#333333] opacity-70">Menos de 30 segundos por persona</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Valoración Positiva</div>
                        <div className="text-sm text-[#333333] opacity-70">De organizadores y asistentes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impacto Empresarial */}
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FF5C00]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 text-[#FF5C00] mr-2" />
                    Impacto Empresarial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Networking Facilitado</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Identificación y conexión entre participantes
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">6 Sectores Representados</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Tecnología, energía, comercio, innovación, bienes raíces, finanzas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Crown className="w-5 h-5 text-[#FF5C00] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Exclusividad Mantenida</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Profesionalismo característico de Camondo WWR
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <QrCode className="w-5 h-5 text-[#333333] mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#333333]">Tecnología QR Avanzada</div>
                        <div className="text-sm text-[#333333] opacity-70">
                          Acreditaciones físicas de alta calidad tecnológica
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
                <Crown className="w-4 h-4 mr-2" />
                ¿Tenés un evento empresarial de alto nivel?
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gestionemos tu próximo <span className="text-yellow-300">encuentro empresarial exclusivo</span>
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Si gestionamos Camondo WWR 11° edición con{" "}
                <strong>300+ empresarios internacionales y presencia del presidente Javier Milei</strong>, podemos
                asegurar la exclusividad y seguridad de tu evento empresarial de alto nivel.
              </p>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-[#FF5C00] hover:bg-[#F0F0F0] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Cotizar Acreditaciones QR
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF5C00] px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Consultar Eventos Empresariales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Garantías */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">300+ Empresarios</h3>
                <p className="text-sm opacity-80">Internacionales</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Seguridad Presidencial</h3>
                <p className="text-sm opacity-80">Protocolos especiales</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Menos 30 Segundos</h3>
                <p className="text-sm opacity-80">Tiempo ingreso</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Acreditaciones QR</h3>
                <p className="text-sm opacity-80">Físicas alta calidad</p>
              </div>
            </div>

            {/* Mensaje Final */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">¿Tu evento empresarial merece la máxima exclusividad?</h3>
              <p className="text-lg opacity-90">
                Camondo WWR 11° edición confió en DER para su encuentro más importante:{" "}
                <strong>300+ empresarios internacionales, presencia del presidente Javier Milei</strong> y
                acreditaciones físicas con códigos QR. Tu evento empresarial también puede tener la máxima seguridad y
                exclusividad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
