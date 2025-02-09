// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadButton from './DownloadButton';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { label: 'PersonalInfo', id: 'personal-info'},
    { label: 'About', id: 'about-me' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Languages', id: 'languages'},
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ background: "white", color: "grey", boxShadow: "none"}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <DownloadButton />
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ fontSize: 'small' }} color="inherit" onClick={() => handleScroll(item.id)}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton 
            color="inherit" 
            edge="end" 
            sx={{ display: { xs: 'block', sm: 'none' } }} 
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem button key={item.id} onClick={() => handleScroll(item.id)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
