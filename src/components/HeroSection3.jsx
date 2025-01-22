import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ceoImage from '../assets/ceo.jpg';  

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        padding: { xs: '30px', md: '40px' }, 
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
          zIndex: 1,
        }}
      />

      {/* Left Side Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: '100%',
          backgroundImage: `url(${ceoImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          marginBottom: { xs: '20px', md: '0' }, 
        }}
      />

      {/* Right Side Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          padding: { xs: '20px', md: '40px' },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            color: '#FFD700', 
            lineHeight: 1.2,
          }}
        >
          Crafting Your Perfect PC Experience
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '300',
            marginBottom: 4,
            fontSize: { xs: '1.1rem', md: '1.5rem' },
            color: '#fff',
            lineHeight: 1.5,
          }}
        >
          Expertly Designed Systems for Gaming, AI, Architecture, and Productivity
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            padding: '12px 30px',
            textTransform: 'none',
            fontSize: { xs: '1rem', md: '1.2rem' },
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#FFC107',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
            },
          }}
          href="/build"
        >
          Start Building Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
