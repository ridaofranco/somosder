import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import OptimizedImage from "@/components/optimized-image"

// Mejorar la función findProject
function findProject(slug) {
  try {
    const project = projects.find((p) => p.id === slug)
    if (!project) {
      console.error(`Project with slug "${slug}" not found`)
      return null
    }
    return project
  } catch (error) {
    console.error("Error finding project:", error)
    return null
  }
}

// En el componente principal, agregar validación adicional
export default function ProjectPage({ params }) {
  try {
    const project = findProject(params.slug)

    if (!project) {
      notFound()
    }

    // Verificar que el proyecto tiene las propiedades necesarias
    if (!project.title || !project.description) {
      console.error("Project missing required properties:", project)
      notFound()
    }

    return (
      <>
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
          <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
            <HeroImage slug={params.slug} project={project} />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <span className="inline-block bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {Array.isArray(project.category) ? project.category[0] : project.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
                <p className="text-white text-opacity-90 text-lg md:text-xl max-w-2xl">{project.description}</p>
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
                <p className="text-gray-700 dark:text-slate-300 mb-8 text-lg leading-relaxed">{project.content}</p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">El Desafío</h3>
                <p className="text-gray-700 dark:text-slate-300 mb-8">{project.challenge}</p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Solución</h3>
                <p className="text-gray-700 dark:text-slate-300 mb-8">{project.solution}</p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Resultados</h3>
                <ResultsList results={project.results} />

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-gray-50 dark:bg-dark-200 p-6 rounded-lg mt-8">
                    <blockquote className="text-lg italic text-gray-700 dark:text-slate-300 mb-4">
                      "{project.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.testimonial.author}</p>
                        <p className="text-sm text-gray-600 dark:text-slate-400">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-100 dark:bg-dark-300 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Detalles del Proyecto</h3>

                  <div className="space-y-4">
                    <DetailItem
                      icon={<Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />}
                      label="Fecha"
                      value={project.date}
                    />

                    <DetailItem
                      icon={<MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />}
                      label="Ubicación"
                      value={project.location}
                    />

                    <DetailItem
                      icon={<Users className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />}
                      label="Asistentes"
                      value={project.attendees}
                    />

                    <AdditionalDetails details={project.details} />
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
              <GalleryImages slug={params.slug} project={project} />
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 bg-white dark:bg-dark-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Proyectos Relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RelatedProjects currentProject={project} />
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
  } catch (error) {
    console.error("Error in ProjectPage:", error)
    notFound()
  }
}

// Componente para la imagen hero
function HeroImage({ slug, project }) {
  // NUEVA CONDICIÓN PARA SLUG === "0"
  if (slug === "0") {
    return (
      <Image
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635618/Imagen_de_WhatsApp_2025-01-23_a_las_13.37.28_7d29a749-2_cyzebc.jpg"
        alt="MIRGOR - MIRONA - DER"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
    )
  }

  // Anuel AA hero image
  if (slug === "anuel-aa") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634834/IMG-20241106-WA0002_szh6a9.jpg"
        alt="ANUEL-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  // Myke Towers hero image
  if (slug === "myke-towers") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634834/IMG-20241030-WA0159_gw0gda.jpg"
        alt="Myke Towers - DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  if (slug === "gastronomia-trap") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747799115/Imagen_de_WhatsApp_2025-05-16_a_las_12.46.05_3f53ba85_p44ieh.jpg"
        alt="BUENOSAIRESTRAP-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  // Campus Party 2025 hero image
  if (slug === "campus-party-2025") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1748914600/IMG-20250529-WA0007_fs7wt9.jpg"
        alt="CAMPUSPARTY-2025-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  if (slug === "camondo-wwr") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747826156/IMG_4354_rz7xrv.jpg"
        alt="CAMONDO-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  if (slug === "leyendas-mexico") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635385/14-IMG_0544_ydcxsn.jpg"
        alt="Leyendaddemexico-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  if (slug === "shell-corporate") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/image_4_wgq5eo.png"
        alt="SHELL-CORPORATE-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  // ACA CENARD hero image
  if (slug === "aca-cenard") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634959/IMG_3025_kpld55.jpg"
        alt="ACA-CENARD-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  if (slug === "expo-autos-cenard") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746634959/IMG_3025_kpld55.jpg"
        alt="Expo Autos CeNARD - DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  // MIRGOR/La Mirona hero image
  if (slug === "la-mirona") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746635618/Imagen_de_WhatsApp_2025-01-23_a_las_13.37.28_7d29a749-2_cyzebc.jpg"
        alt="MIRGOR - La Mirona - DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  if (slug === "saint-mary") {
    return (
      <img
        src="https://res.cloudinary.com/dtuh208kh/image/upload/v1746636992/476-IMG_2915_zgzlzc.jpg"
        alt="SAINTMARY-DER"
        className="w-full h-full object-cover object-center"
      />
    )
  }

  return (
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      fill
      className="object-cover object-center w-full h-full"
      priority
    />
  )
}

