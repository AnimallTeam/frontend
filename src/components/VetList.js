import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const vetData = [
  {
    name: 'Dr. Dev',
    phone: '8821723191',
    hospital: 'Dr. Dev Pet Hositial',
    address: 'Nasirabad Rd, opposite Reliance Fresh, Nagbai, Adarsh Nagar, Ajmer, Rajasthan 305001',
    distance: '1.5 km',
    donationRequired: true,
  },
  {
    name: 'Dr. Dev',
    phone: '8821723191',
    hospital: 'Dr. Dev Pet Hositial',
    address: 'Nasirabad Rd, opposite Reliance Fresh, Nagbai, Adarsh Nagar, Ajmer, Rajasthan 305001',
    distance: '1.5 km',
    donationRequired: true,
  },
  {
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
    <Box sx={{ p: 2 }}>
      {vetData.map((vet, index) => (
        <Box
          key={index}
          sx={{
            borderBottom: '1px solid #ccc',
            p: 2,
            borderRadius: '8px',
            mb: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Typography variant="h6">{vet.name}</Typography>
              <Box
                sx={{
                  border: '1px solid lightgray',
                  backgroundColor: 'lightgray',
                  p: 1,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <PhoneIcon />
              </Box>
            </Box>
            <Typography variant="subtitle1">{vet.phone}</Typography>
            {vet.hospital && (
              <Typography variant="body2" gutterBottom>
                {vet.hospital}
              </Typography>
            )}
            <Typography variant="body2" gutterBottom>
              {vet.address}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <LocationOnOutlinedIcon fontSize="small" sx={{ color: 'gray' }} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {vet.distance} away
              </Typography>
            </Box>
            {vet.donationRequired && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: '90rem',
                  mt: 2,
                  width: { xs: '100%', sm: 'auto' },
                  backgroundColor: 'grey',
                }}
              >
                Donation required
              </Button>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VetList;
