import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import CodeIcon from '@mui/icons-material/Code'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import {
  Box,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { spaResume01SampleData } from './sampleData'

const navItems = ['summary', 'skills', 'experience', 'education', 'projects', 'contact']

const iconMap = {
  code: CodeIcon,
  brush: BrushOutlinedIcon,
  hub: HubOutlinedIcon,
  verified: VerifiedOutlinedIcon,
  accessible: AccessibilityNewIcon,
}

function ResumeSection({ id, title, icon: IconComponent, children }) {
  return (
    <motion.section
      id={`spa-resume-01-${id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
    >
      <Stack spacing={1.4}>
        <Stack direction="row" spacing={1.1} alignItems="center">
          <IconComponent sx={{ fontSize: 19, color: '#0f4c81' }} />
          <Typography
            sx={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '1.15rem',
              letterSpacing: 0.3,
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            {title}
          </Typography>
        </Stack>
        <Divider sx={{ borderColor: '#dbe2ea' }} />
        {children}
      </Stack>
    </motion.section>
  )
}

function SpaResumeTemplate01({ data = spaResume01SampleData }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`spa-resume-01-${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#eef2f7',
        color: '#0f172a',
        fontFamily: 'Manrope, Segoe UI, Arial, sans-serif',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 1.5,
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
            border: '1px solid #dbe2ea',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              px: { xs: 2.2, md: 4 },
              pt: { xs: 2.2, md: 3 },
              pb: 2,
              borderBottom: '1px solid #e5eaf1',
              background: 'linear-gradient(180deg, #f8fafc, #ffffff)',
            }}
          >
            <Stack spacing={1}>
              <Typography
                sx={{
                  fontFamily: 'Georgia, Times New Roman, serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.9rem', md: '2.4rem' },
                  lineHeight: 1.1,
                  color: '#111827',
                }}
              >
                {data.name}
              </Typography>
              <Typography sx={{ color: '#0f4c81', fontWeight: 600, fontSize: { xs: '0.98rem', md: '1.05rem' } }}>
                {data.title}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.7, sm: 1.5 }} flexWrap="wrap" useFlexGap>
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <EmailOutlinedIcon sx={{ fontSize: 16, color: '#334155' }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#475569' }}>{data.contact.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <PlaceOutlinedIcon sx={{ fontSize: 16, color: '#334155' }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#475569' }}>{data.contact.location}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.7} alignItems="center">
                  <LinkedInIcon sx={{ fontSize: 16, color: '#334155' }} />
                  <Typography sx={{ fontSize: '0.88rem', color: '#475569' }}>{data.contact.linkedin}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              px: { xs: 1.2, md: 2 },
              py: 1,
              borderBottom: '1px solid #e5eaf1',
              backgroundColor: '#fafcfe',
              position: 'sticky',
              top: { xs: 80, md: 90 },
              zIndex: 5,
            }}
          >
            <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap justifyContent="center">
              {navItems.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  onClick={() => scrollToSection(item)}
                  sx={{
                    borderColor: '#cbd5e1',
                    color: '#334155',
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    '&:hover': { borderColor: '#0f4c81', color: '#0f4c81' },
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Stack spacing={3.2} sx={{ p: { xs: 2.2, md: 4 } }}>
            <ResumeSection id="summary" title="Profile" icon={VerifiedOutlinedIcon}>
              <Typography sx={{ color: '#334155', lineHeight: 1.8 }}>{data.about}</Typography>
            </ResumeSection>

            <ResumeSection id="skills" title="Skills" icon={CodeIcon}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 1.2,
                }}
              >
                {data.skills.map((skill) => {
                  const SkillIcon = iconMap[skill.icon] || CodeIcon
                  return (
                    <Stack
                      key={skill.label}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        py: 1,
                        px: 1.2,
                        border: '1px solid #dbe2ea',
                        borderRadius: 1,
                        backgroundColor: '#f8fafc',
                      }}
                    >
                      <SkillIcon sx={{ fontSize: 17, color: '#0f4c81' }} />
                      <Typography sx={{ fontSize: '0.93rem', color: '#334155' }}>{skill.label}</Typography>
                    </Stack>
                  )
                })}
              </Box>
            </ResumeSection>

            <ResumeSection id="experience" title="Experience" icon={WorkOutlineIcon}>
              <Stack spacing={2.2}>
                {data.experience.map((exp) => (
                  <Box key={`${exp.company}-${exp.role}`}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={0.8}>
                      <Typography sx={{ fontWeight: 700, color: '#111827' }}>{exp.role} - {exp.company}</Typography>
                      <Typography sx={{ fontSize: '0.88rem', color: '#64748b' }}>{exp.period}</Typography>
                    </Stack>
                    <Stack spacing={0.6} sx={{ mt: 1.1 }}>
                      {exp.points.map((point) => (
                        <Typography key={point} sx={{ color: '#334155', fontSize: '0.93rem', lineHeight: 1.6 }}>
                          - {point}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </ResumeSection>

            <ResumeSection id="education" title="Education" icon={SchoolOutlinedIcon}>
              <Stack spacing={1.5}>
                {data.education.map((edu) => (
                  <Box key={`${edu.school}-${edu.program}`}>
                    <Typography sx={{ fontWeight: 700, color: '#111827' }}>{edu.program}</Typography>
                    <Typography sx={{ color: '#334155' }}>{edu.school} | {edu.period}</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.93rem', mt: 0.5 }}>{edu.notes}</Typography>
                  </Box>
                ))}
              </Stack>
            </ResumeSection>

            <ResumeSection id="projects" title="Projects" icon={HubOutlinedIcon}>
              <Stack spacing={1.5}>
                {data.projects.map((project) => (
                  <Box key={project.name}>
                    <Typography sx={{ fontWeight: 700, color: '#111827' }}>{project.name}</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.93rem', mt: 0.4 }}>{project.summary}</Typography>
                    <Stack direction="row" spacing={0.65} flexWrap="wrap" useFlexGap sx={{ mt: 0.9 }}>
                      {project.stack.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          sx={{
                            backgroundColor: '#f1f5f9',
                            color: '#334155',
                            borderRadius: 1,
                          }}
                        />
                      ))}
                    </Stack>
                    <Link href={project.link} underline="hover" sx={{ mt: 0.8, display: 'inline-block', color: '#0f4c81' }}>
                      Project link
                    </Link>
                  </Box>
                ))}
              </Stack>
            </ResumeSection>

            <ResumeSection id="contact" title="Contact" icon={EmailOutlinedIcon}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.8}>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <EmailOutlinedIcon sx={{ fontSize: 17, color: '#0f4c81' }} />
                  <Typography sx={{ fontSize: '0.93rem', color: '#334155' }}>{data.contact.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <PlaceOutlinedIcon sx={{ fontSize: 17, color: '#0f4c81' }} />
                  <Typography sx={{ fontSize: '0.93rem', color: '#334155' }}>{data.contact.location}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <LinkedInIcon sx={{ fontSize: 17, color: '#0f4c81' }} />
                  <Typography sx={{ fontSize: '0.93rem', color: '#334155' }}>{data.contact.linkedin}</Typography>
                </Stack>
              </Stack>
            </ResumeSection>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default SpaResumeTemplate01
