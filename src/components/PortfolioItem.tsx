import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, makeStyles, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

export type PortfolioItemProps = {
  image: string
  title: string
  content: string
}
const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, content }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title='Eric Do project'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size='small' color='primary'>
          <GitHubIcon />
        </IconButton>
        <IconButton size='small' color='secondary'>
          <LaunchIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
export default PortfolioItem

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})