import { ArrowBackIosNewRounded, ClearOutlined, LocationCityOutlined, UploadFile } from '@mui/icons-material';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const vetData = [
  {
    name: 'Dr. Dev',
    phone: '8821723191',
    hospital: 'Dr. Dev Pet Hositial',
    address:
      'Nasirabad Rd, opposite Reliance Fresh, Nagbai, Adarsh Nagar, Ajmer, Rajasthan 305001',
    distance: '1.5 km',
    donationRequired: true,
  },
  {
    name: 'Dr. Kuldeep Shekhawat',
    phone: '9981281232',
    hospital: 'Tree of life for Animals (TOLFA)',
    address: 'Kharekhari Road, near Foy Sagar, Ajmer, Rajasthan 305001',
    distance: '4 km',
    donationRequired: true,
  },
  {
    name: 'Dr. SK Garg',
    phone: '09799994789',
    hospital: 'Sk Pet Clinic',
    address:
      '1224/B GROUND FLOOR, Ajmer - Nasirabad Rd, near SHREE RAM DHARM KANTA, near SD Tyres, Bihari Ganj, Ajmer, Rajasthan 305001',
    distance: '15 km',
    donationRequired: true,
  },
  // ... more vet data ...
];


const Reportform = () => {
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [emergencyType, setemergencyType]=useState('')
  const [openModal, setOpenModal]=useState(false)
  const [showUserInfoModal, setShowUserInfoModal] = useState(false); 
  const [firstName, setFirstName] = useState(''); 
  const [mobileNumber, setMobileNumber] = useState(''); 

  const handleDoctorToggle = (vet) => {
    const currentIndex = selectedDoctors.indexOf(vet);
    const newSelected = [...selectedDoctors];

    if (currentIndex === -1) {
      newSelected.push(vet);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelectedDoctors(newSelected);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleContinue = () => {
    console.log('Selected Doctors:', selectedDoctors);
    toggleDrawer(false); 
    setShowUserInfoModal(true); 
  };

  const handleEmergencyTypeChange=(type) =>{
    setemergencyType(type);
    
  }
  const handleContinueEmergency = () => {
    setOpenModal(false)
  }
 

  const handleSaveInfo = () => {
    // Save the user information (replace this with your logic)
    console.log('First Name:', firstName); 
    console.log('Mobile Number:', mobileNumber);

    setShowUserInfoModal(false); 
  };


  const list = () => (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{ width: '100rem', backgroundColor: 'white' }} >
      <div style={{ padding: '1rem', borderBottom: '1px solid lightgray', display:'flex', alignContent:'center' }}>
        <ArrowBackIosNewRounded />
        <Typography variant="h6">Select Doctors</Typography>
      </div>

      <List sx={{ pt: 0 }}> 
        {vetData.map((vet, index) => (
          <ListItem key={index} disablePadding sx={{width:480}}>
            <ListItemButton
              onClick={() => handleDoctorToggle(vet)}
              selected={selectedDoctors.indexOf(vet) !== -1}
            >
              <ListItemText
                primary={vet.name}
                secondary={
                  <>
                    <Typography variant="body2">{vet.phone}</Typography>
                    <Typography variant="body2">{vet.hospital}</Typography>
                    <Typography variant="body2">{vet.address}</Typography>
                    <Typography variant="body2">
                      <LocationCityOutlined fontSize="small" style={{ color: 'gray' }} />
                      {vet.distance} away
                    </Typography>
                    {vet.donationRequired && (
                      <Typography variant="body2" sx={{ color: 'red' }}>
                       <Button variant="contained" size="small" sx={{borderRadius:'90rem', marginTop: '1em', width:'11rem' ,backgroundColor:'grey'}}>
                Donation required
              </Button>
                      </Typography>
                    )}
                  </>
                }
                secondaryTypographyProps={{ component: 'div' }}
              />
              <Checkbox checked={selectedDoctors.indexOf(vet) !== -1} onChange={() => handleDoctorToggle(vet)} sx={{mt:-12}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button sx={{width: '200%',maxWidth: '400px',margin: '1rem auto', display: 'block', border:'1px solid black',color:"black"}} onClick={handleContinue}>
        Select
      </Button>
    </div>
  );


  return (
    <div style={{ maxWidth: '730px', margin: 'auto', padding: '2rem' }}>
      <Grid container spacing={2}>
        {/* Left Column (No Grid for single column layout) */}
        <Grid item xs={12}> 
         <div style={{ display: 'flex', justifyContent:" space-between" }}>
         <Typography variant="subtitle1" gutterBottom>
         Share with doctor
          </Typography>
          <div onClick={toggleDrawer(true)} style={{ cursor: 'pointer'}}>
          <Typography variant="subtitle1" gutterBottom sx={{ ml:'5px'}}>
          {selectedDoctors.length > 0
              ? selectedDoctors.map((vet) => vet.name).join(', ')
              : 'send to all'} ▾ 
          </Typography>
          <hr style={{width:'85px', borderColor: 'black', marginTop: '-0.7rem' }} />
          </div>
         </div>
         <div style={{ display: 'flex', justifyContent:" space-between", marginTop:'1rem' }}>
         <Typography variant="subtitle1" >
         Emergency type
          </Typography>
          <div  onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ ml:'10px'}}>
            {emergencyType || 'Select'} ▾ 
          </Typography>
          <hr style={{width:'50px', borderColor: 'black', marginTop: '-0.7rem' }} />
          </div>
         </div>
       
         <Grid container spacing={1} sx={{ mb: 2, mt:2 }}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth startIcon={<UploadFile />} sx={{padding:'12px', border:'1px solid black', color:'black'}}>
                Upload
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth sx={{padding:'12px',border:'1px solid black', color:'black'}}>
                Record Audio
              </Button>
            </Grid>
          </Grid>
         

       
          <Typography variant="subtitle1" gutterBottom sx={{ mb: 1, mt: 2 }}>
            Animal type
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}> 
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Dog
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Cat
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Other large animal
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ mt: 1 }}> 
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Cow
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ mt: 1 }}>
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Goat/sheep
              </Button>
            </Grid>
            <Grid item xs={4} sx={{ mt: 1 }}>
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Other small animal
              </Button>
            </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Share live location 
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth sx={{ border: '1px solid black', color: 'black', padding: '12px' }}>
                Share current location
              </Button>
            </Grid>
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}> 
          <Typography >
          Request a video call
          </Typography>
            <Checkbox /> 
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between',marginTop:'-5px'}}>
          <Typography >
          Make a donation
          </Typography>
            <Checkbox />
          </div>

          {/* Submit Button */}
          <Button  size="large" sx={{ width: '100%', maxWidth: '730px', border: '1px solid black',color: 'black',mt: 2}}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>


      {/*Emergency Model*/}

      <Dialog  open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Emergency type</Typography>
        <IconButton onClick={() => setOpenModal(false)}>
          <ClearOutlined/>
        </IconButton>
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={1}>
            {/* Emergency Type Buttons (Dynamic Styling) */}
            {['Accident', 'Rabies', 'Distemper', 'Swallowing poison', 'Non-urgent', 'Others'].map(type => (
              <Grid item xs={6} key={type}>
                <Button 
                 
                  fullWidth 
                  onClick={() => handleEmergencyTypeChange(type)}
                  sx={{backgroundColor: emergencyType === type ? '#DCEDC8' : 'white',border:'1px inset black',}}>
                  {type}
                </Button>
              </Grid>
            ))}
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContinueEmergency} size="large"
  sx={{ width: '100%', border:'1px inset black',maxWidth: '450px',color: 'black', backgroundColor: 'white',position: 'relative', display: 'block',margin: '0 auto',boxShadow: '5px 5px 0px #DCEDC8',}}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showUserInfoModal} onClose={() => setShowUserInfoModal(false)} PaperProps={{sx: { borderRadius: '20px',  maxWidth: 400}}}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px 16px'}}>
          <IconButton onClick={() => setShowUserInfoModal(false)} sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: 'lightgray' }}}>
            <ClearOutlined />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ padding: '20px' }}> 
          <Typography variant="body1" gutterBottom>
            Sharing your name and number will help the Vets/NGOs who try to connect with you
          </Typography>
          <TextField label="First name" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} variant="outlined" margin="dense" sx={{ marginBottom: '16px'}}/>
          <TextField label="Mobile number" fullWidth value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} variant="outlined" margin="dense"/>
        </DialogContent>
        <DialogActions sx={{ padding: '16px 24px' }}> {/* Added padding to DialogActions */}
          <Button onClick={handleSaveInfo} sx={{width:'100%',color:'black',boxShadow: '5px 5px 0px #DCEDC8',border:'1px inset black'}}>
            Save information
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

};
export default Reportform;