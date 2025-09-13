import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Cookies | DER Eventos",
  description: "Información sobre cómo utilizamos las cookies en nuestro sitio web.",
}

export default function CookiesPage() {
  return (
    <div className="bg-white dark:bg-dark-100">
      <div className="container px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Política de Cookies</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil)
            cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen,
            o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>

          <h2>¿Cómo utilizamos las cookies?</h2>
          <p>
            Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría de
            los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar por
            completo la funcionalidad y características que agregan a este sitio. Se recomienda que deje activadas todas
            las cookies si no está seguro de si las necesita o no, en caso de que se utilicen para proporcionar un
            servicio que usted utiliza.
          </p>

          <h2>Las cookies que utilizamos</h2>
          <h3>Cookies esenciales</h3>
          <p>
            Estas cookies son necesarias para el funcionamiento básico de nuestro sitio web y no pueden ser desactivadas
            en nuestros sistemas. Generalmente solo se establecen en respuesta a acciones realizadas por usted que
            equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o
            completar formularios. Puede configurar su navegador para bloquear o alertar sobre estas cookies, pero
            algunas partes del sitio no funcionarán correctamente.
          </p>

          <h3>Cookies de rendimiento</h3>
          <p>
            Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el
            rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo se
            mueven los visitantes por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo
            tanto, anónima. Si no permite estas cookies, no sabremos cuándo ha visitado nuestro sitio.
          </p>

          <h3>Cookies de funcionalidad</h3>
          <p>
            Estas cookies permiten que el sitio proporcione una funcionalidad y personalización mejoradas. Pueden ser
            establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas. Si
            no permite estas cookies, es posible que algunos o todos estos servicios no funcionen correctamente.
          </p>

          <h3>Cookies de marketing</h3>
          <p>
            Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden
            ser utilizadas por esas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes en
            otros sitios. No almacenan directamente información personal, sino que se basan en la identificación única
            de su navegador y dispositivo de Internet. Si no permite estas cookies, experimentará publicidad menos
            dirigida.
          </p>

          <h2>Control de cookies</h2>
          <p>
            Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su
            dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Si lo hace, es
            posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos
            servicios y funcionalidades no funcionen.
          </p>

          <h2>Más información</h2>
          <p>
            Esperamos que esto haya aclarado las cosas para usted. Como se mencionó anteriormente, si hay algo que no
            está seguro de si necesita o no, generalmente es más seguro dejar las cookies habilitadas en caso de que
            interactúen con una de las funciones que utiliza en nuestro sitio. Sin embargo, si todavía está buscando más
            información, puede contactarnos a través de uno de nuestros métodos de contacto preferidos.
          </p>

          <p>
            Email: <a href="mailto:contacto@derp.com.ar">contacto@derp.com.ar</a>
          </p>
        </div>
      </div>
    </div>
  )
}
