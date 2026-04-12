import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import {
  Box,
  Chip,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { useThemeMode } from '../../styles/ThemeContext'
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
  const { mode } = useThemeMode()

  const getFooterBackground = () => {
    if (mode === 'dark') {
      return 'linear-gradient(180deg, rgba(9,14,26,0.08) 0%, rgba(17,26,43,0.65) 40%, rgba(14,20,34,0.95) 100%)'
    }
    // Light theme: subtle gradient from light to slightly lighter slate
    return 'linear-gradient(180deg, rgba(248,250,252,0.5) 0%, rgba(226,232,240,0.4) 40%, rgba(203,213,225,0.35) 100%)'
  }

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55 }}
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 10,
        py: 5,
        background: getFooterBackground(),
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
              <Stack direction={{ xs: 'row', md: 'column' }} spacing={1.2} flexWrap="wrap" useFlexGap>
                {quickLinks.map((item) => (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    underline="none"
                    color="text.secondary"
                    sx={{ '&:hover': { color: 'primary.main' }, transition: 'color 180ms ease' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={1.2}>
              <Typography variant="subtitle1">Connect</Typography>
              <Stack direction="row" spacing={0.8}>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com"
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
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  color="inherit"
                  aria-label="GitHub"
                  sx={{ '&:hover': { color: 'primary.main', transform: 'translateY(-1px)' }, transition: 'all 180ms ease' }}
                >
                  <GitHubIcon fontSize="small" />
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

          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', width: '100%' }}>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
