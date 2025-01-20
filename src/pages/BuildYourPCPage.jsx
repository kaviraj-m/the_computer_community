import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import BuildFormSection from '../components/BuildFormSection';

const PageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#121212',
  minHeight: '100vh',
  padding: '50px 20px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BuildYourPCPage = () => {
  return (
    <PageWrapper>
      <BuildFormSection />
    </PageWrapper>
  );
};

export default BuildYourPCPage;
