import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const FooterWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #101010 0%, #212121 100%)',
  color: '#fff',
  padding: '60px 0',
  textAlign: 'center',
  position: 'relative',
  marginTop: '40px',
  boxShadow: '0px -5px 20px rgba(0,0,0,0.5)',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '40px 20px',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FFD700',
  textDecoration: 'none',
  margin: '10px 0',
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  display: 'block',
  '&:hover': {
    color: '#fff',
    textDecoration: 'underline',
    transform: 'scale(1.05)',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: '10px',
  fontSize: '35px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: '50%',
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
  marginTop: '20px',
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
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              Follow Us
            </Typography>
            <div>
              <SocialIconButton href="https://facebook.com" aria-label="Facebook" sx={{ color: '#3b5998' }}>
                <Facebook />
              </SocialIconButton>
              <SocialIconButton href="https://twitter.com" aria-label="Twitter" sx={{ color: '#00acee' }}>
                <Twitter />
              </SocialIconButton>
              <SocialIconButton href="https://instagram.com" aria-label="Instagram" sx={{ color: '#C13584' }}>
                <Instagram />
              </SocialIconButton>
              <SocialIconButton href="https://linkedin.com" aria-label="LinkedIn" sx={{ color: '#0e76a8' }}>
                <LinkedIn />
              </SocialIconButton>
              <SocialIconButton href="https://youtube.com/c/TheComputerCommunity" aria-label="YouTube" sx={{ color: '#FF0000' }}>
                <YouTube />
              </SocialIconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>
              Join Our YouTube Community
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', marginBottom: '20px' }}>
              Stay updated with the latest PC builds, tech tips, and reviews! Subscribe to our YouTube channel for exciting content and tutorials.
            </Typography>
            <ChannelButton href="https://youtube.com/c/TheComputerCommunity" target="_blank">
              Visit Our Channel
            </ChannelButton>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: '#FFD700' }} />
        <Typography variant="body2" sx={{ color: '#fff', fontSize: '14px', fontWeight: '300' }}>
          © 2025 The Computer Community. All rights reserved.
        </Typography>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
