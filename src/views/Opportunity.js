import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, Paper } from '@mui/material';
import MainCard from '../ui-component/cards/MainCard';
import './Opportunity.css';
const Opportunity = () => {
  return (
    <div>
      <Typography variant="h1" style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>
        Careers
      </Typography>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        <Box display="flex" flexWrap="wrap" gap="20px" justifyContent="center" style={{ marginTop: '20px' }}>
          <section style={{ marginTop: '20px' }}>
            <div className="container">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Card elevation={3} className="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px">
                    <a className="overlay-link" href="#"></a>
                    <div class="icon-50 theme-bg white-color border-radius-50 d-inline-block">
                      {' '}
                      <i class="number">LD</i>
                    </div>
                    <div className="p-20px-l media-body">
                      <Typography variant="body2" className="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">
                        Full time
                      </Typography>
                      <Typography variant="h6" className="m-5px-tb">
                        Laravel Developer
                      </Typography>
                      <Typography variant="body2" className="m-0px font-small">
                        San Francisco, US
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Card elevation={3} className="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px">
                    <a className="overlay-link" href="#"></a>
                    <div class="icon-50 green-bg white-color border-radius-50 d-inline-block">
                      {' '}
                      <i class="number">LD</i>
                    </div>
                    <div className="p-20px-l media-body">
                      <Typography variant="body2" className="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">
                        Full time
                      </Typography>
                      <Typography variant="h6" className="m-5px-tb">
                        Laravel Developer
                      </Typography>
                      <Typography variant="body2" className="m-0px font-small">
                        San Francisco, US
                      </Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Card elevation={3} className="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px">
                    <a className="overlay-link" href="#"></a>
                    <div class="icon-50 yellow-bg white-color border-radius-50 d-inline-block">
                      {' '}
                      <i class="number">LD</i>
                    </div>
                    <div className="p-20px-l media-body">
                      <Typography variant="body2" className="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">
                        Full time
                      </Typography>
                      <Typography variant="h6" className="m-5px-tb">
                        Laravel Developer
                      </Typography>
                      <Typography variant="body2" className="m-0px font-small">
                        San Francisco, US
                      </Typography>
                    </div>
                  </Card>
                </Grid>

                {/* Repeat the above Grid item for other job positions */}
              </Grid>
            </div>
          </section>
        </Box>
      </div>
    </div>
  );
};

export default Opportunity;
