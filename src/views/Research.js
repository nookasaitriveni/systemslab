import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Humansimimg from './Humansim1.png';
import PhytCancerimg from './PhytCancer.png';
import StrECH from '../views/dashboard/Default/LP2.png';
import Chrono from '../views/dashboard/Default/LP3.png';
import Diabetomics from '../views/dashboard/Default/Diabetomics_IR.png';
import { Link as RouterLink } from 'react-router-dom';
const Research = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#800020', display: 'flex', justifyContent: 'center' }}>Research</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}>
        <MainCard key="1" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item sx={12} sm={12} md={4} style={{ padding: '0px' }}>
              {/* "https://admissionxpert.in/wp-content/uploads/2020/09/Clinical-Research-course-min.jpg"*/}
              <img
                src={Humansimimg}
                alt="Systems & Computational Medicine"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item sx={12} sm={12} md={7}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800020' }}>Human Metabolic Endocrine Simulator</h3>
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
        <MainCard key="2" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item sx={12} sm={12} md={4} style={{ padding: '0px' }}>
            {/*"https://wallup.net/wp-content/uploads/2018/09/26/589838-test-tube-abstract-abstraction-cylinder-tubes-glass-bokek-medical-vials-chemistry-biology-science.jpg"*/}
              <img
                src={Chrono}
                alt="Therapeutic  Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item sx={12} sm={12} md={7}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800020' }}>Chronomedicine and Chronotherapeutic Engineering</h3>
                <p>
                The human peripheral circadian rhythm is entrained to the day-night phase of the SCN with the help of cortisol. 
                An unnatural lifestyle perturbations in eating habits, abnormal exposure to light-dark cycle, and work stress 
                affects homeostasis of various peripheral metabolic processes. That gives rise to the symptoms of different 
                systemic diseases like hypertension,cardiovascular disease, diabetes, depression, PTSD, etc. Current treatments 
                do not account for the circadian dynamics of the medications and its PK-PD thereby are associated with several 
                side effects. The Chrono-Med project mainly focuses on developing a mathematical model for the SCN-HPA-Peripheral 
                circadian systems along with the physiological and pharmacological perturbation variables and parameters to 
                determine the phase response in circadian dynamics to the time-dependent administration of cortisol analogues. 
                These computational models are further optimized and recalibrated to the Rat-stress model using animal experiments
                for chronotherapeutics. The Chrono-Med approach provides insight into the phase/ amplitude and period of various
                circadian, inflammatory and HPA variables in response to drug administration, which helps in determining optimal
                dose and timing for various cortisol analogues. The work would provide the foundation for developing chronotherapeutic
                drug delivery systems for inflammatory and metabolic disorders. This work is funded by DST-SERB, Govt. of India.</p> 
                <p>
                Additional areas of research on circadian physiology and chronomedicine:</p> 
                <p>
                - Chrono-Nutrition : Timing the diet and optimal calories for treating chronic diseases</p> 
                <p>
                - Computational model and Chronotherapeutics for Hypertension</p> 
                <p>
                - Computational models for Chronotherapeutic drug delivery systems
                </p>
              </div>
            </Grid>
            {/* <Grid item md={4}>

        </Grid> */}
          </Grid>
        </MainCard>
        <MainCard key="3" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              {/*}"https://www.houston.org/sites/default/files/2019-10/research-lab.jpg"*/}
              <img
                src={StrECH}
                alt="Biomedical and Clinical Informatics"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={7}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800020' }}>StrECH Study: Stress Epidemic and Cardio-Metabolic Health</h3>
                <p>
                Currently there is limited understanding of the aetiology of the cardio-metabolic dysfunction. There are
                limited studies on characterization of stress (psychological aspects) and its clinico-pathological markers.
                A strong association between stress and cardiovascular disease is indicated; however, how psychological 
                stress contributes to sustained hypertension and CVD is not well understood. Although evolutionarily stress
                is supportive for survival under adverse conditions, it is not clear how sustained mild stress analogous to 
                daily work stress transits to pathological effects. Our objectives is to understand neurophysiology of stress
                and its psychosoamtic effects</p>
                <p>
                The current study aims to gather and evaluate human data for blood clinical analysis and psychological stress 
                inventories in order to discover stress indicators in plasma and validate their involvement in determining 
                resilience. In order to study the circadian behavior of stress physiology and its impact on hypertension, we 
                intend to build and evaluate a computational model that incorporates the molecular pathways of the immune system, 
                HPA axis, HPT axis, and circadian clock, which can guide the use of chronotherapy to treat hypertension. 
                Furthermore, to find the diagnostic indicators for resilience or pathological variations of stress and to
                optimize the model parameters, machine learning techniques will be applied to the data from human and animal
                models. In general, this research will contribute to our knowledge of the early mediators of stress pathology 
                and the best treatment approaches for them. The project is funded by the Institute of Eminence grant.</p>
                
              </div>
            </Grid>
            {/* <Grid item md={4}>

        </Grid> */}
                          
            </Grid>
        </MainCard>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              {/*"https://www.industrialmarketingtoday.com/wp-content/uploads/2019/08/reserach-post.jpg"*/}
              <img
                src= {Diabetomics}
                alt="Systems & Computational Medicine"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={7}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800020' }}> Diabetomics: Diabetes Systems Biology  </h3>
                <p>
                 The project is carried in collaboration with AIG Hospitals & Asian Healthcare Foundation along with International partners from 
                 Emory university, Vanderbilt University and Phenome Health (ISB-USA). It involves deep phenotyping of diabetes patients with Type 2 
                 and Type 3 diabetes along with multi-omic characterization. Our role is to provide computational and systems biological support for
                 projects to develop computational models for understanding disease mechanisms and prognostic biomarkers. The objectives of the projects
                 are to understand Islet systems biology, endocrine function and disease transition in chronic pancreatitis to T3 diabetes. We are also 
                 working towards a large sample study on Diabetes Phenome for Indian sample. We use extensive computational modelling along with Artificial
                 Intelligence and Machine learning approches for multi-omic data analytics. The project is supported under the Centre for Translational Research 
                 for Endocrine pancrease and Diabetes funded by Wellcome Trust-DBT India Alliance.
                 </p>
              </div>
            </Grid>
             {/* <Grid item md={4}>

        </Grid> */}
         </Grid>
        </MainCard>
        <MainCard key="5" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              {/*"https://www.industrialmarketingtoday.com/wp-content/uploads/2019/08/reserach-post.jpg"*/}
              <img
                src={PhytCancerimg}
                alt="Systems & Computational Medicine"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={7}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800020' }}> Phyto-pharmaceutical Drug Discovery & Delivery for Cancer</h3>
                <p>
                In view of the surge in occurence of cancers, the poor efficacy of cancer therapies and exceeding costs of treatments, 
                particularly for the later stages of cancer, better cancer therapies with lesser side-effects are the need of the hour. 
                Phytochemicals are reported to have fewer side effects and may be cost effective for cancer treatment. These would provide 
                better potential for identifying new drugs using the current repositories of phytochemical compounds. The current scenario 
                needs a better filtering protocol to screen out the potential hits from these repositories against various targets of 
                cancer. PhytCancer project focuses on the identification of novel anticancer phytochemical targets and their leads by 
                implementing the target-lead search, molecular docking and dynamics analysis as a primary screening of leads. The project
                further includes a comparative analysis of the Phytochemical Library with FDA approved drugs based on structure and
                pharmacophore data, to filter out those phytochemicals that have properties like potential cancer drugs. The filtered hits
                and their targets will be further validated based on in vitro & in vivo analysis. Moreover, the novel drug delivery methods 
                based on the biophysical characterizations will be dsigned and tested using computational models.
                </p>
              </div>
            </Grid>

          </Grid>
        </MainCard>
      </div>
    </div>
  );
};

export default Research;
