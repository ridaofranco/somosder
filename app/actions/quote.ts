"use server"

import { z } from "zod"

// Esquema de validación para el formulario de cotización
const quoteSchema = z.object({
  eventType: z.string().min(1, "Selecciona un tipo de evento"),
  attendees: z.number().min(10, "Mínimo 10 asistentes").max(1000, "Máximo 1000 asistentes"),
  duration: z.number().min(1, "Mínimo 1 hora").max(24, "Máximo 24 horas"),
  services: z.array(z.string()).optional(),
  name: z.string().min(2, "Nombre demasiado corto").max(100, "Nombre demasiado largo"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(5, "Teléfono demasiado corto").max(20, "Teléfono demasiado largo"),
  company: z.string().optional(),
  eventDate: z.string().optional(),
  comments: z.string().optional(),
})

export type QuoteFormData = z.infer<typeof quoteSchema>

export async function submitQuote(formData: QuoteFormData) {
  try {
    // Validar los datos del formulario
    const validatedData = quoteSchema.parse(formData)

    // Simular un retraso para la demostración
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Aquí iría la lógica para guardar en base de datos o enviar por email
    // Por ejemplo, enviar a un CRM, guardar en una base de datos, etc.

    // Ejemplo de envío de email (simulado)
    console.log("Enviando cotización:", validatedData)

    // Generar un ID único para la cotización
    const quoteId = `QT-${Date.now().toString().slice(-6)}`

    // Devolver respuesta exitosa
    return {
      success: true,
      message: "¡Cotización enviada con éxito!",
      data: {
        quoteId,
        ...validatedData,
      },
    }
  } catch (error) {
    console.error("Error al procesar la cotización:", error)

    // Si es un error de validación de Zod
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ")
      return {
        success: false,
        message: "Error de validación",
        errors: error.errors,
        errorDetail: errorMessages,
      }
    }

    // Para otros tipos de errores
    return {
      success: false,
      message: "Ha ocurrido un error al procesar tu cotización. Por favor, inténtalo de nuevo.",
    }
  }
}
