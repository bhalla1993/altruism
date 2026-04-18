import LaunchIcon from '@mui/icons-material/Launch'
import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { useMemo } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { getTemplateById } from '../utils/templatesData'

function TemplateDemoPage() {
  const { templateId } = useParams()

  const template = useMemo(() => getTemplateById(templateId), [templateId])

  if (!template) {
    return (
      <Box component="section" sx={{ py: 6 }}>
        <Stack spacing={2}>
          <Typography variant="h3">Template not found</Typography>
          <Typography color="text.secondary">The requested template does not exist yet.</Typography>
          <Button component={RouterLink} to="/templates" variant="contained">Back to Templates</Button>
        </Stack>
      </Box>
    )
  }

  return (
    <>
      <Seo
        title={`${template.title} Demo`}
        description={`Live demo for ${template.title}. A single-page web template showcasing real-world design and functionality.`}
        path={`/templates/${template.id}`}
      />

      <Box component="section" aria-labelledby="template-demo-title">
        <Stack spacing={3}>
          <Stack spacing={1.2}>
            <Typography id="template-demo-title" variant="h1" sx={{ fontSize: { xs: '1.8rem', md: '2.7rem' } }}>
              {template.title}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {template.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Stack>
            <Typography color="text.secondary">{template.shortDescription}</Typography>
          </Stack>

          <Stack direction="row" spacing={1.5}>
            <Button
              component="a"
              href={template.demoUrl}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
            >
              Open Full Demo
            </Button>
            <Button component={RouterLink} to="/templates" variant="outlined">
              Browse All Templates
            </Button>
          </Stack>

          <Box
            sx={{
              width: '100%',
              height: { xs: 480, md: 700 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: 'grey.50',
            }}
          >
            <Box
              component="iframe"
              src={template.demoUrl}
              title={`${template.title} live demo`}
              loading="lazy"
              sx={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default TemplateDemoPage
