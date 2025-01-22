import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactInformation = () => {
  return (
    <Box sx={{ marginTop: '40px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Contact Information
      </Typography>
      <Typography variant="body1">
        <strong>Studio/Store Address:</strong>
        <br />
        CC Electronics (OPC) Private Limited
        <br />
        No.3 Lock Street, Kilpauk
        <br />
        Chennai - 600010
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        <strong>Phone Numbers:</strong>
        <br />
        📞 +91 9444814547
        <br />
        📱 +91 97997 69699 (Call or WhatsApp)
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        <strong>Email:</strong> support@thecomputercommunity.com
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        <strong>Working Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM
      </Typography>
    </Box>
  );
};

export default ContactInformation;
