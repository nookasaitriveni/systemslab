import React from 'react';
import { Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { fontWeight } from '@mui/system';
import IOE from './Min_Ed4.png';
import UOH from './UoH_logo3.png';
import DEP from './DoSCB_logo21.png';
import MOE from './IoE_logo3.png';

import './FooterPage.css';
const styles = {
  Footer: {
    backgroundColor: '#000328',
    // padding: '8px 5px 17px 8px',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 989,
    textAlign: 'center',
    marginTop: '100px',
    color: '#ffffff'
  },
  content: {
    padding: '16px',
    textAlign: 'center',
    marginBottom: '60px' // Adjust the margin to create space for the navbar
  }
};

const Page = () => {
  return (
    <style={styles.}>
      <Grid container spacing={2}>
        <Grid item xs={0} md={4} lg={4} className="left- hide-mobile">
          <Link component={RouterLink} to="/uoh" underline="none" sx={{ mx: 1 }}>
            <img src={UOH} alt="UOH" style={{ height: '6.7vw' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={DEP} alt="DEP" style={{ height: '6.7vw' }} />
          </Link>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className="hide-mobile">
          {/* <br/> */}
          <Typography variant="body1" color="#ffffff" style={{ fontWeight: 'bold' }}>
            Dr. Pramod Rajaram S.
          </Typography>
          <Typography variant="body2" color="#ffffff">
            MTech, PhD (Engg), FISC, FRSPH
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Asst. Professor and Principal Investigator
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Department of Systems and Computational Biology
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Associate Faculty, Centre for Modelling Simulation and Design
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={4} className="hide-web">
          {/* <br/> */}
          <Typography variant="body1" color="#ffffff" style={{ fontWeight: 'bold' }}>
            Dr. Pramod Rajaram S.
          </Typography>
          <Typography variant="body2" color="#ffffff">
            MTech, PhD (Engg), FISC, FRSPH
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Asst. Professor and Principal Investigator
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Department of Systems and Computational Biology
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Associate Faculty - Centre for Modelling Simulation and Design
          </Typography>
        </Grid>
        <Grid item xs={12} md={0} lg={0} className="hide-web">
          <Link component={RouterLink} to="/uoh" underline="none" sx={{ mx: 1 }}>
            <img src={UOH} alt="UOH" style={{ height: '6.7vw' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={DEP} alt="DEP" style={{ height: '6.7vw' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={IOE} alt="IOE" style={{ height: '6.7vw' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={MOE} alt="MOE" style={{ height: '6.7vw' }} />
          </Link>
        </Grid>
        <Grid item xs={0} md={4} lg={4} className="right- hide-mobile">
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={IOE} alt="IOE" style={{ height: '6.7vw' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={MOE} alt="MOE" style={{ height: '6.7vw' }} />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
