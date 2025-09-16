import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header" // ✅ default export
import Footer from "@/components/ui/footer" // ✅ default export
import CookieConsent from "@/components/cookie-consent"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppFloat from "@/components/whatsapp-float"
import { OrganizationSchema } from "@/components/schema-org"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

/* ----------  SEO METADATA ---------- */
export const metadata: Metadata = {
  title: {
    default: "DER EVENT HUB - Eventos 360° con Tecnología Propia | Argentina & LATAM",
    template: "%s | DER EVENT HUB",
  },
  description:
    "Eventos corporativos y deportivos con tecnología propia. Control de accesos, producción integral y analytics en tiempo real. Manchester City, Campus Party, +20K asistentes. Cotización gratis en 60 segundos.",
  keywords: [
    "portfolio eventos Argentina",
    "casos de éxito eventos",
    "Manchester City Argentina",
    "Campus Party producción",
    "Anuel AA control accesos",
    "Myke Towers eventos",
    "eventos corporativos portfolio",
    "DER Event Hub casos",
  ],
  metadataBase: new URL("https://somosder.ar"),
  openGraph: {
    title: "DER EVENT HUB - Eventos 360° con Tecnología Propia",
    description:
      "Eventos corporativos y deportivos con tecnología propia. Manchester City, Campus Party, +20K asistentes.",
    url: "https://somosder.ar",
    siteName: "DER EVENT HUB",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DER EVENT HUB - Eventos 360°",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DER EVENT HUB - Eventos 360° con Tecnología Propia",
    description: "Manchester City, Campus Party, +20K asistentes. Control de accesos y producción integral.",
    images: ["/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
}

/* ----------  ROOT LAYOUT ---------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('RootLayout component is rendering');
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* PWA + Favicons */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />

        {/* Datos estructurados */}
        <OrganizationSchema />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-707401742" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-707401742');
            }
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* Utilidades globales */}
          <CookieConsent />
          <ScrollToTop />
          <WhatsAppFloat />
          <PWAInstallPrompt />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
