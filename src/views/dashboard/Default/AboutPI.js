import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import './AboutSection.css';
import prs from './PRS.jpg';
const AboutSection = () => {
  return (
    <div>
      <Card className="about-card">
        <Grid container spacing={2}>
          <Grid item xs={0} sm={0} md={6} style={{ margin: 'auto' }} className="hide-mobile">
            <Avatar alt="PI" src={prs} className="user-avatar" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="about-content">
            <Typography variant="h1" style={{ fontSize: '46px', color: '#990000', display: 'flex', justifyContent: 'center' }}>
              About PI
            </Typography>
            <Grid item xs={12} sm={12} md={0} style={{ margin: 'auto' }} className="hide-web">
              <Avatar alt="PI" src={prs} className="user-avatar" />
            </Grid>
            <Typography variant="body2" style={{ fontSize: '17px' }}>
              We are a team of passionate scientists dedicated to advancing knowledge and pushing the boundaries of scientific discovery.
              Our mission is to make groundbreaking contributions in various fields and improve the world we live in.We are a team of
              passionate scientists dedicated to advancing knowledge and pushing the boundaries of scientific discovery. Our mission is to
              make groundbreaking contributions in various fields and improve the world we live in.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutSection;
