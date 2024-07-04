// import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the icon
import { PermIdentity, Pets } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate();
    const handleProfileClick = () => {
        navigate('/vets'); 
      };
  return (
    <AppBar position="static" style={{ backgroundColor: '#c8e6c9' }}> 
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, marginLeft: '7rem' }}>
            <Pets fontSize="large" style={{ marginRight: '0.5rem' }}/>
        <Typography variant="h6" component="div" sx={{color:'black', flexGrow: 1 }}> 
          Animal Team
        </Typography>
        </div>
       <PermIdentity fontSize="large" style={{color:'black',marginRight:'5rem'}} onClick={handleProfileClick}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;