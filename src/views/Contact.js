import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid, Paper, TextField, Link } from '@mui/material';
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State variable to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      "Name": {
        "value": formData.name,
        "type": "text"
      },
      "Short answer email": {
        "value": formData.email,
        "type": "email"
      },
      "Subject": {
        "value": formData.subject,
        "type": "text"
      },
      "Paragraph": {
        "value": formData.message,
        "type": "text"
      }
    };

    axios.post('https://backend.zyro.com/u1/data/v2/post/mjEPyMXy7aUKJMz5nGbpAEpGyb2m5N02', postData)
      .then((response) => {
        console.log('Contact form submitted successfully:', response.data);
        setIsSubmitted(true); // Set the form submission status to true
      })
      .catch((error) => {
        console.error('Error submitting contact form:', error);
        // You can add error handling here if required
      });
  };
  return (
    <div>
      <Typography variant="h1" style={{ color: '#800000', display: 'flex', justifyContent: 'center' }}>
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
                  {isSubmitted ? ( // Show the message if the form is submitted
                      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '20px' }}>
                        Thanks for submitting the details!
                      </Typography>
                    ) : (
                      <form className="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleFormChange}
                              variant="outlined"
                              fullWidth
                              placeholder="Name"
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleFormChange}
                              variant="outlined"
                              fullWidth
                              placeholder="Email"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleFormChange}
                              variant="outlined"
                              fullWidth
                              placeholder="Subject"
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              rows={6}
                              name="message"
                              value={formData.message}
                              onChange={handleFormChange}
                              variant="outlined"
                              fullWidth
                              placeholder="Your Message"
                              required
                              multiline
                            />
                          </Grid>
                          <Grid item xs={12} className="text-center">
                            <Button
                              type="submit"
                              variant="contained"
                              style={{ color: '#ffffff', border: '1px solid #990000', background: '#990000' }}
                            >
                              Send Message
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <div className="single_address">
                    <i className="fa fa-map-marker"></i>
                    <Typography variant="h6">Our Address</Typography>
                    <Typography variant="body1">F22 & G39, SysTEMs lab, <br />
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
                    <Typography variant="body1">(+91)1234567890</Typography>
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
