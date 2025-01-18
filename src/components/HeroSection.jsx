import React from 'react';

const HeroSection = () => {
  const sectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '50px 0',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'gold',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    color: 'black',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <section style={sectionStyle}>
      <h1>Build Your Dream PC, One Component at a Time</h1>
      <p>Choose the best components and create the perfect setup for gaming, productivity, or more.</p>
      <div>
        <button style={buttonStyle} onClick={() => window.location.href = '/build'}>Start Building Your PC</button>
        <button style={buttonStyle} onClick={() => window.location.href = '/pre-built'}>Explore Pre-Built PCs</button>
      </div>
    </section>
  );
};

export default HeroSection;
