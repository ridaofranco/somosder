"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Users,
  Clock,
  Music,
  Utensils,
  Camera,
  Truck,
  Ticket,
  Mic,
  Monitor,
  Award,
  Coffee,
  Gift,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Calendar,
  Building,
  Phone,
  Mail,
  MessageSquare,
  ArrowLeft,
  Printer,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react"

// Tipos de eventos
const eventTypes = [
  { id: "corporativo", name: "Corporativo", icon: <Monitor className="h-6 w-6" />, basePrice: 15000 },
  { id: "social", name: "Social", icon: <Users className="h-6 w-6" />, basePrice: 8000 },
  { id: "concierto", name: "Concierto", icon: <Music className="h-6 w-6" />, basePrice: 25000 },
  { id: "deportivo", name: "Deportivo", icon: <Award className="h-6 w-6" />, basePrice: 18000 },
  { id: "conferencia", name: "Conferencia", icon: <Mic className="h-6 w-6" />, basePrice: 12000 },
]

// Servicios adicionales
const additionalServices = [
  {
    id: "catering",
    name: "Catering Premium",
    icon: <Utensils className="h-5 w-5" />,
    price: 5000,
    description: "Menú gourmet personalizado con opciones vegetarianas y veganas",
  },
  {
    id: "audiovisual",
    name: "Equipo Audiovisual",
    icon: <Monitor className="h-5 w-5" />,
    price: 3500,
    description: "Pantallas LED, sonido profesional y efectos visuales",
  },
  {
    id: "fotografia",
    name: "Fotografía y Video",
    icon: <Camera className="h-5 w-5" />,
    price: 2800,
    description: "Equipo profesional con edición y entrega digital",
  },
  {
    id: "transporte",
    name: "Transporte VIP",
    icon: <Truck className="h-5 w-5" />,
    price: 2000,
    description: "Servicio de traslado para invitados VIP",
  },
  {
    id: "entradas",
    name: "Sistema de Entradas",
    icon: <Ticket className="h-5 w-5" />,
    price: 1500,
    description: "Plataforma digital con códigos QR y control de acceso",
  },
  {
    id: "coffee",
    name: "Coffee Break",
    icon: <Coffee className="h-5 w-5" />,
    price: 1200,
    description: "Servicio continuo de café, té y aperitivos",
  },
  {
    id: "regalos",
    name: "Regalos Corporativos",
    icon: <Gift className="h-5 w-5" />,
    price: 2500,
    description: "Merchandising personalizado para asistentes",
  },
]

// Preguntas frecuentes
const faqs = [
  {
    question: "¿Qué tan precisas son las cotizaciones?",
    answer:
      "Nuestras cotizaciones tienen un margen de precisión del 90-95%. El precio final puede variar según requerimientos específicos y disponibilidad.",
  },
  {
    question: "¿Puedo modificar mi cotización después de enviarla?",
    answer:
      "Sí, nuestro equipo te contactará para revisar los detalles y podrás ajustar cualquier aspecto de la cotización.",
  },
  {
    question: "¿Cuánto tiempo tarda en llegar la cotización formal?",
    answer: "Recibirás una cotización formal detallada en un plazo máximo de 24 horas hábiles.",
  },
  {
    question: "¿Qué información adicional necesitaré proporcionar?",
    answer:
      "Dependiendo del tipo de evento, podríamos solicitar planos del lugar, listado de invitados VIP, o requisitos técnicos específicos.",
  },
  {
    question: "¿Ofrecen descuentos por temporada baja?",
    answer:
      "Sí, contamos con tarifas especiales para eventos en temporada baja (mayo-agosto) y para reservas con más de 6 meses de anticipación.",
  },
]

