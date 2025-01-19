import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import animationGif from '../assets/animation.gif'; 
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

import '@fontsource/libre-baskerville';
import '@fontsource/manrope';

const HeroSection = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontWeight: 'bold',
    borderRadius: '25px',
    padding: '12px 30px',
    textTransform: 'none',
    fontSize: '16px',
    transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      backgroundColor: theme.palette.warning.main,
      color: '#fff',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    },
    '&:focus': {
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
    },
  }));

  const whatsappLink = `https://wa.me/919799769699`;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.6) 60%, rgba(30, 30, 30, 1) 100%)',
        color: '#eaeaea',
        padding: '40px',
        position: 'relative',
        boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Light effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          flex: 7,  
          textAlign: { xs: 'center', lg: 'left' },
          marginBottom: { xs: '30px', lg: '0' },
          zIndex: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', lg: '4rem' },
            color: '#FF9800',
            mb: 2,
            lineHeight: 1.2,
            fontFamily: 'Libre Baskerville, serif', 
            textShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)',
          }}
        >
          The Computer Community
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.5rem',
            color: '#FF9800',
            mb: 2,
            lineHeight: 1.4,
            fontFamily: 'Manrope, sans-serif', 
            textShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
          }}
        >
          We Provide 100% Sensible PC Builds for Gaming, VFX, AI, Architects, and Productivity
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#bdbdbd',
            mb: 4,
            lineHeight: 1.8,
            fontFamily: 'Manrope, sans-serif',
            textShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          All backed by our Price Match Guarantee and lifetime service support. Get the perfect PC tailored to your needs with our expert recommendations.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#bdbdbd',
            mb: 4,
            lineHeight: 1.8,
            fontFamily: 'Manrope, sans-serif',
            textShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          Whether you're a gamer, content creator, or professional, we have the right setup for you. Start building or explore our pre-configured systems.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: { xs: 'center', lg: 'flex-start' },
          }}
        >
          <StyledButton
            variant="contained"
            color="warning"
            onClick={() => window.location.href = '/build'}
            sx={{ minWidth: '200px' }}
          >
            Start Building
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="warning"
            onClick={() => window.location.href = '/pre-built'}
            sx={{ minWidth: '200px' }}
          >
            Explore Pre-Built PCs
          </StyledButton>
          
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#25D366', 
              padding: '12px 30px',
              borderRadius: '25px',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
              marginTop: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#fff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              minWidth: '200px',
            }}
          >
            <WhatsAppIcon style={{ fontSize: '1.6rem', marginRight: '8px' }} />
            Chat with us
          </a>
        </Box>
      </Box>

      
      <Box
        sx={{
          flex: 3,  
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <Box
          component="img"
          src={animationGif}
          alt="PC Animation"
          sx={{
            width: { xs: '100%', sm: '90%', lg: '80%' },
            maxWidth: '600px',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
