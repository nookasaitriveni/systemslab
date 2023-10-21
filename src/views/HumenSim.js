import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
const HumenSim = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>HumenSim</h1>
      <div style={{ gap: '20px', width: '95%' }} spacing={2}>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src="https://www.industrialmarketingtoday.com/wp-content/uploads/2019/08/reserach-post.jpg"
                alt="Life Systems Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%', padding: '10px;', borderRadius: '30px;' }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#990000' }}>Life Systems Engineering:</h3>
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
                    . The <a href='https://healthsurf.org/' target="_blank"><b>HealthSurf</b></a> <b>project</b>.
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

export default HumenSim;
