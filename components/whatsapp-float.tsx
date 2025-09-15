"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-72 overflow-hidden transition-all duration-300 transform scale-100 opacity-100">
          <div className="bg-[#128C7E] p-4 flex items-center">
            <div className="relative w-10 h-10 mr-3">
              <Image
                src="/images/der-logo-final.png"
                alt="DER Logo"
                fill
                className="object-contain rounded-full bg-white p-1"
              />
            </div>
            <div>
              <h3 className="text-white font-medium">DER</h3>
              <p className="text-white text-xs opacity-80">Soluciones para eventos</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white hover:bg-white/10 rounded-full p-1"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-4">
              ¿Necesitas ayuda con tu próximo evento? Estamos aquí para asistirte.
            </p>
            <a
              href="https://wa.me/5491171540675"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-center py-2 px-4 rounded-md transition-colors"
            >
              Continuar al chat
            </a>
            <div className="mt-3 text-center">
              <p className="text-gray-500 text-xs">
                ¿No tienes WhatsApp?{" "}
                <a
                  href="https://whatsapp.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#128C7E] hover:underline"
                >
                  Descargar
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] hover:bg-[#128C7E] w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors"
          aria-label="Abrir WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9 14a5 5 0 0 0 6 0" />
          </svg>
        </button>
      )}
    </div>
  )
}