import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MapSection = () => {
  return (
    <Box
      sx={{
        marginTop: '60px',
        padding: '40px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Visit Our Studio
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: '#555',
          marginBottom: '32px',
          lineHeight: 1.6,
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
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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

      <Box sx={{ textAlign: 'center', marginTop: '24px' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '8px',
            backgroundColor: '#007BFF',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
          onClick={() => window.open('https://maps.google.com/maps?daddr=3, Lock St, Sanyasipuram, Kilpauk, Chennai, Tamil Nadu 600010', '_blank')}
        >
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default MapSection;
