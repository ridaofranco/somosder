import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Clock, Briefcase, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Trabaja con Nosotros | DER - Soluciones Integrales para Eventos",
  description: "Únete a nuestro equipo de profesionales apasionados por crear experiencias memorables.",
}

export default function TrabajaConNosotrosPage() {
  const openPositions = [
    {
      id: "project-manager",
      title: "Project Manager",
      department: "Producción",
      location: "Buenos Aires, Argentina",
      type: "Tiempo completo",
      experience: "3+ años",
      description:
        "Buscamos un Project Manager con experiencia en gestión de eventos corporativos y deportivos para liderar equipos multidisciplinarios y coordinar proyectos de alta complejidad.",
      responsibilities: [
        "Liderar la planificación, ejecución y evaluación de proyectos",
        "Gestionar presupuestos y cronogramas",
        "Coordinar equipos internos y proveedores externos",
        "Asegurar el cumplimiento de objetivos y KPIs",
        "Mantener comunicación efectiva con clientes",
      ],
      requirements: [
        "Experiencia demostrable en gestión de eventos",
        "Excelentes habilidades de comunicación y liderazgo",
        "Capacidad para trabajar bajo presión y resolver problemas",
        "Conocimientos de herramientas de gestión de proyectos",
        "Disponibilidad para viajar",
      ],
    },
    {
      id: "tech-developer",
      title: "Desarrollador de Soluciones Tecnológicas",
      department: "Tecnología",
      location: "Buenos Aires, Argentina",
      type: "Tiempo completo",
      experience: "2+ años",
      description:
        "Buscamos un desarrollador con experiencia en creación de aplicaciones móviles y soluciones tecnológicas para eventos, con enfoque en experiencia de usuario y funcionalidades innovadoras.",
      responsibilities: [
        "Desarrollar aplicaciones móviles para eventos",
        "Implementar soluciones de acreditación y control de accesos",
        "Crear experiencias interactivas y activaciones digitales",
        "Mantener y mejorar plataformas existentes",
        "Colaborar con el equipo de diseño y producción",
      ],
      requirements: [
        "Experiencia en desarrollo móvil (React Native, Flutter)",
        "Conocimientos de backend (Node.js, Python)",
        "Familiaridad con tecnologías web (HTML, CSS, JavaScript)",
        "Experiencia con bases de datos y APIs",
        "Interés en tecnologías emergentes (AR, VR, IoT)",
      ],
    },
    {
      id: "account-executive",
      title: "Ejecutivo de Cuentas",
      department: "Comercial",
      location: "Buenos Aires, Argentina",
      type: "Tiempo completo",
      experience: "2+ años",
      description:
        "Buscamos un Ejecutivo de Cuentas con experiencia en ventas B2B para desarrollar relaciones comerciales con clientes corporativos y gestionar cuentas clave en el sector de eventos.",
      responsibilities: [
        "Identificar y captar nuevos clientes potenciales",
        "Desarrollar propuestas comerciales personalizadas",
        "Gestionar y fidelizar cuentas existentes",
        "Alcanzar objetivos de ventas trimestrales",
        "Representar a la empresa en eventos y networking",
      ],
      requirements: [
        "Experiencia en ventas B2B, preferiblemente en el sector de eventos",
        "Excelentes habilidades de negociación y comunicación",
        "Orientación a resultados y capacidad analítica",
        "Conocimiento del mercado de eventos corporativos",
        "Cartera de contactos en el sector (valorado)",
      ],
    },
    {
      id: "creative-designer",
      title: "Diseñador Creativo",
      department: "Creatividad y Marketing",
      location: "Buenos Aires, Argentina",
      type: "Tiempo completo",
      experience: "2+ años",
      description:
        "Buscamos un Diseñador Creativo con experiencia en diseño de experiencias para eventos, branding y comunicación visual para desarrollar conceptos innovadores y materiales de alta calidad.",
      responsibilities: [
        "Crear conceptos creativos para eventos y experiencias",
        "Diseñar materiales gráficos para eventos y campañas",
        "Desarrollar identidades visuales y branding",
        "Colaborar con equipos de producción y tecnología",
        "Presentar propuestas creativas a clientes",
      ],
      requirements: [
        "Experiencia en diseño gráfico y comunicación visual",
        "Dominio de herramientas de diseño (Adobe Creative Suite)",
        "Portfolio que demuestre creatividad y versatilidad",
        "Conocimientos de diseño para entornos físicos y digitales",
        "Capacidad para trabajar en equipo y bajo deadlines",
      ],
    },
  ]

  const benefits = [
    {
      title: "Desarrollo Profesional",
      description:
        "Oportunidades de crecimiento, capacitación continua y participación en proyectos desafiantes con marcas líderes.",
      icon: <Briefcase className="h-10 w-10 text-orange-500 mb-4" />,
    },
    {
      title: "Ambiente Innovador",
      description:
        "Cultura de trabajo que fomenta la creatividad, la innovación y el pensamiento disruptivo en cada proyecto.",
      icon: <Users className="h-10 w-10 text-orange-500 mb-4" />,
    },
    {
      title: "Flexibilidad",
      description: "Modalidades de trabajo híbrido, horarios flexibles y balance entre vida personal y profesional.",
      icon: <Clock className="h-10 w-10 text-orange-500 mb-4" />,
    },
    {
      title: "Proyección Internacional",
      description: "Posibilidad de participar en proyectos internacionales y colaborar con equipos globales.",
      icon: <MapPin className="h-10 w-10 text-orange-500 mb-4" />,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10" />
        <div className="relative h-[60vh] md:h-[70vh]">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Trabaja+con+Nosotros"
            alt="Trabaja con Nosotros"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Trabaja con <span className="text-orange-500">Nosotros</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Únete a nuestro equipo de profesionales apasionados por crear experiencias memorables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#vacantes">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Ver Vacantes Disponibles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100 section-lighter">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Somos un equipo <span className="text-orange-500">apasionado</span>
              </h2>
              <p className="text-gray-700 dark:text-slate-300 mb-6">
                En DER creemos que las grandes experiencias son creadas por grandes equipos. Somos un grupo diverso de
                profesionales unidos por la pasión por los eventos y el compromiso con la excelencia.
              </p>
              <p className="text-gray-700 dark:text-slate-300 mb-8">
                Valoramos la creatividad, la innovación y el trabajo colaborativo. Cada miembro de nuestro equipo aporta
                una perspectiva única y habilidades especializadas que nos permiten ofrecer soluciones integrales y de
                alta calidad para nuestros clientes.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Nuestros valores:</h3>
                <ul className="space-y-3">
                  {[
                    "Excelencia en cada detalle",
                    "Innovación constante",
                    "Trabajo en equipo y colaboración",
                    "Compromiso con los resultados",
                    "Adaptabilidad y resiliencia",
                    "Pasión por crear experiencias memorables",
                  ].map((valor, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-orange-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-slate-300">{valor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800&text=Equipo+DER"
                alt="Equipo DER"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Beneficios de Trabajar con Nosotros
            </h2>
            <p className="text-gray-700 dark:text-slate-300">
              Ofrecemos un entorno de trabajo estimulante con oportunidades de crecimiento y desarrollo profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-300 p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="mb-2">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-700 dark:text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="vacantes" className="py-16 md:py-24 bg-white dark:bg-dark-100 section-lighter">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Vacantes Disponibles
          </h2>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-secondary dark:bg-dark-300 rounded-lg overflow-hidden shadow-md">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Briefcase className="h-4 w-4 mr-1" /> {position.department}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" /> {position.location}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-1" /> {position.type}
                        </span>
                      </div>
                    </div>
                    <Link href={`/trabaja-con-nosotros/${position.id}`}>
                      <Button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white">
                        Aplicar Ahora
                      </Button>
                    </Link>
                  </div>
                  <p className="text-gray-700 dark:text-slate-300 mb-6">{position.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsabilidades</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-slate-300 text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Requisitos</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-slate-300 text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proceso de Selección</h2>
            <p className="text-gray-700 dark:text-slate-300">
              Conoce los pasos de nuestro proceso de selección diseñado para encontrar a los mejores talentos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Aplicación",
                description:
                  "Envía tu CV y carta de presentación a través de nuestro formulario online, indicando la posición a la que aplicas.",
              },
              {
                step: "02",
                title: "Preselección",
                description:
                  "Nuestro equipo de RRHH revisará tu aplicación y te contactará para una entrevista inicial si tu perfil se ajusta a la posición.",
              },
              {
                step: "03",
                title: "Entrevistas",
                description:
                  "Participarás en entrevistas con el equipo de RRHH y los líderes del área a la que aplicas para evaluar tus habilidades y experiencia.",
              },
              {
                step: "04",
                title: "Desafío Práctico",
                description:
                  "Dependiendo de la posición, podrás participar en un desafío práctico para demostrar tus habilidades en situaciones reales.",
              },
              {
                step: "05",
                title: "Entrevista Final",
                description:
                  "Los candidatos finalistas tendrán una entrevista con la dirección para evaluar su alineación con la cultura y valores de la empresa.",
              },
              {
                step: "06",
                title: "Oferta",
                description:
                  "Si eres seleccionado, recibirás una oferta formal detallando las condiciones laborales y beneficios.",
              },
              {
                step: "07",
                title: "Onboarding",
                description:
                  "Una vez aceptada la oferta, iniciarás un proceso de onboarding para integrarte rápidamente al equipo y conocer nuestros procesos.",
              },
              {
                step: "08",
                title: "Seguimiento",
                description:
                  "Durante tus primeros meses, tendrás reuniones de seguimiento para asegurar tu adaptación y desarrollo en el rol.",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white dark:bg-dark-300 p-6 rounded-lg shadow-md">
                <div className="text-orange-500 text-3xl font-bold mb-2">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-700 dark:text-slate-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿No encuentras la posición adecuada?</h2>
            <p className="text-white text-opacity-90 mb-8">
              Siempre estamos buscando talentos excepcionales. Envíanos tu CV y cuéntanos por qué te gustaría formar
              parte de nuestro equipo.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
