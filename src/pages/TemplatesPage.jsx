import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { startTransition, useDeferredValue, useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import LiveProjectCard from '../components/cards/LiveProjectCard'
import TemplatePreviewCard from '../components/templates/TemplatePreviewCard'
import { liveProjects } from '../utils/liveProjectsData'
import { templateFilters, templateSortOptions, templates } from '../utils/templatesData'

function TemplatesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [selectedSort, setSelectedSort] = useState('Most Popular')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const deferredFilter = useDeferredValue(selectedFilter)
  const deferredSort = useDeferredValue(selectedSort)

  const visibleTemplates = useMemo(() => {
    const filtered = deferredFilter === 'All'
      ? templates
      : templates.filter((template) => template.filterCategory === deferredFilter)

    if (deferredSort === 'Newest') {
      return [...filtered].sort((a, b) => new Date(b.createdAt || '2024-01-01') - new Date(a.createdAt || '2024-01-01'))
    }

    if (deferredSort === 'Recommended') {
      return [...filtered].sort((a, b) => Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)))
    }

    return [...filtered].sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
  }, [deferredFilter, deferredSort])

  const recommendedTemplates = useMemo(
    () => templates.filter((template) => template.recommended).slice(0, 3),
    [],
  )

  return (
    <>
      <Seo
        title="Templates"
        description="Browse customizable resume and portfolio SPA templates, then explore real deployed work in our live projects showcase."
        path="/templates"
      />

      <Box component="section" aria-labelledby="templates-page-title">
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="templates-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Resume and Portfolio Templates
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
              Browse customizable SPA templates for resumes and portfolios. These are design starting points that we tailor to your profile.
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.2} alignItems={{ xs: 'flex-start', md: 'center' }}>
              <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap>
                {templateFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? 'contained' : 'outlined'}
                    size="small"
                    onClick={() => startTransition(() => setSelectedFilter(filter))}
                  >
                    {filter}
                  </Button>
                ))}
              </Stack>

              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel id="template-sort-label">Sort</InputLabel>
                <Select
                  labelId="template-sort-label"
                  value={selectedSort}
                  label="Sort"
                  onChange={(event) => startTransition(() => setSelectedSort(event.target.value))}
                >
                  {templateSortOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <Grid container spacing={3}>
              {visibleTemplates.map((template, index) => (
                <Grid key={template.id} item xs={12} md={6} lg={4}>
                  <TemplatePreviewCard template={template} index={index} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>

      <Box
        component="section"
        aria-labelledby="recommended-templates-title"
        sx={{
          mt: { xs: 8, md: 10 },
          contentVisibility: 'auto',
          containIntrinsicSize: isMobile ? '1px 1200px' : '1px 900px',
        }}
      >
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="recommended-templates-title" variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.4rem' } }}>
              Recommended Templates
            </Typography>
            <Grid container spacing={3}>
              {recommendedTemplates.map((template, index) => (
                <Grid key={template.id} item xs={12} md={6} lg={4}>
                  <TemplatePreviewCard template={template} index={index} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>

      <Box
        component="section"
        aria-labelledby="showcase-title"
        sx={{
          mt: { xs: 10, md: 14 },
          contentVisibility: 'auto',
          containIntrinsicSize: isMobile ? '1px 1600px' : '1px 1100px',
        }}
      >
        <AnimatedSection>
          <Stack spacing={4}>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <WorkspacePremiumOutlinedIcon color="primary" sx={{ fontSize: 28 }} />
                <Typography
                  id="showcase-title"
                  variant="h2"
                  sx={{ fontSize: { xs: '1.75rem', md: '2.4rem' } }}
                >
                  Live Projects & Portfolio Showcase
                </Typography>
              </Stack>
              <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
                This section highlights real deployed client work. These are live builds, not template previews.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {liveProjects.map((project, index) => (
                <Grid key={project.id} item xs={12} md={6}>
                  <LiveProjectCard project={project} index={index} />
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ opacity: 0.45 }} />

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.4}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              justifyContent="space-between"
            >
              <Typography color="text.secondary" sx={{ maxWidth: 620, lineHeight: 1.7 }}>
                Interested in creating your own single-page resume or website? Explore our templates or contact us for a custom project.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} flexShrink={0}>
                <Button component={RouterLink} to="/templates" variant="outlined" size="small">
                  Browse Templates
                </Button>
                <Button component={RouterLink} to="/live-projects" variant="outlined" size="small">
                  View All Live Projects
                </Button>
                <Button component={RouterLink} to="/contact" variant="contained" size="small">
                  Start a Project
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default TemplatesPage
