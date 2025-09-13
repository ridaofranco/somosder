"use client"

import { useState, useCallback, useTransition, useRef, useEffect } from "react"

// Reemplazamos useEffectEvent con una implementación personalizada
function useStableCallback<T extends (...args: any[]) => any>(callback: T): T {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useCallback((...args: Parameters<T>) => {
    return callbackRef.current(...args)
  }, []) as T
}

// React 18 compatible version of useActionState
export function useActionState<TState, TInput>(
  action: (formData: FormData) => Promise<TState>, 
  initialState?: TState
) {
  const [state, setState] = useState<TState | undefined>(initialState)
  const [isPending, startTransition] = useTransition()

  // Usamos useStableCallback en lugar de useEffectEvent
  const handleAction = useStableCallback(async (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await action(formData)
        setState(result)
      } catch (error) {
        console.error('Action failed:', error)
      }
    })
  })

  const actionWithState = useCallback(
    (formData: FormData) => {
      handleAction(formData)
      return undefined
    },
    [handleAction],
  )

  return [state, actionWithState, isPending] as const
}
