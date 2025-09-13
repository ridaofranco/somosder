"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Save, Check, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface EditModeProps {
  isAdmin: boolean
}

export default function EditMode({ isAdmin }: EditModeProps) {
  const [editMode, setEditMode] = useState(false)
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  const [currentImageElement, setCurrentImageElement] = useState<HTMLImageElement | null>(null)
  const [isPlaceholder, setIsPlaceholder] = useState(false)
  const [directUrl, setDirectUrl] = useState("")
  const [changes, setChanges] = useState<Map<string, string>>(new Map())
  const [placeholderCount, setPlaceholderCount] = useState(0)
  const [replacedCount, setReplacedCount] = useState(0)
  const [previewError, setPreviewError] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [cloudinaryWidget, setCloudinaryWidget] = useState<any>(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState("")

  // Activar/desactivar modo de edición
  const toggleEditMode = useCallback(() => {
    setEditMode((prevMode) => !prevMode)
  }, [])

  // Inicializar el widget de Cloudinary
  useEffect(() => {
    // Solo inicializar si estamos en el navegador y el widget no existe
    if (typeof window !== "undefined" && !cloudinaryWidget && editMode) {
      // Verificar si Cloudinary ya está cargado
      if (typeof window !== "undefined" && window.cloudinary) {
        initCloudinaryWidget()
      } else if (typeof window !== "undefined") {
        // Cargar el script de Cloudinary si no está cargado
        const script = document.createElement("script")
        script.src = "https://upload-widget.cloudinary.com/global/all.js"
        script.async = true
        script.onload = initCloudinaryWidget
        document.body.appendChild(script)
      }
    }

    return () => {
      // Limpiar el widget cuando el componente se desmonta o el modo edición se desactiva
      if (cloudinaryWidget) {
        cloudinaryWidget.destroy()
        setCloudinaryWidget(null)
      }
    }
  }, [editMode])

  const initCloudinaryWidget = useCallback(() => {
    // Verificar que estamos en el navegador y que cloudinary está disponible
    if (typeof window === "undefined" || !window.cloudinary) return

    // Obtener las variables de entorno
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

    if (!cloudName || !uploadPreset) {
      console.error("Faltan variables de entorno para Cloudinary")
      return
    }

    // Crear el widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        folder: "der_events",
        multiple: false,
        sources: ["local", "url", "camera"],
        resourceType: "image",
        maxFileSize: 10000000, // 10MB
        styles: {
          palette: {
            window: "#FFFFFF",
            sourceBg: "#F4F4F5",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0078FF",
            link: "#0078FF",
            action: "#0078FF",
            inProgress: "#0078FF",
            complete: "#22C55E",
            error: "#EA4335",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
        },
      },
      (error, result) => {
        if (error) {
          console.error("Error de Cloudinary:", error)
          setIsUploading(false)
          return
        }

        if (result && result.event === "queues-start") {
          setIsUploading(true)
        }

        if (result && result.event === "success") {
          setIsUploading(false)
          setUploadedImageUrl(result.info.secure_url)
        }
      },
    )

    setCloudinaryWidget(widget)
  }, [])

  // Detectar placeholders y añadir estilos
  useEffect(() => {
    if (!editMode || typeof window === "undefined") return

    const images = document.querySelectorAll("img")
    let placeholders = 0
    let replaced = 0

    const handleClick = (e: MouseEvent) => {
      if (!editMode) return

      const img = e.target as HTMLImageElement
      const src = img.getAttribute("src") || ""
      const isPlaceholder = src.includes("/placeholder.svg")

      setCurrentImageElement(img)
      setIsPlaceholder(isPlaceholder)
      setDirectUrl("")
      setPreviewError(false)
      setImageDialogOpen(true)

      e.preventDefault()
      e.stopPropagation()
    }

    images.forEach((img) => {
      const src = img.getAttribute("src") || ""
      const isPlaceholder = src.includes("/placeholder.svg")

      // Añadir estilos según si es placeholder o no
      if (isPlaceholder) {
        img.style.outline = "3px dashed #ef4444"
        img.style.outlineOffset = "2px"
        placeholders++
      } else if (changes.has(src)) {
        img.style.outline = "3px solid #22c55e"
        img.style.outlineOffset = "2px"
        replaced++
      }

      img.style.cursor = "pointer"
      img.addEventListener("click", handleClick)
    })

    setPlaceholderCount(placeholders)
    setReplacedCount(replaced)

    return () => {
      images.forEach((img) => {
        img.style.outline = ""
        img.style.outlineOffset = ""
        img.style.cursor = ""
        img.removeEventListener("click", handleClick)
      })
    }
  }, [editMode, changes])

  // Verificar si una URL es válida
  const isValidUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  }

  // Abrir el widget de Cloudinary
  const openCloudinaryWidget = () => {
    if (cloudinaryWidget) {
      cloudinaryWidget.open()
    } else {
      // Si el widget no existe, intentar inicializarlo de nuevo
      initCloudinaryWidget()
      setTimeout(() => {
        if (cloudinaryWidget) {
          cloudinaryWidget.open()
        } else {
          alert("El widget de Cloudinary no está disponible. Intenta recargar la página.")
        }
      }, 500)
    }
  }

  // Aplicar cambio de imagen
  const applyImageChange = useCallback(() => {
    if (!currentImageElement) return

    const src = currentImageElement.getAttribute("src") || ""
    let newSrc = ""

    // Determinar qué URL usar
    if (directUrl && isValidUrl(directUrl)) {
      newSrc = directUrl
    }

    if (!newSrc) {
      alert("Debes proporcionar una URL válida")
      return
    }

    // Verificar que la URL sea accesible
    const img = new Image()
    img.onload = () => {
      // La imagen cargó correctamente, aplicar el cambio
      setChanges((prev) => new Map(prev.set(src, newSrc)))
      currentImageElement.src = newSrc
      setImageDialogOpen(false)
    }
    img.onerror = () => {
      // La imagen no cargó correctamente
      alert("No se pudo cargar la imagen. Verifica la URL e intenta de nuevo.")
    }
    img.src = newSrc
  }, [currentImageElement, directUrl])

  // Guardar todos los cambios
  const saveAllChanges = async () => {
    try {
      // Convertir Map a objeto para enviar como JSON
      const changesObj: Record<string, string> = {}
      changes.forEach((value, key) => {
        changesObj[key] = value
      })

      // En un entorno real, aquí guardarías los cambios en los archivos
      console.log("Cambios a guardar:", changesObj)

      // Simular guardado exitoso
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert(`Se han guardado ${changes.size} cambios correctamente`)

      // Limpiar cambios guardados
      setChanges(new Map())
    } catch (error) {
      console.error("Error al guardar los cambios:", error)
      alert("Error al guardar los cambios. Intenta de nuevo.")
    }
  }

  // Manejar error en la vista previa
  const handlePreviewError = () => {
    setPreviewError(true)
  }

  // No mostrar nada si no es administrador
  if (!isAdmin) return null

  return (
    <>
      {/* Panel flotante de edición */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {editMode && (
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg mb-2 text-sm">
            <p>
              Placeholders: <span className="font-bold text-red-500">{placeholderCount}</span>
            </p>
            <p>
              Reemplazados: <span className="font-bold text-green-500">{replacedCount}</span>
            </p>
            {changes.size > 0 && (
              <Button onClick={saveAllChanges} className="mt-2 w-full bg-green-600 hover:bg-green-700">
                <Save className="mr-2 h-4 w-4" />
                Guardar {changes.size} cambios
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Diálogo para cambiar imagen */}
      <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{isPlaceholder ? "Reemplazar placeholder" : "Cambiar imagen"}</DialogTitle>
            <DialogDescription>
              {isPlaceholder
                ? "Este es un placeholder que debe ser reemplazado con una imagen real."
                : "Esta imagen ya ha sido reemplazada. Puedes cambiarla si lo deseas."}
            </DialogDescription>
          </DialogHeader>

          {/* Vista previa de la imagen actual */}
          {currentImageElement && (
            <div className="relative h-40 w-full overflow-hidden rounded-lg border mb-4">
              <Image
                src={currentImageElement.src || "/placeholder.svg"}
                alt="Imagen actual"
                fill
                className="object-contain"
              />
              {isPlaceholder && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                  <p className="text-sm font-medium">Placeholder</p>
                </div>
              )}
            </div>
          )}

          <Tabs defaultValue="direct">
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="direct">URL directa</TabsTrigger>
            </TabsList>

            <TabsContent value="direct" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="direct-url">URL de la imagen</Label>
                <Input
                  id="direct-url"
                  value={directUrl}
                  onChange={(e) => setDirectUrl(e.target.value)}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
                <p className="text-xs text-gray-500">Ingresa la URL completa de la imagen, incluyendo https://</p>
              </div>

              {directUrl && isValidUrl(directUrl) && (
                <div className="relative h-40 w-full overflow-hidden rounded-lg border">
                  {previewError ? (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <AlertCircle className="mx-auto h-8 w-8 text-red-500" />
                        <p className="mt-2 text-sm text-gray-600">No se pudo cargar la imagen</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={directUrl || "/placeholder.svg"}
                      alt="Vista previa"
                      className="h-full w-full object-contain"
                      onError={handlePreviewError}
                    />
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setImageDialogOpen(false)}>
              Cancelar
            </Button>
            <Button
              onClick={applyImageChange}
              disabled={!directUrl || previewError}
              className="bg-green-600 hover:bg-green-700"
            >
              <Check className="mr-2 h-4 w-4" />
              Aplicar cambio
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Añadir la definición de cloudinary al objeto window
declare global {
  interface Window {
    cloudinary: any
  }
}
