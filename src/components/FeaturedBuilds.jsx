// src/components/FeaturedBuilds.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const FeaturedBuilds = () => {
  return (
    <Box sx={{ padding: '40px 0', backgroundColor: '#101010' }}>
      <Typography variant="h4" sx={{ color: '#FFD700', textAlign: 'center' }}>
        Featured PC Builds
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>
              Gaming PC Build
            </Typography>
            <Typography sx={{ color: '#fff' }}>
              A powerful gaming PC for high-end games with great graphics and performance.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>
              Workstation PC Build
            </Typography>
            <Typography sx={{ color: '#fff' }}>
              Designed for professional tasks such as video editing, 3D rendering, and more.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>
              Budget PC Build
            </Typography>
            <Typography sx={{ color: '#fff' }}>
              A cost-effective build for casual browsing and everyday use.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedBuilds;
