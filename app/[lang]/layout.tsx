import { Inter } from "next/font/google"
import "../globals.css"
import Footer from "@/components/ui/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"
import { OrganizationSchema } from "@/components/schema-org"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import ServiceWorkerRegister from "@/app/sw-register"
import { AnimatedHeader } from "@/components/animated-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { locales } from "@/lib/i18n-config"
import ScrollToTop from "@/components/scroll-to-top"
import SimpleChat from "@/components/simple-chat"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: {
    default: "DER - Soluciones Integrales para Eventos",
    template: "%s | DER Eventos",
  },
  description:
    "Tu plataforma integral de soluciones para eventos. Más de 10 años creando experiencias memorables en Argentina y Latinoamérica.",
  keywords: [
    "eventos",
    "producción de eventos",
    "consultoría de eventos",
    "tecnología para eventos",
    "DER",
    "Argentina",
    "control de accesos",
  ],
  authors: [{ name: "DER Eventos" }],
  creator: "DER Eventos",
  publisher: "DER Eventos",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://somosder.ar"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
      en: "/en",
      pt: "/pt",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://somosder.ar",
    title: "DER - Soluciones Integrales para Eventos",
    description: "Tu plataforma integral de soluciones para eventos. Más de 10 años creando experiencias memorables.",
    siteName: "DER Eventos",
    images: [
      {
        url: "/images/der-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DER Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DER - Soluciones Integrales para Eventos",
    description: "Tu plataforma integral de soluciones para eventos. Más de 10 años creando experiencias memorables.",
    images: ["/images/der-og-image.jpg"],
    creator: "@DEREventos",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1E1E" },
  ],
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTop />
          <AnimatedHeader />
          {children}
          <Footer lang={params.lang} />
          <SimpleChat />
          <WhatsAppFloat />
          <CookieConsent />
          <OrganizationSchema />
          <PWAInstallPrompt />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  )
}
