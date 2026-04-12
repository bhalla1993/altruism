import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Seo from '../components/common/Seo'

function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" description="The page you are trying to access does not exist." path="/404" />
      <Box component="section" sx={{ minHeight: '55vh', display: 'grid', placeItems: 'center' }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h2">Page Not Found</Typography>
          <Typography color="text.secondary">The requested page is unavailable or has moved.</Typography>
          <Button component={RouterLink} to="/" variant="contained">
            Back to Home
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default NotFoundPage
