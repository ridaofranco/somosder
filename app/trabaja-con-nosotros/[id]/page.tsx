import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, MapPin, Clock, Calendar, CheckCircle, ArrowRight } from "lucide-react"

interface JobDetailParams {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: JobDetailParams): Promise<Metadata> {
  // En un caso real, buscaríamos el trabajo por su ID y generaríamos metadatos dinámicos
  // Aquí solo simulamos esto con metadatos estáticos
  return {
    title: "Project Manager | Trabaja con Nosotros | DER",
    description: "Únete a nuestro equipo como Project Manager y lidera proyectos de eventos innovadores y desafiantes.",
  }
}

export default function JobDetailPage({ params }: JobDetailParams) {
  // En un caso real, aquí buscaríamos el trabajo por su ID en una base de datos
  // Para este ejemplo, usamos un contenido estático
  const job = {
    id: params.id,
    title: "Project Manager",
    department: "Producción",
    location: "Buenos Aires, Argentina",
    type: "Tiempo completo",
    experience: "3+ años",
    salary: "Competitivo",
    posted: "15 de abril, 2025",
    deadline: "15 de mayo, 2025",
    description:
      "Buscamos un Project Manager con experiencia en gestión de eventos corporativos y deportivos para liderar equipos multidisciplinarios y coordinar proyectos de alta complejidad.",
    about:
      "Como Project Manager en DER, serás responsable de liderar la planificación, ejecución y evaluación de proyectos de eventos, asegurando que se cumplan los objetivos, plazos y presupuestos establecidos. Trabajarás con un equipo talentoso y multidisciplinario, coordinando diferentes áreas y proveedores para entregar experiencias excepcionales a nuestros clientes.",
    responsibilities: [
      "Liderar la planificación, ejecución y evaluación de proyectos de eventos",
      "Gestionar presupuestos, cronogramas y recursos",
      "Coordinar equipos internos y proveedores externos",
      "Asegurar el cumplimiento de objetivos y KPIs",
      "Mantener comunicación efectiva con clientes",
      "Identificar y mitigar riesgos potenciales",
      "Desarrollar y presentar propuestas a clientes",
      "Supervisar la calidad de todos los entregables",
    ],
    requirements: [
      "Experiencia demostrable (3+ años) en gestión de eventos",
      "Excelentes habilidades de comunicación y liderazgo",
      "Capacidad para trabajar bajo presión y resolver problemas",
      "Conocimientos de herramientas de gestión de proyectos",
      "Disponibilidad para viajar",
      "Inglés avanzado (oral y escrito)",
      "Título universitario en áreas relevantes",
      "Experiencia en manejo de presupuestos",
    ],
    benefits: [
      "Salario competitivo",
      "Bonos por desempeño",
      "Desarrollo profesional continuo",
      "Ambiente de trabajo dinámico e innovador",
      "Posibilidad de trabajar en proyectos internacionales",
      "Horario flexible y modalidad híbrida",
      "Seguro médico privado",
      "Descuentos en gimnasios y actividades recreativas",
    ],
    image: "/placeholder.svg?height=600&width=1200&text=Project+Manager",
  }

  return (
    <>
      {/* Header */}
      <div className="bg-secondary dark:bg-dark-200 section-light py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Link
            href="/trabaja-con-nosotros"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-500 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a vacantes
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {job.department}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {job.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="flex items-center text-gray-700 dark:text-slate-300 mb-1">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm font-medium">Ubicación</span>
                </div>
                <p className="text-gray-900 dark:text-white">{job.location}*</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">*Modalidad híbrida disponible</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 dark:text-slate-300 mb-1">
                  <Clock className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm font-medium">Tipo</span>
                </div>
                <p className="text-gray-900 dark:text-white">{job.type}</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 dark:text-slate-300 mb-1">
                  <Briefcase className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm font-medium">Experiencia</span>
                </div>
                <p className="text-gray-900 dark:text-white">{job.experience}</p>
              </div>
              <div>
                <div className="flex items-center text-gray-700 dark:text-slate-300 mb-1">
                  <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm font-medium">Fecha límite</span>
                </div>
                <p className="text-gray-900 dark:text-white">{job.deadline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <Image src={job.image || "/placeholder.svg"} alt={job.title} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100 section-lighter">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Descripción</h2>
                  <p className="text-gray-700 dark:text-slate-300 mb-6">{job.description}</p>
                  <p className="text-gray-700 dark:text-slate-300">{job.about}</p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Responsabilidades
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-orange-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-slate-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Requisitos</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-orange-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-slate-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Beneficios</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-orange-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary dark:bg-dark-300 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proceso de Selección</h2>
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Aplicación</h3>
                        <p className="text-gray-700 dark:text-slate-300">
                          Envía tu CV y carta de presentación a través de nuestro formulario online.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Entrevista Inicial</h3>
                        <p className="text-gray-700 dark:text-slate-300">
                          Conversación telefónica o por videollamada con nuestro equipo de RRHH.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Entrevista Técnica</h3>
                        <p className="text-gray-700 dark:text-slate-300">
                          Evaluación de habilidades técnicas y experiencia con el líder del área.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Caso Práctico</h3>
                        <p className="text-gray-700 dark:text-slate-300">
                          Resolución de un caso real para evaluar tu enfoque y habilidades de resolución de problemas.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Entrevista Final</h3>
                        <p className="text-gray-700 dark:text-slate-300">
                          Conversación con la dirección para evaluar fit cultural y alineación con valores.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-secondary dark:bg-dark-300 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Aplicar al Puesto</h3>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                      >
                        Nombre Completo*
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        className="w-full p-3 rounded bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-700 dark:text-white"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-700 dark:text-white"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                      >
                        Teléfono*
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        className="w-full p-3 rounded bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-700 dark:text-white"
                        placeholder="+54 9 11 1234-5678"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cv" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                        Curriculum Vitae (PDF)*
                      </label>
                      <input
                        type="file"
                        id="cv"
                        accept=".pdf"
                        className="w-full p-3 rounded bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="carta"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                      >
                        Carta de Presentación
                      </label>
                      <textarea
                        id="carta"
                        rows={4}
                        className="w-full p-3 rounded bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-700 dark:text-white"
                        placeholder="Cuéntanos por qué te interesa este puesto y por qué eres el candidato ideal"
                      ></textarea>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" id="privacidad" className="mt-1 mr-2" required />
                      <label htmlFor="privacidad" className="text-xs text-gray-700 dark:text-slate-300">
                        Acepto la{" "}
                        <Link href="/privacidad" className="text-orange-500 hover:underline">
                          política de privacidad
                        </Link>{" "}
                        y el tratamiento de mis datos personales para el proceso de selección.
                      </label>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Enviar Aplicación</Button>
                  </form>
                </div>

                <div className="bg-secondary dark:bg-dark-300 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Compartir Vacante</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Email
                    </Button>
                  </div>
                </div>

                <div className="bg-orange-500 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">¿Preguntas?</h3>
                  <p className="mb-4">Si tienes dudas sobre esta posición o el proceso de selección, contáctanos:</p>
                  <p className="mb-2">
                    <strong>Email:</strong> careers@der.com.ar
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +54 11 1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Jobs */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Otras Vacantes que Podrían Interesarte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "tech-developer",
                title: "Desarrollador de Soluciones Tecnológicas",
                department: "Tecnología",
                location: "Buenos Aires, Argentina",
                type: "Tiempo completo",
              },
              {
                id: "account-executive",
                title: "Ejecutivo de Cuentas",
                department: "Comercial",
                location: "Buenos Aires, Argentina",
                type: "Tiempo completo",
              },
              {
                id: "creative-designer",
                title: "Diseñador Creativo",
                department: "Creatividad y Marketing",
                location: "Buenos Aires, Argentina",
                type: "Tiempo completo",
              },
            ].map((job, index) => (
              <Link
                key={index}
                href={`/trabaja-con-nosotros/${job.id}`}
                className="bg-white dark:bg-dark-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  {job.department}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-orange-500 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center text-gray-700 dark:text-slate-300 mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-slate-300">
                  <Clock className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-sm">{job.type}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/trabaja-con-nosotros">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Ver Todas las Vacantes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
