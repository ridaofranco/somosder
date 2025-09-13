"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileText, Loader2, AlertCircle } from "lucide-react"

interface FileUploaderProps {
  onFileUploaded: (url: string, fileName: string, fileSize: string) => void
  initialFile?: string
  buttonText?: string
  acceptTypes?: string
  className?: string
}

export default function FileUploader({
  onFileUploaded,
  initialFile = "",
  buttonText = "Subir archivo",
  acceptTypes = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx",
  className = "",
}: FileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [fileUrl, setFileUrl] = useState(initialFile)
  const [fileName, setFileName] = useState("")
  const [fileSize, setFileSize] = useState("")
  const [error, setError] = useState("")

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al subir el archivo")
      }

      setFileUrl(data.url)
      setFileName(file.name)
      setFileSize(formatFileSize(file.size))
      onFileUploaded(data.url, file.name, formatFileSize(file.size))
    } catch (err: any) {
      setError(err.message || "Error al subir el archivo")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => document.getElementById("fileInputDoc")?.click()}
          disabled={isUploading}
          className="flex items-center gap-2"
        >
          {isUploading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Subiendo...</span>
            </>
          ) : (
            <>
              {fileUrl ? <FileText className="h-4 w-4" /> : <Upload className="h-4 w-4" />}
              <span>{fileUrl ? "Cambiar archivo" : buttonText}</span>
            </>
          )}
        </Button>
        <input id="fileInputDoc" type="file" className="hidden" accept={acceptTypes} onChange={handleFileChange} />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      {fileUrl && (
        <div className="flex items-center gap-2 p-3 border rounded-md bg-gray-50">
          <FileText className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">{fileName}</p>
            <p className="text-sm text-gray-500">{fileSize}</p>
          </div>
        </div>
      )}
    </div>
  )
}
