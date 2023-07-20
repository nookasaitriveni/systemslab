import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import './AboutSection.css';
import prs from './PRS.jpg';
const AboutSection = () => {
  return (
    <div>
      <Card className="about-card">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className="about-content">
            <Typography variant="h1" style={{ fontSize: '35px', color: '#800000', display: 'flex', justifyContent: 'center' }}>
              About PI
            </Typography>
            <br/> 
            <Typography variant="body2" style={{ fontSize: '17px' }}>
              We are a team of passionate scientists dedicated to advancing knowledge and pushing the boundaries of scientific discovery.
              Our mission is to make groundbreaking contributions in various fields and improve the world we live in.We are a team of
              passionate scientists dedicated to advancing knowledge and pushing the boundaries of scientific discovery. Our mission is to
              make groundbreaking contributions in various fields and improve the world we live in.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
            <Avatar alt="PI" src={prs} className="user-avatar" />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutSection;
