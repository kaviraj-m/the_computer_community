import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://via.placeholder.com/1500x400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        color: '#fff',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
        Pre-Built PCs Tailored for Every Need!
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Explore gaming, productivity, and budget-friendly options.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#FFD700', color: '#101010' }}>
        Explore Now
      </Button>
    </Box>
  );
};

export default HeroSection;
