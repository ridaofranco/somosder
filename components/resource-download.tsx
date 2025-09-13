"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Check, X } from "lucide-react"

interface ResourceDownloadProps {
  resourceId: string
  resourceName: string
  resourceType: string
  requiresEmail: boolean
}

export default function ResourceDownload({
  resourceId,
  resourceName,
  resourceType,
  requiresEmail = true,
}: ResourceDownloadProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleDownload = () => {
    if (!requiresEmail) {
      // Directly trigger download if no email required
      triggerDownload()
      return
    }

    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Here you would typically send the data to your backend
      // For demo purposes, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Track the download in analytics
      console.log(`Resource downloaded: ${resourceId} by ${email}`)

      setIsSuccess(true)
      triggerDownload()

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowForm(false)
        setIsSuccess(false)
        setEmail("")
        setName("")
      }, 3000)
    } catch (err) {
      setError("Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const triggerDownload = () => {
    // In a real implementation, this would generate a temporary download link
    // For demo purposes, we'll just log the action
    console.log(`Downloading resource: ${resourceId}`)

    // Simulate download by opening a new tab
    // In production, replace with actual download URL
    const downloadUrl = `/api/resources/download/${resourceId}`
    window.open(downloadUrl, "_blank")
  }

  return (
    <div>
      {!showForm ? (
        <Button
          onClick={handleDownload}
          className="bg-orange-500 hover:bg-orange-600 text-white"
          size={resourceType === "card" ? "sm" : "default"}
        >
          <Download className="h-4 w-4 mr-2" /> Descargar
        </Button>
      ) : (
        <div className="bg-white dark:bg-dark-300 p-4 rounded-lg shadow-md mt-4">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h4 className="text-sm font-medium mb-2">Completa para descargar {resourceName}</h4>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <input type="checkbox" id="consent" className="mr-2" required />
                <label htmlFor="consent">Acepto recibir contenido relacionado con eventos y recursos</label>
              </div>
              {error && (
                <div className="text-red-500 text-xs flex items-center">
                  <X className="h-3 w-3 mr-1" /> {error}
                </div>
              )}
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Procesando..." : "Descargar ahora"}
                </Button>
                <Button type="button" variant="outline" className="text-sm py-1" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-2">
              <div className="flex items-center justify-center text-green-500 mb-2">
                <Check className="h-5 w-5 mr-1" />
                <span className="font-medium">¡Descarga iniciada!</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Gracias por tu interés en nuestros recursos.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
