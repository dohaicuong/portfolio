import React from 'react'
import { Paper, Typography, makeStyles, Container, Divider } from '@material-ui/core'
import AboutSVG from 'resources/about.svg'

const About = () => {
  const classes = useStyles()

  return (
    <Paper className={`AboutPage ${classes.root}`}>
      <Typography variant='h5' className={classes.title}>
        About
      </Typography>
      <Divider className={classes.divider} />
      <img src={AboutSVG} className={classes.image} alt='Contact Eric Do' />
      <Container maxWidth='sm' className={classes.container}>
        <Typography variant='h5'>
          Introduction
        </Typography>
        <Typography variant='body1' className={classes.paragraph}>
          Full stack developer with a passion for innovation. Equipped with a diverse development skill set, proficient in the use of various platforms, languages, and system architectures. Comfortably and effectively able to self-manage during independent projects or collaborate as part of a productive team.
        </Typography>
      </Container>
    </Paper>
  )
}
export default About

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0.5)
  },
  title: {
    padding: theme.spacing(1)
  },
  divider: {
    marginBottom: theme.spacing(2)
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
  paragraph: {
    margin: theme.spacing(2)
  }
}))