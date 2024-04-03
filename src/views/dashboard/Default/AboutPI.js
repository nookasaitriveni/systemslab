import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import './AboutSection.css';
import prs from './PRS1.jpg';
const AboutSection = () => {
  return (
    <Card style={{ padding: '20px', boxShadow: '3px 6px 9px 1px rgba(0, 0, 0, 0.2)' }}>
      <h1 style={{ fontSize: '30px', color: '#800020', textAlign: 'center' }}>About PI</h1>
      <div className="about-card">
        <Grid container spacing={2}>
          <Grid item xs={0} sm={0} md={5} style={{ margin: 'auto', marginTop: '0px' }} className="hide-mobile">
            <Avatar alt="PI" src={prs} className="user-avatar" style={{ marginTop: '15px' }} />
          </Grid>
          <Grid item xs={12} sm={12} md={7} className="about-content">
            <Grid item xs={12} sm={12} md={0} style={{ margin: 'auto' }} className="hide-web">
              <br />
              <Avatar alt="PI" src={prs} className="user-avatar" mt={1} />
            </Grid>
            <br />
            <br />
            <b style={{ color: '#800020', fontSize: '23px', textAlign: 'start' }}>Dr. Pramod Rajaram Somvanshi</b>
            <Typography variant="body2" style={{ fontSize: '17px' }}>
             <br />
             <b style={{ color: '#800020',fontSize: '20px' }}>Experience</b>
            <br />
            <br />
            <b>PI and Assistant Professor</b>, Dept. of Systems and Computational Biology, University of Hyderabad, India (Aug 2020 onwards) <br />
            <b>CoPI and Faculty</b>, DBT/Wellcome Trust India Alliance-Asian Centre for Endocrine Pancreas Research, India, (Mar 2024 onwards) <br /> 
            <b>Sr. Scientist</b>, Systems Biology and Metabolic Engg. Lab, Dept. of Chemical Engg., IIT Bombay, India (April 2019- May 2020)<br />
            <b>Harvard Associate</b>, Bioengineering Div., Harvard School of Engineering and Applied Sciences, USA (April 2019-Mar 2021)  <br />
            <b>Research Associate</b>, Bioengineering Div., Harvard School of Engineering and Applied Sciences, USA (Aug 2018-Mar 2019)<br />
            <b>Post-Doctoral Fellow</b>, Bioengineering Div., Harvard  School of Engineering and Applied Sciences,  USA (Aug 2015-Mar 2019)<br />
            <b>Sr. Research Scientist</b>, Biosystems Engg. Lab, Dept. of Chemical Engg., IIT Bombay, India (Jan 2015-July 2015)<br />
            <b>Research Associate</b>, Biosystems Engg. Lab, Dept. of Chemical Engg., IIT Bombay, India (June 2014-Dec 2014)<br />
            <b>Technologist (R&D)</b>, Bio-Process Development, DSM Chemical Division, New Delhi, India (Nov 2006- June 2009)<br />
            <b>Project Scholar</b>,  Dept. Fermentation Tech. and Bio-Engineering, CFTRI Mysore, India (May 2005-Oct 2006)<br />
            <br />
            <b style={{ color: '#800020',fontSize: '20px' }}>Trainings</b>
            <br />
            <br />
            <b>Systems Biology and Chronotherapeutics</b>, Harvard School of Engineering and Applied Sciences, Harvard University, USA.<br/>
            <b>Network Medicine and Systems Pharmacology</b>, Harvard Catalyst, Harvard Medical School, Harvard University, USA.<br/>
            <b>Chronomedicine and Sleep medicine</b>, Division of Sleep Medicine, Harvard Medical School, Harvard University, USA.<br/>
            <b>Biomedical Control Engineering</b>, Harvard School of Engineering and Applied Sciences, Harvard University, USA.<br/>
            <b>Lifestyle Medicine for Chronic Diseases</b>, Institute of Lifestyle Medicine, SRH & Harvard Medical School, USA.<br/>
            <b>Biomedical Data Science</b>, T. H. Chan Harvard School of Public Health, Harvard University, USA.<br/>
            <b>Biostatistics in Healthcare</b>, Bloomberg School of Public Health, John Hopkins University, USA.<br/>
            <b>AI in Healthcare & Medicine</b>, Stanford University School of Medicine, Stanford University, USA.<br/>
            <b>Principal and Practice of Clinical Research</b>, National Institute of Health, USA.<br/>
            <b>Causal Inference from Epidemiological Data</b>, University of Pennsylvania, USA. <br/>
            <b>Epidemiological Research in Public Health</b>, Imperial College of London, UK. <br />
            <br />
            <b style={{ color: '#800020',fontSize: '20px' }}>Memberships</b>
            <br />
            <br />
            <b>FRSPH</b>: Fellow of The Royal Society for Public Health (UK)<br />
            <b>FISCM</b>:  Fellow of The Indian Society for Chronomedicine<br />
            Member of The Physiological Society (UK) <br />
            Member of the European Society for Preventive Medicine (UK)  <br />
            Member of International Society for Evolution, Medicine and Public Health (ISEMPH, USA)<br />
            <br />
            <b style={{ color: '#800020',fontSize: '20px' }}>Education</b>
            <br />
            <br />
            <b>Ph.D</b>, Biosystems Engineering, Dept. of Chemical Engg., IIT Bombay, India, 2014.<br />
            <b>M.B.A</b>, Professional with Operations and Projects Management, NIBM, India, 2009.<br />
            <b>M.Tech</b>, Chemical Technology (Food & Bioprocess Engg.), LIT Nagpur, India, 2006.<br />
            <b>B.Tech</b>, Chemical Technology, UDCT Aurangabad, Maharashtra, India, 2004.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default AboutSection;
