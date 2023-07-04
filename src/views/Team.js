import React from 'react';
import MainCard from '../ui-component/cards/MainCard';
const Team = () => {
  // Sample data for members
  const members = [
    {
      id: 1,
      name: 'Member 1',
      designation: 'Designation 1',
      department: 'Department 1',
      image: 'https://www.w3schools.com/w3images/team1.jpg', // Image file path or URL
      description: 'Member 1 description...'
    },
    {
      id: 2,
      name: 'Member 2',
      designation: 'Designation 2',
      department: 'Department 1',
      image: 'https://www.w3schools.com/w3images/team2.jpg',
      description: 'Member 2 description...'
    },
    {
      id: 3,
      name: 'Member 3',
      designation: 'Designation 3',
      department: 'Department 3',
      image: 'https://www.w3schools.com/w3images/team3.jpg',
      description: 'Member 2 description...'
    }
    // Add more members as needed
  ];

  return (
    <div>
      <h1 style={{ color: '#990000', display: 'flex', justifyContent: 'center' }}>Meet The Team</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}
        container
        direction="column"
        alignItems="center"
        justify="right"
        spacing={2}
      >
        {members.map((member) => (
          <MainCard key={member.id} style={{ width: '350px', boxShadow: '5px 2px 16px 0px rgba(0, 0, 0, 0.2)' }}>
            <img
              src={member.image}
              alt={member.name}
              style={{ width: '100%', height: '160px', objectFit: 'cover', transform: 'scale(1.3)' }}
            />
            <div style={{ padding: '10px' }}>
              <h1 style={{ color: '#990000' }}>{member.name}</h1>
              <p>Designation: {member.designation}</p>
              <p>Department: {member.department}</p>
              <p>Description: {member.description}</p>
            </div>
          </MainCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
