"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

type MediaItem = {
  id: string
  type: "image" | "video"
  thumbnail: string
  src: string
  title: string
  category: string
  description?: string
}

interface MediaGalleryProps {
  title?: string
  description?: string
  mediaItems: MediaItem[]
  categories?: string[]
  className?: string
}

export default function MediaGallery({
  title = "Galería de Eventos",
  description = "Explora nuestros eventos más destacados",
  mediaItems,
  categories = ["Todos"],
  className = "",
}: MediaGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Filtrar elementos por categoría
  const filteredItems =
    selectedCategory === "Todos" ? mediaItems : mediaItems.filter((item) => item.category === selectedCategory)

  // Manejar la navegación en el lightbox
  const handleNavigation = (direction: "prev" | "next") => {
    if (!selectedMedia) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedMedia.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedMedia(filteredItems[newIndex])
    setIsVideoPlaying(false)
  }

  // Abrir el lightbox
  const openLightbox = (item: MediaItem) => {
    setSelectedMedia(item)
    setIsDialogOpen(true)
    setIsVideoPlaying(false)
  }

  // Cerrar el lightbox
  const closeLightbox = () => {
    setIsDialogOpen(false)
    setIsVideoPlaying(false)
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {title && <h2 className="text-2xl md:text-3xl font-bold text-center">{title}</h2>}
      {description && <p className="text-center text-gray-600 dark:text-gray-300 mb-8">{description}</p>}

      {/* Filtros de categoría */}
      {categories.length > 1 && (
        <Tabs defaultValue="Todos" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger
              value="Todos"
              onClick={() => setSelectedCategory("Todos")}
              className={selectedCategory === "Todos" ? "bg-purple-100 text-purple-700" : ""}
            >
              Todos
            </TabsTrigger>
            {categories
              .filter((cat) => cat !== "Todos")
              .map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-purple-100 text-purple-700" : ""}
                >
                  {category}
                </TabsTrigger>
              ))}
          </TabsList>
        </Tabs>
      )}

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-all hover:shadow-lg"
            onClick={() => openLightbox(item)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/30 rounded-full p-3">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-1 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px] p-4">
              {selectedMedia?.type === "image" ? (
                <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src={selectedMedia.src || "/placeholder.svg"}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-video">
                  {isVideoPlaying ? (
                    <iframe
                      src={`${selectedMedia?.src}?autoplay=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                      <Image
                        src={selectedMedia?.thumbnail || ""}
                        alt={selectedMedia?.title || ""}
                        fill
                        className="object-contain"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsVideoPlaying(true)
                        }}
                      >
                        <div className="bg-black/30 rounded-full p-4">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black/50 border-none text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNavigation("prev")
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black/50 border-none text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNavigation("next")
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6">
            <DialogHeader>
              <DialogTitle>{selectedMedia?.title}</DialogTitle>
              <DialogDescription>{selectedMedia?.description}</DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
