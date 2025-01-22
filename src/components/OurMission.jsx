import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const OurMission = () => {
  return (
    <Box sx={{ padding: 5, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Our Mission
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: '300', marginTop: 2 }}>
        Dedicated to Delivering Top-Notch Builds for Every Need
      </Typography>
      <List sx={{ marginTop: 3 }}>
        <ListItem>
          <ListItemText primary="Providing the best performance at an unbeatable price" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Offering reliable customer service and after-sales support" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Building solutions for all types of users, from casual gamers to professionals in various industries like VFX, architecture, and AI" />
        </ListItem>
      </List>
    </Box>
  );
};

export default OurMission;
