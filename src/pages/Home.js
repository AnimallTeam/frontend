import { LocationOnOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import VetList from '../components/VetList';


const Home = () => {
    const [showVetList, setShowVetList] = useState(false); // State for vet list visibility

    const handleProfileClick = () => {
      setShowVetList(!showVetList); // Toggle the visibility
    };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '16rem' }}> {/* Basic styling */}
    
      {/* <LocationOnOutlined fontSize="large" style={{ color: 'gray',filter: 'drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.6))'}} /> */}
      <LocationOnOutlined fontSize="large" style={{ color: 'gray'}} />
   
      <Typography variant="h6" gutterBottom>
        Fetching doctors working for
      </Typography>
      <Typography variant="h6">
        strays in your area
      </Typography>
      <Grid container spacing={3} sx={{ padding: '2rem' }}>
        <Grid item xs={12} md={8}>
         {showVetList &&<VetList /> }{/* Display the vet list */}
        </Grid>
        
      </Grid>

     
    </div>
  );
};

export default Home;