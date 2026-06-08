import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { business } from '../../utils/siteData'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Templates', path: '/templates' },
  { label: 'External Templates', path: '/templates#external-templates-title' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const techBadges = ['React', 'JavaScript', 'Vite']

function Footer() {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55 }}
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0c1526 0%, #080c1c 100%)'
            : 'linear-gradient(180deg, #e8eef8 0%, #dce6f2 100%)',
        borderTop: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(159, 177, 204, 0.35)'
            : 'rgba(15, 23, 42, 0.18)',
        mt: 10,
        pt: { xs: 7, md: 9 },
        pb: { xs: 5, md: 6 },
        transition: 'background 500ms ease',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3.5}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between">
            <Stack spacing={1.2} sx={{ maxWidth: 460 }}>
              <Typography variant="h6" sx={{ fontFamily: 'Space Grotesk, Sora, sans-serif' }}>
                {business.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                {business.tagline}
              </Typography>
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1.1, lineHeight: 1.5 }}
              >
                Made in Ontario, Canada
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We build websites, resume portfolios, and software systems that help professionals and small businesses ship confidently.
              </Typography>
              <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                {techBadges.map((badge) => (
                  <Chip key={badge} label={badge} size="small" variant="outlined" />
                ))}
              </Stack>
            </Stack>

            <Stack spacing={1.2}>
              <Typography variant="subtitle1">Quick Links</Typography>
              <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap alignItems="center">
                {quickLinks.map((item, index) => (
                  <Box key={item.path} sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8 }}>
                    <Link
                      component={RouterLink}
                      to={item.path}
                      underline="none"
                      color="text.secondary"
                      sx={{ '&:hover': { color: 'primary.main' }, transition: 'color 180ms ease' }}
                    >
                      {item.label}
                    </Link>
                    {index < quickLinks.length - 1 ? (
                      <Typography component="span" color="text.disabled" sx={{ lineHeight: 1 }}>
                        •
                      </Typography>
                    ) : null}
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={1.2}>
              <Typography variant="subtitle1">Connect</Typography>
              <Stack direction="row" spacing={0.8}>
                <IconButton
                  component={Link}
                  href={business.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  aria-label="Facebook"
                  sx={{ '&:hover': { color: 'primary.main', transform: 'translateY(-1px)' }, transition: 'all 180ms ease' }}
                >
                  <FacebookRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component={Link}
                  href={business.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  aria-label="Instagram"
                  sx={{ '&:hover': { color: 'primary.main', transform: 'translateY(-1px)' }, transition: 'all 180ms ease' }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component={Link}
                  href={business.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  aria-label="LinkedIn"
                  sx={{ '&:hover': { color: 'primary.main', transform: 'translateY(-1px)' }, transition: 'all 180ms ease' }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component={Link}
                  href={`mailto:${business.email}`}
                  color="inherit"
                  aria-label="Email"
                  sx={{ '&:hover': { color: 'primary.main', transform: 'translateY(-1px)' }, transition: 'all 180ms ease' }}
                >
                  <EmailOutlinedIcon fontSize="small" />
                </IconButton>
              </Stack>
              <Stack direction="row" spacing={0.8} alignItems="center">
                <EmailOutlinedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">{business.email}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.8} alignItems="center">
                <PlaceOutlinedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">{business.location}</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ opacity: 0.45 }} />

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            sx={{ pt: 0.4 }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.82 }}>
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ opacity: 0.82, maxWidth: { xs: '100%', md: 420 }, textWrap: 'balance' }}
            >
              Serving clients across Canada, specializing in the Greater Toronto Area (GTA).
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
