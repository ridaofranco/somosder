import { redirect } from "next/navigation"

export default function ProyectoDetailRedirect({ params }: { params: { id: string } }) {
  // Buscar la sección relacionada con Manchester City y actualizar la imagen del hero

  // Reemplazar la URL de la imagen del hero para el proyecto de Manchester City
  // Buscar donde se renderiza la imagen del hero y actualizar el src

  // Si hay una sección específica para el proyecto "manchester-city", actualizar:
  // src="/placeholder.svg?height=600&width=1200&text=Manchester+City"

  // Reemplazar con:
  // src="/images/manchester-city-event.jpeg"

  if (params.id === "manchester-city") {
    redirect("/portfolio/manchester-city") // Assuming you want to redirect to a specific portfolio page
  } else {
    redirect(`/portfolio/${params.id}`)
  }
}
