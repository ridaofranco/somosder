"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function OptimizedImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  const handleError = () => {
    if (!error) {
      console.error(`Error loading image: ${imgSrc}`)
      setImgSrc(fallbackSrc)
      setError(true)
    }
  }

  // Determinar si la imagen es externa (no comienza con /)
  const isExternalImage = typeof imgSrc === "string" && !imgSrc.startsWith("/") && !imgSrc.startsWith("blob:")

  // Para imágenes externas, usamos un elemento img normal en lugar de Next.js Image
  if (isExternalImage) {
    // Extraer propiedades específicas de Image que no aplican a img
    const { fill, quality, priority, loading, sizes, ...imgProps } = props

    // Aplicar estilos equivalentes si fill es true
    const style = fill
      ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, ...props.style }
      : props.style

    return (
      <img
        // FUENTE DE LA IMAGEN: Esta es la URL que se muestra
        // - imgSrc viene como prop desde el componente padre
        // - Si imgSrc falla, usa "/placeholder.svg" como fallback
        src={(imgSrc as string) || "/placeholder.svg"}
        // TEXTO ALTERNATIVO: Para accesibilidad
        alt={alt}
        // PROPIEDADES ADICIONALES: Todas las props que se pasaron al componente
        {...imgProps}
        // ESTILOS: Calculados dinámicamente según si fill=true o no
        style={style}
        // MANEJO DE ERRORES: Si la imagen falla al cargar, ejecuta handleError
        onError={handleError}
        // CLASES CSS: Para styling
        className={props.className}
        // CORS: Para evitar problemas con imágenes externas
        crossOrigin="anonymous"
        // CARGA LAZY: Para optimización de rendimiento
        loading={loading || "lazy"}
      />
    )
  }

  // Para imágenes internas, usamos Next.js Image
  return <Image src={imgSrc || "/placeholder.svg"} alt={alt} {...props} onError={handleError} />
}
