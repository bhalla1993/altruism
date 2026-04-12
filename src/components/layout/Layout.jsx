import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import { motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import MobileBackToTop from '../common/MobileBackToTop'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const reduceMotion = useReducedMotion()
  const disablePageMotion = reduceMotion || isMobile

  return (
    <Box>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <Container
        id="main-content"
        component="main"
        maxWidth="lg"
        sx={{
          py: { xs: 3.5, md: 5 },
          px: { xs: 2, sm: 3 },
          width: '100%',
          overflowX: 'clip',
          '& .MuiGrid-container': {
            width: '100%',
            margin: 0,
          },
          '& .MuiGrid-item': {
            minWidth: 0,
          },
        }}
      >
        {disablePageMotion ? (
          <Box key={location.pathname} sx={{ width: '100%' }}>
            <Outlet />
          </Box>
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ width: '100%' }}
          >
            <Outlet />
          </motion.div>
        )}
      </Container>
      <MobileBackToTop />
      <Footer />
    </Box>
  )
}

export default Layout
