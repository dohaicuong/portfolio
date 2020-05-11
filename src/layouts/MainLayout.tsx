import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import { Tabs, Tab, useTheme, makeStyles, Typography, Container } from '@material-ui/core'
import routes from 'routes'
import { useHistory } from 'react-router-dom'

const MainLayout: React.FC = ({ children }) => {
  const theme = useTheme()

  const history = useHistory()
  const [selectedTab, setSelectedTab] = React.useState(history.location.pathname ? history.location.pathname : routes[0].path)
  const handleChangeRoute = (_: any, newValue: string) => {
    setSelectedTab(newValue)
    history.push(newValue)
  }

  return (
    <div className='MainLayout'>
      <AppBar position='static' style={{ marginBottom: theme.spacing(3) }}>
        <HeaderLogo
          avatar='E'
          title='Eric Do Portfolio'
        />
        <Tabs value={selectedTab} onChange={handleChangeRoute}
          centered
          style={{ background: theme.palette.primary.dark }}
        >
          {routes.map(route => (
            <Tab key={route.path} label={route.title} value={route.path} />
          ))}
        </Tabs>
      </AppBar>
      <Container maxWidth='md'>
        {children}
      </Container>
    </div>
  )
}
export default MainLayout

export type HeaderLogoProps = {
  avatar: any
  title: string
}
const HeaderLogo: React.FC<HeaderLogoProps> = ({ avatar, title }) => {
  const classes = useHeaderLogoStyles()

  return (
    <div className={classes.root}>
      <div className={classes.layoutTitle}>
        <Avatar className={classes.avatar}>
          {avatar}
        </Avatar>
        <Typography variant='subtitle1' className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  )
}
const useHeaderLogoStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  layoutTitle: {
    display: 'block',
  },
  avatar: {
    margin: '1rem auto',
    width: 120,
    height: 120,
    fontSize: '4.5rem',
    fontWeight: 600,
    background: theme.palette.background.paper,
    color: theme.palette.primary.main,
    fontFamily: 'cursive',
  },
  title: {
    textAlign: 'center'
  },
}))