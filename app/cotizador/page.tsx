import type { Metadata } from "next"
import CotizadorClientPage from "./CotizadorClientPage"

export const metadata: Metadata = {
  title: "Cotizador de Eventos | DER EVENT HUB - Presupuesto Gratuito",
  description:
    "Obtené un presupuesto personalizado para tu evento en 4 pasos. Cotización gratuita con respuesta en 24 horas. Más de 50 eventos exitosos nos respaldan.",
  keywords: [
    "cotizador eventos",
    "presupuesto evento",
    "cotización gratuita eventos",
    "precio organización eventos",
    "calculadora eventos Argentina",
    "presupuesto eventos corporativos",
    "cotizar evento DER",
  ],
}

export default function CotizadorPage() {
  return <CotizadorClientPage />
}
