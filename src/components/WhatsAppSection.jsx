import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppSection = () => {
  const whatsAppLink = `https://wa.me/919799769699`; 

  return (
    <Box
      sx={{
        marginTop: '60px', 
        padding: '40px 30px',
        backgroundColor: '#000', 
        color: '#FFD700', 
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Chat with Us on WhatsApp
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '30px',
          color: '#fff', 
          fontSize: '1.2rem',
          lineHeight: 1.7,
        }}
      >
        Got a question? Need help with your PC build? Click the button below to start a conversation with us directly on WhatsApp.
      </Typography>
      <Button
        variant="contained"
        href={whatsAppLink}
        target="_blank"
        startIcon={<WhatsAppIcon />}
        sx={{
          backgroundColor: '#25D366', 
          color: '#fff', 
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#1ebe5b',
          },
        }}
      >
        Chat Now
      </Button>
    </Box>
  );
};

export default WhatsAppSection;
