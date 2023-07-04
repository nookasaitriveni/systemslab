import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import MainCard from '../ui-component/cards/MainCard';
const Publications = () => {
  const publications = [
    {
      title: 'Publication 1',
      authors: ['Author 1', 'Author 2'],
      year: 2021,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://example.com/publication1'
    },
    {
      title: 'Publication 2',
      authors: ['Author 3', 'Author 4'],
      year: 2022,
      description: 'Praesent condimentum lectus id urna aliquam, vitae lobortis enim dignissim.',
      //   image: 'https://example.com/publication2.jpg',
      learnMoreLink: 'https://example.com/publication2'
    },
    {
      title: 'Publication 3',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 4',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 5',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 6',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 7',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 8',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 9',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 10',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 11',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    },
    {
      title: 'Publication 12',
      authors: ['Author 5', 'Author 6'],
      year: 2023,
      description: 'Cras efficitur justo a urna ullamcorper, a feugiat erat pulvinar.',
      //   image: 'https://example.com/publication3.jpg',
      learnMoreLink: 'https://example.com/publication3'
    }
    // Add more publications as needed
  ];

  return (
    <div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Research Paper Publications</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {publications.map((publication, index) => (
          <MainCard key={index} sx={{ maxWidth: 300, boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            {/* <CardMedia component="img" height="200" image={publication.image} alt={publication.title} /> */}

            <Typography variant="h3" component="div" gutterBottom style={{ color: '#990000' }}>
              {publication.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Authors: {publication.authors.join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year: {publication.year}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 3 }}>
              {publication.description}
            </Typography>
            <Button
              variant="contained"
              href={publication.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginTop: 10, background: '#990000' }}
            >
              Learn More
            </Button>
          </MainCard>
        ))}
      </div>
    </div>
  );
};

export default Publications;
