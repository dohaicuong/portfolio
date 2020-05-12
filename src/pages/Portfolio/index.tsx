import React from 'react'
import { Grid } from '@material-ui/core'
import PortfolioItem from 'components/PortfolioItem'

const items = Array(10).fill(1).map(() => ({ image: 'https://demo.templateflip.com/material-portfolio/img/portfolio1.jpg', title: 'Rocky Peak', content: 'Some rocky places that you want to see' })) 

const Portfolio = () => {
  return (
    <Grid container spacing={4} className='PortfolioPage'>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <PortfolioItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
export default Portfolio