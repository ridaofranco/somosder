"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Star, Zap, Calendar, TrendingUp, Users, Shield, Gift } from "lucide-react"

interface NewsletterProps {
  variant?: "default" | "sidebar" | "footer" | "popup"
  className?: string
}

export default function Newsletter({ variant = "default", className = "" }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular suscripción
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
    }, 1500)
  }

  const benefits = [
    { icon: Zap, text: "Tendencias de eventos 2025", color: "text-orange-500" },
    { icon: Star, text: "Casos de éxito exclusivos", color: "text-yellow-500" },
    { icon: Calendar, text: "Fechas importantes del sector", color: "text-blue-500" },
    { icon: TrendingUp, text: "Tips de ROI y métricas", color: "text-green-500" },
    { icon: Users, text: "Networking y oportunidades", color: "text-purple-500" },
    { icon: Gift, text: "Descuentos exclusivos", color: "text-red-500" },
  ]

  if (variant === "sidebar") {
    return (
      <Card className={`shadow-lg ${className}`}>
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter Exclusivo</h3>
            <p className="text-sm text-gray-600">Recibí insights y tendencias de eventos</p>
          </div>

          {isSubscribed ? (
            <div className="text-center py-4">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-600 font-medium">¡Suscripto exitosamente!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-orange-500 hover:bg-orange-600">
                {isLoading ? "Suscribiendo..." : "Suscribirme"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    )
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <h3 className="text-lg font-semibold text-white mb-4">Newsletter DER Events</h3>
        <p className="text-gray-300 mb-4">Tendencias, casos de éxito y tips exclusivos del mundo de eventos</p>

        {isSubscribed ? (
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>¡Gracias por suscribirte!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button type="submit" disabled={isLoading} className="bg-orange-500 hover:bg-orange-600">
              {isLoading ? "..." : "Suscribir"}
            </Button>
          </form>
        )}
      </div>
    )
  }

  // Variant 'default' - Sección completa
  return (
    <section className={`py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {isSubscribed ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Bienvenido a la comunidad DER!</h2>
              <p className="text-xl opacity-90 mb-8">
                Revisá tu email para confirmar la suscripción. Tu primer newsletter llega la próxima semana.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 rounded-lg p-4">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Contenido Exclusivo</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Calendar className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Cada Martes</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Shield className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Sin Spam</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Newsletter gratuito • Cada martes
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mantente al día con las <span className="text-yellow-300">tendencias</span> de eventos
                </h2>

                <p className="text-xl opacity-90 mb-8">
                  Recibí insights exclusivos, casos de éxito y tips prácticos directamente en tu inbox.{" "}
                  <strong>Solo contenido de valor, sin spam.</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <benefit.icon className={`w-5 h-5 mr-3 ${benefit.color}`} />
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm opacity-80">
                  <Users className="w-4 h-4 mr-2" />
                  <span>+500 organizadores ya se suscribieron</span>
                </div>
              </div>

              {/* Formulario */}
              <div>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-white text-gray-900 border-0"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-orange-600 hover:bg-gray-100 py-3 text-lg font-semibold"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600 mr-2"></div>
                            Suscribiendo...
                          </>
                        ) : (
                          <>
                            <Mail className="mr-2 h-5 w-5" />
                            Suscribirme Gratis
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-white/70 text-center">
                        Al suscribirte, aceptás recibir emails de DER Event Hub. Podés cancelar en cualquier momento.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
