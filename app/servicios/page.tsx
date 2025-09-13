import type { Metadata } from "next"
import ServiciosClientPage from "./ServiciosClientPage"

export const metadata: Metadata = {
  title: "Servicios de Eventos 360° | DER EVENT HUB - Producción Integral",
  description:
    "12 servicios integrados para eventos: control de accesos, producción, tecnología, catering, logística, fotografía. Un solo proveedor, un solo contrato. Cotización gratis.",
  keywords: [
    "servicios eventos Argentina",
    "producción eventos integral",
    "control de accesos eventos",
    "catering eventos",
    "logística eventos",
    "fotografía eventos",
    "tecnología eventos",
    "streaming eventos",
    "consultoría eventos",
    "DER Event Hub servicios",
  ],
  openGraph: {
    title: "Servicios de Eventos 360° | DER EVENT HUB",
    description:
      "12 servicios integrados: control de accesos, producción, tecnología, catering. Un solo proveedor, un solo contrato.",
    images: ["/images/servicios-og.jpg"],
  },
}

export default function ServiciosPage() {
  return <ServiciosClientPage />
}
