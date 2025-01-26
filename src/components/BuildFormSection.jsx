import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: theme.shadows[10],
  color: '#fff',
  maxWidth: '900px',
  margin: 'auto',
  border: '2px solid #FFD700',
  marginBottom: '40px',
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  color: '#FFD700',
  fontWeight: 'bold',
  fontSize: '2.4rem',
  textAlign: 'center',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: '60px',
  paddingBottom: '60px',
  backgroundColor: '#101010',
}));

const ContactBox = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
}));

const BuildFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    purpose: '',
    location: '',
    contactNumber: '',
    dateRequired: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <StyledContainer maxWidth="lg">
      <HeaderText>Create Your Custom PC</HeaderText>
      <Typography
        variant="h6"
        sx={{
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '1.25rem',
        }}
      >
        Fill out the form below and let us help you build your dream PC!
      </Typography>

      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Name and Contact Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{
                  backgroundColor: '#333',
                  border: '1px solid #FFD700',
                  input: { color: 'white' },
                  label: { color: '#FFD700' },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="contactNumber"
                label="Contact Number"
                variant="outlined"
                fullWidth
                value={formData.contactNumber}
                onChange={handleChange}
                sx={{
                  backgroundColor: '#333',
                  border: '1px solid #FFD700',
                  input: { color: 'white' },
                  label: { color: '#FFD700' },
                }}
              />
            </Grid>

            {/* Budget and Location */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="budget"
                label="Budget"
                variant="outlined"
                fullWidth
                value={formData.budget}
                onChange={handleChange}
                sx={{
                  backgroundColor: '#333',
                  border: '1px solid #FFD700',
                  input: { color: 'white' },
                  label: { color: '#FFD700' },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="location"
                label="Location"
                variant="outlined"
                fullWidth
                value={formData.location}
                onChange={handleChange}
                sx={{
                  backgroundColor: '#333',
                  border: '1px solid #FFD700',
                  input: { color: 'white' },
                  label: { color: '#FFD700' },
                }}
              />
            </Grid>

            {/* Purpose */}
            <Grid item xs={12}>
              <TextField
                name="purpose"
                label="Purpose"
                variant="outlined"
                fullWidth
                value={formData.purpose}
                onChange={handleChange}
                sx={{
                  backgroundColor: '#333',
                  border: '1px solid #FFD700',
                  input: { color: 'white' },
                  label: { color: '#FFD700' },
                }}
                placeholder="Gaming, Workstation, Content Creation, etc."
              />
            </Grid>

            {/* Date Required */}
            <Grid item xs={12}>
              <TextField
                name="dateRequired"
                label="Date Required"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formData.dateRequired}
                onChange={handleChange}
                sx={{
                  backgroundColor: '#333',
                  border: '1px solid #FFD700',
                  input: { color: 'white' },
                  label: { color: '#FFD700' },
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#101010',
                  padding: '14px 40px',
                  '&:hover': {
                    backgroundColor: '#e6c200',
                  },
                }}
              >
                Submit Your Requirements
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormWrapper>

      {/* Contact Information */}
      <ContactBox>
        <IconButton
          href="tel:+917904612266"
          sx={{
            backgroundColor: '#25D366',
            padding: '10px',
            '&:hover': { backgroundColor: '#128C7E' },
          }}
        >
          <PhoneIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton
          href="https://wa.me/917904612266"
          sx={{
            backgroundColor: '#25D366',
            padding: '10px',
            '&:hover': { backgroundColor: '#128C7E' },
          }}
        >
          <WhatsAppIcon sx={{ color: 'white' }} />
        </IconButton>
      </ContactBox>
    </StyledContainer>
  );
};

export default BuildFormSection;
