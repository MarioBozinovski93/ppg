// src/components/AboutMe.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutMe = () => {
  return (
    <Box id="about-me" sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1" paragraph>
          I am an ambitious software engineer recognized for delivering reliable results. With experience in a variety of technologies and design patterns, I have contributed to past projects at a level higher than expected. I am passionate about building innovative products, and I thrive in an environment where I can leverage my expertise to solve complex challenges.
        </Typography>
        <Typography variant="body1" paragraph>
          I have extensive experience in system design architecture, leadership, and mentoring. Additionally, I have served as a leader on large-scale and enterprise programs, managing complex initiatives and ensuring successful delivery. I am driven by creating impactful products and providing leadership in driving these initiatives forward.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutMe;
