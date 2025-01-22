import React from 'react';
import { Box, Container, Typography, Grid, Button, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { FaDonate } from 'react-icons/fa';  

const DonationSectionWrapper = styled(Box)(({ theme }) => ({
  background: 'black',
  color: '#fff',
  padding: '80px 0',
  textAlign: 'center',
  marginTop: '40px',
  borderTop: '4px solid #FFD700',
  borderRadius: '10px',
  boxShadow: '0px 6px 20px rgba(0,0,0,0.5)',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 20px',
  },
}));

const DonationButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFD700',
  color: '#101010',
  fontSize: '16px',
  padding: '14px 50px',
  textTransform: 'uppercase',
  fontWeight: '600',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#101010',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)',
  },
  transition: 'all 0.3s ease',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#FFD700',
  fontWeight: 'bold',
  marginBottom: '35px',
  fontSize: '36px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}));

const DonationDescription = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: '40px',
  fontSize: '18px',
  lineHeight: '1.8',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
}));

const DonationSection = () => {
  return (
    <DonationSectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle variant="h4">
          Support a Cause and Make a Lasting Difference
        </SectionTitle>
        <DonationDescription variant="body1">
          A portion of our revenue is dedicated to making a positive impact. Your contribution helps us support two incredible causes focused on animal welfare and environmental sustainability.
        </DonationDescription>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              Blue Cross of India
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', marginBottom: '20px' }}>
              Blue Cross of India is dedicated to rescuing and caring for animals. With your support, we can provide shelter, medical care, and help animals in need.
            </Typography>
            <DonationButton component={Link} href="https://bluecross.org.in" target="_blank">
              Donate to Blue Cross
            </DonationButton>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              SankalpTaru
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', marginBottom: '20px' }}>
              SankalpTaru focuses on reforestation, planting trees to combat climate change. Your donation will help plant trees for a greener planet.
            </Typography>
            <DonationButton component={Link} href="https://sankalptaru.org" target="_blank">
              Donate to SankalpTaru
            </DonationButton>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: '50px' }}>
          <Typography variant="h5" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '15px' }}>
            Join Us in Creating a Better Future
          </Typography>
          <Typography variant="body2" sx={{ color: '#fff', marginBottom: '30px' }}>
            Every contribution, no matter how small, makes a difference. Together, we can create a better world for both animals and the environment.
          </Typography>
          <DonationButton component={Link} href="https://sankalptaru.org" target="_blank">
            Contribute Now
          </DonationButton>

          <IconBox>
            <IconButton
              sx={{
                backgroundColor: '#FFD700',
                padding: '10px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#fff',
                },
              }}
              component={Link}
              href="https://www.youtube.com/channel/UCSu_M1sBR9M-gBSTFVXIY6w"
              target="_blank"
            >
              <FaDonate color="#101010" size={28} />
            </IconButton>
          </IconBox>
        </Box>
      </Container>
    </DonationSectionWrapper>
  );
};

export default DonationSection;
