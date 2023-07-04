import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import LandingPage from './LandingPage';

import AboutPI from './dashboard/Default/AboutPI';

// ==============================|| DEFAULT AboutGroupPI ||============================== //

const AboutGroupPI = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container>
      <AboutPI />
    </Grid>
  );
};

export default AboutGroupPI;
