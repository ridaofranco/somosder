import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // En un entorno real, verificaríamos la sesión del usuario
  // Aquí usamos una verificación simple basada en cookies
  const isAdmin = request.cookies.get("admin_session")?.value === "valid"

  // Añadir header para indicar si es admin
  if (isAdmin) {
    response.headers.set("x-is-admin", "true")
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
