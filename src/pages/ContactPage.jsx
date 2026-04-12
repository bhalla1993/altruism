import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import Seo from '../components/common/Seo'
import ContactForm from '../components/forms/ContactForm'
import { business } from '../utils/siteData'

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Altruism Digital Studio to discuss your website, resume portfolio, or software development project."
        path="/contact"
      />

      <Box component="section" aria-labelledby="contact-page-title">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Typography id="contact-page-title" variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                Let&apos;s Build Your Next Digital Product
              </Typography>
              <Typography color="text.secondary">
                Tell us what you are trying to launch. We usually respond within one business day.
              </Typography>
              <ContactForm />
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Stack spacing={1.2}>
                  <Typography variant="h5">Contact Details</Typography>
                  <Typography color="text.secondary">Email: {business.email}</Typography>
                  <Typography color="text.secondary">Phone: {business.phone}</Typography>
                  <Typography color="text.secondary">Location: {business.location}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ContactPage
