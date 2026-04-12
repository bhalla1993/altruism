import DownloadIcon from '@mui/icons-material/Download'
import LaunchIcon from '@mui/icons-material/Launch'
import PersonIcon from '@mui/icons-material/Person'
import ScienceIcon from '@mui/icons-material/Science'
import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import Seo from '../components/common/Seo'
import TemplateRenderer from '../components/templates/TemplateRenderer'
import { getTemplateById } from '../utils/templatesData'

function TemplateDemoPage() {
  const { templateId } = useParams()
  const [dataMode, setDataMode] = useState('sample')

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

  const handleDownload = () => {
    // Placeholder export action until PDF/HTML export service is integrated.
    window.alert(`Download for ${template.title} will be available soon.`)
  }

  return (
    <>
      <Seo
        title={`${template.title} Demo`}
        description={`Live demo for ${template.title}. Preview and prepare export options for future template workflows.`}
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
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ xs: 'stretch', md: 'center' }}>
            <ToggleButtonGroup
              value={dataMode}
              exclusive
              onChange={(_, value) => value && setDataMode(value)}
              aria-label="Toggle template data source"
              size="small"
            >
              <ToggleButton value="sample" aria-label="Sample data mode">
                <ScienceIcon sx={{ mr: 1, fontSize: 16 }} />
                Sample Data
              </ToggleButton>
              <ToggleButton value="user" aria-label="User data mode">
                <PersonIcon sx={{ mr: 1, fontSize: 16 }} />
                User Data (Soon)
              </ToggleButton>
            </ToggleButtonGroup>

            <Button onClick={handleDownload} variant="outlined" startIcon={<DownloadIcon />}>
              Download PDF/HTML
            </Button>
            <Button variant="contained" endIcon={<LaunchIcon />}>
              Use This Template
            </Button>
          </Stack>

          {dataMode === 'user' && (
            <Alert severity="info">
              User-data mode is reserved for upcoming profile integration. Showing sample data for now.
            </Alert>
          )}

          <motion.div
            key={`${template.id}-${dataMode}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <TemplateRenderer template={template} data={template.sampleData} />
          </motion.div>
        </Stack>
      </Box>
    </>
  )
}

export default TemplateDemoPage
