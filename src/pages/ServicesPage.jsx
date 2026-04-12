import CodeIcon from '@mui/icons-material/Code'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import DomainIcon from '@mui/icons-material/Domain'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import PaletteIcon from '@mui/icons-material/Palette'
import PersonIcon from '@mui/icons-material/Person'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import { Box, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { business } from '../utils/siteData'

const services = [
  {
    title: 'SPA Resume Creation',
    description: 'Modern single-page resume SPAs designed to be shared as a professional link.',
    icon: PersonIcon,
  },
  {
    title: 'SPA Portfolio Creation',
    description: 'Portfolio SPAs for freelancers and creators with polished project presentation.',
    icon: WorkOutlineIcon,
  },
  {
    title: 'Custom SPA Development',
    description: 'Tailored single-page applications built around your exact personal or business goals.',
    icon: CodeIcon,
  },
  {
    title: 'Template Customization',
    description: 'We adapt any template style, layout, and section structure to match your profile.',
    icon: PaletteIcon,
  },
  {
    title: 'Code Ownership Package',
    description: 'Get complete source code with deployment guidance for full long-term independence.',
    icon: IntegrationInstructionsIcon,
  },
  {
    title: 'Domain Setup & Form Integration',
    description: 'Optional custom domain setup and contact form integrations (Google Forms and others).',
    icon: DomainIcon,
  },
]

function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore our SPA resume, portfolio, template customization, and custom web application development services."
        path="/services"
      />

      <Box component="section" aria-labelledby="services-page-title">
        <Stack spacing={3}>
          <Typography id="services-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Services Built for Modern Profiles
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 840 }}>
            At {business.name}, we build your online presence—simple, fast, and affordable. We focus on practical single-page experiences that launch fast, look polished, and stay simple to manage.
          </Typography>

          <Grid container spacing={2.4}>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Grid key={service.title} item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                  >
                    <Card sx={{ height: '100%', transition: 'transform 220ms ease, box-shadow 220ms ease', '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 } }}>
                      <CardContent>
                        <Stack spacing={1.15}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Icon color="primary" />
                            <Typography variant="h5" sx={{ fontSize: '1.2rem' }}>{service.title}</Typography>
                          </Stack>
                          <Typography color="text.secondary">{service.description}</Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )
            })}
          </Grid>

          <Card
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              background: (theme) => `linear-gradient(120deg, ${theme.palette.primary.main}14, transparent)`,
            }}
          >
            <CardContent>
              <Stack spacing={1.2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <DeviceHubIcon color="primary" />
                  <Typography variant="h5">
                    Custom Web Applications & Software (CRM, Dashboards, Tools, and More)
                  </Typography>
                </Stack>
                <Typography color="text.secondary">
                  We build tailored web applications based on your exact business requirements. This includes CRM systems,
                  dashboards, internal tools, booking systems, and automation tools designed with modern technologies and
                  scalable architecture.
                </Typography>
                <Typography color="text.secondary">
                  Pricing for custom software is not fixed and depends on features, complexity, integrations, and timeline.
                </Typography>
                <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Pricing for custom applications is provided after a detailed requirement discussion.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                  <Button component={RouterLink} to="/contact" variant="contained">Contact Us for a Quote</Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
            <Button component={RouterLink} to="/templates" variant="contained">Browse Templates</Button>
            <Button component={RouterLink} to="/contact" variant="outlined">Start Your Project</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default ServicesPage
