import { createTheme } from '@mui/material/styles'

// Theme factory accepts 'light' or 'dark' mode
export function createAppTheme(mode = 'dark') {
  const paletteByMode = {
    dark: {
      mode: 'dark',
      primary: { main: '#2dd4bf' },
      secondary: { main: '#0ea5e9' },
      background: {
        default: '#0a0f1c',
        paper: '#111a2b',
      },
      text: {
        primary: '#e6edf8',
        secondary: '#9fb1cc',
      },
      divider: 'rgba(159, 177, 204, 0.2)',
    },
    light: {
      mode: 'light',
      primary: { main: '#0891b2' },
      secondary: { main: '#0369a1' },
      background: {
        default: '#f8fafc',
        paper: '#ffffff',
      },
      text: {
        primary: '#0f172a',
        secondary: '#475569',
      },
      divider: 'rgba(15, 23, 42, 0.12)',
    },
  }

  const palette = paletteByMode[mode] || paletteByMode.dark

  return createTheme({
    palette,
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: 'Sora, system-ui, sans-serif',
      h1: {
        fontFamily: 'Space Grotesk, Sora, system-ui, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h2: {
        fontFamily: 'Space Grotesk, Sora, system-ui, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: 'Space Grotesk, Sora, system-ui, sans-serif',
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            border: '1px solid',
            borderColor: palette.divider,
            backgroundImage:
              mode === 'dark'
                ? 'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
                : 'linear-gradient(160deg, rgba(255,255,255,1), rgba(248,250,252,0.8))',
            backdropFilter: 'blur(6px)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 20,
          },
        },
      },
    },
  })
}

// Default dark theme for backward compatibility
export const theme = createAppTheme('dark')
