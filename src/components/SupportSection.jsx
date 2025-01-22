import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const SupportSection = () => {
  const phoneNumber = '+919799769699';

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '60px 20px',
        borderRadius: '16px',
        boxShadow: '0px 8px 20px rgba(255, 215, 0, 0.2)',
        margin: '40px auto',
        maxWidth: '800px',
        border: '1px solid #FFD700',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#FFD700',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '20px',
        }}
      >
        Need Assistance?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          color: '#f5f5f5',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        Have questions or need support? Contact us anytime, and our team will respond promptly.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '12px 24px',
            borderRadius: '8px',
            textTransform: 'none',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 15px rgba(255, 215, 0, 0.6)',
            },
          }}
          startIcon={<WhatsAppIcon sx={{ fontSize: '1.5rem' }} />}
          href={`https://wa.me/${phoneNumber.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '12px 24px',
            borderRadius: '8px',
            textTransform: 'none',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 15px rgba(255, 215, 0, 0.6)',
            },
          }}
          startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />}
          href={`tel:${phoneNumber}`}
        >
          Call Us
        </Button>
      </Box>
    </Box>
  );
};

export default SupportSection;
