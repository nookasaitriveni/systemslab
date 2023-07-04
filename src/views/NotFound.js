import React from 'react';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const NotFound = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="right" spacing={2}>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Button>
          <Link component={RouterLink} to="/" color="inherit" underline="none" sx={{ mx: 1 }}>
            <Typography variant="body1" style={{ color: '#990000 ', fontWeight: 'bold' }}>
              Go back to the Home page
            </Typography>
          </Link>
        </Button>
      </div>
    </Grid>
  );
};

export default NotFound;
