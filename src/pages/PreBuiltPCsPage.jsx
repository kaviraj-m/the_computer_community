import React from 'react';
import HeroSection2 from '../components/HeroSection2';
import CategoryHighlights from '../components/CategoryHighlights';
import FilterAndPCSection from '../components/FilterAndPCSection';
import ComparisonHelper from '../components/ComparisonHelper';
import FeaturedBuilds from '../components/FeaturedBuilds';
import SupportSection from '../components/SupportSection';

const PreBuiltPCsPage = () => {
  return (
    <div style={{ backgroundColor: '#101010', color: '#fff', minHeight: '100vh' }}>
      <HeroSection2 />
      <CategoryHighlights />
      <FilterAndPCSection />
      <ComparisonHelper />
      <FeaturedBuilds />
      <SupportSection />
    </div>
  );
};

export default PreBuiltPCsPage;
