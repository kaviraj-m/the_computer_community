import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const SupportSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '40px 20px',
        marginTop: '40px',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Need Assistance?
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
        Our team is here to help. Contact us anytime!
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#FFD700', color: '#101010', marginRight: '10px' }}
      >
        WhatsApp Us
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#FFD700', color: '#101010' }}
      >
        Call Us
      </Button>
    </Box>
  );
};

export default SupportSection;
