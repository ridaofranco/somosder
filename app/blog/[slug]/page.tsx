import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogImageUrl } from "@/lib/unsplash"
import { SocialShare } from "@/components/social-share"
import { ReadingTime } from "@/components/reading-time"
import { TableOfContents } from "@/components/table-of-contents"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

// Lista de blogs disponibles
const blogs = [
  {
    id: "tendencias-eventos-2025",
    title: "10 Tendencias en Eventos que Definirán 2025",
    excerpt: "Descubre las innovaciones y cambios que transformarán la industria de eventos en el próximo año.",
    date: "12 de abril, 2025",
    author: "Carolina Méndez",
    categories: ["Tendencias", "Tecnología", "Estrategia"],
    content: `
      <p>La industria de eventos está en constante evolución, adaptándose a las nuevas tecnologías, cambios sociales y expectativas de los asistentes. A medida que nos acercamos a 2025, varias tendencias están emergiendo y prometen redefinir cómo planificamos, ejecutamos y experimentamos los eventos.</p>
      
      <h2>1. Eventos Híbridos Avanzados</h2>
      <p>Los eventos híbridos ya no son simplemente una transmisión en vivo de un evento presencial. En 2025, veremos plataformas de eventos híbridos mucho más sofisticadas que ofrecerán experiencias verdaderamente inmersivas para los asistentes remotos. Tecnologías como la realidad aumentada permitirán a los participantes virtuales "caminar" por el espacio del evento, interactuar con expositores y conectarse con otros asistentes de manera más natural.</p>
      
      <h2>2. Sostenibilidad como Prioridad</h2>
      <p>La sostenibilidad dejará de ser un "plus" para convertirse en un requisito fundamental. Los organizadores de eventos implementarán prácticas como el uso de materiales biodegradables, eliminación de plásticos de un solo uso, menús basados en plantas, y compensación de la huella de carbono. Los asistentes y patrocinadores valorarán cada vez más estos esfuerzos y los considerarán en sus decisiones de participación.</p>
      
      <h2>3. Personalización Impulsada por IA</h2>
      <p>La inteligencia artificial revolucionará la personalización en eventos. Desde recomendaciones de sesiones basadas en intereses hasta conexiones de networking sugeridas según objetivos profesionales, la IA creará experiencias únicas para cada asistente. Los chatbots avanzados proporcionarán asistencia personalizada en tiempo real, mejorando significativamente la experiencia del usuario.</p>
      
      <h2>4. Tecnología Biométrica y Sin Contacto</h2>
      <p>La tecnología sin contacto se expandirá más allá del registro y los pagos. Veremos sistemas biométricos para acceso, personalización de experiencias y seguimiento de participación. El reconocimiento facial y otras tecnologías biométricas agilizarán procesos y proporcionarán datos valiosos a organizadores, mientras garantizan una experiencia fluida para los asistentes.</p>
      
      <h2>5. Eventos en el Metaverso</h2>
      <p>El metaverso ofrecerá nuevas posibilidades para eventos completamente virtuales con experiencias inmersivas en 3D. Las conferencias, ferias comerciales y eventos de networking en el metaverso permitirán interacciones más naturales entre avatares, superando las limitaciones de las videoconferencias tradicionales. Esto abrirá oportunidades para eventos globales sin las barreras de viaje o limitaciones de espacio físico.</p>
      
      <h2>6. Análisis de Datos en Tiempo Real</h2>
      <p>Los organizadores utilizarán análisis de datos en tiempo real para ajustar aspectos del evento sobre la marcha. Desde el flujo de tráfico y la participación en sesiones hasta el sentimiento de los asistentes capturado a través de encuestas instantáneas, estos datos permitirán optimizar la experiencia mientras el evento está en curso, no solo para futuros eventos.</p>
      
      <h2>7. Gamificación Avanzada</h2>
      <p>La gamificación evolucionará más allá de simples sistemas de puntos y tablas de clasificación. Veremos experiencias de juego inmersivas que fomentan el aprendizaje, networking y participación. Estas experiencias se integrarán perfectamente con los objetivos del evento y proporcionarán valor tangible tanto a asistentes como a patrocinadores.</p>
      
      <h2>8. Eventos Descentralizados</h2>
      <p>En lugar de un único evento centralizado, veremos más eventos "distribuidos" con múltiples ubicaciones más pequeñas conectadas digitalmente. Esto reduce la necesidad de viajes largos, disminuye la huella de carbono y permite experiencias más íntimas mientras mantiene la escala global del evento.</p>
      
      <h2>9. Integración de Wellness y Mindfulness</h2>
      <p>Los eventos incorporarán cada vez más elementos de bienestar y mindfulness para combatir la fatiga de eventos y mejorar la experiencia general. Desde espacios de meditación y yoga hasta opciones de alimentación saludable y descansos programados, el bienestar de los asistentes se convertirá en una consideración central en el diseño de eventos.</p>
      
      <h2>10. Tecnología Háptica y Sensorial</h2>
      <p>La tecnología háptica permitirá a los asistentes remotos "sentir" aspectos del evento. Desde guantes hápticos que simulan un apretón de manos hasta dispositivos que transmiten texturas y sensaciones, estas tecnologías reducirán la brecha entre experiencias virtuales y físicas, creando conexiones más profundas para todos los participantes.</p>
      
      <h2>Conclusión</h2>
      <p>El futuro de los eventos combina lo mejor de la tecnología con un enfoque renovado en la experiencia humana, la sostenibilidad y el bienestar. Los organizadores que adopten estas tendencias emergentes estarán bien posicionados para crear eventos memorables, impactantes y exitosos en 2025 y más allá. La clave será equilibrar la innovación tecnológica con el toque humano que hace que los eventos sean experiencias transformadoras.</p>
    `,
  },
  {
    id: "tecnologia-eventos-hibridos",
    title: "Tecnología y Eventos Híbridos: La Nueva Era de las Experiencias",
    excerpt:
      "Descubre cómo la tecnología está transformando los eventos híbridos y creando nuevas oportunidades para conectar audiencias.",
    date: "28 de marzo, 2025",
    author: "Martín Torres",
    categories: ["Tecnología", "Innovación", "Eventos Híbridos"],
    content: `
      <p>Los eventos híbridos han evolucionado rápidamente en los últimos años, pasando de ser una simple transmisión en vivo de un evento presencial a experiencias complejas y multifacéticas que combinan lo mejor de ambos mundos. Esta evolución ha sido impulsada principalmente por avances tecnológicos que están redefiniendo lo que es posible en la industria de eventos.</p>
      
      <h2>La Evolución de los Eventos Híbridos</h2>
      <p>Inicialmente, los eventos híbridos surgieron como una respuesta a restricciones y como una forma de ampliar el alcance. Sin embargo, hoy representan un formato distintivo con sus propias ventajas y características. La tecnología ha sido el catalizador clave de esta transformación, permitiendo experiencias más inmersivas, interactivas y personalizadas.</p>
      
      <h2>Tecnologías Transformadoras</h2>
      
      <h3>1. Plataformas de Eventos Virtuales Avanzadas</h3>
      <p>Las plataformas modernas ofrecen mucho más que streaming de video. Incluyen funcionalidades como networking AI-powered, salas de descanso temáticas, espacios de exposición virtual en 3D, y análisis detallados de participación. Estas plataformas están diseñadas específicamente para eventos híbridos, no solo adaptadas de soluciones de videoconferencia.</p>
      
      <h3>2. Realidad Aumentada y Virtual</h3>
      <p>La AR y VR están transformando cómo los asistentes remotos experimentan eventos. Desde recorridos virtuales por espacios de exposición hasta experiencias inmersivas compartidas entre asistentes presenciales y virtuales, estas tecnologías están difuminando las líneas entre participación física y remota.</p>
      
      <h3>3. Tecnología Háptica</h3>
      <p>Los dispositivos hápticos permiten a los participantes remotos "sentir" aspectos del evento. Esto puede incluir desde vibraciones sincronizadas con momentos clave hasta guantes que simulan texturas y sensaciones, creando una dimensión sensorial para la audiencia virtual.</p>
      
      <h3>4. Inteligencia Artificial y Machine Learning</h3>
      <p>La IA está mejorando numerosos aspectos de los eventos híbridos:</p>
      <ul>
        <li>Matchmaking inteligente para networking</li>
        <li>Recomendaciones personalizadas de contenido</li>
        <li>Traducción en tiempo real para audiencias globales</li>
        <li>Chatbots avanzados para soporte instantáneo</li>
        <li>Análisis predictivo para optimizar la experiencia</li>
      </ul>
      
      <h3>5. Internet de las Cosas (IoT)</h3>
      <p>Los sensores IoT en espacios físicos pueden transmitir datos en tiempo real a participantes remotos, desde niveles de ocupación hasta temperatura y calidad del aire. Esta información ayuda a los asistentes virtuales a sentirse más conectados con el espacio físico.</p>
      
      <h2>Creando Paridad de Experiencia</h2>
      <p>El mayor desafío de los eventos híbridos es garantizar que tanto los asistentes presenciales como los remotos disfruten de experiencias igualmente valiosas, aunque diferentes. Las tecnologías emergentes están haciendo posible esta "paridad de experiencia" de varias maneras:</p>
      
      <h3>Participación Bidireccional</h3>
      <p>Las pantallas interactivas en el lugar permiten que los asistentes presenciales vean y interactúen con participantes remotos, mientras que las cámaras de 360° y micrófonos ambientales dan a los asistentes virtuales una sensación de "estar allí".</p>
      
      <h3>Actividades Compartidas</h3>
      <p>Las actividades diseñadas específicamente para participación híbrida, como talleres colaborativos utilizando pizarras digitales compartidas o experiencias de realidad mixta, crean momentos de conexión genuina entre todos los participantes.</p>
      
      <h3>Networking Híbrido</h3>
      <p>Las plataformas de networking impulsadas por IA pueden conectar a asistentes presenciales y remotos en base a intereses compartidos, facilitando conversaciones significativas independientemente de la ubicación física.</p>
      
      <h2>Casos de Éxito</h2>
      
      <h3>Conferencia Tech Summit 2024</h3>
      <p>Esta conferencia utilizó "portales digitales" – pantallas de tamaño real que mostraban asistentes remotos en tiempo real – distribuidas por el espacio físico. Los asistentes presenciales podían acercarse a estos portales para conversar con participantes virtuales, creando interacciones espontáneas similares a las que ocurren naturalmente en eventos presenciales.</p>
      
      <h3>Feria Comercial Global Connect</h3>
      <p>Esta feria implementó "gemelos digitales" de cada stand físico, permitiendo a los asistentes virtuales explorar réplicas 3D detalladas. Los expositores podían interactuar simultáneamente con visitantes presenciales y remotos, maximizando su alcance sin duplicar esfuerzos.</p>
      
      <h2>El Futuro de los Eventos Híbridos</h2>
      <p>A medida que la tecnología continúa evolucionando, podemos anticipar:</p>
      
      <h3>Experiencias Holográficas</h3>
      <p>Los presentadores remotos aparecerán como hologramas realistas en escenarios físicos, mientras que los asistentes remotos podrán proyectarse como avatares holográficos en el espacio del evento.</p>
      
      <h3>Integración con el Metaverso</h3>
      <p>Los eventos híbridos se expandirán para incluir espacios en el metaverso, creando un "tercer espacio" donde asistentes físicos y remotos pueden encontrarse en igualdad de condiciones.</p>
      
      <h3>Tecnología Neuronal</h3>
      <p>A largo plazo, las interfaces cerebro-computadora podrían permitir formas completamente nuevas de participación remota, transmitiendo sensaciones y experiencias directamente.</p>
      
      <h2>Conclusión</h2>
      <p>La tecnología está transformando fundamentalmente los eventos híbridos, convirtiéndolos de una solución de compromiso a un formato distintivo con ventajas únicas. Al aprovechar estas innovaciones tecnológicas, los organizadores pueden crear experiencias híbridas que no solo igualan sino que en algunos aspectos superan los formatos tradicionales, conectando audiencias globales de maneras más significativas y accesibles que nunca.</p>
    `,
  },
  // Contenido para otros blogs...
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((blog) => blog.id === params.slug)

  if (!blog) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${blog.title} | Blog DER Eventos`,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} | Blog DER Eventos`,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.categories,
    },
  }
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.id,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.id === params.slug)

  if (!blog) {
    notFound()
  }

  // Encontrar artículos relacionados (mismas categorías)
  const relatedPosts = blogs
    .filter((post) => post.id !== blog.id && post.categories.some((category) => blog.categories.includes(category)))
    .slice(0, 3)

  // Encontrar el índice del blog actual para navegación prev/next
  const currentIndex = blogs.findIndex((b) => b.id === blog.id)
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-orange-500">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-orange-500">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-orange-500 font-medium truncate max-w-[200px]">{blog.title}</span>
      </div>

      {/* Back to blog */}
      <Link href="/blog" className="flex items-center text-orange-500 hover:underline mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span>Volver al blog</span>
      </Link>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.categories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/categoria/${encodeURIComponent(category)}`}
              className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-full flex items-center"
            >
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </Link>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-8">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{blog.date}</span>
          </div>
          <ReadingTime content={blog.content} />
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-10">
        <Image
          src={getBlogImageUrl(blog.id) || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24 space-y-6">
            <TableOfContents content={blog.content} />

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-medium mb-3">Compartir</h3>
              <SocialShare url={`/blog/${blog.id}`} title={blog.title} description={blog.excerpt} variant="vertical" />
            </div>

            <NewsletterSubscription
              title="¿Te gustó este artículo?"
              description="Suscríbete para recibir más contenido como este directamente en tu email."
              variant="compact"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Etiquetas:</span>
              {blog.categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/categoria/${encodeURIComponent(category)}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                <Image
                  src={`/placeholder.svg?height=80&width=80&query=profile photo of ${blog.author}`}
                  alt={blog.author}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{blog.author}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Experto en organización de eventos con más de 10 años de experiencia en la industria. Especializado en{" "}
                  {blog.categories[0].toLowerCase()} y estrategias innovadoras para crear experiencias memorables.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Ver perfil
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver todos sus artículos
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {prevBlog && (
              <Link href={`/blog/${prevBlog.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors h-full">
                  <div className="flex items-center text-orange-500 mb-2">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Artículo anterior</span>
                  </div>
                  <h3 className="font-bold group-hover:text-orange-500 transition-colors line-clamp-2">
                    {prevBlog.title}
                  </h3>
                </div>
              </Link>
            )}

            {nextBlog && (
              <Link href={`/blog/${nextBlog.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors h-full">
                  <div className="flex items-center justify-end text-orange-500 mb-2">
                    <span className="text-sm font-medium">Artículo siguiente</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                  <h3 className="font-bold text-right group-hover:text-orange-500 transition-colors line-clamp-2">
                    {nextBlog.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={getBlogImageUrl(post.id) || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                        <div className="mt-auto text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-300 py-8">
                Los comentarios están desactivados para este artículo.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-orange-500 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Te gustaría organizar un evento inolvidable?</h2>
            <p className="text-lg mb-6">
              Nuestro equipo de expertos está listo para ayudarte a crear experiencias excepcionales.
            </p>
            <Link href="/contacto">
              <Button className="bg-white text-orange-500 hover:bg-gray-100">
                Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
