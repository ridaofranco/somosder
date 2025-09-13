"use client"

import * as React from "react"
import { useStableCallback } from "@/hooks/use-stable-callback"

// Añadimos useEffectEvent al objeto React
const ReactPolyfill = {
  ...React,
  useEffectEvent: useStableCallback,
}

export default ReactPolyfill
