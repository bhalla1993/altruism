import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Fab, Zoom, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

function MobileBackToTop() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [isVisible, setIsVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    if (!isSmallScreen) {
      setIsVisible(false)
      return undefined
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSmallScreen])

  useEffect(() => {
    if (!isSmallScreen || typeof IntersectionObserver === 'undefined') {
      setIsFooterVisible(false)
      return undefined
    }

    const footer = document.querySelector('footer')

    if (!footer) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )

    observer.observe(footer)

    return () => {
      observer.disconnect()
    }
  }, [isSmallScreen])

  if (!isSmallScreen) {
    return null
  }

  return (
    <Zoom in={isVisible}>
      <Box
        sx={{
          position: 'fixed',
          right: 16,
          bottom: isFooterVisible ? 112 : 20,
          zIndex: (currentTheme) => currentTheme.zIndex.speedDial,
          transition: 'bottom 180ms ease',
        }}
      >
        <Fab
          size="medium"
          color="primary"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{ boxShadow: '0 12px 24px rgba(15, 23, 42, 0.2)' }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  )
}

export default MobileBackToTop