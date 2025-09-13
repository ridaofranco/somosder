"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
      <Card className="border-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col items-center text-center">
            <Quote className="h-12 w-12 text-primary/30 mb-6 rotate-180" />
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">{testimonials[current].quote}</p>
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
                <h4 className="font-medium">{testimonials[current].author}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-10 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/50 bg-transparent"
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
            className={`w-2 h-2 p-0 rounded-full ${i === current ? "bg-primary" : "bg-primary/30"}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ver testimonio ${i + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/50 bg-transparent"
          onClick={next}
          aria-label="Siguiente testimonio"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
