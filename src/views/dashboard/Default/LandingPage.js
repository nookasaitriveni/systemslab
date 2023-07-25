import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Grid, Typography, Button, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';
import image2 from './LP1.png';

import image3 from './LP2.png';
import image4 from './LP3.png';
import image1 from './LP5.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const LandingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
      <Grid item xs={12} sm={12} md={5}>
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
              <img src={image1} alt="Image 1" className="slider-image" />
            </div>
          </Slider>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={7} style={{ margin: 'auto' }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={10}>
            <div className="content-container">
              <Typography variant="h1" style={{ fontSize: isSmallScreen ? '30' : '46', color: '#800000' }}>
                Welcome to Our Lab
              </Typography>
              <br />
              <br />
              <Typography variant="p" style={{ fontSize: '16px' }}>
                We are a team of passionate researches dedicated to translational research in Systems Medicine and Therapeutic Engineering.
                Our research interests are in applying systems engineering principles to biomedical systems for better health-care. Understanding the design principles of biological network can help in developing strategies to modify and reconstruct biological 
                process with desired properties. Therefore, in our research approach, we treat a disease diagnosis problem analogous to a fault 
                diagnosis problem in engineering systems and develop tools to better inform treatment decisions and therapeutic strategies. 
                <br />
                <br />
                The broader areas of research include systems and computatioanl medicine with specific interests in drug target identification,
                disease mechanisms, biomarker identification, therapy design, and chronotherapeutic drug delivery. We use mathematical modelling and 
                Artificial intelligence with Machine learning tools for devlopment of personalized medicine applications. We also work with animal models
                and human clinical research for discovery and validation of the compuattational insights. Our specific areas of research application
                include metabolic syndrome, diabetes and hypertension, neurophysiology, circadian physiology, cancer and inflammatory disorders.                               
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            container
            direction="column"
            // alignItems={isSmallScreen ? 'center' : 'end'}
            justify={isSmallScreen ? 'center' : 'right'}
            spacing={2}
            style={{ alignItems: isSmallScreen ? 'center !important' : 'end !important' }}
          >
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '20px' }}
              container
              direction="column"
              alignItems="center"
              justify={isSmallScreen ? 'center' : 'right'}
              spacing={2}
            >
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/humensim"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  HuMEn-Sim
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/chronomed"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  ChronoMed
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/thestrech"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  The StreCH
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/t3diabetes"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  T3Diabetes
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/phytcancer"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  PhytCancer
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/healthsurf"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  HealthSuRF
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
