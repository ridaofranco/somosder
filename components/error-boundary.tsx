"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <h1 className="text-9xl font-bold text-orange-500">500</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Algo salió mal</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
            Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para
            solucionarlo.
          </p>
          {this.state.error && (
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-8 max-w-md overflow-auto text-left">
              <p className="text-red-700 dark:text-red-400 font-mono text-sm">{this.state.error.toString()}</p>
              {this.state.errorInfo && (
                <details className="mt-2">
                  <summary className="text-red-700 dark:text-red-400 cursor-pointer">Stack trace</summary>
                  <pre className="mt-2 text-xs text-red-700 dark:text-red-400 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => {
                this.setState({ hasError: false, error: null, errorInfo: null })
                window.location.reload()
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Intentar nuevamente
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Home className="mr-2 h-4 w-4" /> Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
