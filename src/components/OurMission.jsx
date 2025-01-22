import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const OurMission = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        marginTop: '40px',
        borderRadius: '12px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
        position: 'relative',
        zIndex: 1,
        padding: { xs: '20px', sm: '40px', md: '60px' },
        pb: 0, 
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: '700',
          color: '#FFD700',
          marginBottom: '20px',
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
        }}
      >
        Our Mission
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: '300',
          color: '#ddd',
          fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
          lineHeight: 1.8,
          marginBottom: '30px',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        We are dedicated to crafting high-performance custom PC builds tailored to every need — from avid gamers to professionals in VFX, architecture, AI, and productivity sectors. We bring your dream system to life, offering unparalleled quality, reliable support, and competitive pricing.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
              transition: '0.3s',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#FFD700',
                fontWeight: '600',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}
            >
              Unbeatable Performance
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Our systems deliver top-tier performance at affordable prices, ensuring you get the best value without compromising on quality. Whether for gaming or professional use, we build to outperform.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
              transition: '0.3s',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#FFD700',
                fontWeight: '600',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}
            >
              Reliable Customer Support
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.6 }}>
              We stand by our builds with exceptional customer service and ongoing support. From pre-sale consultations to post-sale assistance, we're with you every step of the way.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
              transition: '0.3s',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#FFD700',
                fontWeight: '600',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}
            >
              Tailored Solutions
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Our custom-built PCs are designed to meet the unique needs of gamers, creators, and professionals. Whatever your requirements, we provide solutions that help you achieve your goals.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: '30px',
          fontSize: '1.2rem',
          color: '#ffd700',
          fontWeight: '600',
          lineHeight: 1.6,
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Typography variant="body1">
          At The Computer Community, we're driven by a passion for technology and innovation. Our mission is simple: to create powerful, reliable, and affordable custom PC systems that push the boundaries of what's possible.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurMission;
