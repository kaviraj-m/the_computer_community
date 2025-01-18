import React from 'react';

const FeaturesSection = () => {
  const sectionStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '50px 0',
    textAlign: 'center',
  };

  const featureStyle = {
    marginBottom: '30px',
  };

  const headingStyle = {
    color: 'gold',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Features</h2>
      <div className="features-list">
        {[
          { title: 'Component Compatibility Checks', description: 'Ensure every part works together seamlessly.' },
          { title: 'Dynamic Live Pricing', description: 'See your total cost update as you build.' },
          { title: 'Save & Share Builds', description: 'Easily share your configurations with friends.' },
        ].map((feature, index) => (
          <div key={index} style={featureStyle}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
