import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Build, LocalShipping, Support } from '@mui/icons-material';

const HowWeWork = () => {
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 5 },
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        maxWidth: '900px',
        margin: 'auto',
        marginTop: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#FFD700',
          marginBottom: 2,
          textTransform: 'uppercase',
          letterSpacing: 2,
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
        }}
      >
        Our Process
      </Typography>
      <Divider sx={{ backgroundColor: '#FFD700', height: 2, marginBottom: 3, width: '50%', margin: 'auto' }} />

      <List sx={{ marginTop: 2 }}>
        {[ 
          {
            icon: <Build sx={{ color: '#4CAF50', marginRight: 2, fontSize: '2rem' }} />, 
            text: 'Consultation: We understand your requirements and suggest the best options for your needs.',
          },
          {
            icon: <LocalShipping sx={{ color: '#2196F3', marginRight: 2, fontSize: '2rem' }} />, 
            text: 'Build & Design: Our team crafts the ideal PC solution tailored to your specifications.',
          },
          {
            icon: <Support sx={{ color: '#FF5722', marginRight: 2, fontSize: '2rem' }} />, 
            text: 'Delivery & Support: We provide full aftersales service and lifetime support for your peace of mind.',
          },
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: '#333',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: 2,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: '#444',
              },
            }}
          >
            {item.icon}
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: '500',
                lineHeight: 1.6,
                color: '#fff',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HowWeWork;
