// Fathom.tsx
'use client'

import { load, trackPageview } from 'fathom-client'
import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    load('ZGWVOOID', {
      includedDomains: ['machineminds.space', 'www.machineminds.space']
    })
  }, [])

  // Record a pageview when route changes
  useEffect(() => {
    trackPageview();
  }, [pathname, searchParams])

  return null;
}

export default function Fathom() {
  return <Suspense fallback={null}>
    <TrackPageView />
  </Suspense>
}