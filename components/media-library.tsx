"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Upload, ImageIcon, FileText, Video, Music, FolderOpen, Check } from "lucide-react"
import Image from "next/image"
import ImageUploader from "@/components/image-uploader"

// Tipos para la biblioteca de medios
type MediaItem = {
  id: string
  url: string
  fileName: string
  fileType: string
  fileSize: string
  uploadDate: string
  folder: string
  isSelected?: boolean
}

interface MediaLibraryProps {
  onSelect?: (media: MediaItem) => void
  showDialog?: boolean
  multiple?: boolean
  filter?: string
}

export default function MediaLibrary({ onSelect, showDialog = true, multiple = false, filter }: MediaLibraryProps) {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>([])
  const [selectedItems, setSelectedItems] = useState<MediaItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // En un caso real, cargaríamos los medios desde una API
  useEffect(() => {
    // Simulación de carga de medios
    const mockMediaItems: MediaItem[] = [
      {
        id: "1",
        url: "/celebratory-event.png",
        fileName: "evento-corporativo.jpg",
        fileType: "image/jpeg",
        fileSize: "1.2 MB",
        uploadDate: "2023-05-15",
        folder: "images",
      },
      {
        id: "2",
        url: "/placeholder.svg?key=h6dg0",
        fileName: "conferencia-2023.jpg",
        fileType: "image/jpeg",
        fileSize: "0.8 MB",
        uploadDate: "2023-06-20",
        folder: "images",
      },
      {
        id: "3",
        url: "/placeholder.svg?key=38ph6",
        fileName: "presentacion.pdf",
        fileType: "application/pdf",
        fileSize: "2.5 MB",
        uploadDate: "2023-07-10",
        folder: "documents",
      },
    ]

    setMediaItems(mockMediaItems)
    setFilteredItems(mockMediaItems)
  }, [])

  // Filtrar por búsqueda y tipo
  useEffect(() => {
    let filtered = mediaItems

    // Filtrar por tipo de archivo si hay un filtro activo
    if (filter) {
      filtered = filtered.filter((item) => item.fileType.startsWith(filter))
    } else if (activeTab !== "all") {
      filtered = filtered.filter((item) => {
        switch (activeTab) {
          case "images":
            return item.fileType.startsWith("image/")
          case "documents":
            return item.fileType.startsWith("application/")
          case "videos":
            return item.fileType.startsWith("video/")
          case "audio":
            return item.fileType.startsWith("audio/")
          default:
            return true
        }
      })
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) => item.fileName.toLowerCase().includes(query) || item.fileType.toLowerCase().includes(query),
      )
    }

    setFilteredItems(filtered)
  }, [mediaItems, searchQuery, activeTab, filter])

  const handleMediaUpload = (url: string) => {
    // En un caso real, obtendríamos más metadatos del archivo
    const newItem: MediaItem = {
      id: Date.now().toString(),
      url,
      fileName: `uploaded-${Date.now()}.jpg`,
      fileType: "image/jpeg",
      fileSize: "1.0 MB",
      uploadDate: new Date().toISOString().split("T")[0],
      folder: "images",
    }

    setMediaItems([newItem, ...mediaItems])
  }

  const handleSelectItem = (item: MediaItem) => {
    if (multiple) {
      // Modo selección múltiple
      if (selectedItems.some((selected) => selected.id === item.id)) {
        setSelectedItems(selectedItems.filter((selected) => selected.id !== item.id))
      } else {
        setSelectedItems([...selectedItems, item])
      }
    } else {
      // Modo selección única
      setSelectedItems([item])
      if (onSelect) {
        onSelect(item)
        if (showDialog) {
          setIsDialogOpen(false)
        }
      }
    }
  }

  const handleConfirmSelection = () => {
    if (onSelect && selectedItems.length > 0) {
      onSelect(selectedItems[0]) // Por ahora solo enviamos el primero
      if (showDialog) {
        setIsDialogOpen(false)
      }
    }
  }

  const isItemSelected = (item: MediaItem) => {
    return selectedItems.some((selected) => selected.id === item.id)
  }

  const renderMediaItem = (item: MediaItem) => {
    const isSelected = isItemSelected(item)
    const isImage = item.fileType.startsWith("image/")

    return (
      <Card
        key={item.id}
        className={`overflow-hidden cursor-pointer transition-all ${
          isSelected ? "ring-2 ring-primary ring-offset-2" : "hover:shadow-md"
        }`}
        onClick={() => handleSelectItem(item)}
      >
        <div className="relative aspect-square bg-gray-100">
          {isImage ? (
            <Image src={item.url || "/placeholder.svg"} alt={item.fileName} fill className="object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <FileText className="h-16 w-16 text-gray-400" />
            </div>
          )}
          {isSelected && (
            <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
        <CardContent className="p-3">
          <p className="text-sm font-medium truncate" title={item.fileName}>
            {item.fileName}
          </p>
          <p className="text-xs text-gray-500">{item.fileSize}</p>
        </CardContent>
      </Card>
    )
  }

  const mediaLibraryContent = (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar archivos..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => document.getElementById("uploadMediaBtn")?.click()}>
          <Upload className="h-4 w-4 mr-2" />
          Subir archivo
        </Button>
      </div>

      <div className="hidden">
        <ImageUploader onImageUploaded={handleMediaUpload} buttonText="" />
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">
            <FolderOpen className="h-4 w-4 mr-2" />
            Todos
          </TabsTrigger>
          <TabsTrigger value="images">
            <ImageIcon className="h-4 w-4 mr-2" />
            Imágenes
          </TabsTrigger>
          <TabsTrigger value="documents">
            <FileText className="h-4 w-4 mr-2" />
            Documentos
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Video className="h-4 w-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="audio">
            <Music className="h-4 w-4 mr-2" />
            Audio
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.map(renderMediaItem)}
          </div>
        </TabsContent>

        <TabsContent value="images" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.filter((item) => item.fileType.startsWith("image/")).map(renderMediaItem)}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.filter((item) => item.fileType.startsWith("application/")).map(renderMediaItem)}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.filter((item) => item.fileType.startsWith("video/")).map(renderMediaItem)}
          </div>
        </TabsContent>

        <TabsContent value="audio" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.filter((item) => item.fileType.startsWith("audio/")).map(renderMediaItem)}
          </div>
        </TabsContent>
      </Tabs>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No se encontraron archivos. Intenta con otra búsqueda o sube nuevos archivos.</p>
        </div>
      )}

      {multiple && selectedItems.length > 0 && (
        <div className="flex justify-between items-center p-4 border-t">
          <p className="text-sm">{selectedItems.length} elementos seleccionados</p>
          <Button onClick={handleConfirmSelection}>Confirmar selección</Button>
        </div>
      )}
    </div>
  )

  // Si no se muestra en un diálogo, renderizar directamente
  if (!showDialog) {
    return mediaLibraryContent
  }

  // Renderizar dentro de un diálogo
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <ImageIcon className="h-4 w-4 mr-2" />
          Seleccionar de la biblioteca
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Biblioteca de medios</DialogTitle>
        </DialogHeader>
        {mediaLibraryContent}
      </DialogContent>
    </Dialog>
  )
}
