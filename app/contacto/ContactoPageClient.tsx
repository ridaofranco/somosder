"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  Users,
  Calendar,
  ArrowRight,
  Shield,
  Zap,
  Send,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react"

interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  eventType: string
  attendees: string
  date: string
  budget: string
  message: string
}

export default function ContactoPageClient() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    attendees: "",
    date: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      value: "+54 9 11 7154-0675",
      link: "https://wa.me/5491171540675",
      color: "green",
      available: "24/7",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Respuesta en 2-4 horas",
      value: "contacto@somosder.com.ar",
      link: "mailto:contacto@somosder.com.ar",
      color: "blue",
      available: "Lun-Vie 9-18hs",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Llamada directa",
      value: "+54 9 11 7154-0675",
      link: "tel:+5491171540675",
      color: "orange",
      available: "Lun-Vie 9-18hs",
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Contacto Inicial",
      description: "Te contactamos en menos de 24 horas para entender tu visión",
      time: "24 horas",
      icon: MessageCircle,
    },
    {
      step: 2,
      title: "Reunión Estratégica",
      description: "Definimos objetivos, alcance y requerimientos específicos",
      time: "2-3 días",
      icon: Users,
    },
    {
      step: 3,
      title: "Propuesta Detallada",
      description: "Presentamos propuesta completa con cronograma y presupuesto",
      time: "5-7 días",
      icon: Calendar,
    },
    {
      step: 4,
      title: "Ejecución",
      description: "Planificación, coordinación y ejecución de tu evento",
      time: "Según cronograma",
      icon: CheckCircle,
    },
  ]

  const testimonials = [
    {
      name: "María González",
      company: "Shell Argentina",
      text: "El proceso de contacto con DER fue excepcional. Desde el primer mensaje hasta la ejecución del evento, todo fue transparente y profesional.",
      rating: 5,
      avatar: "MG",
    },
    {
      name: "Carlos Mendoza",
      company: "Campus Party",
      text: "Su capacidad de respuesta es impresionante. En menos de 12 horas ya teníamos una propuesta inicial y en una semana el proyecto completo.",
      rating: 5,
      avatar: "CM",
    },
    {
      name: "Laura Pérez",
      company: "Manchester City",
      text: "Trabajar con DER desde el contacto inicial fue una experiencia diferente. Atención personalizada y seguimiento constante.",
      rating: 5,
      avatar: "LP",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¡Mensaje Enviado!</h1>
          <p className="text-xl text-gray-700 mb-8">Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg">
              <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-semibold">Respuesta</div>
              <div className="text-xs text-gray-600">Menos de 24h</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-semibold">Reunión</div>
              <div className="text-xs text-gray-600">2-3 días</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <Calendar className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <div className="text-sm font-semibold">Propuesta</div>
              <div className="text-xs text-gray-600">5-7 días</div>
            </div>
          </div>
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600">Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contacto-hero.jpg"
            alt="Contacto DER Event Hub"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Respuesta garantizada en 24 horas
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hablemos de tu <span className="text-yellow-300">próximo evento</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Cada gran evento comienza con una <strong>conversación</strong>. Contanos tu visión y la hacemos realidad.
            </p>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491171540675"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </a>
              <a
                href="tel:+5491171540675"
                className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulario de Contacto */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Send className="w-6 h-6 text-orange-500 mr-3" />
                    Contanos sobre tu evento
                  </CardTitle>
                  <p className="text-gray-600">
                    Completá el formulario y te contactaremos en menos de 24 horas con una propuesta inicial
                  </p>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Información Personal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    {/* Información del Evento */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="eventType">Tipo de evento</Label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Seleccionar tipo</option>
                          <option value="corporativo">Evento Corporativo</option>
                          <option value="conferencia">Conferencia</option>
                          <option value="concierto">Concierto</option>
                          <option value="deportivo">Evento Deportivo</option>
                          <option value="social">Evento Social</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="attendees">Cantidad de asistentes</Label>
                        <select
                          id="attendees"
                          name="attendees"
                          value={formData.attendees}
                          onChange={handleInputChange}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Seleccionar cantidad</option>
                          <option value="10-50">10-50 personas</option>
                          <option value="51-100">51-100 personas</option>
                          <option value="101-500">101-500 personas</option>
                          <option value="501-1000">501-1,000 personas</option>
                          <option value="1000+">Más de 1,000 personas</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="date">Fecha tentativa</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="budget">Presupuesto estimado</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Seleccionar rango</option>
                          <option value="5000-15000">$5,000 - $15,000</option>
                          <option value="15000-50000">$15,000 - $50,000</option>
                          <option value="50000-100000">$50,000 - $100,000</option>
                          <option value="100000+">Más de $100,000</option>
                          <option value="por-definir">Por definir</option>
                        </select>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <Label htmlFor="message">Contanos más sobre tu evento</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Objetivos del evento, requerimientos específicos, ideas creativas..."
                        className="mt-2"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email}
                      className="w-full bg-orange-500 hover:bg-orange-600 py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Métodos de Contacto */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Contacto Directo</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="block p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start">
                        <div
                          className={`w-10 h-10 bg-${method.color}-100 rounded-full flex items-center justify-center mr-4`}
                        >
                          <method.icon className={`w-5 h-5 text-${method.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{method.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                          <p className="text-sm font-medium text-gray-900">{method.value}</p>
                          <p className="text-xs text-gray-500">{method.available}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Ubicación */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    Ubicación
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">Buenos Aires, Argentina</p>
                    <p className="text-gray-600">Cobertura en toda LATAM</p>
                    <p className="text-gray-600">Oficinas virtuales disponibles</p>
                  </div>
                </CardContent>
              </Card>

              {/* Horarios */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    Horarios de Atención
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lunes - Viernes:</span>
                      <span className="text-gray-900">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábados:</span>
                      <span className="text-gray-900">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">WhatsApp:</span>
                      <span className="text-green-600">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Eventos:</span>
                      <span className="text-orange-600">Soporte 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Redes Sociales */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Seguinos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/somosder"
                      className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </a>
                    <a
                      href="https://linkedin.com/company/somosder"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href="https://facebook.com/somosder"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestro <span className="text-orange-500">Proceso</span>
              </h2>
              <p className="text-xl text-gray-700">Desde el primer contacto hasta la ejecución perfecta</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 relative">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <Badge className="bg-orange-500 text-white mb-3">Paso {step.step}</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                    <div className="text-xs text-orange-600 font-semibold">{step.time}</div>
                  </CardContent>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-orange-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios sobre Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiencia de <span className="text-orange-500">Contacto</span>
              </h2>
              <p className="text-xl text-gray-700">Lo que dicen nuestros clientes sobre nuestro proceso de contacto</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-gray-700 mb-4">"{testimonial.text}"</blockquote>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantías */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Nuestras <span className="text-orange-500">Garantías</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Respuesta 24h</h3>
                <p className="text-sm text-gray-600">Garantizamos respuesta en menos de 24 horas</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">0 Incidentes</h3>
                <p className="text-sm text-gray-600">2 años sin incidentes de seguridad</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Retención</h3>
                <p className="text-sm text-gray-600">Todos nuestros clientes repiten</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tecnología Propia</h3>
                <p className="text-sm text-gray-600">Sin dependencias externas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tu próximo evento <span className="text-yellow-300">excepcional</span> está a un mensaje de distancia
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              No esperes más. Cada día que pasa es una oportunidad perdida para crear algo extraordinario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491171540675"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Ahora
              </a>
              <Link href="/cotizador">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
                >
                  Cotizar Mi Evento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}