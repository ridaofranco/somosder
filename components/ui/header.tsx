"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-border bg-white dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-52 h-16">
            <Image
              src="/images/der-logo-final.png"
              alt="DER Logo"
              fill
              sizes="208px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="text-sm font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className="text-sm font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
          >
            Blog
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contacto">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              Contactanos
            </Button>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-800 dark:text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-background p-6 flex flex-col gap-6 h-[calc(100vh-4rem)] transition-colors duration-300">
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-16">
              <Image src="/images/der-logo-final.png" alt="DER Logo" fill className="object-contain" />
            </div>
          </div>
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-lg font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-lg font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-lg font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="/portfolio"
              className="text-lg font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium text-gray-800 dark:text-foreground hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </nav>
          <div className="mt-auto">
            <div className="flex justify-center mb-4">
              <ThemeToggle />
            </div>
            <Link href="/contacto" onClick={toggleMenu}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contactanos</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
