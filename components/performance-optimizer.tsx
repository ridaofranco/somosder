"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    if (typeof window === "undefined") return
    
    // Preload critical resources
    const preloadLink = document.createElement("link")
    preloadLink.rel = "preload"
    preloadLink.href = "/images/der-logo-final.png"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)

    // Remove unused CSS
    const removeUnusedCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      stylesheets.forEach((sheet) => {
        if (sheet instanceof HTMLLinkElement && sheet.href.includes("unused")) {
          sheet.remove()
        }
      })
    }

    // Lazy load non-critical images
    const lazyImages = document.querySelectorAll("img[data-lazy]")
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.lazy || ""
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    lazyImages.forEach((img) => imageObserver.observe(img))

    removeUnusedCSS()

    return () => {
      imageObserver.disconnect()
    }
  }, [])

  return null
}
