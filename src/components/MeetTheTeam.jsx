import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const MeetTheTeam = () => {
  return (
    <Box sx={{ padding: 5, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Meet Our Experts
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Our team consists of passionate and experienced professionals who are dedicated to delivering the best PC builds and customer support. Meet the people behind The Computer Community.
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        {/* Add team members here */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">baskar</Typography>
              <Typography variant="body2" color="textSecondary">
                Lead PC Engineer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat for other team members */}
      </Grid>
    </Box>
  );
};

export default MeetTheTeam;
