import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import GamingImage from "../assets/gaming.png";
import WorkstationImage from "../assets/workstation.png";
import BudgetImage from "../assets/budget.jpg";

const categories = [
  {
    image: GamingImage,
    title: 'Gaming PCs',
    description: 'Experience unparalleled performance and immerse yourself in the world of gaming.',
  },
  {
    image: WorkstationImage,
    title: 'Workstations',
    description: 'Optimized for demanding tasks like video editing and 3D rendering.',
  },
  {
    image: BudgetImage,
    title: 'Budget Builds',
    description: 'Affordable and efficient PCs, perfect for everyday use and light gaming.',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: theme.shadows[6],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[12],
  },
}));

const CardOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
  zIndex: 1,
});

const TextContent = styled(CardContent)({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  zIndex: 2,
  color: '#fff',
  textAlign: 'left',
});

const CategoryHighlights = () => {
  return (
    <Box sx={{ backgroundColor: '#000', padding: '60px 20px' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            color: '#ffd700',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Discover Our Categories
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={category.image}
                  alt={`${category.title} image`}
                  sx={{
                    filter: 'brightness(0.9)',
                    transition: 'transform 0.3s, opacity 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      opacity: 0.9,
                    },
                  }}
                />
                <CardOverlay />
                <TextContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', color: '#ffd700', mb: 1, textTransform: 'uppercase' }}
                  >
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                    {category.description}
                  </Typography>
                </TextContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryHighlights;
