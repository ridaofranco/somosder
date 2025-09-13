import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  variant?: "default" | "gradient" | "dark"
}

export default function CTASection({
  title = "¿Listo para crear tu próximo evento?",
  description = "Contáctanos hoy mismo y descubrí cómo podemos ayudarte a crear tu próximo evento excepcional.",
  primaryButtonText = "Solicitar Consulta",
  primaryButtonLink = "/contacto",
  secondaryButtonText,
  secondaryButtonLink,
  variant = "gradient",
}: CTASectionProps) {
  // Siempre usar el estilo de gradiente que le gusta al usuario
  const sectionClassName = "py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500"

  return (
    <section className={sectionClassName}>
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white text-opacity-90 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonLink}>
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
                {primaryButtonText} {primaryButtonText && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
