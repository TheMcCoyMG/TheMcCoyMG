"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function BrandLoader() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setExiting(true), 850)
    const hideTimer = window.setTimeout(() => setVisible(false), 1250)
    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`site-loader${exiting ? " site-loader--exit" : ""}`} role="status" aria-label="Loading Rotimi Ogundele Solution">
      <div className="site-loader__circle">
        <Image src="/official-logo.jpeg" alt="Rotimi Ogundele Solution" width={72} height={72} priority />
      </div>
    </div>
  )
}
