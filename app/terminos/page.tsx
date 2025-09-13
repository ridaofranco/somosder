import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones | DER - Soluciones Integrales para Eventos",
  description: "Términos y condiciones legales para el uso de los servicios de DER.",
}

export default function TerminosPage() {
  return (
    <div className="container px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Términos y Condiciones</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Última actualización: 9 de abril de 2025</p>

          <h2>1. Introducción</h2>
          <p>
            Estos Términos y Condiciones ("Términos") rigen el uso de los servicios ofrecidos por DER Soluciones
            Integrales para Eventos S.A. ("DER", "nosotros", "nuestro"), incluyendo nuestro sitio web, servicios de
            consultoría, producción de eventos, soluciones tecnológicas y cualquier otro servicio relacionado
            (colectivamente, los "Servicios").
          </p>
          <p>
            Al acceder o utilizar nuestros Servicios, usted acepta estar legalmente vinculado por estos Términos. Si no
            está de acuerdo con estos Términos, no debe acceder ni utilizar nuestros Servicios.
          </p>

          <h2>2. Servicios</h2>
          <p>
            DER ofrece una amplia gama de servicios relacionados con la planificación, producción y ejecución de
            eventos, incluyendo pero no limitado a:
          </p>
          <ul>
            <li>Consultoría estratégica para eventos</li>
            <li>Producción integral de eventos</li>
            <li>Soluciones tecnológicas para eventos</li>
            <li>Marketing y creatividad para eventos</li>
            <li>Gestión deportiva</li>
            <li>Logística internacional</li>
          </ul>
          <p>
            La naturaleza específica, alcance y detalles de los Servicios serán acordados por escrito entre DER y el
            cliente en un contrato de servicios separado.
          </p>

          <h2>3. Contratación de Servicios</h2>
          <p>
            3.1. Todos los servicios de DER se formalizarán mediante un contrato específico que detallará el alcance,
            plazos, entregables y condiciones económicas.
          </p>
          <p>
            3.2. Las cotizaciones tienen una validez de 30 días desde su emisión, salvo que se indique lo contrario.
          </p>
          <p>
            3.3. La reserva de fecha para un evento requiere el pago de un anticipo no reembolsable, cuyo monto se
            especificará en la propuesta comercial.
          </p>
          <p>
            3.4. Cualquier modificación al alcance de los servicios contratados deberá ser acordada por escrito y podrá
            implicar ajustes en los costos y plazos.
          </p>

          <h2>4. Pagos</h2>
          <p>4.1. Los pagos deberán realizarse según el cronograma establecido en el contrato de servicios.</p>
          <p>
            4.2. El incumplimiento de los pagos en las fechas acordadas puede resultar en la suspensión de los servicios
            y/o la cancelación del contrato.
          </p>
          <p>4.3. Todos los precios están sujetos a los impuestos aplicables según la legislación vigente.</p>
          <p>
            4.4. Los gastos adicionales no contemplados en el presupuesto inicial serán notificados al cliente para su
            aprobación antes de ser incurridos.
          </p>

          <h2>5. Cancelaciones y Reprogramaciones</h2>
          <p>5.1. En caso de cancelación por parte del cliente, aplicarán las siguientes penalidades:</p>
          <ul>
            <li>Cancelación con más de 90 días de anticipación: retención del anticipo</li>
            <li>Cancelación entre 89 y 60 días: 50% del valor total del contrato</li>
            <li>Cancelación entre 59 y 30 días: 75% del valor total del contrato</li>
            <li>Cancelación con menos de 30 días: 100% del valor total del contrato</li>
          </ul>
          <p>5.2. Las reprogramaciones están sujetas a disponibilidad y pueden implicar costos adicionales.</p>
          <p>
            5.3. En caso de fuerza mayor o circunstancias extraordinarias, DER trabajará con el cliente para encontrar
            soluciones alternativas.
          </p>

          <h2>6. Propiedad Intelectual</h2>
          <p>
            6.1. Todo el contenido del sitio web de DER, incluyendo textos, gráficos, logos, imágenes y software, está
            protegido por derechos de autor y otras leyes de propiedad intelectual.
          </p>
          <p>
            6.2. Los derechos de propiedad intelectual de los materiales creados específicamente para un cliente como
            parte de los Servicios serán transferidos al cliente una vez completado el pago total, salvo acuerdo en
            contrario.
          </p>
          <p>
            6.3. DER se reserva el derecho de utilizar imágenes y videos del evento para su portfolio y materiales
            promocionales, salvo que se acuerde lo contrario por escrito.
          </p>

          <h2>7. Confidencialidad</h2>
          <p>
            7.1. DER se compromete a mantener la confidencialidad de toda la información proporcionada por el cliente.
          </p>
          <p>
            7.2. Esta obligación de confidencialidad no se aplicará a información que sea de dominio público o que deba
            ser divulgada por requerimiento legal.
          </p>

          <h2>8. Limitación de Responsabilidad</h2>
          <p>
            8.1. DER se esfuerza por proporcionar servicios de la más alta calidad, pero no puede garantizar resultados
            específicos de un evento.
          </p>
          <p>
            8.2. La responsabilidad de DER estará limitada al monto total pagado por el cliente por los servicios
            contratados.
          </p>
          <p>8.3. DER no será responsable por daños indirectos, incidentales, especiales o consecuentes.</p>
          <p>
            8.4. El cliente es responsable de obtener todos los permisos, licencias y seguros necesarios para la
            realización del evento, salvo que se acuerde expresamente que DER asumirá esta responsabilidad.
          </p>

          <h2>9. Protección de Datos</h2>
          <p>9.1. DER cumple con todas las leyes aplicables de protección de datos.</p>
          <p>
            9.2. Para más información sobre cómo recopilamos, utilizamos y protegemos sus datos personales, consulte
            nuestra{" "}
            <Link href="/privacidad" className="text-orange-500 hover:text-orange-600">
              Política de Privacidad
            </Link>
            .
          </p>

          <h2>10. Modificaciones</h2>
          <p>10.1. DER se reserva el derecho de modificar estos Términos en cualquier momento.</p>
          <p>
            10.2. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
          </p>
          <p>
            10.3. El uso continuado de nuestros Servicios después de cualquier modificación constituye su aceptación de
            los Términos modificados.
          </p>

          <h2>11. Ley Aplicable y Jurisdicción</h2>
          <p>11.1. Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Argentina.</p>
          <p>
            11.2. Cualquier disputa que surja en relación con estos Términos estará sujeta a la jurisdicción exclusiva
            de los tribunales de la Ciudad Autónoma de Buenos Aires.
          </p>

          <h2>12. Contacto</h2>
          <p>Si tiene alguna pregunta sobre estos Términos, puede contactarnos a:</p>
          <p>
            Email: legal@der.com.ar
            <br />
            Teléfono: +54 11 1234-5678
            <br />
            Dirección: Av. Corrientes 1234, Piso 5, C1043AAZ, Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </div>
  )
}
