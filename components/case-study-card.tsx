import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BarChart, Calendar, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CaseStudyCardProps {
  id: string
  title: string
  client: string
  category: string
  description: string
  image: string
  metrics: {
    attendees?: number
    duration?: number
    satisfaction?: number
    roi?: string
  }
  featured?: boolean
}

export default function CaseStudyCard({
  id,
  title,
  client,
  category,
  description,
  image,
  metrics,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-lg border transition-all hover:shadow-md ${
        featured
          ? "border-purple-200 bg-purple-50/50 dark:border-purple-900/50 dark:bg-purple-900/10"
          : "border-border/40 bg-secondary/20 hover:bg-secondary/30"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-purple-600 hover:bg-purple-700">Destacado</Badge>
        </div>
      )}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2 p-6">
        <div className="flex justify-between items-start">
          <span className="text-sm text-primary/80">{category}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{client}</span>
        </div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-muted-foreground text-sm line-clamp-3">{description}</p>

        <div className="grid grid-cols-2 gap-4 mt-4 mb-2">
          {metrics.attendees && (
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {metrics.attendees.toLocaleString()} asistentes
              </span>
            </div>
          )}
          {metrics.duration && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {metrics.duration} {metrics.duration === 1 ? "día" : "días"}
              </span>
            </div>
          )}
          {metrics.satisfaction && (
            <div className="flex items-center">
              <Award className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{metrics.satisfaction}/5 satisfacción</span>
            </div>
          )}
          {metrics.roi && (
            <div className="flex items-center">
              <BarChart className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">ROI: {metrics.roi}</span>
            </div>
          )}
        </div>

        <Link
          href={`/casos-de-exito/${id}`}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-4 text-sm"
        >
          Ver caso completo <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
