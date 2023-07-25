import React from 'react';
import MainCard from '../ui-component/cards/MainCard';
const Teaching = () => {
  // Sample data for members
  const members = [
    {
      id: 1,
      name: 'BT 6303 - Computational Systems Biology [3 credits]',
      designation: 'Overview of contents',
      image: 'https://th.bing.com/th/id/OIP.E2QljuAsgLQm7EtSNvQjhAHaEs?w=294&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Image file path or URL
      description:
        'Introduction to proteomics, Transition from genomics to proteomics - prospects and challenges, Protein purification and separation technologies, Two-dimensional gel electrophoresis (2-DE), Difference in-gel electrophoresis (DIGE), Fundamentals of mass spectrometry, Soft ionization methods [Matrix assisted laser desorption/ionization-Time of Flight (MALDI-TOF), and Electro-spray ionization (ESI)], Tandem Liquid Chromatography-Mass spectrometry (LC-MS/MS), Next-generation ultra-high resolution mass-spectrometry, Label-based (SILAC, iTRAQ, and TMT) and label-free (LFQ) quantitative proteomics, Applications of proteomics-studying disease pathogenesis, host-pathogen interactions, biomarker discovery, elucidating the mechanism of drug actions, analysis of biomolecular interactions, analysis of post-translational modifications (phosphorylation and glycosylation), and study of biological rhythms and sleep.'
    },
    {
      id: 2,
      name: 'BT 6050 - Biosystems Modelling and Simulations [5 credits]',
      designation: 'Overview of contents',
      image: 'https://th.bing.com/th/id/R.f12913b3373d4506ac6ad0bad973087f?rik=q%2f4rj21eldL3sg&pid=ImgRaw&r=0',
      description:
        'Introduction to biological oscillators, A brief history of circadian timekeeping, Circadian clocks – the rhythms of life, Clock circuits in different organisms, Adaptive significance of rhythms, Molecular mechanisms of transcriptional and non-transcriptional circadian oscillations, Multidimensional regulation of the circadian rhythms, Master and peripheral clocks in mammalian systems, Metabolic oscillations, Timeseries analysis of rhythms - concepts and methods, Physiological functions and importance of time-keeping machinery, Circadian clocks and sleep, Circadian clocks in health and diseases, Human circadian disorders, Clock-infection biology, Chrononutrition- effects of diet on circadian rhythmicity, Chronomedicine, Modulation of daily rhythms for therapeutic benefit.'
    },
    {
      id: 3,
      name: 'BT 6050 - Systems and Computational Medicine [2 credits]',
      designation: 'Overview of contents',
      image: 'https://th.bing.com/th/id/R.f12913b3373d4506ac6ad0bad973087f?rik=q%2f4rj21eldL3sg&pid=ImgRaw&r=0',
      description:
        'Introduction to biological oscillators, A brief history of circadian timekeeping, Circadian clocks – the rhythms of life, Clock circuits in different organisms, Adaptive significance of rhythms, Molecular mechanisms of transcriptional and non-transcriptional circadian oscillations, Multidimensional regulation of the circadian rhythms, Master and peripheral clocks in mammalian systems, Metabolic oscillations, Timeseries analysis of rhythms - concepts and methods, Physiological functions and importance of time-keeping machinery, Circadian clocks and sleep, Circadian clocks in health and diseases, Human circadian disorders, Clock-infection biology, Chrononutrition- effects of diet on circadian rhythmicity, Chronomedicine, Modulation of daily rhythms for therapeutic benefit.'
    }
  ];

  return (
    <div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Courses</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {members.map((member) => (
          <MainCard key={member.id} style={{ width: '650px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src={member.image}
              alt={member.name}
              style={{ width: '100%', height: '160px', objectFit: 'cover', transform: 'scale(1.3)' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: '#990000' }}>{member.name}</h3>
              <p style={{ color: 'black' }}>{member.designation}</p>
              <p>{member.description}</p>
            </div>
          </MainCard>
        ))}
      </div>
    </div>
  );
};

export default Teaching;
