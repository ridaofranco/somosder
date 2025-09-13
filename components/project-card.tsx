import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  category: string | string[]
  description: string
  image: string
  href: string
}

export default function ProjectCard({ title, category, description, image, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white dark:bg-dark-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Categories positioned over the image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {Array.isArray(category) ? (
              category.map((cat, index) => (
                <span
                  key={index}
                  className="inline-block bg-orange-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md"
                >
                  {cat}
                </span>
              ))
            ) : (
              <span className="inline-block bg-orange-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                {category}
              </span>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-slate-300 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
            <span>Ver Proyecto</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}
