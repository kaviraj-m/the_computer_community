import React, { useState } from 'react';
import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Grid, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#333333',
  padding: '40px 50px',
  borderRadius: '12px',
  boxShadow: theme.shadows[10],
  color: '#fff',
  textAlign: 'center',
  maxWidth: '900px',
  margin: 'auto',
  border: '2px solid #FFD700',
  marginTop: '30px',
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  color: '#FFD700',
  fontWeight: 'bold',
  fontSize: '2.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
  textAlign: 'center',
  marginBottom: '20px',
}));

const SubHeaderText = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: '1.25rem',
  marginBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  textAlign: 'center',
}));

const ContactBox = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
}));

const BuildFormSection = () => {
  const [pcPurpose, setPcPurpose] = useState('');
  const [performance, setPerformance] = useState('');
  const [specialFeatures, setSpecialFeatures] = useState('');
  const [preferredBrands, setPreferredBrands] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
      <HeaderText variant="h4">Create Your Custom PC</HeaderText>
      <SubHeaderText variant="h5">Let us know your requirements and we'll build the perfect PC for you!</SubHeaderText>

      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Primary Use Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>What is your primary use?</InputLabel>
                <Select
                  value={pcPurpose}
                  onChange={(e) => setPcPurpose(e.target.value)}
                  label="Primary Use"
                  sx={{
                    backgroundColor: '#444',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiSelect-root': { padding: '12px 15px' },
                  }}
                >
                  <MenuItem value="Gaming">Gaming</MenuItem>
                  <MenuItem value="Workstation">Workstation</MenuItem>
                  <MenuItem value="Content Creation">Content Creation</MenuItem>
                  <MenuItem value="General Use">General Use</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Performance Level Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>Performance Level</InputLabel>
                <Select
                  value={performance}
                  onChange={(e) => setPerformance(e.target.value)}
                  label="Performance Level"
                  sx={{
                    backgroundColor: '#444',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiSelect-root': { padding: '12px 15px' },
                  }}
                >
                  <MenuItem value="High Performance">High Performance</MenuItem>
                  <MenuItem value="Medium Performance">Medium Performance</MenuItem>
                  <MenuItem value="Budget Friendly">Budget Friendly</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Special Features Dropdown */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>Special Features</InputLabel>
                <Select
                  value={specialFeatures}
                  onChange={(e) => setSpecialFeatures(e.target.value)}
                  label="Special Features"
                  sx={{
                    backgroundColor: '#444',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiSelect-root': { padding: '12px 15px' },
                  }}
                >
                  <MenuItem value="Customizable RGB">Customizable RGB</MenuItem>
                  <MenuItem value="Silent Operation">Silent Operation</MenuItem>
                  <MenuItem value="Compact Build">Compact Build</MenuItem>
                  <MenuItem value="No Preference">No Preference</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Preferred Brands Dropdown */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>Preferred Brands (Optional)</InputLabel>
                <Select
                  value={preferredBrands}
                  onChange={(e) => setPreferredBrands(e.target.value)}
                  label="Preferred Brands"
                  sx={{
                    backgroundColor: '#444',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                    '& .MuiSelect-root': { padding: '12px 15px' },
                  }}
                >
                  <MenuItem value="Intel">Intel</MenuItem>
                  <MenuItem value="AMD">AMD</MenuItem>
                  <MenuItem value="Nvidia">Nvidia</MenuItem>
                  <MenuItem value="No Preference">No Preference</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Additional Notes Text Field */}
            <Grid item xs={12}>
              <TextField
                label="Additional Notes"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                sx={{ marginTop: '20px', color: 'white' }}
              />
            </Grid>

            {/* Mobile Number Input */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number"
                variant="outlined"
                fullWidth
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                sx={{ marginTop: '20px', color: 'white' }}
              />
            </Grid>

            {/* WhatsApp Number Input */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="WhatsApp Number"
                variant="outlined"
                fullWidth
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                sx={{ marginTop: '20px', color: 'white' }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#101010',
                  padding: '14px 40px',
                  marginTop: '30px',
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

      <Divider sx={{ margin: '40px 0', backgroundColor: '#FFD700' }} />
    </Container>
  );
};

export default BuildFormSection;
