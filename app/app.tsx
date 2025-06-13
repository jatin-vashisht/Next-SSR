"use client"

import type { AppProps } from "next/app"
import { useEffect } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  // Remove any potential window.onbeforeunload or window.onunload handlers
  useEffect(() => {
    // Clean up any existing unload handlers that might be set by third-party scripts
    window.onbeforeunload = null
    window.onunload = null

    return () => {
      window.onbeforeunload = null
      window.onunload = null
    }
  }, [])

  return <Component {...pageProps} />
}
