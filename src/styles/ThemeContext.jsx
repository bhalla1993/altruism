import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    // Try to retrieve from localStorage, fallback to 'dark'
    try {
      const stored = localStorage.getItem('theme-mode')
      return stored || 'dark'
    } catch {
      return 'dark'
    }
  })

  // Persist to localStorage whenever mode changes
  useEffect(() => {
    try {
      localStorage.setItem('theme-mode', mode)
    } catch {
      // Silently fail if localStorage is not available
    }
  }, [mode])

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider')
  }
  return context
}
