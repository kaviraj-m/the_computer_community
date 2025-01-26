import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import backgroundGif from '../assets/Computer.gif';

import '@fontsource/libre-baskerville';
import '@fontsource/manrope';

const HeroSection = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontWeight: '600',
    borderRadius: '30px',
    padding: '15px 40px',
    fontSize: '18px',
    textTransform: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
    },
    '&:focus': {
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
    },
  }));

  const whatsappLink = `https://wa.me/919799769699`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background GIF */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Black Shade Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          zIndex: 1,
          position: 'relative',
          textAlign: 'center',
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          color: '#fff', 
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '3.5rem', lg: '5rem' },
            color: '#FF9800',
            mb: 3,
            lineHeight: 1.2,
            fontFamily: 'Libre Baskerville, serif',
            textShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)',
          }}
        >
          Engineered for Peak Performance
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: '500',
            fontSize: { xs: '1.5rem', lg: '2.5rem' },
            color: '#f1f1f1',
            mb: 4,
            lineHeight: 1.5,
            fontFamily: 'Manrope, sans-serif',
            textShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
          }}
        >
          Build Your Dream PC, Crafted for Excellence.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#bdbdbd',
            mb: 6,
            lineHeight: 1.8,
            fontFamily: 'Manrope, sans-serif',
            textShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          Tailored solutions for gamers, content creators, and professionals. Experience unmatched performance and reliability.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <StyledButton
            variant="contained"
            color="warning"
            onClick={() => window.location.href = '/build'}
          >
            Talk to an Expert
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="warning"
            onClick={() => window.location.href = '/prebuilt'}
          >
            Explore Ready-to-Use PCs
          </StyledButton>
        </Box>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#25D366',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
            href={whatsappLink}
            target="_blank"
            startIcon={<WhatsAppIcon />}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
