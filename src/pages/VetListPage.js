import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import VetList from '../components/VetList';

const VetListPage = () => {
  const navigate=useNavigate();
  const handleReportEmergency = () => {
    navigate('/emergency'); 
  };
  return (
    <Grid container spacing={3} sx={{ padding: '2rem', height: 'calc(100vh - 64px)' }}>
      <Grid item xs={12} md={8}>
        <VetList />
      </Grid>
      <Grid item xs={12} md={4}>
        <div
          style={{borderLeft: '1px solid lightgray',paddingLeft: '2rem',height: '100%',display: 'flex',flexDirection: 'column',justifyContent: 'center'}}>
          <div
          style={{paddingLeft: '2rem',height: '100%',display: 'flex',flexDirection: 'column'}}>
          <Typography variant="h6" gutterBottom sx={{lineHeight:'23px'}}>
            Find veterinaries and NGOs who are here to help the stray animals
          </Typography>
          <Typography variant="body2" paragraph sx={{marginTop:'1rem'}}>
            Reporting emergency allows nearby veterinaries and NGOs to find the exact location, condition and respond as soon as possible
          </Typography>
          <Button variant="contained" onClick={handleReportEmergency} sx={{backgroundColor:'white',color:'black'}}>Report Emergency</Button>
        </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default VetListPage;