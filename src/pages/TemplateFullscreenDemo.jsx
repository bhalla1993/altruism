import ArrowBackIcon from '@mui/icons-material/ArrowBack'
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
import { useNavigate, useParams } from 'react-router-dom'
import { getLazyTemplateDemo } from '../templates/templateRegistry'
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
  const navigate = useNavigate()
  const template = getTemplateById(templateId)
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

  const handleBackToTemplates = () => {
    // Behave like "close preview" when opened in a separate tab/window.
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    window.close()

    // Fallback for browsers that block closing tabs not opened via script.
    setTimeout(() => {
      navigate('/templates')
    }, 120)
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
            onClick={handleBackToTemplates}
            startIcon={<ArrowBackIcon />}
            sx={{
              background: 'rgba(255,255,255,0.9)',
              color: '#0f172a',
              border: `1px solid ${theme.palette.divider}`,
              '&:hover': { background: 'rgba(255,255,255,1)' },
            }}
          >
            Back to Templates
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
            background: 'rgba(255,255,255,0.95)',
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: 4,
            backdropFilter: 'blur(8px)',
          }}
        >
          <IconButton size="small" onClick={handleBackToTemplates} aria-label="Back to templates">
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default TemplateFullscreenDemo
