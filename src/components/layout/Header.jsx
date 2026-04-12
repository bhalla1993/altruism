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
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom'
import { business, navItems } from '../../utils/siteData'
import { useThemeMode } from '../../styles/ThemeContext'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#2dd4bf' : 'inherit',
  textDecoration: 'none',
  fontWeight: isActive ? 700 : 500,
})

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { mode, toggleTheme } = useThemeMode()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{ textDecoration: 'none', color: 'text.primary', fontFamily: 'Space Grotesk, Sora, sans-serif', fontWeight: 700 }}
          >
            {business.name}
          </Typography>

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

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} ModalProps={{ keepMounted: true }}>
        <Box role="navigation" sx={{ width: 260, p: 3 }}>
          <Stack spacing={2}>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} style={navLinkStyles} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Header
