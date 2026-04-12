import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Box, Button, Card, CardContent, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import Seo from '../components/common/Seo'
import { business } from '../utils/siteData'

const tiers = [
  {
    name: 'Student Resume SPA',
    price: '$99',
    audience: 'Perfect for students and new graduates',
    features: [
      'Single-page online resume',
      'Mobile-friendly design',
      'Hosted on GitHub Pages (free)',
      'Subdomain under our website (free)',
    ],
  },
  {
    name: 'Professional Resume/Portfolio SPA',
    price: '$149',
    audience: 'Ideal for job seekers and freelancers',
    features: [
      'Single-page professional resume or portfolio',
      'Customizable sections',
      'Hosted on GitHub Pages (free)',
      'Subdomain under our website (free)',
    ],
  },
  {
    name: 'Full Code Ownership Package',
    price: '$199',
    audience: 'For complete independence and portability',
    features: [
      'Complete SPA source code delivered to the client',
      'No dependency on our company',
      'Client can host anywhere',
      'Includes deployment instructions',
    ],
  },
]

const comparisonRows = [
  {
    label: 'Single-page SPA',
    student: 'Included',
    professional: 'Included',
    ownership: 'Included',
  },
  {
    label: 'Hosted on GitHub Pages',
    student: 'Included',
    professional: 'Included',
    ownership: 'Optional (self-host)',
  },
  {
    label: 'Subdomain under our website',
    student: 'Included',
    professional: 'Included',
    ownership: 'Optional',
  },
  {
    label: 'Source code delivery',
    student: 'No',
    professional: 'No',
    ownership: 'Included',
  },
  {
    label: 'Deployment instructions',
    student: 'Basic',
    professional: 'Basic',
    ownership: 'Detailed',
  },
]

const faqs = [
  {
    q: 'Why is GitHub Pages free?',
    a: 'GitHub Pages provides static hosting for public repositories, which makes SPA hosting affordable and reliable.',
  },
  {
    q: 'Why are SPAs fast and easy to maintain?',
    a: 'SPAs load as one optimized app shell and then render sections quickly, reducing maintenance complexity and long-term costs.',
  },
  {
    q: 'Why is code ownership beneficial?',
    a: 'Owning your code means you can host anywhere, modify anytime, and avoid platform lock-in.',
  },
  {
    q: 'How do custom domains work?',
    a: 'We can connect your purchased domain to GitHub Pages and configure DNS and SSL as an optional add-on.',
  },
]

function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Simple and transparent SPA pricing plus quote-based pricing for custom web applications and CRM solutions."
        path="/pricing"
      />

      <Box component="section" aria-labelledby="pricing-page-title">
        <Stack spacing={3.1}>
          <Typography id="pricing-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 860 }}>
            {business.name} keeps pricing clear and accessible. Choose a package based on your current goals, then scale only when needed.
          </Typography>

          <Grid container spacing={2.4}>
            {tiers.map((tier, index) => (
              <Grid key={tier.name} item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <Card sx={{ height: '100%', border: index === 1 ? '1px solid' : 'none', borderColor: index === 1 ? 'primary.main' : 'transparent' }}>
                    <CardContent>
                      <Stack spacing={1.1}>
                        <Typography variant="h5" sx={{ fontSize: '1.2rem' }}>{tier.name}</Typography>
                        <Typography variant="h4" color="primary.main">{tier.price}</Typography>
                        <Typography color="text.secondary">{tier.audience}</Typography>
                        <Stack spacing={0.7}>
                          {tier.features.map((feature) => (
                            <Stack key={feature} direction="row" spacing={0.7} alignItems="flex-start">
                              <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 18, mt: 0.15 }} />
                              <Typography color="text.secondary">{feature}</Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h5">Optional Add-Ons (Extra Charge)</Typography>
                <Typography color="text.secondary">Custom domain setup</Typography>
                <Typography color="text.secondary">Integrated contact form (Google Forms or other providers)</Typography>
                <Typography color="text.secondary">Additional sections or custom design changes</Typography>
              </Stack>
            </CardContent>
          </Card>

          <Card
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              background: (theme) => `linear-gradient(120deg, ${theme.palette.primary.main}14, transparent)`,
            }}
          >
            <CardContent>
              <Stack spacing={1.2}>
                <Typography variant="h5">Custom Web Applications & CRM Solutions</Typography>
                <Typography color="text.secondary">
                  Custom web applications, CRM systems, dashboards, and business tools are priced based on requirements.
                </Typography>
                <Typography color="text.secondary">
                  Please contact us to discuss your project and receive a personalized quote.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
                  <Button component={RouterLink} to="/contact" variant="contained">Request a Quote</Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Stack spacing={1.2}>
                <Typography variant="h5">Pricing Comparison</Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Feature</TableCell>
                      <TableCell>Student ($99)</TableCell>
                      <TableCell>Professional ($149)</TableCell>
                      <TableCell>Code Ownership ($199)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonRows.map((row) => (
                      <TableRow key={row.label}>
                        <TableCell>{row.label}</TableCell>
                        <TableCell>{row.student}</TableCell>
                        <TableCell>{row.professional}</TableCell>
                        <TableCell>{row.ownership}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Stack>
            </CardContent>
          </Card>

          <Stack spacing={1.1}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' } }}>FAQ</Typography>
            <Grid container spacing={2}>
              {faqs.map((faq) => (
                <Grid key={faq.q} item xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack spacing={0.7}>
                        <Stack direction="row" spacing={0.7} alignItems="center">
                          <HelpOutlineIcon color="primary" sx={{ fontSize: 18 }} />
                          <Typography variant="h6" sx={{ fontSize: '1rem' }}>{faq.q}</Typography>
                        </Stack>
                        <Typography color="text.secondary">{faq.a}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
            <Button component={RouterLink} to="/contact" variant="contained">Get Started</Button>
            <Button component={RouterLink} to="/templates" variant="outlined">View Templates</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default PricingPage
