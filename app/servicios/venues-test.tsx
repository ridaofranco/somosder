import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test de Venues | DER - Soluciones Integrales para Eventos",
  description: "Página de prueba para gestión de venues",
}

export default function VenuesTestPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">Página de Prueba de Venues</h1>
      <p className="mt-4">Esta es una página de prueba simple para verificar que todo funciona correctamente.</p>
    </div>
  )
}
