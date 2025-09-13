"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, LinkIcon, Settings } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function OptimizedImageUploader({
  onImageSelect,
  defaultImage = "",
  label = "Optimizador de imágenes",
  description = "Sube y optimiza tus imágenes",
}: {
  onImageSelect: (url: string) => void
  defaultImage?: string
  label?: string
  description?: string
}) {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage)
  const [inputUrl, setInputUrl] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [quality, setQuality] = useState<number>(80)
  const [width, setWidth] = useState<number>(800)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setError("Por favor selecciona un archivo de imagen válido")
      return
    }

    setError("")
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        const result = e.target.result as string
        setImageUrl(result)
        onImageSelect(result)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleUrlSubmit = () => {
    if (!inputUrl) {
      setError("Por favor ingresa una URL")
      return
    }

    setIsLoading(true)
    setError("")

    // Validar que la URL sea una imagen
    const img = new Image()
    img.onload = () => {
      setImageUrl(inputUrl)
      onImageSelect(inputUrl)
      setIsLoading(false)
    }
    img.onerror = () => {
      setError("La URL no corresponde a una imagen válida")
      setIsLoading(false)
    }
    img.src = inputUrl
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {imageUrl && (
          <div className="relative w-full h-48 border rounded-md overflow-hidden">
            <img src={imageUrl || "/placeholder.svg"} alt="Vista previa" className="object-contain w-full h-full" />
          </div>
        )}

        <Tabs defaultValue="upload">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Subir</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
            <TabsTrigger value="optimize">Optimizar</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <Label htmlFor="image-file" className="cursor-pointer">
              <div className="flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-md hover:border-primary">
                <Upload className="w-5 h-5" />
                <span>Seleccionar imagen</span>
              </div>
              <Input
                id="image-file"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
            </Label>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-url">URL de la imagen</Label>
              <div className="flex gap-2">
                <Input
                  id="image-url"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                />
                <Button onClick={handleUrlSubmit} disabled={isLoading} type="button">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Usar
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="optimize" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="quality">Calidad</Label>
                  <span>{quality}%</span>
                </div>
                <Slider
                  id="quality"
                  min={10}
                  max={100}
                  step={5}
                  value={[quality]}
                  onValueChange={(value) => setQuality(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="width">Ancho máximo</Label>
                  <span>{width}px</span>
                </div>
                <Slider
                  id="width"
                  min={100}
                  max={2000}
                  step={100}
                  value={[width]}
                  onValueChange={(value) => setWidth(value[0])}
                />
              </div>

              <Button
                onClick={() => {
                  // En un entorno real, aquí se aplicaría la optimización
                  // Para este ejemplo, simplemente notificamos que se aplicó
                  if (imageUrl) {
                    alert(`Imagen optimizada con calidad: ${quality}% y ancho: ${width}px`)
                  } else {
                    setError("Primero debes seleccionar una imagen")
                  }
                }}
                disabled={!imageUrl}
                className="w-full"
              >
                <Settings className="w-4 h-4 mr-2" />
                Aplicar optimización
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setImageUrl("")
            setInputUrl("")
            onImageSelect("")
          }}
          disabled={!imageUrl}
        >
          Limpiar
        </Button>
      </CardFooter>
    </Card>
  )
}
