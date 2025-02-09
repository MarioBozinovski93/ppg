import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setIsEmailValid(validateEmail(value));
    }
  };

  const handleSendEmail = () => {
    const { name, message } = formData;
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:bozinovskimario@hotmail.com?subject=${subject}&body=${body}`;
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && isEmailValid;

  return (
    <Box id="contact" sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <TextField 
        name="name" 
        label="Name" 
        fullWidth 
        margin="normal" 
        onChange={handleChange} 
      />
      <TextField 
        name="email" 
        label="Email" 
        fullWidth 
        margin="normal" 
        onChange={handleChange} 
        error={!isEmailValid} 
        helperText={!isEmailValid ? "Invalid email format" : ""}
      />
      <TextField 
        name="message" 
        label="Message" 
        fullWidth 
        margin="normal" 
        multiline 
        rows={4} 
        onChange={handleChange} 
      />
      <Button 
        variant="contained" 
        sx={{ marginTop: 2 }} 
        onClick={handleSendEmail} 
        disabled={!isFormValid}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default Contact;
