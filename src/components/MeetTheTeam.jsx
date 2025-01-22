import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Build, Support, Person } from '@mui/icons-material';

const MeetTheTeam = () => {
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 5 },
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          textAlign: 'center',
          color: '#FFD700',
          marginBottom: '20px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Meet Our Experts
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
          color: '#ddd',
          lineHeight: 1.7,
        }}
      >
        Our team consists of passionate and experienced professionals who are committed to delivering the best PC builds and providing excellent customer support. Meet the people behind The Computer Community.
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {[ 
          {
            name: 'Baskar',
            role: 'Lead PC Engineer',
            icon: <Build sx={{ color: '#FF5733', fontSize: '3rem' }} />, 
          },
          {
            name: 'Siva',
            role: 'Senior PC Builder',
            icon: <Build sx={{ color: '#33FF57', fontSize: '3rem' }} />, 
          },
          {
            name: 'Mohan',
            role: 'Customer Support Specialist',
            icon: <Support sx={{ color: '#3380FF', fontSize: '3rem' }} />, 
          },
          {
            name: 'Raja',
            role: 'PC Customization Expert',
            icon: <Person sx={{ color: '#FFEA00', fontSize: '3rem' }} />, 
          },
        ].map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#222',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                textAlign: 'center',
                padding: '20px',
                '&:hover': {
                  backgroundColor: '#333',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CardContent>
                {member.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '600',
                    color: '#FFD700',
                    marginTop: '15px',
                    fontSize: '1.3rem',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#bbb',
                    fontSize: '1rem',
                    marginTop: '5px',
                  }}
                >
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MeetTheTeam;
