"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function ImageUploader({
  onImageSelect,
  defaultImage = "",
  label = "Subir imagen",
  description = "Selecciona una imagen para subir",
}: {
  onImageSelect: (url: string) => void
  defaultImage?: string
  label?: string
  description?: string
}) {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage)
  const [error, setError] = useState<string>("")

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
          <Label htmlFor="image-file" className="cursor-pointer">
            <div className="flex items-center justify-center gap-2 p-2 border-2 border-dashed rounded-md hover:border-primary">
              <Upload className="w-5 h-5" />
              <span>Seleccionar imagen</span>
            </div>
            <Input id="image-file" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </Label>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setImageUrl("")
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
