import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import EmailIcon from '@mui/icons-material/Email'
import SchoolIcon from '@mui/icons-material/School'
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useThemeMode } from '../../styles/ThemeContext'

// SPA Resume Template - Modern, clean layout with smooth scroll navigation
function SpaResumeTemplate({ data }) {
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
      {/* Navigation Sidebar */}
      <Box
        component={motion.div}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          position: 'fixed',
          left: 0,
          top: 70,
          height: 'calc(100vh - 70px)',
          width: { xs: 0, md: 220 },
          background: mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          p: 3,
          overflowY: 'auto',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          zIndex: 99,
          borderRight: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        }}
      >
        <Stack spacing={1}>
          {['about', 'skills', 'experience', 'projects', 'contact'].map((item, idx) => (
            <motion.div key={item} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }}>
              <Button
                onClick={() => scrollToSection(item)}
                fullWidth
                sx={{
                  color: getTextColor(),
                  justifyContent: 'flex-start',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  '&:hover': {
                    background: getOnHoverBackground(),
                    pl: 2,
                  },
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
      <Box sx={{ ml: { xs: 0, md: 220 }, minHeight: '100vh', pt: 70 }}>
        {/* Hero Section */}
        <Box
          id="about"
          component={motion.section}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            minHeight: '80vh',
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
                  {data.summary}
                </Typography>
              </motion.div>
            </Stack>
          </Container>
        </Box>

        {/* Section Divider */}
        <Box sx={{ height: 1, background: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        {/* Skills Section */}
        <Box
          id="skills"
          component={motion.section}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          sx={{
            minHeight: '70vh',
            p: { xs: 2, md: 4 },
            display: 'grid',
            placeItems: 'center',
            background: mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SchoolIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Core Skills
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {data.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Box
                      sx={{
                        p: 2.5,
                        background: getCardBackground(),
                        borderRadius: 2.5,
                        backdropFilter: 'blur(10px)',
                        transition: 'all 300ms ease',
                        '&:hover': {
                          background: getOnHoverBackground(),
                          transform: 'translateY(-4px)',
                        },
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                      }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>{skill}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Section Divider */}
        <Box sx={{ height: 1, background: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        {/* Experience Section */}
        <Box
          id="experience"
          component={motion.section}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          sx={{
            minHeight: '70vh',
            p: { xs: 2, md: 4 },
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SchoolIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Experience
                </Typography>
              </Box>
              <Stack spacing={2.5}>
                {data.experience.map((exp, idx) => (
                  <motion.div
                    key={`${exp.company}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        background: getCardBackground(),
                        borderRadius: 2.5,
                        backdropFilter: 'blur(10px)',
                        transition: 'all 300ms ease',
                        '&:hover': {
                          background: getOnHoverBackground(),
                          transform: 'translateX(8px)',
                        },
                        borderLeft: `3px solid ${theme.palette.secondary.main}`,
                      }}
                    >
                      <Stack spacing={1}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.8, whiteSpace: 'nowrap', ml: 2 }}>
                            {exp.period}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {exp.company}
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

        {/* Projects/Achievements Section */}
        <Box
          id="projects"
          component={motion.section}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          sx={{
            minHeight: '70vh',
            p: { xs: 2, md: 4 },
            display: 'grid',
            placeItems: 'center',
            background: mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Achievements
                </Typography>
              </Box>
              <Stack spacing={2}>
                {data.achievements.map((achievement, idx) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: 24, opacity: 0.7, mt: 0.5, flexShrink: 0, color: theme.palette.primary.main }}
                      />
                      <Typography sx={{ opacity: 0.9, pt: 0.25 }}>{achievement}</Typography>
                    </Box>
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
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={4} alignItems="center" textAlign="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                <EmailIcon sx={{ fontSize: 32, opacity: 0.9 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Get in Touch
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 500 }}>
                Interested in working together? Let&apos;s discuss your next project and how I can help achieve your goals.
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
                Start a Conversation
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default SpaResumeTemplate
