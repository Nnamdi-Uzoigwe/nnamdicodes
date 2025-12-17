'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // TS-safe: cast to `any` to satisfy strict mode
      ...( {
        smooth: true,
        lerp: 0.1,
        smoothTouch: true,
      } as any )
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
}
