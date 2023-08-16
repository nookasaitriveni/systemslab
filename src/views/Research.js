import React, { useEffect, useRef, useState } from 'react';
import MainCard from '../ui-component/cards/MainCard';
import { Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
const Research = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#800000', display: 'flex', justifyContent: 'center' }}>Research</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}>
        <MainCard key="1" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item sx={12} sm={12} md={4} style={{ padding: '0px' }}>
              <img
                src="https://admissionxpert.in/wp-content/uploads/2020/09/Clinical-Research-course-min.jpg"
                alt="Systems & Computational Medicine"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item sx={12} sm={12} md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800000' }}>Systems & Computational Medicine:</h3>
                <p>
                  <span>
                    Development of <b>Human Metabolic Endocrine&nbsp;Simulator&nbsp;</b>(
                    <b>
                      <RouterLink className="route-link" to="/humensim">
                        HuMEnS
                      </RouterLink>{' '}
                      project
                    </b>
                    ). Computational mechanistic modelling for systems physiology and pharmacology to identify disease mechanisms, drug
                    targets and therapy design for&nbsp;
                  </span>
                  <span>systemic cardiometabolic,&nbsp;</span>
                  <span>neurological and circadian disorders.</span>
                  <span>Computational phytochemical drug discovery for cancer</span>
                  <span>
                    (
                    <b>
                      <RouterLink className="route-link" to="/phytcancer">
                        Phyt-Cancer
                      </RouterLink>{' '}
                      project
                    </b>
                    ).
                  </span>
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
              <img
                src="https://wallup.net/wp-content/uploads/2018/09/26/589838-test-tube-abstract-abstraction-cylinder-tubes-glass-bokek-medical-vials-chemistry-biology-science.jpg"
                alt="Systems & Computational Medicine"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item sx={12} sm={12} md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800000' }}>Biomedical and Clinical Informatics:</h3>
                <p>
                  <span>
                    B
                    <span id="docs-internal-guid-bc959125-7fff-8400-0994-659ece061481">
                      ig-data analytics for complex diseases to identify&nbsp;
                    </span>
                    multi-omics biomarkers from network based disease&nbsp;
                  </span>
                  <font color="#424242">signatures using&nbsp;</font>
                  <span>artificial intelligence,</span>
                  <span>
                    &nbsp;machine learning,&nbsp; causal analysis and mechanistic models. Analysis of clinical and biomedical patient data
                    for{' '}
                  </span>
                  <b>personalized and precision&nbsp;medicine</b>
                  <span>
                    {' '}
                    application. The{' '}
                    <b>
                      <RouterLink className="route-link" to="/thestrech">
                        StreCH study
                      </RouterLink>
                    </b>{' '}
                    and&nbsp;{' '}
                    <b>
                      <RouterLink className="route-link" to="/t3diabetes">
                        T3-Diabetes project
                      </RouterLink>
                    </b>
                    .
                  </span>
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
              <img
                src="https://www.houston.org/sites/default/files/2019-10/research-lab.jpg"
                alt="Therapeutic  Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800000' }}>Therapeutic Engineering:</h3>
                <p>
                  <span>
                    Design of biomedical control system for <b>c</b>
                    <span id="docs-internal-guid-e024cb6c-7fff-7f18-a3b2-5b9e60b53d5b">
                      <b>hronotherapeutic drug delivery and chronomedicine.</b>&nbsp;A
                    </span>
                    nalysis of circadian neuro-endocrine-immune
                  </span>
                  <span>
                    &nbsp;and metabolic dynamics for&nbsp;
                    <span id="docs-internal-guid-e024cb6c-7fff-7f18-a3b2-5b9e60b53d5b">
                      treatment of systemic inflammation, metabolic and neurological disorders.&nbsp;
                    </span>
                  </span>
                  <span>
                    Genome-scale metabolic engineering for biomedical applications. The{' '}
                    <b>
                      <RouterLink className="route-link" to="/chronomed">
                        Chrono-Med project
                      </RouterLink>
                    </b>
                    .
                  </span>
                </p>
              </div>
            </Grid>
            {/* <Grid item md={4}>

        </Grid> */}
          </Grid>
        </MainCard>
        <MainCard key="4" style={{ boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)', padding: '0px', marginTop: '20px' }}>
          <Grid container spacing={2} style={{ padding: '0px' }}>
            <Grid item md={4} style={{ padding: '0px' }}>
              <img
                src="https://www.industrialmarketingtoday.com/wp-content/uploads/2019/08/reserach-post.jpg"
                alt="Life Systems Engineering"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
            </Grid>
            <Grid item md={8}>
              <div style={{ padding: '5px' }}>
                <h3 style={{ color: '#800000' }}>Life Systems Engineering:</h3>
                <p>
                  <span>Modelling and analysis of natural systems based on quantification of&nbsp;</span>
                  <span>living systems theory</span>
                  <span>
                    <b>&nbsp;</b>including areas of evolutionary biology, population dynamics, ecosystem, environment and psycho-social
                    determinants of human behavior&nbsp;
                  </span>
                  <span>for&nbsp;</span>
                  <span>engineering sustainable life</span>
                  <span>
                    &nbsp;<b>and&nbsp;</b>
                  </span>
                  <b>public health</b>
                  <span>
                    . The{' '}
                    <b>
                      <RouterLink className="route-link" to="/healthsurf">
                        HealthSurf
                      </RouterLink>
                    </b>{' '}
                    <b>project</b>.
                  </span>
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

export default Research;
