import Script from "next/script"

export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DER Eventos",
    alternateName: "SOMOS DER",
    url: "https://somosder.ar",
    logo: "https://somosder.ar/images/der-logo-final.png",
    description:
      "Especialistas en eventos corporativos, sociales y deportivos. Más de 10 años creando experiencias memorables en Argentina y Latinoamérica.",
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Buenos Aires",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://www.instagram.com/somosder.ar/",
      "https://x.com/somosderar",
      "https://www.linkedin.com/company/somosderar/",
      "https://www.tiktok.com/@somosder.ar",
    ],
    serviceArea: {
      "@type": "Place",
      name: "Argentina, Paraguay, Latinoamérica",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Eventos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultoría Estratégica",
            description: "Asesoramiento experto para planificar y ejecutar eventos exitosos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Producción de Eventos",
            description: "Gestión integral de eventos corporativos, sociales y deportivos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soluciones Tecnológicas",
            description: "Implementación de tecnologías innovadoras para eventos",
          },
        },
      ],
    },
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  )
}

export function EventSchema({ event }: { event: any }) {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.location?.name,
      address: event.location?.address,
    },
    organizer: {
      "@type": "Organization",
      name: "DER Eventos",
      url: "https://somosder.ar",
    },
    offers: event.offers && {
      "@type": "Offer",
      price: event.offers.price,
      priceCurrency: event.offers.currency,
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <Script
      id="event-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(eventData),
      }}
    />
  )
}

export function LocalBusinessSchema() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DER Eventos",
    image: "https://somosder.ar/images/der-logo-final.png",
    description:
      "Especialistas en eventos corporativos, sociales y deportivos. Más de 10 años creando experiencias memorables.",
    url: "https://somosder.ar",
    telephone: "+54-11-XXXX-XXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Buenos Aires",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.6037,
      longitude: -58.3816,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/somosder.ar/",
      "https://x.com/somosderar",
      "https://www.linkedin.com/company/somosderar/",
      "https://www.tiktok.com/@somosder.ar",
    ],
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData),
      }}
    />
  )
}

export function ServiceSchema({ service }: { service: any }) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "DER Eventos",
      url: "https://somosder.ar",
    },
    areaServed: {
      "@type": "Place",
      name: "Argentina, Paraguay, Latinoamérica",
    },
    serviceType: service.type || "Event Management",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  )
}

export function SchemaOrg(props: { [key: string]: any }) {
  // Validar que los datos tengan la estructura mínima requerida
  if (!props || Object.keys(props).length === 0) return null

  // Asegurar que tenga @context y @type válidos
  const validData = {
    "@context": "https://schema.org",
    "@type": props.type || "Thing",
    ...props,
  }

  // Remover propiedades que no son de Schema.org
  delete validData.type // Usar @type en lugar de type

  return (
    <Script
      id="schema-org-generic"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(validData) }}
    />
  )
}
