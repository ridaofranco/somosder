"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "dark" | "light"
}

// No inicializamos resolvedTheme aquí para evitar desajustes de hidratación
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light", // Default a light para el SSR inicial si no se especifica
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "der-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Inicializar el tema desde localStorage solo en el cliente
    if (typeof window !== "undefined" && localStorage) {
      const savedTheme = localStorage.getItem(storageKey)
      if (savedTheme && ["dark", "light", "system"].includes(savedTheme)) {
        return savedTheme as Theme
      }
    }
    return defaultTheme
  })
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light") // Se inicializa a 'light' para el SSR
  const [mounted, setMounted] = useState(false)

  // Marcar que el componente se ha montado en el cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Función para aplicar el tema al documento
  const applyTheme = (currentTheme: Theme) => {
    if (!mounted) return // No aplicar en el servidor o antes de montar

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    let resolvedValue: "dark" | "light"

    if (currentTheme === "system") {
      resolvedValue = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      resolvedValue = currentTheme as "dark" | "light"
    }

    root.classList.add(resolvedValue)
    setResolvedTheme(resolvedValue)

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", resolvedValue === "dark" ? "#1E1E1E" : "#FFFFFF")
    }
  }

  // Aplicar tema cuando el estado 'theme' o 'mounted' cambian
  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
    }
  }, [theme, mounted])

  // Manejar cambios en la preferencia del sistema
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system") // Re-aplicar el tema si es 'system'
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, mounted])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (mounted && localStorage) {
        localStorage.setItem(storageKey, newTheme)
      }
      setTheme(newTheme)
    },
    resolvedTheme,
  }

  // Renderizar solo después de que el componente se haya montado para evitar desajustes
  if (!mounted) {
    // Durante el SSR, o antes de montar en el cliente, renderizamos con el tema por defecto
    // Esto es crucial para que el HTML del servidor coincida con el primer render del cliente
    return (
      <ThemeProviderContext.Provider {...props} value={{ ...initialState, theme: defaultTheme, resolvedTheme: defaultTheme === "dark" ? "dark" : "light" }}>
        {children}
      </ThemeProviderContext.Provider>
    )
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}