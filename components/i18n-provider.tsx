"use client"

import type React from "react"

import { createContext, useContext } from "react"
import type { Dictionary } from "@/lib/i18n-config"

const I18nContext = createContext<Dictionary>({})

export const useI18n = () => useContext(I18nContext)

export default function I18nProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode
  dictionary: Dictionary
}) {
  return <I18nContext.Provider value={dictionary}>{children}</I18nContext.Provider>
}
