"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { FileDown, FileText, CheckCircle, Calendar, ClipboardList } from "lucide-react"

type Resource = {
  id: string
  title: string
  description: string
  type: "guide" | "checklist" | "template" | "ebook"
  icon: "FileText" | "Calendar" | "ClipboardList"
  downloadUrl: string
}

export function DownloadableResources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const resources: Resource[] = [
    {
      id: "guia-eventos-corporativos",
      title: "Guía Completa para Eventos Corporativos",
      description:
        "Todo lo que necesitas saber para organizar un evento corporativo exitoso, desde la planificación hasta la ejecución.",
      type: "guide",
      icon: "FileText",
      downloadUrl: "/resources/guia-eventos-corporativos.pdf",
    },
    {
      id: "checklist-organizacion-eventos",
      title: "Checklist para Organización de Eventos",
      description:
        "Lista de verificación detallada para no olvidar ningún aspecto importante en la organización de tu evento.",
      type: "checklist",
      icon: "ClipboardList",
      downloadUrl: "/resources/checklist-organizacion-eventos.pdf",
    },
    {
      id: "plantilla-presupuesto",
      title: "Plantilla de Presupuesto para Eventos",
      description: "Plantilla Excel para calcular y gestionar el presupuesto de tu evento de manera eficiente.",
      type: "template",
      icon: "Calendar",
      downloadUrl: "/resources/plantilla-presupuesto-eventos.xlsx",
    },
  ]

  const getIcon = (icon: string) => {
    switch (icon) {
      case "FileText":
        return <FileText className="h-10 w-10 text-orange-500" />
      case "Calendar":
        return <Calendar className="h-10 w-10 text-orange-500" />
      case "ClipboardList":
        return <ClipboardList className="h-10 w-10 text-orange-500" />
      default:
        return <FileText className="h-10 w-10 text-orange-500" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "guide":
        return "Guía"
      case "checklist":
        return "Checklist"
      case "template":
        return "Plantilla"
      case "ebook":
        return "E-Book"
      default:
        return "Recurso"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En una implementación real, aquí enviaríamos los datos a un API
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  const handleDownload = () => {
    // En una implementación real, aquí registraríamos la descarga y redireccionaríamos al archivo
    if (selectedResource && typeof window !== "undefined") {
      window.open(selectedResource.downloadUrl, "_blank")
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <Card key={resource.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              {getIcon(resource.icon)}
              <div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription className="text-xs">{getTypeLabel(resource.type)}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{resource.description}</p>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedResource(resource)
                    setSubmitted(false)
                  }}
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                {!submitted ? (
                  <>
                    <DialogHeader>
                      <DialogTitle>Descargar recurso</DialogTitle>
                      <DialogDescription>
                        Completa el formulario para acceder a {selectedResource?.title}
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Nombre
                          </Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="consent"
                            checked={consent}
                            onCheckedChange={(checked) => setConsent(checked as boolean)}
                            required
                          />
                          <label
                            htmlFor="consent"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Acepto recibir información sobre eventos y recursos de DER
                          </label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" disabled={!consent}>
                          Descargar ahora
                        </Button>
                      </DialogFooter>
                    </form>
                  </>
                ) : (
                  <div className="py-6 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <DialogTitle className="mb-2">¡Gracias por tu interés!</DialogTitle>
                    <DialogDescription className="mb-6">
                      Hemos enviado el recurso a tu correo electrónico. También puedes descargarlo directamente haciendo
                      clic en el botón de abajo.
                    </DialogDescription>
                    <Button onClick={handleDownload}>
                      <FileDown className="mr-2 h-4 w-4" />
                      Descargar {selectedResource?.title}
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
