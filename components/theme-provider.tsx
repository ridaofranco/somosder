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

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "dark",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "der-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark")

  // Initialize theme from localStorage
  useEffect(() => {
    if (typeof window === "undefined" || !localStorage) return
    
    const savedTheme = localStorage.getItem(storageKey)
    if (savedTheme && ["dark", "light", "system"].includes(savedTheme)) {
      setTheme(savedTheme as Theme)
    }
  }, [storageKey])

  // Handle system preference changes
  useEffect(() => {
    if (typeof window === "undefined") return
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        updateTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  // Apply theme to document
  useEffect(() => {
    updateTheme(theme)
  }, [theme])

  // Function to update the theme
  const updateTheme = (currentTheme: Theme) => {
    if (typeof window === "undefined") return
    
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

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (typeof window !== "undefined" && localStorage) {
        localStorage.setItem(storageKey, newTheme)
      }
      setTheme(newTheme)
    },
    resolvedTheme,
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
