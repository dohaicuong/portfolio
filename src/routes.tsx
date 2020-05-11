import { lazy } from 'react'

export default [
  { exact: true, path: '/', component: lazy(() => import('pages/Home')) },
  { exact: true, path: '/portfolio', component: lazy(() => import('pages/Portfolio')) },
  { exact: true, path: '/about', component: lazy(() => import('pages/About')) },
  { exact: true, path: '/contact', component: lazy(() => import('pages/Contact')) },
]