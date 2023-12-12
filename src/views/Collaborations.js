import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import './Collaborations.css';
import MainCard from '../ui-component/cards/MainCard';
import sasikala from './Collaborators_imgs/sasikala_mitnala.jpg';
import Rupjyoti from './Collaborators_imgs/rupjyoti_talukdar.jpg';
import Anura from './Collaborators_imgs/Dr-Anura-V-Kurpad.jpg';
import VenkatNarayan from './Collaborators_imgs/venkat-narayan.jpg';
import AlvinPowers from './Collaborators_imgs/alvin_C_power.webp';
import SynthiaMellon from './Collaborators_imgs/Sindy-Mellon.jpg';
import OwenWolkowitz from './Collaborators_imgs/owen_wolkvitz.jpg';
import LeroyHood from './Collaborators_imgs/Lee-Hood-150x150.png';
import PrasadTammineni from './Collaborators_imgs/prasad_tammeni.jpg';
import AnilKumarPasupulati from './Collaborators_imgs/Anil_Kumar_Pasupulati.jpg';
import Vivek from './Collaborators_imgs/Vivek_thakur.jpg';
import IrfanAhmadGhazi from './Collaborators_imgs/Irfan_A_ghazi.jpg';
import BR_Shamana from './Collaborators_imgs/BR_shamana.jpg';
import Doyle_Francis from './Collaborators_imgs/Doyle_Francis.jpg';
import Ram_Reddy from './Collaborators_imgs/Dr.-B.-Ram-Reddy.jpg';
import Hampapathalu from './Collaborators_imgs/Hampapathalu-Nagarajaram.jpg';
import meena from './Collaborators_imgs/Meena-Hariharan-300x238.jpeg';
import kvventakatesh from './Collaborators_imgs/Prof_K_V_Venkatesh.jpg';
import AnupamaRow from './Collaborators_imgs/anupamarow.jpeg';
import Aravind from './Collaborators_imgs/Aravind-Kumar-Rengan.jpg';
import Hari from './Collaborators_imgs/HariprasadKodamana.jpeg';
import Vinod from './Collaborators_imgs/Vinod_new.jpg';

