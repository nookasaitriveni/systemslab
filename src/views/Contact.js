import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, Paper, TextField, Link } from '@mui/material';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <Typography variant="h1" style={{ color: '#800020', display: 'flex', justifyContent: 'center' }}>
        Contact Us
      </Typography>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        <Box display="flex" flexWrap="wrap" gap="20px" justifyContent="center" marginTop="20px">
          <div id="contact" style={{ width: '100%' }}>
            <div className="container">
              <div className="section-title text-center">
                <Typography variant="h4">Get in Touch</Typography>
                <Typography variant="body1">
                  If you are interested in our lab or need more information you can contact us using the form below.
                </Typography>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={7}>
                  <div className="contact">
                    <form className="form" name="enq" method="post" action="contact.php">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField type="text" name="name" variant="outlined" fullWidth placeholder="Name" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField type="email" name="email" variant="outlined" fullWidth placeholder="Email" required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField type="text" name="subject" variant="outlined" fullWidth placeholder="Subject" required />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField rows={6} name="message" variant="outlined" fullWidth placeholder="Your Message" required multiline />
                        </Grid>
                        <Grid item xs={12} className="text-center">
                          <Button
                            variant="contained"
                            component={Link}
                            to="/your-link"
                            style={{ color: '#ffffff', border: '1px solid #800020', background: '#800020' }}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <div className="single_address">
                    <i className="fa fa-map-marker"></i>
                    <Typography variant="h6">Our Address</Typography>
                    <Typography variant="body1">F22/G39, PhySioME Lab, <br />
                    Department of Systems and Computational Biology,<br />
                    SLS, University of Hyderabad, 500046.</Typography>
                  </div>
                  <div className="single_address">
                    <i className="fa fa-envelope"></i>
                    <Typography variant="h6">Send your message</Typography>
                    <Typography variant="body1">pramodrs@uohyd.ac.in</Typography>
                  </div>
                  <div className="single_address">
                    <i className="fa fa-phone"></i>
                    <Typography variant="h6">Call us on</Typography>
                    <Typography variant="body1">(+91)9075169791</Typography>
                  </div>
                  <div className="single_address">
                    <i className="fa fa-clock-o"></i>
                    <Typography variant="h6">Work Time</Typography>
                    <Typography variant="body1">
                      Mon - Fri: 08.00 - 18.00.
                      <br />
                      Sat: 10.00 - 18.00
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
