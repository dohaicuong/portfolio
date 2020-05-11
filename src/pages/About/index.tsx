import React from 'react'
import { Paper, Typography, makeStyles, Container } from '@material-ui/core'
import AboutSVG from 'resources/about.svg'

const About = () => {
  const classes = useStyles()

  return (
    <Paper className='AboutPage'>
      <Typography variant='h5' className={classes.title}>
        About
      </Typography>
      <img src={AboutSVG} className={classes.image} alt='Contact Eric Do' />
      <Container maxWidth='sm' className={classes.container}>
        <Typography variant='subtitle1'>
          Introduction
        </Typography>
      </Container>
    </Paper>
  )
}
export default About

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(3)
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
}))