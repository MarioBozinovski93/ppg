// src/components/Experience.js
import React from 'react';
import { Container, Typography, Grid, Box, Chip, Link } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // For animations
import { useText } from '../context/TextContext';

const Experience = () => {
  // Experience data with skills included at the bottom
  const textData = useText();

  return (
    <Container id="experience">
      <Typography variant="h4" gutterBottom sx={{ margin: 3 }}>
        Experience
      </Typography>
      <Grid container spacing={4}>
        {textData.experiences.map((experience, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ExperienceItem experience={experience} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const ExperienceItem = ({ experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when in view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -100 }} // Initial position and opacity
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animation trigger
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ padding: 3, border: '1px solid #e0e0e0', borderRadius: 2, backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {experience.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          <Link href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
            {experience.company}
          </Link> | {experience.duration}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Responsibilities
          </Typography>
          <ul>
            {experience.projects.map((project, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <Typography variant="body1">{project}</Typography>
              </motion.li>
            ))}
          </ul>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {experience.skills.map((skill, index) => (
              <Chip key={index} label={skill} size="small" color="primary" />
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Experience;
