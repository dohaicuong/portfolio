import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from 'components/ErrorBoundary'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import routes from 'routes'

import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import MainLayout from 'layouts/MainLayout'
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        }
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Switch>
            <MainLayout>
              <React.Suspense fallback={null}>
                {routes.map(route => <Route key={route.path} {...route} />)}
              </React.Suspense>
            </MainLayout>
          </Switch>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
