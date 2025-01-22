import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from '../assets/background2.webp';  

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: { xs: '20px', sm: '40px' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay to make the text more readable */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
            color: '#FFD700', 
          }}
        >
          Get In Touch With The Computer Community
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: '20px',
            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' },
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            color: '#fff',
          }}
        >
          We’re Here to Help You Build Your Perfect PC
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '6px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            '&:hover': {
              backgroundColor: '#FFD700',
              color: '#000',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
            },
          }}
          href="#contact-form"
        >
          Reach Out To Us
        </Button>
      </div>
    </Box>
  );
};

export default HeroSection;
