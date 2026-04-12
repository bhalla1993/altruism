import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DownloadIcon from '@mui/icons-material/Download'
import LightModeIcon from '@mui/icons-material/LightMode'
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getLazyTemplateDemo } from '../templates/templateRegistry'
import { useThemeMode } from '../styles/ThemeContext'
import { getTemplateById } from '../utils/templatesData'

function DemoLoader() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <Stack spacing={1.25} alignItems="center">
        <CircularProgress size={34} />
        <Typography variant="body2" color="text.secondary">
          Loading template demo...
        </Typography>
      </Stack>
    </Box>
  )
}

function FloatingButton({ children, sx, ...props }) {
  return (
    <Button
      component={motion.button}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18 }}
      variant="contained"
      size="small"
      sx={{
        borderRadius: 999,
        textTransform: 'none',
        px: 1.75,
        py: 0.95,
        boxShadow: 4,
        backdropFilter: 'blur(8px)',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

function TemplateFullscreenDemo() {
  const { templateId } = useParams()
  const template = getTemplateById(templateId)
  const { mode, toggleTheme } = useThemeMode()
  const theme = useTheme()
  const isCompactMobile = useMediaQuery('(max-width:420px)')

  const TemplateComponent = useMemo(() => getLazyTemplateDemo(templateId), [templateId])
  const currentData = template?.sampleData

  if (!template || !TemplateComponent) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', p: 2 }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4">Template not found</Typography>
          <Button component="a" href={`${import.meta.env.BASE_URL}templates`} variant="contained">
            Back to Templates
          </Button>
        </Stack>
      </Box>
    )
  }

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {!isCompactMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: { xs: 10, md: 16 },
            left: { xs: 10, md: 16 },
            zIndex: 1200,
            display: 'grid',
            gap: 1,
          }}
        >
          <FloatingButton
            component="a"
            href={`${import.meta.env.BASE_URL}templates`}
            startIcon={<ArrowBackIcon />}
            sx={{
              background: mode === 'dark' ? 'rgba(15,23,42,0.88)' : 'rgba(255,255,255,0.9)',
              color: mode === 'dark' ? '#f8fafc' : '#0f172a',
              border: `1px solid ${theme.palette.divider}`,
              '&:hover': { background: mode === 'dark' ? 'rgba(15,23,42,0.96)' : 'rgba(255,255,255,1)' },
            }}
          >
            Back to Templates
          </FloatingButton>
        </Box>
      )}

      {!isCompactMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: { xs: 10, md: 16 },
            right: { xs: 10, md: 16 },
            zIndex: 1200,
            display: 'grid',
            gap: 1,
            justifyItems: 'end',
          }}
        >
          <FloatingButton
            startIcon={<DownloadIcon />}
            onClick={() => window.alert('Download template will be enabled in a future release.')}
            sx={{
              background: 'primary.main',
              color: 'common.white',
              '&:hover': { background: 'primary.dark' },
            }}
          >
            Download Template
          </FloatingButton>
        </Box>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${templateId}-sample`}
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.35 }}
          transition={{ duration: 0.28 }}
        >
          <Suspense fallback={<DemoLoader />}>
            <TemplateComponent data={currentData} />
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {!isCompactMobile && (
        <Box sx={{ position: 'fixed', right: { xs: 10, md: 16 }, bottom: { xs: 10, md: 16 }, zIndex: 1200 }}>
          <FloatingButton
            onClick={toggleTheme}
            startIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            sx={{
              minWidth: 52,
              px: 1.2,
              background: mode === 'dark' ? 'rgba(15,23,42,0.88)' : 'rgba(255,255,255,0.9)',
              color: mode === 'dark' ? '#f8fafc' : '#0f172a',
              border: `1px solid ${theme.palette.divider}`,
              '&:hover': { background: mode === 'dark' ? 'rgba(15,23,42,0.96)' : 'rgba(255,255,255,1)' },
            }}
          >
            Theme
          </FloatingButton>
        </Box>
      )}

      {isCompactMobile && (
        <Box
          component={motion.div}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          sx={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 12,
            zIndex: 1300,
            px: 0.5,
            py: 0.5,
            borderRadius: 99,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            background: mode === 'dark' ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.95)',
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: 4,
            backdropFilter: 'blur(8px)',
          }}
        >
          <IconButton size="small" component="a" href={`${import.meta.env.BASE_URL}templates`} aria-label="Back to templates">
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => window.alert('Download template will be enabled in a future release.')}
            aria-label="Download template"
          >
            <DownloadIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={toggleTheme} aria-label="Toggle theme">
            {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default TemplateFullscreenDemo
