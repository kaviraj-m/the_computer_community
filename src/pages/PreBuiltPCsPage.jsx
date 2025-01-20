import React from 'react';
import HeroSection2 from '../components/HeroSection2';
import CategoryHighlights from '../components/CategoryHighlights';
import PreBuiltPCGrid from '../components/PreBuiltPCGrid';
import ComparisonHelper from '../components/ComparisonHelper';
import FilterAndSortBar from '../components/FilterAndSortBar';
import FeaturedBuilds from '../components/FeaturedBuilds';
import SupportSection from '../components/SupportSection';

const PreBuiltPCsPage = () => {
  return (
    <div style={{ backgroundColor: '#101010', color: '#fff', minHeight: '100vh' }}>
      <HeroSection2 />
      <CategoryHighlights />
      <FilterAndSortBar />
      <PreBuiltPCGrid />
      <ComparisonHelper />
      <FeaturedBuilds />
      <SupportSection />
    </div>
  );
};

export default PreBuiltPCsPage;
