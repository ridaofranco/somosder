"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

export default function DragDropUploader({
  onImageSelect,
  defaultImage = "",
  label = "Arrastra y suelta una imagen",
  description = "O haz clic para seleccionar",
}: {
  onImageSelect: (url: string) => void
  defaultImage?: string
  label?: string
  description?: string
}) {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
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
      <CardContent>
        {imageUrl ? (
          <div className="relative w-full h-48 border rounded-md overflow-hidden">
            <img src={imageUrl || "/placeholder.svg"} alt="Vista previa" className="object-contain w-full h-full" />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => {
                setImageUrl("")
                onImageSelect("")
              }}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div
            className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors ${
              isDragging ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-10 h-10 mx-auto mb-4 text-gray-400" />
            <p className="text-sm text-gray-500">Arrastra y suelta una imagen aquí o haz clic para seleccionar</p>
            <input type="file" ref={fileInputRef} onChange={handleFileInput} accept="image/*" className="hidden" />
          </div>
        )}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </CardContent>
    </Card>
  )
}
