// src/components/PersonalInfo.js
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { Phone, Email, LocationOn, LinkedIn, Cake } from '@mui/icons-material';
import { useText } from '../context/TextContext';

const PersonalInfo = () => {
  const textData = useText();  // Access the personal info from the context
  const personalInfo = textData.personalInfo;

  return (
    <Container id="personal-info">
          <Box sx={{ marginTop: 4, marginBottom: 4, position: 'relative' }}>
      {/* Profile Image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGKfwyAmHLEWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674956730397?e=1744848000&v=beta&t=2Xe9hmXjIaocTxYUZiXy0ivj4zBk8OcsNBf2scKRLBA" // Use a real image URL here
          alt="Profile"
          style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '5px solid #1976d2',
          }}
        />
<Box sx={{ position: 'absolute', bottom: -10, right: 0, zIndex: 1 }}>
  </Box>
      </Box>
      
      {/* Personal Info */}
      <Typography variant="h4" gutterBottom>Personal Info</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6">{personalInfo.name}</Typography>
        <Typography variant="body1">{personalInfo.position}</Typography>
        <Grid container spacing={1} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><Phone /> {personalInfo.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><Email /> {personalInfo.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><LocationOn /> {personalInfo.location}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><LinkedIn /> <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><Cake /> {personalInfo.birthDate}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </Container>
  );
};

export default PersonalInfo;
