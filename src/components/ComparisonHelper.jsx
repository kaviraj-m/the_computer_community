import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ComparisonHelper = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '40px 20px',
        marginTop: '40px',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Compare PCs Side by Side
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
        Select PCs to compare their specs and find your perfect match.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#FFD700', color: '#101010' }}>
        Compare Now
      </Button>
    </Box>
  );
};

export default ComparisonHelper;
