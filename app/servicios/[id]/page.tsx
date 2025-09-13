import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, CheckCircle, Clock, MapPin, Users } from "lucide-react"
import { services } from "@/lib/data"
import { ServiceSchema } from "@/components/schema-org"
import CTASection from "@/components/cta-section"
import { getServiceFeaturedImage } from "@/lib/unsplash"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = services.find((service) => service.id === params.id)

  if (!service) {
    return {
      title: "Servicio no encontrado",
    }
  }

  return {
    title: `${service.title} | DER Eventos`,
    description: service.description,
    metadataBase: new URL("https://somosder.ar"),
    openGraph: {
      title: `${service.title} | DER Eventos`,
      description: service.description,
      type: "website",
      url: `https://somosder.ar/servicios/${params.id}`,
      siteName: "DER Eventos",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | DER Eventos`,
      description: service.description,
    },
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((service) => service.id === params.id)

  if (!service) {
    notFound()
  }

  const serviceDetails = {
    consultoria: {
      fullDescription:
        "Nuestra consultoría estratégica para eventos te ayuda a definir objetivos claros, identificar a tu audiencia ideal y diseñar experiencias memorables que generen resultados tangibles. Trabajamos contigo desde la conceptualización hasta la evaluación post-evento para asegurar que cada aspecto esté alineado con tus metas organizacionales.",
      benefits: [
        "Estrategia personalizada basada en tus objetivos específicos",
        "Optimización de presupuesto y recursos",
        "Identificación de oportunidades de innovación",
        "Medición de resultados con KPIs relevantes",
        "Recomendaciones basadas en datos para futuros eventos",
      ],
      process: [
        "Diagnóstico inicial y definición de objetivos",
        "Investigación de mercado y benchmarking",
        "Desarrollo de estrategia y concepto creativo",
        "Planificación detallada y asignación de recursos",
        "Implementación y supervisión",
        "Evaluación de resultados y recomendaciones",
      ],
      testimonial: {
        quote:
          "La consultoría de DER transformó nuestra visión en una estrategia clara y ejecutable. Su enfoque metódico nos ayudó a maximizar el impacto de nuestro evento corporativo anual.",
        author: "María Rodríguez",
        position: "Directora de Marketing, Empresa Multinacional",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["produccion", "marketing"],
    },
    produccion: {
      fullDescription:
        "Nuestro servicio de producción integral abarca todos los aspectos logísticos y operativos de tu evento. Desde la gestión de proveedores y coordinación de equipos hasta la supervisión en tiempo real durante el día del evento, nos encargamos de cada detalle para que puedas concentrarte en tus objetivos estratégicos y en la experiencia de tus invitados.",
      benefits: [
        "Gestión completa de todos los aspectos operativos",
        "Coordinación centralizada de proveedores",
        "Solución rápida de imprevistos",
        "Optimización de tiempos y recursos",
        "Supervisión profesional durante todo el evento",
      ],
      process: [
        "Planificación detallada y cronograma",
        "Selección y negociación con proveedores",
        "Gestión de permisos y requisitos legales",
        "Coordinación logística y operativa",
        "Supervisión durante el montaje y evento",
        "Desmontaje y evaluación post-evento",
      ],
      testimonial: {
        quote:
          "El equipo de producción de DER demostró un nivel de profesionalismo excepcional. Su capacidad para anticipar problemas y resolverlos antes de que afectaran el evento fue impresionante.",
        author: "Carlos Méndez",
        position: "Director de Eventos, Asociación Deportiva",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["logistica", "tecnologia"],
    },
    tecnologia: {
      fullDescription:
        "Implementamos soluciones tecnológicas innovadoras que elevan la experiencia de tu evento y facilitan la interacción con los asistentes. Desde sistemas de registro y acreditación hasta aplicaciones móviles personalizadas, plataformas de streaming y experiencias inmersivas, integramos la tecnología de forma estratégica para potenciar tus objetivos.",
      benefits: [
        "Experiencias interactivas y memorables",
        "Optimización de procesos y reducción de tiempos de espera",
        "Recopilación de datos valiosos en tiempo real",
        "Mayor engagement de los participantes",
        "Diferenciación frente a la competencia",
      ],
      process: [
        "Análisis de necesidades tecnológicas",
        "Diseño de solución personalizada",
        "Desarrollo e implementación",
        "Pruebas y optimización",
        "Soporte técnico durante el evento",
        "Análisis de datos y reportes post-evento",
      ],
      testimonial: {
        quote:
          "La aplicación móvil que DER desarrolló para nuestro congreso transformó la experiencia de los asistentes. La facilidad de navegación y las funcionalidades personalizadas recibieron comentarios extremadamente positivos.",
        author: "Laura Gómez",
        position: "Coordinadora de Innovación, Congreso Internacional",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["accesos", "marketing"],
    },
    marketing: {
      fullDescription:
        "Nuestras estrategias de marketing y creatividad para eventos están diseñadas para maximizar el impacto antes, durante y después de tu evento. Desarrollamos conceptos creativos únicos, estrategias de comunicación efectivas y campañas de promoción que generan expectativa, aumentan la asistencia y prolongan el impacto de tu evento en el tiempo.",
      benefits: [
        "Concepto creativo diferenciador",
        "Mayor visibilidad y alcance",
        "Aumento en la tasa de conversión y asistencia",
        "Experiencia de marca coherente y memorable",
        "Contenido de valor para redes sociales y medios",
      ],
      process: [
        "Análisis de marca y objetivos",
        "Desarrollo de concepto creativo",
        "Diseño de identidad visual del evento",
        "Planificación de estrategia de comunicación",
        "Implementación de campañas pre, durante y post evento",
        "Medición de resultados y ROI",
      ],
      testimonial: {
        quote:
          "La estrategia de marketing desarrollada por DER no solo aumentó nuestra asistencia en un 40%, sino que también generó un engagement sin precedentes en redes sociales, extendiendo el impacto de nuestro evento por semanas.",
        author: "Javier Torres",
        position: "Director de Comunicación, Empresa Tecnológica",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["consultoria", "tecnologia"],
    },
    deportes: {
      fullDescription:
        "Nuestra experiencia en gestión deportiva nos permite organizar eventos deportivos de cualquier escala y disciplina con los más altos estándares de calidad. Desde torneos corporativos hasta competencias internacionales, nos encargamos de todos los aspectos técnicos, logísticos y experienciales para garantizar el éxito de tu evento deportivo.",
      benefits: [
        "Conocimiento especializado en reglamentos y requisitos deportivos",
        "Gestión de atletas y delegaciones",
        "Coordinación con federaciones y organismos deportivos",
        "Experiencia en montaje de infraestructura deportiva temporal",
        "Soluciones tecnológicas específicas para eventos deportivos",
      ],
      process: [
        "Planificación técnica y deportiva",
        "Gestión de sedes y espacios deportivos",
        "Coordinación de arbitraje y oficiales técnicos",
        "Logística de participantes y equipamiento",
        "Producción de ceremonias y premiaciones",
        "Cobertura mediática especializada",
      ],
      testimonial: {
        quote:
          "DER demostró un conocimiento profundo de las necesidades específicas de nuestro torneo internacional. Su gestión impecable de los aspectos técnicos y la experiencia creada para los aficionados superó nuestras expectativas.",
        author: "Fernando Álvarez",
        position: "Director Deportivo, Federación Nacional",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["produccion", "logistica"],
    },
    logistica: {
      fullDescription:
        "Nuestra logística internacional para eventos te permite expandir tus horizontes y realizar eventos en múltiples países con la tranquilidad de contar con expertos en gestión transfronteriza. Nos encargamos de todos los aspectos logísticos internacionales, desde trámites aduaneros y transporte hasta adaptaciones culturales y cumplimiento normativo en cada país.",
      benefits: [
        "Gestión centralizada para eventos en múltiples países",
        "Conocimiento de regulaciones internacionales",
        "Red global de proveedores confiables",
        "Soluciones para transporte y alojamiento internacional",
        "Adaptación cultural y lingüística",
      ],
      process: [
        "Análisis de requerimientos internacionales",
        "Gestión de permisos y trámites aduaneros",
        "Coordinación de transporte internacional",
        "Adaptación de materiales y contenidos",
        "Gestión de equipos locales",
        "Supervisión y control de calidad global",
      ],
      testimonial: {
        quote:
          "La capacidad de DER para coordinar simultáneamente nuestro evento en 5 países diferentes fue extraordinaria. Su atención a los detalles culturales y logísticos específicos de cada ubicación fue clave para nuestro éxito global.",
        author: "Ana Martínez",
        position: "Directora de Expansión Internacional, Corporación Multinacional",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["produccion", "consultoria"],
    },
    accesos: {
      fullDescription:
        "Nuestras soluciones de control de accesos garantizan un proceso de ingreso fluido, seguro y eficiente para tus eventos. Implementamos tecnologías avanzadas como RFID, códigos QR, reconocimiento facial y sistemas biométricos, adaptados a las necesidades específicas de cada evento y con capacidad para gestionar desde pequeñas reuniones hasta grandes festivales con múltiples accesos.",
      benefits: [
        "Reducción de tiempos de espera y congestión",
        "Mayor seguridad y control de asistentes",
        "Datos en tiempo real sobre flujos y asistencia",
        "Prevención de accesos no autorizados",
        "Experiencia de usuario mejorada",
      ],
      process: [
        "Análisis de necesidades y flujos de acceso",
        "Diseño de solución personalizada",
        "Implementación de hardware y software",
        "Capacitación de personal",
        "Soporte técnico durante el evento",
        "Reportes y análisis post-evento",
      ],
      testimonial: {
        quote:
          "El sistema de acreditaciones implementado por DER procesó a más de 15,000 asistentes en nuestro festival sin ningún tipo de incidente o demora significativa. La tecnología fue robusta y el equipo de soporte, excepcional.",
        author: "Roberto Sánchez",
        position: "Director de Operaciones, Festival Internacional",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["tecnologia", "produccion"],
    },
    "venues-gestion": {
      fullDescription:
        "Nuestro servicio de gestión de venues te ayuda a encontrar y asegurar el espacio perfecto para tu evento. Con una amplia red de locaciones en múltiples ciudades y países, evaluamos tus necesidades específicas y te recomendamos las mejores opciones, negociamos en tu nombre y coordinamos todos los aspectos relacionados con el venue para garantizar que cumpla con todos tus requerimientos.",
      benefits: [
        "Acceso a venues exclusivos y no convencionales",
        "Ahorro de tiempo en búsqueda y negociación",
        "Mejores condiciones contractuales",
        "Evaluación técnica profesional de espacios",
        "Coordinación con proveedores del venue",
      ],
      process: [
        "Análisis de necesidades y requerimientos",
        "Búsqueda y preselección de opciones",
        "Visitas técnicas y evaluación",
        "Negociación de contratos y condiciones",
        "Coordinación con áreas operativas del venue",
        "Supervisión de cumplimiento de acuerdos",
      ],
      testimonial: {
        quote:
          "DER nos ayudó a descubrir un venue que nunca hubiéramos considerado por nuestra cuenta y que resultó perfecto para nuestro evento corporativo. Su conocimiento del mercado y capacidad de negociación nos ahorraron tiempo y recursos significativos.",
        author: "Diego Morales",
        position: "Gerente General, Empresa de Tecnología",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["consultoria", "produccion"],
    },
    cobertura: {
      fullDescription:
        "Nuestro servicio de cobertura fotográfica y videográfica captura profesionalmente cada momento clave de tu evento, creando un registro visual de alta calidad que extiende el impacto de tu evento mucho después de su finalización. Contamos con un equipo de fotógrafos y videógrafos especializados en eventos que saben exactamente cómo documentar cada instante importante, desde los grandes momentos hasta los pequeños detalles que hacen único a tu evento.",
      benefits: [
        "Equipo profesional con experiencia específica en eventos",
        "Equipamiento de última generación para cualquier condición",
        "Entrega rápida de material para uso inmediato en redes",
        "Edición profesional que resalta la esencia de tu evento",
        "Formatos adaptados a diferentes plataformas y necesidades",
        "Archivo organizado y accesible de todo el material",
      ],
      process: [
        "Briefing detallado para entender objetivos y momentos clave",
        "Planificación de cobertura y puntos estratégicos",
        "Coordinación con agenda y programa del evento",
        "Cobertura profesional durante todo el evento",
        "Edición y post-producción de material seleccionado",
        "Entrega de material en formatos optimizados",
      ],
      testimonial: {
        quote:
          "El equipo de cobertura de DER logró capturar la esencia de nuestro evento corporativo de una manera que superó todas nuestras expectativas. Las fotografías y el video resumen no solo documentaron el evento, sino que transmitieron perfectamente la emoción y el mensaje que queríamos comunicar.",
        author: "Valeria Gutiérrez",
        position: "Directora de Comunicación, Empresa Farmacéutica",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["marketing", "post-evento"],
    },
    gastronomia: {
      fullDescription:
        "Nuestras soluciones gastronómicas transforman la experiencia culinaria de tu evento en un elemento diferenciador y memorable. Diseñamos propuestas gastronómicas que van más allá de simplemente alimentar a los asistentes, creando experiencias sensoriales que complementan perfectamente el concepto y objetivos de tu evento. Trabajamos con chefs reconocidos y proveedores de primer nivel para ofrecer opciones innovadoras, de alta calidad y adaptadas a las necesidades específicas de cada tipo de evento.",
      benefits: [
        "Propuestas gastronómicas personalizadas según concepto del evento",
        "Opciones para todo tipo de requerimientos dietéticos y culturales",
        "Presentaciones innovadoras y experiencias interactivas",
        "Coordinación perfecta con la agenda del evento",
        "Control de calidad y seguridad alimentaria garantizados",
        "Optimización de presupuesto sin sacrificar calidad",
      ],
      process: [
        "Análisis de perfil de asistentes y tipo de evento",
        "Diseño de propuesta gastronómica conceptual",
        "Degustación y ajustes de menú",
        "Planificación logística y de servicio",
        "Implementación y supervisión durante el evento",
        "Evaluación post-evento y recomendaciones",
      ],
      testimonial: {
        quote:
          "La propuesta gastronómica que DER desarrolló para nuestra gala anual fue uno de los elementos más comentados por los asistentes. La combinación de sabores, presentación y servicio creó una experiencia culinaria que complementó perfectamente la elegancia del evento.",
        author: "Martín Acosta",
        position: "Presidente, Fundación Benéfica Internacional",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["produccion", "venues"],
    },
    "post-evento": {
      fullDescription:
        "Nuestro servicio de Post-Evento (Follow-up & ROI) te permite maximizar el impacto de tu inversión a través de un análisis exhaustivo de resultados y un seguimiento estratégico. Convertimos los datos recopilados durante el evento en insights accionables que demuestran el retorno de inversión y proporcionan una base sólida para la toma de decisiones futuras. Este servicio cierra el ciclo de tu evento, transformando la experiencia en aprendizajes valiosos y resultados tangibles para tu organización.",
      benefits: [
        "Demostración clara del ROI para stakeholders",
        "Identificación de fortalezas y áreas de mejora",
        "Datos objetivos para justificar futuras inversiones",
        "Comprensión profunda del comportamiento de los asistentes",
        "Optimización continua de estrategia de eventos",
        "Prolongación del impacto post-evento con acciones de seguimiento",
      ],
      process: [
        "Definición previa de KPIs y métricas de éxito",
        "Implementación de herramientas de medición durante el evento",
        "Recopilación y procesamiento de datos cuantitativos y cualitativos",
        "Análisis comparativo con benchmarks y eventos anteriores",
        "Elaboración de informes ejecutivos y presentaciones",
        "Recomendaciones estratégicas para futuros eventos",
      ],
      testimonial: {
        quote:
          "El análisis post-evento proporcionado por DER nos dio una visión completamente nueva de nuestro congreso anual. Los datos y recomendaciones nos permitieron demostrar un ROI de 320% a nuestro consejo directivo y mejorar significativamente la experiencia para la siguiente edición.",
        author: "Carolina Vega",
        position: "Directora de Eventos, Asociación Industrial",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["consultoria", "tecnologia"],
    },
    alianzas: {
      fullDescription:
        "Nuestro servicio de Alianzas Estratégicas y Representación Local está diseñado específicamente para empresas extranjeras que desean operar en Argentina sin las complicaciones legales, burocráticas y culturales que esto puede implicar. Actuamos como tu socio local, facilitando todos los aspectos operativos, legales y logísticos para que puedas concentrarte en los objetivos estratégicos de tu evento o proyecto. Nuestra experiencia y red de contactos te permiten superar barreras de entrada y operar con la misma eficiencia que una empresa local.",
      benefits: [
        "Reducción significativa de tiempos y costos operativos",
        "Minimización de riesgos legales y administrativos",
        "Acceso a red local de proveedores confiables y pre-verificados",
        "Conocimiento profundo del mercado y cultura local",
        "Representación permanente sin necesidad de establecer oficina propia",
        "Solución integral que cubre todos los aspectos de la operación",
      ],
      process: [
        "Análisis inicial de necesidades y objetivos",
        "Desarrollo de plan de implementación local",
        "Gestión de trámites legales y administrativos",
        "Selección y coordinación de proveedores locales",
        "Implementación y supervisión de operaciones",
        "Reportes periódicos y comunicación constante",
      ],
      testimonial: {
        quote:
          "Como empresa europea, enfrentábamos numerosos desafíos para operar en Argentina. DER no solo nos ayudó a navegar el complejo panorama regulatorio, sino que se convirtió en nuestro socio estratégico, permitiéndonos establecer una presencia sólida en el mercado latinoamericano en tiempo récord.",
        author: "Thomas Müller",
        position: "Director de Expansión, Compañía Europea de Eventos",
        image: "/placeholder.svg?height=100&width=100",
      },
      relatedServices: ["consultoria", "logistica"],
    },
  }

  const details = serviceDetails[service.id as keyof typeof serviceDetails]

  if (!details) {
    notFound()
  }

  const relatedServicesList = details.relatedServices.map((id) => services.find((s) => s.id === id)).filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-12 font-sans">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/servicios" className="hover:text-primary">
          Servicios
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">{service.title}</span>
      </div>

      {/* Hero Section */}
      <section className="relative mb-12 -mx-4 md:-mx-8 lg:-mx-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
        <div className="relative h-[50vh] md:h-[60vh]">
          <img
            src={getServiceFeaturedImage(service.id) || "/placeholder.svg"}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-white text-opacity-90 text-lg md:text-xl max-w-2xl mb-6">{service.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary bg-white rounded-full p-1 h-6 w-6" />
                  <span className="text-white text-sm">Respuesta en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary bg-white rounded-full p-1 h-6 w-6" />
                  <span className="text-white text-sm">Nacional e Internacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary bg-white rounded-full p-1 h-6 w-6" />
                  <span className="text-white text-sm">Eventos de cualquier tamaño</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary bg-white rounded-full p-1 h-6 w-6" />
                  <span className="text-white text-sm">Disponibilidad inmediata</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Descripción Detallada</h2>
          <p className="text-lg text-gray-700 mb-10">{details.fullDescription}</p>

          <h2 className="text-3xl font-bold mb-6">Nuestro Proceso</h2>
          <div className="space-y-6 mb-10">
            {details.process.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6">Beneficios</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {details.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Servicios Relacionados</h3>
            <div className="space-y-4 mb-8">
              {relatedServicesList.map(
                (relatedService) =>
                  relatedService && (
                    <Link
                      key={relatedService.id}
                      href={`/servicios/${relatedService.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <span className="text-xl font-bold">{relatedService.title.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{relatedService.title}</h4>
                      </div>
                    </Link>
                  ),
              )}
            </div>

            <h3 className="text-xl font-semibold mb-4">¿Por qué elegir nuestro servicio?</h3>
            <ul className="space-y-3 mb-8">
              {details.benefits.slice(0, 5).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-primary h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">¿Necesitas más información?</h3>
            <div className="space-y-3 mb-6">
              <Link href="/contacto" className="flex items-center gap-2 text-primary hover:underline">
                <span>Contactar a un especialista</span>
              </Link>
              <Link href="/recursos" className="flex items-center gap-2 text-primary hover:underline">
                <span>Descargar recursos</span>
              </Link>
              <Link href="/portfolio" className="flex items-center gap-2 text-primary hover:underline">
                <span>Ver Casos de Exito en nuestro Portfolio</span>
              </Link>
            </div>

            <Link
              href="/cotizador"
              className="block w-full bg-primary hover:bg-primary/90 text-white text-center px-6 py-3 rounded-lg font-medium"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para llevar tu evento al siguiente nivel?"
        subtitle="Nuestros especialistas están listos para ayudarte a diseñar un evento que supere tus expectativas."
        primaryButtonText="Solicitar Cotización"
        primaryButtonLink="/cotizador"
        secondaryButtonText="Contactar Especialista"
        secondaryButtonLink="/contacto"
        variant="gradient"
      />

      {/* Service Schema */}
      <ServiceSchema
        service={{
          name: service.title,
          description: service.description,
          type: "Event Management",
        }}
      />
    </div>
  )
}
