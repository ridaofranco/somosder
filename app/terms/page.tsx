import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Mail, Phone, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones | DER EVENT HUB",
  description: "Términos y condiciones de uso de DER Event Hub. Condiciones de servicio y responsabilidades.",
  robots: "noindex, nofollow",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Términos y Condiciones</h1>
                <p className="text-gray-600 mt-2">Última actualización: 17 de julio de 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              Estos términos y condiciones rigen el uso de nuestros servicios y sitio web. Al contratar nuestros
              servicios, aceptás estos términos.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  DER Event Hub ofrece servicios integrales de organización de eventos, incluyendo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Control de accesos y acreditaciones</li>
                  <li>Producción integral de eventos</li>
                  <li>Tecnología para eventos</li>
                  <li>Fotografía y video</li>
                  <li>Catering y gastronomía</li>
                  <li>Logística y transporte</li>
                  <li>Búsqueda de venues</li>
                  <li>Analytics y reportes</li>
                  <li>Consultoría estratégica</li>
                  <li>Marketing experiencial</li>
                  <li>Soporte 24/7</li>
                  <li>Servicios adicionales según necesidades</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Contratación y Pagos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proceso de Contratación</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Consulta inicial gratuita</li>
                    <li>Cotización detallada</li>
                    <li>Firma de contrato</li>
                    <li>Pago de seña (30% del total)</li>
                    <li>Planificación y ejecución</li>
                    <li>Pago final</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Condiciones de Pago</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Seña: 30% al firmar contrato</li>
                    <li>Pago final: 70% máximo 7 días después del evento</li>
                    <li>Métodos: Transferencia bancaria, efectivo</li>
                    <li>Moneda: USD o ARS según acuerdo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Responsabilidades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nuestras Responsabilidades</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Ejecutar los servicios contratados según especificaciones</li>
                    <li>Mantener estándares de calidad profesional</li>
                    <li>Proporcionar soporte técnico durante el evento</li>
                    <li>Entregar reportes post-evento según acordado</li>
                    <li>Mantener confidencialidad de información del cliente</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Responsabilidades del Cliente</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Proporcionar información completa y precisa</li>
                    <li>Realizar pagos según cronograma acordado</li>
                    <li>Obtener permisos y autorizaciones necesarias</li>
                    <li>Comunicar cambios con mínimo 48 horas de anticipación</li>
                    <li>Cumplir con normativas locales y regulaciones</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Cancelaciones y Modificaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancelación por el Cliente</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Más de 30 días: Reembolso del 70% de la seña</li>
                      <li>15-30 días: Reembolso del 50% de la seña</li>
                      <li>7-15 días: Reembolso del 30% de la seña</li>
                      <li>Menos de 7 días: Sin reembolso</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Modificaciones</h4>
                    <p className="text-gray-700">
                      Cambios menores sin costo adicional hasta 7 días antes del evento. Cambios mayores pueden generar
                      costos adicionales según impacto.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Limitación de Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nuestra responsabilidad se limita al valor del contrato</li>
                  <li>No somos responsables por daños indirectos o consecuenciales</li>
                  <li>Casos de fuerza mayor eximen de responsabilidad</li>
                  <li>Cliente debe contratar seguros apropiados para su evento</li>
                  <li>Limitaciones no aplican en casos de negligencia grave</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Tecnología y sistemas desarrollados por DER son de nuestra propiedad</li>
                  <li>Materiales del cliente permanecen de su propiedad</li>
                  <li>Podemos usar imágenes del evento para promoción (salvo restricción)</li>
                  <li>Respetamos derechos de autor y marcas registradas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Confidencialidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Mantenemos estricta confidencialidad sobre información del cliente, incluyendo datos de asistentes,
                  estrategias comerciales y detalles del evento. Esta obligación permanece vigente después de finalizar
                  el servicio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Ley Aplicable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en
                  los tribunales de la Ciudad Autónoma de Buenos Aires.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Para consultas sobre estos términos:</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-orange-500 mr-2" />
                    <span>contacto@somosder.ar</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-orange-500 mr-2" />
                    <span>+54 9 11 7154-0675</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}