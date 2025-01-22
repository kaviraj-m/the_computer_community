import React from 'react';
import { Container, Box } from '@mui/material';
import HeroSection3 from '../components/HeroSection3';
import CompanyIntroduction from '../components/CompanyIntroduction';
import OurMission from '../components/OurMission';
import OurValues from '../components/OurValues';
import MeetTheTeam from '../components/MeetTheTeam';
import HowWeWork from '../components/HowWeWork';

const AboutUs = () => {
  return (
    <Box>
      <HeroSection3 />
        <CompanyIntroduction />
        <OurMission />
        <OurValues />
        <MeetTheTeam />
        <HowWeWork />
    </Box>
  );
};

export default AboutUs;
