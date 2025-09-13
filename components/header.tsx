"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SearchBar } from "@/components/search-bar"
import LanguageSwitcher from "@/components/language-switcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-2 sm:px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-36 sm:w-52 h-12 sm:h-16">
            <Image src="/images/der-logo-final.png" alt="DER Logo" fill sizes="208px" className="object-contain" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/servicios"
            className="text-sm font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className="text-sm font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
          >
            Nosotros
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="w-64">
            <SearchBar />
          </div>
          <Link
            href="/cotizador"
            className="text-sm font-medium flex items-center hover:text-orange-500 transition-colors"
          >
            <Calculator className="h-4 w-4 mr-1" />
            Cotizador
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/contacto">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              Contacto
            </Button>
          </Link>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-background p-4 sm:p-6 flex flex-col gap-6 h-[calc(100vh-4rem)]">
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-lg font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/portfolio"
              className="text-lg font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/servicios"
              className="text-lg font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-lg font-medium uppercase tracking-wide hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="/cotizador"
              className="text-lg font-medium flex items-center hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              <Calculator className="h-5 w-5 mr-2" />
              Cotizador Virtual
            </Link>
          </nav>
          <div className="mt-auto">
            <Link href="/contacto" onClick={toggleMenu}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contactanos</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
