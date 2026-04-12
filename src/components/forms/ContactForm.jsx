import SendIcon from '@mui/icons-material/Send'
import { Alert, Box, Button, Grid, MenuItem, Stack, TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().min(2, 'Please enter your full name.').required('Name is required.'),
    email: yup.string().email('Please enter a valid email.').required('Email is required.'),
    service: yup.string().required('Please select a service.'),
    message: yup.string().min(20, 'Please provide at least 20 characters.').required('Message is required.'),
  })
  .required()

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    transition: 'box-shadow 220ms ease, transform 220ms ease',
    '&:hover': { boxShadow: '0 0 0 1px rgba(45, 212, 191, 0.22)' },
    '&.Mui-focused': { boxShadow: '0 0 0 2px rgba(45, 212, 191, 0.2)' },
  },
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), defaultValues: { service: '' } })

  const onSubmit = async () => {
    setSubmitted(false)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
    reset({ service: '' })
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} component={motion.div} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
          <TextField fullWidth label="Name" {...register('name')} error={Boolean(errors.name)} helperText={errors.name?.message} sx={fieldSx} />
        </Grid>
        <Grid item xs={12} md={6} component={motion.div} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 }}>
          <TextField fullWidth label="Email" {...register('email')} error={Boolean(errors.email)} helperText={errors.email?.message} sx={fieldSx} />
        </Grid>
        <Grid item xs={12} component={motion.div} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.1 }}>
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <TextField
                select
                fullWidth
                label="Service Needed"
                {...field}
                error={Boolean(errors.service)}
                helperText={errors.service?.message}
                sx={fieldSx}
              >
                <MenuItem value="" disabled>Select a service</MenuItem>
                <MenuItem value="website-development">Website Development</MenuItem>
                <MenuItem value="resume-portfolio">Resume and Portfolio</MenuItem>
                <MenuItem value="software-development">Software Development</MenuItem>
                <MenuItem value="digital-products">Pre-built Digital Products</MenuItem>
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} component={motion.div} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.15 }}>
          <TextField
            fullWidth
            multiline
            minRows={5}
            label="Project Details"
            {...register('message')}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
            sx={fieldSx}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
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
