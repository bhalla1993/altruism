import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link as RouterLink, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { business, navItems } from '../../utils/siteData'
import { useThemeMode } from '../../styles/ThemeContext'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#2dd4bf' : 'inherit',
  textDecoration: 'none',
  fontWeight: isActive ? 700 : 500,
})

const brandContainer = {
  opacity: 1,
  transform: 'translateY(0)',
}

function AnimatedBrand({ reduceMotion }) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  // Professional theme-aware palette: text colour ↔ brand primary, no neon
  const shimmerFrom = isDark ? '#e6edf8' : '#0f172a'
  const shimmerMid  = theme.palette.primary.main
  const gradient = `linear-gradient(90deg, ${shimmerFrom} 0%, ${shimmerMid} 45%, ${shimmerFrom} 100%)`
  const shellBackground = isDark ? 'rgba(10, 15, 28, 0.58)' : 'rgba(255, 255, 255, 0.72)'
  const shellBorder = isDark ? 'rgba(159, 177, 204, 0.2)' : 'rgba(15, 23, 42, 0.1)'
  const shellShadow = isDark
    ? '0 10px 24px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.04)'
    : '0 8px 20px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'

  const gradientStyle = {
    backgroundImage: gradient,
    backgroundSize: '200% auto',
    backgroundPosition: '0% center',
    backgroundRepeat: 'repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: shimmerMid,
    display: 'inline-block',
    fontFamily: 'Space Grotesk, Sora, sans-serif',
    fontWeight: 800,
    fontSize: '1.22rem',
    letterSpacing: '-0.01em',
    lineHeight: 1.1,
    textShadow: isDark ? '0 1px 12px rgba(45, 212, 191, 0.16)' : '0 1px 10px rgba(8, 145, 178, 0.14)',
    whiteSpace: 'nowrap',
  }

  return (
    <Box
      component={RouterLink}
      to="/"
      sx={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 999,
        padding: '0.42rem 0.8rem',
        backgroundColor: shellBackground,
        border: '1px solid',
        borderColor: shellBorder,
        boxShadow: shellShadow,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        '@keyframes brandShimmer': {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        '& .brand-text': {
          animation: reduceMotion ? 'none' : 'brandShimmer 7s ease-in-out infinite',
        },
        '& .brand-shell': reduceMotion
          ? undefined
          : {
              opacity: 0,
              transform: 'translateY(-10px)',
              animation: 'brandReveal 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
        '@keyframes brandReveal': {
          '100%': brandContainer,
        },
        transition: 'opacity 200ms ease, box-shadow 200ms ease, transform 200ms ease',
        '&:hover': {
          opacity: 0.92,
          transform: 'translateY(-1px)',
          boxShadow: isDark
            ? '0 14px 30px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 12px 24px rgba(15, 23, 42, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        },
      }}
    >
      <Box component="span" className="brand-shell brand-text" sx={gradientStyle}>
        {business.name}
      </Box>
    </Box>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { mode, toggleTheme } = useThemeMode()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setOpen(false)

    // Defensive cleanup for mobile browsers when modal transitions race route changes.
    document.body.classList.remove('MuiModal-open')
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('padding-right')
    document.body.style.removeProperty('touch-action')
  }, [location.pathname])

  const handleMobileNavigate = (path) => {
    setOpen(false)

    // Wait one frame so the drawer can start closing before navigating.
    requestAnimationFrame(() => {
      navigate(path)
    })
  }

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(20, 32, 54, 0.92)'
            : 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(159, 177, 204, 0.22)'
            : 'rgba(15, 23, 42, 0.1)',
        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? '0 1px 32px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255,255,255,0.04) inset'
            : '0 1px 18px rgba(15, 23, 42, 0.07)',
        transition: 'background 300ms ease, box-shadow 300ms ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          <AnimatedBrand reduceMotion={reduceMotion} />

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} style={navLinkStyles}>
                {item.label}
              </NavLink>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }} alignItems="center">
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              sx={{
                color: 'text.primary',
                transition: 'transform 300ms ease, color 300ms ease',
                '&:hover': { transform: 'rotate(20deg)' },
              }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Button component={RouterLink} to="/contact" variant="contained">
              Start Project
            </Button>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'inline-flex', md: 'none' } }} alignItems="center">
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              sx={{
                color: 'text.primary',
                transition: 'transform 300ms ease, color 300ms ease',
                '&:hover': { transform: 'rotate(20deg)' },
              }}
            >
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
            <IconButton onClick={() => setOpen(true)} aria-label="Open navigation menu">
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: false, disableScrollLock: true }}
      >
        <Box role="navigation" sx={{ width: 260, p: 3 }}>
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItemButton key={item.path} onClick={() => handleMobileNavigate(item.path)} sx={{ borderRadius: 1.5 }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: location.pathname === item.path ? '#2dd4bf' : 'text.primary',
                      fontWeight: location.pathname === item.path ? 700 : 500,
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Header
