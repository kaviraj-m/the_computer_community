import React from 'react';
import { Box, Typography } from '@mui/material';

const CompanyIntroduction = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Who We Are
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        We specialize in providing high-performance custom PC builds tailored for gaming, VFX, AI, architecture, and productivity.
        With over 1500+ successful builds, we take pride in offering affordable, customized solutions backed by our Price Match Guarantee and lifetime service support.
      </Typography>
    </Box>
  );
};

export default CompanyIntroduction;
