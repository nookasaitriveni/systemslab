import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import image3 from '../views/dashboard/Default/LP2.png';
import flyer from './Flyer- StrECH Study.png';
const TheStreCH = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>The StrECH Study</h1>
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
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#990000' }}>The Stress Epidemic and Cardiometabolic Health:</h3>
                <p>
                The current study aims to gather and evaluate human data for blood clinical analysis and psychological stress inventories in order to discover stress indicators in plasma and validate their involvement in determining resilience. In order to study the circadian behavior of stress physiology and its impact on hypertension, we intend to build and evaluate a computational model that incorporates the molecular pathways of the immune system, HPA axis, HPT axis, and circadian clock, which can guide the use of chronotherapy to treat hypertension. Furthermore, to find the diagnostic indicators for resilience or pathological variations of stress and to optimize the model parameters, machine learning techniques will be applied to the data from human and animal models. In general, this research will contribute to our knowledge of the early mediators of stress pathology and the best treatment approaches for them.
                </p>
              </div>
            </Grid>
            {/* <Grid item md={4}>

        </Grid> */}
          </Grid>
          <img src={flyer} style={{width: '100%', marginTop: '100px'}} />
        </MainCard>

      </div>
    </div>
  );
};

export default TheStreCH;
