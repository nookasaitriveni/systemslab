import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import image3 from '../views/dashboard/Default/LP3.png';
const ChronoMed = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#800000', display: 'flex', justifyContent: 'center' }}>ChronoMed</h1>
      <div style={{ gap: '20px', width: '80%' }} spacing={2}>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src={image3}
                alt="Life Systems Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#800000' }}>Chronotherapeutics:</h3>
                <p>
                  <span>Modelling and analysis of natural systems based on quantification of&nbsp;</span>
                  <span>living systems theory</span>
                  <span>
                    <b>&nbsp;</b>including areas of evolutionary biology, population dynamics, ecosystem, environment and psycho-social
                    determinants of human behavior&nbsp;
                  </span>
                  <span>for&nbsp;</span>
                  <span>engineering sustainable life</span>
                  <span>
                    &nbsp;<b>and&nbsp;</b>
                  </span>
                  <b>public health</b>
                  <span>
                    . The <b>HealthSurf</b> <b>project</b>.
                  </span>
                </p>
              </div>
            </Grid>
            {/* <Grid item md={4}>

        </Grid> */}
          </Grid>
        </MainCard>
      </div>
    </div>
  );
};

export default ChronoMed;
