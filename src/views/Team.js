import React from 'react';
import MainCard from '../ui-component/cards/MainCard';
import keerthana from './keerthana.jpeg';
import sreelekshmi from './srilakshmi.jpeg'
import samay from './samay.jpeg'
const Team = () => {
  // Sample data for members
  const members = [
    {
      id: 1,
      name: 'Choudari Keerthana',
      designation: 'Research Scholar',
      title_of_research: 'Biomedical informatics studies for metabolic syndrome and psychosomatic disorder',
      work_experience: "Forensic Professional (2019-2021), Biology and DNA Divison, Central Forensic Science Laboratory (CFSL)- Hyderabad, DFSS, Ministry of Home Affairs, Government of India.",
      education: "Masters in Zoology (2016-2018), Andhra University, Vizag, AP <br/> Bachelors in Chemistry, Botany and Zoology (2013-2016), Andhra University",
      image: keerthana, // Image file path or URL
      email: '20lsph03@uohyd.ac.in'
    },
    {
      id: 2,
      name: 'Samayaditya Singh',
      designation: 'Research Scholar',
      title_of_research: 'Computational modeling for chronotherapy by cortisol analogs',
      work_experience: "Research Assistant (2017), Aakaar Biotechnologies Pvt. Ltd., UP and Project-JRF (2021), Topic: In-vivo validation of membrane acid phosphates as a vaccine candidate against leishmania parasite",
      education: "B.Tech in Biotechnology (2013-2017), Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh <br/> M.Tech in Bioinformatics (2018-2020), University of Hyderabad",
      image: samay, // Image file path or URL,
      email: '21lsph05@uohyd.ac.in'
    },
    {
      id: 3,
      name: 'Sreelekshmi R',
      designation: 'Project Assistant',
      reasearch_intrests: 'Cancer research and psychobiological aspects of human behavior.',
      work_experience: "Project Assistant (2019), Behavior and Ecology Lab, IISER Kolkata",
      education: "Integrated MSc in Systems Biology, University of Hyderabad.",
      image: sreelekshmi, // Image file path or URL
      email: 'sreelekshmi.r073@gmail.com'
    },
    // {
    //   id: 2,
    //   name: 'Member 2',
    //   designation: 'Designation 2',
    //   department: 'Department 1',
    //   image: 'https://www.w3schools.com/w3images/team2.jpg',
    //   description: 'Member 2 description...'
    // },
    // {
    //   id: 3,
    //   name: 'Member 3',
    //   designation: 'Designation 3',
    //   department: 'Department 3',
    //   image: 'https://www.w3schools.com/w3images/team3.jpg',
    //   description: 'Member 2 description...'
    // }
    // Add more members as needed
  ];

  return (
    <div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Meet The Team</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px',     textAlign: 'justify' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {members.map((member) => (
          <MainCard key={member.id} style={{ maxWidth: '357px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src={member.image}
              alt={member.name}
              className="user-avatar"
              style={{ width: '100%' }}
            />
            <div style={{ padding: '10px' }}>
              <h1 style={{ color: '#990000' }}>{member.name}</h1>
              <p><b>Designation:</b> {member.designation}</p>
              {member.title_of_research &&
              <p><b>Title of Research:</b> {member.title_of_research}</p>}
              {member.reasearch_intrests &&
              <p><b>Research Interests:</b> {member.reasearch_intrests}</p>}

              <p><b>Work Experience:</b> <span dangerouslySetInnerHTML={{ __html: member.work_experience }} /></p>
              <p><b>Education:</b> <span dangerouslySetInnerHTML={{ __html: member.education }} /></p>
              <p><b>Email:</b> {member.email}</p>
            </div>
          </MainCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
