"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { z } from "zod"

// Esquema de validación para el email
const emailSchema = z.string().email("Por favor ingresa un email válido")

export default function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (email: string) => {
    try {
      emailSchema.parse(email)
      setError(null)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar email
    if (!validateEmail(email)) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Enviar a Formspree
      const response = await fetch("https://formspree.io/f/xpwdpwwa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          tipo_formulario: "newsletter",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        setError(data.error || "Ocurrió un error al suscribirte. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      console.error("Error al suscribirse:", error)
      setError("Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={className}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-2" action="https://formspree.io/f/xpwdpwwa" method="POST">
          <input type="hidden" name="tipo_formulario" value="newsletter" />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Tu email"
              className={`pl-10 ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) validateEmail(e.target.value)
              }}
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-500 flex items-center mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              {error}
            </p>
          )}
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Enviando...
              </span>
            ) : (
              "Suscribirme"
            )}
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>

          {/* Campo oculto para protección anti-spam */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </form>
      ) : (
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
          <p className="text-sm text-green-800 dark:text-green-200">
            ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
          </p>
        </div>
      )}
    </div>
  )
}
