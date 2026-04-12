import ConstructionIcon from '@mui/icons-material/Construction'
import { Alert, Box, Grid, Stack, Typography } from '@mui/material'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import PortfolioItem from '../components/cards/PortfolioItem'
import { portfolioItems } from '../utils/siteData'

function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Preview project case studies and upcoming digital product launches from Altruism Digital Studio."
        path="/portfolio"
      />

      <Box component="section" aria-labelledby="portfolio-page-title">
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="portfolio-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Portfolio and Case Studies
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              Here are representative projects showing how we help businesses ship web products faster. This section is structured to scale with future case studies.
            </Typography>
            <Grid container spacing={3}>
              {portfolioItems.map((project) => (
                <Grid key={project.title} item xs={12} md={4}>
                  <PortfolioItem project={project} />
                </Grid>
              ))}
            </Grid>
            <Alert icon={<ConstructionIcon fontSize="inherit" />} severity="info">
              A dedicated gallery for pre-built digital products will be added soon.
            </Alert>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default PortfolioPage
