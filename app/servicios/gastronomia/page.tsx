import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChefHat, Utensils, Wine, Users, Leaf, Star, CheckCircle, ArrowRight, TrendingUp } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Soluciones Gastronómicas Eventos Argentina | Food Trucks Patios Gastronómicos | DER EVENT HUB",
  description:
    "Soluciones gastronómicas eventos: food trucks curados, patios gastronómicos, curaduría especializada. Buenos Aires Trap 120K personas, Expo Autos CeNARD, Fiesta Manzana. Gestión sustentable.",
  keywords:
    "soluciones gastronomicas eventos argentina, food trucks eventos, patios gastronomicos, curacion gastronomica, buenos aires trap gastronomia, expo autos cenard food trucks, fiesta manzana zona gastronomica, gestion sustentable eventos, economia circular eventos",
  openGraph: {
    title: "Soluciones Gastronómicas Eventos | Food Trucks y Patios Argentina",
    description:
      "Food trucks curados, patios gastronómicos, curaduría especializada. Buenos Aires Trap 120K personas, Expo Autos CeNARD.",
    images: ["/og-soluciones-gastronomicas.jpg"],
  },
  alternates: {
    canonical: "https://somosder.ar/servicios/soluciones-gastronomicas",
  },
}

export default function SolucionesGastronomicasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10" />
        <div className="container relative px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">Soluciones Gastronómicas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Soluciones <span className="text-orange-500">Gastronómicas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Patios gastronómicos de excelencia, food trucks curados y experiencias gastronómicas que generan impacto
              real. Desde 4,000 hasta 120,000 personas con curaduría especializada y gestión sustentable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">120K</div>
                <div className="text-sm font-medium text-gray-900">Personas</div>
                <div className="text-xs text-gray-600">Buenos Aires Trap</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4 días</div>
                <div className="text-sm font-medium text-gray-900">Operación</div>
                <div className="text-xs text-gray-600">Expo Autos CeNARD</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Regional</div>
                <div className="text-sm font-medium text-gray-900">Curaduría</div>
                <div className="text-xs text-gray-600">Identidad local</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Sustentable</div>
                <div className="text-sm font-medium text-gray-900">Gestión</div>
                <div className="text-xs text-gray-600">Economía circular</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Solicitar Propuesta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg bg-transparent"
                >
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experiencias Gastronómicas de Excelencia
            </h2>
            <p className="text-xl text-gray-600">
              Curaduría especializada, gestión sustentable y coordinación logística para eventos de cualquier escala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <ChefHat className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Curaduría Gastronómica Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Selección y gestión de marcas gastronómicas con identidad y trayectoria, priorizando propuestas
                  nacionales y regionales que aporten valor cultural y culinario al evento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Utensils className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Patios Gastronómicos de Excelencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diseño y operación de espacios gastronómicos integrales que combinan diversidad culinaria, coherencia
                  estética y funcionalidad operativa para eventos masivos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Wine className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Food Trucks y Street Food</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gestión completa de food trucks con estructuras visualmente atractivas, línea estética común y
                  coordinación logística que jerarquiza el espacio gastronómico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Diversidad Gastronómica Curada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desde street food hasta cocinas tradicionales argentinas, opciones saludables, dulces y bebidas, con
                  coherencia estética y operativa que enriquece la experiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Leaf className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Economía Circular Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema que prioriza proveedores de insumos locales, cocinas de elaboración cercanas y producción
                  regional, sin generar circuitos económicos externos al territorio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-colors">
              <CardHeader>
                <Star className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Gestión Sustentable Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plan de manejo de residuos, clasificación en origen, disposición responsable de aceite vegetal usado y
                  acuerdos con cooperativas de reciclado. Incluimos sponsoreo e inversión local.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestros Servicios Incluyen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Curaduría gastronómica especializada con identidad regional",
                "Patios gastronómicos de excelencia con coherencia estética",
                "Gestión integral de food trucks con estructuras atractivas",
                "Diversidad culinaria: street food, cocinas tradicionales, opciones saludables",
                "Economía circular que prioriza proveedores locales",
                "Gestión sustentable con plan de manejo de residuos",
                "Cumplimiento bromatológico y normativas de seguridad",
                "Coordinación logística para eventos de múltiples días",
                "Integración visual con la estética general del evento",
                "Impacto positivo en la comunidad local",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Casos de Éxito Reales</h2>
            <p className="text-xl text-gray-600">
              Experiencias gastronómicas que han marcado la diferencia en eventos masivos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Buenos Aires Trap */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src="/placeholder.svg?height=200&width=400&text=Buenos+Aires+Trap+Gastronomía"
                  alt="Buenos Aires Trap - Zona Gastronómica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Festival Trap</Badge>
                <CardTitle className="text-xl">Buenos Aires Trap - Zona Gastronómica</CardTitle>
                <CardDescription>
                  Gestión de zona gastronómica en festival urbano para 120,000 personas, en colaboración con Mind Market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Coordinación de múltiples proveedores gastronómicos para 120,000 asistentes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Integración perfecta con el sistema general del festival
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Experiencia gastronómica alineada con la estética urbana del trap
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    Resultado: 120,000 personas con experiencia gastronómica integrada a la estética urbana
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expo Autos CeNARD */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src="/placeholder.svg?height=200&width=400&text=Expo+Autos+CeNARD+Food+Trucks"
                  alt="Expo Autos CeNARD"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Secretaría de Turismo</Badge>
                <CardTitle className="text-xl">Expo Autos CeNARD</CardTitle>
                <CardDescription>
                  Provisión de food trucks para 4,000 personas durante 4 días en evento de exposición de vehículos y
                  deporte motor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Coordinación logística para servicio continuo durante 4 días
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Gestión de food trucks con diversas opciones culinarias
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Distribución estratégica en el predio del CeNARD</span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    Resultado: Gestión exitosa de food trucks para 4,000+ asistentes durante 4 días consecutivos
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fiesta Nacional de la Manzana */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src="/placeholder.svg?height=200&width=400&text=Fiesta+Manzana+Gastronomía"
                  alt="Fiesta Nacional de la Manzana - Zona Gastronómica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Fiesta Nacional</Badge>
                <CardTitle className="text-xl">Fiesta Nacional de la Manzana</CardTitle>
                <CardDescription>
                  Organización del área gastronómica con identidad regional y servicio de fotografía profesional para
                  documentación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Propuesta gastronómica que destacaba productos regionales
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Operación continua durante múltiples jornadas del festival
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">
                      Cobertura fotográfica profesional de toda el área gastronómica
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    Resultado: Espacio gastronómico con identidad regional operando múltiples jornadas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Planes y Precios</h2>
            <p className="text-xl text-gray-600">Soluciones gastronómicas adaptadas a eventos de cualquier escala</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-orange-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Food Trucks Básico</CardTitle>
                <div className="text-3xl font-bold text-orange-500">USD 2,000-4,000</div>
                <CardDescription>Para eventos hasta 2,000 personas con food trucks seleccionados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Selección de 3-5 food trucks especializados",
                    "Coordinación logística básica",
                    "Gestión de permisos y documentación",
                    "Distribución estratégica en el predio",
                    "Supervisión durante el evento",
                    "Cumplimiento de normativas básicas",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">
                  Ideal para: Eventos corporativos, festivales pequeños, activaciones de marca
                </p>
                <Link href="/contacto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Solicitar Cotización</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Más Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Patio Gastronómico Curado</CardTitle>
                <div className="text-3xl font-bold text-orange-500">USD 6,000-12,000</div>
                <CardDescription>
                  Para eventos hasta 10,000 personas con curaduría gastronómica completa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Curaduría gastronómica especializada con identidad",
                    "Diseño integral del espacio gastronómico",
                    "Gestión de 8-15 proveedores coordinados",
                    "Coherencia estética y operativa",
                    "Plan de manejo de residuos sustentable",
                    "Economía circular con proveedores locales",
                    "Supervisión técnica especializada",
                    "Documentación fotográfica incluida",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">
                  Ideal para: Festivales masivos, eventos culturales, ferias gastronómicas
                </p>
                <Link href="/contacto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Solicitar Cotización</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-gray-200 hover:border-orange-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Experiencia Gastronómica Masiva</CardTitle>
                <div className="text-3xl font-bold text-orange-500">USD 15,000+</div>
                <CardDescription>
                  Para eventos masivos +50,000 personas con gestión integral sustentable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Curaduría gastronómica de excelencia nacional/regional",
                    "Patios gastronómicos múltiples con identidad unificada",
                    "Gestión de +20 proveedores especializados",
                    "Economía circular completa con impacto local",
                    "Plan de sostenibilidad con certificación",
                    "Gestión de residuos con cooperativas de reciclado",
                    "Equipo técnico dedicado on-site",
                    "Análisis de impacto económico local",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">
                  Ideal para: Festivales masivos, eventos gubernamentales, activaciones nacionales
                </p>
                <Link href="/contacto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Solicitar Cotización</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Respuestas a las consultas más comunes sobre nuestras soluciones gastronómicas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  ¿Cómo seleccionan los food trucks y proveedores gastronómicos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Realizamos una curaduría especializada priorizando propuestas nacionales y regionales con identidad
                    y trayectoria comprobada. Evaluamos calidad culinaria, capacidad operativa, cumplimiento de
                    normativas, coherencia estética y aporte cultural al evento. En Buenos Aires Trap seleccionamos
                    proveedores que complementaran la estética urbana, mientras que en Fiesta de la Manzana priorizamos
                    productos regionales.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  ¿Pueden manejar eventos masivos como Buenos Aires Trap?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Sí, tenemos experiencia comprobada en eventos masivos. En Buenos Aires Trap coordinamos la zona
                    gastronómica para 120,000 personas en colaboración con Mind Market. Implementamos sistemas de
                    gestión escalables, coordinación de múltiples proveedores simultáneos y logística optimizada para
                    alto volumen. Cada evento masivo requiere planificación específica según el perfil de audiencia.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  ¿Qué incluye la gestión sustentable y economía circular?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Nuestro sistema prioriza proveedores de insumos locales, cocinas de elaboración cercanas y
                    producción regional sin generar circuitos económicos externos al territorio. Incluimos plan de
                    manejo de residuos, clasificación en origen, disposición responsable de aceite vegetal usado y
                    acuerdos con cooperativas de reciclado. También gestionamos sponsoreo e inversión local como aporte
                    no reembolsable al municipio.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  ¿Cómo garantizan el cumplimiento de normativas bromatológicas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Trabajamos únicamente con proveedores que cumplen todas las normativas ANMAT y municipales.
                    Verificamos habilitaciones, certificados de manipulación de alimentos, seguros de responsabilidad
                    civil y protocolos sanitarios. En Expo Autos CeNARD gestionamos todos los permisos para servicio
                    gastronómico durante 4 días consecutivos. Realizamos inspecciones previas y seguimiento continuo.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  ¿Pueden integrar la propuesta gastronómica con la identidad del evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Absolutamente. Es nuestra especialidad. En Buenos Aires Trap desarrollamos un concepto de 'street
                    food urbano' integrado con la estética del trap. En Fiesta de la Manzana destacamos productos
                    regionales, especialmente derivados de la manzana. Cada propuesta gastronómica se diseña
                    específicamente para complementar y enriquecer la experiencia general del evento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left">
                  ¿Incluyen documentación fotográfica del área gastronómica?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Sí, en nuestros planes premium incluimos cobertura fotográfica profesional del área gastronómica.
                    Como hicimos en Fiesta de la Manzana, documentamos sistemáticamente la preparación de platos,
                    experiencia de asistentes, ambiente del espacio y momentos destacados. El material se entrega
                    editado para uso en comunicación inmediata y archivo post-evento.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Crea experiencias gastronómicas únicas con DER
            </h2>
            <p className="text-white text-opacity-90 mb-8 text-lg">
              Solicita una consulta personalizada y descubre cómo nuestras soluciones gastronómicas pueden enriquecer tu
              evento con curaduría especializada y gestión sustentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Contactar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
