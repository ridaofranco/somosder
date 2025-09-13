import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Monitor, Zap } from "lucide-react"

export default function CampusParty2025Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
            alt="Campus Party 2025 - DER"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <span className="inline-block bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                Tecnología
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Campus Party 2025</h1>
              <p className="text-white text-opacity-90 text-lg md:text-xl max-w-2xl">
                Sistema integral de acreditaciones para el evento de tecnología más grande de Argentina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white dark:bg-dark-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Descripción del Proyecto
              </h2>
              <p className="text-gray-700 dark:text-slate-300 mb-8 text-lg leading-relaxed">
                Campus Party 2025 representó un desafío masivo de gestión tecnológica. Durante 4 días consecutivos,
                nuestro sistema procesó más de 5,000 acreditaciones con monitoreo 24/7 y dashboard en tiempo real para
                los organizadores.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">El Desafío</h3>
              <p className="text-gray-700 dark:text-slate-300 mb-8">
                Gestionar el flujo masivo de participantes del evento tech más importante del país, con múltiples
                categorías de acceso, horarios variables y la necesidad de reportes en tiempo real para la organización.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Solución</h3>
              <p className="text-gray-700 dark:text-slate-300 mb-8">
                Implementamos un sistema de acreditaciones robusto con dashboard administrativo, códigos QR únicos,
                validación instantánea y reportes automáticos. El sistema funcionó sin interrupciones durante los 4 días
                del evento.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Resultados</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-slate-300 mb-8">
                <li>5,000+ acreditaciones procesadas exitosamente</li>
                <li>0 interrupciones del sistema durante 4 días</li>
                <li>Dashboard en tiempo real para organizadores</li>
                <li>Reportes automáticos cada 2 horas</li>
                <li>100% de satisfacción del cliente</li>
              </ul>

              {/* Testimonial */}
              <div className="bg-gray-50 dark:bg-dark-200 p-6 rounded-lg mt-8">
                <blockquote className="text-lg italic text-gray-700 dark:text-slate-300 mb-4">
                  "El sistema de DER fue fundamental para el éxito de Campus Party. La gestión fue impecable y el
                  soporte 24/7 nos dio total tranquilidad."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Equipo Campus Party</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Organización del Evento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-100 dark:bg-dark-300 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Detalles del Proyecto</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Fecha</p>
                      <p className="text-gray-700 dark:text-slate-300">Mayo 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Ubicación</p>
                      <p className="text-gray-700 dark:text-slate-300">Entre Ríos, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Asistentes</p>
                      <p className="text-gray-700 dark:text-slate-300">5,000+ participantes</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Monitor className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Duración</p>
                      <p className="text-gray-700 dark:text-slate-300">4 días consecutivos</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Tecnología</p>
                      <p className="text-gray-700 dark:text-slate-300">Sistema QR + Dashboard</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contacto">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Consultar por un proyecto similar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-gray-100 dark:bg-dark-200">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Galería de Imágenes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914192/IMG_4520_vs47oq.jpg"
                alt="Campus Party 2025 - Imagen 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914608/IMG-20250529-WA0040_cap8rw.jpg"
                alt="Campus Party 2025 - Imagen 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914189/Imagen_de_WhatsApp_2025-05-30_a_las_15.49.06_0c2c60d7_l5rli7.jpg"
                alt="Campus Party 2025 - Imagen 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para crear tu próximo evento memorable?
          </h2>
          <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo y descubre cómo podemos ayudarte a llevar tu evento al siguiente nivel.
          </p>
          <Link href="/contacto">
            <Button className="bg-white text-orange-600 hover:bg-gray-100">
              Solicitar una Consulta <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export async function generateMetadata() {
  return {
    title: "Campus Party 2025 | Portfolio DER",
    description:
      "Sistema integral de acreditaciones para Campus Party 2025. 5,000+ participantes gestionados durante 4 días consecutivos.",
  }
}
