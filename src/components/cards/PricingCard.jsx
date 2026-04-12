import { Button, Card, CardContent, List, ListItem, Stack, Typography } from '@mui/material'

function PricingCard({ tier }) {
  return (
    <Card
      sx={{
        height: '100%',
        borderColor: tier.highlight ? 'primary.main' : 'divider',
        boxShadow: tier.highlight ? '0 0 0 1px rgba(45,212,191,0.25), 0 18px 40px rgba(5,10,18,0.45)' : undefined,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h5">{tier.name}</Typography>
          <Typography variant="h3" color={tier.highlight ? 'primary.main' : 'text.primary'}>
            {tier.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tier.description}
          </Typography>
          <List sx={{ py: 0 }}>
            {tier.features.map((feature) => (
              <ListItem key={feature} sx={{ px: 0, py: 0.4 }}>
                <Typography variant="body2">• {feature}</Typography>
              </ListItem>
            ))}
          </List>
          <Button variant={tier.highlight ? 'contained' : 'outlined'}>{tier.cta}</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PricingCard
