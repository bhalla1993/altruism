import { Box, CircularProgress } from '@mui/material'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('../components/layout/Layout'))
const HomePage = lazy(() => import('../pages/HomePage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const TemplatesPage = lazy(() => import('../pages/TemplatesPage'))
const TemplateDemoPage = lazy(() => import('../pages/TemplateDemoPage'))
const TemplateFullscreenDemo = lazy(() => import('../pages/TemplateFullscreenDemo'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function RouteLoader() {
  return (
    <Box sx={{ minHeight: '55vh', display: 'grid', placeItems: 'center' }}>
      <CircularProgress size={30} />
    </Box>
  )
}

function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/templates/:templateId/demo" element={<TemplateFullscreenDemo />} />

          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/templates/:templateId" element={<TemplateDemoPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
