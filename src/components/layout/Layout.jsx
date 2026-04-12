import { Box, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  const location = useLocation()

  return (
    <Box>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <Container id="main-content" component="main" maxWidth="lg" sx={{ py: 5 }}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
