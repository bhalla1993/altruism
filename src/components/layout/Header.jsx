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
import { useState } from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { business, navItems } from '../../utils/siteData'
import { useThemeMode } from '../../styles/ThemeContext'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#2dd4bf' : 'inherit',
  textDecoration: 'none',
  fontWeight: isActive ? 700 : 500,
})

function Header() {
  const [open, setOpen] = useState(false)
  const { mode, toggleTheme } = useThemeMode()

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider', backdropFilter: 'blur(8px)' }}>
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

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
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
