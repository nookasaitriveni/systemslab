import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
const Research = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === '#Reaserch1') {
      divRef1.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#Reaserch2') {
      divRef2.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#Reaserch3') {
      divRef3.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#Reaserch4') {
      divRef4.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  // Sample data for members
  const members = [
    {
      id: 1,
      link_name: 'Reaserch1',
      divRefs: divRef1,
      name: 'Reaserch 1 - Proteomics: Applications and Techniques [2 credits]',
      designation: 'Overview of contents',
      image: 'https://admissionxpert.in/wp-content/uploads/2020/09/Clinical-Research-course-min.jpg', // Image file path or URL
      description:
        'Introduction to proteomics, Transition from genomics to proteomics - prospects and challenges, Protein purification and separation technologies, Two-dimensional gel electrophoresis (2-DE), Difference in-gel electrophoresis (DIGE), Fundamentals of mass spectrometry, Soft ionization methods [Matrix assisted laser desorption/ionization-Time of Flight (MALDI-TOF), and Electro-spray ionization (ESI)], Tandem Liquid Chromatography-Mass spectrometry (LC-MS/MS), Next-generation ultra-high resolution mass-spectrometry, Label-based (SILAC, iTRAQ, and TMT) and label-free (LFQ) quantitative proteomics, Applications of proteomics-studying disease pathogenesis, host-pathogen interactions, biomarker discovery, elucidating the mechanism of drug actions, analysis of biomolecular interactions, analysis of post-translational modifications (phosphorylation and glycosylation), and study of biological rhythms and sleep.'
    },
    {
      id: 2,
      divRefs: divRef2,
      link_name: 'Reaserch2',
      name: 'Reaserch 2 - Circadian Clocks: Mechanisms and Functions [2 credits]',
      designation: 'Overview of contents',
      image:
        'https://wallup.net/wp-content/uploads/2018/09/26/589838-test-tube-abstract-abstraction-cylinder-tubes-glass-bokek-medical-vials-chemistry-biology-science.jpg',
      description:
        'Introduction to biological oscillators, A brief history of circadian timekeeping, Circadian clocks – the rhythms of life, Clock circuits in different organisms, Adaptive significance of rhythms, Molecular mechanisms of transcriptional and non-transcriptional circadian oscillations, Multidimensional regulation of the circadian rhythms, Master and peripheral clocks in mammalian systems, Metabolic oscillations, Timeseries analysis of rhythms - concepts and methods, Physiological functions and importance of time-keeping machinery, Circadian clocks and sleep, Circadian clocks in health and diseases, Human circadian disorders, Clock-infection biology, Chrononutrition- effects of diet on circadian rhythmicity, Chronomedicine, Modulation of daily rhythms for therapeutic benefit.'
    },
    {
      id: 3,
      divRefs: divRef3,
      link_name: 'Reaserch3',
      name: 'Reaserch 3 - Circadian Clocks: Mechanisms and Functions [2 credits]',
      designation: 'Overview of contents',
      image: 'https://www.houston.org/sites/default/files/2019-10/research-lab.jpg',
      description:
        'Introduction to biological oscillators, A brief history of circadian timekeeping, Circadian clocks – the rhythms of life, Clock circuits in different organisms, Adaptive significance of rhythms, Molecular mechanisms of transcriptional and non-transcriptional circadian oscillations, Multidimensional regulation of the circadian rhythms, Master and peripheral clocks in mammalian systems, Metabolic oscillations, Timeseries analysis of rhythms - concepts and methods, Physiological functions and importance of time-keeping machinery, Circadian clocks and sleep, Circadian clocks in health and diseases, Human circadian disorders, Clock-infection biology, Chrononutrition- effects of diet on circadian rhythmicity, Chronomedicine, Modulation of daily rhythms for therapeutic benefit.'
    },
    {
      id: 4,
      divRefs: divRef4,
      link_name: 'Reaserch4',
      name: 'Reaserch 4 - Circadian Clocks: Mechanisms and Functions [2 credits]',
      designation: 'Overview of contents',
      image: 'https://www.industrialmarketingtoday.com/wp-content/uploads/2019/08/reserach-post.jpg',
      description:
        'Introduction to biological oscillators, A brief history of circadian timekeeping, Circadian clocks – the rhythms of life, Clock circuits in different organisms, Adaptive significance of rhythms, Molecular mechanisms of transcriptional and non-transcriptional circadian oscillations, Multidimensional regulation of the circadian rhythms, Master and peripheral clocks in mammalian systems, Metabolic oscillations, Timeseries analysis of rhythms - concepts and methods, Physiological functions and importance of time-keeping machinery, Circadian clocks and sleep, Circadian clocks in health and diseases, Human circadian disorders, Clock-infection biology, Chrononutrition- effects of diet on circadian rhythmicity, Chronomedicine, Modulation of daily rhythms for therapeutic benefit.'
    }
  ];

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Research</h1>
      <div style={{ gap: '20px', width: '80%' }} spacing={2}>
        {members.map((member) => (
          <MainCard
            key={member.id}
            id={member.link_name}
            ref={member.divRefs}
            style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}
          >
            <Grid container spacing={2} style={{ padding: '0px' }}>
              <Grid item xs={4} style={{ padding: '0px' }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
              </Grid>
              <Grid item xs={8}>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: '#990000' }}>{member.name}</h3>
                  <p style={{ color: 'black' }}>{member.designation}</p>
                  <p>{member.description}</p>
                </div>
              </Grid>
              {/* <Grid item xs={4}>
          
        </Grid> */}
            </Grid>
          </MainCard>
        ))}
      </div>
    </div>
  );
};

export default Research;
