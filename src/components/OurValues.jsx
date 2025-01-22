import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Verified, SupportAgent, BuildCircle, Star } from '@mui/icons-material';

const OurValues = () => {
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 5 },
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        maxWidth: '800px',
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
        What Sets Us Apart
      </Typography>
      <Divider sx={{ backgroundColor: '#FFD700', height: 2, marginBottom: 3, width: '50%', margin: 'auto' }} />

      <List sx={{ marginTop: 2 }}>
        {[ 
          {
            icon: <Verified sx={{ color: '#4CAF50', marginRight: 2 }} />, 
            text: 'Price Match Guarantee: Get the best deals, guaranteed.',
          },
          {
            icon: <SupportAgent sx={{ color: '#2196F3', marginRight: 2 }} />, 
            text: 'Aftersales Support: Dedicated helpline for service and troubleshooting.',
          },
          {
            icon: <BuildCircle sx={{ color: '#FF5722', marginRight: 2 }} />, 
            text: 'Customized Solutions: PC builds tailored to your exact requirements.',
          },
          {
            icon: <Star sx={{ color: '#FFC107', marginRight: 2 }} />, 
            text: 'Specialization: Over 1500+ customized PC builds for a variety of needs.',
          },
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: '#333',
              borderRadius: '8px',
              padding: '15px',
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
                lineHeight: 1.5,
                color: '#fff',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OurValues;
