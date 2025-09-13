"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { LinkIcon } from "lucide-react"

export default function EnhancedImageUploader({
  onImageSelect,
  defaultImage = "",
  label = "Imagen",
  description = "Sube una imagen o proporciona una URL",
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
              Usar URL
            </Button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
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
