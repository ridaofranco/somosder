import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight, Zap, Shield } from "lucide-react"

export default function ShellCorporatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
            alt="Shell Corporate - DER"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <span className="inline-block bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                Corporativo
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Shell Corporate</h1>
              <p className="text-white text-opacity-90 text-lg md:text-xl max-w-2xl">
                Sistema Face ID para evento corporativo con 1,500 socios estratégicos
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
                Evento corporativo de Shell con tecnología biométrica Face ID para 1,500 socios estratégicos.
                Implementamos la tecnología más avanzada para garantizar seguridad y experiencia premium.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">El Desafío</h3>
              <p className="text-gray-700 dark:text-slate-300 mb-8">
                Crear un sistema de acceso ultramoderno que reflejara la innovación de Shell, con tecnología biométrica
                que garantizara máxima seguridad y una experiencia futurista para los asistentes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Solución</h3>
              <p className="text-gray-700 dark:text-slate-300 mb-8">
                Desarrollamos un sistema Face ID personalizado con reconocimiento facial instantáneo, base de datos
                encriptada y validación en tiempo real para cada uno de los 1,500 participantes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Resultados</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-slate-300 mb-8">
                <li>1,500 socios acreditados con Face ID</li>
                <li>99.8% de precisión en reconocimiento facial</li>
                <li>Tiempo promedio de acceso: 2 segundos</li>
                <li>0 falsos positivos o negativos</li>
                <li>Experiencia premium reconocida por Shell</li>
              </ul>

              {/* Testimonial */}
              <div className="bg-gray-50 dark:bg-dark-200 p-6 rounded-lg mt-8">
                <blockquote className="text-lg italic text-gray-700 dark:text-slate-300 mb-4">
                  "La tecnología Face ID de DER superó nuestras expectativas. Nuestros socios quedaron impresionados con
                  la innovación y eficiencia."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Equipo Shell Argentina</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Eventos Corporativos</p>
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
                      <p className="text-gray-700 dark:text-slate-300">Abril 2023</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Ubicación</p>
                      <p className="text-gray-700 dark:text-slate-300">Buenos Aires, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Asistentes</p>
                      <p className="text-gray-700 dark:text-slate-300">1,500 socios</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Tecnología</p>
                      <p className="text-gray-700 dark:text-slate-300">Face ID Biométrico</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Precisión</p>
                      <p className="text-gray-700 dark:text-slate-300">99.8%</p>
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
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/SHELL_1_1_ngqjjh.png"
                alt="Shell Corporate - Imagen 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908990/Captura_de_pantalla_2024-05-10_153233_mlh6y3.png"
                alt="Shell Corporate - Imagen 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908992/SHELL_2_hyjial.png"
                alt="Shell Corporate - Imagen 3"
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
    title: "Shell Corporate | Portfolio DER",
    description:
      "Sistema Face ID para evento corporativo Shell con 1,500 socios estratégicos. Tecnología biométrica de vanguardia.",
  }
}
