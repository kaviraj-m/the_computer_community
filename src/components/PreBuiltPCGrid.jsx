import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const pcs = [
  { id: 1, name: 'Gaming Beast 5000', specs: 'Intel i7, RTX 3060, 16GB RAM', image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Productivity Pro', specs: 'AMD Ryzen 5, 32GB RAM, 1TB SSD', image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Budget Champ', specs: 'Intel i5, GTX 1660, 8GB RAM', image: 'https://via.placeholder.com/300x200' },
];

const PreBuiltPCGrid = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '40px 20px' }}>
      {pcs.map((pc) => (
        <Grid item xs={12} sm={4} key={pc.id}>
          <Card sx={{ backgroundColor: '#333', color: '#fff' }}>
            <CardMedia component="img" image={pc.image} alt={pc.name} />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {pc.name}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {pc.specs}
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#FFD700', color: '#101010', mt: 2 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PreBuiltPCGrid;
