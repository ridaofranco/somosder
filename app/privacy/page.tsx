import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Phone, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | DER EVENT HUB",
  description: "Política de privacidad de DER Event Hub. Cómo recopilamos, usamos y protegemos tus datos personales.",
  robots: "noindex, nofollow",
}

export default function PrivacyPage() {
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
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Política de Privacidad</h1>
                <p className="text-gray-600 mt-2">Última actualización: 17 de julio de 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              En DER Event Hub valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta
              política explica cómo recopilamos, usamos y protegemos tu información.
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
                <CardTitle>1. Información que Recopilamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Información Personal</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nombre completo</li>
                    <li>Dirección de email</li>
                    <li>Número de teléfono</li>
                    <li>Empresa y cargo</li>
                    <li>Información sobre eventos (tipo, fecha, asistentes)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Información Técnica</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tiempo de permanencia</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Cómo Usamos tu Información</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Responder a tus consultas y cotizaciones</li>
                  <li>Proporcionar servicios de organización de eventos</li>
                  <li>Enviarte información relevante sobre nuestros servicios</li>
                  <li>Mejorar nuestro sitio web y servicios</li>
                  <li>Cumplir con obligaciones legales</li>
                  <li>Enviar newsletter (solo si te suscribiste)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Compartir Información</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>No vendemos ni alquilamos tu información personal.</strong>
                  Podemos compartir información únicamente en estos casos:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Con proveedores de servicios necesarios para tu evento</li>
                  <li>Cuando sea requerido por ley</li>
                  <li>Para proteger nuestros derechos legales</li>
                  <li>Con tu consentimiento explícito</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio
                  </li>
                  <li>
                    <strong>Cookies de análisis:</strong> Para entender cómo usás el sitio
                  </li>
                  <li>
                    <strong>Cookies de marketing:</strong> Para mostrarte contenido relevante
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Podés configurar tu navegador para rechazar cookies, pero esto puede afectar la funcionalidad del
                  sitio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Seguridad de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad técnicas y organizacionales para proteger tu información:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Encriptación SSL en todas las comunicaciones</li>
                  <li>Acceso restringido a datos personales</li>
                  <li>Backups regulares y seguros</li>
                  <li>Monitoreo continuo de seguridad</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Tus Derechos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Tenés derecho a:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Corregir datos incorrectos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Portabilidad de datos</li>
                  <li>Cancelar suscripción al newsletter</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Para ejercer estos derechos, contactanos a:
                  <strong> contacto@somosder.ar</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Retención de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Datos de contacto:</strong> Hasta 3 años después del último contacto
                  </li>
                  <li>
                    <strong>Datos de eventos:</strong> 5 años para fines legales y contables
                  </li>
                  <li>
                    <strong>Newsletter:</strong> Hasta que te desuscribas
                  </li>
                  <li>
                    <strong>Cookies:</strong> Según configuración del navegador
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Para consultas sobre esta política de privacidad:</p>
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