import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const OurValues = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        What Sets Us Apart
      </Typography>
      <List sx={{ marginTop: 3 }}>
        <ListItem>
          <ListItemText primary="Price Match Guarantee: Get the best deals, guaranteed." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Aftersales Support: Dedicated helpline for service and troubleshooting." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Customized Solutions: PC builds tailored to your exact requirements." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Specialization: Over 1500+ customized PC builds for a variety of needs." />
        </ListItem>
      </List>
    </Box>
  );
};

export default OurValues;
