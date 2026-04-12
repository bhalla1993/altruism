import { Box } from '@mui/material'
import AppRouter from './routes/AppRouter'
import { useThemeMode } from './styles/ThemeContext'

function App() {
  const { mode } = useThemeMode()

  const getBackgroundStyles = () => {
    if (mode === 'dark') {
      return {
        background: 'linear-gradient(180deg, #0a0f1c 0%, #0a1020 55%, #111a2b 100%)',
        backgroundImage: `
          radial-gradient(circle at 12% 10%, rgba(45, 212, 191, 0.12), transparent 38%),
          radial-gradient(circle at 90% 18%, rgba(14, 165, 233, 0.12), transparent 35%),
          linear-gradient(180deg, #0a0f1c 0%, #0a1020 55%, #111a2b 100%)
        `,
      }
    }
    // Light theme background
    return {
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      backgroundImage: `
        radial-gradient(circle at 12% 10%, rgba(8, 145, 178, 0.08), transparent 38%),
        radial-gradient(circle at 90% 18%, rgba(3, 105, 161, 0.08), transparent 35%),
        linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)
      `,
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        ...getBackgroundStyles(),
        transition: 'background 500ms ease',
      }}
    >
      <AppRouter />
    </Box>
  )
}

export default App
