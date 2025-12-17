'use client'

import { ReactNode } from 'react'
import useSmoothScroll from '@/app/hooks/useSmoothScroll'

export default function ScrollWrapper({ children }: { children: ReactNode }) {
  useSmoothScroll()
  return <>{children}</>
}
