import { getUnsplashImageForBlog } from "./unsplash"

interface EnhancedImage {
  url: string
  alt: string
  photographer: string
  photographerUrl: string
  unsplashUrl: string
}

/**
 * Enriquece el contenido HTML del blog con imágenes relevantes
 * @param content Contenido HTML original del blog
 * @param blogId ID del blog
 * @param categories Categorías del blog
 * @returns Contenido HTML enriquecido con imágenes
 */
export async function enhanceBlogContentWithImages(
  content: string,
  blogId: string,
  categories: string[],
): Promise<string> {
  // Si el contenido ya tiene suficientes imágenes, no añadimos más
  const imgTagCount = (content.match(/<img/g) || []).length
  if (imgTagCount >= 3) {
    return content
  }

  // Dividimos el contenido en párrafos
  const paragraphs = content.split("</p>")

  // Determinamos cuántas imágenes añadir (máximo 3)
  const imagesToAdd = Math.min(3 - imgTagCount, Math.floor(paragraphs.length / 4))

  if (imagesToAdd <= 0) {
    return content
  }

  // Posiciones donde insertar imágenes (después de ciertos párrafos)
  // Evitamos el primer y último párrafo, y distribuimos uniformemente
  const positions = []
  const step = Math.floor(paragraphs.length / (imagesToAdd + 1))

  for (let i = 1; i <= imagesToAdd; i++) {
    positions.push(step * i)
  }

  // Generamos términos de búsqueda específicos para cada posición
  const searchTerms = await generateSearchTermsForPositions(paragraphs, positions, blogId, categories)

  // Obtenemos las imágenes para cada posición
  const images: EnhancedImage[] = await Promise.all(
    searchTerms.map(async (terms, index) => {
      // Usamos el sistema de caché existente
      const imageInfo = await getUnsplashImageForBlog(`${blogId}-section-${index}`, categories[0] || "default", terms)

      return {
        url: imageInfo.url,
        alt: `Ilustración relacionada con ${terms.split(",")[0]}`,
        photographer: imageInfo.photographer,
        photographerUrl: imageInfo.photographerUrl,
        unsplashUrl: imageInfo.unsplashUrl,
      }
    }),
  )

  // Insertamos las imágenes en el contenido
  let enhancedContent = ""
  let imageIndex = 0

  paragraphs.forEach((paragraph, index) => {
    enhancedContent += paragraph + (index < paragraphs.length - 1 ? "</p>" : "")

    if (positions.includes(index)) {
      const image = images[imageIndex++]

      if (image) {
        enhancedContent += `
          <figure class="my-8 rounded-lg overflow-hidden">
            <img 
              src="${image.url}" 
              alt="${image.alt}" 
              class="w-full h-auto object-cover"
            />
            <figcaption class="text-xs text-gray-500 mt-2 text-right">
              Foto por <a href="${image.photographerUrl}" target="_blank" rel="noopener noreferrer" class="text-orange-500 hover:underline">${image.photographer}</a> en <a href="${image.unsplashUrl}" target="_blank" rel="noopener noreferrer" class="text-orange-500 hover:underline">Unsplash</a>
            </figcaption>
          </figure>
        `
      }
    }
  })

  return enhancedContent
}

/**
 * Genera términos de búsqueda específicos para cada posición basados en el contenido cercano
 */
async function generateSearchTermsForPositions(
  paragraphs: string[],
  positions: number[],
  blogId: string,
  categories: string[],
): Promise<string[]> {
  // Mapeo específico de blogs a términos de búsqueda para secciones
  const blogSpecificSectionTerms: Record<string, string[]> = {
    "tendencias-eventos-2025": [
      "future event technology,innovation",
      "hybrid events,virtual reality",
      "sustainable events,green technology",
    ],
    "tecnologia-eventos-hibridos": [
      "hybrid event technology,streaming",
      "virtual conference,online meeting",
      "digital audience engagement,interactive",
    ],
    "sostenibilidad-eventos": [
      "sustainable event,green venue",
      "eco-friendly conference,zero waste",
      "renewable energy events,environmental",
    ],
    "metaverso-eventos": [
      "metaverse event,virtual reality",
      "digital avatar conference,3d virtual",
      "immersive experience,virtual world",
    ],
  }

  // Si tenemos términos específicos para este blog, los usamos
  if (blogId in blogSpecificSectionTerms) {
    return blogSpecificSectionTerms[blogId].slice(0, positions.length)
  }

  // De lo contrario, generamos términos basados en el contenido
  return positions.map((position) => {
    // Tomamos el texto de los párrafos cercanos para extraer palabras clave
    const contextStart = Math.max(0, position - 1)
    const contextEnd = Math.min(paragraphs.length - 1, position + 1)

    let contextText = ""
    for (let i = contextStart; i <= contextEnd; i++) {
      contextText += paragraphs[i]
    }

    // Limpiamos el texto de etiquetas HTML
    const cleanText = contextText.replace(/<[^>]*>/g, " ")

    // Extraemos palabras clave (palabras de más de 5 letras que no sean comunes)
    const commonWords = ["porque", "también", "aunque", "durante", "entonces", "siempre", "cuando"]
    const words = cleanText
      .split(/\s+/)
      .filter((word) => word.length > 5)
      .filter((word) => !commonWords.includes(word.toLowerCase()))
      .slice(0, 5)

    // Si no encontramos palabras clave, usamos la categoría
    if (words.length === 0) {
      return categories.length > 0 ? `${categories[0]},event,professional` : "business event,professional,conference"
    }

    // Combinamos las palabras clave con la categoría
    const category = categories.length > 0 ? categories[0] : "event"
    return `${words.join(",")},${category}`
  })
}