const Collaborations = () => {
  const members = [
    {
      id: 1,
      name: 'Dr. Owen M. Wolkowitz',
      designation: "Professor of Psychiatry, UCSF Weill Institute for Neuroscience, USA",
      title_of_research: 'Advisor on The StrECH Study',
      image: OwenWolkowitz
    },
    {
      id: 2,
      name: 'Dr. Synthia Mellon',
      designation: "Professor Obs/Gyn, Psychoneuroendocrinology Lab, UCSF, USA",
      title_of_research: 'Advisor on The StrECH Study',
      image: SynthiaMellon
    },
    {
      id: 3,
      name: 'Prof. Francie J Doyle III',
      designation: "Dean, Harvard School of Engineering and Applied Sciences, Harvard University, USA",
      title_of_research: 'PI: PTSD Project',
      image: Doyle_Francis
      
    },
    {
      id: 4,
      name: 'Dr. Leroy Hood',
      designation: "Co-founder and Chief Strategy Officer, Institute for Systems Biology, USA",
      title_of_research: 'Advisor: Proposed Phenome Health- Diabetes Project',
      image: LeroyHood
    },
    {
      id: 5,
      name: 'Dr. Alvin C. Powers',
      designation: "Director, Division of Diabetes and Endocrinology, Vanderbilt Diabetes Center, USA",
      title_of_research: 'Co-PI: Proposed Wellcome Trust project on T3 Diabetes',
      image: AlvinPowers
    },
    {
      id: 6,
      name: 'Dr. K M Venkat Narayan',
      designation: "Director of Emory Global Diabetes Research Center",
      title_of_research: 'Co-PI: Proposed Wellcome Trust project on T3 Diabetes',
      image: VenkatNarayan
    },
    {
      id: 7,
      name: 'Dr M. Sasikala',
      designation: 'Director of Research, Asian Institute of Gastroenterology',
      title_of_research: 'PI: Proposed Wellcome Trust and ICMR project on T3 Diabetes',
      image: sasikala
    },
    {
      id: 8,
      name: 'Dr. Rupjyoti Talukdar',
      designation: 'Director of Pancreatology, Asian Institute of Gastroenterology',
      title_of_research: 'Co-PI: Proposed ICMR project on T3 Diabetes',
      image: Rupjyoti
    },
    {
      id: 9,
      name: 'Dr. Anura V Kurpad',
      designation: "Professor of Physiology, St. John's Medical College",
      title_of_research: 'Co-PI: Proposed Wellcome Trust project on T3 Diabetes',
      image: Anura
    },
    
    {
      id: 10,
      name: 'Prof. Meena Hariharan',
      designation: "Professor, Centre for Health Psychology, UoH",
      title_of_research: 'Co-PI on The StrECH Study',
      image: meena
      
    },
    {
      id: 11,
      name: 'Prof. Anupama Row',
      designation: "Cheif Medical Officer, University Health Centre, UoH",
      title_of_research: 'Co-PI on The StrECH Study',
      image: AnupamaRow
       
    },
    {
      id: 12,
      name: 'Prof. B.R. Shamanna',
      designation: "Professor, School of Medical Sciences, UoH",
      title_of_research: 'Advisor on The StrECH Study',
      image: BR_Shamana
    },
           
    {
      id: 13,
      name: 'Dr. Ram Reddy',
      designation: "HoD & Professor of Physiology, Apollo Institute of Medical Sciences & Research",
      title_of_research: 'Biomedical Engineering for Hypertension and Diabetes',
      image: Ram_Reddy
    },
    {
      id: 14,
      name: 'Prof.K.V. Venkatesh',
      designation: "Professor, Systems Biology and Metabolic Engineering Lab, IIT Bombay",
      title_of_research: 'Modelling physiological systems',
      image:kvventakatesh
    },
    {
      id: 15,
      name: 'Dr.A.K. Rengan',
      designation: "Asst. Professor, P-NAS Lab, Dept. of Biomedical Engineering, IIT Hyderabad",
      title_of_research: 'Modelling Nano-medicine drug delivery',
      image:Aravind
    },
    {
      id: 16,
      name: 'Dr.Hariprasad Kodamana',
      designation: "Associate Professor, CAPS Lab, Dept. of Chemical Engineering and Artificial Intelligence, IIT Delhi",
      title_of_research: 'Model predictive control for Chronotherapeutic drug delivery',
      image:Hari
    },
    {
      id: 17,
      name: 'Dr. Prasad Tammineni',
      designation: "Assistant Professor, Dept. Animal Biology, UoH",
      title_of_research: 'Neurodegenerative disease',
      image: PrasadTammineni
    },
    {
      id: 18,
      name: 'Dr. Anil Kumar Pasupulati',
      designation: "Professor, Dept. Biochemistry, UoH",
      title_of_research: 'Renal disease',
      image: AnilKumarPasupulati
    },
    {
      id: 19,
      name: 'Prof. H.A. Nagarajaram',
      designation: "HoD & Professor, Dept. Systems and Computational Biology, UoH",
      title_of_research: 'Mathematical modelling of Cell Signalling',
      image: Hampapathalu
     
    },
    {
      id: 20,
      name: 'Dr. Vivek Thakur',
      designation: "Assistant Professor, Dept. Systems and Computational Biology, UoH",
      title_of_research: 'Gut Microbiome',
      image: Vivek
    },
    {
      id: 21,
      name: 'Dr. Irfan Ahmad Ghazi',
      designation: "Professor, Dept. Plant Sciences, UoH",
      title_of_research: 'Antimicrobial Phytochemicals',
      image: IrfanAhmadGhazi
    }

  ];
  return (
    <div>
      <Typography variant="h1" sx={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>
        Collaborations
      </Typography>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px', textAlign: 'justify' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {members.map((member) => (
          <MainCard key={member.id} style={{ width: '350px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <div class="well well-white mini-profile-widget">
              <div class="image-container">
                {' '}
                <img src={member.image} alt={member.name} class="avatar img-responsive"  />
              </div>
              <div class="details">
                <h3 style={{ color: '#990000' }}>{member.name}</h3>
                <hr />
                <div><b>{member.designation}</b></div>
                <div>{member.title_of_research}</div>
                {/* <p class="mg-top-20">
                  {' '}
                  <a href="javascript:void(0);" class="btn btn-blue">
                    {' '}
                    <i class="fa fa-facebook fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-info">
                    {' '}
                    <i class="fa fa-twitter fa-fw"></i>{' '}
                  </a>{' '}
                  <a href="javascript:void(0);" class="btn btn-red">
                    {' '}
                    <i class="fa fa-google-plus fa-fw"></i>{' '}
                  </a>
                </p> */}
              </div>
            </div>
          </MainCard>
        ))}
      </div>

    </div>
  );
};

export default Collaborations;
