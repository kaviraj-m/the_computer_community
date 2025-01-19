import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

// Footer Styles
const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#101010', // Dark background for depth
  color: '#fff',
  padding: '60px 0',
  textAlign: 'center',
  position: 'relative',
  marginTop: '40px',
  boxShadow: '0px -5px 20px rgba(0,0,0,0.5)', // More depth with shadow
  [theme.breakpoints.down('sm')]: {
    padding: '40px 20px',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FFD700', // Gold for links
  textDecoration: 'none',
  margin: '0 20px',
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#fff',
    textDecoration: 'underline',
    transform: 'scale(1.05)', // Zoom effect on hover
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#FFD700',
  margin: '10px',
  fontSize: '30px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#fff',
    transform: 'scale(1.1)', // Zoom effect for icons
  },
}));

const ChannelButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFD700',
  color: '#101010',
  fontSize: '16px',
  padding: '12px 30px',
  textTransform: 'uppercase',
  fontWeight: '600',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#101010',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
  transition: 'all 0.3s ease',
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        {/* Quick Links Section */}
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              Quick Links
            </Typography>
            <div>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/build">Build Your PC</FooterLink>
              <FooterLink href="/pre-built">Pre-Built PCs</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </div>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              Follow Us
            </Typography>
            <div>
              <SocialIconButton href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </SocialIconButton>
              <SocialIconButton href="https://twitter.com" aria-label="Twitter">
                <Twitter />
              </SocialIconButton>
              <SocialIconButton href="https://instagram.com" aria-label="Instagram">
                <Instagram />
              </SocialIconButton>
              <SocialIconButton href="https://linkedin.com" aria-label="LinkedIn">
                <LinkedIn />
              </SocialIconButton>
              <SocialIconButton href="https://youtube.com/c/TheComputerCommunity" aria-label="YouTube">
                <YouTube />
              </SocialIconButton>
            </div>
          </Grid>

          {/* YouTube Channel Section */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              Join Our YouTube Community
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', marginBottom: '20px' }}>
              Don't miss our latest PC builds, tech tips, and reviews! Subscribe to our YouTube channel for exciting content.
            </Typography>
            <ChannelButton href="https://youtube.com/c/TheComputerCommunity" target="_blank">
              Visit Our Channel
            </ChannelButton>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#FFD700' }} />

        {/* Copyright Section */}
        <Typography variant="body2" sx={{ color: '#fff', fontSize: '14px', fontWeight: '300' }}>
          © 2025 The Computer Community. All rights reserved.
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
