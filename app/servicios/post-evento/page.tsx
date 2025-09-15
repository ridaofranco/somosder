import Link from "next/link"
import { BarChart, Users, Target } from "lucide-react"

export default function PostEventoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/servicios" className="hover:text-orange-600">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Post Evento</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Servicios <span className="text-yellow-300">Post Evento</span>
            </h1>
            <p className="text-xl mb-8">
              Maximiza el ROI de tu evento con análisis profundo y seguimiento estratégico
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <BarChart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Análisis de Resultados</h3>
              <p className="text-gray-600">Evaluación completa de métricas y ROI</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Seguimiento de Leads</h3>
              <p className="text-gray-600">Gestión profesional de contactos generados</p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Optimización</h3>
              <p className="text-gray-600">Estrategias para futuros eventos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para maximizar tu ROI?</h2>
          <Link href="/contacto">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg">
              Solicitar Análisis Post Evento
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}