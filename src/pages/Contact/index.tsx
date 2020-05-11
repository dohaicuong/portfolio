import React from 'react'
import { Paper, makeStyles, Typography, Container, TextField, Grid, Button, LinearProgress } from '@material-ui/core'
import ContactSVG from 'resources/contact.svg'

const Contact = () => {
  const classes = useStyles()

  const [isSubmitting, setSubmitting] = React.useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 1000)
  }

  return (
    <Paper className='ContactPage'>
      <Typography variant='h5' className={classes.title}>
        Contact
      </Typography>
      <img src={ContactSVG} className={classes.image} alt='Contact Eric Do' />
      {isSubmitting && <LinearProgress />}
      <Container maxWidth='sm' className={classes.formWrapper}>
        <Typography variant='subtitle1'>
          Contact me using the contact form below:
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='Name' name='name' fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Email' name='email' fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Enter note' name='notes' multiline rows={5} rowsMax={8} fullWidth required />
            </Grid>
            <Grid item xs={12} className={classes.buttonRow}>
              <Button variant='contained' color='primary' type='submit' disabled={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Paper>
  )
}
export default Contact

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(3)
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  formWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))