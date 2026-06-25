import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On every route change, jump to the top — otherwise navigating between
// legal pages keeps the previous scroll position, which reads as broken.
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
