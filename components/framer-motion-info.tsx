"use client"

export function FramerMotionInfo() {
  return (
    <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-md mb-4">
      <h3 className="font-medium">Nota de implementación:</h3>
      <p className="text-sm">Para que las animaciones funcionen correctamente, necesitas instalar framer-motion:</p>
      <pre className="mt-2 p-2 bg-black/10 dark:bg-black/30 rounded text-xs overflow-x-auto">
        npm install framer-motion
      </pre>
      <p className="text-sm mt-2">O si usas yarn:</p>
      <pre className="mt-2 p-2 bg-black/10 dark:bg-black/30 rounded text-xs overflow-x-auto">
        yarn add framer-motion
      </pre>
    </div>
  )
}
