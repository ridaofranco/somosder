"use client"

import { useEffect } from "react"

export default function TawkDirect() {
  useEffect(() => {
    // Verificar si el script ya está cargado
    if (document.getElementById("tawk-direct")) {
      return
    }

    // Crear un elemento script
    const script = document.createElement("script")
    script.id = "tawk-direct"
    script.innerHTML = `
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
      (function(){
        var s1 = document.createElement("script");
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6813762ebe6663190a6c5d4c/1iq60ba7i';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin','*');
        document.head.appendChild(s1);
      })();
    `

    // Añadir el script al final del body
    document.body.appendChild(script)

    // Limpieza al desmontar
    return () => {
      const scriptElement = document.getElementById("tawk-direct")
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

  return null
}
