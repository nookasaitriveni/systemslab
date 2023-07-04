import React from 'react';
import { Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { fontWeight } from '@mui/system';
import IOE from './IoE_logo.png';
import UOH from './UoH_logo.png';
import DEP from './DoSCB_logo1.png';
import MOE from './Min_Ed.png';
const styles = {
  footer: {
    backgroundColor: '#000053',
    padding: '16px',
    position: 'fixed',
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

const FooterPage = () => {
  return (
    <footer style={styles.footer}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link component={RouterLink} to="/uoh" underline="none" sx={{ mx: 1 }}>
            <img src={UOH} alt="UOH" style={{ height: '80px' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={DEP} alt="DEP" style={{ height: '80px' }} />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" color="#ffffff" style={{ fontWeight: 'bold' }}>
            Dr. Pramod R.S. MTech, PhD
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Asst. Professor & PI, SysTEMs Laboratory
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Systems Medicine & Therapeutic Engineering
          </Typography>
          <Typography variant="body2" color="#ffffff">
            Department of Systems and Computational Biology - UoH
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={IOE} alt="IOE" style={{ height: '80px' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={MOE} alt="MOE" style={{ height: '80px' }} />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterPage;
