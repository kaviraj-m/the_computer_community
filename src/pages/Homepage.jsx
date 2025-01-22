import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesSection from '../components/CategoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BrandsSection from '../components/BrandsSection';
import DonationSection from '../components/DonationSection';
import InstagramFeed from '../components/InstagramFeed';
const Homepage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <InstagramFeed />
      <BrandsSection />
      <DonationSection />
    </div>
  );
};

export default Homepage;
