import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const CompanyIntroduction = () => {
  return (
    <Box
      sx={{
        padding: { xs: '30px', sm: '50px', md: '80px' },
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 0, 
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: '700',
          color: '#FFD700',
          marginBottom: '30px',
          fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
          letterSpacing: '2px',
        }}
      >
        Who We Are
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '300',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              color: '#ddd',
              lineHeight: 1.8,
              textAlign: 'justify',
              padding: { xs: '0 15px', sm: '0 25px', md: '0 40px' },
            }}
          >
            We specialize in providing high-performance custom PC builds tailored for gaming, VFX, AI, architecture, and productivity. With over 1500+ successful builds, we take pride in offering affordable, customized solutions backed by our Price Match Guarantee and lifetime service support. Our expert team ensures that each build is optimized for performance, durability, and efficiency, making sure you get the best PC to match your needs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyIntroduction;
