import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | DER - Soluciones Integrales para Eventos",
  description: "Política de privacidad y protección de datos personales de DER.",
}

export default function PrivacidadPage() {
  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Última actualización: 9 de abril de 2025</p>

          <h2>1. Introducción</h2>
          <p>
            En DER Soluciones Integrales para Eventos S.A. ("DER", "nosotros", "nuestro") nos comprometemos a proteger
            su privacidad y sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos,
            compartimos y protegemos la información que obtenemos a través de nuestro sitio web, servicios de
            consultoría, producción de eventos, soluciones tecnológicas y cualquier otro servicio relacionado
            (colectivamente, los "Servicios").
          </p>
          <p>
            Al utilizar nuestros Servicios, usted acepta las prácticas descritas en esta Política de Privacidad. Le
            recomendamos que la lea detenidamente.
          </p>

          <h2>2. Información que Recopilamos</h2>
          <p>Podemos recopilar los siguientes tipos de información:</p>

          <h3>2.1. Información que usted nos proporciona</h3>
          <ul>
            <li>
              Información de contacto: nombre, dirección de correo electrónico, número de teléfono, dirección postal,
              cargo y empresa.
            </li>
            <li>
              Información de facturación: datos bancarios, información de tarjetas de crédito y dirección de
              facturación.
            </li>
            <li>
              Información de eventos: detalles sobre sus requisitos, preferencias y especificaciones para eventos.
            </li>
            <li>
              Comunicaciones: contenido de emails, mensajes, formularios de contacto y otras comunicaciones con
              nosotros.
            </li>
            <li>Encuestas y feedback: respuestas a encuestas, testimonios y comentarios sobre nuestros Servicios.</li>
          </ul>

          <h3>2.2. Información que recopilamos automáticamente</h3>
          <ul>
            <li>
              Información de uso: cómo interactúa con nuestro sitio web y servicios, páginas visitadas, tiempo de
              permanencia, enlaces en los que hace clic.
            </li>
            <li>
              Información del dispositivo: tipo de dispositivo, sistema operativo, tipo de navegador, configuración de
              idioma, dirección IP.
            </li>
            <li>
              Cookies y tecnologías similares: utilizamos cookies y tecnologías similares para recopilar información
              sobre su actividad, navegador y dispositivo. Para más información, consulte nuestra Política de Cookies.
            </li>
          </ul>

          <h3>2.3. Información de terceros</h3>
          <ul>
            <li>
              Redes sociales: si interactúa con nuestras redes sociales, podemos recibir información de estas
              plataformas.
            </li>
            <li>
              Socios comerciales: podemos recibir información de nuestros socios comerciales, proveedores y
              subcontratistas que nos ayudan a proporcionar nuestros Servicios.
            </li>
            <li>Fuentes públicas: podemos recopilar información disponible públicamente sobre usted o su empresa.</li>
          </ul>

          <h2>3. Cómo Utilizamos su Información</h2>
          <p>Utilizamos la información que recopilamos para los siguientes propósitos.</p>
        </div>
      </div>
    </div>
  )
}
