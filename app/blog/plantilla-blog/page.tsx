import type { Metadata } from "next"
import BlogLayout from "@/components/blog-layout"

export const metadata: Metadata = {
  title: "Título del Blog | Blog DER",
  description: "Descripción breve del blog para SEO.",
}

export default function PlantillaBlogPage() {
  const post = {
    id: "plantilla-blog", // Cambiar por el ID único del blog
    title: "Título del Blog", // Cambiar por el título real
    date: "Fecha del blog", // Formato: "12 de abril, 2025"
    author: "Nombre del Autor", // Cambiar por el autor real
    author_image: "https://images.unsplash.com/photo-xxxx", // URL de la imagen del autor
    author_bio: "Breve biografía del autor con su experiencia y especialización.",
    categories: ["Categoría 1", "Categoría 2", "Categoría 3"], // Cambiar por categorías reales
    content: `
      <p>Párrafo introductorio que explica el tema del blog y su relevancia para la industria de eventos. Este párrafo debe captar la atención del lector y establecer el contexto del artículo.</p>

      <h2>1. Primera Sección Principal</h2>
      <p>Contenido detallado de la primera sección. Explicar conceptos clave, proporcionar ejemplos y datos relevantes.</p>
      <p>Párrafo adicional con más información sobre este tema específico.</p>
      
      <h3>1.1. Subsección (opcional)</h3>
      <ul>
        <li>Punto importante 1</li>
        <li>Punto importante 2</li>
        <li>Punto importante 3</li>
      </ul>
      
      <h2>2. Segunda Sección Principal</h2>
      <p>Contenido detallado de la segunda sección. Continuar desarrollando el tema con información valiosa y relevante.</p>
      <p>Párrafo adicional que profundiza en aspectos específicos de esta sección.</p>
      
      <h2>3. Tercera Sección Principal</h2>
      <p>Contenido detallado de la tercera sección. Seguir el mismo patrón de desarrollo del tema.</p>
      <p>Incluir ejemplos concretos, casos de estudio o estadísticas que respalden los puntos presentados.</p>
      
      <h2>4. Cuarta Sección Principal</h2>
      <p>Contenido detallado de la cuarta sección. Mantener la coherencia en la estructura y el estilo.</p>
      <p>Considerar incluir una imagen o gráfico relevante si es necesario para ilustrar conceptos complejos.</p>
      
      <h2>5. Quinta Sección Principal</h2>
      <p>Contenido detallado de la quinta sección. Continuar desarrollando aspectos importantes del tema.</p>
      <p>Mantener párrafos concisos y enfocados para facilitar la lectura y comprensión.</p>
      
      <h2>Conclusión</h2>
      <p>Resumen de los puntos principales discutidos en el artículo. Reforzar la importancia del tema y su aplicación práctica.</p>
      <p>Finalizar con una reflexión o llamado a la acción que invite al lector a implementar lo aprendido o a seguir explorando el tema.</p>
    `,
    related_posts: [
      {
        id: "tendencias-eventos-2025",
        title: "10 Tendencias en Eventos que Definirán 2025",
        excerpt: "Descubre las innovaciones y cambios que transformarán la industria de eventos en el próximo año.",
      },
      {
        id: "tecnologia-eventos-hibridos",
        title: "Tecnología Esencial para Eventos Híbridos Exitosos",
        excerpt:
          "Herramientas y plataformas clave para crear una experiencia perfecta tanto para asistentes presenciales como virtuales.",
      },
      {
        id: "sostenibilidad-eventos",
        title: "Cómo Implementar Prácticas Sostenibles en tus Eventos",
        excerpt: "Guía completa para reducir el impacto ambiental sin comprometer la experiencia de los participantes.",
      },
    ],
  }

  return <BlogLayout post={post} />
}
