export const defaultLocale = "es"
export const locales = ["es", "en", "pt"]

export type Locale = (typeof locales)[number]

export interface Dictionary {
  [key: string]: string | Dictionary
}

export const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}
