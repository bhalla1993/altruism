import { Box, Grid, Stack, Typography } from '@mui/material'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import ServiceCard from '../components/cards/ServiceCard'
import { serviceItems } from '../utils/siteData'

function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Discover website development, online resume and portfolio services, custom software development, and future pre-built digital products."
        path="/services"
      />

      <Box component="section" aria-labelledby="services-page-title">
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="services-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Services Built for Growth
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 820 }}>
              We provide practical digital execution for businesses and professionals who need high-quality outcomes without enterprise complexity.
            </Typography>
            <Grid container spacing={3}>
              {serviceItems.map((service) => (
                <Grid key={service.title} item xs={12} md={6}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default ServicesPage
