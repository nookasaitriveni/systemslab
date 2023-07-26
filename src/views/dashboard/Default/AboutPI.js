import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import './AboutSection.css';
import prs from './PRS.jpg';
const AboutSection = () => {
  return (
    <div>
      <Card className="about-card">
        <Grid container spacing={2}>
          <Grid item xs={0} sm={0} md={5} style={{ margin: 'auto' }} className="hide-mobile">
            <Avatar alt="PI" src={prs} className="user-avatar" />
          </Grid>
          <Grid item xs={12} sm={12} md={7} className="about-content">
            <Typography variant="h1" style={{ fontSize: '30px', color: '#800000', display: 'flex', justifyContent: 'center' }}>
              About PI
            </Typography>
            <Grid item xs={12} sm={12} md={0} style={{ margin: 'auto' }} className="hide-web">
              <Avatar alt="PI" src={prs} className="user-avatar" />
            </Grid>
            <Typography variant="body2" style={{ fontSize: '17px' }}>
            <br />
            <b>Experience</b>
            <br />
            <br />
            PI and Assistant Professor, Dept. of Systems and Computational Biology, University of Hyderabad, (Aug 2020 onwards)  <br />
            Sr. Scientist, Systems Biology and Metabolic Engg. Lab, Dept. of Chemical Engg., IIT Bombay, INDIA (April 2019- May 2020)<br />
            Harvard Associate, Bioengineering Div., Harvard School of Engineering and Applied Sciences, USA (April 2019-Mar 2021)  <br />                             
            Research Associate, Bioengineering Div., Harvard School of Engineering and Applied Sciences, USA (Aug 2018-Mar 2019)<br />
            Post-Doctoral Fellow, Bioengineering Div., Harvard  School of Engineering and Applied Sciences,  USA (Aug 2015-Mar 2019)<br />
            Sr. Research Scientist, Biosystems Engg. Lab, Dept. of Chemical Engg., IIT Bombay, INDIA (Jan 2015-July 2015)<br />
            Research Associate, Biosystems Engg. Lab, Dept. of Chemical Engg., IIT Bombay, INDIA (June 2014-Dec 2014)<br />
            Technologist (R&D), Bio-Process Development, DSM Chemical Division, New Delhi, INDIA (Nov 2006- June 2009)<br />
            Project Scholar, Dept. Fermentation Tech. and Bio-Engineering, CFTRI Mysore, INDIA (May 2005-Oct 2006)<br />
            <br />
            <b>Trainings</b>
            <br />
            <br />
            Systems Biology and Chronotherapeutics, Harvard School of Engineering and Applied Sciences, Harvard University, USA.<br />
            Biomedical Control Engineering, Harvard School of Engineering and Applied Sciences, Harvard University, USA.<br />
            Network Medicine, Chrono-medicine, Sleep medicine and Lifestyle Medicine, Harvard Medical School, USA.<br />
            AI in Healthcare and Medicine, Stanford University School of Medicine, Stanford University, USA.<br />
            Biomedical Data Science, Harvard School of Public Health, Harvard University, USA.<br />
            Principal and Practice of Clinical Research, National Institute of Health-NIH, USA.<br />
            Epidemiological Research in Public Health, Imperial College of London, UK. <br />
            <br />
            <br />
            <b>Memberships</b>
            <br />
            <br />
            FRSPH: Fellow of The Royal Society for Public Health (UK)<br />
            FISC:  Fellow of The Indian Society for Chronomedicine<br />
            Member of The Physiological Society (UK)       <br />
            Member of the European Society for Preventive Medicine (UK)  <br />
            Life Member of The Indian Society for Chronomedicine (ISCM)<br />
            Member of International Society for Evolution, Medicine and Public Health (ISEMPH)<br />
            <br />
            <br />
            <b>Education</b>
            <br />
            <br />
            Ph.D, Biosystems Engineering, Dept. of Chemical Engg., IIT Bombay, INDIA, 2014.<br />
            M.B.A, Professional with Operations and Projects Management, NIBM, INDIA, 2009.<br />
            M.Tech, Chemical Technology (Food & Bioprocess Engg.), LIT Nagpur, INDIA, 2006.<br />
            B.Tech, Chemical Technology, UDCT Aurangabad, INDIA, 2004.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutSection;
