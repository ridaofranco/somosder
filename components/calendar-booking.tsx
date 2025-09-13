"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

export default function CalendarBooking() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos y crear el evento en Google Calendar
    setStep(3)
  }

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time)
    setStep(2)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {step === 1 && (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Selecciona una fecha y horario</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground mb-2">Fecha</p>
                  <div className="border rounded-md p-1">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      locale={es}
                      disabled={(date) => {
                        const day = date.getDay()
                        // Deshabilitar fines de semana
                        return day === 0 || day === 6 || date < new Date()
                      }}
                      className="rounded-md border"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground mb-2">Horario disponible</p>
                  {date ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal",
                            timeSlot === time && "border-orange-500 bg-orange-50 dark:bg-orange-900/20",
                          )}
                          onClick={() => handleTimeSelect(time)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full border rounded-md p-6 text-center text-gray-500">
                      <p>Selecciona una fecha para ver los horarios disponibles</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          {date && timeSlot && (
            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} className="bg-orange-500 hover:bg-orange-600">
                Continuar
              </Button>
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Completa tus datos</h3>
              <div className="mb-4 p-3 bg-secondary rounded-md flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-orange-500" />
                <span>
                  {date && format(date, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })} a las {timeSlot}hs
                </span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">¿De qué te gustaría hablar?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Volver
                  </Button>
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                    Confirmar reserva
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {step === 3 && (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-medium mb-2">¡Reserva confirmada!</h3>
            <p className="text-gray-600 dark:text-muted-foreground mb-6">
              Hemos agendado tu consulta para el {date && format(date, "d 'de' MMMM", { locale: es })} a las {timeSlot}
              hs. Recibirás un email con los detalles y un enlace para agregar el evento a tu calendario.
            </p>
            <div className="p-4 bg-secondary rounded-md mb-6">
              <div className="flex items-center mb-2">
                <CalendarIcon className="h-5 w-5 mr-2 text-orange-500" />
                <span className="font-medium">
                  {date && format(date, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span className="font-medium">{timeSlot}hs (Argentina)</span>
              </div>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/">Volver al inicio</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
