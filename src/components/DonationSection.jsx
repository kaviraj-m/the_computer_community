import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import BlueCrossLogo from "../assets/bluecross_logo.png"; 
import SankalpTaruLogo from "../assets/sankalptaru_logo.webp"; 

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: '#000000',
  color: '#fff',
  padding: '80px 20px',
  textAlign: 'center',
  marginTop: '40px',
  borderTop: '4px solid #FFD700',
  borderRadius: '10px',
  boxShadow: '0px 6px 20px rgba(0,0,0,0.5)',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 15px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#FFD700',
  fontWeight: 'bold',
  fontSize: '32px',
  marginBottom: '20px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '1.8',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

const CauseBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #FFD700',
  borderRadius: '10px',
  backgroundColor: '#1a1a1a',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 25px rgba(255, 215, 0, 0.3)',
  },
}));

const Logo = styled('img')({
  width: '120px',
  height: '120px',
  marginBottom: '15px',
});

const CauseTitle = styled(Typography)(({ theme }) => ({
  color: '#FFD700',
  fontWeight: 'bold',
  fontSize: '20px',
  marginBottom: '10px',
}));

const CauseDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '15px',
  color: '#fff',
}));

const DonationSection = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="md">
        <Title>Support a Cause and Make a Lasting Difference</Title>
        <Description>
          A portion of our revenue is dedicated to making a positive impact. We proudly support
          <strong> Blue Cross of India</strong> and <strong>SankalpTaru</strong> for animal welfare and environmental sustainability.
        </Description>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <CauseBox>
              <Logo src={BlueCrossLogo} alt="Blue Cross of India Logo" />
              <CauseTitle>Blue Cross of India</CauseTitle>
              <CauseDescription>
                Dedicated to rescuing and caring for animals, providing shelter, medical care, and support for animals in need.
              </CauseDescription>
              <Link href="https://bluecross.org.in" target="_blank" style={{ color: '#FFD700', fontWeight: 'bold', textDecoration: 'none' }}>
                Learn More
              </Link>
            </CauseBox>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CauseBox>
              <Logo src={SankalpTaruLogo} alt="SankalpTaru Logo" />
              <CauseTitle>SankalpTaru</CauseTitle>
              <CauseDescription>
                Focused on reforestation and combating climate change by planting trees and creating a greener planet.
              </CauseDescription>
              <Link href="https://sankalptaru.org" target="_blank" style={{ color: '#FFD700', fontWeight: 'bold', textDecoration: 'none' }}>
                Learn More
              </Link>
            </CauseBox>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default DonationSection;