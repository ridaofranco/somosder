import React from "react"

export function SearchSkeleton() {
  return (
    <div className="container py-12">
      <div className="h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>{" "}
      {/* Título */}
      <div className="flex items-center gap-2 mb-8">
        <div className="relative flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>{" "}
        {/* Input de búsqueda */}
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>{" "}
        {/* Botón de búsqueda */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 animate-pulse">
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>{" "}
            {/* Título del filtro */}
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}{" "}
              {/* Elementos del filtro */}
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>{" "}
          {/* Mensaje de resultados */}
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="block bg-gray-100 dark:bg-gray-800 rounded-lg p-4 animate-pulse border">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>{" "}
                  {/* Imagen/Icono */}
                  <div className="flex-1">
                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>{" "}
                    {/* Título del resultado */}
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>{" "}
                    {/* Descripción línea 1 */}
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded"></div>{" "}
                    {/* Descripción línea 2 */}
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>{" "}
                    {/* Fecha/Ver más */}
                  </div>
                </div>
              </div>
            ))}{" "}
            {/* Tarjetas de resultados */}
          </div>
        </div>
      </div>
    </div>
  )
}