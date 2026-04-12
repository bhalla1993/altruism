import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'

function TemplatePreviewCard({ template, index = 0 }) {
  const demoHref = `${import.meta.env.BASE_URL}templates/${template.id}/demo`

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Card
        sx={{
          height: '100%',
          transition: 'transform 220ms ease, box-shadow 220ms ease',
          '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
        }}
      >
        <CardMedia component="img" height="185" image={template.thumbnail} alt={template.title} loading="lazy" />
        <CardContent>
          <Stack spacing={1.25}>
            <Stack direction="row" spacing={1}>
              <Chip label={template.filterCategory || template.category} size="small" variant="outlined" />
            </Stack>
            <Typography variant="h6">{template.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {template.shortDescription}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ pt: 1 }}>
              <Button
                component="a"
                href={demoHref}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                sx={{ transition: 'all 180ms ease', '&:hover': { transform: 'translateY(-1px)' } }}
              >
                View Demo
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TemplatePreviewCard
