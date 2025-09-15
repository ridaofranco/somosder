import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://der.com.ar"
  const currentDate = new Date()

  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cotizador`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/trabaja-con-nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/agendar`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Páginas de servicios
  const servicePages = [
    "accesos",
    "tecnologia-eventos",
    "produccion-integral",
    "gestion-deportiva",
    "logistica",
    "marketing-experiencial",
    "fotografia-video",
    "gastronomia",
    "post-evento",
    "consultoria-estrategica",
    "alianzas-estrategicas",
    "tecnologia", // for "Aplicaciones Interactivas"
  ].map((service) => ({
    url: `${baseUrl}/servicios/${service}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Páginas de proyectos
  const projectPages = [
    "manchester-city",
    "campus-party",
    "leyendas-mexico",
    "anuel",
    "myke-towers",
    "shell",
    "migor",
    "saint-mary",
    "gastronomia-trap",
    "fiesta-manzana",
  ].map((project) => ({
    url: `${baseUrl}/proyectos/${project}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Páginas de blog
  const blogPages = [
    "tendencias-eventos-2025",
    "tecnologia-eventos-hibridos",
    "sostenibilidad-eventos",
    "roi-eventos-corporativos",
    "gamificacion-eventos",
    "seguridad-eventos-masivos",
    "neuromarketing-eventos",
    "tecnologia-rfid-eventos",
    "seleccion-venues",
    "blog-post-skeleton-test", // Nuevo artículo de prueba
  ].map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...mainPages, ...servicePages, ...projectPages, ...blogPages]
}