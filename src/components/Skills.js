// src/components/Skills.js
import React from 'react';
import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import { useText } from '../context/TextContext';
const Skills = () => {
    const textData = useText();
    const skills = textData.skills;
  return (
    <Box id="skills" sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        
        <Typography variant="h6" gutterBottom>Main Skills</Typography>
        <Grid container spacing={1}>
          {skills.main.map((skill, index) => (
            <Grid item key={index}>
              <Chip label={skill} variant="outlined" color="primary" />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>Other Skills</Typography>
        <Grid container spacing={1}>
          {skills.other.map((skill, index) => (
            <Grid item key={index}>
              <Chip label={skill} variant="outlined" color="secondary" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
