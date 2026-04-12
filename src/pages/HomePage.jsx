import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import ServiceCard from '../components/cards/ServiceCard'
import TemplatePreviewCard from '../components/templates/TemplatePreviewCard'
import { business, serviceItems } from '../utils/siteData'
import { templates } from '../utils/templatesData'

function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="Altruism Digital Studio builds websites, online resumes, portfolios, and professional software for growing businesses."
        path="/"
      />

      <Box component="section" sx={{ mb: 8 }}>
        <AnimatedSection>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2.5}>
                <Chip icon={<RocketLaunchIcon />} label="Small Business Digital Partner" color="primary" variant="outlined" sx={{ width: 'fit-content' }} />
                <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.7rem' }, lineHeight: 1.1 }}>
                  {business.tagline}
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 680 }}>
                  {business.shortDescription}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button component={RouterLink} to="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                    Book a Discovery Call
                  </Button>
                  <Button component={RouterLink} to="/services" variant="outlined" size="large">
                    Explore Services
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="A professional team planning software delivery"
                sx={{ width: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
              />
            </Grid>
          </Grid>
        </AnimatedSection>
      </Box>

      <Box component="section" aria-labelledby="featured-services-title">
        <AnimatedSection delay={0.08}>
          <Stack spacing={3}>
            <Typography id="featured-services-title" variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' } }}>
              Featured Services
            </Typography>
            <Grid container spacing={3}>
              {serviceItems.slice(0, 3).map((service) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>

      <Box component="section" aria-labelledby="starter-templates-title" sx={{ mt: 8 }}>
        <AnimatedSection delay={0.12}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
              <Typography id="starter-templates-title" variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' } }}>
                Starter Templates
              </Typography>
              <Button component={RouterLink} to="/templates" variant="outlined">
                Browse All Templates
              </Button>
            </Stack>
            <Grid container spacing={3}>
              {templates.slice(0, 3).map((template, index) => (
                <Grid key={template.id} item xs={12} md={4}>
                  <TemplatePreviewCard template={template} index={index} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default HomePage
