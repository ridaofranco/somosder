import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-52 h-16">
                <Image src="/images/der-logo-final.png" alt="DER Logo" fill sizes="208px" className="object-contain" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Tu plataforma integral de soluciones para eventos. Más de 10 años creando experiencias memorables.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/consultoria"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Consultoría Estratégica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/produccion"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Producción de Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/tecnologia"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Soluciones Tecnológicas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/marketing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Marketing y Creatividad
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/deportes"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Gestión Deportiva
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/trabaja-con-nosotros"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wider">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Buenos Aires, Argentina</li>
              <li className="text-muted-foreground text-sm">info@der.com.ar</li>
              <li className="text-muted-foreground text-sm">+54 9 11 7546-0675</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} DER. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
