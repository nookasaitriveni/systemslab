import React from 'react';
import { Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { fontWeight } from '@mui/system';
import IOE from './Min_Ed4.png';
import UOH from './UoH_logo3.png';
import DEP from './DoSCB_logo21.png';
import MOE from './IoE_logo3.png';
const styles = {
  footer: {
    backgroundColor: '#000328',
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
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Link component={RouterLink} to="/uoh" underline="none" sx={{ mx: 1 }}>
            <img src={UOH} alt="UOH" style={{ height: '100px' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={DEP} alt="DEP" style={{ height: '100px' }} />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <br/>
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
                  </Grid>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={IOE} alt="IOE" style={{ height: '100px' }} />
          </Link>
          <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
            <img src={MOE} alt="MOE" style={{ height: '100px' }} />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterPage;
