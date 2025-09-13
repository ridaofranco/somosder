"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Automatically set cookie consent without showing the banner
    if (typeof window !== "undefined" && localStorage) {
      if (!localStorage.getItem("cookie-consent")) {
        localStorage.setItem("cookie-consent", "accepted")
      }
    }
    setShowConsent(false) // Always keep this hidden
  }, [])

  const acceptCookies = () => {
    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("cookie-consent", "accepted")
    }
    setShowConsent(false)
  }

  const declineCookies = () => {
    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("cookie-consent", "declined")
    }
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Utilizamos cookies</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{" "}
              <Link href="/cookies" className="text-orange-500 hover:underline">
                política de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="text-xs h-8 px-3 py-1 border-gray-300"
            >
              Rechazar
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="text-xs h-8 px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white"
            >
              Aceptar
            </Button>
            <button
              onClick={declineCookies}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
