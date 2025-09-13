import { Clock } from "lucide-react"

interface ReadingTimeProps {
  content: string
  className?: string
  wordsPerMinute?: number
}

export function ReadingTime({ content, className = "", wordsPerMinute = 200 }: ReadingTimeProps) {
  // Eliminar etiquetas HTML si las hay
  const plainText = content.replace(/<[^>]*>?/gm, "")

  // Contar palabras
  const wordCount = plainText.split(/\s+/).filter(Boolean).length

  // Calcular tiempo de lectura
  const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute))

  return (
    <div className={`flex items-center text-gray-500 dark:text-gray-400 ${className}`}>
      <Clock className="h-4 w-4 mr-1" />
      <span className="text-sm">{readingTime} min de lectura</span>
    </div>
  )
}
