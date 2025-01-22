import React from 'react';
import { Box, Typography, Button, Grid, TextField } from '@mui/material';
import HeroSection4 from '../components/HeroSection4';
import ContactInformation from '../components/ContactInformation';
import ContactForm from '../components/WhatsAppSection';
import MapSection from '../components/MapSection';
const ContactUsPage = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <HeroSection4 />
      <ContactInformation />
      <ContactForm />
      <MapSection />
    </Box>
  );
};

export default ContactUsPage;