// Ejemplos de eventos
const eventExamples = {
  corporativo: {
    title: "Lanzamiento de Producto",
    description: "Evento para 150 personas con presentación multimedia, catering premium y fotografía profesional.",
    attendees: 150,
    duration: 6,
    services: ["catering", "audiovisual", "fotografia"],
  },
  social: {
    title: "Boda Elegante",
    description:
      "Ceremonia y recepción para 100 invitados con decoración personalizada, DJ y servicio de catering gourmet.",
    attendees: 100,
    duration: 8,
    services: ["catering", "audiovisual", "fotografia"],
  },
  concierto: {
    title: "Concierto en Venue Privado",
    description:
      "Presentación musical para 500 asistentes con escenario profesional, iluminación y sistema de sonido premium.",
    attendees: 500,
    duration: 5,
    services: ["audiovisual", "entradas", "transporte"],
  },
  deportivo: {
    title: "Torneo Corporativo",
    description:
      "Competencia deportiva para 200 participantes con sistema de registro, premiación y servicio de catering.",
    attendees: 200,
    duration: 10,
    services: ["catering", "entradas", "regalos"],
  },
  conferencia: {
    title: "Congreso Internacional",
    description:
      "Conferencia de 2 días para 300 asistentes con múltiples salas, traducción simultánea y coffee breaks.",
    attendees: 300,
    duration: 16,
    services: ["audiovisual", "coffee", "entradas"],
  },
}

