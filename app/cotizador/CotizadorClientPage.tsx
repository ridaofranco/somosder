"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Calculator,
  CheckCircle,
  Star,
  Shield,
  Clock,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"

interface Service {
  id: string
  name: string
  description: string
  basePrice: number
  pricePerPerson?: number
  category: string
}

interface FormData {
  eventType: string
  attendees: number
  date: string
  location: string
  services: string[]
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export default function CotizadorClientPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    eventType: "",
    attendees: 100,
    date: "",
    location: "",
    services: [],
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const services: Service[] = [
    {
      id: "accesos",
      name: "Control de Accesos",
      description: "Sistema de acreditaciones y control de ingreso",
      basePrice: 800,
      pricePerPerson: 2,
      category: "Tecnología",
    },
    {
      id: "produccion",
      name: "Producción Integral",
      description: "Gestión completa del evento",
      basePrice: 2000,
      pricePerPerson: 5,
      category: "Producción",
    },
    {
      id: "tecnologia",
      name: "Tecnología AV",
      description: "Audio, video y streaming profesional",
      basePrice: 1500,
      pricePerPerson: 3,
      category: "Tecnología",
    },
    {
      id: "fotografia",
      name: "Fotografía y Video",
      description: "Cobertura profesional del evento",
      basePrice: 1200,
      pricePerPerson: 1,
      category: "Contenido",
    },
    {
      id: "catering",
      name: "Catering",
      description: "Servicio gastronómico completo",
      basePrice: 500,
      pricePerPerson: 25,
      category: "Gastronomía",
    },
    {
      id: "logistica",
      name: "Logística",
      description: "Transporte y coordinación",
      basePrice: 600,
      pricePerPerson: 2,
      category: "Logística",
    },
    {
      id: "marketing",
      name: "Marketing Experiencial",
      description: "Activaciones y experiencias",
      basePrice: 1000,
      pricePerPerson: 4,
      category: "Marketing",
    },
    {
      id: "seguridad",
      name: "Seguridad",
      description: "Personal de seguridad especializado",
      basePrice: 400,
      pricePerPerson: 3,
      category: "Seguridad",
    },
  ]

  const eventTypes = [
    { id: "corporativo", name: "Evento Corporativo", multiplier: 1 },
    { id: "conferencia", name: "Conferencia", multiplier: 1.2 },
    { id: "concierto", name: "Concierto", multiplier: 1.5 },
    { id: "deportivo", name: "Evento Deportivo", multiplier: 1.3 },
    { id: "social", name: "Evento Social", multiplier: 0.8 },
    { id: "otro", name: "Otro", multiplier: 1 },
  ]

  const calculateTotal = () => {
    const selectedServices = services.filter((service) => formData.services.includes(service.id))
    const eventTypeMultiplier = eventTypes.find((type) => type.id === formData.eventType)?.multiplier || 1

    const total = selectedServices.reduce((sum, service) => {
      const serviceTotal = service.basePrice + (service.pricePerPerson || 0) * formData.attendees
      return sum + serviceTotal
    }, 0)

    return Math.round(total * eventTypeMultiplier)
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    console.log("Cotización enviada:", formData)
    alert("¡Cotización enviada! Te contactaremos en menos de 24 horas.")
  }

