"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"

const testimonials = [
  {
    quote:
      "DER transformó nuestra idea en un evento corporativo excepcional. Su enfoque integral y atención al detalle superó todas nuestras expectativas.",
    author: "María Fernández",
    position: "Directora de Marketing, Empresa Líder",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "La capacidad de DER para gestionar todos los aspectos de nuestro evento internacional fue impresionante. Desde la logística hasta la tecnología, todo funcionó a la perfección.",
    author: "Carlos Rodríguez",
    position: "CEO, Startup Innovadora",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Trabajar con DER nos permitió concentrarnos en el contenido de nuestra conferencia mientras ellos se encargaban de toda la producción. El resultado fue un evento memorable.",
    author: "Laura Martínez",
    position: "Directora de Eventos, Asociación Industrial",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative">
      <Card className="border-none shadow-lg bg-white dark:bg-card transition-colors duration-300">
        <CardContent className="p-6 md:p-10">
          <div className="flex flex-col items-center text-center">
            <Quote className="h-12 w-12 text-orange-500 mb-6 rotate-180" />
            <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-card-foreground mb-6 max-w-3xl">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center mt-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 dark:text-card-foreground">
                  {testimonials[current].author}
                </h4>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">{testimonials[current].position}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full ${
            isDark ? "bg-dark-300 border-dark-400" : "bg-gray-200 border-gray-300"
          } text-gray-700 dark:text-foreground hover:bg-opacity-80 transition-colors duration-300`}
          onClick={prev}
          aria-label="Testimonio anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${
              i === current ? "bg-orange-500" : isDark ? "bg-dark-400" : "bg-gray-400"
            } transition-colors duration-300`}
            onClick={() => setCurrent(i)}
            aria-label={`Ver testimonio ${i + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full ${
            isDark ? "bg-dark-300 border-dark-400" : "bg-gray-200 border-gray-300"
          } text-gray-700 dark:text-foreground hover:bg-opacity-80 transition-colors duration-300`}
          onClick={next}
          aria-label="Siguiente testimonio"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
