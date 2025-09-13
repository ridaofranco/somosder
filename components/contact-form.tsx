"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { z } from "zod"

// Esquema de validación para el formulario
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Por favor ingresa un email válido"),
  empresa: z.string().optional(),
  asunto: z.string().min(3, "El asunto debe tener al menos 3 caracteres").max(100, "El asunto es demasiado largo"),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje es demasiado largo"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    asunto: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Validar un campo específico
  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema = contactSchema.shape[name as keyof ContactFormData]
      fieldSchema.parse(value)
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({
          ...prev,
          [name]: error.errors[0].message,
        }))
        return false
      }
      return true
    }
  }

  // Validar todo el formulario
  const validateForm = () => {
    try {
      contactSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {}
        error.errors.forEach((err) => {
          const field = err.path[0] as string
          newErrors[field] = err.message
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validar el campo mientras el usuario escribe
    validateField(name, value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Validar todo el formulario antes de enviar
    if (!validateForm()) {
      setStatus({
        success: false,
        message: "Por favor corrige los errores en el formulario antes de enviar.",
      })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("https://formspree.io/f/xpwdpwwa", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus({
          success: true,
          message: "¡Gracias por tu mensaje! Te contactaremos lo antes posible.",
        })
        // Resetear el formulario
        setFormData({
          nombre: "",
          email: "",
          empresa: "",
          asunto: "",
          mensaje: "",
        })
        setErrors({})
      } else {
        const responseData = await response.json()
        if (Object.hasOwn(responseData, "errors")) {
          setStatus({
            success: false,
            message: responseData["errors"].map((error: any) => error["message"]).join(", "),
          })
        } else {
          setStatus({
            success: false,
            message: "Ha ocurrido un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
          })
        }
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Ha ocurrido un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/xpwdpwwa" method="POST">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-dark-300 border ${errors.nombre ? "border-red-500" : "border-dark-400"} text-white`}
            placeholder="Tu nombre"
            required
          />
          {errors.nombre && (
            <p className="text-sm text-red-500 flex items-center mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.nombre}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-dark-300 border ${errors.email ? "border-red-500" : "border-dark-400"} text-white`}
            placeholder="tu@email.com"
            required
          />
          {errors.email && (
            <p className="text-sm text-red-500 flex items-center mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          Empresa / Organización
        </label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          className="w-full p-3 rounded bg-dark-300 border border-dark-400 text-white"
          placeholder="Nombre de tu empresa"
        />
      </div>
      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          Asunto <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          className={`w-full p-3 rounded bg-dark-300 border ${errors.asunto ? "border-red-500" : "border-dark-400"} text-white`}
          placeholder="Asunto de tu mensaje"
          required
        />
        {errors.asunto && (
          <p className="text-sm text-red-500 flex items-center mt-1">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.asunto}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          value={formData.mensaje}
          onChange={handleChange}
          className={`w-full p-3 rounded bg-dark-300 border ${errors.mensaje ? "border-red-500" : "border-dark-400"} text-white`}
          placeholder="Cuéntanos sobre tu proyecto o evento"
          required
        ></textarea>
        {errors.mensaje && (
          <p className="text-sm text-red-500 flex items-center mt-1">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.mensaje}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Enviando...
          </span>
        ) : (
          "Enviar Mensaje"
        )}
      </Button>

      {status && (
        <div
          className={`p-4 ${status.success ? "bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200" : "bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"} rounded-md`}
        >
          <p className="flex items-center gap-2">
            {status.success ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            {status.message}
          </p>
        </div>
      )}

      {/* Campo oculto para protección anti-spam */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />
    </form>
  )
}
