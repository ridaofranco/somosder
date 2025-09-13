"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { faqs } from "@/lib/data"
import { useState, useEffect } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [allExpanded, setAllExpanded] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const savedState = localStorage.getItem("faq-open-items")
      if (savedState) {
        const parsed = JSON.parse(savedState)
        setOpenItems(parsed)
        setAllExpanded(parsed.length === faqs.length)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("faq-open-items", JSON.stringify(openItems))
    }
  }, [openItems])

  const toggleAllItems = () => {
    if (allExpanded) {
      setOpenItems([])
      setAllExpanded(false)
    } else {
      const allItems = faqs.map((_, index) => `item-${index}`)
      setOpenItems(allItems)
      setAllExpanded(true)
    }
  }

  const handleValueChange = (value: string) => {
    if (openItems.includes(value)) {
      const newItems = openItems.filter((item) => item !== value)
      setOpenItems(newItems)
      setAllExpanded(false)
    } else {
      const newItems = [...openItems, value]
      setOpenItems(newItems)
      setAllExpanded(newItems.length === faqs.length)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Preguntas <span className="text-orange-500">Frecuentes</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-slate-300 mb-8">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y cómo podemos ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-100 section-lighter">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-end mb-6">
              <Button
                variant="outline"
                onClick={toggleAllItems}
                className="flex items-center gap-2 text-orange-500 border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 bg-transparent"
              >
                {allExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Colapsar todas
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Expandir todas
                  </>
                )}
              </Button>
            </div>

            <Accordion type="multiple" value={openItems} className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg p-1 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger
                    className="text-lg font-medium px-4 py-3 hover:text-orange-500 transition-colors [&[data-state=open]]:text-orange-500"
                    onClick={() => handleValueChange(`item-${index}`)}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2 text-gray-600 dark:text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              {openItems.length} de {faqs.length} preguntas expandidas
            </div>
          </div>
        </div>
      </section>

      {/* Additional Questions Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-dark-200 section-light">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                ¿No encontraste lo que <span className="text-orange-500">buscabas</span>?
              </h2>
              <p className="text-gray-600 dark:text-muted-foreground md:text-lg">
                Nuestro equipo está listo para responder cualquier pregunta adicional que puedas tener.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
              >
                Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
