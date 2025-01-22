import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MapSection = () => {
  return (
    <Box
      sx={{
        marginTop: '60px',
        padding: '40px',
        backgroundColor: '#000', 
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        color: '#FFD700', 
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Visit Our Studio
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: '#ddd', 
          marginBottom: '32px',
          lineHeight: 1.7,
          fontSize: '1.1rem',
        }}
      >
        Find us at the heart of Kilpauk, Chennai. We’re always excited to welcome you! Plan your visit and experience our creative space.
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
          marginBottom: '24px',
        }}
      >
        <iframe
          src="https://maps.google.com/maps?width=626&amp;height=558&amp;hl=en&amp;q=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            backgroundColor: '#FFD700', 
            color: '#000', 
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#e5c100', 
            },
          }}
          onClick={() =>
            window.open(
              'https://maps.google.com/maps?daddr=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010',
              '_blank'
            )
          }
        >
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default MapSection;
