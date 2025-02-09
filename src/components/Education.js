// src/components/Education.js
import React from 'react';
import { Typography, Container,  Box, Link } from '@mui/material';

const Education = () => {
const companyUrl = 'https://feit.ukim.edu.mk/';
const company = 'FEIT/FEEIT';
  return (
    <Container id="education">
      <Typography variant="h4" gutterBottom sx={{ margin: 3 }}>
        Education
      </Typography>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Bachelor&apos;s Degree in Telecommunication Engineering and Information Technology
        </Typography>
        <Typography variant="body1" gutterBottom>
          Faculty of Electrical Engineering and Information Technologies (FEIT), Skopje, North Macedonia
          <Box>
          <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company}
          </Link>
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          09/2012 - 01/2018
        </Typography>
      </Box>
    </Container>
  );
};

export default Education;
