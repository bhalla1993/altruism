import CodeIcon from '@mui/icons-material/Code'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import { Box, Button, Chip, Container, Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useThemeMode } from '../../styles/ThemeContext'

// SPA Portfolio Template - Project showcase with smooth interactions
function SpaPortfolioTemplate({ data }) {
  const { mode } = useThemeMode()
  const theme = useTheme()

  const getBackgroundGradient = () => {
    if (mode === 'dark') return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    return 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)'
  }

  const getTextColor = () => (mode === 'dark' ? 'white' : '#1a1a1a')
  const getCardBackground = () => (mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)')
  const getOnHoverBackground = () => (mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: getBackgroundGradient(),
        color: getTextColor(),
        transition: 'background 500ms ease',
      }}
    >
      {/* Navigation Topbar */}
      <Box
        component={motion.div}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          position: 'fixed',
          top: 70,
          left: 0,
          right: 0,
          height: 80,
          background: mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99,
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {['about', 'projects', 'stack', 'contact'].map((item, idx) => (
            <motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
              <Button
                onClick={() => scrollToSection(item)}
                sx={{
                  color: getTextColor(),
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  '&:hover': { background: getOnHoverBackground() },
                  transition: 'all 200ms ease',
                }}
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ pt: 150 }}>
        {/* Hero Section */}
        <Box
          id="about"
          component={motion.section}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            minHeight: '70vh',
            display: 'grid',
            placeItems: 'center',
            p: { xs: 2, md: 4 },
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={3} alignItems="center" textAlign="center">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -1 }}>
                  {data.name}
                </Typography>
              </motion.div>
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 600 }}>
                  {data.role}
                </Typography>
              </motion.div>
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 600 }}>
                  {data.intro}
                </Typography>
              </motion.div>
            </Stack>
          </Container>
        </Box>

        {/* Section Divider */}
        <Box sx={{ height: 1, background: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        {/* Projects Section */}
        <Box
          id="projects"
          component={motion.section}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          sx={{
            minHeight: '100vh',
            p: { xs: 2, md: 4 },
            display: 'grid',
            placeItems: 'center',
            background: mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CodeIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Featured Projects
                </Typography>
              </Box>
              <Stack spacing={3}>
                {data.projects.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.12 }}
                  >
                    <Box
                      sx={{
                        p: 3.5,
                        background: getCardBackground(),
                        borderRadius: 2.5,
                        backdropFilter: 'blur(10px)',
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        transition: 'all 300ms ease',
                        '&:hover': {
                          background: getOnHoverBackground(),
                          transform: 'translateX(8px)',
                        },
                      }}
                    >
                      <Stack spacing={2}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {project.title}
                        </Typography>
                        <Typography sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                          {project.impact}
                        </Typography>
                      </Stack>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Section Divider */}
        <Box sx={{ height: 1, background: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        {/* Tech Stack Section */}
        <Box
          id="stack"
          component={motion.section}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          sx={{
            minHeight: '60vh',
            p: { xs: 2, md: 4 },
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LanguageIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Technology Stack
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                useFlexGap
                sx={{
                  justifyContent: 'flex-start',
                  py: 2,
                }}
              >
                {data.stack.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <Chip
                      label={tech}
                      sx={{
                        background: getCardBackground(),
                        color: getTextColor(),
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        p: 2.5,
                        transition: 'all 200ms ease',
                        '&:hover': {
                          background: getOnHoverBackground(),
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Section Divider */}
        <Box sx={{ height: 1, background: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        {/* Contact Section */}
        <Box
          id="contact"
          component={motion.section}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          sx={{
            minHeight: '60vh',
            p: { xs: 2, md: 4 },
            display: 'grid',
            placeItems: 'center',
            background: mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={4} alignItems="center" textAlign="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                <EmailIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Let&apos;s Collaborate
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 500, lineHeight: 1.8 }}>
                Have a project in mind? Let&apos;s create something amazing together and bring your vision to life.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  color: 'white',
                }}
              >
                Start a Project
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default SpaPortfolioTemplate
