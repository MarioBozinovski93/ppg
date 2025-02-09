// src/components/Languages.js
import React from 'react';
import { Typography, Container, Grid, Chip } from '@mui/material';
import { useText } from '../context/TextContext';

const Languages = () => {
    const textData = useText();
    return (
        <Container id="languages">
          <Typography variant="h4" gutterBottom sx={{ margin: 3 }}>
            Languages
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Map over languages and render them */}
            {textData.languages.map((item, index) => (
              <Grid item key={index}>
                <Chip label={item.lang} color={item.color} variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Container>
      );
};

export default Languages;
