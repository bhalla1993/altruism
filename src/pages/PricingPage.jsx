import { Box, Grid, Stack, Typography } from '@mui/material'
import AnimatedSection from '../components/common/AnimatedSection'
import Seo from '../components/common/Seo'
import PricingCard from '../components/cards/PricingCard'
import { pricingTiers } from '../utils/siteData'

function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Flexible pricing tiers for website development, portfolio creation, and custom software solutions."
        path="/pricing"
      />

      <Box component="section" aria-labelledby="pricing-page-title">
        <AnimatedSection>
          <Stack spacing={3}>
            <Typography id="pricing-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              Transparent Pricing
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              Start with a package and scale as your business needs evolve. Every engagement includes clear milestones and quality checks.
            </Typography>
            <Grid container spacing={3}>
              {pricingTiers.map((tier) => (
                <Grid key={tier.name} item xs={12} md={4}>
                  <PricingCard tier={tier} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </AnimatedSection>
      </Box>
    </>
  )
}

export default PricingPage
