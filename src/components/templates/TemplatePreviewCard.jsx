import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material'
import { motion, useReducedMotion } from 'framer-motion'

function TemplatePreviewCard({ template, index = 0 }) {
  const isSpaHtml = template.type === 'spa-html'
  const demoHref = isSpaHtml
    ? template.demoUrl
    : `${import.meta.env.BASE_URL}templates/${template.id}/demo`
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const reduceMotion = useReducedMotion()
  const disableMotion = reduceMotion || isMobile

  const card = (
    <Card
      sx={{
        height: '100%',
        overflow: 'hidden',
        transition: disableMotion ? 'box-shadow 180ms ease' : 'transform 220ms ease, box-shadow 220ms ease',
        '@media (hover: hover)': {
          '&:hover': disableMotion ? { boxShadow: 4 } : { transform: 'translateY(-6px)', boxShadow: 6 },
        },
      }}
    >
      <Box
        component="img"
        src={template.thumbnail}
        alt={template.title}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sx={{
          width: '100%',
          height: 185,
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
        }}
      />
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
              sx={{ transition: 'all 180ms ease', '@media (hover: hover)': { '&:hover': { transform: 'translateY(-1px)' } } }}
            >
              View Demo
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )

  if (disableMotion) {
    return card
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      style={{ height: '100%' }}
    >
      {card}
    </motion.div>
  )
}

export default TemplatePreviewCard
