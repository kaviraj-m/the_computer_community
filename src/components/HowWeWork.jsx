import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const HowWeWork = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Our Process
      </Typography>
      <List sx={{ marginTop: 3 }}>
        <ListItem>
          <ListItemText primary="Consultation: We understand your requirements." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Build & Design: Our team crafts the ideal PC solution." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Delivery & Support: We provide full aftersales service and lifetime support." />
        </ListItem>
      </List>
    </Box>
  );
};

export default HowWeWork;
