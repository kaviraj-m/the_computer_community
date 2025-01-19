import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import BuildYourPCPage from './pages/BuildYourPCPage';  

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<BuildYourPCPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
