import React, { useState } from 'react';
import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#1c1c1c',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: theme.shadows[4],
  color: '#fff',
  textAlign: 'center',
}));

const BuildYourPCPage = () => {
  const [pcPurpose, setPcPurpose] = useState('');
  const [performance, setPerformance] = useState('');
  const [specialFeatures, setSpecialFeatures] = useState('');
  const [preferredBrands, setPreferredBrands] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ color: '#FFD700', mb: 3 }}>
        Build Your Custom PC
      </Typography>

      <FormWrapper>
        <Typography variant="h6" sx={{ color: '#FFD700', mb: 3 }}>Tell Us About Your PC Needs</Typography>
        <form
          action="https://formspree.io/f/mayvdbjb" 
          method="POST"
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>What is your primary use for the PC?</InputLabel>
                <Select
                  value={pcPurpose}
                  onChange={(e) => setPcPurpose(e.target.value)}
                  label="PC Purpose"
                  sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                  }}
                  name="pcPurpose"
                >
                  <MenuItem value="Gaming">Gaming</MenuItem>
                  <MenuItem value="Workstation">Workstation</MenuItem>
                  <MenuItem value="Content Creation">Content Creation</MenuItem>
                  <MenuItem value="General Use">General Use</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>Performance Requirement</InputLabel>
                <Select
                  value={performance}
                  onChange={(e) => setPerformance(e.target.value)}
                  label="Performance"
                  sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                  }}
                  name="performance"
                >
                  <MenuItem value="High Performance">High Performance</MenuItem>
                  <MenuItem value="Medium Performance">Medium Performance</MenuItem>
                  <MenuItem value="Budget Friendly">Budget Friendly</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>Any special features or preferences?</InputLabel>
                <Select
                  value={specialFeatures}
                  onChange={(e) => setSpecialFeatures(e.target.value)}
                  label="Special Features"
                  sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                  }}
                  name="specialFeatures"
                >
                  <MenuItem value="Customizable RGB">Customizable RGB</MenuItem>
                  <MenuItem value="Silent Operation">Silent Operation</MenuItem>
                  <MenuItem value="Compact Build">Compact Build</MenuItem>
                  <MenuItem value="No Preference">No Preference</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#FFD700' }}>Preferred Brands (Optional)</InputLabel>
                <Select
                  value={preferredBrands}
                  onChange={(e) => setPreferredBrands(e.target.value)}
                  label="Preferred Brands"
                  sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    border: '1px solid #FFD700',
                    '& .MuiInputLabel-root': { color: '#FFD700' },
                  }}
                  name="preferredBrands"
                >
                  <MenuItem value="Intel">Intel</MenuItem>
                  <MenuItem value="AMD">AMD</MenuItem>
                  <MenuItem value="Nvidia">Nvidia</MenuItem>
                  <MenuItem value="No Preference">No Preference</MenuItem>
                </Select>
              </FormControl>
            </Grid>
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
                name="additionalNotes"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#101010',
                  padding: '12px 40px',
                  marginTop: '30px',
                }}
              >
                Submit Your Requirements
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormWrapper>

      {formStatus && (
        <Box sx={{ padding: '40px 0', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
          <Typography variant="h5" sx={{ color: '#FFD700', mb: 3 }}>{formStatus}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default BuildYourPCPage;
