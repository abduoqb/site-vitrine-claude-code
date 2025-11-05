'use client'

import { useEffect, useState } from 'react'
import { debounce } from '@/lib/utils'

/**
 * Hook to get the current scroll position
 * @param delay - Debounce delay in milliseconds (default: 100)
 * @returns Current Y scroll position
 */
export function useScrollPosition(delay: number = 100): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollY(window.scrollY)
    }, delay)

    // Set initial value
    setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delay])

  return scrollY
}