  const casosExito = [
    {
      evento: "Campus Party 2024",
      asistentes: "120,000",
      presupuesto: "$450,000",
      servicios: 8,
      resultado: "ROI +300%",
    },
    {
      evento: "Manchester City Trophy Tour",
      asistentes: "15,000",
      presupuesto: "$180,000",
      servicios: 6,
      resultado: "98% Satisfacción",
    },
    {
      evento: "Conferencia Shell",
      asistentes: "500",
      presupuesto: "$45,000",
      servicios: 5,
      resultado: "100% Asistencia",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Cotización gratuita • Respuesta en 24 horas
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cotizador de <span className="text-yellow-300">Eventos</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Obtené un presupuesto personalizado para tu evento en <strong>4 pasos simples</strong>
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">100%</div>
                <div className="text-sm opacity-80">Gratis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">24h</div>
                <div className="text-sm opacity-80">Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">0</div>
                <div className="text-sm opacity-80">Spam</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario Principal */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-gray-900">Paso {currentStep} de 4</CardTitle>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4].map((step) => (
                        <div
                          key={step}
                          className={`w-3 h-3 rounded-full ${step <= currentStep ? "bg-orange-500" : "bg-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  {/* Paso 1: Tipo de Evento */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          ¿Qué tipo de evento querés organizar?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {eventTypes.map((type) => (
                            <button
                              key={type.id}
                              onClick={() => setFormData((prev) => ({ ...prev, eventType: type.id }))}
                              className={`p-4 border-2 rounded-lg text-left transition-all ${
                                formData.eventType === type.id
                                  ? "border-orange-500 bg-orange-50"
                                  : "border-gray-200 hover:border-orange-300"
                              }`}
                            >
                              <div className="font-semibold text-gray-900">{type.name}</div>
                              {type.multiplier !== 1 && (
                                <div className="text-sm text-gray-600">
                                  Complejidad: {type.multiplier > 1 ? "Alta" : "Estándar"}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                          ¿Cuántos asistentes esperás?
                        </Label>
                        <div className="space-y-4">
                          <Slider
                            value={[formData.attendees]}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, attendees: value[0] }))}
                            max={10000}
                            min={10}
                            step={10}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>10</span>
                            <span className="font-semibold text-orange-600 text-lg">
                              {formData.attendees.toLocaleString()} asistentes
                            </span>
                            <span>10,000+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Paso 2: Servicios */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Qué servicios necesitás?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.services.includes(service.id)
                                ? "border-orange-500 bg-orange-50"
                                : "border-gray-200 hover:border-orange-300"
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <Checkbox
                                    checked={formData.services.includes(service.id)}
                                    onChange={() => handleServiceToggle(service.id)}
                                    className="mr-3"
                                  />
                                  <h4 className="font-semibold text-gray-900">{service.name}</h4>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                                <Badge variant="outline" className="text-xs">
                                  {service.category}
                                </Badge>
                              </div>
                              <div className="text-right ml-4">
                                <div className="text-sm font-semibold text-orange-600">
                                  $
                                  {(
                                    service.basePrice +
                                    (service.pricePerPerson || 0) * formData.attendees
                                  ).toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Base: ${service.basePrice}
                                  {service.pricePerPerson && ` + $${service.pricePerPerson}/persona`}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Paso 3: Detalles del Evento */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Detalles del evento</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="date">Fecha del evento</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Ubicación</Label>
                          <Input
                            id="location"
                            placeholder="Ciudad, País"
                            value={formData.location}
                            onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                            className="mt-2"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">Detalles adicionales</Label>
                        <Textarea
                          id="message"
                          placeholder="Contanos más sobre tu evento, objetivos específicos, requerimientos especiales..."
                          value={formData.message}
                          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                          className="mt-2"
                          rows={4}
                        />
                      </div>
                    </div>
                  )}

                  {/* Paso 4: Información de Contacto */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de contacto</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Nombre completo *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            className="mt-2"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            className="mt-2"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Empresa</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Botones de Navegación */}
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="flex items-center bg-transparent"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>

                    {currentStep < 4 ? (
                      <Button
                        onClick={nextStep}
                        disabled={
                          (currentStep === 1 && !formData.eventType) ||
                          (currentStep === 2 && formData.services.length === 0)
                        }
                        className="bg-orange-500 hover:bg-orange-600 flex items-center"
                      >
                        Siguiente
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.name || !formData.email}
                        className="bg-orange-500 hover:bg-orange-600 flex items-center"
                      >
                        Enviar Cotización
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Precio Estimado */}
              <Card className="shadow-lg border-2 border-orange-200">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <DollarSign className="w-6 h-6 text-orange-600 mr-2" />
                    Precio Estimado
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-orange-600">${calculateTotal().toLocaleString()}</div>
                    <div className="text-sm text-gray-600">USD (aproximado)</div>
                  </div>

                  {formData.services.length > 0 && (
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Servicios incluidos:</h4>
                      {services
                        .filter((service) => formData.services.includes(service.id))
                        .map((service) => (
                          <div key={service.id} className="flex justify-between text-sm">
                            <span className="text-gray-700">{service.name}</span>
                            <span className="text-gray-900 font-medium">
                              $
                              {(
                                service.basePrice +
                                (service.pricePerPerson || 0) * formData.attendees
                              ).toLocaleString()}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}

                  <div className="text-xs text-gray-500 text-center">
                    * Precio final puede variar según requerimientos específicos
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span>Cotización 100% gratuita</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Respuesta en menos de 24 horas</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-purple-500 mr-3" />
                      <span>0 incidentes en 2 años</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-500 mr-3" />
                      <span>100% retención de clientes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contacto Directo */}
              <Card className="shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">¿Necesitás ayuda?</h3>
                  <p className="text-sm text-gray-300 mb-4">Hablá directamente con nuestro equipo</p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/5491112345678"
                      className="flex items-center text-sm hover:text-green-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-3" />
                      WhatsApp: +54 9 11 1234-5678
                    </a>
                    <a
                      href="mailto:contacto@somosder.ar"
                      className="flex items-center text-sm hover:text-blue-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-3" />
                      contacto@somosder.ar
                    </a>
                    <a
                      href="tel:+5491112345678"
                      className="flex items-center text-sm hover:text-orange-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Casos de Éxito */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Casos de <span className="text-orange-500">Éxito</span>
              </h2>
              <p className="text-xl text-gray-700">Eventos reales con presupuestos y resultados transparentes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {casosExito.map((caso, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{caso.evento}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Asistentes:</span>
                        <span className="font-semibold">{caso.asistentes}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Presupuesto:</span>
                        <span className="font-semibold text-orange-600">{caso.presupuesto}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Servicios:</span>
                        <span className="font-semibold">{caso.servicios} integrados</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Resultado:</span>
                        <Badge className="bg-green-100 text-green-800">{caso.resultado}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
