import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import PhytCancerimg from './PhytCancer.png';
import { useLocation } from 'react-router-dom';
const HumenSim = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#800000', display: 'flex', justifyContent: 'center' }}>Phyt-Cancer</h1>
      <div style={{ gap: '20px', width: '80%' }} spacing={2}>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src={PhytCancerimg}
                alt="Drug Discovery & Delivery for Cancer"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800000' }}>Drug Discovery & Delivery for Cancer:</h3>
                <p>
                In view of the surge in occurence of cancers, the poor efficacy of cancer therapies and exceeding costs of treatments, 
                particularly for the later stages of cancer, better cancer therapies with lesser side-effects are the need of the hour. 
                Phytochemicals are reported to have fewer side effects and may be cost effective for cancer treatment. These would provide 
                better potential for identifying new drugs using the current repositories of phytochemical compounds. The current scenario 
                needs a better filtering protocol to screen out the potential hits from these repositories against various targets of 
                cancer. PhytCancer project focuses on the identification of novel anticancer phytochemical targets and their leads by 
                implementing the target-lead search, molecular docking and dynamics analysis as a primary screening of leads. The project
                further includes a comparative analysis of the Phytochemical Library with FDA approved drugs based on structure and
                pharmacophore data, to filter out those phytochemicals that have properties like potential cancer drugs. The filtered hits
                and their targets will be further validated based on in vitro & in vivo analysis. Moreover, the novel drug delivery methods 
                based on the biophysical characterizations will be dsigned and tested using computational models.</p>
                <p>
                Additional research on cancer includes:</p>
                <p>
                - Computational models for drug delivery for nanomedicine</p>
                <p>
                - Development of targetted drug delivery systems</p>
                <p>
                - Identification of diagnostic biomarkers for early cancer detection</p>
                <p>
                - Preventive therapeutics for cancer 
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
