import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'

function PortfolioItem({ project }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea>
        <CardMedia component="img" height="190" image={project.image} alt={project.title} loading="lazy" />
        <CardContent>
          <Stack spacing={1.25}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Chip size="small" label={project.category} color="secondary" variant="outlined" />
              <ArrowOutwardIcon sx={{ fontSize: 18 }} />
            </Stack>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PortfolioItem
