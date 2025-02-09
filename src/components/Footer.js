// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import {  Favorite } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#1976d2ab', color: 'white' }}>
      <Typography variant="body1">© 2022 Made with <Favorite /> by Mario Bozhinovski. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
