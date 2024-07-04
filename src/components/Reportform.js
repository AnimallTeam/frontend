import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    Select,
    TextField,
    Typography
} from '@mui/material';
import React from 'react';

const Reportform = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}> {/* Centering and padding */}
      <Typography variant="h5" gutterBottom>
        Report an Emergency
      </Typography>

      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Share with doctors
          </Typography>
          <TextField fullWidth placeholder="Select Doctors" />

          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '1rem' }}>
            Emergency type
          </Typography>
          <TextField fullWidth placeholder="Select Emergency Type" />

          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '1rem' }}>
            Animal type
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Dog
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Cat
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Cow
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Goat/sheep
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Other large animal
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Other small animal
              </Button>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '1rem' }}>
            Location
          </Typography>
          <TextField fullWidth placeholder="Share live location" />
          <TextField fullWidth placeholder="Share current location" sx={{ marginTop: '1rem' }} />
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: 'right' }}> {/* Align content to the right */}
            <Typography variant="subtitle1" gutterBottom>
              Send to all
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="send-to-label">Select</InputLabel>
              <Select labelId="send-to-label" id="send-to-select" label="Select">
                {/* Add your options here */}
              </Select>
            </FormControl>

            <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '1rem' }}>
              Uploads
            </Typography>
            <TextField fullWidth placeholder="Upload" />
            <Button variant="outlined" fullWidth sx={{ marginTop: '1rem' }}>
              Record Audio
            </Button>
          </div>
        </Grid>

        {/* Additional Options */}
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label="Request a video call" />
          <FormControlLabel control={<Checkbox />} label="Make a donation" />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" size="large" sx={{ width: '100%', maxWidth: '300px' }}>
            Continue
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reportform;