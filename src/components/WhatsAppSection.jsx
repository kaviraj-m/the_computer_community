import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const WhatsAppSection = () => {
  const whatsAppLink = `https://wa.me/919799769699`; // Replace with your WhatsApp number

  return (
    <Box sx={{ marginTop: '40px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Chat with Us on WhatsApp
      </Typography>
      <Typography variant="body1">
        Got a question? Need help with your PC build? Click the button below to start a conversation with us directly on WhatsApp.
      </Typography>
      <Button
        variant="contained"
        color="success"
        href={whatsAppLink}
        target="_blank"
        sx={{ marginTop: '20px' }}
      >
        Chat Now
      </Button>
    </Box>
  );
};

export default WhatsAppSection;
