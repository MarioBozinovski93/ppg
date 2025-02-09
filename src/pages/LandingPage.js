// src/pages/LandingPage.js
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PersonalInfo from '../components/PersonalInfo';
import Languages from '../components/Languages';
import Education from '../components/Education';
import { TextProvider } from '../context/TextContext';  // Import the TextProvider
import Certifications from '../components/Certifications';

const LandingPage = () => {
  return (
    <TextProvider>  {/* Wrap the page with TextProvider */}
      <Box>
        <Header />
        <Container>
          <PersonalInfo />
          <About />
          <Skills />
          <Projects />
          <Languages />
          <Education />
          <Certifications />
          <Contact />
        </Container>
        <Footer />
      </Box>
    </TextProvider>
  );
};

export default LandingPage;
