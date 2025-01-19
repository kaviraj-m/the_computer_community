import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import AMDLogo from '../assets/AMD.svg';
import IntelLogo from '../assets/Intel.svg';
import NvidiaLogo from '../assets/Nvidia.svg';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1c1c1c',
  color: 'white',
  border: '1px solid gold',
  boxShadow: theme.shadows[4],
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#333333',
    boxShadow: theme.shadows[12],
  },
}));

const BrandsSection = () => {
  const partners = [
    {
      name: 'Tier 1 Partner for AMD',
      description:
        'AMD leads innovation in high-performance computing, empowering users with cutting-edge technology for gaming and professional workloads. Their chips deliver unparalleled speed and efficiency for every task.',
      image: AMDLogo,
      cta: 'Explore AMD Solutions',
    },
    {
      name: 'Tier 1 Partner for Intel',
      description:
        'Intel is a pioneer in advanced processors, delivering groundbreaking solutions that power businesses and consumers alike. From cloud computing to AI, Intel’s architecture is designed to transform the digital landscape.',
      image: IntelLogo,
      cta: 'Discover Intel Technologies',
    },
    {
      name: 'Authorized System Integrator for NVIDIA',
      description:
        'NVIDIA revolutionizes the way we experience visual computing. From cutting-edge GPUs to AI-driven software solutions, NVIDIA enables groundbreaking experiences for gaming, AI, and data science.',
      image: NvidiaLogo,
      cta: 'Learn More About NVIDIA',
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'black', py: 8, position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("/path-to-your-background-pattern.svg") no-repeat center center/cover',
          opacity: 0.2,
          zIndex: -1,
        }}
      />
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: 'gold',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(255, 215, 0, 0.6)',
          }}
        >
          Trusted Partners
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: 'white',
            mb: 5,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          We proudly collaborate with some of the world’s leading technology companies to bring you products that combine exceptional quality, cutting-edge performance, and innovation. Our strong partnerships with AMD, Intel, and NVIDIA allow us to deliver the best possible solutions for every user.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={partner.image}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  sx={{
                    backgroundColor: 'black',
                    objectFit: 'contain',
                    padding: '20px',
                    borderRadius: '8px',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'gold',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {partner.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: 1.5,
                      mb: 2,
                    }}
                  >
                    {partner.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: 'gold',
                      borderColor: 'gold',
                      width: '100%',
                      '&:hover': {
                        backgroundColor: 'gold',
                        color: 'black',
                      },
                    }}
                    href="#"
                  >
                    {partner.cta}
                  </Button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BrandsSection;
