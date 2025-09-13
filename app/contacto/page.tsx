import type { Metadata } from "next"
import ContactoPageClient from "./ContactoPageClient"

export const metadata: Metadata = {
  title: "Contacto | DER EVENT HUB - Hablemos de tu Próximo Evento",
  description:
    "Contactá a DER Event Hub. Respuesta garantizada en 24 horas. WhatsApp, email y teléfono disponibles. Más de 50 eventos exitosos nos respaldan.",
  keywords: [
    "contacto DER Event Hub",
    "organización eventos Argentina",
    "contacto eventos corporativos",
    "WhatsApp eventos",
    "consulta eventos gratuita",
    "DER contacto Buenos Aires",
    "eventos LATAM contacto",
  ],
}

export default function ContactoPage() {
  return <ContactoPageClient />
}
