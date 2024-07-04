import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button, Typography } from '@mui/material';
import React from 'react';

const vetData = [
    {
        name: 'Dr. Anshu_the_great',
        phone: '8821723191',
        hospital: 'Dr. Dev Pet Hositial',
        address: 'Nasirabad Rd, opposite Reliance Fresh, Nagbai, Adarsh Nagar, Ajmer, Rajasthan 305001',
        distance: '1.5 km',
        donationRequired: true,
      }, {
        name: 'Dr. Dev',
        phone: '8821723191',
        hospital: 'Dr. Dev Pet Hositial',
        address: 'Nasirabad Rd, opposite Reliance Fresh, Nagbai, Adarsh Nagar, Ajmer, Rajasthan 305001',
        distance: '1.5 km',
        donationRequired: true,
      }, {
        name: 'Dr. Dev',
        phone: '8821723191',
        hospital: 'Dr. Dev Pet Hositial',
        address: 'Nasirabad Rd, opposite Reliance Fresh, Nagbai, Adarsh Nagar, Ajmer, Rajasthan 305001',
        distance: '1.5 km',
        donationRequired: true,
      },
];

const VetList = () => {
  
  return (
    <div>
      {vetData.map((vet, index) => (
        <div key={index} style={{ 
          borderBottom: '1px solid #ccc', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginBottom: '1rem', 
          display: 'flex' 
        }}>
          <div style={{ flex: 1 }}> 
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6"  >
                {vet.name}
              </Typography>
              <div style={{border: '1px solid lightgray',backgroundColor:'lightgray',padding: '0.6rem 0.8rem',borderRadius: '35%', display: 'flex',alignItems: 'center'}}>
              <PhoneIcon  />
              </div>
            </div>
            <Typography variant="subtitle1" >
              {vet.phone}
            </Typography>
            {vet.hospital && (
              <Typography variant="body2" gutterBottom>
                {vet.hospital}
              </Typography>
            )}
            <Typography variant="body2" gutterBottom>
              {vet.address}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <LocationOnOutlinedIcon fontSize="small" style={{ color: 'gray' }} />
              <Typography variant="body2" style={{ marginLeft: '0.5rem' }}>
                {vet.distance} away
              </Typography>
            </div>
            {vet.donationRequired && (
              <Button variant="contained" size="small" sx={{borderRadius:'90rem', marginTop: '-3rem', marginLeft:'48rem', width:'11rem' ,backgroundColor:'grey'}}>
                Donation required
              </Button>
            )}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default VetList;