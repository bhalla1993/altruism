import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import BoltIcon from '@mui/icons-material/Bolt'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PublicIcon from '@mui/icons-material/Public'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { Box, Button, Card, CardContent, Chip, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import ServiceCard from '../components/cards/ServiceCard'
import TemplatePreviewCard from '../components/templates/TemplatePreviewCard'
import { business, serviceItems } from '../utils/siteData'
import { templates } from '../utils/templatesData'

const approachItems = [
  'SPAs deployed on GitHub Pages with zero hosting fees.',
  'Optional custom domains at an additional cost.',
  'Full code ownership available for complete independence.',
  'Optional form integrations via Google Forms or other providers.',
]

const socialItems = [
  { label: 'Facebook', href: business.socialLinks.facebook, Icon: FacebookRoundedIcon },
  { label: 'Instagram', href: business.socialLinks.instagram, Icon: InstagramIcon },
  { label: 'LinkedIn', href: business.socialLinks.linkedin, Icon: LinkedInIcon },
]

const heroTrustItems = [
  'Starting at $99',
  'Flat pricing, no hidden fees',
  'Delivered in 48 hours',
]

function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="Altruism Digital Studio builds websites, online resumes, portfolios, and professional software for growing businesses."
        path="/"
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <Box component="section" sx={{ mb: 8 }}>
        <AnimatedSection>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2.5}>
                <Chip icon={<RocketLaunchIcon />} label="Small Business Digital Partner" color="primary" variant="outlined" sx={{ width: 'fit-content' }} />
                <Typography variant="h1" sx={{ fontSize: { xs: '2.4rem', md: '3.7rem' }, lineHeight: 1.1 }}>
                  {business.tagline}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    maxWidth: 760,
                    fontWeight: 700,
                    color: 'text.primary',
                    lineHeight: 1.35,
                  }}
                >
                  Modern Single-Page Websites for Students, Creators & Small Businesses - Delivered Fast & Affordably
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button component={RouterLink} to="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                    Book a Discovery Call
                  </Button>
                  <Button component={RouterLink} to="/services" variant="outlined" size="large">
                    Explore Services
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
                  {heroTrustItems.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      variant="filled"
                      sx={{
                        borderRadius: 999,
                        px: 0.6,
                        fontWeight: 700,
                        bgcolor: 'action.hover',
                        color: 'text.primary',
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    />
                  ))}
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

      {/* ── Featured Services ───────────────────────────────────────── */}
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

      {/* ── Starter Templates ───────────────────────────────────────── */}
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

      {/* ── About ───────────────────────────────────────────────────── */}
      <Box id="about" component="section" aria-labelledby="home-about-title" sx={{ mt: { xs: 10, md: 14 } }}>
        <AnimatedSection delay={0.05}>
          <Stack spacing={4}>
            <Stack spacing={1.2}>
              <Typography id="home-about-title" variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
                About {business.name}
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
                We help professionals build modern, link-based online presence with single-page experiences that are fast, polished, and practical.
              </Typography>
            </Stack>

            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <HandshakeOutlinedIcon color="primary" />
                        <Typography variant="h6">Who We Are</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        A focused digital studio helping students, job seekers, and freelancers launch professional resume and portfolio SPAs without technical overhead. We blend design clarity, frontend engineering, and practical content strategy.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <BoltIcon color="primary" />
                        <Typography variant="h6">What We Do</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        We build modern single-page resumes, portfolios, and business websites optimized for sharing and strong first impressions — deployed instantly with no hosting fees. We also build custom web apps for small businesses.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AutoAwesomeIcon color="primary" />
                        <Typography variant="h6">Why We Exist</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        Professional online presence should be affordable and simple, so more people can stand out without paying for complex platforms or ongoing maintenance costs.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PublicIcon color="primary" />
                        <Typography variant="h6">Our Vision</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        To make professional online presence accessible to everyone through affordable, high-quality SPAs that require no hosting fees, no maintenance costs, and no technical knowledge.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Card sx={{ bgcolor: 'action.hover' }}>
              <CardContent>
                <Stack spacing={1.3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <RocketLaunchIcon color="primary" />
                    <Typography variant="h6">Our Approach</Typography>
                  </Stack>
                  <Grid container spacing={1}>
                    {approachItems.map((item) => (
                      <Grid item xs={12} sm={6} key={item}>
                        <Stack direction="row" spacing={0.9} alignItems="flex-start">
                          <CheckCircleOutlineIcon sx={{ color: 'primary.main', mt: 0.15, fontSize: 18, flexShrink: 0 }} />
                          <Typography color="text.secondary" variant="body2">{item}</Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </CardContent>
            </Card>

            <Stack direction="row" justifyContent="flex-end">
              <Button component={RouterLink} to="/about" variant="outlined" endIcon={<ArrowForwardIcon />}>
                Full About Page
              </Button>
            </Stack>
          </Stack>
        </AnimatedSection>
      </Box>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <Box id="contact" component="section" aria-labelledby="home-contact-title" sx={{ mt: { xs: 10, md: 14 } }}>
        <AnimatedSection delay={0.05}>
          <Stack spacing={4}>
            <Stack spacing={1.2}>
              <Typography id="home-contact-title" variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
                Let&apos;s Build Your Next Digital Product
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
                Tell us what you are trying to launch. We usually respond within one business day.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 14px 32px rgba(0,0,0,0.35)'
                        : '0 12px 28px rgba(15,23,42,0.10)',
                  }}
                >
                  <Box
                    component="iframe"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeZv_icELxEe9nB4n6NU4JeAT0R1eW9XfvO2eXYwFCC16sIZA/viewform?embedded=true"
                    title="Contact Form"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    loading="lazy"
                    sx={{
                      width: '100%',
                      minHeight: { xs: 1120, sm: 1040, md: 992 },
                      border: 0,
                      display: 'block',
                      backgroundColor: 'background.default',
                    }}
                  >
                    Loading…
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={2.5}>
                  <Card>
                    <CardContent>
                      <Stack spacing={1.4}>
                        <Typography variant="h6">Contact Details</Typography>
                        <Divider />
                        <Stack direction="row" spacing={1} alignItems="center">
                          <EmailOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                          <Typography color="text.secondary" variant="body2">{business.email}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocationOnOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                          <Typography color="text.secondary" variant="body2">{business.location}</Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Stack spacing={1.4}>
                        <Typography variant="h6">Connect With Us</Typography>
                        <Typography color="text.secondary" variant="body2">
                          Follow us on social media for updates and quick project inquiries.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          {socialItems.map(({ label, href, Icon }) => (
                            <IconButton
                              key={label}
                              component="a"
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={label}
                              sx={{
                                color: 'text.secondary',
                                transition: 'color 200ms ease, transform 200ms ease',
                                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                              }}
                            >
                              <Icon />
                            </IconButton>
                          ))}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>

                  <Button component={RouterLink} to="/contact" variant="outlined" endIcon={<ArrowForwardIcon />} fullWidth>
                    Full Contact Page
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default HomePage
