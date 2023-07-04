import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import './Collaborations.css';

const Collaborations = () => {
  return (
    <div>
      <Typography variant="h1" sx={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>
        Collaborations
      </Typography>

      <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <Grid item xs={12} sm={3} md={3}>
          <Card sx={{ bgcolor: '#ffffff' }}>
            <div class="well well-white mini-profile-widget">
              <div class="image-container">
                {' '}
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="avatar img-responsive" alt="avatar" />
              </div>
              <div class="details">
                <h4>John Doe</h4>
                <hr />
                <div>Works at Bootdey.com</div>
                <div>Attended University of Bootdey.com</div>
                <div>Lives in Miami, Florida</div>
                <div class="mg-top-10">32 Followers | 120 Following | 18 Posts</div>
                <p class="mg-top-20">
                  {' '}
                  <a href="javascript:void(0);" class="btn btn-blue">
                    {' '}
                    <i class="fa fa-facebook fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-info">
                    {' '}
                    <i class="fa fa-twitter fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-red">
                    {' '}
                    <i class="fa fa-google-plus fa-fw"></i>{' '}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Card sx={{ bgcolor: '#ffffff' }}>
            <div class="well well-light-green mini-profile-widget">
              <div class="image-container">
                {' '}
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="avatar img-responsive" alt="avatar" />
              </div>
              <div class="details">
                <h4>John Doe</h4>
                <hr />
                <div>Works at Bootdey.com</div>
                <div>Attended University of Bootdey.com</div>
                <div>Lives in Miami, Florida</div>
                <div class="mg-top-10">32 Followers | 120 Following | 18 Posts</div>
                <p class="mg-top-20">
                  {' '}
                  <a href="javascript:void(0);" class="btn btn-blue">
                    {' '}
                    <i class="fa fa-facebook fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-info">
                    {' '}
                    <i class="fa fa-twitter fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-red">
                    {' '}
                    <i class="fa fa-google-plus fa-fw"></i>{' '}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Card sx={{ bgcolor: '#ffffff' }}>
            <div class="well well-light-pink mini-profile-widget">
              <div class="image-container">
                {' '}
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="avatar img-responsive" alt="avatar" />
              </div>
              <div class="details">
                <h4>John Doe</h4>
                <hr />
                <div>Works at Bootdey.com</div>
                <div>Attended University of Bootdey.com</div>
                <div>Lives in Miami, Florida</div>
                <div class="mg-top-10">32 Followers | 120 Following | 18 Posts</div>
                <p class="mg-top-20">
                  {' '}
                  <a href="javascript:void(0);" class="btn btn-blue">
                    {' '}
                    <i class="fa fa-facebook fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-info">
                    {' '}
                    <i class="fa fa-twitter fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-red">
                    {' '}
                    <i class="fa fa-google-plus fa-fw"></i>{' '}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Card sx={{ bgcolor: '#ffffff' }}>
            <div class="well well-light-purple mini-profile-widget">
              <div class="image-container">
                {' '}
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="avatar img-responsive" alt="avatar" />
              </div>
              <div class="details">
                <h4>John Doe</h4>
                <hr />
                <div>Works at Bootdey.com</div>
                <div>Attended University of Bootdey.com</div>
                <div>Lives in Miami, Florida</div>
                <div class="mg-top-10">32 Followers | 120 Following | 18 Posts</div>
                <p class="mg-top-20">
                  {' '}
                  <a href="javascript:void(0);" class="btn btn-blue">
                    {' '}
                    <i class="fa fa-facebook fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-info">
                    {' '}
                    <i class="fa fa-twitter fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-red">
                    {' '}
                    <i class="fa fa-google-plus fa-fw"></i>{' '}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Collaborations;
