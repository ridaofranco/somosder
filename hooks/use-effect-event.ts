// Este es un reemplazo temporal para useEffectEvent
// Simplemente devuelve la función que se le pasa sin cambios
export function useEffectEvent<T extends (...args: any[]) => any>(callback: T): T {
  return callback
}
