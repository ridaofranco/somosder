import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Award, ArrowRight } from "lucide-react"
import OptimizedImage from "./optimized-image"

interface PortfolioDetailProps {
  title: string
  slug: string
  category: string
  description: string
  client: string
  date: string
  location: string
  attendees?: string
  awards?: string[]
  heroImage?: string
  gallery?: string[]
  results?: {
    title: string
    value: string
  }[]
}

export default function PortfolioDetail({
  title,
  slug,
  category,
  description,
  client,
  date,
  location,
  attendees,
  awards,
  heroImage,
  gallery = [],
  results = [],
}: PortfolioDetailProps) {
  // Mapa de imágenes de hero personalizadas por slug
  const heroImages: Record<string, string> = {
    "manchester-city": "/images/manchester-city-event.png",
    "copa-america": "/images/copa-america-hero.png",
    "festival-primavera": "/images/festival-primavera-hero.png",
    "tech-summit": "/images/tech-summit-hero.png",
    "gala-benefica": "/images/gala-benefica-hero.png",
    "concierto-internacional": "/images/concierto-internacional-hero.png",
    // Añadir más proyectos según sea necesario
  }

  // Usar la imagen personalizada si existe, o la proporcionada, o un placeholder
  const finalHeroImage =
    heroImages[slug] || heroImage || `/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(title)}`

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 gap-8">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <OptimizedImage
            src={finalHeroImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 md:p-10 w-full">
              <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-full mb-4">
                {category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{title}</h1>
              <p className="text-white/80 text-lg max-w-3xl">{description.substring(0, 120)}...</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Acerca del proyecto</h2>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>

            {gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Galería</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gallery.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <OptimizedImage
                        src={image}
                        alt={`${title} - Imagen ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Resultados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary mb-2">{result.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{result.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Detalles del proyecto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Fecha</p>
                    <p className="text-gray-600 dark:text-gray-400">{date}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600 dark:text-gray-400">{location}</p>
                  </div>
                </li>
                {attendees && (
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Asistentes</p>
                      <p className="text-gray-600 dark:text-gray-400">{attendees}</p>
                    </div>
                  </li>
                )}
                {awards && awards.length > 0 && (
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Reconocimientos</p>
                      <ul className="text-gray-600 dark:text-gray-400 list-disc pl-4">
                        {awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cliente</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{client}</p>
              <Button className="w-full">
                Ver más proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
