import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

interface ServiceFeature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ServiceData {
  title: string
  description: string
  benefits: string[]
  features: ServiceFeature[]
  image: string
  sidebarImage?: string
}

interface ServiceDetailProps {
  service: ServiceData
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  if (!service) {
    return <div className="container py-12 text-center text-white">Error: Datos del servicio no disponibles.</div>
  }

  return (
    <>
      {/* Sección de Descripción y Beneficios */}
      <div className="bg-[#1E1E1E] text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>
              {service.benefits && service.benefits.length > 0 && (
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold">Beneficios:</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-orange-500 mr-3 shrink-0 mt-1" />
                        <span className="text-gray-300 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link href="/contacto">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">
                  Solicitar Información <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[550px] rounded-lg overflow-hidden shadow-2xl">
              <OptimizedImage
                src={
                  service.sidebarImage || service.image || "/placeholder.svg?height=550&width=800&text=Imagen+Servicio"
                }
                alt={`${service.title} - Detalle del servicio`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Características Principales */}
      {service.features && service.features.length > 0 && (
        <section className="bg-[#1E1E1E] text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Principales</h2>
              <p className="text-gray-400 text-lg">Descubre las funcionalidades clave de este servicio.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-xl flex flex-col h-full">
                  {feature.icon && <div className="mb-4 flex justify-start">{feature.icon}</div>}
                  <h3 className="text-xl font-bold mb-3 text-left">{feature.title}</h3>
                  <p className="text-gray-300 text-left">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
