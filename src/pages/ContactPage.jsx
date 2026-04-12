import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Card, CardContent, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Seo from '../components/common/Seo'
import ContactForm from '../components/forms/ContactForm'
import { business } from '../utils/siteData'

const socialItems = [
  {
    label: 'Facebook',
    href: business.socialLinks.facebook,
    icon: FacebookRoundedIcon,
  },
  {
    label: 'Instagram',
    href: business.socialLinks.instagram,
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    href: business.socialLinks.linkedin,
    icon: LinkedInIcon,
  },
]

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Altruism Digital Studio to discuss your website, resume portfolio, or software development project."
        path="/contact"
      />

      <Box component="section" aria-labelledby="contact-page-title">
        <Grid container spacing={3.2}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2.2}>
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
            <Stack spacing={2.2}>
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

              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
              >
                <CardContent>
                  <Stack spacing={1.4}>
                    <Typography variant="h5">Connect With Us</Typography>
                    <Typography color="text.secondary">
                      Follow and message us on social media for updates, quick conversations, and project inquiries.
                    </Typography>
                    <Stack direction="row" spacing={1.2}>
                      {socialItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <Box
                            key={item.label}
                            component={motion.div}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.28, delay: 0.06 * index }}
                          >
                            <IconButton
                              component={Link}
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={item.label}
                              sx={{
                                border: '1px solid',
                                borderColor: 'divider',
                                color: 'text.primary',
                                '&:hover': {
                                  color: 'primary.main',
                                  borderColor: 'primary.main',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 10px 24px rgba(45, 212, 191, 0.2)',
                                },
                                transition: 'all 220ms ease',
                              }}
                            >
                              <Icon />
                            </IconButton>
                          </Box>
                        )
                      })}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ContactPage
