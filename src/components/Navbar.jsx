import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">The Computer Community</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/build">Build Your PC</a></li>
        <li><a href="/pre-built">Pre-Built PCs</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
