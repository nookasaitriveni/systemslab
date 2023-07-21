import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './Gallery.css';
const Gallery = () => {
  const photoGroups = [
    {
      photos: [
        { image: 'https://lsuonline-static.s3.amazonaws.com/media/images/2020/06/24/blog-laboratory-science.jpg', title: 'Photo 1' },
        { image: 'https://georgetelegraphblog.files.wordpress.com/2020/12/lab-technician.png', title: 'Photo 2' },
        { image: 'https://dg1xqmhtoint1.cloudfront.net/img/ihs/blog/mlt-17.webp?mtime=20220616191108&focal=none', title: 'Photo 3' }
      ],
      description: 'Description of Group 1'
    },
    {
      photos: [
        { image: 'https://clpmag.com/wp-content/uploads/2022/09/clinical-laboratory-technician.jpg', title: 'Photo 4' },
        { image: 'https://apprenticeshipguide.co.uk/wp-content/uploads/2022/07/Laboratory-scientist-degree.jpg', title: 'Photo 5' },
        { image: 'https://dolphinlifesciences.com/wp-content/uploads/2022/01/MLS-Salary-in-India.jpg', title: 'Photo 6' }
      ],
      description: 'Description of Group 2'
    },
    {
      photos: [
        { image: 'https://dg1xqmhtoint1.cloudfront.net/img/ihs/blog/mlt-16.webp?mtime=20220616190301&focal=none', title: 'Photo 7' }
      ],
      description: 'Description of Group 3'
    }
    // Add more photo groups as needed
  ];

  return (
    <div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Gallery</h1>

      {photoGroups.map((group, index) => (
        <div key={index} style={{ marginBottom: '60px', padding: '0 30px' }}>
          <Grid container spacing={2}>
            {group.photos.map((photo, photoIndex) => (
              <Grid item md={12 / (group.photos.length > 1 ? group.photos.length : 2)} key={photoIndex}>
                <Card className="zoom-card">
                  <CardMedia component="img" height="200px" width="300px" image={photo.image} alt={photo.title} className="zoom-image" />
                </Card>
              </Grid>
            ))}
          </Grid>
          <h3 style={{ color: '#990000' }}>{group.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
