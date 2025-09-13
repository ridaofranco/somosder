"use client"
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react"
import { useState } from "react"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  className?: string
  variant?: "horizontal" | "vertical" | "icons"
}

export function SocialShare({
  url,
  title,
  description = "",
  className = "",
  variant = "horizontal",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  // Asegurarse de que la URL sea absoluta
  const fullUrl = url.startsWith("http") 
    ? url 
    : typeof window !== "undefined" 
    ? `${window.location.origin}${url}` 
    : url

  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || "")

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
  }

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const openShareWindow = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "width=600,height=400")
    }
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <button
          onClick={() => openShareWindow(shareLinks.facebook)}
          className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Compartir en Facebook"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebook</span>
        </button>

        <button
          onClick={() => openShareWindow(shareLinks.twitter)}
          className="flex items-center gap-2 bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors"
          aria-label="Compartir en Twitter"
        >
          <Twitter className="h-4 w-4" />
          <span>Twitter</span>
        </button>

        <button
          onClick={() => openShareWindow(shareLinks.linkedin)}
          className="flex items-center gap-2 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
          aria-label="Compartir en LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copiar enlace"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
          <span>{copied ? "¡Copiado!" : "Copiar enlace"}</span>
        </button>
      </div>
    )
  }

  if (variant === "icons") {
    return (
      <div className={`flex gap-2 ${className}`}>
        <button
          onClick={() => openShareWindow(shareLinks.facebook)}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Compartir en Facebook"
        >
          <Facebook className="h-4 w-4" />
        </button>

        <button
          onClick={() => openShareWindow(shareLinks.twitter)}
          className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
          aria-label="Compartir en Twitter"
        >
          <Twitter className="h-4 w-4" />
        </button>

        <button
          onClick={() => openShareWindow(shareLinks.linkedin)}
          className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
          aria-label="Compartir en LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </button>

        <button
          onClick={handleCopyLink}
          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Copiar enlace"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>
    )
  }

  // Default horizontal variant
  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => openShareWindow(shareLinks.facebook)}
        className="flex items-center gap-1 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        aria-label="Compartir en Facebook"
      >
        <Facebook className="h-3 w-3" />
        <span>Facebook</span>
      </button>

      <button
        onClick={() => openShareWindow(shareLinks.twitter)}
        className="flex items-center gap-1 bg-sky-500 text-white py-1 px-3 rounded-lg hover:bg-sky-600 transition-colors text-sm"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="h-3 w-3" />
        <span>Twitter</span>
      </button>

      <button
        onClick={() => openShareWindow(shareLinks.linkedin)}
        className="flex items-center gap-1 bg-blue-700 text-white py-1 px-3 rounded-lg hover:bg-blue-800 transition-colors text-sm"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="h-3 w-3" />
        <span>LinkedIn</span>
      </button>

      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-1 px-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
        aria-label="Copiar enlace"
      >
        {copied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
        <span>{copied ? "¡Copiado!" : "Copiar"}</span>
      </button>
    </div>
  )
}
