import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  };

  const linkStyle = {
    color: 'gold',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '16px',
  };

  const socialStyle = {
    margin: '10px',
    fontSize: '20px',
    color: 'gold',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/build" style={linkStyle}>Build Your PC</a>
        <a href="/pre-built" style={linkStyle}>Pre-Built PCs</a>
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/contact" style={linkStyle}>Contact Us</a>
      </div>
      <div style={{ marginTop: '10px' }}>
        <i style={socialStyle} className="fab fa-facebook-f"></i>
        <i style={socialStyle} className="fab fa-twitter"></i>
        <i style={socialStyle} className="fab fa-instagram"></i>
        <i style={socialStyle} className="fab fa-linkedin-in"></i>
      </div>
      <p style={{ marginTop: '10px', fontSize: '14px' }}>
        © 2025 The Computer Community. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;