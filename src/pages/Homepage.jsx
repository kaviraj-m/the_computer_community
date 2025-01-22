import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesSection from '../components/CategoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BrandsSection from '../components/BrandsSection';
import DonationSection from '../components/DonationSection';
import BuildFormSection from '../components/BuildFormSection';
const Homepage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <BrandsSection />
      <DonationSection />
    </div>
  );
};

export default Homepage;
