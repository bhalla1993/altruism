import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { ThemeProvider as CustomThemeProvider, useThemeMode } from './styles/ThemeContext'
import { createAppTheme } from './styles/theme'

// Inner component for theme provider
function ThemedApp() {
  const { mode } = useThemeMode()
  const muiTheme = React.useMemo(() => createAppTheme(mode), [mode])

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

// Run locally: npm run dev
// Build for production: npm run build
// Deploy to GitHub Pages: npm run deploy (see README for one-time config)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CustomThemeProvider>
        <ThemedApp />
      </CustomThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
