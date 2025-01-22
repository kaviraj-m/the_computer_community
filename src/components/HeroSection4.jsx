import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/path/to/your/image.jpg)', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Get In Touch With The Computer Community
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          We’re Here to Help You Build Your Perfect PC
        </Typography>
        <Button variant="contained" color="primary" href="#contact-form">
          Reach Out To Us
        </Button>
      </div>
    </Box>
  );
};

export default HeroSection;
