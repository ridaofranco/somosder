"use client"

import { useEffect } from "react"

export default function SimpleChat() {
  useEffect(() => {
    // Script simplificado para chat
    const script = document.createElement("script")
    script.async = true
    script.src = "https://embed.tawk.to/YOUR_TAWK_ID/default"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")
    document.head.appendChild(script)

    return () => {
      // Limpieza al desmontar
      document.head.removeChild(script)
    }
  }, [])

  return null // Este componente no renderiza nada visible
}
