import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Box, Button, Card, CardContent, Chip, Link, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

function LiveProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.22 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderColor: 'primary.main',
          borderWidth: 1,
          transition: 'transform 260ms ease, box-shadow 260ms ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: (theme) =>
              theme.palette.mode === 'dark' ? '0 20px 48px rgba(0,0,0,0.55)' : '0 16px 40px rgba(15,23,42,0.14)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            '&:hover img': { transform: 'scale(1.03)' },
          }}
        >
          <Box
            component="img"
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            sx={{
              width: '100%',
              height: { xs: 210, md: 220 },
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 420ms ease',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
              pointerEvents: 'none',
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <WorkspacePremiumOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Chip label={project.badge || 'Live Project'} size="small" color="success" sx={{ fontWeight: 600 }} />
          </Stack>

          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
            {project.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.65 }}>
            {project.description}
          </Typography>

          <Button
            component={Link}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            endIcon={<OpenInNewIcon />}
            size="small"
            sx={{ alignSelf: 'flex-start', mt: 0.5 }}
          >
            {project.ctaLabel || 'View Live Demo'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default LiveProjectCard
