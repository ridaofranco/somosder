import Image from "next/image"
import Link from "next/link"
import { ArrowDown, FileText, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResourceCardProps {
  title: string
  description: string
  image: string
  downloadUrl: string
  fileType: string
  fileSize: string
  premium?: boolean
}

export default function ResourceCard({
  title,
  description,
  image,
  downloadUrl,
  fileType,
  fileSize,
  premium = false,
}: ResourceCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border/40 bg-secondary/20 transition-all hover:shadow-md">
      <div className="relative h-[160px] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white font-bold text-lg px-4 py-2 bg-orange-500 rounded-md transform -rotate-12">
            PRÓXIMAMENTE
          </span>
        </div>
        {premium && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Premium
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-muted-foreground text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <FileText className="h-4 w-4 mr-1" />
            <span>
              {fileType} • {fileSize}
            </span>
          </div>

          {premium ? (
            <Button variant="outline" size="sm" className="flex items-center">
              <Lock className="h-3 w-3 mr-1" />
              Desbloquear
            </Button>
          ) : (
            <Link href={downloadUrl}>
              <Button variant="outline" size="sm" className="flex items-center">
                <ArrowDown className="h-3 w-3 mr-1" />
                Descargar
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
