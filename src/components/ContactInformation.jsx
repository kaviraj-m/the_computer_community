import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactInformation = () => {
  return (
    <Box
      sx={{
        marginTop: '60px',
        padding: '40px 20px',
        backgroundColor: '#000',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
        maxWidth: '900px',
        margin: 'auto',
        color: '#fff',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#FFD700', 
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textAlign: 'center',
        }}
      >
        Contact Information
      </Typography>

      <Divider
        sx={{
          margin: '0 auto 30px',
          width: '80px',
          height: '3px',
          backgroundColor: '#FFD700',
        }}
      />

      <Grid container spacing={3}>
        {[ 
          {
            icon: <LocationOnIcon sx={{ color: '#E91E63', fontSize: '2.5rem' }} />,
            title: 'Studio/Store Address:',
            details: `CC Electronics (OPC) Private Limited
            No.3 Lock Street, Kilpauk
            Chennai - 600010`,
          },
          {
            icon: <PhoneIcon sx={{ color: '#4CAF50', fontSize: '2.5rem' }} />,
            title: 'Phone Numbers:',
            details: (
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word', 
                }}
              >
                📞 +91 9444814547{'\n'}
                📞 +91 9799769699
              </Typography>
            ),
          },
          {
            icon: <EmailIcon sx={{ color: '#FF9800', fontSize: '2.5rem' }} />,
            title: 'Email:',
            details: (
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word', 
                }}
              >
                thecomputercommunity@gmail.com
              </Typography>
            ),
          },
          {
            icon: <AccessTimeIcon sx={{ color: '#2196F3', fontSize: '2.5rem' }} />,
            title: 'Working Hours:',
            details: 'Monday – Friday, 9:00 AM – 6:00 PM',
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#222',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#333',
                  boxShadow: '0 6px 16px rgba(255, 215, 0, 0.4)',
                },
              }}
            >
              <Box sx={{ marginRight: '16px' }}>{item.icon}</Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    color: '#FFD700',
                    marginBottom: '4px',
                  }}
                >
                  {item.title}
                </Typography>
                <Box>{item.details}</Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactInformation;
