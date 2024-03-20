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
import image5 from './LP7.png';
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
            <div>
              <img src={image5} alt="Image 5" className="slider-image" />
            </div>
          </Slider>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={7} style={{ margin: 'auto' }}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} sm={12} md={10}>
            <div className="content-container">
              <Typography variant="h1" style={{ fontSize: isSmallScreen ? '30' : '46', color: '#800020' }}>
                Welcome to Our Lab
              </Typography>
              <br />
              <br />
              <Typography variant="p" style={{ fontSize: '17px',textAlign: 'justify' }}>
                PhySioME (Physiological Systems Medicine and Engineering) laboratory is dedicated to translational biomedical research through systems and computational
                medicine, biomedical informatics and therapeutic engineering. We apply principles of systems engineering, informatics and data analytics to biomedical
                systems for development of better healthcare solutions. Understanding the design principles of physiological systems can help in developing strategies 
                to modify and reconstruct biological processess with desired properties. Therefore, we treat the problem of a disease diagnosis and treatment analogous
                to a fault diagnosis and repair in engineering systems and develop tools to better inform diagnostics, treatment decisions and therapeutic strategies.
                <br />
                <br />
                The broader areas of research include identification of drug targets, disease mechanisms, biomarkers, drug discovery, therapy design and
                chronotherapeutic drug delivery. We apply systems and computational biology using quantitative systems physiology and pharmacology frameworks 
                including Mathematical modelling, Artificial intelligence and Machine learning tools, Data analytics and Causal inferences for development of 
                personalized and precision medicine applications using physiomic and phenomics data. We work with animal models and human clinical research 
                for the validation of computational models and their insights. Our specific areas of research include metabolic syndrome, diabetes, hypertension,
                liver diseases, cardiovascular diseases, neurophysiology and psychiatry, circadian disorders, cancer and inflammatory disorders.
                <br />
                <br />
                Moreover we work on analyzing the societal issues related to public health and sustainability from systems perspective to deliver effective 
                solutions for healthy and sustainable living. We extensively work on world population dyanmics and its association to human behaviour and health
                to address the root causes of societal issues through our research and outreach activities.
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
                  Chrono-Med
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/thestrech"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                  StrECH-Stdy
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/t3diabetes"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                Diabetomics   
                </Button>
              </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/phytcancer"
                  style={{ color: '#ffffff', border: '1px solid #000328', background: '#000328' }}
                >
                 Phyt-Cancer
                </Button>
               </Box>
              <Box mb={1}>
                <Button
                  variant="contained"
                  href="https://healthsurf.org/"
                  component="a"
                  target="_blank"
                  // <a href='https://healthsurf.org/' target="_blank"></a>
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
