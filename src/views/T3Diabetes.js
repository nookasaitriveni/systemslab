import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
const T3Diabetes = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Diabetes Research</h1>
      <div style={{ gap: '20px', width: '95%' }} spacing={2}>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src="https://www.industrialmarketingtoday.com/wp-content/uploads/2019/08/reserach-post.jpg"
                alt="Life Systems Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%', padding: '10px;', borderRadius: '30px;'  }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#990000' }}>Diabetes Systems biology </h3>
                <p>
                 The project is carried in collaboration with AIG Hospitals & Asian Healthcare Foundation along with International partners from 
                 Emory university, Vanderbilt University and Phenome Health (ISB-USA). It involves deep phenotyping of diabetes patients with Type 2 
                 and Type 3 diabetes along with multi-omic characterization. Our role is to provide computational and systems biological support for
                 projects to develop computational models for understanding disease mechanisms and prognostic biomarkers. The objectives of the projects
                 are to understand Islet systems biology, endocrine function and disease transition in chronic pancreatitis to T3 diabetes. We are also 
                 working towards a large sample study on Diabetes Phenome for Indian sample. We use extensive computational modelling along with Artificial
                 Intelligence and Machine learning approches for multi-omic data analytics.
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

export default T3Diabetes;
