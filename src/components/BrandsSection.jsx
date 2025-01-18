import React from 'react';

const BrandsSection = () => {
  const sectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '50px 0',
    textAlign: 'center',
  };

  const brandLogoStyle = {
    display: 'inline-block',
    margin: '0 20px',
    padding: '10px',
    backgroundColor: 'gold',
    color: 'black',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: 'gold' }}>Trusted Brands</h2>
      <div className="brands-logos">
        {['Intel', 'AMD', 'NVIDIA', 'Corsair', 'Asus'].map((brand, index) => (
          <div key={index} style={brandLogoStyle}>{brand}</div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
