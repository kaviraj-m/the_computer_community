import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("path_to_your_image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: 2
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Crafting Your Perfect PC Experience
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: '300', marginTop: 2 }}>
          Expertly Designed Systems for Gaming, AI, Architecture, and Productivity
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 3, padding: '10px 30px', backgroundColor: '#3f51b5' }}
          href="/build"
        >
          Start Building Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
