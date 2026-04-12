import { Box, Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import SpaResumeTemplate01 from '../../templates/spa-resume-01'
import ModernResumeTemplate01 from '../../templates/modern-resume-01'
import CreativeResumeTemplate01 from '../../templates/creative-resume-01'
import TechnicalResumeTemplate01 from '../../templates/technical-resume-01'
import StudentResumeTemplate01 from '../../templates/student-resume-01'
import BusinessResumeTemplate01 from '../../templates/business-resume-01'
import PortfolioSpaTemplate01 from '../../templates/portfolio-spa-01'
import LawyerPortfolio01 from '../../templates/lawyer-portfolio-01'
import RealEstateAgent01 from '../../templates/real-estate-agent-01'

function SapResumeTemplate({ data }) {
  return (
    <Paper sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 3 }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h4">{data.name}</Typography>
          <Typography color="primary.main" sx={{ fontWeight: 600 }}>{data.role}</Typography>
        </Box>
        <Typography color="text.secondary">{data.summary}</Typography>
        <Divider />
        <Typography variant="h6">Core Skills</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {data.skills.map((skill) => <Chip key={skill} label={skill} size="small" />)}
        </Stack>
        <Typography variant="h6">Impact Highlights</Typography>
        {data.achievements.map((item) => (
          <Typography key={item} variant="body2" color="text.secondary">• {item}</Typography>
        ))}
        <Typography variant="h6">Experience</Typography>
        {data.experience.map((item) => (
          <Stack key={`${item.company}-${item.period}`} direction="row" justifyContent="space-between">
            <Typography>{item.title} • {item.company}</Typography>
            <Typography color="text.secondary">{item.period}</Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  )
}

function SapPortfolioTemplate({ data }) {
  return (
    <Paper sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 3 }}>
      <Stack spacing={2.5}>
        <Box>
          <Typography variant="h4">{data.name}</Typography>
          <Typography color="primary.main" sx={{ fontWeight: 600 }}>{data.role}</Typography>
        </Box>
        <Typography color="text.secondary">{data.intro}</Typography>
        <Divider />
        <Typography variant="h6">Featured SAP Projects</Typography>
        <Grid container spacing={2}>
          {data.projects.map((project) => (
            <Grid key={project.title} item xs={12} md={6}>
              <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{project.impact}</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6">Technology Stack</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {data.stack.map((tech) => <Chip key={tech} label={tech} variant="outlined" size="small" />)}
        </Stack>
      </Stack>
    </Paper>
  )
}

function ModernComboTemplate({ data }) {
  return (
    <Paper sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography variant="h4">{data.name}</Typography>
            <Typography color="secondary.main" sx={{ fontWeight: 600 }}>{data.role}</Typography>
            <Typography color="text.secondary">{data.bio}</Typography>
            <Typography variant="h6">Highlights</Typography>
            {data.highlights.map((highlight) => (
              <Typography key={highlight} variant="body2" color="text.secondary">• {highlight}</Typography>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Typography variant="h6">Selected Work</Typography>
            {data.work.map((item) => (
              <Paper key={item.name} variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">{item.details}</Typography>
              </Paper>
            ))}
            <Typography variant="h6">Capabilities</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {data.skills.map((skill) => <Chip key={skill} label={skill} size="small" />)}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

function TemplateRenderer({ template, data }) {
  if (!template) {
    return null
  }

  if (template.layout === 'sapResume') {
    return <SapResumeTemplate data={data} />
  }

  if (template.layout === 'sapPortfolio') {
    return <SapPortfolioTemplate data={data} />
  }

  if (template.layout === 'spaResume01') {
    return <SpaResumeTemplate01 data={data} />
  }

  if (template.layout === 'modernResume01') {
    return <ModernResumeTemplate01 data={data} />
  }

  if (template.layout === 'creativeResume01') {
    return <CreativeResumeTemplate01 data={data} />
  }

  if (template.layout === 'technicalResume01') {
    return <TechnicalResumeTemplate01 data={data} />
  }

  if (template.layout === 'studentResume01') {
    return <StudentResumeTemplate01 data={data} />
  }

  if (template.layout === 'businessResume01') {
    return <BusinessResumeTemplate01 data={data} />
  }

  if (template.layout === 'portfolioSpa01') {
    return <PortfolioSpaTemplate01 data={data} />
  }

  if (template.layout === 'lawyerPortfolio01') {
    return <LawyerPortfolio01 data={data} />
  }

  if (template.layout === 'realEstateAgent01') {
    return <RealEstateAgent01 data={data} />
  }

  return <ModernComboTemplate data={data} />
}

export default TemplateRenderer
