import React from 'react';
import MainCard from '../ui-component/cards/MainCard';
const Teaching = () => {
  // Sample data for members
  const members = [
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
      <h1 style={{ color: '#800000', display: 'flex', justifyContent: 'center' }}>Courses</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {/* {members.map((member) => (
          <MainCard key={member.id} style={{ width: '650px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src={member.image}
              alt={member.name}
              style={{ width: '100%', height: '160px', objectFit: 'cover', transform: 'scale(1.3)' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ color: '#800000' }}>{member.name}</h3>
              <p style={{ color: 'black' }}>{member.designation}</p>
              <p>{member.description}</p>
            </div>
          </MainCard>
        ))} */}
          <MainCard key='1' style={{ width: '650px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src='https://blog.f1000.com/wp-content/uploads/2017/01/Header-Image-crop-1024x559.jpg'
              alt='1'
              style={{ width: '100%', height: '190px', objectFit: 'cover', transform: 'scale(1.3)' }}
            />
            <div style={{ padding: '20px 10px 10px 10px' }}>
              <h3 style={{ color: '#800000' }}>SB 452 - Computationa
              l Systems Biology [3 credits]</h3>
              <p style={{ color: 'black' }}>Overview of contents</p>
              <h3>Unit: 1</h3>
              <p>a Introduction to Computational Systems Biology, Types of data used in modeling
        Types of models (gene regulatory, metabolic, Signal pathway, disease, population)
        types of modeling frameworks (Deterministic vs Stochastic; Static vs. Dynamics
        Robustness and Stability of systems<br/>
        b. Methods used in systems biology (Ordinary differential equations (ODE) <br/>▪ Linear ODEs; Non-linear ODEs, steady states<br/>
        ▪ Stability analysis - Linear systems; Non-linear systems; Phase plane
        analysis; Stable and unstable limit cycles; Oscillations; Bistability; Positive
        and negative feedback<br/>
        ▪ Parameter estimation and validation – Data sources, Regression techniques
        (maximum likelihood, least squares methods), optimization algorithms<br/>
        ▪ Michaelis-Menten and Hill function</p>
        <h3>Unit: 2</h3>
              <p>a Logical modeling, Logic gates; Graph construction; Boolean networks<br/>
b Metabolic control analysis (MCA), Control and elasticity coefficients; Summation
theorems, connectivity relations theorems<br/>
c Biochemical Systems Theory (BST), Power law representation; S-Systems and
General Mass Action; Comparison of MCA and BST modeling approaches<br/>
d Mathematical representation of metabolism, Flux Balance Analysis (FBA): Linear
Programming; Constraints; Formulating an FBA problem, introducing constraints,
optimization; Computational tools for FBA, examples of FBA using modelnetworks.<br/>
e Tools and databases: SBML; Modeling tools- Gepasi, Virtual cell, Cell Designer,
GENESIS</p>
            </div>
        </MainCard>

        <MainCard key='3' style={{ width: '650px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src='https://ggnindia.dronacharya.info/blog/wp-content/uploads/2020/02/Compter-Technology-in-Medical-Application-768x461.jpg'
              alt='2'
              style={{ width: '100%', height: '190px', objectFit: 'cover', transform: 'scale(1.3)' }}
            />
            <div style={{ padding: '20px 10px 10px 10px' }}>
              <h3 style={{ color: '#800000' }}>SB 472 - Systems and Computational Medicine [2 credits]</h3>
              <p style={{ color: 'black' }}>Overview of contents</p>
              <h3>Unit I: Systems Physiology (8 hours):</h3>
              <p>
Mathematical models and quantification of Core principles of physiology- pressure and flow, physical and electrical
properties, circulatory system, heart & blood, respiratory system, Muscular system, endocrine system, renal
              system, gastrointestinal system and nervous system</p>
            <h3>
Unit II: Systems Pharmacology (8 hours):</h3><p>
Emergence of Quantitative Systems Pharmacology (QSP) modelling, modeling drug exposure and drug response
at the systemic level, Engineering approach to physiologically based pharmacokinetic and pharmacodynamic (PBPKPD) modeling, Computational tools in the assistance of Personalized Healthcare, QSP in biomedical research,
QSP on cancer drug delivery to target sites</p><h3>
Unit III: Biomedical Informatics and data analytics (8 hours):</h3><p>
Biomedical informatics pipeline, tools used in big data analytics in biomedical research, biostatistical modelling,
Sample size and power estimation, statistical inference in clinical research: two or more samples, samples with
correlations and associations, Causal inference in biomedical data, Integrative big data analysis- Multi-omic
biomedical data analysis, Big data and drug discovery </p>
            </div>
          </MainCard>

        <MainCard key='2' style={{ width: '650px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src='https://thumbs.dreamstime.com/b/image-man-his-lungs-front-him-generative-ai-image-man-his-lungs-front-him-generative-ai-270892192.jpg'
              alt='2'
              style={{ width: '100%', height: '190px', objectFit: 'cover', transform: 'scale(1.3)' }}
            />
            <div style={{ padding: '20px 10px 10px 10px' }}>
              <h3 style={{ color: '#800000' }}>SB 501 - Biosystems Modelling and Simulations [2 credits]</h3>
              <p style={{ color: 'black' }}>Overview of contents</p>
              <h3>Unit: 1</h3>
              <p>Modeling Molecular Biosystems: [12 hours]<br/>
                a) Circadian rhythms<br/>
                b) Quorum sensing<br/>
                c) Chemotaxis<br/>
                d) Wound healing<br/>
                e) Homoeostasis<br/>
                f) Apoptosis<br/>
                g) The phage λ genetic switch<br/>
              h) Kinetic proofreading
            </p>
<h3>Unit: 2</h3>
            <p>
Modeling evolution and ecological processes: [12 hours]<br/>
a) Evolutionary Game Theory: Evolution, Game theory, Dominant and dominated strategies, Evolutionary Stable
Strategy, Prisoners' Dilemma, Hawk and Dove game, Stag-hunt game, Chicken-out game, Tit-for-Tat game,
Eusociality, kin-selection and Spatial games, Always defect (ALLD), Always cooperate (ALLC), Generous TFT,
Win-stay-Lose-Shift (WSLS)<br/>
b) Modeling Natural selection, Genetic drift and Mutation for finite and infinite populations.<br/>
c) Epidemiological models, Infectious disease modelling,<br/>
d) Ecological models, predator-prey models and its variants<br/>
              e) Applications to human, animal and plant systems
            </p>
            <h3>Unit: 3</h3>
            <p>
Advanced Modeling and Bioengineering applications: 12 Hours<br/>
a. Synthetic Biology: Parts, devices and systems, BioBricks and iGEM Modules, Toggle switch, repressilator and
medical applications<br/>
b. Neural Modeling: Hodgkin – Huxley Model, Markov Models, Action Potentials, Voltage – activated ion
channels, Nernst equation, Electrical properties of neurons<br/>
c. Stochastic modeling and simulations, Gillespie algorithm, Chemical master equation, Stochastic ODEs<br/>
d. Genetic engineering and metabolic engineering applications<br/>
e. Biomedical engineering applications. </p>
            </div>
        </MainCard>
     
      </div>
    </div>
  );
};

export default Teaching;
