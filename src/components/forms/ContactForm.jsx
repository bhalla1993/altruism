import SendIcon from '@mui/icons-material/Send'
import { Alert, Box, Button, Grid, Stack, TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().min(2, 'Please enter your full name.').required('Name is required.'),
    email: yup.string().email('Please enter a valid email.').required('Email is required.'),
    service: yup.string().required('Please select a service.'),
    message: yup.string().min(20, 'Please provide at least 20 characters.').required('Message is required.'),
  })
  .required()

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async () => {
    setSubmitted(false)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
    reset()
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Name" {...register('name')} error={Boolean(errors.name)} helperText={errors.name?.message} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Email" {...register('email')} error={Boolean(errors.email)} helperText={errors.email?.message} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            SelectProps={{ native: true }}
            label="Service Needed"
            defaultValue=""
            {...register('service')}
            error={Boolean(errors.service)}
            helperText={errors.service?.message}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="website-development">Website Development</option>
            <option value="resume-portfolio">Resume and Portfolio</option>
            <option value="software-development">Software Development</option>
            <option value="digital-products">Pre-built Digital Products</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            minRows={5}
            label="Project Details"
            {...register('message')}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button type="submit" variant="contained" endIcon={<SendIcon />} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {submitted && <Alert severity="success">Thanks! Your message has been queued.</Alert>}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactForm
