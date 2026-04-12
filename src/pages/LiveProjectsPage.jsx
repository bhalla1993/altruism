import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import LiveProjectCard from '../components/cards/LiveProjectCard'
import { liveProjects } from '../utils/liveProjectsData'

function LiveProjectsPage() {
  return (
    <>
      <Seo
        title="Live Projects"
        description="Explore real single-page resumes, portfolios, and websites we have built for clients."
        path="/live-projects"
      />

      <Box component="section" aria-labelledby="live-projects-title">
        <AnimatedSection>
          <Stack spacing={3.2}>
            <Stack spacing={1.2}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <WorkspacePremiumOutlinedIcon color="primary" sx={{ fontSize: 30 }} />
                <Typography id="live-projects-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                  Live Projects & Portfolio Showcase
                </Typography>
              </Stack>
              <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
                Explore real single-page resumes, portfolios, and websites we&apos;ve built for clients.
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
                Want your own single-page resume or website? Explore our templates or contact us for a custom project.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} flexShrink={0}>
                <Button component={RouterLink} to="/templates" variant="outlined" size="small">
                  Browse Templates
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

export default LiveProjectsPage
