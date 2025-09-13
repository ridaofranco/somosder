"use client"

import Link from "next/link"
import { Instagram, Linkedin, Twitter, Copy, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import NewsletterForm from "@/components/newsletter-form"

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "email") {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    })
  }

  return (
    <footer className="bg-secondary dark:bg-secondary text-gray-800 dark:text-foreground transition-colors duration-300">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-52 h-16">
                <Image src="/images/der-logo-final.png" alt="DER Logo" fill sizes="208px" className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-muted-foreground text-sm mb-4">
              Tu plataforma integral de soluciones para eventos. Más de 10 años creando experiencias memorables.
            </p>
            <div className="mb-6">
              <h4 className="text-gray-900 dark:text-foreground font-semibold mb-2 text-sm">
                Suscríbete al newsletter
              </h4>
              <NewsletterForm />
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/somosder.ar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-500 dark:text-muted-foreground hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://x.com/somosderar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-500 dark:text-muted-foreground hover:text-orange-500 transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/somosderar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-500 dark:text-muted-foreground hover:text-orange-500 transition-colors" />
              </Link>
              <Link
                href="https://www.tiktok.com/@somosder.ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-500 dark:text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-foreground font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/consultoria"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Consultoría Estratégica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/produccion"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Producción de Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/tecnologia"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Soluciones Tecnológicas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/marketing"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Marketing y Creatividad
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/deportes"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Gestión Deportiva
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/logistica"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Logística Internacional
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/accesos"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Control de Accesos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/venues-gestion"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Gestión de Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/cobertura"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Cobertura Fotográfica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/gastronomia"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Soluciones Gastronómicas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/post-evento"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Servicios Post-Evento
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/alianzas"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Alianzas Estratégicas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-foreground font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-foreground font-semibold mb-4">Contacto</h3>
            <h4 className="text-gray-800 dark:text-gray-200 font-medium text-sm mb-2">Argentina</h4>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-600 dark:text-muted-foreground text-sm">Aráoz 1146, Palermo, CABA.</li>
              <li className="text-gray-600 dark:text-muted-foreground text-sm">Buenos Aires, Argentina.</li>
            </ul>
            <h4 className="text-gray-800 dark:text-gray-200 font-medium text-sm mb-2">Paraguay</h4>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-600 dark:text-muted-foreground text-sm">My. José de Jesús Martínez</li>
              <li className="text-gray-600 dark:text-muted-foreground text-sm">Asunción 001006, Paraguay</li>
            </ul>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-muted-foreground text-sm">
                <span className="font-bold block mb-1">Email:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => (window.location.href = "mailto:contacto@derp.com.ar")}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Enviar Email
                  </button>
                  <button
                    onClick={() => copyToClipboard("contacto@derp.com.ar", "email")}
                    className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Copiar dirección de email"
                    title="Copiar dirección"
                  >
                    {copiedEmail ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>
              </li>
              <li className="text-gray-600 dark:text-muted-foreground text-sm">
                <span className="font-bold block mb-1">Teléfono / WhatsApp:</span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <a href="tel:+5491171540675" className="hover:text-orange-500 transition-colors">
                      +54 9 11 7154-0675
                    </a>
                    <button
                      onClick={() => copyToClipboard("+5491171540675", "phone")}
                      className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Copiar número de teléfono"
                      title="Copiar número"
                    >
                      {copiedPhone ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                      )}
                    </button>
                  </div>
                  <a
                    href="https://api.whatsapp.com/message/CLJ55YZQWNRFC1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-muted-foreground hover:text-green-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#25D366"
                      className="mr-2"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contactar por WhatsApp Business
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} DER. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terminos"
              className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/privacidad"
              className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/cookies"
              className="text-gray-600 dark:text-muted-foreground hover:text-orange-500 transition-colors text-sm"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
