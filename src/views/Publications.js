import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import MainCard from '../ui-component/cards/MainCard';
const Publications = () => {
  const publications = [
    {
      heading: 'Publication 1',
      authors: ['Anusruti Sabui, Mitali Biswas, Pramod Rajaram Somvanshi, Madhavi Gorla, Fareed Mohammed and Prasad Tammineni'],
      year: 2022,
      journal: 'Frontiers in Molecular Neuroscience, Brain Disease Mechanisms',
      title:
        'Decreased Anterograde Transport Coupled with Sustained Retrograde Transport Contributes to Reduced Axonal Mitochondrial Density in Tauopathy neurons',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.3389/fnmol.2022.927195'
    },
    {
      heading: 'Publication 2',
      authors: ['Swapnali S Chaudhari and Pramod R Somvanshi'],
      year: 2022,
      journal: 'Journal of Ayurveda and Integrative Medicine',
      title: 'A methodological analysis of CTRI registered clinical trials on Ayurveda interventions for COVID-19 management',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1016/j.jaim.2022.100631'
    },
    {
      heading: 'Publication 3',
      authors: ['Manu Tomar, Pramod R Somvanshi and K.V.Venkatesh'],
      year: 2022,
      journal: 'Molecular Biology Reports',
      title: 'Physiological significance of Bistable circuit design in metabolic homeostasis : Role of insulin glucagon signaling network',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org//10.1007/s11033-022-07175-w'
    },
    {
      heading: 'Publication 4',
      authors: [' Rohit Rao, Pramod R Somvanshi, Elizabeth Klerman and Francis J. Doyle III'],
      year: 2021,
      journal: 'MDPI Metabolites',
      title:
        'Modeling the influence of chronic sleep restriction on circadian dynamics of HPA-Axis, with implications to metabolic disorders',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.3390/metabo11080483'
    },
    {
      heading: 'Publication 5',
      authors: [
        'Gwyneth WY Wu, Owen M Wolkowitz, Victor I Reus, Jee In Kang, Mathea Elnar, Reuben Sarwal, Janine D Flory, Duna Abu-Amara, Rasha Hammanieh, Aarti Gautam, Francis J Doyle III, Rachel Yehuda, Charles R Marmar, Marti Jett, Synthia H Mellon, Kerry J Ressler, Ruoting Yang, Seid Muhie, Bernie J Daigle Jr, Linda M Bierer, Leroy Hood, Kai Wang, Inyoul Lee, Kelsey R Dean, Pramod R Somvanshi'
      ],
      year: 2021,
      journal: 'Psychoneuroendocrinology',
      title:
        'Serum brain-derived neurotrophic factor remains elevated after long term follow-up of combat veterans with chronic post-traumatic stress disorder',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1016/j.psyneuen.2021.105360'
    },
    {
      heading: 'Publication 6',
      authors: ['Mahesh S Iyer, Ankita Pal, Sumana Srinivasan, Pramod R Somvanshi, Kareenhalli V Venkatesh'],
      year: 2021,
      journal: 'mSystems',
      title:
        'Global transcriptional regulators fine-tune the translational and metabolic machinery in Escherichia coli under anaerobic fermentation',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1128/mSystems.00001-21'
    },
    {
      heading: 'Publication 7',
      authors: [
        'Jee In Kang, Susanne G Mueller, Gwyneth WY Wu, Jue Lin, Peter Ng, Rachel Yehuda, Janine D Flory, Duna Abu-Amara, Victor I Reus, Aarti Gautam, Leroy Hood, Kerry J Ressler, Daniel Lindqvist, Ji Hoon Cho, Michelle Coy, Frank Desarnaud, Saverio Bersani, …Carole Siegel, Pramod R Somvanshi, Gunjan S Thakur, Young Zhou, Ruoting Yang, Rasha Hammamieh, Francis J Doyle III, Marti Jett, Charles R Marmar, Synthia H Mellon, Owen M Wolkowitz'
      ],
      year: 2020,
      journal: 'Biological Psychiatry: Cognitive Neuroscience and Neuroimaging',
      title: 'Effect of combat exposure and posttraumatic stress disorder on telomere length and amygdala volume',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1016/j.bpsc.2020.03.007'
    },
    {
      heading: 'Publication 8',
      authors: [
        'Somvanshi P.R., Synthia H. Mellon, Rachel Yehuda , Janine D. Flory, Linda Bierer, Iouri Makotkine, Charles Marmar, Marti Jett and Francis J. Doyle III'
      ],
      year: 2020,
      journal: 'Biological Psychiatry: Cognitive Neuroscience and Neuroimaging',
      title:
        'Role of enhanced glucocorticoid receptor sensitivity in inflammation in PTSD: Insights from a computational model for circadian-neuroendocrine-immune interactions',
      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1152/ajpendo.00398.2019'
    },
    {
      heading: 'Publication 9',
      title: 'Multi-omic biomarker identification for diagnosing warzone-related Post-traumatic stress disorder',
      authors: [
        'Kelsey Dean, Rasha Hammamieh, Synthia Mellon, Duna Abu-Amara, Janine Flory, Guia Guffanti, Kai Wang, Bernie Daigle, Aarti Gautam, Inyoul Lee, Ruoting yang, Lynn Almli, Francesco Saverio Bersani, Nabarun chakraborty, Duncan Donohue, Kimberly Kerley, Taek-Kyun Kim, Eugene Laska, Min Young Lee, Daniel Lindqvist, Adriana Lori, Liangqun Lu, Burook Misganaw, Seid Muhie, Jennifer Newman, Nathan Price, Shizhen Qin, V. Reus, Carole Siegel, Pramod R. Somvanshi, Gunjan Thakur, PTSD systems biology consortium, Leroy Hood, Kerry Ressler, Owen Wolkowitz, Rachel Yehuda, Marti Jett, Francis Doyle III and Charles Marmar'
      ],
      journal: 'Nature Molecular Psychiatry',
      year: 2019,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1038/s41380-019-0496-z'
    },
    {
      heading: 'Publication 10',
      title:
        'Mechanistic insights on metabolic dysfunction in PTSD from an integrated model and multi-omic analysis: Role of glucocorticoid receptor sensitivity',
      authors: [
        'Somvanshi P. R., Sindy Mellon, Flory Janine, Owen Wolkowitz, Rachel Yehuda, Leroy Hood, Charles Marmar, Marti Jett and Francis J Doyle III'
      ],
      journal: 'American Journal of Physiology: Endo Metab',
      year: 2019,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1152/ajpendo.00065.2019'
    },
    {
      heading: 'Publication 11',
      title:
        'Computational analysis of insulin-glucagon signaling network: Implications of bistability in metabolic homeostasis and disease state',
      authors: ['Somvanshi P. R., Manu Tomar and Venkatesh K.V'],
      journal: 'Nature Scientific Reports',
      year: 2019,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1038/s41598-019-50889-4'
    },
    {
      heading: 'Publication 12',
      title:
        'Novel pharmacological targets of combat related PTSD: Metabolism, inflammation, the gut microbiome and mitochondrial dysfunction',
      authors: [
        'F. Saverio Bersani, Synthia H. Mellon, Daniel Lindqvist, Jee In Kang, Ryan Rampersaud, Pramod R. Somvanshi, Francis J. Doyle III, Rasha Hammamieh, Marti Jett, Rachel Yehuda, Charles R Marmar, Owen M. Wolkowitz'
      ],
      journal: 'Military Medicine',
      year: 2019,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1093/milmed/usz260'
    },
    {
      heading: 'Publication 13',
      title: 'Transcranial Direct Current Stimulation for Opioid use disorder: Protocol for a pilot randomized controlled trial',
      authors: ['Swapnali Chaudhari, Pramod Somvanshi and Felipe Fregni'],
      journal: 'Principles and practice of Clinical Research',
      year: 2019,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.21801/ppcrj.2019.52.3'
    },
    {
      heading: 'Publication 14',
      title:
        'Influence of plasma macronutrient levels on hepatic metabolism: Role of regulatory networks in homeostasis and disease states',
      authors: ['Pramod R. Somvanshi, Patel A. K., Sharad Bhartiya and Venkatesh K.V'],
      journal: 'RSC Advances',
      year: 2016,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1039/C5RA18128C'
    },
    {
      heading: 'Publication 15',
      title: 'Implementation of integral feedback control in biological systems',
      authors: ['Somvanshi P. R., Patel A. K., Sharad Bhartiya and Venkatesh K.V'],
      journal: 'WIREs Systems Biology and Medicine',
      year: 2015,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1002/wsbm.1307'
    },
    {
      heading: 'Publication 16',
      title: 'Control of cholesterol homeostasis by entero-hepatic bile transport System: Role of feedback mechanisms',
      authors: ['Shekhar Mishra*, Pramod R. Somvanshi* and Venkatesh K.V'],
      journal: 'RSC Advances',
      year: 2014,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1039/c4ra09397f'
    },
    {
      heading: 'Publication 17',
      title: 'A conceptual review on systems biology in health and disease: From biological networks to modern therapeutics',
      authors: ['Pramod R. Somvanshi and Venkatesh K.V'],
      journal: 'Systems and Synthetic Biology',
      year: 2014,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1007/s11693-013-9125-3'
    },
    {
      heading: 'Publication 18',
      title: 'Analysis of integrated insulin mTOR signaling network: Diabetes perspective',
      authors: ['Pramod R. Somvanshi, Patel A. K., Sharad Bhartiya and Venkatesh K.V'],
      journal: 'Proceedings of International Federation of Automatic Control',
      year: 2013,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.3182/20131216-3-IN-2044.00039'
    },
    {
      heading: 'Publication 19',
      title:
        'Validation of a multi-omic biomarker panel and analysis of disease progression trajectories in a novel longitudinal PTSD cohort',
      authors: ['Rohit Rao, Kelsey Dean, Burook Misgnaw, Pramod R Somvanshi and Francis Doyle'],
      journal: 'Presentation and extended abstract in Biological Psychiatry',
      year: 2019,

      //   image: 'https://example.com/publication1.jpg',
      learnMoreLink: 'https://doi.org/10.1016/j.biopsych.2019.03.245'
    },
    {
      heading: 'Publication 20',
      title: 'Multi-scaled structured model for analyzing disease states in metabolic syndrome',
      authors: ['Somvanshi P. R. and Venkatesh K.V'],
      journal: 'Presentation and extended abstract in Indian Journal of Physiology and Pharmacology',
      year: 2011

      //   image: 'https://example.com/publication1.jpg',
      // learnMoreLink: 'https://doi.org/10.1016/j.biopsych.2019.03.245'
    }
  ];
  const book_chapters = [
    {
      heading: 'Book Chapter 1',
      title: 'Hill Equation',
      authors: ['Somvanshi P.R. and Venkatesh K.V'],
      journal: 'Encyclopedia of Systems Biology, Springer press',
      year: 2013
    },
    {
      heading: 'Book Chapter 2',
      title: 'Metabolic Control Analysis',
      authors: ['Somvanshi P. R. and Venkatesh K.V'],
      journal: 'Encyclopedia of Systems Biology, Springer press',
      year: 2013
    },
    {
      heading: 'Book Chapter 3',
      title: 'Genetic Regulation: Mechanisms',
      authors: ['Somvanshi P. R. and Venkatesh K.V'],
      journal: 'Encyclopedia of Systems Biology, Springer press',
      year: 2013
    },
    {
      heading: 'Book Chapter 4',
      title: 'Systems Biology: Modeling and Analysis of Biological Networks',
      authors: ['Somvanshi P. R., Patel A. K., Sharad Bhartiya and Venkatesh K.V'],
      journal: 'Recent trends in Biotechnology, Vol.4, Systems and Synthetic Biology, Studium press USA',
      year: 2013
    },
    {
      heading: 'Book Chapter 5',
      title: 'Genetic Regulatory Network: Structure and dynamics',
      authors: ['Somvanshi P. R. and Venkatesh K.V'],
      journal: 'Recent trends in Biotechnology, Vol.4, Systems and Synthetic Biology, Studium press USA',
      year: 2013
    },
    {
      heading: 'Book Chapter 6',
      title: 'Computational inference of  gene regulatory networks using CHIP-X data',
      authors: ['Samayaditya Singh, Manjari Kiran, Somvanshi P.R'],
      journal: 'Reverse Engineering of Regulatory Networks, Methods in Molecular Biology", Springer Nature',
      year: 2023
    },
    {
      heading: 'Book Chapter 7',
      title: 'Reverse engineering in Biotechnology,: Role of genetic engineering in synthetic biology',
      authors: ['Gopikrishnan Bijukumar, and Somvanshi P.R'],
      journal: 'Reverse Engineering of Regulatory Networks, Methods in Molecular Biology", Springer Nature',
      year: 2023
    }
  ];
  return (
    <div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Publications</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px', textAlign: 'justify' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {publications.map((publication, index) => (
          <MainCard
            key={index}
            sx={{
              position: 'relative',
              maxWidth: 400,
              boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Card content */}
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom:'40px'}}>
              <div>
                <Typography variant="h4" component="div" gutterBottom style={{ color: '#990000' }}>
                  {publication.heading}
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                  <b>Authors:</b> {publication.authors.join(', ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Year:</b> {publication.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Journal:</b> {publication.journal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Title: </b>
                  {publication.title}
                </Typography>
              </div>

              {/* Button at the bottom */}
              {publication.learnMoreLink && (
                <Button
                  variant="contained"
                  href={publication.learnMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ position: 'absolute', bottom: '10px', left: '80%', right: '-40px', transform: 'translateX(-50%)', background: '#990000' }}
                >
                  Learn More
                </Button>
              )}
            </div>
          </MainCard>
        ))}
      </div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>Book Chapters</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px', textAlign: 'justify' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {book_chapters.map((book_chapter, index) => (
          <MainCard key={index} sx={{ maxWidth: 400, boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            {/* <CardMedia component="img" height="200" image={publication.image} alt={publication.title} /> */}

            <Typography variant="h4" component="div" gutterBottom style={{ color: '#990000' }}>
              {book_chapter.heading}
            </Typography>
            <Typography variant="body2" gutterBottom color="text.secondary">
              <b>Authors:</b> {book_chapter.authors.join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Year:</b> {book_chapter.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Journal:</b> {book_chapter.journal}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Title: </b>
              {book_chapter.title}
            </Typography>
          </MainCard>
        ))}
      </div>
    </div>
  );
};

export default Publications;