// Componente para la lista de resultados
function ResultsList({ results }) {
  if (!results) return null
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-slate-300 mb-8">
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  )
}

// Componente para un ítem de detalle
function DetailItem({ icon, label, value }) {
  // Special cases for specific projects
  let displayValue = value

  if (label === "Fecha") {
    if (value === "Abril 2023") {
      displayValue = "Mayo 2024"
    } else if (value === "Nov - Dic 2024") {
      displayValue = "Noviembre - Diciembre 2024"
    }
  }

  return (
    <div className="flex items-start">
      {icon}
      <div>
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        <p className="text-gray-700 dark:text-slate-300">{displayValue}</p>
      </div>
    </div>
  )
}

// Componente para detalles adicionales
function AdditionalDetails({ details }) {
  if (!details) return null

  const items = []

  for (const key in details) {
    if (key !== "date" && key !== "location" && key !== "attendance") {
      items.push(
        <div key={key} className="flex items-start">
          <div className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <p className="text-gray-700 dark:text-slate-300">{details[key]}</p>
          </div>
        </div>,
      )
    }
  }

  return <>{items}</>
}

// Componente para imágenes de galería
function GalleryImages({ slug, project }) {
  if (!project.gallery) return null

  const images = []

  for (let i = 0; i < project.gallery.length; i++) {
    let imageUrl = ""
    let imageAlt = `${project.title} - Imagen ${i + 1}`

    // Anuel AA project images
    if (slug === "anuel-aa") {
      if (i === 0) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/v1746634824/Imagen_de_WhatsApp_2024-11-19_a_las_16.04.19_9bf0b583_bng42t.jpg"
        imageAlt = "Anuel AA - Imagen 1"
      } else if (i === 1) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/v1746634823/Imagen_de_WhatsApp_2024-11-18_a_las_21.59.15_51a2bc44_mfk8sf.jpg"
        imageAlt = "Anuel AA - Imagen 2"
      } else if (i === 2) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/Imagen_de_WhatsApp_2024-11-19_a_las_16.04.19_37469001_o3guwa.jpg"
        imageAlt = "Anuel AA - Imagen 3"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Myke Towers project images
    else if (slug === "myke-towers") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG-20241030-WA0155_pimwo6.jpg"
        imageAlt = "Myke Towers - Imagen 1"
      } else if (i === 1) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/Imagen_de_WhatsApp_2024-11-19_a_las_16.04.19_36c1665a_ryoyoc.jpg"
        imageAlt = "Myke Towers - Imagen 2"
      } else if (i === 2) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/Imagen_de_WhatsApp_2024-11-19_a_las_16.04.19_37469001_o3guwa.jpg"
        imageAlt = "Myke Towers - Imagen 3"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Festival Gastronomico project images
    else if (slug === "festival-gastronomico") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG_3165_e8w6sh.jpg"
        imageAlt = "Festival Gastronómico - Imagen 1"
      } else if (i === 1) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG_3215_hx7ckj.jpg"
        imageAlt = "Festival Gastronómico - Imagen 2"
      } else if (i === 2) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG_3150_cf99bw.jpg"
        imageAlt = "Festival Gastronómico - Imagen 3"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Mirgor project images
    else if (slug === "migor") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1746643088/IMG_2252_q4ynah.jpg"
        imageAlt = "Mirgor - Imagen 1"
      } else if (i === 1) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1746643088/IMG_2275_dmcpit.jpg"
        imageAlt = "Mirgor - Imagen 2"
      } else if (i === 2) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/v1746635744/Imagen_de_WhatsApp_2024-11-16_a_las_22.26.37_db426548_ebhmef.jpg"
        imageAlt = "Mirgor - Imagen Imagen 3"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Shell project images
    else if (slug === "shell-corporate") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1747908987/SHELL_1_1_ngqjjh.png"
        imageAlt = "Shell Corporate - Imagen 1"
      } else if (i === 1) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/v1747908990/Captura_de_pantalla_2024-05-10_153233_mlh6y3.png"
        imageAlt = "Shell Corporate - Imagen 2"
      } else if (i === 2) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1747908992/SHELL_2_hyjial.png"
        imageAlt = "Shell Corporate - Imagen 3"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Leyendas de Mexico project images
    else if (slug === "leyendas-mexico" && i === 2) {
      imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1746635392/7-IMG_0563_im3odb.jpg"
      imageAlt = "LEYENDASDEMEXICO-DER"
    }
    // Saint Mary project images
    else if (slug === "saint-mary") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1746637002/54-IMG_1712_markwy.jpg"
        imageAlt = "saintmaryofthehills-DER"
      } else if (i === 1) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1746636950/421-IMG_2738_qa9j7z.jpg"
        imageAlt = "saintmaryofthehills-DER"
      } else if (i === 2) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1746636884/338-IMG_2452_tdtg28.jpg"
        imageAlt = "saintmaryofthehills-DER"
      } else {
        imageUrl = project.gallery[i] || "/placeholder.svg"
      }
    }
    // Gastronomia Trap project images
    else if (slug === "gastronomia-trap") {
      let adjustedIndex = i
      if (i === 1) adjustedIndex = 2
      else if (i === 2) adjustedIndex = 1

      imageUrl = project.gallery[adjustedIndex] || "/placeholder.svg"
    }
    // Expo Autos CeNARD project images
    else if (slug === "expo-autos-cenard") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG_3165_e8w6sh.jpg"
        imageAlt = "Expo Autos CeNARD - Imagen 1"
      } else if (i === 1) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG_3215_hx7ckj.jpg"
        imageAlt = "Expo Autos CeNARD - Imagen 2"
      } else if (i === 2) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/IMG_3150_cf99bw.jpg"
        imageAlt = "Expo Autos CeNARD - Imagen 3"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Campus Party 2025 project images
    else if (slug === "campus-party-2025") {
      if (i === 0) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1748914192/IMG_4520_vs47oq.jpg"
        imageAlt = "CAMPUSPARTY-DER"
      } else if (i === 1) {
        imageUrl = "https://res.cloudinary.com/dtuh208kh/image/upload/v1748914608/IMG-20250529-WA0040_cap8rw.jpg"
        imageAlt = "Campus Party 2025 - Imagen 2"
      } else if (i === 2) {
        imageUrl =
          "https://res.cloudinary.com/dtuh208kh/image/upload/v1748914189/Imagen_de_WhatsApp_2025-05-30_a_las_15.49.06_0c2c60d7_l5rli7.jpg"
        imageAlt = "CAMPUSPARTY-DER"
      } else {
        imageUrl = "/placeholder.svg"
      }
    }
    // Default: use the image from project data
    else {
      imageUrl = project.gallery[i] || "/placeholder.svg"
    }

    images.push(
      <div key={i} className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
        <OptimizedImage
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>,
    )
  }

  return <>{images}</>
}

// Componente para proyectos relacionados
function RelatedProjects({ currentProject }) {
  const relatedProjects = []
  const currentCategory = Array.isArray(currentProject.category) ? currentProject.category[0] : currentProject.category

  for (let i = 0; i < projects.length; i++) {
    const p = projects[i]
    const projectCategory = Array.isArray(p.category) ? p.category[0] : p.category

    if (projectCategory === currentCategory && p.id !== currentProject.id) {
      relatedProjects.push(p)
    }
  }

  const items = relatedProjects
    .slice(0, 3)
    .map((relatedProject) => (
      <ProjectCard
        key={relatedProject.id}
        title={relatedProject.title}
        category={relatedProject.category}
        description={relatedProject.description}
        image={relatedProject.image}
        href={`/portfolio/${relatedProject.id}`}
      />
    ))

  return <>{items}</>
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const project = findProject(slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | DER - Soluciones Integrales para Eventos",
    }
  }

  return {
    title: `${project.title} | Portfolio DER`,
    description: project.description,
  }
}