export default function QuoteCalculator() {
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedEventType, setSelectedEventType] = useState("")
  const [attendees, setAttendees] = useState(100)
  const [duration, setDuration] = useState(4)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showExample, setShowExample] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventDate: "",
    comments: "",
  })
  const [totalCost, setTotalCost] = useState(0)
  const [breakdown, setBreakdown] = useState<{ category: string; amount: number }[]>([])
  const [linkCopied, setLinkCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [quoteResult, setQuoteResult] = useState<{
    quoteId?: string
    success: boolean
    message: string
  } | null>(null)

  // Generar un ID único para la cotización
  const generateQuoteId = useCallback(() => {
    return `DER-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
  }, [])

  // Cargar ejemplo de evento
  const loadExample = useCallback(() => {
    if (!selectedEventType) return

    const example = eventExamples[selectedEventType as keyof typeof eventExamples]
    setAttendees(example.attendees)
    setDuration(example.duration)
    setSelectedServices(example.services)
    setShowExample(false)

    toast({
      title: "Ejemplo cargado",
      description: `Se ha cargado el ejemplo: ${example.title}`,
    })

    // Avanzar al siguiente paso
    setCurrentStep(2)
  }, [selectedEventType, toast])

  // Calcular costo total
  useEffect(() => {
    if (!selectedEventType) {
      setTotalCost(0)
      setBreakdown([])
      return
    }

    const selectedEvent = eventTypes.find((type) => type.id === selectedEventType)
    if (!selectedEvent) return

    // Costo base según tipo de evento
    const baseCost = selectedEvent.basePrice

    // Factor por número de asistentes (costo por persona)
    const attendeeFactor = attendees * (selectedEvent.basePrice * 0.01)

    // Factor por duración (costo por hora)
    const durationFactor = duration * (selectedEvent.basePrice * 0.05)

    // Costos de servicios adicionales
    const servicesCost = selectedServices.reduce((total, serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)

    // Cálculo del total
    const calculatedTotal = baseCost + attendeeFactor + durationFactor + servicesCost

    // Actualizar el desglose
    const newBreakdown = [
      { category: "Costo base del evento", amount: baseCost },
      { category: `Asistentes (${attendees} personas)`, amount: attendeeFactor },
      { category: `Duración (${duration} horas)`, amount: durationFactor },
    ]

    // Añadir servicios al desglose
    if (selectedServices.length > 0) {
      selectedServices.forEach((serviceId) => {
        const service = additionalServices.find((s) => s.id === serviceId)
        if (service) {
          newBreakdown.push({ category: service.name, amount: service.price })
        }
      })
    }

    setTotalCost(calculatedTotal)
    setBreakdown(newBreakdown)
  }, [selectedEventType, attendees, duration, selectedServices])

  // Validar formulario
  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!contactInfo.name.trim()) {
      errors.name = "El nombre es obligatorio"
    } else if (contactInfo.name.length < 2) {
      errors.name = "El nombre es demasiado corto"
    }

    if (!contactInfo.email.trim()) {
      errors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      errors.email = "El email no es válido"
    }

    if (!contactInfo.phone.trim()) {
      errors.phone = "El teléfono es obligatorio"
    } else if (contactInfo.phone.length < 5) {
      errors.phone = "El teléfono es demasiado corto"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Manejar envío del formulario
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Validar campos requeridos
      if (!validateForm()) {
        toast({
          title: "Campos incompletos",
          description: "Por favor completa todos los campos obligatorios correctamente.",
          variant: "destructive",
        })
        return
      }

      setIsSubmitting(true)
      setQuoteResult(null)

      try {
        // Preparar datos para enviar a Formspree
        const formData = new FormData()

        // Datos de contacto
        formData.append("Nombre", contactInfo.name)
        formData.append("Email", contactInfo.email)
        formData.append("Teléfono", contactInfo.phone)
        formData.append("Empresa", contactInfo.company || "No especificada")
        formData.append("Fecha del evento", contactInfo.eventDate || "No especificada")
        formData.append("Comentarios", contactInfo.comments || "No hay comentarios adicionales")

        // Datos del evento
        const eventTypeName = eventTypes.find((type) => type.id === selectedEventType)?.name || selectedEventType
        formData.append("Tipo de evento", eventTypeName)
        formData.append("Número de asistentes", attendees.toString())
        formData.append("Duración (horas)", duration.toString())

        // Servicios seleccionados
        const servicesText =
          selectedServices.length > 0
            ? selectedServices.map((id) => additionalServices.find((s) => s.id === id)?.name).join(", ")
            : "Ninguno"
        formData.append("Servicios adicionales", servicesText)

        // Costo total
        formData.append("Costo total estimado", `$${totalCost.toLocaleString()}`)

        // Generar ID de cotización
        const quoteId = generateQuoteId()
        formData.append("ID de cotización", quoteId)

        // Identificador de tipo de formulario
        formData.append("tipo_formulario", "cotizacion")

        // Enviar a Formspree
        const response = await fetch("https://formspree.io/f/xpwdpwwa", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })

        if (response.ok) {
          toast({
            title: "¡Cotización enviada!",
            description: "Hemos recibido tu solicitud. Te contactaremos pronto.",
          })

          // Guardar resultado
          setQuoteResult({
            quoteId: quoteId,
            success: true,
            message: "Hemos recibido tu solicitud de cotización. Nuestro equipo te contactará pronto.",
          })

          // Mostrar pantalla de éxito
          setCurrentStep(4)
        } else {
          const responseData = await response.json()
          toast({
            title: "Error",
            description:
              responseData.error || "Ha ocurrido un error al enviar tu cotización. Por favor, inténtalo de nuevo.",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error("Error al enviar la cotización:", error)
        toast({
          title: "Error",
          description: "Ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [contactInfo, selectedEventType, attendees, duration, selectedServices, toast, generateQuoteId, totalCost],
  )

  // Reiniciar cotizador
  const resetQuoteCalculator = useCallback(() => {
    setCurrentStep(1)
    setSelectedEventType("")
    setAttendees(100)
    setDuration(4)
    setSelectedServices([])
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      company: "",
      eventDate: "",
      comments: "",
    })
    setFormErrors({})
    setQuoteResult(null)
  }, [])

  // Simular descarga de PDF
  const handleDownloadPDF = useCallback(() => {
    toast({
      title: "Descargando cotización",
      description: "Tu cotización en PDF se está descargando...",
    })

    // Aquí iría la lógica real para generar y descargar un PDF
    setTimeout(() => {
      const a = document.createElement("a")
      a.href = "#"
      a.download = `Cotizacion-${quoteResult?.quoteId || "DER"}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }, 1500)
  }, [toast, quoteResult])

  // Simular compartir cotización
  const handleShareQuote = useCallback(() => {
    setLinkCopied(true)

    // Generar un enlace para compartir (simulado)
    const shareUrl = `${window.location.origin}/cotizador/compartir/${quoteResult?.quoteId || "demo"}`

    // Intentar usar la API de compartir si está disponible
    if (navigator.share) {
      navigator
        .share({
          title: "Mi cotización de DER Events",
          text: "Mira mi cotización para un evento",
          url: shareUrl,
        })
        .catch((err) => {
          console.error("Error al compartir:", err)
          // Fallback: copiar al portapapeles
          navigator.clipboard.writeText(shareUrl)
        })
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(shareUrl)
    }

    toast({
      title: "Enlace copiado",
      description: "Se ha copiado el enlace a tu cotización.",
    })

    setTimeout(() => {
      setLinkCopied(false)
    }, 3000)
  }, [toast, quoteResult])

  // Simular impresión
  const handlePrint = useCallback(() => {
    toast({
      title: "Imprimiendo cotización",
      description: "Preparando documento para imprimir...",
    })

    // Usar la API de impresión del navegador
    setTimeout(() => {
      window.print()
    }, 500)
  }, [toast])

  // Manejar cambio de servicios
  const handleServiceToggle = useCallback((serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }, [])

  // Manejar cambios en el formulario de contacto
  const handleContactInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setContactInfo((prev) => ({
        ...prev,
        [name]: value,
      }))

      // Limpiar error del campo cuando el usuario escribe
      if (formErrors[name]) {
        setFormErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    },
    [formErrors],
  )

  return (
    <div className="space-y-8">
      {/* Pasos del cotizador */}
      {currentStep < 4 && (
        <div className="flex justify-between items-center mb-8 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div
            className={`flex flex-col items-center ${
              currentStep >= 1 ? "text-purple-600 dark:text-purple-400" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                currentStep >= 1 ? "bg-purple-600 text-white" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              1
            </div>
            <span className="text-xs md:text-sm hidden md:block">Tipo de Evento</span>
          </div>

          <div className="flex-1 h-1 mx-2 bg-gray-300 dark:bg-gray-600">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${currentStep > 1 ? "100%" : "0%"}` }}
            ></div>
          </div>

          <div
            className={`flex flex-col items-center ${
              currentStep >= 2 ? "text-purple-600 dark:text-purple-400" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                currentStep >= 2 ? "bg-purple-600 text-white" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              2
            </div>
            <span className="text-xs md:text-sm hidden md:block">Personalización</span>
          </div>

          <div className="flex-1 h-1 mx-2 bg-gray-300 dark:bg-gray-600">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${currentStep > 2 ? "100%" : "0%"}` }}
            ></div>
          </div>

          <div
            className={`flex flex-col items-center ${
              currentStep >= 3 ? "text-purple-600 dark:text-purple-400" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                currentStep >= 3 ? "bg-purple-600 text-white" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              3
            </div>
            <span className="text-xs md:text-sm hidden md:block">Finalizar</span>
          </div>
        </div>
      )}

      {/* Paso 1: Selección de tipo de evento */}
      {currentStep === 1 && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Selecciona el tipo de evento</CardTitle>
              <CardDescription>Elige la categoría que mejor se adapte al evento que estás planeando</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-6 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedEventType === type.id
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => setSelectedEventType(type.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`p-3 rounded-full mb-4 ${
                          selectedEventType === type.id
                            ? "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {type.icon}
                      </div>
                      <h3 className="font-medium text-lg mb-2">{type.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Desde ${type.basePrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedEventType && (
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">¿Necesitas inspiración?</h3>
                    <Button variant="ghost" size="sm" onClick={() => setShowExample(!showExample)}>
                      {showExample ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
                      {showExample ? "Ocultar ejemplo" : "Ver ejemplo"}
                    </Button>
                  </div>

                  {showExample && (
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="font-medium text-lg mb-2">
                        {eventExamples[selectedEventType as keyof typeof eventExamples].title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {eventExamples[selectedEventType as keyof typeof eventExamples].description}
                      </p>
                      <Button onClick={loadExample}>Usar este ejemplo</Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <div></div>
              <Button
                onClick={() => setCurrentStep(2)}
                disabled={!selectedEventType}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Continuar <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Paso 2: Personalización */}
      {currentStep === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Personaliza tu evento</CardTitle>
                <CardDescription>Ajusta los detalles para obtener una cotización más precisa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Número de asistentes */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="attendees" className="text-base flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gray-500" />
                      Número de asistentes
                    </Label>
                    <span className="font-medium text-purple-600 dark:text-purple-400">{attendees} personas</span>
                  </div>
                  <div className="px-2">
                    <Slider
                      id="attendees"
                      min={10}
                      max={1000}
                      step={10}
                      value={[attendees]}
                      onValueChange={(value) => setAttendees(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>10</span>
                      <span>500</span>
                      <span>1000</span>
                    </div>
                  </div>
                </div>

                {/* Duración del evento */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="duration" className="text-base flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      Duración del evento
                    </Label>
                    <span className="font-medium text-purple-600 dark:text-purple-400">{duration} horas</span>
                  </div>
                  <div className="px-2">
                    <Slider
                      id="duration"
                      min={1}
                      max={24}
                      step={1}
                      value={[duration]}
                      onValueChange={(value) => setDuration(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1h</span>
                      <span>12h</span>
                      <span>24h</span>
                    </div>
                  </div>
                </div>

                {/* Servicios adicionales */}
                <div className="space-y-4">
                  <Label className="text-base flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-gray-500" />
                    Servicios adicionales
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {additionalServices.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border rounded-lg flex items-start space-x-3 cursor-pointer transition-all ${
                          selectedServices.includes(service.id)
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <Checkbox
                          id={`service-${service.id}`}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                          className="mt-1"
                        />
                        <div className="space-y-1">
                          <Label
                            htmlFor={`service-${service.id}`}
                            className="text-base font-medium cursor-pointer flex items-center"
                          >
                            <span className="mr-2">{service.name}</span>
                            <span className="text-sm font-normal text-purple-600 dark:text-purple-400">
                              ${service.price.toLocaleString()}
                            </span>
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Atrás
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="bg-purple-600 hover:bg-purple-700">
                  Continuar <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Resumen de cotización */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20 rounded-t-lg">
                <CardTitle className="text-xl">Resumen de cotización</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Detalles del evento</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tipo de evento:</span>
                      <span className="font-medium">
                        {eventTypes.find((type) => type.id === selectedEventType)?.name || ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Asistentes:</span>
                      <span className="font-medium">{attendees} personas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duración:</span>
                      <span className="font-medium">{duration} horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Servicios adicionales:</span>
                      <span className="font-medium">{selectedServices.length}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Desglose de costos</h3>
                  <div className="space-y-2 text-sm">
                    {breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">{item.category}:</span>
                        <span className="font-medium">${item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total estimado:</span>
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      ${totalCost.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *Este es un presupuesto estimado. El precio final puede variar según requerimientos específicos.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center"
                    onClick={handlePrint}
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Imprimir cotización
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center"
                    onClick={handleDownloadPDF}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar PDF
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center"
                    onClick={handleShareQuote}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartir cotización
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Paso 3: Formulario de contacto */}
      {currentStep === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Finaliza tu cotización</CardTitle>
                <CardDescription>
                  Completa tus datos para recibir una propuesta detallada de nuestro equipo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  action="https://formspree.io/f/xpwdpwwa"
                  method="POST"
                >
                  {/* Campos ocultos para enviar información adicional a Formspree */}
                  <input
                    type="hidden"
                    name="tipo_evento"
                    value={eventTypes.find((type) => type.id === selectedEventType)?.name || selectedEventType}
                  />
                  <input type="hidden" name="asistentes" value={attendees.toString()} />
                  <input type="hidden" name="duracion" value={duration.toString()} />
                  <input
                    type="hidden"
                    name="servicios"
                    value={selectedServices.map((id) => additionalServices.find((s) => s.id === id)?.name).join(", ")}
                  />
                  <input type="hidden" name="costo_total" value={totalCost.toString()} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <span className="mr-2">Nombre completo</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <div
                        className={`flex items-center border rounded-md focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500 ${formErrors.name ? "border-red-500" : ""}`}
                      >
                        <div className="px-3 py-2 text-gray-500">
                          <Users className="h-5 w-5" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleContactInfoChange}
                          placeholder="Tu nombre"
                          className={`border-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${formErrors.name ? "placeholder-red-400" : ""}`}
                          required
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-sm text-red-500 flex items-center mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <span className="mr-2">Correo electrónico</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <div
                        className={`flex items-center border rounded-md focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500 ${formErrors.email ? "border-red-500" : ""}`}
                      >
                        <div className="px-3 py-2 text-gray-500">
                          <Mail className="h-5 w-5" />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={handleContactInfoChange}
                          placeholder="tu@email.com"
                          className={`border-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${formErrors.email ? "placeholder-red-400" : ""}`}
                          required
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-sm text-red-500 flex items-center mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <span className="mr-2">Teléfono</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <div
                        className={`flex items-center border rounded-md focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500 ${formErrors.phone ? "border-red-500" : ""}`}
                      >
                        <div className="px-3 py-2 text-gray-500">
                          <Phone className="h-5 w-5" />
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          value={contactInfo.phone}
                          onChange={handleContactInfoChange}
                          placeholder="+54 9 11 1234-5678"
                          className={`border-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${formErrors.phone ? "placeholder-red-400" : ""}`}
                          required
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-sm text-red-500 flex items-center mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center">
                        <span className="mr-2">Empresa u organización</span>
                      </Label>
                      <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <div className="px-3 py-2 text-gray-500">
                          <Building className="h-5 w-5" />
                        </div>
                        <Input
                          id="company"
                          name="company"
                          value={contactInfo.company}
                          onChange={handleContactInfoChange}
                          placeholder="Nombre de tu empresa"
                          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="flex items-center">
                        <span className="mr-2">Fecha tentativa del evento</span>
                      </Label>
                      <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <div className="px-3 py-2 text-gray-500">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={contactInfo.eventDate}
                          onChange={handleContactInfoChange}
                          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="comments" className="flex items-center">
                        <span className="mr-2">Comentarios adicionales</span>
                      </Label>
                      <div className="flex items-start border rounded-md focus-within:ring-1 focus-within:ring-purple-500 focus-within:border-purple-500">
                        <div className="px-3 py-2 text-gray-500">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <Textarea
                          id="comments"
                          name="comments"
                          value={contactInfo.comments}
                          onChange={handleContactInfoChange}
                          placeholder="Cuéntanos más detalles sobre tu evento..."
                          className="min-h-[120px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <p className="text-sm text-gray-500">
                        Al enviar este formulario, aceptas nuestra{" "}
                        <a href="/privacidad" className="text-purple-600 hover:underline">
                          política de privacidad
                        </a>{" "}
                        y{" "}
                        <a href="/terminos" className="text-purple-600 hover:underline">
                          términos de servicio
                        </a>
                        .
                      </p>
                      <div className="flex gap-4">
                        <Button variant="outline" type="button" onClick={() => setCurrentStep(2)}>
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Atrás
                        </Button>
                        <Button type="submit" className="bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Enviar cotización
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Campo oculto para protección anti-spam */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} />
                </form>
              </CardContent>
            </Card>

            {/* Preguntas frecuentes */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Preguntas frecuentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                        <button
                          className="flex justify-between items-center w-full p-4 text-left font-medium"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <span>{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Resumen de cotización */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20 rounded-t-lg">
                <CardTitle className="text-xl">Resumen de cotización</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Detalles del evento</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Tipo de evento:</span>
                      <span className="font-medium">
                        {eventTypes.find((type) => type.id === selectedEventType)?.name || ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Asistentes:</span>
                      <span className="font-medium">{attendees} personas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duración:</span>
                      <span className="font-medium">{duration} horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Servicios adicionales:</span>
                      <span className="font-medium">{selectedServices.length}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Desglose de costos</h3>
                  <div className="space-y-2 text-sm">
                    {breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">{item.category}:</span>
                        <span className="font-medium">${item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total estimado:</span>
                    <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      ${totalCost.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *Este es un presupuesto estimado. El precio final puede variar según requerimientos específicos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Paso 4: Confirmación */}
      {currentStep === 4 && (
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6 pb-8 px-6 md:p-10 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¡Cotización enviada con éxito!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Hemos recibido tu solicitud de cotización. Nuestro equipo de expertos en eventos te contactará en breve
              para discutir los detalles y enviarte una propuesta personalizada.
            </p>

            {quoteResult?.quoteId && (
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300">Número de referencia:</p>
                <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">{quoteResult.quoteId}</p>
              </div>
            )}

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-8 inline-block mx-auto">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-2">Presupuesto estimado</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">${totalCost.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={handleDownloadPDF} className="flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Descargar cotización
              </Button>
              <Button onClick={resetQuoteCalculator} className="bg-purple-600 hover:bg-purple-700">
                Crear nueva cotización
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
