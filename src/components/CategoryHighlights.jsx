import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const categories = [
  { icon: '🎮', title: 'Gaming PCs' },
  { icon: '💼', title: 'Workstations' },
  { icon: '💻', title: 'Budget Builds' },
];

const CategoryHighlights = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '40px 20px' }}>
      {categories.map((category, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
            <CardContent>
              <Typography variant="h2">{category.icon}</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryHighlights;
