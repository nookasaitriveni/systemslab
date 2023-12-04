import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Link, Grid } from '@mui/material';
import Humansimimg from './Humansim1.png';
import { useLocation } from 'react-router-dom';

const HumenSim = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>HuMEnS Project</h1>
      <div style={{ gap: '20px', width: '95%' }} spacing={2}>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src={Humansimimg}
                alt="Human Metabolic Endocrine Simulator"
                style={{ width: '100%', objectFit: 'cover', height: '100%', padding: '10px;', borderRadius: '30px;' }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#990000' }}>Human Metabolic Endocrine Simulator:</h3>
                <p>
                Human physiology is an ensemble of various biological processes spanning from intracellular molecular interactions 
                to the whole body phenotypic response. Systems biology endures to decipher these multi-scale biological networks and 
                bridge the link between genotype to phenotype. The structure and dynamic properties of these networks are responsible 
                for controlling and deciding the phenotypic state of a cell. Several cells and various tissues coordinate together to 
                generate an organ level response which further regulates the ultimate physiological state. The overall network embeds 
                a hierarchical regulatory structure, which when unusually perturbed can lead to undesirable physiological state termed 
                as disease. Here, we treat a disease diagnosis problem analogous to a fault diagnosis problem in engineering systems. 
                Accordingly we review the application of engineering methodologies to address human diseases from systems biological 
                perspective. The systems biological approach with mathematical modeling of the biological networks serves as an important
                way to assess these diseases.</p> 
                <p>
                The project involves development of human metabolic endocrine simulator that integrates the
                metabolism with endocrine signaling and transcriptional networks to analyze the complexity of feedbacks, cross-talks and 
                system level behavior in the homeostatic regulation of blood metabolites. While the kinetic models and rate parameters are
                partly obtained from the literature, we work on developing the models for integration of pathways and feedbacks in the 
                network. A composite model was developed which can simulate metabolic response for resting, exercise and postprandial states.
                The model consists of central metabolic pathways in each tissue type integrated with the endocrine regulation by insulin,
                glucagon, epinephrine, cortisol, thyroid hormone, neurotransmitters along with several transcription regulators. The model 
                can serve as the basis for analyzing metabolic responses under various of meal and lifestyle conditions. Moreover it helps 
                in understanding the whole body human metabolism with a systems engineering perspective. The model can be used to study the 
                possible design defects that can deregulate the homeostasis leading to endocrine-metabolic diseases. Such a model and analysis
                aid in identification of potential drug targets and designing therapies to effectively treat these diseases.
                </p>
              </div>
            </Grid>
            {/* <Grid item md={4}>

        </Grid> */}
          </Grid>
        </MainCard>
      </div>
    </div>
  );
};

export default HumenSim;
