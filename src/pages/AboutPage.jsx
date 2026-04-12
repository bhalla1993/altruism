import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import BoltIcon from '@mui/icons-material/Bolt'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PublicIcon from '@mui/icons-material/Public'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { Box, Button, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { business } from '../utils/siteData'

const approachItems = [
  'We deploy SPAs on GitHub Pages for free.',
  'We offer optional custom domains at an additional cost.',
  'We offer full code ownership for clients who want complete independence.',
  'We provide optional form integrations (Google Forms or other providers).',
]

function AnimatedBlock({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}

function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn why Altruism exists and how we build affordable, high-quality SPAs for resumes, portfolios, and professional online presence."
        path="/about"
      />

      <Box component="section" aria-labelledby="about-page-title">
        <Stack spacing={3.2}>
          <AnimatedBlock>
            <Stack spacing={1.4}>
              <Typography id="about-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                About {business.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {business.tagline}
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 900 }}>
                We help professionals build modern, link-based online presence with single-page experiences that are fast, polished, and practical.
              </Typography>
            </Stack>
          </AnimatedBlock>

          <Grid container spacing={2.2}>
            <Grid item xs={12} md={6}>
              <AnimatedBlock delay={0.05}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.15}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <HandshakeOutlinedIcon color="primary" />
                        <Typography variant="h5">Who We Are</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        We are a focused digital studio helping students, job seekers, and freelancers launch professional resume and portfolio SPAs without technical overhead.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </AnimatedBlock>
            </Grid>

            <Grid item xs={12}>
              <AnimatedBlock delay={0.1}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ pb: '20px !important' }}>
                    <Stack spacing={1.6}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <BoltIcon color="primary" />
                        <Typography variant="h5">What We Do</Typography>
                      </Stack>
                      <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1.2} sx={{ pr: { md: 3.5 }, pb: { xs: 2.5, md: 0 } }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <PersonOutlineOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 0.4 }}>
                                Personal SPAs &amp; Portfolios
                              </Typography>
                            </Stack>
                            <Typography color="text.secondary">
                              We build modern, single-page resumes, portfolios, and personal websites optimized for sharing, clarity, and strong first impressions — deployed instantly with no hosting fees.
                            </Typography>
                          </Stack>
                        </Grid>

                        <Grid item xs={12} md="auto" sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ display: { xs: 'none', md: 'block' }, mx: 0, opacity: 0.5 }}
                          />
                          <Divider sx={{ display: { xs: 'block', md: 'none' }, mb: 2.5, opacity: 0.5 }} />
                        </Grid>

                        <Grid item xs={12} md>
                          <Stack spacing={1.2} sx={{ pl: { md: 3.5 } }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <LaptopMacOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 0.4 }}>
                                Custom Web Applications
                              </Typography>
                            </Stack>
                            <Typography color="text.secondary">
                              We also build custom web apps such as CRM systems, dashboards, and internal tools for small businesses — tailored to your needs and scoped to your budget.
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </CardContent>
                </Card>
              </AnimatedBlock>
            </Grid>

            <Grid item xs={12} md={6}>
              <AnimatedBlock delay={0.15}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.15}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AutoAwesomeIcon color="primary" />
                        <Typography variant="h5">Why We Exist</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        We believe professional online presence should be affordable and simple, so more people can stand out without paying for complex platforms or ongoing maintenance.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </AnimatedBlock>
            </Grid>

            <Grid item xs={12} md={6}>
              <AnimatedBlock delay={0.2}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.15}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PublicIcon color="primary" />
                        <Typography variant="h5">Our Vision</Typography>
                      </Stack>
                      <Typography color="text.secondary">
                        To make professional online presence accessible to everyone by offering affordable, high-quality Single Page Applications (SPAs) that require no hosting fees, no maintenance costs, and no technical knowledge.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </AnimatedBlock>
            </Grid>
          </Grid>

          <AnimatedBlock delay={0.25}>
            <Card>
              <CardContent>
                <Stack spacing={1.3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <RocketLaunchIcon color="primary" />
                    <Typography variant="h5">Our Approach</Typography>
                  </Stack>
                  <Stack spacing={0.8}>
                    {approachItems.map((item) => (
                      <Stack key={item} direction="row" spacing={0.9} alignItems="flex-start">
                        <CheckCircleOutlineIcon sx={{ color: 'primary.main', mt: 0.1, fontSize: 18 }} />
                        <Typography color="text.secondary">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </AnimatedBlock>

          <AnimatedBlock delay={0.3}>
            <Card
              sx={{
                border: '1px solid',
                borderColor: 'primary.main',
                background: (theme) => `linear-gradient(120deg, ${theme.palette.primary.main}16, transparent)`,
              }}
            >
              <CardContent>
                <Stack spacing={1.1} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
                  <Typography variant="h4" sx={{ fontSize: { xs: '1.4rem', md: '1.9rem' } }}>
                    Start Your Online Resume Today
                  </Typography>
                  <Typography color="text.secondary" sx={{ maxWidth: 780 }}>
                    Choose a ready template or request a customized SPA and launch your professional profile with confidence.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.1}>
                    <Button component={RouterLink} to="/templates" variant="contained">
                      View Templates
                    </Button>
                    <Button component={RouterLink} to="/contact" variant="outlined">
                      Have a project in mind? Let’s talk.
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </AnimatedBlock>
        </Stack>
      </Box>
    </>
  )
}

export default AboutPage
