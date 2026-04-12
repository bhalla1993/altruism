import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import { business, values } from '../utils/siteData'

function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Altruism Digital Studio's mission, values, and story behind delivering modern digital services."
        path="/about"
      />

      <Box component="section" aria-labelledby="about-page-title">
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="about-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              About {business.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 880 }}>
              We started with one goal: make premium digital execution accessible to small businesses, independent professionals, and growth-stage teams.
              We combine design strategy, engineering, and product thinking to create durable online presence and software systems.
            </Typography>

            <Grid container spacing={3}>
              {values.map((value) => (
                <Grid key={value.title} item xs={12} md={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack spacing={1.2}>
                        <Typography variant="h5">{value.title}</Typography>
                        <Typography color="text.secondary">{value.description}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default AboutPage
