import React, { Component } from 'react';
import './Collaborationslogo.css';
import AIG_logo2 from './Collaborations_logos/AIG_logo2.png';
import Apolo_IMSR from './Collaborations_logos/Apollo_IMSR-logo.jpg';
import Apolo_IMSR2 from './Collaborations_logos/Apolo_IMSR-logo-rev2.png';
import Asian_health_care_foundation from './Collaborations_logos/Asian_health_care_foundation.png';
import EMORY_logo from './Collaborations_logos/Emory_GDRC_logo.jpg';
import harvard_school_engineering_and_applied_sciences_logo from './Collaborations_logos/SEAS_Logo.webp';
import Harvard_logo from './Collaborations_logos/SEAS_Logo.webp';
import HMS1 from './Collaborations_logos/HMS1.png';
import IIPH from './Collaborations_logos/IIPH_Hyderabad.jpg';

import IIT_Hyderabad_Insignia from './Collaborations_logos/IIT_Hyderabad_Insignia.svg.png';
import Indian_Institute_of_Technology_Bombay_Logo from './Collaborations_logos/IITB_logo1.png';
import IITD_Logo from './Collaborations_logos/IITD_logo1.jpg';
import ISB_logo_lt from './Collaborations_logos/ISB_logo_lt-1.png';
import logo_UCSF_signature_0 from './Collaborations_logos/UCSF_logo.jpg';
import logo_UCSF_Med from './Collaborations_logos/UCSF_Med_logo.jpg';
import logo_UCSF_Neuro from './Collaborations_logos/UCSF_WIN_Logo.png';
import Johns_Medical_College_logo from './Collaborations_logos/St._Johns_Res_logo.png';
import UCSF_PNE from './Collaborations_logos/UCSF_PNE Logo.png';
import UCSF_WIN_Logo from './Collaborations_logos/UCSF_WIN_Logo.png';
import VanderBilt from './Collaborations_logos/Vanderbilt_University_Medical_Center.jpg';
import Phenome from './Collaborations_logos/Phenome-Health.png';
import ISM from './Collaborations_logos/IchanSM.png';

import NIN from './Collaborations_logos/NIN_logo1.jpg';
import IIITH from './Collaborations_logos/IIITH_logo.jpeg';
import { Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
export default class Collaborationslogos extends Component {
  render() {
    return (<div>
      
      <Typography variant="h2" sx={{ color: '#800000', display: 'flex', justifyContent: 'left' }}>
      <br/>
          Our Collaborations
        </Typography>
         <div className="logo-container">
          
        <div>
          <img src={Harvard_logo} alt="Logo 1" className="logo" />
          <img src={HMS1} alt="Logo 1" className="logo" /> 
          <img src={logo_UCSF_Med} alt="Logo 1" className="logo" />
          <img src={ISM} alt="Logo 1" className="logo" />
          {/*<img src={logo_UCSF_Neuro} alt="Logo 1" className="logo" />*/}
          {/*<img src={Phenome} alt="Logo 1" className="logo" />*/}
          <img src={EMORY_logo} alt="Logo 1" className="logo" />
          <img src={VanderBilt} alt="Logo 1" className="logo" />
          <img src={ISB_logo_lt} alt="Logo 1" className="logo" />
            <img src={AIG_logo2} alt="Logo 1" className="logo" />
            <img src={Asian_health_care_foundation} alt="Logo 1" className="logo" />
            <img src={Johns_Medical_College_logo} alt="Logo 1" className="logo" />
            <img src={Apolo_IMSR} alt="Logo 2" className="logo" />
            <img src={Indian_Institute_of_Technology_Bombay_Logo} alt="Logo 1" className="logo" />
            <img src={IITD_Logo} alt="Logo 1" className="logo" />
            <img src={IIT_Hyderabad_Insignia} alt="Logo 1" className="logo" />
            <img src={IIPH} alt="Logo 1" className="logo" />
            <img src={IIITH} alt="Logo 1" className="logo" />
            {/* <img src={Apolo_IMSR2} alt="Logo 3" className="logo" /> */}
            {/* <img src={Asian_health_care_foundation} alt="Logo 1" className="logo" /> */}
            
            </div>
            
            
            
           
  
           {/*} <img src={UCSF_PNE} alt="Logo 1" className="logo" />
            <img src={UCSF_WIN_Logo} alt="Logo 1" className="logo" /> */}
            
        </div></div>
    )
  }
}
