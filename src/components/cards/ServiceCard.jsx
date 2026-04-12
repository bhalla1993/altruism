import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Card, CardContent, CardMedia, List, ListItem, Stack, Typography } from '@mui/material'

function ServiceCard({ service }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia component="img" height="180" image={service.image} alt={service.title} loading="lazy" />
      <CardContent>
        <Stack spacing={1.5}>
          <Typography variant="h5">{service.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
          <List sx={{ py: 0 }}>
            {service.features.map((feature) => (
              <ListItem key={feature} sx={{ px: 0, py: 0.25 }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, fontSize: 18, color: 'primary.main' }} />
                <Typography variant="body2">{feature}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
