"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

interface NewsletterSubscriptionProps {
  title?: string
  description?: string
  className?: string
  variant?: "default" | "compact" | "inline"
}

export function NewsletterSubscription({
  title = "Suscríbete a nuestro newsletter",
  description = "Recibe los últimos artículos, guías y tendencias directamente en tu email. Sin spam, solo contenido valioso para profesionales de eventos.",
  className = "",
  variant = "default",
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setErrorMessage("Por favor, introduce tu email")
      return
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMessage("Por favor, introduce un email válido")
      return
    }

    setStatus("loading")

    // Simulación de envío (reemplazar con llamada real a API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      // Resetear después de 5 segundos
      setTimeout(() => {
        setStatus("idle")
        setEmail("")
      }, 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Ocurrió un error. Por favor, intenta de nuevo.")
    }
  }

  if (variant === "compact") {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-6 ${className}`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              disabled={status === "loading" || status === "success"}
              className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              aria-label="Email para suscripción"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          {status === "error" && (
            <div className="text-red-500 text-xs flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errorMessage}
            </div>
          )}

          {status === "success" && (
            <div className="text-green-500 text-xs flex items-center">
              <CheckCircle className="h-3 w-3 mr-1" />
              ¡Gracias por suscribirte!
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirme"}
          </Button>
        </form>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              disabled={status === "loading" || status === "success"}
              className="w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              aria-label="Email para suscripción"
            />
            {status === "error" && (
              <div className="absolute -bottom-6 left-0 text-red-500 text-xs flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="absolute -bottom-6 left-0 text-green-500 text-xs flex items-center">
                <CheckCircle className="h-3 w-3 mr-1" />
                ¡Gracias por suscribirte!
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirme"}
          </Button>
        </form>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`bg-gray-100 dark:bg-gray-800 rounded-xl p-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  disabled={status === "loading" || status === "success"}
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                  aria-label="Email para suscripción"
                />
              </div>

              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirme"}
              </Button>
            </div>

            {status === "error" && (
              <div className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="text-green-500 text-sm flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                ¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.
              </div>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Al suscribirte, aceptas nuestra{" "}
              <a href="/privacidad" className="underline hover:text-orange-500">
                política de privacidad
              </a>
              . Puedes darte de baja en cualquier momento.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
