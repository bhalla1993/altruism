import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import TemplatePreviewCard from '../components/templates/TemplatePreviewCard'
import { templates } from '../utils/templatesData'

const externalTemplates = [
  {
    id: 'sparkshots',
    title: 'Sparkshots Portfolio',
    description: 'Professional portfolio showcase featuring modern design patterns, smooth animations, and responsive layouts.',
    url: 'https://www.sparkshots.ca',
    tags: ['Portfolio', 'SPA', 'Modern', 'Professional'],
    thumbnail: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'sap-resume-example',
    title: 'SAP Consultant Resume',
    description: 'Example resume for SAP professionals highlighting enterprise experience, technical skills, and implementation success stories.',
    url: 'https://bhalla1993.github.io/shivabhallaportfolio.github.io',
    tags: ['Resume', 'SAP', 'Professional'],
    thumbnail: 'https://images.pexels.com/photos/6804074/pexels-photo-6804074.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

function ExternalTemplateCard({ template, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 300ms ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 6,
          },
        }}
      >
        <Box
          component="img"
          src={template.thumbnail}
          alt={template.title}
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
            transition: 'transform 300ms ease',
          }}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1.25 }}>
            <Chip label="External Template" size="small" color="warning" />
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            {template.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
            {template.description}
          </Typography>
          <Button
            component="a"
            href={template.url}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            endIcon={<OpenInNewIcon />}
            fullWidth
            size="small"
          >
            Visit Live Demo
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TemplatesPage() {
  return (
    <>
      <Seo
        title="Templates"
        description="Browse starter resume and portfolio templates including SAP-focused and modern designs with live demos."
        path="/templates"
      />

      <Box component="section" aria-labelledby="templates-page-title">
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="templates-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Resume and Portfolio Templates
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
              Choose from industry-focused starter templates and preview each with live sample data. Add new templates by updating one configuration file.
            </Typography>

            <Grid container spacing={3}>
              {templates.map((template, index) => (
                <Grid key={template.id} item xs={12} md={6} lg={4}>
                  <TemplatePreviewCard template={template} index={index} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>

      {/* External Templates Section */}
      <Box component="section" aria-labelledby="external-templates-title" sx={{ mt: { xs: 8, md: 12 } }}>
        <AnimatedSection>
          <Stack spacing={4}>
            <Box>
              <Typography id="external-templates-title" variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, mb: 1 }}>
                External Professional Templates
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
                Explore real-world examples of professional portfolios and resumes built with modern technologies.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {externalTemplates.map((template, index) => (
                <Grid key={template.id} item xs={12} md={6} lg={4}>
                  <ExternalTemplateCard template={template} index={index} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default TemplatesPage
