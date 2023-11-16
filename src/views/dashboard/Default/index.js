import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import LandingPage from './LandingPage';

import AboutPI from './AboutPI';
import Collaborationslogos from 'views/Collaborationslogos';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container>
      <LandingPage isLoading={isLoading} />
      <Collaborationslogos isLoading={isLoading} />
      {/* <AboutPI /> */}
    </Grid>
  );
};

export default Dashboard;
