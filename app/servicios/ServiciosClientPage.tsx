"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Calculator,
  Building,
  Shield,
  Star,
  Target,
  Clock,
  Trophy,
  ChevronDown,
  Monitor,
  Truck,
  Palette,
  Camera,
  Utensils,
  BarChart,
  Handshake,
} from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function ServiciosClientPage() {
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleAllAccordions = () => {
    if (typeof window === "undefined") return
    
    const allItems = document.querySelectorAll("[data-state]")
    const shouldExpand = !allExpanded

    allItems.forEach((item) => {
      const trigger = item.querySelector("[data-radix-collection-item]") as HTMLElement
      if (trigger) {
        const isOpen = item.getAttribute("data-state") === "open"
        if (shouldExpand && !isOpen) {
          trigger.click()
        } else if (!shouldExpand && isOpen) {
          trigger.click()
        }
      }
    })

    setAllExpanded(shouldExpand)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg"
          alt="MANCHESTER-DER"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-orange-600/80 to-red-600/80"></div>
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-8">
              <Building className="w-4 h-4 mr-2" />
              Un solo proveedor, un solo contrato
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">12 Servicios</span> Integrados
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Desde la consultoría estratégica hasta el post-evento analytics.
              <strong>Todo lo que necesitás para tu evento bajo un solo techo.</strong>
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Sin Coordinación Externa</h3>
                <p className="text-sm opacity-90">Un solo punto de contacto para todo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">98% Satisfacción</h3>
                <p className="text-sm opacity-90">Clientes que vuelven y recomiendan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 Soporte</h3>
                <p className="text-sm opacity-90">Respaldo técnico garantizado</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cotizador">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl">
                  <Calculator className="mr-2 h-5 w-5" />
                  Cotizar Servicios Gratis
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                >
                  Consulta Personalizada
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                Los <span className="text-[#FF5C00]">12 Servicios</span> que Transforman tu Evento
              </h2>
              <p className="text-xl text-[#333333]/80 max-w-4xl mx-auto">
                Cada servicio está diseñado para funcionar de manera independiente o integrada. Elegí lo que necesitás o
                dejanos armar el paquete perfecto para tu evento.
              </p>
            </div>

            {/* Servicios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* BLOQUE 1: TECNOLOGÍA Y CONTROL */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
                    alt="Control de Accesos"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold mb-1">Ver detalles completos</p>
                    <p className="text-xs opacity-90">Casos reales y precios</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Control de Accesos Inteligente
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Sistema propio con QR únicos, Face ID avanzado y dashboard en tiempo real. De 300 a 5,000+
                    asistentes.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">QR únicos y Face ID</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Dashboard tiempo real</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Backup offline 24/7</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$300 USD</span>
                    </div>

                    <Link href="/servicios/accesos">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637602/DSC_0580_kzp9p6.jpg"
                    alt="Tecnología Audiovisual"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Tecnología Audiovisual
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Streaming profesional, equipamiento de sonido e iluminación, producción audiovisual completa.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Streaming HD/4K</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Sonido profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Iluminación escénica</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$800 USD</span>
                    </div>

                    <Link href="/servicios/tecnologia-eventos">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635618/Imagen_de_WhatsApp_2025-01-23_a_las_13.37.28_7d29a749-2_cyzebc.jpg"
                    alt="Aplicaciones Interactivas"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Aplicaciones Interactivas
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Apps personalizadas, sorteos digitales en tiempo real, plataformas de engagement para eventos.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Apps a medida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Sorteos interactivos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Engagement real</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$500 USD</span>
                    </div>

                    <Link href="/servicios/tecnologia">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* BLOQUE 2: PRODUCCIÓN Y GESTIÓN */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
                    alt="Producción Integral"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Producción Integral
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Gestión 360° desde la planificación hasta la ejecución. Coordinación completa de proveedores y
                    logística.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Gestión 360°</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Coordinación proveedores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Supervisión técnica</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$1,500 USD</span>
                    </div>

                    <Link href="/servicios/produccion-integral">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746636992/476-IMG_2915_zgzlzc.jpg"
                    alt="Gestión Deportiva"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Gestión Deportiva
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Organización completa de torneos, competencias y eventos deportivos con logística especializada.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Torneos completos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Logística deportiva</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Gestión sponsors</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$1,200 USD</span>
                    </div>

                    <Link href="/servicios/gestion-deportiva">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634959/IMG_3025_kpld55.jpg"
                    alt="Logística y Coordinación"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Logística y Coordinación
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Transporte, setup, coordinación de equipos y gestión operativa completa del evento.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Transporte especializado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Setup y desmontaje</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Coordinación operativa</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$600 USD</span>
                    </div>

                    <Link href="/servicios/logistica">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* BLOQUE 3: EXPERIENCIA Y CONTENIDO */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635385/14-IMG_0544_ydcxsn.jpg"
                    alt="Marketing y Activaciones"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Marketing y Activaciones
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Estrategias de marketing, activaciones de marca y experiencias memorables para tu audiencia.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Estrategias digitales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Activaciones de marca</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Experiencias únicas</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$800 USD</span>
                    </div>

                    <Link href="/servicios/marketing-experiencial">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637083/_MG_0804_edited_rtovsy.jpg"
                    alt="Fotografía y Video"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Fotografía y Video
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Cobertura profesional completa, contenido audiovisual y documentación de tu evento.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Fotografía profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Video corporativo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Contenido redes</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$400 USD</span>
                    </div>

                    <Link href="/servicios/fotografia-video">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747799115/Imagen_de_WhatsApp_2025-05-16_a_las_12.46.05_3f53ba85_p44ieh.jpg"
                    alt="Gastronomía y Catering"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Gastronomía y Catering
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Food trucks, catering premium, servicios gastronómicos adaptados a tu evento y audiencia.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Food trucks premium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Catering corporativo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Menús personalizados</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$15/persona</span>
                    </div>

                    <Link href="/servicios/gastronomia">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* BLOQUE 4: ANÁLISIS Y ALIANZAS */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908990/Captura_de_pantalla_2024-05-10_153233_mlh6y3.png"
                    alt="Post-Evento y Analytics"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Post-Evento y Analytics
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Análisis completo de datos, reportes de impacto y métricas de ROI para optimizar futuros eventos.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Reportes detallados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Métricas de ROI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Análisis de audiencia</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$300 USD</span>
                    </div>

                    <Link href="/servicios/post-evento">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg"
                    alt="Consultoría Estratégica"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Consultoría Estratégica
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Asesoramiento integral desde la conceptualización hasta la ejecución de tu estrategia de eventos.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Planificación estratégica</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Optimización presupuesto</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Asesoramiento experto</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$200/hora</span>
                    </div>

                    <Link href="/servicios/consultoria-estrategica">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-[#FF5C00]/30">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
                    alt="Alianzas Estratégicas"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#FF5C00] rounded-full flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#FF5C00] transition-colors duration-300">
                    Alianzas Estratégicas
                  </h3>

                  <p className="text-[#333333]/70 mb-6 text-sm leading-relaxed">
                    Gestión de sponsors, partnerships corporativos y alianzas que potencien el impacto de tu evento.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Gestión de sponsors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Partnerships estratégicos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF5C00] flex-shrink-0" />
                      <span className="text-sm text-[#333333]/80">Negociación comercial</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#333333]/60">
                      Desde <span className="text-[#FF5C00] font-bold">$500 USD</span>
                    </div>

                    <Link href="/servicios/alianzas-estrategicas">
                      <Button
                        size="sm"
                        className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Ver Más
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                Los que más <span className="text-[#FF5C00]">nos piden</span>
              </h2>
              <p className="text-xl text-[#333333]/80">Estos 3 servicios representan el 80% de nuestros proyectos</p>
            </div>

            <div className="space-y-16">
              {/* Producción Integral */}
              <div className="group hover:shadow-3xl transition-all duration-700">
                <div className="bg-gradient-to-br from-white to-[#F0F0F0]/30 rounded-3xl overflow-hidden border-2 hover:border-[#FF5C00]/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="bg-[#FF5C00] text-white px-4 py-2 text-sm font-bold">
                          <Star className="w-4 h-4 mr-2" />
                          #1 Más Solicitado
                        </Badge>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Producción Integral</h3>

                      <p className="text-lg md:text-xl text-[#FF5C00] font-semibold mb-6">
                        De la idea al evento perfecto, sin que te preocupes por nada
                      </p>

                      <p className="text-[#333333]/80 mb-8 text-lg leading-relaxed">
                        Campus Party, Manchester City, Abel Pintos... todos confiaron en nuestra producción integral.
                        Nosotros nos encargamos de todo: desde la planificación estratégica hasta el último detalle de
                        la ejecución.
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">180,000+</div>
                          <div className="text-xs text-[#333333]/70">Personas Gestionadas</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">98%</div>
                          <div className="text-xs text-[#333333]/70">Satisfacción Cliente</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">17+</div>
                          <div className="text-xs text-[#333333]/70">Proyectos Exitosos</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">24/7</div>
                          <div className="text-xs text-[#333333]/70">Soporte Técnico</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/servicios/produccion-integral">
                          <Button
                            size="lg"
                            className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          >
                            Ver Servicio Completo
                            <ArrowRight className="ml-3 h-5 w-5" />
                          </Button>
                        </Link>

                        <Link href="/cotizador">
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#FF5C00] text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
                          >
                            <Calculator className="mr-2 h-5 w-5" />
                            Cotizar Ahora
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="relative h-80 lg:h-full overflow-hidden lg:order-2">
                      <Image
                        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
                        alt="Producción Integral"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-sm font-semibold mb-1">Servicio #1</p>
                        <p className="text-xs opacity-90">El más solicitado por nuestros clientes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Control de Accesos */}
              <div className="group hover:shadow-3xl transition-all duration-700 lg:flex-row-reverse">
                <div className="bg-gradient-to-br from-white to-[#F0F0F0]/30 rounded-3xl overflow-hidden border-2 hover:border-[#FF5C00]/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-full overflow-hidden lg:order-1">
                      <Image
                        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
                        alt="Control de Accesos"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-sm font-semibold mb-1">Servicio #2</p>
                        <p className="text-xs opacity-90">Tecnología propia que nos diferencia</p>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="bg-[#FF5C00] text-white px-4 py-2 text-sm font-bold">
                          <Star className="w-4 h-4 mr-2" />
                          #2 Más Solicitado
                        </Badge>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                        Control de Accesos y Acreditaciones
                      </h3>

                      <p className="text-lg md:text-xl text-[#FF5C00] font-semibold mb-6">
                        La tecnología que nos puso en el mapa internacional
                      </p>

                      <p className="text-[#333333]/80 mb-8 text-lg leading-relaxed">
                        Desde QR básicos hasta Face ID avanzado. Nuestro sistema propio manejó Manchester City, Campus
                        Party y Abel Pintos sin un solo problema. Dashboard en tiempo real y backup offline garantizado.
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">180,000+</div>
                          <div className="text-xs text-[#333333]/70">Accesos Controlados</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">99.9%</div>
                          <div className="text-xs text-[#333333]/70">Uptime Promedio</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">24/7</div>
                          <div className="text-xs text-[#333333]/70">Soporte Técnico</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">0</div>
                          <div className="text-xs text-[#333333]/70">Fallas Críticas</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/servicios/accesos">
                          <Button
                            size="lg"
                            className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          >
                            Ver Servicio Completo
                            <ArrowRight className="ml-3 h-5 w-5" />
                          </Button>
                        </Link>

                        <Link href="/cotizador">
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#FF5C00] text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
                          >
                            <Calculator className="mr-2 h-5 w-5" />
                            Cotizar Ahora
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultoría Estratégica */}
              <div className="group hover:shadow-3xl transition-all duration-700">
                <div className="bg-gradient-to-br from-white to-[#F0F0F0]/30 rounded-3xl overflow-hidden border-2 hover:border-[#FF5C00]/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="bg-[#FF5C00] text-white px-4 py-2 text-sm font-bold">
                          <Star className="w-4 h-4 mr-2" />
                          #3 Más Solicitado
                        </Badge>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Consultoría Estratégica</h3>

                      <p className="text-lg md:text-xl text-[#FF5C00] font-semibold mb-6">
                        Donde nacen los eventos que marcan la diferencia
                      </p>

                      <p className="text-[#333333]/80 mb-8 text-lg leading-relaxed">
                        Antes de Manchester City, antes de Campus Party, hubo una estrategia. Te ayudamos a definir
                        objetivos, optimizar presupuestos y crear experiencias que realmente impacten.
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">2 años</div>
                          <div className="text-xs text-[#333333]/70">Experiencia</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">100%</div>
                          <div className="text-xs text-[#333333]/70">Proyectos Exitosos</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">12</div>
                          <div className="text-xs text-[#333333]/70">Servicios Integrados</div>
                        </div>
                        <div className="text-center p-4 bg-[#F0F0F0] rounded-xl">
                          <div className="text-2xl font-bold text-[#FF5C00] mb-1">24-48h</div>
                          <div className="text-xs text-[#333333]/70">Tiempo Respuesta</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/servicios/gastronomia">
                          <Button
                            size="lg"
                            className="bg-[#FF5C00] hover:bg-[#E54F00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          >
                            Ver Servicio Completo
                            <ArrowRight className="ml-3 h-5 w-5" />
                          </Button>
                        </Link>

                        <Link href="/cotizador">
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#FF5C00] text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
                          >
                            <Calculator className="mr-2 h-5 w-5" />
                            Cotizar Ahora
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="relative h-80 lg:h-full overflow-hidden lg:order-2">
                      <Image
                        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746637535/DSC_0019_er9zhy.jpg"
                        alt="Consultoría Estratégica"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-sm font-semibold mb-1">Servicio #3</p>
                        <p className="text-xs opacity-90">Donde nacen las grandes ideas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Elegir DER - Enfoque Positivo */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                ¿Por qué elegir <span className="text-[#FF5C00]">DER</span>?
              </h2>
              <p className="text-xl text-[#333333]/80">Lo que nos hace únicos en la industria de eventos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-[#F0F0F0] rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Un Solo Proveedor</h3>
                <p className="text-[#333333]/80">
                  12 servicios bajo un mismo techo. Un solo contrato, un solo punto de contacto, una sola
                  responsabilidad.
                </p>
              </div>

              <div className="text-center p-8 bg-[#F0F0F0] rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Casos Reales</h3>
                <p className="text-[#333333]/80">
                  Manchester City, Campus Party, Abel Pintos. Cada número es verificable, cada historia es real.
                </p>
              </div>

              <div className="text-center p-8 bg-[#F0F0F0] rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Tecnología Propia</h3>
                <p className="text-[#333333]/80">
                  Sistemas desarrollados internamente. Control total, actualizaciones rápidas, soporte 24/7.
                </p>
              </div>

              <div className="text-center p-8 bg-[#F0F0F0] rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">98% Satisfacción</h3>
                <p className="text-[#333333]/80">
                  Clientes que vuelven y recomiendan. En 2 años, cero proyectos fallidos, resultados verificables.
                </p>
              </div>

              <div className="text-center p-8 bg-[#F0F0F0] rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Respuesta Rápida</h3>
                <p className="text-[#333333]/80">
                  24-48 horas para cotizaciones. Setup en 1 semana. Decisiones rápidas, ejecución perfecta.
                </p>
              </div>

              <div className="text-center p-8 bg-[#F0F0F0] rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Enfoque Integral</h3>
                <p className="text-[#333333]/80">
                  No solo ejecutamos, pensamos estratégicamente. Cada servicio está diseñado para potenciar el conjunto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                Preguntas <span className="text-[#FF5C00]">Frecuentes</span>
              </h2>
              <p className="text-xl text-[#333333]/80">Las dudas más comunes sobre nuestros servicios</p>

              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={toggleAllAccordions}
                  className="text-[#FF5C00] border-[#FF5C00] hover:bg-[#FF5C00]/10 bg-transparent"
                >
                  <ChevronDown className="w-4 h-4 mr-2" />
                  {allExpanded ? "Colapsar todas" : "Expandir todas"}
                </Button>
              </div>
            </div>

            <Accordion type="multiple" className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#FF5C00]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#333333] hover:text-[#FF5C00] transition-colors duration-300">
                  ¿Puedo contratar solo un servicio o necesito el paquete completo?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 leading-relaxed">
                  Podés contratar servicios individuales sin problemas. Ofrecemos tres modalidades: servicios modulares
                  (uno por vez), combos (paquetes de servicios relacionados) y suscripciones (retainers + SaaS + días de
                  producción). Vos elegís lo que mejor se adapte a tu necesidad y presupuesto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#FF5C00]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#333333] hover:text-[#FF5C00] transition-colors duration-300">
                  ¿Cuánto tiempo necesitan para organizar un evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 leading-relaxed">
                  Para control de accesos básico necesitamos 1 semana de setup. Para producción integral, depende del
                  tamaño: eventos de 300-1,000 personas necesitan 2-4 semanas, eventos más grandes pueden requerir 6-8
                  semanas. Nuestros clientes típicamente deciden en 24-48 horas, así que el tiempo de planificación es
                  lo que más influye.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#FF5C00]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#333333] hover:text-[#FF5C00] transition-colors duration-300">
                  ¿Trabajan solo en Buenos Aires o también en el interior?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 leading-relaxed">
                  Trabajamos en toda Argentina y Paraguay. Nuestra base está en Buenos Aires, pero ya ejecutamos
                  proyectos en Entre Ríos (Campus Party), y tenemos como targets de expansión Chile, Uruguay, Perú y
                  Brasil. Para eventos fuera de AMBA, incluimos costos de traslado y logística en la cotización.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#FF5C00]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#333333] hover:text-[#FF5C00] transition-colors duration-300">
                  ¿Qué pasa si hay problemas técnicos durante el evento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 leading-relaxed">
                  Tenemos soporte técnico 24/7 y sistemas de backup offline. En 2 años y 180,000+ personas gestionadas,
                  tuvimos 0 incidentes graves. Nuestros sistemas incluyen redundancia automática, routers 4G de respaldo
                  y protocolos de contingencia probados en eventos como Manchester City y Campus Party.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#FF5C00]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#333333] hover:text-[#FF5C00] transition-colors duration-300">
                  ¿Cuáles son las formas de pago y condiciones comerciales?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 leading-relaxed">
                  Trabajamos con diferentes modalidades: 50% adelanto y 50% contra entrega para proyectos puntuales, o
                  esquemas de retainer mensual + días de producción para clientes recurrentes. Aceptamos transferencias
                  bancarias, y para clientes corporativos ofrecemos condiciones de pago a 30 días. Todas las
                  cotizaciones incluyen IVA.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#FF5C00]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#333333] hover:text-[#FF5C00] transition-colors duration-300">
                  ¿Pueden manejar eventos de más de 5,000 personas?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#333333]/80 leading-relaxed">
                  Sí, nuestro sistema es escalable hasta 20,000-30,000 asistentes. Ya manejamos Campus Party con 13,000
                  inscriptos, Leyendas de México con 25,000+ asistentes totales, y Abel Pintos con 26,000+ fans en 30
                  fechas. Para eventos masivos ofrecemos nuestro "Sistema Masivo" con pricing personalizado y recursos
                  adicionales.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-yellow-300">potenciar</span> tu próximo evento?
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Cada gran evento comienza con una conversación. Contáctanos hoy mismo y descubrí cómo nuestros{" "}
              <strong>12 servicios integrados</strong> pueden transformar tu visión en realidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/cotizador">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Cotizar Servicios Gratis
                </Button>
              </Link>

              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Consulta Personalizada
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
                <p className="text-sm opacity-80">24-48 horas garantizadas</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">100% Confiable</h3>
                <p className="text-sm opacity-80">0 incidentes en 2 años</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Resultados Garantizados</h3>
                <p className="text-sm opacity-80">98% satisfacción cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
