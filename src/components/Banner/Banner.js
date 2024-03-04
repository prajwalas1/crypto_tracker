import React from 'react'
import bannerImage from './banner2.jpg';
import "./Banner.css";
import { Container, Typography } from '@mui/material';
import Carousel from './Carousel';
const Banner = () => {
  return (
    <div className='banner' style={{backgroundImage: `url(${bannerImage})`}}>
      <Container className='bannerContent'>
       <div className='tagline'>
          <Typography
           variant='h2'
           style={{
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily:"Montserrat",
           }}>
              Crypto tracker
          </Typography>
          <Typography
           variant='subtitle2'
           style={{
            color:"darkgray",
            textTransform:"capitalize",
            fontFamily:"Montserrat",
           }}>
              Get all the Info regarding your favorite Crypto currency
          </Typography>
       </div>
       <Carousel/>
      </Container>
    </div>
  )
}

export default Banner;


