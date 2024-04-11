import React, { Component } from 'react';
import './Collaborationslogo.css';
import dbt from './funding_logos/DBT_welcome_trustlogo-dark-removebg-preview.png';
import dbt2 from './funding_logos/DBT-logo_2023-04-12-122027_clmg_76ea13ce5cec9e3d897b76c6abe4779f.png';
import dst from './funding_logos/dst-logo-removebg-preview.png';
import icmr from './funding_logos/Indian_Council_of_Medical_Research_Logo.svg.png';
import ioe from './funding_logos/IoE-Combine-Logo-removebg-preview.png';
import seb from './funding_logos/serblogo_logo.png';

import { Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
export default class Fundinglogos extends Component {
  render() {
    return (<div>
      
      <Typography variant="h2" sx={{ color: '#800000', display: 'flex', justifyContent: 'left' }}>
      <br/>
          Our Funding Agencies
        </Typography>
        
         <div className="logo-container">
          
        <div>
          <img src={dbt} alt="Logo 1" className="logo" />
          <img src={dbt2} alt="Logo 1" className="logo" /> 
          <img src={dst} alt="Logo 1" className="logo" />
          <img src={icmr} alt="Logo 1" className="logo" />
          <img src={ioe} alt="Logo 1" className="logo" />
          <img src={seb} alt="Logo 1" className="logo" />
            </div>
            
            
            
           
  
           {/*} <img src={UCSF_PNE} alt="Logo 1" className="logo" />
            <img src={UCSF_WIN_Logo} alt="Logo 1" className="logo" /> */}
            
        </div></div>
    )
  }
}
