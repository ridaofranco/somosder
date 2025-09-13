import type { Metadata } from "next"
import BlogLayout from "@/components/blog-layout"

export const metadata: Metadata = {
  title: "Guía Completa para Crear Eventos Inclusivos y Accesibles | Blog DER",
  description:
    "Mejores prácticas para garantizar que todos los asistentes puedan participar plenamente en tus eventos. Aprende sobre accesibilidad e inclusión.",
}

export default function EventosInclusivosAccesiblesPage() {
  const post = {
    id: "eventos-inclusivos-accesibles",
    title: "Guía Completa para Crear Eventos Inclusivos y Accesibles",
    excerpt: "Mejores prácticas para garantizar que todos los asistentes puedan participar plenamente en tus eventos.",
    content: `
      <p>La inclusión y accesibilidad en eventos no son solo una responsabilidad social, sino una oportunidad para ampliar tu audiencia y crear experiencias más ricas y diversas. Esta guía completa te ayudará a diseñar y ejecutar eventos que sean verdaderamente accesibles para todos.</p>

      <h2>¿Por Qué la Inclusión es Fundamental?</h2>
      <p>Según la Organización Mundial de la Salud, más del 15% de la población mundial vive con algún tipo de discapacidad. Al crear eventos inclusivos, no solo cumples con obligaciones legales y éticas, sino que también amplías tu audiencia potencial significativamente.</p>

      <h2>Planificación Inclusiva desde el Inicio</h2>
      <p>La accesibilidad debe ser considerada desde las primeras etapas de planificación, no como un añadido de último momento. Esto incluye:</p>
      
      <ul>
        <li>Formación del equipo en principios de inclusión</li>
        <li>Presupuesto dedicado (10-15% del total)</li>
        <li>Consulta con personas con discapacidad</li>
        <li>Evaluación temprana de necesidades</li>
      </ul>

      <h2>Selección del Venue: Criterios de Accesibilidad</h2>
      <p>La elección del lugar es crucial para la accesibilidad. Evalúa los siguientes aspectos:</p>
      
      <ul>
        <li><strong>Acceso sin barreras:</strong> Entradas a nivel del suelo o con rampas adecuadas</li>
        <li><strong>Ascensores:</strong> Suficientemente amplios para sillas de ruedas</li>
        <li><strong>Baños accesibles:</strong> En cantidad suficiente y bien señalizados</li>
        <li><strong>Espacios de circulación:</strong> Pasillos amplios (mínimo 1.5 metros)</li>
        <li><strong>Estacionamiento:</strong> Plazas reservadas cerca de la entrada</li>
      </ul>

      <h2>Comunicación Accesible</h2>
      <p>Toda la información sobre tu evento debe ser accesible desde el primer momento. Esto incluye sitios web que cumplan con las pautas WCAG 2.1, materiales en formatos múltiples y procesos de registro inclusivos.</p>

      <h2>Durante el Evento: Servicios de Apoyo</h2>
      <p>Implementa servicios que garanticen la participación plena de todos:</p>
      
      <ul>
        <li>Interpretación en lengua de señas</li>
        <li>Subtitulado en tiempo real</li>
        <li>Audiodescripción para contenido visual</li>
        <li>Zonas de descanso sensorial</li>
        <li>Personal capacitado en atención inclusiva</li>
      </ul>

      <h2>Tecnología para la Inclusión</h2>
      <p>Aprovecha la tecnología para mejorar la accesibilidad con apps de navegación interior, sistemas de bucle magnético, plataformas virtuales accesibles y códigos QR para información alternativa.</p>

      <h2>Evaluación y Mejora Continua</h2>
      <p>La inclusión es un proceso de mejora continua. Proporciona múltiples canales para feedback, analiza los resultados y documenta las lecciones aprendidas para futuros eventos.</p>

      <h2>Conclusión</h2>
      <p>Crear eventos verdaderamente inclusivos y accesibles requiere compromiso, planificación y recursos, pero los beneficios superan ampliamente la inversión. No solo estarás cumpliendo con un imperativo ético y legal, sino que también estarás creando experiencias más ricas, diversas y memorables para todos tus asistentes.</p>
    `,
    date: "5 de enero, 2025",
    author: "Ana Martínez",
    author_image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    author_bio:
      "Consultora en accesibilidad e inclusión con 12 años de experiencia ayudando a organizaciones a crear eventos más accesibles.",
    categories: ["Inclusión", "Accesibilidad", "Planificación"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop",
    related_posts: [
      {
        id: "sostenibilidad-eventos",
        title: "Cómo Implementar Prácticas Sostenibles en tus Eventos",
        excerpt: "Guía completa para reducir el impacto ambiental sin comprometer la experiencia.",
      },
      {
        id: "tendencias-eventos-2025",
        title: "10 Tendencias en Eventos que Definirán 2025",
        excerpt: "Descubre las innovaciones y cambios que transformarán la industria de eventos.",
      },
      {
        id: "tecnologia-eventos-hibridos",
        title: "Tecnología y Eventos Híbridos: La Nueva Era de las Experiencias",
        excerpt: "Herramientas y plataformas clave para crear experiencias perfectas.",
      },
    ],
  }

  return <BlogLayout post={post} />
}
