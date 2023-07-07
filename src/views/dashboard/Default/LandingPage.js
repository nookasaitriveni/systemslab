import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Grid, Typography, Button, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';
import image2 from './2.jpeg';

import image3 from './3.webp';
import image4 from './4.webp';

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // centerMode: true,
    autoplaySpeed: 5000
    // centerPadding: '20px',
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: false,
    //     },
    //   },
    // ],
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div className="image-container">
          <Slider {...settings} className="custom-slider">
            <div>
              <img src={image2} alt="Image 2" className="slider-image" />
            </div>
            <div>
              <img src={image3} alt="Image 3" className="slider-image" />
            </div>
            <div>
              <img src={image4} alt="Image 4" className="slider-image" />
            </div>
            <div>
              <img src={image3} alt="Image 1" className="slider-image" />
            </div>
          </Slider>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={6} sm={8}>
            <div className="content-container">
              <Typography variant="h1" style={{ fontSize: '46px', color: '#800000' }}>
                Welcome to Our Lab
              </Typography>
              <Typography variant="p" style={{ fontSize: '17px' }}>
                We are a team of passionate scientists dedicated to advancing knowledge and pushing the boundaries of scientific discovery.
                Our mission is to make groundbreaking contributions in various fields and improve the world we live in.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} container direction="column" alignItems="end" justify="right" spacing={2}>
            <Box mb={1}>
              <Button
                variant="contained"
                component={Link}
                to="/research#Reaserch1"
                style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
              >
                Research 1
              </Button>
            </Box>
            <Box mb={1}>
              <Button
                variant="contained"
                component={Link}
                to="/research#Reaserch2"
                style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
              >
                Research 2
              </Button>
            </Box>
            <Box mb={1}>
              <Button
                variant="contained"
                component={Link}
                to="/research#Reaserch3"
                style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
              >
                Research 3
              </Button>
            </Box>
            <Box mb={1}>
              <Button
                variant="contained"
                component={Link}
                to="/research#Reaserch4"
                style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
              >
                Research 4
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
