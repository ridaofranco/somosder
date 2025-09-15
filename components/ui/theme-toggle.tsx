"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect solo se ejecuta en el cliente, por lo que ahora podemos mostrar la UI de forma segura.
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Renderizar un placeholder en el servidor para evitar cambios de diseño.
    return <div className="w-9 h-9 rounded-full" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full transition-colors duration-300"
      aria-label={resolvedTheme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{resolvedTheme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}</span>
    </Button>
  )
}