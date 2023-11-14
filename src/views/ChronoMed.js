import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import image3 from '../views/dashboard/Default/LP3.png';
const ChronoMed = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#800020', display: 'flex', justifyContent: 'center' }}>Chrono-Med</h1>
      <div style={{ gap: '20px', width: '95%' }} spacing={2}>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src={image3}
                alt="Life Systems Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%', padding: '10px;', borderRadius: '30px;'  }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800020' }}>Chronotherapeutics:</h3>
                <p>
                The human peripheral circadian rhythm is entrained to the day-night phase of the SCN with the help of cortisol.
                An unnatural lifestyle perturbations in eating habits, abnormal exposure to light-dark cycle, and work stress
                affects homeostasis of various peripheral metabolic processes. That gives rise to the symptoms of different
                systemic diseases like hypertension,cardiovascular disease, diabetes, depression, PTSD, etc. Current treatments
                do not account for the circadian dynamics of the medications and its PK-PD thereby are associated with several
                side effects. The Chrono-Med study mainly focuses on developing a mathematical model for the SCN-HPA-Peripheral
                circadian systems along with the physiological and pharmacological perturbation variables and parameters to
                determine the phase response in circadian dynamics to the time-dependent administration of cortisol analogues.
                These computational models are further optimized and recalibrated to the Rat-stress model using animal experiments
                for chronotherapeutics. The Chrono-Med approach provides insight into the phase/ amplitude and period of various
                circadian, inflammatory and HPA variables in response to drug administration, which helps in determining optimal
                dose and timing for various cortisol analogues. The work would provide the foundation for developing chronotherapeutic
                drug delivery systems for inflammatory and metabolic disorders. This work is funded by DST-SERB, Govt. of India.
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
