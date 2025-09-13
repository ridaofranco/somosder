import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"
import ServiceDetail from "@/components/service-detail"
import CTASection from "@/components/cta-section"
import { getServiceFeaturedImage } from "@/lib/get-service-featured-image"
import { Target, TrendingUp, Users, BarChart3, Lightbulb, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Consultoría Estratégica para Eventos | DER Eventos",
  description:
    "Desarrollamos estrategias personalizadas para eventos que maximizan el impacto y ROI. Consultoría especializada en planificación estratégica de eventos corporativos, deportivos y culturales.",
  keywords: "consultoría eventos, estrategia eventos, planificación eventos, ROI eventos, consultor eventos Argentina",
}

const serviceData = {
  title: "Consultoría Estratégica para Eventos",
  description:
    "Desarrollamos estrategias personalizadas que transforman tus objetivos en experiencias memorables y resultados medibles.",
  benefits: [
    "Estrategia personalizada basada en objetivos específicos",
    "Optimización de presupuesto y recursos disponibles",
    "Identificación de oportunidades de innovación",
    "Medición de resultados con KPIs relevantes",
    "Análisis de mercado y benchmarking competitivo",
    "Recomendaciones basadas en datos para futuros eventos",
  ],
  features: [
    {
      title: "Diagnóstico Estratégico",
      description: "Análisis profundo de objetivos, audiencia y contexto para desarrollar la estrategia más efectiva.",
      icon: <Target className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Planificación de ROI",
      description: "Definición de métricas de éxito y estrategias para maximizar el retorno de inversión.",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Análisis de Audiencia",
      description: "Investigación detallada del público objetivo para personalizar la experiencia del evento.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Benchmarking Competitivo",
      description: "Análisis de mejores prácticas del mercado para posicionar tu evento de manera diferencial.",
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Innovación y Tendencias",
      description: "Identificación de oportunidades de innovación y aplicación de últimas tendencias.",
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Optimización de Recursos",
      description: "Estrategias para maximizar el impacto con el presupuesto y recursos disponibles.",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
    },
  ],
  image: getServiceFeaturedImage("consultoria"),
  sidebarImage: getServiceFeaturedImage("consultoria"),
}

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <OptimizedImage
          src={serviceData.image}
          alt="Consultoría Estratégica para Eventos"
          fill
          className="object-cover"
          priority
        />

        <div className="container relative z-20 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Consultoría <span className="text-orange-500">Estratégica</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Desarrollamos estrategias personalizadas que maximizan el impacto y ROI de tus eventos corporativos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
            >
              Solicitar Información <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Component */}
      <ServiceDetail service={serviceData} />

      {/* CTA Section */}
      <CTASection
        title="¿Listo para desarrollar una estrategia ganadora?"
        subtitle="Nuestros consultores estratégicos están listos para ayudarte a maximizar el impacto de tu próximo evento."
        primaryButtonText="Solicitar Consultoría"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver Casos de Éxito"
        secondaryButtonLink="/portfolio"
        variant="gradient"
      />
    </div>
  )
}
