import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import BuildYourPCPage from './pages/BuildYourPCPage';
import PreBuiltPCsPage from './pages/PreBuiltPCsPage';
import AboutUs from './pages/AboutUs';
import ContactUsPage from './pages/ContactUsPage';

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<BuildYourPCPage />} />
          <Route path="/prebuilt" element={<PreBuiltPCsPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
