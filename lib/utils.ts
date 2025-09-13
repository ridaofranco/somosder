// Archivo de utilidades para verificar si hay alguna referencia a useEffectEvent
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Asegúrate de que no haya ninguna función que use useEffectEvent aquí
